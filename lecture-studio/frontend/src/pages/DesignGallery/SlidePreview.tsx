import styles from './SlidePreview.module.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const STATIC_BASE = API_BASE.replace('/api', '');

// Renders a slide as a static DOM thumbnail (no iframe needed)
export default function SlidePreview({ slide, scale = 0.15 }: { slide: any; scale?: number }) {
  const w = 1920;
  const h = 1080;

  const bgStyle: React.CSSProperties = {};
  if (slide.background) {
    if (slide.background.type === 'solid') {
      bgStyle.background = slide.background.value;
    } else if (slide.background.type === 'gradient') {
      bgStyle.background = slide.background.value;
    } else if (slide.background.type === 'image') {
      const bgUrl = slide.background.value.startsWith('http')
        ? slide.background.value
        : `${STATIC_BASE}${slide.background.value}`;
      bgStyle.backgroundImage = `url(${bgUrl})`;
      bgStyle.backgroundSize = 'cover';
      bgStyle.backgroundPosition = 'center';
    }
  }

  return (
    <div className={styles.wrapper} style={{ width: w * scale, height: h * scale }}>
      <div
        className={styles.canvas}
        style={{
          width: w,
          height: h,
          transform: `scale(${scale})`,
          ...bgStyle,
        }}
      >
        {(slide.elements || []).map((el: any) => {
          const pos = el.position || {};
          const elStyle: React.CSSProperties = {
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
            return (
              <div key={el.id} style={elStyle}>
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column' as any,
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: typeof s.fontSize === 'number' ? `${s.fontSize}px` : s.fontSize || '24px',
                    fontWeight: s.fontWeight || 'normal',
                    color: s.color || '#fff',
                    textAlign: s.textAlign || 'left',
                    lineHeight: s.lineHeight || '1.4',
                    letterSpacing: s.letterSpacing || 'normal',
                    fontFamily: '"Pretendard Variable", sans-serif',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'keep-all' as any,
                    fontStyle: s.fontStyle || 'normal',
                  }}>
                    {typeof el.content === 'string' ? el.content : ''}
                  </div>
                </div>
              </div>
            );
          }

          if (el.type === 'shape') {
            const s = el.style || {};
            return (
              <div key={el.id} style={elStyle}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: s.backgroundColor || '#333',
                  borderRadius: s.borderRadius || '0',
                  border: s.borderColor ? `${s.borderWidth || 1}px solid ${s.borderColor}` : undefined,
                }} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
