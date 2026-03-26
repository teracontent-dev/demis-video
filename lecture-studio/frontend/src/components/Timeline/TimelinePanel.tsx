import { useRef, useCallback, useMemo } from 'react';
import { useProjectStore } from '../../stores/projectStore';
import { useUIStore } from '../../stores/uiStore';
import styles from './TimelinePanel.module.css';

const TimelinePanel = () => {
  const slides = useProjectStore((s) => s.project?.slides) || [];
  const timeline = useProjectStore((s) => s.project?.timeline);
  const narration = useProjectStore((s) => (s.project as any)?.narration);
  const currentTime = useUIStore((s) => s.currentTime);
  const setCurrentTime = useUIStore((s) => s.setCurrentTime);
  const selectedSlideIndex = useUIStore((s) => s.selectedSlideIndex);
  const setSelectedSlide = useUIStore((s) => s.setSelectedSlide);
  const zoom = useUIStore((s) => s.zoom);
  const setZoom = useUIStore((s) => s.setZoom);

  const trackAreaRef = useRef<HTMLDivElement>(null);

  const totalDuration = slides.reduce((sum, s) => sum + (s.duration || 5000), 0);
  const msPerPx = totalDuration > 0 ? totalDuration / (1200 * zoom) : 1;

  const timeToX = useCallback((ms: number) => ms / msPerPx, [msPerPx]);
  const xToTime = useCallback((x: number) => x * msPerPx, [msPerPx]);

  const seekFromX = useCallback((clientX: number) => {
    const rect = trackAreaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left + (trackAreaRef.current?.scrollLeft || 0) - 60;
    const time = Math.max(0, Math.min(xToTime(Math.max(0, x)), totalDuration));
    setCurrentTime(time);

    let accumulated = 0;
    for (let i = 0; i < slides.length; i++) {
      accumulated += slides[i].duration || 5000;
      if (time < accumulated) {
        setSelectedSlide(i);
        break;
      }
    }
  }, [xToTime, totalDuration, slides, setCurrentTime, setSelectedSlide]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    seekFromX(e.clientX);
    const handleMouseMove = (ev: MouseEvent) => seekFromX(ev.clientX);
    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [seekFromX]);

  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  // ── 루러: 1분 단위 ──
  const rulerMarkers = useMemo(() => {
    const markers: number[] = [];
    const interval = 60000; // 1분
    for (let t = 0; t <= totalDuration; t += interval) {
      markers.push(t);
    }
    // 마지막 마커가 totalDuration에 가깝지 않으면 추가
    if (markers.length === 0 || totalDuration - markers[markers.length - 1] > 10000) {
      markers.push(totalDuration);
    }
    return markers;
  }, [totalDuration]);

  // ── 슬라이드 블록 ──
  const slideBlocks = useMemo(() => {
    const blocks: { left: number; width: number; index: number; label: string }[] = [];
    let accTime = 0;
    slides.forEach((slide, i) => {
      const dur = slide.duration || 5000;
      blocks.push({
        left: timeToX(accTime),
        width: timeToX(dur),
        index: i,
        label: `${i + 1}`,
      });
      accTime += dur;
    });
    return blocks;
  }, [slides, timeToX]);

  // ── 오디오 블록: timeline + narration 모두 표시 ──
  const audioBlocks = useMemo(() => {
    const blocks: { left: number; width: number; label: string; id: string; type: string }[] = [];

    // timeline.audioTracks (snake_case 호환)
    const tracks = timeline?.audioTracks ?? (timeline as any)?.audio_tracks ?? [];
    for (const track of tracks) {
      const start = track.startTime ?? track.start_time ?? 0;
      const dur = track.duration ?? 0;
      blocks.push({
        left: timeToX(start),
        width: timeToX(dur),
        label: track.type === 'tts' ? '🔊 Voice' : track.type === 'bgm' ? '🎵 BGM' : '💨 SFX',
        id: track.id,
        type: track.type,
      });
    }

    // narration segments (개별 슬라이드 오디오)
    if (narration?.segments && blocks.length === 0) {
      for (const seg of narration.segments) {
        const start = seg.startTime ?? seg.start_time ?? 0;
        const end = seg.endTime ?? seg.end_time ?? 0;
        const dur = end - start;
        if (dur <= 0) continue;
        const idx = seg.slideIndex ?? seg.slide_index ?? 0;
        blocks.push({
          left: timeToX(start),
          width: timeToX(dur),
          label: `🔊 ${idx + 1}`,
          id: `narr-${idx}`,
          type: 'tts',
        });
      }
    }

    return blocks;
  }, [timeline, narration, timeToX]);

  // ── 자막 블록: timeline.subtitleTrack + narration.subtitles ──
  const subtitleBlocks = useMemo(() => {
    // 먼저 timeline에서
    let subs = timeline?.subtitleTrack ?? (timeline as any)?.subtitle_track ?? [];

    // narration에서도 (timeline에 없으면)
    if ((!subs || subs.length === 0) && narration?.subtitles) {
      subs = narration.subtitles;
    }

    return subs.map((cue: any) => {
      const start = cue.startTime ?? cue.start_time ?? 0;
      const end = cue.endTime ?? cue.end_time ?? 0;
      return {
        left: timeToX(start),
        width: timeToX(end - start),
        text: cue.text || '',
        id: cue.id || `sub-${start}`,
      };
    });
  }, [timeline, narration, timeToX]);

  const playheadX = timeToX(currentTime);
  const totalWidth = timeToX(totalDuration);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.toggleBtn}>타임라인</span>
        <div className={styles.zoomControls}>
          <button
            className={styles.zoomBtn}
            onClick={() => setZoom(Math.max(0.25, zoom - 0.25))}
            disabled={zoom <= 0.25}
          >
            −
          </button>
          <span className={styles.zoomLabel}>{Math.round(zoom * 100)}%</span>
          <button
            className={styles.zoomBtn}
            onClick={() => setZoom(Math.min(4, zoom + 0.25))}
            disabled={zoom >= 4}
          >
            +
          </button>
        </div>
        <span className={styles.timeInfo}>
          {formatTime(currentTime)} / {formatTime(totalDuration)}
        </span>
      </div>

      <div className={styles.trackArea} ref={trackAreaRef} onMouseDown={handleMouseDown}>
        {/* Time ruler — 1분 단위 */}
        <div className={styles.ruler} style={{ width: `${totalWidth}px` }}>
          {rulerMarkers.map((t) => (
            <div
              key={t}
              className={styles.rulerMark}
              style={{ left: `${timeToX(t)}px` }}
            >
              <span className={styles.rulerLabel}>{formatTime(t)}</span>
            </div>
          ))}
        </div>

        {/* Slides track */}
        <div className={styles.track}>
          <div className={styles.trackLabel}>Slides</div>
          <div className={styles.trackContent} style={{ width: `${totalWidth}px` }}>
            {slideBlocks.map((block) => (
              <div
                key={block.index}
                className={`${styles.block} ${styles.slideBlock} ${
                  block.index === selectedSlideIndex ? styles.selectedBlock : ''
                }`}
                style={{ left: `${block.left}px`, width: `${Math.max(block.width - 2, 1)}px` }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSlide(block.index);
                }}
              >
                {block.label}
              </div>
            ))}
          </div>
        </div>

        {/* Voice track (TTS) */}
        <div className={styles.track}>
          <div className={styles.trackLabel}>Voice</div>
          <div className={styles.trackContent} style={{ width: `${totalWidth}px` }}>
            {audioBlocks.filter(b => b.type === 'tts').map((block) => (
              <div
                key={block.id}
                className={`${styles.block} ${styles.audioBlock}`}
                style={{ left: `${block.left}px`, width: `${Math.max(block.width - 2, 1)}px` }}
              >
                {block.label}
              </div>
            ))}
          </div>
        </div>

        {/* SFX track */}
        {audioBlocks.some(b => b.type === 'recording') && (
          <div className={styles.track}>
            <div className={styles.trackLabel}>SFX</div>
            <div className={styles.trackContent} style={{ width: `${totalWidth}px` }}>
              {audioBlocks.filter(b => b.type === 'recording').map((block) => (
                <div
                  key={block.id}
                  className={`${styles.block} ${styles.sfxBlock}`}
                  style={{ left: `${block.left}px`, width: `${Math.max(block.width - 2, 1)}px` }}
                >
                  {block.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BGM track */}
        {audioBlocks.some(b => b.type === 'bgm') && (
          <div className={styles.track}>
            <div className={styles.trackLabel}>BGM</div>
            <div className={styles.trackContent} style={{ width: `${totalWidth}px` }}>
              {audioBlocks.filter(b => b.type === 'bgm').map((block) => (
                <div
                  key={block.id}
                  className={`${styles.block} ${styles.bgmBlock}`}
                  style={{ left: `${block.left}px`, width: `${Math.max(block.width - 2, 1)}px` }}
                >
                  {block.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subtitle track */}
        <div className={styles.track}>
          <div className={styles.trackLabel}>Subtitle</div>
          <div className={styles.trackContent} style={{ width: `${totalWidth}px` }}>
            {subtitleBlocks.map((block: any) => (
              <div
                key={block.id}
                className={`${styles.block} ${styles.subtitleBlock}`}
                style={{ left: `${block.left}px`, width: `${Math.max(block.width - 2, 1)}px` }}
                title={block.text}
              >
                {block.text}
              </div>
            ))}
          </div>
        </div>

        {/* Playhead */}
        <div
          className={styles.playhead}
          style={{ left: `${playheadX + 60}px` }}
        >
          <div className={styles.playheadHead} />
          <div className={styles.playheadLine} />
        </div>
      </div>
    </div>
  );
};

export default TimelinePanel;
