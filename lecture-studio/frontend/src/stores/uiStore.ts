import { create } from 'zustand';

interface UIStore {
  selectedSlideIndex: number;
  selectedElementId: string | null;
  rightPanelTab: 'chat' | 'properties' | 'settings';
  rightPanelOpen: boolean;
  timelineOpen: boolean;
  isPlaying: boolean;
  currentTime: number;
  zoom: number;

  setSelectedSlide: (index: number) => void;
  setSelectedElement: (id: string | null) => void;
  setRightPanelTab: (tab: 'chat' | 'properties' | 'settings') => void;
  toggleRightPanel: () => void;
  toggleTimeline: () => void;
  setPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setZoom: (zoom: number) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  selectedSlideIndex: 0,
  selectedElementId: null,
  rightPanelTab: 'chat',
  rightPanelOpen: true,
  timelineOpen: true,
  isPlaying: false,
  currentTime: 0,
  zoom: 1,

  setSelectedSlide: (index) => set({ selectedSlideIndex: index, selectedElementId: null }),
  setSelectedElement: (id) => set({ selectedElementId: id }),
  setRightPanelTab: (tab) => set({ rightPanelTab: tab }),
  toggleRightPanel: () => set((s) => ({ rightPanelOpen: !s.rightPanelOpen })),
  toggleTimeline: () => set((s) => ({ timelineOpen: !s.timelineOpen })),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setZoom: (zoom) => set({ zoom }),
}));
