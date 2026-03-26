import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import type { Slide, SlideElement, MediaRef } from '../types/project';

/**
 * Render a single slide's elements into a container div (1920x1080),
 * replicating the SlideRenderer logic from Preview.tsx without highlights/animations.
 */
function renderSlideToDiv(slide: Slide): HTMLDivElement {
  const container = document.createElement('div');
  Object.assign(container.style, {
    width: '1920px',
    height: '1080px',
    position: 'relative',
    fontFamily: '"Pretendard Variable", sans-serif',
    overflow: 'hidden',
  });

  // Background
  if (slide.background?.type === 'solid') {
    container.style.background = slide.background.value;
  } else if (slide.background?.type === 'gradient') {
    container.style.background = slide.background.value;
  } else if (slide.background?.type === 'image') {
    container.style.backgroundImage = `url(${slide.background.value})`;
    container.style.backgroundSize = 'cover';
  }

  for (const el of slide.elements || []) {
    const pos = el.position || { x: 0, y: 0, width: 0, height: 0 };
    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, {
      position: 'absolute',
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
      opacity: String(el.opacity ?? 1),
      zIndex: String(el.zIndex || 0),
      transform: el.rotation ? `rotate(${el.rotation}deg)` : '',
    });

    if (el.type === 'text') {
      const s = el.style || {};
      const fontSize = typeof s.fontSize === 'number' ? `${s.fontSize}px` : s.fontSize || '24px';

      const outer = document.createElement('div');
      Object.assign(outer.style, {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      });

      const inner = document.createElement('div');
      Object.assign(inner.style, {
        fontSize,
        fontWeight: s.fontWeight || 'normal',
        color: s.color || '#fff',
        textAlign: s.textAlign || 'left',
        lineHeight: String(s.lineHeight || '1.4'),
        letterSpacing: s.letterSpacing || 'normal',
        whiteSpace: 'pre-wrap',
        wordBreak: 'keep-all',
        fontStyle: s.fontStyle || 'normal',
      });
      inner.textContent = typeof el.content === 'string' ? el.content : '';
      outer.appendChild(inner);
      wrapper.appendChild(outer);
    } else if (el.type === 'shape') {
      const s = el.style || {};
      const shapeDiv = document.createElement('div');
      Object.assign(shapeDiv.style, {
        width: '100%',
        height: '100%',
        background: s.backgroundColor || '#333',
        borderRadius: s.borderRadius || '0',
        border: s.borderColor ? `${s.borderWidth || 1}px solid ${s.borderColor}` : '',
      });
      wrapper.appendChild(shapeDiv);
    } else if (el.type === 'image') {
      const src = typeof el.content === 'object' ? (el.content as MediaRef).src : el.content;
      const img = document.createElement('img');
      img.src = src as string;
      img.crossOrigin = 'anonymous';
      Object.assign(img.style, {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      });
      wrapper.appendChild(img);
    }

    container.appendChild(wrapper);
  }

  return container;
}

/**
 * Wait for all <img> elements inside a container to finish loading.
 */
function waitForImages(container: HTMLElement): Promise<void> {
  const images = container.querySelectorAll('img');
  if (images.length === 0) return Promise.resolve();
  return Promise.all(
    Array.from(images).map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        }),
    ),
  ).then(() => {});
}

/**
 * Export an array of slides as a landscape PDF (one slide per page).
 * Each slide is rendered offscreen at 1920x1080, captured with html2canvas,
 * and placed into the PDF.
 */
export async function exportSlidesToPdf(
  slides: Slide[],
  filename = 'lecture-slides.pdf',
): Promise<void> {
  if (!slides || slides.length === 0) return;

  // landscape A4-ish proportions, but using 16:9 dimensions (mm)
  // jsPDF uses mm by default. We use a custom page size matching 16:9.
  const pageWidthMm = 338.667; // ~13.33 inches
  const pageHeightMm = 190.5;  // ~7.5 inches

  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [pageWidthMm, pageHeightMm],
  });

  // Offscreen host
  const host = document.createElement('div');
  Object.assign(host.style, {
    position: 'fixed',
    left: '-9999px',
    top: '0',
    width: '1920px',
    height: '1080px',
    zIndex: '-1',
    overflow: 'hidden',
  });
  document.body.appendChild(host);

  try {
    for (let i = 0; i < slides.length; i++) {
      const slideDiv = renderSlideToDiv(slides[i]);
      host.innerHTML = '';
      host.appendChild(slideDiv);

      await waitForImages(slideDiv);

      const canvas = await html2canvas(slideDiv, {
        width: 1920,
        height: 1080,
        scale: 1,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.92);

      if (i > 0) {
        pdf.addPage([pageWidthMm, pageHeightMm], 'landscape');
      }

      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidthMm, pageHeightMm);
    }

    pdf.save(filename);
  } finally {
    document.body.removeChild(host);
  }
}
