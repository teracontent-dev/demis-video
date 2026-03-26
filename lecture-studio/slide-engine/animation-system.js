/**
 * AnimationSystem - Drives enter/exit/emphasis animations using Web Animations API
 */
class AnimationSystem {
  /**
   * Apply enter animation to an element
   * @param {HTMLElement} domElement
   * @param {Object} config - AnimationConfig { type, duration, delay, easing }
   * @returns {Animation|Animation[]|null}
   */
  static applyEnter(domElement, config) {
    if (!config || config.type === 'none') return null;

    // Special animation types that need custom handling
    if (config.type === 'wordReveal') {
      return AnimationSystem._applyWordReveal(domElement, config);
    }
    if (config.type === 'countUp') {
      return AnimationSystem._applyCountUp(domElement, config);
    }
    if (config.type === 'typewriter') {
      return AnimationSystem._applyTypewriter(domElement, config);
    }

    const keyframes = AnimationSystem._getEnterKeyframes(config.type);
    if (!keyframes) return null;

    return domElement.animate(keyframes, {
      duration: config.duration || 500,
      delay: config.delay || 0,
      easing: config.easing || 'ease-out',
      fill: 'forwards',
    });
  }

  /**
   * Apply exit animation to an element
   */
  static applyExit(domElement, config) {
    if (!config || config.type === 'none') return null;

    const keyframes = AnimationSystem._getExitKeyframes(config.type);
    if (!keyframes) return null;

    return domElement.animate(keyframes, {
      duration: config.duration || 500,
      delay: config.delay || 0,
      easing: config.easing || 'ease-in',
      fill: 'forwards',
    });
  }

  /**
   * Seek animation to a specific time (for Puppeteer frame-by-frame)
   */
  static seekAnimation(animation, timeMs) {
    if (!animation) return;
    if (Array.isArray(animation)) {
      animation.forEach((a) => {
        if (a) {
          a.currentTime = timeMs;
          a.pause();
        }
      });
    } else {
      animation.currentTime = timeMs;
      animation.pause();
    }
  }

  /**
   * Word-by-word reveal animation
   * Splits text into word spans and fades each in with staggered delay
   */
  static _applyWordReveal(domElement, config) {
    const words = domElement.querySelectorAll('.word');
    if (!words.length) {
      // Fallback: wrap text content in word spans
      const text = domElement.textContent || '';
      const parts = text.split(/(\s+)/);
      domElement.textContent = '';
      parts.forEach((part) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = part;
        span.style.display = 'inline';
        domElement.appendChild(span);
      });
    }

    const wordEls = domElement.querySelectorAll('.word');
    const totalDuration = config.duration || 1000;
    const wordCount = wordEls.length;
    const stagger = wordCount > 1 ? totalDuration / (wordCount * 1.5) : totalDuration;
    const perWordDuration = Math.max(stagger, 150);

    const animations = [];
    wordEls.forEach((word, i) => {
      // Start hidden
      word.style.opacity = '0';
      const anim = word.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: perWordDuration,
          delay: (config.delay || 0) + i * stagger,
          easing: config.easing || 'ease-out',
          fill: 'forwards',
        }
      );
      animations.push(anim);
    });

    return animations;
  }

  /**
   * Count-up number animation
   * Animates a number from 0 (or startValue) to the target value
   */
  static _applyCountUp(domElement, config) {
    const target = parseFloat(domElement.dataset.countTarget || domElement.textContent) || 0;
    const decimals = parseInt(domElement.dataset.countDecimals || '0', 10);
    const duration = config.duration || 1000;
    const delay = config.delay || 0;
    const startValue = parseFloat(config.startValue) || 0;

    let startTime = null;
    let animFrameId = null;

    const textEl = domElement.querySelector('div') || domElement;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime - delay;

      if (elapsed < 0) {
        textEl.textContent = startValue.toFixed(decimals);
        animFrameId = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (target - startValue) * eased;
      textEl.textContent = current.toFixed(decimals);

      if (progress < 1) {
        animFrameId = requestAnimationFrame(step);
      } else {
        textEl.textContent = target.toFixed(decimals);
      }
    };

    animFrameId = requestAnimationFrame(step);

    // Return a pseudo-animation object for seekability
    return {
      cancel: () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
      },
      currentTime: 0,
      pause: () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
      },
    };
  }

  /**
   * Character-by-character typewriter animation
   * Wraps each character in a span and reveals them sequentially
   */
  static _applyTypewriter(domElement, config) {
    const textEl = domElement.querySelector('div') || domElement;
    const fullText = textEl.textContent || '';
    const duration = config.duration || fullText.length * 50;
    const delay = config.delay || 0;
    const charDelay = duration / Math.max(fullText.length, 1);

    // Clear and re-build with character spans
    textEl.textContent = '';
    const chars = [];
    for (let i = 0; i < fullText.length; i++) {
      const span = document.createElement('span');
      span.textContent = fullText[i];
      span.style.opacity = '0';
      span.style.display = 'inline';
      textEl.appendChild(span);
      chars.push(span);
    }

    // Animate each character
    const animations = chars.map((span, i) =>
      span.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        {
          duration: 1, // Nearly instant reveal
          delay: delay + i * charDelay,
          fill: 'forwards',
        }
      )
    );

    // Add blinking cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    cursor.style.cssText = 'display:inline;animation:blink 0.7s step-end infinite;';
    textEl.appendChild(cursor);

    // Remove cursor after animation completes
    const totalTime = delay + fullText.length * charDelay + 500;
    setTimeout(() => {
      cursor.remove();
    }, totalTime);

    return animations;
  }

  static _getEnterKeyframes(type) {
    const keyframes = {
      fadeIn: [
        { opacity: 0 },
        { opacity: 1 },
      ],
      slideUp: [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      slideDown: [
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      slideLeft: [
        { opacity: 0, transform: 'translateX(40px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      slideRight: [
        { opacity: 0, transform: 'translateX(-40px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      scaleIn: [
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      bounceIn: [
        { opacity: 0, transform: 'scale(0.3)' },
        { opacity: 1, transform: 'scale(1.05)' },
        { opacity: 1, transform: 'scale(0.95)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      rotateIn: [
        { opacity: 0, transform: 'rotate(-90deg) scale(0.8)' },
        { opacity: 1, transform: 'rotate(0deg) scale(1)' },
      ],
      highlight: [
        { backgroundSize: '0% 100%' },
        { backgroundSize: '100% 100%' },
      ],
    };
    return keyframes[type] || keyframes.fadeIn;
  }

  static _getExitKeyframes(type) {
    const keyframes = {
      fadeOut: [
        { opacity: 1 },
        { opacity: 0 },
      ],
      slideUp: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-20px)' },
      ],
      slideDown: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(20px)' },
      ],
      scaleOut: [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.8)' },
      ],
      rotateOut: [
        { opacity: 1, transform: 'rotate(0deg) scale(1)' },
        { opacity: 0, transform: 'rotate(90deg) scale(0.8)' },
      ],
    };
    return keyframes[type] || keyframes.fadeOut;
  }
}
