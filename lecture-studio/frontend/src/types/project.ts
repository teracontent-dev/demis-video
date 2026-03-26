// === 프로젝트 최상위 ===
export interface Project {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  settings: ProjectSettings;
  script: TipTapDocument;
  slides: Slide[];
  timeline: Timeline;
  narration?: Narration;
  chatHistory: ChatMessage[];
}

export interface ProjectSettings {
  resolution: [1920, 1080];
  fps: 30;
  fontFamily: "Pretendard Variable";
  exportPreset: "draft" | "standard" | "high" | "ultra";
}

// TipTap JSON document type
export interface TipTapDocument {
  type: "doc";
  content: TipTapNode[];
}

export interface TipTapNode {
  type: string;
  attrs?: Record<string, any>;
  content?: TipTapNode[];
  marks?: TipTapMark[];
  text?: string;
}

export interface TipTapMark {
  type: string;
  attrs?: Record<string, any>;
}

// === 슬라이드 ===
export interface Slide {
  id: string;
  order: number;
  duration: number; // ms
  background: {
    type: "solid" | "gradient" | "image";
    value: string;
  };
  elements: SlideElement[];
  transition: {
    type: TransitionType;
    duration: number; // ms
    easing: string;
  };
  notes: string;
}

export interface SlideElement {
  id: string;
  type: "text" | "image" | "video" | "shape";
  position: { x: number; y: number; width: number; height: number };
  rotation: number;
  opacity: number;
  zIndex: number;
  style: Record<string, any>;
  content: string | MediaRef;
  animation: {
    enter: AnimationConfig;
    exit?: AnimationConfig;
    emphasis?: AnimationConfig;
  };
}

export interface AnimationConfig {
  type: string;
  duration: number; // ms
  delay: number; // ms
  easing: string;
}

export type TransitionType =
  | "none" | "fade" | "slide-left" | "slide-right" | "slide-up"
  | "wipe-left" | "wipe-right" | "scale" | "dissolve" | "morph";

// === 타임라인 ===
export interface Timeline {
  totalDuration: number; // ms
  audioTracks: AudioTrack[];
  subtitleTrack: SubtitleCue[];
}

export interface AudioTrack {
  id: string;
  type: "tts" | "bgm" | "recording";
  src: string;
  startTime: number; // ms
  duration: number;
  volume: number; // 0~1
}

export interface SubtitleCue {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  slideIndex?: number;
}

// === 내레이션 ===
export interface SlideNarration {
  slideIndex: number;
  text: string;
  startTime: number;
  endTime: number;
  audioFile?: string;
}

export interface Narration {
  voiceId: string;
  modelId: string;
  segments: SlideNarration[];
  audioUrl?: string;
  subtitles: SubtitleCue[];
  generatedAt?: string;
}

// === AI 채팅 ===
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  slideChanges?: {
    changedIndices: number[];
    previousState: Slide[];
    diff: Record<string, any>;
  };
}

// === 미디어 참조 ===
export interface MediaRef {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  originalName: string;
}
