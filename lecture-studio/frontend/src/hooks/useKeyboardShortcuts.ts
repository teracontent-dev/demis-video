import { useEffect } from 'react';
import { useProjectStore } from '../stores/projectStore';
import { useUIStore } from '../stores/uiStore';

/** Returns true when the active element is a text input, textarea, or contenteditable. */
const isTextInput = (): boolean => {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  if (tag === 'input' || tag === 'textarea') return true;
  if ((el as HTMLElement).isContentEditable) return true;
  return false;
};

export const useKeyboardShortcuts = () => {
  const undo = useProjectStore((s) => s.undo);
  const redo = useProjectStore((s) => s.redo);
  const saveProject = useProjectStore((s) => s.saveProject);
  const deleteSlide = useProjectStore((s) => s.deleteSlide);
  const duplicateSlide = useProjectStore((s) => s.duplicateSlide);
  const pushUndo = useProjectStore((s) => s.pushUndo);
  const toggleRightPanel = useUIStore((s) => s.toggleRightPanel);
  const toggleTimeline = useUIStore((s) => s.toggleTimeline);
  const setPlaying = useUIStore((s) => s.setPlaying);
  const setSelectedElement = useUIStore((s) => s.setSelectedElement);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;

      // --- Modifier shortcuts (always active) ---
      if (mod) {
        switch (e.key.toLowerCase()) {
          case 'z':
            e.preventDefault();
            if (e.shiftKey) {
              redo();
            } else {
              undo();
            }
            return;
          case 's':
            e.preventDefault();
            saveProject().catch(console.error);
            return;
          case 'd':
            e.preventDefault();
            {
              const idx = useUIStore.getState().selectedSlideIndex;
              pushUndo();
              duplicateSlide(idx);
            }
            return;
          case 'enter':
            // Ctrl+Enter: trigger chat send by dispatching a custom event
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('chat:send'));
            return;
          case 'b':
            e.preventDefault();
            toggleRightPanel();
            return;
          case 'j':
            e.preventDefault();
            toggleTimeline();
            return;
        }
        return;
      }

      // --- Non-modifier shortcuts (skip when typing) ---
      if (isTextInput()) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          setPlaying(!useUIStore.getState().isPlaying);
          break;
        case 'Delete':
        case 'Backspace': {
          e.preventDefault();
          const { selectedElementId } = useUIStore.getState();
          if (selectedElementId) {
            // Deselect the element (element deletion can be handled by canvas)
            setSelectedElement(null);
          } else {
            const slides = useProjectStore.getState().project?.slides;
            const idx = useUIStore.getState().selectedSlideIndex;
            if (slides && slides.length > 1) {
              pushUndo();
              deleteSlide(idx);
              const newIdx = Math.min(idx, slides.length - 2);
              useUIStore.getState().setSelectedSlide(newIdx);
            }
          }
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          const idx = useUIStore.getState().selectedSlideIndex;
          if (idx > 0) useUIStore.getState().setSelectedSlide(idx - 1);
          break;
        }
        case 'ArrowRight': {
          e.preventDefault();
          const slides = useProjectStore.getState().project?.slides;
          const idx = useUIStore.getState().selectedSlideIndex;
          if (slides && idx < slides.length - 1) {
            useUIStore.getState().setSelectedSlide(idx + 1);
          }
          break;
        }
        case 'Escape':
          e.preventDefault();
          {
            const { selectedElementId } = useUIStore.getState();
            if (selectedElementId) {
              setSelectedElement(null);
            }
            // Escape는 요소 선택 해제만. 패널은 닫지 않음.
          }
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('preview:fullscreen'));
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [
    undo, redo, saveProject, deleteSlide, duplicateSlide, pushUndo,
    toggleRightPanel, toggleTimeline, setPlaying, setSelectedElement,
  ]);
};
