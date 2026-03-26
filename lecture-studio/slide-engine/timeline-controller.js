/**
 * TimelineController - Manages time state and frame timing
 * Handles both realtime playback and frame-by-frame (Puppeteer) modes
 */
class TimelineController {
  constructor(fps = 30) {
    this.fps = fps;
    this.frameDuration = 1000 / fps; // ms per frame
    this.currentTime = 0;
    this.totalDuration = 0;
    this.isPlaying = false;
    this._rafId = null;
    this._startTimestamp = null;
    this._startTime = 0;
    this._onTick = null;
    this._onEnd = null;
  }

  setDuration(totalDuration) {
    this.totalDuration = totalDuration;
  }

  setCallbacks({ onTick, onEnd }) {
    this._onTick = onTick;
    this._onEnd = onEnd;
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this._startTimestamp = null;
    this._startTime = this.currentTime;
    this._animate();
  }

  pause() {
    this.isPlaying = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  seek(timeMs) {
    this.currentTime = Math.max(0, Math.min(timeMs, this.totalDuration));
    if (this._onTick) this._onTick(this.currentTime);
  }

  getCurrentTime() {
    return this.currentTime;
  }

  _animate(timestamp) {
    if (!this.isPlaying) return;

    if (!this._startTimestamp) {
      this._startTimestamp = timestamp;
    }

    const elapsed = timestamp - this._startTimestamp;
    this.currentTime = this._startTime + elapsed;

    if (this.currentTime >= this.totalDuration) {
      this.currentTime = this.totalDuration;
      this.isPlaying = false;
      if (this._onTick) this._onTick(this.currentTime);
      if (this._onEnd) this._onEnd();
      this._notifyParent('PLAYBACK_END');
      return;
    }

    if (this._onTick) this._onTick(this.currentTime);
    this._notifyParent('TIME_UPDATE', { currentTime: this.currentTime });

    this._rafId = requestAnimationFrame((t) => this._animate(t));
  }

  _notifyParent(type, payload = {}) {
    if (window.parent !== window) {
      window.parent.postMessage({ type, payload }, '*');
    }
  }
}
