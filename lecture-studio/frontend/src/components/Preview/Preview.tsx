import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useProjectStore } from '../../stores/projectStore';
import { useUIStore } from '../../stores/uiStore';
import styles from './Preview.module.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const STATIC_BASE = API_BASE.replace('/api', '');

// ── 자막과 가장 잘 매칭되는 엘리먼트 ID를 찾고, 그 엘리먼트만 하이라이트 ──
function findBestMatchElementId(elements: any[], subtitleText: string): { id: string; start: number; len: number } | null {
  if (!subtitleText || !elements) return null;

  let bestId = '';
  let bestStart = -1;
  let bestLen = 0;

  for (const el of elements) {
    if (el.type !== 'text' || typeof el.content !== 'string') continue;
    if ((el.zIndex || 0) <= 1) continue;
    const content = el.content;

    // 자막의 연속 부분이 이 엘리먼트에 있는지 — 가장 긴 매칭 찾기
    for (let len = Math.min(subtitleText.length, 80); len >= 6; len--) {
      for (let i = 0; i <= subtitleText.length - len; i++) {
        const chunk = subtitleText.substring(i, i + len);
        const pos = content.indexOf(chunk);
        if (pos !== -1 && len > bestLen) {
          bestId = el.id;
          bestStart = pos;
          bestLen = len;
        }
      }
      if (bestLen >= len) break;
    }
  }

  if (!bestId || bestLen < 6) return null;
  return { id: bestId, start: bestStart, len: bestLen };
}

function renderHighlightedContent(content: string, matchStart: number, matchLen: number): React.ReactNode {
  const before = content.substring(0, matchStart);
  const match = content.substring(matchStart, matchStart + matchLen);
  const after = content.substring(matchStart + matchLen);

  return (
    <>
      {before}
      <span style={{
        backgroundColor: 'rgba(239, 68, 68, 0.25)',
        borderRadius: '3px',
        padding: '0 2px',
      }}>
        {match}
      </span>
      {after}
    </>
  );
}

// ── SlideRenderer ──
function SlideRenderer({ slide, scale, activeSubtitle = '', resolution }: { slide: any; scale: number; activeSubtitle?: string; resolution?: [number, number] }) {
  if (!slide) return <div className={styles.emptySlide}>슬라이드 없음</div>;

  const [W, H] = resolution || [1920, 1080];

  const highlightMatch = useMemo(() => {
    if (!activeSubtitle) return null;
    return findBestMatchElementId(slide.elements || [], activeSubtitle);
  }, [activeSubtitle, slide.elements]);

  const bgStyle: React.CSSProperties = {};
  if (slide.background?.type === 'solid') bgStyle.background = slide.background.value;
  else if (slide.background?.type === 'gradient') bgStyle.background = slide.background.value;
  else if (slide.background?.type === 'image') {
    const bgUrl = slide.background.value.startsWith('http')
      ? slide.background.value
      : `${STATIC_BASE}${slide.background.value}`;
    bgStyle.backgroundImage = `url(${bgUrl})`;
    bgStyle.backgroundSize = 'cover';
    bgStyle.backgroundPosition = 'center';
  }

  return (
    <div style={{
      width: W * scale,
      height: H * scale,
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
    }}>
      <div style={{
        width: W,
        height: H,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        position: 'relative',
        fontFamily: '"Pretendard Variable", sans-serif',
        ...bgStyle,
      }}>
        {(slide.elements || []).map((el: any) => {
          const pos = el.position || {};
          const baseStyle: React.CSSProperties = {
            position: 'absolute',
            left: pos.x,
            top: pos.y,
            width: pos.width,
            height: pos.height,
            opacity: el.opacity ?? 1,
            zIndex: el.zIndex || 0,
            transform: el.rotation ? `rotate(${el.rotation}deg)` : undefined,
          };

          if (el.type === 'text') {
            const s = el.style || {};
            const fontSize = typeof s.fontSize === 'number' ? `${s.fontSize}px` : s.fontSize || '24px';
            const content = typeof el.content === 'string' ? el.content : '';
            // 이 엘리먼트가 하이라이트 대상인지 확인 (가장 잘 매칭된 1개만)
            const isTarget = highlightMatch && highlightMatch.id === el.id;

            return (
              <div key={el.id} style={baseStyle}>
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column' as any,
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize, fontWeight: s.fontWeight || 'normal',
                    color: s.color || '#fff',
                    textAlign: (s.textAlign || 'left') as any,
                    lineHeight: s.lineHeight || '1.4',
                    letterSpacing: s.letterSpacing || 'normal',
                    whiteSpace: 'pre-wrap', wordBreak: 'keep-all' as any,
                    fontStyle: s.fontStyle || 'normal',
                  }}>
                    {isTarget
                      ? renderHighlightedContent(content, highlightMatch.start, highlightMatch.len)
                      : content}
                  </div>
                </div>
              </div>
            );
          }

          if (el.type === 'shape') {
            const s = el.style || {};
            return (
              <div key={el.id} style={baseStyle}>
                <div style={{
                  width: '100%', height: '100%',
                  background: s.backgroundColor || '#333',
                  borderRadius: s.borderRadius || '0',
                  border: s.borderColor ? `${s.borderWidth || 1}px solid ${s.borderColor}` : undefined,
                }} />
              </div>
            );
          }

          if (el.type === 'image') {
            let src = typeof el.content === 'object' ? el.content.src : el.content;
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
              src = `${STATIC_BASE}${src}`;
            }
            return (
              <div key={el.id} style={baseStyle}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

// ── NarrationOverlay: 자막 표시 + 하이라이트 연동 ──
function NarrationOverlay({ currentTime, scale, onSubtitleChange }: {
  currentTime: number;
  scale: number;
  onSubtitleChange: (text: string) => void;
}) {
  const narration = useProjectStore((s) => (s.project as any)?.narration);
  const subtitles = narration?.subtitles;
  const prevTextRef = useRef<string>('');

  if (!subtitles || subtitles.length === 0) return null;

  const activeCue = subtitles.find((cue: any) => {
    const start = cue.startTime ?? cue.start_time ?? 0;
    const end = cue.endTime ?? cue.end_time ?? 0;
    return currentTime >= start && currentTime < end;
  });

  const text = activeCue?.text || '';

  // 자막 텍스트가 바뀌면 부모에 알림 (SlideRenderer 하이라이트용)
  if (text !== prevTextRef.current) {
    prevTextRef.current = text;
    setTimeout(() => onSubtitleChange(text), 0);
  }

  if (!activeCue) return null;

  return (
    <div className={styles.subtitleOverlay} style={{
      width: '100%',
      bottom: 40 * scale,
    }}>
      <div className={styles.subtitleText} style={{
        fontSize: Math.max(12, 22 * scale),
        padding: `${6 * scale}px ${16 * scale}px`,
      }}>
        {text}
      </div>
    </div>
  );
}

// ── Main Preview ──
const Preview = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sfxRef = useRef<HTMLAudioElement>(null);
  const bgmRef = useRef<HTMLAudioElement>(null);
  const [activeSubtitle, setActiveSubtitle] = useState('');
  const [transitionClass, setTransitionClass] = useState('');
  const prevSlideRef = useRef<number>(-1);

  const slides = useProjectStore((s) => s.project?.slides) || [];
  const narration = useProjectStore((s) => (s.project as any)?.narration);
  const isPlaying = useUIStore((s) => s.isPlaying);
  const setPlaying = useUIStore((s) => s.setPlaying);
  const setCurrentTime = useUIStore((s) => s.setCurrentTime);
  const currentTime = useUIStore((s) => s.currentTime);
  const selectedSlideIndex = useUIStore((s) => s.selectedSlideIndex);

  const [scale, setScale] = useState(0.4);

  // 프로젝트 해상도 (기본 1920x1080, 9:16이면 1080x1920)
  const projectSettings = useProjectStore((s) => (s.project as any)?.settings);
  const resolution: [number, number] = useMemo(() => {
    const res = projectSettings?.resolution;
    if (Array.isArray(res) && res.length === 2) return res as [number, number];
    return [1920, 1080];
  }, [projectSettings]);
  const [canvasW, canvasH] = resolution;

  // ── 슬라이드 전환 시 트랜지션 애니메이션 + whoosh 효과음 ──
  useEffect(() => {
    if (prevSlideRef.current === selectedSlideIndex) return;
    const isFirst = prevSlideRef.current === -1;
    prevSlideRef.current = selectedSlideIndex;
    if (isFirst) return; // 최초 로드 시 애니메이션 안 함

    const slide = slides[selectedSlideIndex];
    const transType = slide?.transition?.type || 'fade';

    // CSS 트랜지션 클래스 적용
    setTransitionClass(`slideTransition-${transType}`);
    const timer = setTimeout(() => setTransitionClass(''), 800);

    // Whoosh 효과음 재생
    const sfx = sfxRef.current;
    if (sfx) {
      sfx.currentTime = 0;
      sfx.play().catch(() => {});
    }

    return () => clearTimeout(timer);
  }, [selectedSlideIndex]);

  // ── BGM URL ──
  const timeline = useProjectStore((s) => (s.project as any)?.timeline);
  const bgmUrl = useMemo(() => {
    const tracks = timeline?.audio_tracks ?? timeline?.audioTracks ?? [];
    const bgmTrack = tracks.find((t: any) => t.type === 'bgm');
    if (!bgmTrack) return null;
    const src = bgmTrack.src ?? '';
    return src.startsWith('http') ? src : `${STATIC_BASE}${src}`;
  }, [timeline]);
  const bgmVolume = useMemo(() => {
    const tracks = timeline?.audio_tracks ?? timeline?.audioTracks ?? [];
    const bgmTrack = tracks.find((t: any) => t.type === 'bgm');
    return bgmTrack?.volume ?? 0.15;
  }, [timeline]);

  // BGM 재생/정지 동기화
  useEffect(() => {
    const bgm = bgmRef.current;
    if (!bgm || !bgmUrl) return;
    bgm.volume = bgmVolume;
    if (isPlaying) {
      bgm.play().catch(() => {});
    } else {
      bgm.pause();
    }
  }, [isPlaying, bgmUrl]);

  // ── 세그먼트별 개별 MP3 URL 목록 ──
  const segmentAudios = useMemo(() => {
    if (!narration?.segments) return [];
    return narration.segments.map((seg: any) => {
      const file = seg.audioFile ?? seg.audio_file ?? null;
      return {
        slideIndex: seg.slideIndex ?? seg.slide_index ?? 0,
        startTime: seg.startTime ?? seg.start_time ?? 0,
        endTime: seg.endTime ?? seg.end_time ?? 0,
        audioUrl: file ? (file.startsWith('http') ? file : `${STATIC_BASE}${file}`) : null,
      };
    });
  }, [narration?.segments]);

  const hasNarration = segmentAudios.length > 0 && segmentAudios.some((s: any) => s.audioUrl);

  // 현재 슬라이드의 세그먼트
  const currentSegment = useMemo(() => {
    return segmentAudios.find((s: any) => s.slideIndex === selectedSlideIndex) || null;
  }, [segmentAudios, selectedSlideIndex]);

  // 전체 duration
  const totalDurationNarration = useMemo(() => {
    if (segmentAudios.length === 0) return 0;
    return segmentAudios[segmentAudios.length - 1].endTime;
  }, [segmentAudios]);

  // ── 개별 세그먼트 오디오 재생 ──
  const playingSlideRef = useRef<number>(-1);

  // 슬라이드 전환 or play → 해당 슬라이드 오디오 로드+재생
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasNarration) return;

    if (isPlaying) {
      const seg = segmentAudios.find((s: any) => s.slideIndex === selectedSlideIndex);
      if (!seg || !seg.audioUrl) {
        // 이 슬라이드에 오디오 없음 → 다음 슬라이드로 자동 넘어감
        const segDur = seg ? seg.endTime - seg.startTime : (slides[selectedSlideIndex]?.duration || 5000);
        const timer = setTimeout(() => {
          const nextIdx = selectedSlideIndex + 1;
          if (nextIdx < slides.length) {
            useUIStore.getState().setSelectedSlide(nextIdx);
            if (seg) setCurrentTime(seg.endTime);
          } else {
            setPlaying(false);
          }
        }, segDur);
        return () => clearTimeout(timer);
      }

      // 새 슬라이드면 오디오 교체
      if (playingSlideRef.current !== selectedSlideIndex) {
        playingSlideRef.current = selectedSlideIndex;
        audio.src = seg.audioUrl;
        audio.load();

        // 타임라인에서 슬라이드 중간을 클릭한 경우 → offset 계산
        const uiTime = useUIStore.getState().currentTime;
        const offsetInSegment = Math.max(0, uiTime - seg.startTime) / 1000;

        const onCanPlay = () => {
          if (offsetInSegment > 0.5) {
            audio.currentTime = offsetInSegment;
          }
          audio.play().catch(() => {});
          audio.removeEventListener('canplay', onCanPlay);
        };
        audio.addEventListener('canplay', onCanPlay, { once: true });
      } else if (audio.paused) {
        audio.play().catch(() => {});
      }

      // timeupdate → global currentTime 업데이트
      const onTimeUpdate = () => {
        const localMs = audio.currentTime * 1000;
        const globalMs = seg.startTime + localMs;
        setCurrentTime(globalMs);
      };

      const onEnded = () => {
        // 다음 슬라이드로
        const nextIdx = selectedSlideIndex + 1;
        if (nextIdx < slides.length) {
          useUIStore.getState().setSelectedSlide(nextIdx);
          setCurrentTime(seg.endTime);
        } else {
          setPlaying(false);
          playingSlideRef.current = -1;
        }
      };

      audio.addEventListener('timeupdate', onTimeUpdate);
      audio.addEventListener('ended', onEnded);
      return () => {
        audio.removeEventListener('timeupdate', onTimeUpdate);
        audio.removeEventListener('ended', onEnded);
      };
    } else {
      // 정지
      if (audio && !audio.paused) {
        audio.pause();
      }
      playingSlideRef.current = -1;
    }
  }, [isPlaying, selectedSlideIndex, hasNarration]);

  // ── Fallback: narration 없을 때 타이머 기반 재생 ──
  useEffect(() => {
    if (!isPlaying || hasNarration) return;
    const totDur = slides.reduce((sum, s) => sum + (s.duration || 5000), 0);
    const startOffset = useUIStore.getState().currentTime;
    const startWall = Date.now();
    const getIdxAtTime = (ms: number) => {
      let acc = 0;
      for (let i = 0; i < slides.length; i++) {
        acc += slides[i].duration || 5000;
        if (ms < acc) return i;
      }
      return slides.length - 1;
    };
    const interval = setInterval(() => {
      const next = startOffset + (Date.now() - startWall);
      if (next >= totDur) {
        setCurrentTime(totDur);
        setPlaying(false);
      } else {
        setCurrentTime(next);
        const idx = getIdxAtTime(next);
        if (idx !== useUIStore.getState().selectedSlideIndex) {
          useUIStore.getState().setSelectedSlide(idx);
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying, hasNarration]);

  const currentSlide = slides[selectedSlideIndex];

  // Scale to fit wrapper
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const s = Math.max(0.1, Math.min((rect.width - 16) / canvasW, (rect.height - 16) / canvasH, 1));
      setScale(s);
    };
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    update();
    return () => observer.disconnect();
  }, []);

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  };

  const totalDuration = hasNarration
    ? totalDurationNarration
    : slides.reduce((sum, s) => sum + (s.duration || 5000), 0);

  const handlePlayPause = () => {
    if (!isPlaying) {
      if (currentTime >= totalDuration - 100) {
        setCurrentTime(0);
        useUIStore.getState().setSelectedSlide(0);
        playingSlideRef.current = -1;
      }
    }
    setPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <div className={styles.previewArea} ref={wrapperRef}>
        <div style={{ position: 'relative' }} className={transitionClass ? styles[transitionClass] || '' : ''}>
          <SlideRenderer slide={currentSlide} scale={scale} activeSubtitle={activeSubtitle} resolution={resolution} />
          <NarrationOverlay currentTime={currentTime} scale={scale} onSubtitleChange={setActiveSubtitle} />
        </div>
      </div>

      {/* 내레이션 오디오 */}
      <audio ref={audioRef} preload="auto" />
      {/* 효과음 */}
      <audio ref={sfxRef} src={`${STATIC_BASE}/static/media/sfx/whoosh.wav`} preload="auto" />
      {/* BGM */}
      {bgmUrl && <audio ref={bgmRef} src={bgmUrl} preload="auto" loop />}

      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={() => useUIStore.getState().setSelectedSlide(Math.max(0, selectedSlideIndex - 1))}>◀</button>
        <button className={`${styles.controlBtn} ${styles.playBtn}`} onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className={styles.controlBtn} onClick={() => useUIStore.getState().setSelectedSlide(Math.min(slides.length - 1, selectedSlideIndex + 1))}>▶</button>
        <span className={styles.timeDisplay}>{formatTime(currentTime)} / {formatTime(totalDuration)}</span>
        {hasNarration && <span className={styles.narrationBadge}>🔊</span>}
        <button className={styles.fullscreenBtn} onClick={() => { document.fullscreenElement ? document.exitFullscreen() : wrapperRef.current?.requestFullscreen(); }} title="전체보기">⛶</button>
      </div>
    </div>
  );
};

export default Preview;
