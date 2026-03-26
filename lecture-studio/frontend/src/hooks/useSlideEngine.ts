import { useEffect, useRef, useCallback } from 'react';
import { useProjectStore } from '../stores/projectStore';
import { useUIStore } from '../stores/uiStore';

export const useSlideEngine = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const project = useProjectStore((s) => s.project);
  const slides = useProjectStore((s) => s.project?.slides);
  const isPlaying = useUIStore((s) => s.isPlaying);
  const setCurrentTime = useUIStore((s) => s.setCurrentTime);
  const setPlaying = useUIStore((s) => s.setPlaying);

  // Send message to iframe
  const postToEngine = useCallback((type: string, payload?: any) => {
    iframeRef.current?.contentWindow?.postMessage({ type, payload }, '*');
  }, []);

  // Load project when it changes
  useEffect(() => {
    if (project) {
      postToEngine('LOAD_PROJECT', project);
    }
  }, [project?.id]); // Only on project load, not every change

  // Update slides when they change
  useEffect(() => {
    if (slides) {
      postToEngine('UPDATE_SLIDES', slides);
    }
  }, [slides, postToEngine]);

  // Play/pause
  useEffect(() => {
    postToEngine(isPlaying ? 'PLAY' : 'PAUSE');
  }, [isPlaying, postToEngine]);

  // Listen for messages from engine
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      const { type, payload } = event.data || {};
      switch (type) {
        case 'TIME_UPDATE':
          setCurrentTime(payload.currentTime);
          break;
        case 'PLAYBACK_END':
          setPlaying(false);
          break;
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [setCurrentTime, setPlaying]);

  const seek = useCallback((timeMs: number) => {
    postToEngine('SEEK', { timeMs });
    setCurrentTime(timeMs);
  }, [postToEngine, setCurrentTime]);

  return { iframeRef, postToEngine, seek };
};
