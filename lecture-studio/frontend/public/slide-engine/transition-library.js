/**
 * TransitionLibrary - Slide-to-slide transition effects
 * Each transition takes (containerEl, outSlideEl, inSlideEl, progress 0-1)
 */
class TransitionLibrary {
  /**
   * Apply transition at a given progress (0 to 1)
   * @param {string} type - TransitionType
   * @param {HTMLElement} container
   * @param {HTMLElement|null} outSlide - leaving slide element
   * @param {HTMLElement} inSlide - entering slide element
   * @param {number} progress - 0 (start) to 1 (complete)
   */
  static apply(type, container, outSlide, inSlide, progress) {
    const fn = TransitionLibrary._transitions[type] || TransitionLibrary._transitions.fade;
    fn(container, outSlide, inSlide, progress);
  }

  static _transitions = {
    none(container, outSlide, inSlide, progress) {
      if (outSlide) outSlide.style.opacity = progress < 1 ? '1' : '0';
      inSlide.style.opacity = progress < 1 ? '0' : '1';
    },

    fade(container, outSlide, inSlide, progress) {
      if (outSlide) outSlide.style.opacity = String(1 - progress);
      inSlide.style.opacity = String(progress);
    },

    'slide-left'(container, outSlide, inSlide, progress) {
      if (outSlide) outSlide.style.transform = `translateX(${-progress * 100}%)`;
      inSlide.style.transform = `translateX(${(1 - progress) * 100}%)`;
    },

    'slide-right'(container, outSlide, inSlide, progress) {
      if (outSlide) outSlide.style.transform = `translateX(${progress * 100}%)`;
      inSlide.style.transform = `translateX(${-(1 - progress) * 100}%)`;
    },

    'slide-up'(container, outSlide, inSlide, progress) {
      if (outSlide) outSlide.style.transform = `translateY(${-progress * 100}%)`;
      inSlide.style.transform = `translateY(${(1 - progress) * 100}%)`;
    },

    'wipe-left'(container, outSlide, inSlide, progress) {
      inSlide.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
      if (outSlide) outSlide.style.clipPath = 'inset(0 0 0 0)';
    },

    'wipe-right'(container, outSlide, inSlide, progress) {
      inSlide.style.clipPath = `inset(0 0 0 ${(1 - progress) * 100}%)`;
      if (outSlide) outSlide.style.clipPath = 'inset(0 0 0 0)';
    },

    scale(container, outSlide, inSlide, progress) {
      if (outSlide) {
        outSlide.style.transform = `scale(${1 - progress * 0.2})`;
        outSlide.style.opacity = String(1 - progress);
      }
      inSlide.style.transform = `scale(${0.8 + progress * 0.2})`;
      inSlide.style.opacity = String(progress);
    },

    dissolve(container, outSlide, inSlide, progress) {
      if (outSlide) {
        outSlide.style.opacity = String(1 - progress);
        outSlide.style.filter = `blur(${progress * 4}px)`;
      }
      inSlide.style.opacity = String(progress);
      inSlide.style.filter = `blur(${(1 - progress) * 4}px)`;
    },

    morph(container, outSlide, inSlide, progress) {
      // Simplified morph: crossfade with slight scale
      if (outSlide) {
        outSlide.style.opacity = String(1 - progress);
        outSlide.style.transform = `scale(${1 + progress * 0.05})`;
      }
      inSlide.style.opacity = String(progress);
      inSlide.style.transform = `scale(${1.05 - progress * 0.05})`;
    },
  };
}
