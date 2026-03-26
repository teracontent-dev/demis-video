import SlidePreview from '../../pages/DesignGallery/SlidePreview';
import { useProjectStore } from '../../stores/projectStore';
import { useUIStore } from '../../stores/uiStore';
import styles from './SlideList.module.css';

const SlideList = () => {
  const slides = useProjectStore((s) => s.project?.slides) || [];
  const addSlide = useProjectStore((s) => s.addSlide);
  const pushUndo = useProjectStore((s) => s.pushUndo);
  const selectedSlideIndex = useUIStore((s) => s.selectedSlideIndex);
  const setSelectedSlide = useUIStore((s) => s.setSelectedSlide);

  const handleAddSlide = () => {
    pushUndo();
    addSlide();
  };

  // Calculate scale: container is ~144px wide (160 - 16 padding), 16:9 → ~81px tall
  // 220px container - 16px padding = 204px
  const thumbScale = 204 / 1920;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>슬라이드</span>
        <span className={styles.count}>{slides.length}</span>
      </div>
      <div className={styles.list}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.item} ${index === selectedSlideIndex ? styles.selected : ''}`}
            onClick={() => {
              setSelectedSlide(index);
              // 슬라이드 시작 시간으로 seek — narration이 있으면 해당 위치부터
              const project = useProjectStore.getState().project as any;
              const narr = project?.narration;
              if (narr?.segments) {
                const seg = narr.segments.find((s: any) => (s.slideIndex ?? s.slide_index) === index);
                if (seg) {
                  useUIStore.getState().setCurrentTime(seg.startTime ?? seg.start_time ?? 0);
                  return;
                }
              }
              // narration 없으면 duration 기반
              let t = 0;
              for (let i = 0; i < index && i < slides.length; i++) t += slides[i].duration || 5000;
              useUIStore.getState().setCurrentTime(t);
            }}
          >
            <div className={styles.thumbnail}>
              <SlidePreview slide={slide} scale={thumbScale} />
              <span className={styles.slideNumber}>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.addBtn} onClick={handleAddSlide}>
        + 슬라이드 추가
      </button>
    </div>
  );
};

export default SlideList;
