import { create } from 'zustand';
import type { ChatMessage } from '../types/project';
import { useProjectStore } from './projectStore';
import { useUIStore } from './uiStore';

interface ChatStore {
  messages: ChatMessage[];
  isLoading: boolean;
  thinkingText: string;
  streamingText: string;
  thinkingEnabled: boolean;
  toggleThinking: () => void;
  sendMessage: (content: string) => Promise<void>;
  undoLastChange: (messageId: string) => void;
  clearMessages: () => void;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  isLoading: false,
  thinkingText: '',
  thinkingEnabled: false,
  toggleThinking: () => set((s) => ({ thinkingEnabled: !s.thinkingEnabled })),
  streamingText: '',

  sendMessage: async (content: string) => {
    const projectStore = useProjectStore.getState();
    const project = projectStore.project;
    if (!project) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };

    set((s) => ({
      messages: [...s.messages, userMsg],
      isLoading: true,
      thinkingText: '',
      streamingText: '',
    }));

    try {
      const hasSlides = project.slides && project.slides.length > 0;
      const endpoint = hasSlides ? '/ai/chat-edit/stream' : '/ai/generate-slides/stream';

      const { thinkingEnabled } = get();
      const body = hasSlides
        ? {
            project_id: project.id,
            message: content,
            thinking: thinkingEnabled,
            context: {
              current_slides: project.slides,
              selected_slide_index: null,
              chat_history: get().messages.slice(-10).map((m) => ({
                role: m.role,
                content: m.content,
              })),
            },
          }
        : {
            script_text: content,
            style_preset: 'modern',
            thinking: thinkingEnabled,
          };

      // Direct to backend for SSE streaming (avoids Vite proxy buffering)
      const res = await fetch(`http://localhost:8000/api${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(await res.text() || 'AI 응답 실패');
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error('스트림을 읽을 수 없어요');

      const decoder = new TextDecoder();
      let buffer = '';
      let isThinking = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Process remaining buffer
          if (buffer.trim()) {
            const remaining = buffer.split('\n');
            for (const line of remaining) {
              if (!line.startsWith('data: ')) continue;
              const data = line.slice(6).trim();
              if (data === '[DONE]') continue;
              try {
                const event = JSON.parse(data);
                if (event.type === 'result') {
                  const pStore = useProjectStore.getState();
                  pStore.pushUndo();
                  const cur = [...(pStore.project?.slides || [])];
                  if (event.changed_slides) {
                    let fc = -1;
                    for (const [k, v] of Object.entries(event.changed_slides)) {
                      const idx = parseInt(k);
                      if (idx >= 0 && idx < cur.length && v) { cur[idx] = v as any; if (fc < 0) fc = idx; }
                    }
                    pStore.setSlides(cur);
                    if (fc >= 0) useUIStore.getState().setSelectedSlide(fc);
                  }
                  if (event.new_slides?.length) {
                    const ni = cur.length;
                    const withNew = [...cur, ...event.new_slides];
                    withNew.forEach((s: any, i: number) => (s.order = i));
                    pStore.setSlides(withNew);
                    useUIStore.getState().setSelectedSlide(ni);
                  }
                  if (event.updated_slides?.length) pStore.setSlides(event.updated_slides);
                  else if (event.slides?.length) pStore.setSlides(event.slides);
                  const aiMsg: ChatMessage = {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    content: event.ai_message || '완료했어요.',
                    timestamp: new Date().toISOString(),
                  };
                  set((s) => ({ messages: [...s.messages, aiMsg], isLoading: false, thinkingText: '', streamingText: '' }));
                } else if (event.type === 'error') {
                  const errMsg: ChatMessage = { id: crypto.randomUUID(), role: 'assistant', content: `오류: ${event.message}`, timestamp: new Date().toISOString() };
                  set((s) => ({ messages: [...s.messages, errMsg], isLoading: false, thinkingText: '', streamingText: '' }));
                }
              } catch {}
            }
          }
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;

          try {
            const event = JSON.parse(data);

            switch (event.type) {
              case 'thinking_start':
                isThinking = true;
                set({ thinkingText: '' });
                break;
              case 'thinking':
                set((s) => ({ thinkingText: s.thinkingText + event.content }));
                break;
              case 'text_start':
                isThinking = false;
                set({ streamingText: '' });
                break;
              case 'text':
                set((s) => ({ streamingText: s.streamingText + event.content }));
                break;
              case 'block_stop':
                break;
              case 'result': {
                projectStore.pushUndo();
                const currentSlides = [...(useProjectStore.getState().project?.slides || [])];

                // Handle new format: changed_slides, new_slides, delete_indices
                if (event.changed_slides) {
                  let firstChanged = -1;
                  for (const [idxStr, slide] of Object.entries(event.changed_slides)) {
                    const idx = parseInt(idxStr);
                    if (idx >= 0 && idx < currentSlides.length && slide) {
                      currentSlides[idx] = slide as any;
                      if (firstChanged < 0) firstChanged = idx;
                    }
                  }
                  projectStore.setSlides(currentSlides);
                  if (firstChanged >= 0) useUIStore.getState().setSelectedSlide(firstChanged);
                }

                if (event.new_slides?.length) {
                  const newStartIndex = currentSlides.length;
                  const withNew = [...currentSlides, ...event.new_slides];
                  withNew.forEach((s: any, i: number) => (s.order = i));
                  projectStore.setSlides(withNew);
                  // Auto-select the first new slide
                  useUIStore.getState().setSelectedSlide(newStartIndex);
                }

                if (event.delete_indices?.length) {
                  const filtered = currentSlides.filter((_: any, i: number) => !event.delete_indices.includes(i));
                  filtered.forEach((s: any, i: number) => (s.order = i));
                  projectStore.setSlides(filtered);
                }

                // Backward compat: updated_slides (full array) or slides (generate)
                if (event.updated_slides?.length) {
                  projectStore.setSlides(event.updated_slides);
                } else if (event.slides?.length) {
                  projectStore.setSlides(event.slides);
                }

                const aiMsg: ChatMessage = {
                  id: crypto.randomUUID(),
                  role: 'assistant',
                  content: event.ai_message || '완료했어요.',
                  timestamp: new Date().toISOString(),
                };
                set((s) => ({
                  messages: [...s.messages, aiMsg],
                  isLoading: false,
                  thinkingText: '',
                  streamingText: '',
                }));
                break;
              }
              case 'error': {
                const errMsg: ChatMessage = {
                  id: crypto.randomUUID(),
                  role: 'assistant',
                  content: `오류: ${event.message}`,
                  timestamp: new Date().toISOString(),
                };
                set((s) => ({
                  messages: [...s.messages, errMsg],
                  isLoading: false,
                  thinkingText: '',
                  streamingText: '',
                }));
                break;
              }
            }
          } catch {
            // Skip unparseable lines
          }
        }
      }

      // If we never got a result event, finalize
      const { isLoading } = get();
      if (isLoading) {
        set({ isLoading: false, thinkingText: '', streamingText: '' });
      }
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `오류가 발생했어요: ${err instanceof Error ? err.message : '알 수 없는 오류'}`,
        timestamp: new Date().toISOString(),
      };
      set((s) => ({
        messages: [...s.messages, errorMsg],
        isLoading: false,
        thinkingText: '',
        streamingText: '',
      }));
    }
  },

  undoLastChange: (messageId: string) => {
    const msg = get().messages.find((m) => m.id === messageId);
    if (!msg?.slideChanges?.previousState) return;
    useProjectStore.getState().setSlides(msg.slideChanges.previousState);
  },

  clearMessages: () => set({ messages: [], thinkingText: '', streamingText: '' }),
}));
