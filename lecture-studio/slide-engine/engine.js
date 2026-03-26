/**
 * SlideEngine - Main entry point
 * Exposes: loadProject, updateSlides, renderFrame, play, pause, seek, getCurrentTime,
 *          getSlideAtTime, getTotalDuration
 */
class SlideEngine {
  constructor(container, { width = 1920, height = 1080, fps = 30 } = {}) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.fps = fps;

    this.timeline = new TimelineController(fps);
    this.sceneManager = new SceneManager(container);

    this.project = null;
    this._totalDuration = 0;

    // Wire up timeline callbacks
    this.timeline.setCallbacks({
      onTick: (time) => this._onTick(time),
      onEnd: () => this._onEnd(),
    });
  }

  /**
   * Load a full project JSON
   */
  loadProject(projectJSON) {
    try {
      this.project = projectJSON;

      if (!projectJSON || !projectJSON.slides) {
        console.warn('[SlideEngine] Project has no slides');
        this.project = projectJSON || { slides: [] };
      }

      const slides = this.project.slides || [];
      this.sceneManager.setSlides(slides);

      // Calculate total duration
      this._totalDuration = slides.reduce(
        (sum, s) => sum + (s.duration || 5000), 0
      );
      this.timeline.setDuration(this._totalDuration);

      // Render first frame
      this.renderFrame(0);
    } catch (err) {
      console.error('[SlideEngine] Failed to load project:', err);
    }
  }

  /**
   * Update slides (from React editor via postMessage)
   */
  updateSlides(slides) {
    try {
      if (!Array.isArray(slides)) {
        console.warn('[SlideEngine] updateSlides called with non-array:', slides);
        return;
      }

      if (this.project) {
        this.project.slides = slides;
      }
      this.sceneManager.setSlides(slides);
      this.sceneManager.invalidate();

      this._totalDuration = slides.reduce((sum, s) => sum + (s.duration || 5000), 0);
      this.timeline.setDuration(this._totalDuration);

      // Re-render current frame
      this.renderFrame(this.timeline.getCurrentTime());
    } catch (err) {
      console.error('[SlideEngine] Failed to update slides:', err);
    }
  }

  /**
   * Render a single frame at the given time (for Puppeteer capture & preview)
   * This is the core API.
   */
  async renderFrame(timeMs) {
    try {
      const clampedTime = Math.max(0, Math.min(timeMs, this._totalDuration));
      this.timeline.currentTime = clampedTime;
      this.sceneManager.renderAtTime(clampedTime);

      // Wait for next frame to ensure DOM is painted
      await new Promise((resolve) => requestAnimationFrame(resolve));
    } catch (err) {
      console.error('[SlideEngine] Failed to render frame at', timeMs, ':', err);
    }
  }

  play() {
    this.timeline.play();
  }

  pause() {
    this.timeline.pause();
  }

  seek(timeMs) {
    const clampedTime = Math.max(0, Math.min(timeMs, this._totalDuration));
    this.timeline.seek(clampedTime);
    this.sceneManager.renderAtTime(clampedTime);
  }

  getCurrentTime() {
    return this.timeline.getCurrentTime();
  }

  /**
   * Get the total duration of all slides combined (in ms)
   * @returns {number}
   */
  getTotalDuration() {
    return this._totalDuration;
  }

  /**
   * Given a global time (ms), return which slide is active and the local time within it
   * @param {number} timeMs - Global timeline position in ms
   * @returns {{ slideIndex: number, localTime: number }}
   */
  getSlideAtTime(timeMs) {
    const slides = this.project?.slides || [];
    if (slides.length === 0) {
      return { slideIndex: -1, localTime: 0 };
    }

    const clampedTime = Math.max(0, Math.min(timeMs, this._totalDuration));
    let accumulated = 0;

    for (let i = 0; i < slides.length; i++) {
      const duration = slides[i].duration || 5000;
      if (clampedTime < accumulated + duration) {
        return {
          slideIndex: i,
          localTime: clampedTime - accumulated,
        };
      }
      accumulated += duration;
    }

    // At the very end, return last slide
    const lastIndex = slides.length - 1;
    return {
      slideIndex: lastIndex,
      localTime: slides[lastIndex].duration || 5000,
    };
  }

  _onTick(timeMs) {
    try {
      this.sceneManager.renderAtTime(timeMs);
    } catch (err) {
      console.error('[SlideEngine] Tick error at', timeMs, ':', err);
    }
  }

  _onEnd() {
    // Playback ended - notify parent via postMessage if in iframe
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'PLAYBACK_END' }, '*');
    }
  }
}
