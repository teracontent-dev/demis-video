import { create } from 'zustand';
import type { Project, Slide, Timeline, TipTapDocument } from '../types/project';

interface ProjectSnapshot {
  slides: Slide[];
  script: TipTapDocument;
  timeline: Timeline;
}

interface ProjectStore {
  project: Project | null;
  isDirty: boolean;

  // CRUD
  loadProject: (id: string) => Promise<void>;
  createProject: (title?: string) => Promise<void>;
  saveProject: () => Promise<void>;
  updateSettings: (settings: Partial<Project['settings']>) => void;

  // Slides
  setSlides: (slides: Slide[]) => void;
  updateSlide: (index: number, patch: Partial<Slide>) => void;
  addSlide: (slide?: Partial<Slide>) => void;
  deleteSlide: (index: number) => void;
  duplicateSlide: (index: number) => void;
  reorderSlides: (from: number, to: number) => void;

  // Script
  setScript: (doc: TipTapDocument) => void;

  // Timeline
  updateTimeline: (timeline: Partial<Timeline>) => void;

  // Undo/Redo
  undoStack: ProjectSnapshot[];
  redoStack: ProjectSnapshot[];
  pushUndo: () => void;
  undo: () => void;
  redo: () => void;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const useProjectStore = create<ProjectStore>((set, get) => ({
  project: null,
  isDirty: false,
  undoStack: [],
  redoStack: [],

  loadProject: async (id: string) => {
    const res = await fetch(`${API_BASE}/projects/${id}`);
    if (!res.ok) throw new Error('프로젝트를 불러올 수 없어요');
    const project = await res.json();
    set({ project, isDirty: false, undoStack: [], redoStack: [] });
  },

  createProject: async (title = '새 프로젝트') => {
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) throw new Error('프로젝트를 만들 수 없어요');
    const project = await res.json();
    set({ project, isDirty: false, undoStack: [], redoStack: [] });
  },

  saveProject: async () => {
    const { project } = get();
    if (!project) return;

    // 서버의 narration/timeline을 덮어쓰지 않도록 보존
    // zustand에 narration이 없으면 서버에서 가져와서 merge
    let dataToSave = { ...project } as any;
    if (!dataToSave.narration) {
      try {
        const serverRes = await fetch(`${API_BASE}/projects/${project.id}`);
        if (serverRes.ok) {
          const serverData = await serverRes.json();
          if (serverData.narration) {
            dataToSave.narration = serverData.narration;
            dataToSave.timeline = serverData.timeline;
          }
        }
      } catch {}
    }

    const res = await fetch(`${API_BASE}/projects/${project.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSave),
    });
    if (!res.ok) throw new Error('저장에 실패했어요');
    set({ isDirty: false });
  },

  updateSettings: (settings) => {
    const { project } = get();
    if (!project) return;
    set({
      project: {
        ...project,
        settings: { ...project.settings, ...settings },
      },
      isDirty: true,
    });
  },

  setSlides: (slides) => {
    const { project } = get();
    if (!project) return;
    set({ project: { ...project, slides }, isDirty: true });
  },

  updateSlide: (index, patch) => {
    const { project } = get();
    if (!project) return;
    const slides = [...project.slides];
    slides[index] = { ...slides[index], ...patch };
    set({ project: { ...project, slides }, isDirty: true });
  },

  addSlide: (partial) => {
    const { project } = get();
    if (!project) return;
    const newSlide: Slide = {
      id: crypto.randomUUID(),
      order: project.slides.length,
      duration: 5000,
      background: { type: 'solid', value: '#FFFFFF' },
      elements: [],
      transition: { type: 'fade', duration: 500, easing: 'ease-out' },
      notes: '',
      ...partial,
    };
    set({
      project: { ...project, slides: [...project.slides, newSlide] },
      isDirty: true,
    });
  },

  deleteSlide: (index) => {
    const { project } = get();
    if (!project) return;
    const slides = project.slides.filter((_, i) => i !== index);
    slides.forEach((s, i) => (s.order = i));
    set({ project: { ...project, slides }, isDirty: true });
  },

  duplicateSlide: (index) => {
    const { project } = get();
    if (!project || index < 0 || index >= project.slides.length) return;
    const source = project.slides[index];
    const cloned: Slide = JSON.parse(JSON.stringify(source));
    cloned.id = crypto.randomUUID();
    cloned.elements = cloned.elements.map((el) => ({
      ...el,
      id: crypto.randomUUID(),
    }));
    const slides = [...project.slides];
    slides.splice(index + 1, 0, cloned);
    slides.forEach((s, i) => (s.order = i));
    set({ project: { ...project, slides }, isDirty: true });
  },

  reorderSlides: (from, to) => {
    const { project } = get();
    if (!project) return;
    const slides = [...project.slides];
    const [moved] = slides.splice(from, 1);
    slides.splice(to, 0, moved);
    slides.forEach((s, i) => (s.order = i));
    set({ project: { ...project, slides }, isDirty: true });
  },

  setScript: (doc) => {
    const { project } = get();
    if (!project) return;
    set({ project: { ...project, script: doc }, isDirty: true });
  },

  updateTimeline: (timeline) => {
    const { project } = get();
    if (!project) return;
    set({
      project: {
        ...project,
        timeline: { ...project.timeline, ...timeline },
      },
      isDirty: true,
    });
  },

  pushUndo: () => {
    const { project, undoStack } = get();
    if (!project) return;
    const snapshot: ProjectSnapshot = {
      slides: JSON.parse(JSON.stringify(project.slides)),
      script: JSON.parse(JSON.stringify(project.script)),
      timeline: JSON.parse(JSON.stringify(project.timeline)),
    };
    set({ undoStack: [...undoStack, snapshot], redoStack: [] });
  },

  undo: () => {
    const { project, undoStack, redoStack } = get();
    if (!project || undoStack.length === 0) return;
    const current: ProjectSnapshot = {
      slides: JSON.parse(JSON.stringify(project.slides)),
      script: JSON.parse(JSON.stringify(project.script)),
      timeline: JSON.parse(JSON.stringify(project.timeline)),
    };
    const prev = undoStack[undoStack.length - 1];
    set({
      project: {
        ...project,
        slides: prev.slides,
        script: prev.script,
        timeline: prev.timeline,
      },
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack, current],
      isDirty: true,
    });
  },

  redo: () => {
    const { project, undoStack, redoStack } = get();
    if (!project || redoStack.length === 0) return;
    const current: ProjectSnapshot = {
      slides: JSON.parse(JSON.stringify(project.slides)),
      script: JSON.parse(JSON.stringify(project.script)),
      timeline: JSON.parse(JSON.stringify(project.timeline)),
    };
    const next = redoStack[redoStack.length - 1];
    set({
      project: {
        ...project,
        slides: next.slides,
        script: next.script,
        timeline: next.timeline,
      },
      undoStack: [...undoStack, current],
      redoStack: redoStack.slice(0, -1),
      isDirty: true,
    });
  },
}));
