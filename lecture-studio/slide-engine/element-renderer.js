/**
 * ElementRenderer - Renders slide elements (text, image, video, shape) to DOM
 */
class ElementRenderer {
  /**
   * Create a DOM element from a SlideElement definition
   * @param {Object} element - SlideElement from project JSON
   * @returns {HTMLElement}
   */
  static createElement(element) {
    const wrapper = document.createElement('div');
    wrapper.dataset.elementId = element.id;
    wrapper.className = 'slide-element';
    wrapper.style.cssText = `
      position: absolute;
      left: ${element.position.x}px;
      top: ${element.position.y}px;
      width: ${element.position.width}px;
      height: ${element.position.height}px;
      transform: rotate(${element.rotation || 0}deg);
      opacity: ${element.opacity ?? 1};
      z-index: ${element.zIndex || 0};
    `;

    let inner = null;
    switch (element.type) {
      case 'text':
        inner = ElementRenderer._renderText(element);
        break;
      case 'image':
        inner = ElementRenderer._renderImage(element);
        break;
      case 'video':
        inner = ElementRenderer._renderVideo(element);
        break;
      case 'shape':
        inner = ElementRenderer._renderShape(element);
        break;
      default:
        console.warn(`[ElementRenderer] Unknown element type: ${element.type}`);
        inner = document.createElement('div');
    }

    if (inner) {
      wrapper.appendChild(inner);
    }

    // Apply custom styles
    if (element.style) {
      const pxProps = ['fontSize', 'lineHeight', 'letterSpacing'];
      const textProps = [
        'fontSize', 'fontWeight', 'color', 'textAlign', 'lineHeight',
        'letterSpacing', 'fontFamily', 'textDecoration', 'fontStyle',
      ];
      const innerEl = wrapper.firstElementChild;
      Object.entries(element.style).forEach(([key, value]) => {
        if (textProps.includes(key) && innerEl) {
          // If numeric, add px for size properties
          if (pxProps.includes(key) && typeof value === 'number') {
            innerEl.style[key] = value + 'px';
          } else {
            innerEl.style[key] = value;
          }
        }
      });
    }

    return wrapper;
  }

  /**
   * Render a text element with multi-line support and Korean word-break
   */
  static _renderText(element) {
    const div = document.createElement('div');
    const content = typeof element.content === 'string' ? element.content : '';
    const style = element.style || {};

    const px = (v, fallback) => {
      if (v == null) return fallback;
      return typeof v === 'number' ? v + 'px' : v;
    };

    div.style.cssText = `
      width: 100%;
      height: 100%;
      overflow: hidden;
      word-break: keep-all;
      overflow-wrap: break-word;
      white-space: pre-wrap;
      font-size: ${px(style.fontSize, '24px')};
      font-weight: ${style.fontWeight || 'normal'};
      color: ${style.color || '#191f28'};
      text-align: ${style.textAlign || 'left'};
      line-height: ${px(style.lineHeight, '1.5')};
      letter-spacing: ${px(style.letterSpacing, 'normal')};
      font-family: ${style.fontFamily || '"Pretendard Variable", sans-serif'};
      display: flex;
      align-items: ${style.verticalAlign === 'bottom' ? 'flex-end' : style.verticalAlign === 'center' ? 'center' : 'flex-start'};
    `;

    // Support countUp data attribute for number animation
    if (style.countUp || element.animation?.enter?.type === 'countUp') {
      const target = parseFloat(content) || 0;
      div.dataset.countTarget = String(target);
      div.dataset.countDuration = String(element.animation?.enter?.duration || 1000);
      div.dataset.countDecimals = String(style.countDecimals || 0);
      div.textContent = '0';
    } else {
      // Wrap each word in a span for word-level animations
      const words = content.split(/(\s+)/);
      const innerWrapper = document.createElement('span');
      innerWrapper.style.cssText = 'display: inline;';
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.dataset.wordIndex = String(i);
        span.textContent = word;
        span.style.display = 'inline';
        innerWrapper.appendChild(span);
      });
      div.appendChild(innerWrapper);
    }

    return div;
  }

  /**
   * Render an image element with alt text and loading state
   */
  static _renderImage(element) {
    const container = document.createElement('div');
    container.style.cssText = 'width:100%;height:100%;position:relative;overflow:hidden;';

    const src = typeof element.content === 'object' ? element.content.src : element.content;
    const alt = typeof element.content === 'object'
      ? (element.content.originalName || element.content.alt || '')
      : '';
    const fit = element.style?.objectFit || 'cover';

    // Loading placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'image-loading';
    placeholder.style.cssText = `
      width: 100%; height: 100%;
      background: #f0f0f0;
      display: flex; align-items: center; justify-content: center;
      color: #999; font-size: 14px;
    `;
    placeholder.textContent = 'Loading...';
    container.appendChild(placeholder);

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
      width: 100%; height: 100%;
      object-fit: ${fit};
      display: block;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    img.onload = () => {
      img.style.opacity = '1';
      placeholder.style.display = 'none';
    };

    img.onerror = () => {
      placeholder.textContent = alt || 'Image failed to load';
      placeholder.style.color = '#cc0000';
    };

    container.appendChild(img);
    return container;
  }

  /**
   * Render a video element
   */
  static _renderVideo(element) {
    const container = document.createElement('div');
    container.style.cssText = 'width:100%;height:100%;position:relative;overflow:hidden;';

    const src = typeof element.content === 'object' ? element.content.src : element.content;

    const video = document.createElement('video');
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.style.cssText = `width:100%;height:100%;object-fit:${element.style?.objectFit || 'cover'};`;

    if (element.style?.loop) video.loop = true;
    if (element.style?.autoplay) video.autoplay = true;

    container.appendChild(video);
    return container;
  }

  /**
   * Render a shape element (rect, circle, rounded-rect, line)
   */
  static _renderShape(element) {
    const style = element.style || {};
    const shapeType = style.shapeType || 'rect';
    const bg = style.backgroundColor || '#e5e8eb';
    const borderColor = style.borderColor || 'transparent';
    const borderWidth = style.borderWidth || 0;

    const div = document.createElement('div');
    div.style.cssText = `width:100%;height:100%;`;

    switch (shapeType) {
      case 'circle':
        div.style.cssText += `
          background: ${bg};
          border-radius: 50%;
          border: ${borderWidth}px solid ${borderColor};
        `;
        break;

      case 'rounded-rect':
        div.style.cssText += `
          background: ${bg};
          border-radius: ${style.borderRadius || '12px'};
          border: ${borderWidth}px solid ${borderColor};
        `;
        break;

      case 'line': {
        // Line uses an SVG for precise rendering
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.cssText = 'position:absolute;top:0;left:0;';

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', style.x1 || '0');
        line.setAttribute('y1', style.y1 || '50%');
        line.setAttribute('x2', style.x2 || '100%');
        line.setAttribute('y2', style.y2 || '50%');
        line.setAttribute('stroke', style.strokeColor || bg);
        line.setAttribute('stroke-width', String(style.strokeWidth || 2));
        if (style.strokeDasharray) {
          line.setAttribute('stroke-dasharray', style.strokeDasharray);
        }
        svg.appendChild(line);
        div.style.position = 'relative';
        div.appendChild(svg);
        return div;
      }

      case 'rect':
      default:
        div.style.cssText += `
          background: ${bg};
          border-radius: ${style.borderRadius || '0'};
          border: ${borderWidth}px solid ${borderColor};
        `;
        break;
    }

    return div;
  }
}
