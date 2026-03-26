/**
 * SceneManager - Manages which slide is active and handles transitions between slides
 */
class SceneManager {
  constructor(container) {
    this.container = container;
    this.slides = [];
    this.currentSlideIndex = -1;
    this._slideElements = new Map(); // slideIndex -> DOM element
    this._activeAnimations = [];
    this._lastRenderedIndex = -1;
    this._lastWasTransition = false;
  }

  setSlides(slides) {
    this.slides = slides;
    this._slideElements.clear();
    this.currentSlideIndex = -1;
    this._lastRenderedIndex = -1;
    this._lastWasTransition = false;
  }

  /**
   * Get which slide should be showing at a given time
   * @returns {{ slideIndex, localTime, inTransition, transitionProgress }}
   */
  getSlideAtTime(timeMs) {
    let accumulated = 0;

    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i];
      const slideEnd = accumulated + slide.duration;

      if (timeMs < slideEnd || i === this.slides.length - 1) {
        const localTime = timeMs - accumulated;
        const transition = slide.transition || { type: 'none', duration: 0 };
        const inTransition = localTime < transition.duration && i > 0;
        const transitionProgress = inTransition
          ? localTime / transition.duration
          : 1;

        return {
          slideIndex: i,
          localTime,
          inTransition,
          transitionProgress,
          prevSlideIndex: inTransition ? i - 1 : -1,
        };
      }

      accumulated = slideEnd;
    }

    return { slideIndex: 0, localTime: 0, inTransition: false, transitionProgress: 1, prevSlideIndex: -1 };
  }

  /**
   * Render a specific slide to a DOM element
   */
  renderSlide(slideIndex) {
    if (this._slideElements.has(slideIndex)) {
      return this._slideElements.get(slideIndex);
    }

    const slide = this.slides[slideIndex];
    if (!slide) return null;

    const el = document.createElement('div');
    el.style.cssText = `
      position: absolute;
      inset: 0;
      width: 1920px;
      height: 1080px;
      overflow: hidden;
    `;

    // Background
    if (slide.background) {
      switch (slide.background.type) {
        case 'solid':
          el.style.background = slide.background.value;
          break;
        case 'gradient':
          el.style.background = slide.background.value;
          break;
        case 'image':
          el.style.backgroundImage = `url(${slide.background.value})`;
          el.style.backgroundSize = 'cover';
          el.style.backgroundPosition = 'center';
          break;
      }
    }

    // Elements
    if (slide.elements) {
      slide.elements.forEach((element) => {
        const domEl = ElementRenderer.createElement(element);
        el.appendChild(domEl);
      });
    }

    this._slideElements.set(slideIndex, el);
    return el;
  }

  /**
   * Render the scene at a given time, handling transitions
   */
  renderAtTime(timeMs) {
    const info = this.getSlideAtTime(timeMs);

    // Skip full re-render if same slide and not in transition
    if (
      info.slideIndex === this._lastRenderedIndex &&
      !info.inTransition &&
      !this._lastWasTransition
    ) {
      // Just update animation seek positions
      return info;
    }

    this._lastRenderedIndex = info.slideIndex;
    this._lastWasTransition = info.inTransition;

    // Clear container
    this.container.innerHTML = '';
    this._cleanupAnimations();

    // Render current slide
    const currentEl = this.renderSlide(info.slideIndex);
    if (!currentEl) return info;

    if (info.inTransition && info.prevSlideIndex >= 0) {
      // During transition: show both slides
      const prevEl = this.renderSlide(info.prevSlideIndex);
      if (prevEl) {
        this.container.appendChild(prevEl.cloneNode(true));
      }
      const currentClone = currentEl.cloneNode(true);
      this.container.appendChild(currentClone);

      const transition = this.slides[info.slideIndex].transition;
      TransitionLibrary.apply(
        transition.type,
        this.container,
        this.container.children[0],
        this.container.children[1],
        info.transitionProgress
      );
    } else {
      // Normal: show single slide
      this.container.appendChild(currentEl.cloneNode(true));

      // Apply enter animations if slide just started
      const slide = this.slides[info.slideIndex];
      if (slide && slide.elements) {
        const slideEl = this.container.children[0];
        slide.elements.forEach((element, idx) => {
          const domEl = slideEl?.children[idx];
          if (domEl && element.animation?.enter) {
            const anim = AnimationSystem.applyEnter(domEl, element.animation.enter);
            if (anim) {
              // Seek to correct time within the slide
              const animStart = (element.animation.enter.delay || 0);
              const animTime = info.localTime - animStart;
              if (animTime >= 0) {
                AnimationSystem.seekAnimation(anim, animTime);
              } else {
                anim.cancel();
                domEl.style.opacity = '0';
              }
              this._activeAnimations.push(anim);
            }
          }
        });
      }
    }

    this.currentSlideIndex = info.slideIndex;
    return info;
  }

  _cleanupAnimations() {
    this._activeAnimations.forEach((a) => {
      try { a.cancel(); } catch (e) {}
    });
    this._activeAnimations = [];
  }

  /**
   * Invalidate cached slide elements (call when slides are updated)
   */
  invalidate() {
    this._slideElements.clear();
    this._cleanupAnimations();
    this._lastRenderedIndex = -1;
    this._lastWasTransition = false;
  }
}
