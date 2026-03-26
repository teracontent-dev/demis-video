// Slide template data for the Design Gallery
// Style reference: dark background + mint/green accent + clean card layout

export interface SlideTemplate {
  id: string;
  title: string;
  category: string;
  thumbnail: { bg: string };
  slides: { id: string; label: string; data: any }[];
}

const mint = '#4ade80';
const mintDim = 'rgba(74,222,128,0.15)';
const mintBorder = 'rgba(74,222,128,0.3)';
const dark = '#0a0a0a';
const darkCard = '#141414';
const cardBorder = 'rgba(255,255,255,0.08)';
const textWhite = '#f0f0f0';
const textGray = 'rgba(255,255,255,0.5)';
const textMint = '#4ade80';

function card(x: number, y: number, w: number, h: number, id: string): any {
  return { id: `${id}-bg`, type: 'shape', position: { x, y, width: w, height: h }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: darkCard, borderRadius: '12px', borderColor: cardBorder, borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } };
}

function arrow(x: number, y: number, id: string): any {
  return { id, type: 'text', position: { x, y, width: 40, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } };
}

export const TEMPLATES: SlideTemplate[] = [
  // 1. 개념 정리 (3단 플로우) — 레퍼런스와 동일한 스타일
  {
    id: 'concept-flow',
    title: '개념 정리 플로우',
    category: '프레임워크',
    thumbnail: { bg: `linear-gradient(180deg, ${dark} 0%, #0d1117 100%)` },
    slides: [{
      id: 'cf-main', label: '메인',
      data: {
        id: 'tpl-cf-1', order: 0, duration: 6000,
        background: { type: 'solid', value: dark },
        elements: [
          { id: 'cf-cat', type: 'text', position: { x: 660, y: 220, width: 600, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: textMint, textAlign: 'center', letterSpacing: '4px' }, content: '>  개념  정리', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
          { id: 'cf-title', type: 'text', position: { x: 260, y: 270, width: 1400, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: textWhite, textAlign: 'center' }, content: '스킬 → 플러그인 → 마켓플레이스', animation: { enter: { type: 'fadeIn', duration: 500, delay: 100, easing: 'ease-out' } } },
          // Card 1
          card(240, 430, 380, 200, 'cf-c1'),
          { id: 'cf-c1-t', type: 'text', position: { x: 240, y: 450, width: 380, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '26px', fontWeight: '700', color: textMint, textAlign: 'center' }, content: '스킬', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'cf-c1-d', type: 'text', position: { x: 260, y: 510, width: 340, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: '업무 매뉴얼\n이 프로젝트에서만 사용', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          arrow(640, 510, 'cf-a1'),
          // Card 2
          card(700, 430, 380, 200, 'cf-c2'),
          { id: 'cf-c2-t', type: 'text', position: { x: 700, y: 450, width: 380, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '26px', fontWeight: '700', color: textMint, textAlign: 'center' }, content: '플러그인', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cf-c2-d', type: 'text', position: { x: 720, y: 510, width: 340, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: '스킬을 패키지로 묶음\n재사용 가능', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          arrow(1100, 510, 'cf-a2'),
          // Card 3
          card(1160, 430, 380, 200, 'cf-c3'),
          { id: 'cf-c3-t', type: 'text', position: { x: 1160, y: 450, width: 380, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '26px', fontWeight: '700', color: textMint, textAlign: 'center' }, content: '마켓플레이스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cf-c3-d', type: 'text', position: { x: 1180, y: 510, width: 340, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: '플러그인 저장소\n검색/설치', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }
    }]
  },

  // 2. KPI 대시보드
  {
    id: 'kpi-dashboard',
    title: 'KPI 대시보드',
    category: '데이터',
    thumbnail: { bg: `linear-gradient(180deg, #0d1117 0%, #161b22 100%)` },
    slides: [{
      id: 'kpi-main', label: '메인',
      data: {
        id: 'tpl-kpi-1', order: 0, duration: 6000,
        background: { type: 'solid', value: dark },
        elements: [
          { id: 'kpi-cat', type: 'text', position: { x: 120, y: 60, width: 300, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '500', color: textMint, textAlign: 'left', letterSpacing: '3px' }, content: 'DASHBOARD', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'kpi-title', type: 'text', position: { x: 120, y: 100, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '42px', fontWeight: '700', color: textWhite, textAlign: 'left' }, content: '2024 Q4 핵심 지표', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          // KPI Card 1
          card(120, 220, 400, 180, 'kpi-k1'),
          { id: 'kpi-k1-l', type: 'text', position: { x: 150, y: 240, width: 200, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: 'Monthly Revenue', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'kpi-k1-v', type: 'text', position: { x: 150, y: 280, width: 300, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '700', color: textMint, textAlign: 'left' }, content: '₩2.4B', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
          { id: 'kpi-k1-c', type: 'text', position: { x: 150, y: 350, width: 200, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '600', color: '#4ade80', textAlign: 'left' }, content: '▲ 23.5% vs Q3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          // KPI Card 2
          card(560, 220, 400, 180, 'kpi-k2'),
          { id: 'kpi-k2-l', type: 'text', position: { x: 590, y: 240, width: 200, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: 'Active Users', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'kpi-k2-v', type: 'text', position: { x: 590, y: 280, width: 300, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '700', color: '#60a5fa', textAlign: 'left' }, content: '158K', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'kpi-k2-c', type: 'text', position: { x: 590, y: 350, width: 200, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '600', color: '#60a5fa', textAlign: 'left' }, content: '▲ 12.1% vs Q3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          // KPI Card 3
          card(1000, 220, 400, 180, 'kpi-k3'),
          { id: 'kpi-k3-l', type: 'text', position: { x: 1030, y: 240, width: 200, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: 'NPS Score', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'kpi-k3-v', type: 'text', position: { x: 1030, y: 280, width: 300, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '700', color: '#c084fc', textAlign: 'left' }, content: '72', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
          { id: 'kpi-k3-c', type: 'text', position: { x: 1030, y: 350, width: 200, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '600', color: '#c084fc', textAlign: 'left' }, content: '▲ 8pts vs Q3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Bar chart area
          card(120, 450, 1280, 320, 'kpi-chart'),
          { id: 'kpi-ch-t', type: 'text', position: { x: 160, y: 470, width: 300, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: 'Monthly Trend', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Bars
          { id: 'kpi-b1', type: 'shape', position: { x: 200, y: 620, width: 60, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(74,222,128,0.3)', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'kpi-b2', type: 'shape', position: { x: 310, y: 580, width: 60, height: 160 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(74,222,128,0.4)', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 550, easing: 'ease-out' } } },
          { id: 'kpi-b3', type: 'shape', position: { x: 420, y: 560, width: 60, height: 180 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(74,222,128,0.5)', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 600, easing: 'ease-out' } } },
          { id: 'kpi-b4', type: 'shape', position: { x: 530, y: 520, width: 60, height: 220 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: mint, borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }
    }]
  },

  // 3. 타임라인
  {
    id: 'timeline-roadmap',
    title: '로드맵 타임라인',
    category: '기획',
    thumbnail: { bg: `linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)` },
    slides: [{
      id: 'tl-main', label: '메인',
      data: {
        id: 'tpl-tl-1', order: 0, duration: 6000,
        background: { type: 'solid', value: dark },
        elements: [
          { id: 'tl-cat', type: 'text', position: { x: 120, y: 80, width: 300, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '500', color: textMint, textAlign: 'left', letterSpacing: '3px' }, content: 'ROADMAP', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'tl-title', type: 'text', position: { x: 120, y: 120, width: 800, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: textWhite, textAlign: 'left' }, content: '2024 제품 로드맵', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          // Timeline line
          { id: 'tl-line', type: 'shape', position: { x: 300, y: 310, width: 1300, height: 2 }, rotation: 0, opacity: 0.2, zIndex: 3, style: { backgroundColor: textWhite, borderRadius: '1px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
          // Q1
          { id: 'tl-d1', type: 'shape', position: { x: 370, y: 300, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: mint, borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'tl-q1', type: 'text', position: { x: 310, y: 340, width: 140, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: textMint, textAlign: 'center' }, content: 'Q1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          card(280, 380, 200, 140, 'tl-c1'),
          { id: 'tl-c1-t', type: 'text', position: { x: 290, y: 400, width: 180, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: 'MVP 출시\n핵심 기능 개발\n베타 테스트', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Q2
          { id: 'tl-d2', type: 'shape', position: { x: 680, y: 300, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#60a5fa', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'tl-q2', type: 'text', position: { x: 620, y: 340, width: 140, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#60a5fa', textAlign: 'center' }, content: 'Q2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          card(590, 380, 200, 140, 'tl-c2'),
          { id: 'tl-c2-t', type: 'text', position: { x: 600, y: 400, width: 180, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: 'API 공개\n파트너 연동\n성능 최적화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // Q3
          { id: 'tl-d3', type: 'shape', position: { x: 990, y: 300, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#c084fc', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'tl-q3', type: 'text', position: { x: 930, y: 340, width: 140, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#c084fc', textAlign: 'center' }, content: 'Q3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          card(900, 380, 200, 140, 'tl-c3'),
          { id: 'tl-c3-t', type: 'text', position: { x: 910, y: 400, width: 180, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: '글로벌 확장\n다국어 지원\n엔터프라이즈', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          // Q4
          { id: 'tl-d4', type: 'shape', position: { x: 1300, y: 300, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#fb923c', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'tl-q4', type: 'text', position: { x: 1240, y: 340, width: 140, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#fb923c', textAlign: 'center' }, content: 'Q4', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          card(1210, 380, 200, 140, 'tl-c4'),
          { id: 'tl-c4-t', type: 'text', position: { x: 1220, y: 400, width: 180, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: textWhite, textAlign: 'center' }, content: 'AI 통합\n자동화 파이프라인\nIPO 준비', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: ''
      }
    }]
  },

  // 4. 비교 (Before/After or vs)
  {
    id: 'comparison',
    title: 'Before vs After',
    category: '비교',
    thumbnail: { bg: `linear-gradient(135deg, #0f0f0f 0%, #1a0a2e 100%)` },
    slides: [{
      id: 'cmp-main', label: '메인',
      data: {
        id: 'tpl-cmp-1', order: 0, duration: 6000,
        background: { type: 'solid', value: dark },
        elements: [
          { id: 'cmp-t', type: 'text', position: { x: 460, y: 80, width: 1000, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: textWhite, textAlign: 'center' }, content: '도입 전 vs 도입 후', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          // Left card (Before)
          card(120, 200, 820, 560, 'cmp-left'),
          { id: 'cmp-lt', type: 'text', position: { x: 120, y: 220, width: 820, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#f87171', textAlign: 'center' }, content: 'BEFORE', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'cmp-l1', type: 'text', position: { x: 180, y: 310, width: 700, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: textWhite, textAlign: 'left' }, content: '✕  수동 데이터 수집 — 주 40시간', animation: { enter: { type: 'slideRight', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'cmp-l2', type: 'text', position: { x: 180, y: 380, width: 700, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: textWhite, textAlign: 'left' }, content: '✕  오류율 12.5%', animation: { enter: { type: 'slideRight', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'cmp-l3', type: 'text', position: { x: 180, y: 450, width: 700, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: textWhite, textAlign: 'left' }, content: '✕  리포트 생성 3일 소요', animation: { enter: { type: 'slideRight', duration: 400, delay: 500, easing: 'ease-out' } } },
          // Right card (After)
          card(980, 200, 820, 560, 'cmp-right'),
          { id: 'cmp-rt', type: 'text', position: { x: 980, y: 220, width: 820, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: textMint, textAlign: 'center' }, content: 'AFTER', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'cmp-r1', type: 'text', position: { x: 1040, y: 310, width: 700, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: '✓  자동화 파이프라인 — 주 2시간', animation: { enter: { type: 'slideLeft', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'cmp-r2', type: 'text', position: { x: 1040, y: 380, width: 700, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: '✓  오류율 0.3%', animation: { enter: { type: 'slideLeft', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'cmp-r3', type: 'text', position: { x: 1040, y: 450, width: 700, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: '✓  실시간 대시보드', animation: { enter: { type: 'slideLeft', duration: 400, delay: 500, easing: 'ease-out' } } },
          // VS divider
          { id: 'cmp-vs', type: 'text', position: { x: 890, y: 440, width: 140, height: 60 }, rotation: 0, opacity: 1, zIndex: 20, style: { fontSize: '24px', fontWeight: '800', color: textWhite, textAlign: 'center' }, content: 'VS', animation: { enter: { type: 'scaleIn', duration: 400, delay: 200, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }
    }]
  },

  // 5. 인용문/임팩트
  {
    id: 'quote-impact',
    title: '임팩트 인용문',
    category: '프레젠테이션',
    thumbnail: { bg: `linear-gradient(180deg, #0a0a0a 0%, #0a1628 100%)` },
    slides: [{
      id: 'qi-main', label: '메인',
      data: {
        id: 'tpl-qi-1', order: 0, duration: 5000,
        background: { type: 'solid', value: dark },
        elements: [
          { id: 'qi-deco', type: 'text', position: { x: 200, y: 200, width: 200, height: 200 }, rotation: 0, opacity: 0.08, zIndex: 1, style: { fontSize: '180px', fontWeight: '900', color: textMint, textAlign: 'left' }, content: '"', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'qi-quote', type: 'text', position: { x: 260, y: 320, width: 1400, height: 160 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '300', color: textWhite, textAlign: 'left', lineHeight: '72px' }, content: '기술은 복잡한 것을\n단순하게 만들 때 가치가 있다.', animation: { enter: { type: 'fadeIn', duration: 800, delay: 200, easing: 'ease-out' } } },
          { id: 'qi-line', type: 'shape', position: { x: 260, y: 530, width: 80, height: 3 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: mint, borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          { id: 'qi-author', type: 'text', position: { x: 260, y: 560, width: 600, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: textWhite, textAlign: 'left' }, content: '— 제품 철학', animation: { enter: { type: 'fadeIn', duration: 400, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: ''
      }
    }]
  },

  // 6. 한글 자음 (기존 것 개선)
  {
    id: 'korean-consonants',
    title: '한글 자음 14자',
    category: '교육',
    thumbnail: { bg: `linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)` },
    slides: [{
      id: 'kc-main', label: '메인',
      data: {
        id: 'tpl-kc-1', order: 0, duration: 8000,
        background: { type: 'gradient', value: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' },
        elements: [
          { id: 'kc-cat', type: 'text', position: { x: 120, y: 60, width: 600, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '600', color: '#a78bfa', textAlign: 'left', letterSpacing: '6px' }, content: 'KOREAN  한글', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
          { id: 'kc-title', type: 'text', position: { x: 120, y: 110, width: 800, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '자음 14자', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'kc-sub', type: 'text', position: { x: 120, y: 200, width: 700, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#c4b5fd', textAlign: 'left' }, content: '훈민정음에서 비롯된 과학적 문자 체계', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          // Row 1
          ...['ㄱ기역', 'ㄴ니은', 'ㄷ디귿', 'ㄹ리을', 'ㅁ미음', 'ㅂ비읍', 'ㅅ시옷'].map((item, i) => {
            const char = item[0];
            const name = item.slice(1);
            const x = 120 + i * 135;
            const colors = ['#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#fb7185', '#f472b6', '#818cf8'];
            return [
              { id: `kc-bg${i}`, type: 'shape', position: { x, y: 300, width: 115, height: 115 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: colors[i].replace(')', ',0.12)').replace('rgb', 'rgba').startsWith('rgba') ? colors[i].replace(')', ',0.12)') : `${colors[i]}1e`, borderRadius: '14px' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 300 + i * 50, easing: 'ease-out' } } },
              { id: `kc-ch${i}`, type: 'text', position: { x, y: 310, width: 115, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '38px', fontWeight: '700', color: '#fff', textAlign: 'center' }, content: char, animation: { enter: { type: 'fadeIn', duration: 250, delay: 350 + i * 50, easing: 'ease-out' } } },
              { id: `kc-nm${i}`, type: 'text', position: { x, y: 380, width: 115, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '13px', fontWeight: '500', color: colors[i], textAlign: 'center' }, content: name, animation: { enter: { type: 'fadeIn', duration: 250, delay: 350 + i * 50, easing: 'ease-out' } } },
            ];
          }).flat(),
          // Row 2
          ...['ㅇ이응', 'ㅈ지읒', 'ㅊ치읓', 'ㅋ키읔', 'ㅌ티읕', 'ㅍ피읖', 'ㅎ히읗'].map((item, i) => {
            const char = item[0];
            const name = item.slice(1);
            const x = 120 + i * 135;
            const colors = ['#38bdf8', '#a78bfa', '#34d399', '#fbbf24', '#fb7185', '#f472b6', '#818cf8'];
            const isSpecial = i === 0;
            return [
              { id: `kc-bg2${i}`, type: 'shape', position: { x, y: 460, width: 115, height: 115 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: isSpecial ? 'rgba(56,189,248,0.2)' : `${colors[i]}1e`, borderRadius: '14px' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 600 + i * 50, easing: 'ease-out' } } },
              { id: `kc-ch2${i}`, type: 'text', position: { x, y: 470, width: 115, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '38px', fontWeight: '700', color: isSpecial ? '#38bdf8' : '#fff', textAlign: 'center' }, content: char, animation: { enter: { type: 'fadeIn', duration: 250, delay: 650 + i * 50, easing: 'ease-out' } } },
              { id: `kc-nm2${i}`, type: 'text', position: { x, y: 540, width: 115, height: 25 }, rotation: 0, opacity: isSpecial ? 0.8 : 0.5, zIndex: 10, style: { fontSize: '13px', fontWeight: isSpecial ? '600' : '500', color: colors[i], textAlign: 'center' }, content: isSpecial ? `${name} ★` : name, animation: { enter: { type: 'fadeIn', duration: 250, delay: 650 + i * 50, easing: 'ease-out' } } },
            ];
          }).flat(),
          // Decorative
          { id: 'kc-deco', type: 'text', position: { x: 1250, y: 150, width: 600, height: 600 }, rotation: 0, opacity: 0.03, zIndex: 1, style: { fontSize: '500px', fontWeight: '900', color: '#fff', textAlign: 'center' }, content: 'ㅎ', animation: { enter: { type: 'fadeIn', duration: 1000, delay: 0, easing: 'ease-out' } } },
          { id: 'kc-note', type: 'text', position: { x: 120, y: 640, width: 900, height: 50 }, rotation: 0, opacity: 0.35, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#e2e8f0', textAlign: 'left' }, content: '훈민정음 창제 원리: 발음 기관의 모양을 본떠 기본 자음 5자(ㄱ ㄴ ㅁ ㅅ ㅇ)를 만들고, 획을 더하여 파생.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 1000, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }
    }]
  },

  // 7. 한글 수업 (레퍼런스 기반) — 6슬라이드
  {
    id: 'hangul-lesson',
    title: '한글 수업 ㄱㄴㄷ',
    category: '교육',
    thumbnail: { bg: '#1e2536' },
    slides: [
      // Slide 1: 타이틀
      { id: 'hl-1', label: '타이틀', data: {
        id: 'tpl-hl-1', order: 0, duration: 5000,
        background: { type: 'gradient', value: 'radial-gradient(ellipse at 30% 40%, #222d45, #1a2035)' },
        elements: [
          // Badge
          { id: 'hl1-badge-bg', type: 'shape', position: { x: 760, y: 345, width: 180, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(75,123,236,0.1)', borderRadius: '24px', borderColor: 'rgba(75,123,236,0.2)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
          { id: 'hl1-badge', type: 'text', position: { x: 760, y: 350, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#93b4ff', textAlign: 'center' }, content: 'Lesson 1', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Title
          { id: 'hl1-title', type: 'text', position: { x: 360, y: 415, width: 1200, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '72px', fontWeight: '800', color: '#f1f5f9', textAlign: 'center', letterSpacing: '-1px' }, content: '한글 배우기', animation: { enter: { type: 'slideUp', duration: 600, delay: 200, easing: 'ease-out' } } },
          { id: 'hl1-sub', type: 'text', position: { x: 460, y: 535, width: 1000, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '400', color: '#64748b', textAlign: 'center' }, content: '첫 번째 자음 ㄱ, ㄴ, ㄷ 을 배워봅시다', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          // Letter cards
          { id: 'hl1-lc1', type: 'shape', position: { x: 740, y: 625, width: 120, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '20px', borderColor: 'rgba(75,123,236,0.2)', borderWidth: 1 }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hl1-l1', type: 'text', position: { x: 740, y: 651, width: 120, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: '800', color: '#93b4ff', textAlign: 'center' }, content: 'ㄱ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl1-lc2', type: 'shape', position: { x: 890, y: 625, width: 120, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '20px', borderColor: 'rgba(75,123,236,0.2)', borderWidth: 1 }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 550, easing: 'ease-out' } } },
          { id: 'hl1-l2', type: 'text', position: { x: 890, y: 651, width: 120, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: '800', color: '#93b4ff', textAlign: 'center' }, content: 'ㄴ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'hl1-lc3', type: 'shape', position: { x: 1040, y: 625, width: 120, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '20px', borderColor: 'rgba(75,123,236,0.2)', borderWidth: 1 }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          { id: 'hl1-l3', type: 'text', position: { x: 1040, y: 651, width: 120, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: '800', color: '#93b4ff', textAlign: 'center' }, content: 'ㄷ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: '타이틀 슬라이드'
      }},
      // Slide 2: ㄱ 소개
      { id: 'hl-2', label: 'ㄱ 기역', data: {
        id: 'tpl-hl-2', order: 1, duration: 7000,
        background: { type: 'solid', value: '#1e2536' },
        elements: [
          // Left: Big letter
          { id: 'hl2-big-bg', type: 'shape', position: { x: 140, y: 395, width: 280, height: 280 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.06)', borderRadius: '24px', borderColor: 'rgba(75,123,236,0.2)', borderWidth: 2 }, content: '', animation: { enter: { type: 'scaleIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hl2-big', type: 'text', position: { x: 140, y: 447, width: 280, height: 240 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '160px', fontWeight: '900', color: '#f1f5f9', textAlign: 'center' }, content: 'ㄱ', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          // Romanization badge
          { id: 'hl2-roman-bg', type: 'shape', position: { x: 340, y: 625, width: 80, height: 32 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#4b7bec', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'hl2-roman', type: 'text', position: { x: 340, y: 628, width: 80, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'g / k', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          // Letter name
          { id: 'hl2-name', type: 'text', position: { x: 140, y: 715, width: 280, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '기역 (giyeok)', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          // Sound badge
          { id: 'hl2-sound-bg', type: 'shape', position: { x: 170, y: 775, width: 220, height: 36 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '8px', borderColor: 'rgba(75,123,236,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'hl2-sound', type: 'text', position: { x: 170, y: 780, width: 220, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '500', color: '#93b4ff', textAlign: 'center' }, content: '🔈 "g" as in go', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // Right: Title
          { id: 'hl2-title', type: 'text', position: { x: 560, y: 275, width: 1200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: 'ㄱ 으로 시작하는 단어', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          // Word card 1
          { id: 'hl2-w1-bg', type: 'shape', position: { x: 560, y: 375, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(75,123,236,0.05)', borderRadius: '16px', borderColor: 'rgba(75,123,236,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hl2-w1-emoji', type: 'text', position: { x: 600, y: 400, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🍂', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'hl2-w1-word', type: 'text', position: { x: 700, y: 395, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '가을', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'hl2-w1-mean', type: 'text', position: { x: 700, y: 445, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Autumn — ga-eul', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          // Word card 2
          { id: 'hl2-w2-bg', type: 'shape', position: { x: 560, y: 525, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(75,123,236,0.05)', borderRadius: '16px', borderColor: 'rgba(75,123,236,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl2-w2-emoji', type: 'text', position: { x: 600, y: 550, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🐕', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl2-w2-word', type: 'text', position: { x: 700, y: 545, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '강아지', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl2-w2-mean', type: 'text', position: { x: 700, y: 595, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Puppy — gang-a-ji', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          // Word card 3
          { id: 'hl2-w3-bg', type: 'shape', position: { x: 560, y: 675, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(75,123,236,0.05)', borderRadius: '16px', borderColor: 'rgba(75,123,236,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hl2-w3-emoji', type: 'text', position: { x: 600, y: 700, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🍎', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl2-w3-word', type: 'text', position: { x: 700, y: 695, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '과일', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl2-w3-mean', type: 'text', position: { x: 700, y: 745, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Fruit — gwa-il', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: 'ㄱ 기역'
      }},
      // Slide 3: ㄴ 소개
      { id: 'hl-3', label: 'ㄴ 니은', data: {
        id: 'tpl-hl-3', order: 2, duration: 7000,
        background: { type: 'solid', value: '#1e2536' },
        elements: [
          { id: 'hl3-big-bg', type: 'shape', position: { x: 140, y: 395, width: 280, height: 280 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(130,170,255,0.06)', borderRadius: '24px', borderColor: 'rgba(130,170,255,0.2)', borderWidth: 2 }, content: '', animation: { enter: { type: 'scaleIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hl3-big', type: 'text', position: { x: 140, y: 447, width: 280, height: 240 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '160px', fontWeight: '900', color: '#f1f5f9', textAlign: 'center' }, content: 'ㄴ', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hl3-roman-bg', type: 'shape', position: { x: 355, y: 625, width: 50, height: 32 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#82aaff', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'hl3-roman', type: 'text', position: { x: 355, y: 628, width: 50, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'n', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'hl3-name', type: 'text', position: { x: 140, y: 715, width: 280, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '니은 (nieun)', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl3-sound-bg', type: 'shape', position: { x: 165, y: 775, width: 230, height: 36 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(130,170,255,0.08)', borderRadius: '8px', borderColor: 'rgba(130,170,255,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'hl3-sound', type: 'text', position: { x: 165, y: 780, width: 230, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '500', color: '#93b4ff', textAlign: 'center' }, content: '🔈 "n" as in nose', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl3-title', type: 'text', position: { x: 560, y: 275, width: 1200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: 'ㄴ 으로 시작하는 단어', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'hl3-w1-bg', type: 'shape', position: { x: 560, y: 375, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(130,170,255,0.05)', borderRadius: '16px', borderColor: 'rgba(130,170,255,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hl3-w1-emoji', type: 'text', position: { x: 600, y: 400, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', textAlign: 'center' }, content: '🌳', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'hl3-w1-word', type: 'text', position: { x: 700, y: 395, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '나무', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'hl3-w1-mean', type: 'text', position: { x: 700, y: 445, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Tree — na-mu', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'hl3-w2-bg', type: 'shape', position: { x: 560, y: 525, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(130,170,255,0.05)', borderRadius: '16px', borderColor: 'rgba(130,170,255,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl3-w2-emoji', type: 'text', position: { x: 600, y: 550, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', textAlign: 'center' }, content: '🦋', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl3-w2-word', type: 'text', position: { x: 700, y: 545, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '나비', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl3-w2-mean', type: 'text', position: { x: 700, y: 595, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Butterfly — na-bi', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'hl3-w3-bg', type: 'shape', position: { x: 560, y: 675, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(130,170,255,0.05)', borderRadius: '16px', borderColor: 'rgba(130,170,255,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hl3-w3-emoji', type: 'text', position: { x: 600, y: 700, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', textAlign: 'center' }, content: '🌍', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl3-w3-word', type: 'text', position: { x: 700, y: 695, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '나라', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl3-w3-mean', type: 'text', position: { x: 700, y: 745, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Country — na-ra', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: 'ㄴ 니은'
      }},
      // Slide 4: ㄷ 소개
      { id: 'hl-4', label: 'ㄷ 디귿', data: {
        id: 'tpl-hl-4', order: 3, duration: 7000,
        background: { type: 'solid', value: '#1e2536' },
        elements: [
          { id: 'hl4-big-bg', type: 'shape', position: { x: 140, y: 395, width: 280, height: 280 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(99,145,255,0.06)', borderRadius: '24px', borderColor: 'rgba(99,145,255,0.2)', borderWidth: 2 }, content: '', animation: { enter: { type: 'scaleIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hl4-big', type: 'text', position: { x: 140, y: 447, width: 280, height: 240 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '160px', fontWeight: '900', color: '#f1f5f9', textAlign: 'center' }, content: 'ㄷ', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hl4-roman-bg', type: 'shape', position: { x: 345, y: 625, width: 70, height: 32 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#6391ff', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'hl4-roman', type: 'text', position: { x: 345, y: 628, width: 70, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'd / t', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'hl4-name', type: 'text', position: { x: 140, y: 715, width: 280, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '디귿 (digeut)', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl4-sound-bg', type: 'shape', position: { x: 160, y: 775, width: 240, height: 36 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(99,145,255,0.08)', borderRadius: '8px', borderColor: 'rgba(99,145,255,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'hl4-sound', type: 'text', position: { x: 160, y: 780, width: 240, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '500', color: '#93b4ff', textAlign: 'center' }, content: '🔈 "d" as in door', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl4-title', type: 'text', position: { x: 560, y: 275, width: 1200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: 'ㄷ 으로 시작하는 단어', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'hl4-w1-bg', type: 'shape', position: { x: 560, y: 375, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(99,145,255,0.05)', borderRadius: '16px', borderColor: 'rgba(99,145,255,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hl4-w1-emoji', type: 'text', position: { x: 600, y: 400, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', textAlign: 'center' }, content: '🌙', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'hl4-w1-word', type: 'text', position: { x: 700, y: 395, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '달', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'hl4-w1-mean', type: 'text', position: { x: 700, y: 445, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Moon — dal', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'hl4-w2-bg', type: 'shape', position: { x: 560, y: 525, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(99,145,255,0.05)', borderRadius: '16px', borderColor: 'rgba(99,145,255,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl4-w2-emoji', type: 'text', position: { x: 600, y: 550, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', textAlign: 'center' }, content: '🐔', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl4-w2-word', type: 'text', position: { x: 700, y: 545, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '닭', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'hl4-w2-mean', type: 'text', position: { x: 700, y: 595, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Chicken — dalk', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'hl4-w3-bg', type: 'shape', position: { x: 560, y: 675, width: 1200, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(99,145,255,0.05)', borderRadius: '16px', borderColor: 'rgba(99,145,255,0.1)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hl4-w3-emoji', type: 'text', position: { x: 600, y: 700, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', textAlign: 'center' }, content: '🍓', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl4-w3-word', type: 'text', position: { x: 700, y: 695, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#f1f5f9', textAlign: 'left' }, content: '딸기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl4-w3-mean', type: 'text', position: { x: 700, y: 745, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#94a3b8', textAlign: 'left' }, content: 'Strawberry — ttal-gi', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: 'ㄷ 디귿'
      }},
      // Slide 5: 원리 설명
      { id: 'hl-5', label: '창제 원리', data: {
        id: 'tpl-hl-5', order: 4, duration: 6000,
        background: { type: 'gradient', value: 'radial-gradient(ellipse at 60% 50%, #222d45, #1a2035)' },
        elements: [
          { id: 'hl5-tag', type: 'text', position: { x: 660, y: 240, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#93b4ff', textAlign: 'center', letterSpacing: '3px' }, content: 'PRINCIPLE', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'hl5-title', type: 'text', position: { x: 310, y: 290, width: 1300, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '800', color: '#f1f5f9', textAlign: 'center' }, content: '발음기관의 모양을 본뜨다', animation: { enter: { type: 'slideUp', duration: 600, delay: 100, easing: 'ease-out' } } },
          // ㄱ = 혀뿌리
          { id: 'hl5-c1', type: 'shape', position: { x: 200, y: 480, width: 440, height: 360 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(75,123,236,0.06)', borderRadius: '20px', borderColor: 'rgba(75,123,236,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hl5-c1-letter', type: 'text', position: { x: 200, y: 530, width: 440, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '100px', fontWeight: '900', color: '#6391ff', textAlign: 'center' }, content: 'ㄱ', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hl5-c1-desc', type: 'text', position: { x: 230, y: 690, width: 380, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }, content: '혀뿌리가\n목구멍을 막는 모양', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          // ㄴ = 혀끝
          { id: 'hl5-c2', type: 'shape', position: { x: 720, y: 480, width: 440, height: 360 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(130,170,255,0.06)', borderRadius: '20px', borderColor: 'rgba(130,170,255,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hl5-c2-letter', type: 'text', position: { x: 720, y: 530, width: 440, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '100px', fontWeight: '900', color: '#82aaff', textAlign: 'center' }, content: 'ㄴ', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl5-c2-desc', type: 'text', position: { x: 750, y: 690, width: 380, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }, content: '혀끝이\n윗잇몸에 닿는 모양', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          // ㄷ = ㄴ + 획
          { id: 'hl5-c3', type: 'shape', position: { x: 1240, y: 480, width: 440, height: 360 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'rgba(99,145,255,0.06)', borderRadius: '20px', borderColor: 'rgba(99,145,255,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hl5-c3-letter', type: 'text', position: { x: 1240, y: 530, width: 440, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '100px', fontWeight: '900', color: '#6391ff', textAlign: 'center' }, content: 'ㄷ', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hl5-c3-desc', type: 'text', position: { x: 1270, y: 690, width: 380, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }, content: 'ㄴ에 획을 더하면\n소리가 세짐', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          // Arrow ㄴ → ㄷ
          { id: 'hl5-arrow', type: 'text', position: { x: 1160, y: 580, width: 80, height: 60 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#93b4ff', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: '창제 원리'
      }},
      // Slide 6: 복습
      { id: 'hl-6', label: '복습', data: {
        id: 'tpl-hl-6', order: 5, duration: 5000,
        background: { type: 'gradient', value: 'radial-gradient(ellipse at 50% 40%, #222d45, #1a2035)' },
        elements: [
          { id: 'hl6-title', type: 'text', position: { x: 460, y: 270, width: 1000, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#f1f5f9', textAlign: 'center' }, content: '오늘 배운 글자', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          // 3 big letters
          { id: 'hl6-l1', type: 'shape', position: { x: 540, y: 410, width: 160, height: 160 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.15)', borderRadius: '22px', borderColor: 'rgba(75,123,236,0.3)', borderWidth: 1 }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hl6-l1t', type: 'text', position: { x: 540, y: 446, width: 160, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '900', color: '#f1f5f9', textAlign: 'center' }, content: 'ㄱ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'hl6-l2', type: 'shape', position: { x: 760, y: 410, width: 160, height: 160 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(130,170,255,0.12)', borderRadius: '22px', borderColor: 'rgba(130,170,255,0.25)', borderWidth: 1 }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 250, easing: 'ease-out' } } },
          { id: 'hl6-l2t', type: 'text', position: { x: 760, y: 446, width: 160, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '900', color: '#f1f5f9', textAlign: 'center' }, content: 'ㄴ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'hl6-l3', type: 'shape', position: { x: 980, y: 410, width: 160, height: 160 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(99,145,255,0.1)', borderRadius: '22px', borderColor: 'rgba(99,145,255,0.2)', borderWidth: 1 }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hl6-l3t', type: 'text', position: { x: 980, y: 446, width: 160, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '900', color: '#f1f5f9', textAlign: 'center' }, content: 'ㄷ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Summary
          { id: 'hl6-sum', type: 'text', position: { x: 360, y: 630, width: 1200, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#64748b', textAlign: 'center', lineHeight: '1.7' }, content: '기역 · 니은 · 디귿\n혀와 목의 모양을 본떠 만든 한글의 첫 자음들!', animation: { enter: { type: 'fadeIn', duration: 500, delay: 500, easing: 'ease-out' } } },
          // Next preview chips
          { id: 'hl6-next-bg', type: 'shape', position: { x: 665, y: 780, width: 120, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '10px', borderColor: 'rgba(75,123,236,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'hl6-next', type: 'text', position: { x: 665, y: 788, width: 120, height: 24 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#93b4ff', textAlign: 'center' }, content: '다음 시간 →', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'hl6-n1-bg', type: 'shape', position: { x: 810, y: 780, width: 60, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '10px', borderColor: 'rgba(75,123,236,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
          { id: 'hl6-n1', type: 'text', position: { x: 810, y: 788, width: 60, height: 24 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#93b4ff', textAlign: 'center' }, content: 'ㄹ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
          { id: 'hl6-n2-bg', type: 'shape', position: { x: 890, y: 780, width: 60, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '10px', borderColor: 'rgba(75,123,236,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 750, easing: 'ease-out' } } },
          { id: 'hl6-n2', type: 'text', position: { x: 890, y: 788, width: 60, height: 24 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#93b4ff', textAlign: 'center' }, content: 'ㅁ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 750, easing: 'ease-out' } } },
          { id: 'hl6-n3-bg', type: 'shape', position: { x: 970, y: 780, width: 60, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'rgba(75,123,236,0.08)', borderRadius: '10px', borderColor: 'rgba(75,123,236,0.15)', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 800, easing: 'ease-out' } } },
          { id: 'hl6-n3', type: 'text', position: { x: 970, y: 788, width: 60, height: 24 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#93b4ff', textAlign: 'center' }, content: 'ㅂ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 800, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: '복습'
      }},
    ]
  },

  // 8. 라이트 테마 — 6슬라이드 세트 (제품 소개 프레젠테이션)
  {
    id: 'light-product-intro',
    title: '제품 소개 (라이트)',
    category: '프레젠테이션',
    thumbnail: { bg: '#ffffff' },
    slides: [
      // Slide 1: 타이틀
      {
        id: 'lp-1', label: '타이틀',
        data: {
          id: 'tpl-lp-1', order: 0, duration: 5000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'lp1-accent', type: 'shape', position: { x: 0, y: 0, width: 8, height: 1080 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#2563eb', borderRadius: '0' }, content: '', animation: { enter: { type: 'slideRight', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'lp1-tag', type: 'text', position: { x: 120, y: 340, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '600', color: '#2563eb', textAlign: 'left', letterSpacing: '3px' }, content: 'PRODUCT LAUNCH 2024', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'lp1-title', type: 'text', position: { x: 120, y: 380, width: 900, height: 140 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '68px', fontWeight: '800', color: '#0f172a', textAlign: 'left', lineHeight: '1.1' }, content: '더 나은 경험을\n디자인하다', animation: { enter: { type: 'slideUp', duration: 600, delay: 300, easing: 'ease-out' } } },
            { id: 'lp1-sub', type: 'text', position: { x: 120, y: 550, width: 700, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '400', color: '#64748b', textAlign: 'left' }, content: '사용자 중심의 혁신적 솔루션으로 비즈니스를 성장시키세요.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 500, easing: 'ease-out' } } },
            { id: 'lp1-circle', type: 'shape', position: { x: 1300, y: 200, width: 500, height: 500 }, rotation: 0, opacity: 0.06, zIndex: 1, style: { backgroundColor: '#2563eb', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 800, delay: 100, easing: 'ease-out' } } },
            { id: 'lp1-circle2', type: 'shape', position: { x: 1450, y: 350, width: 300, height: 300 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#2563eb', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 800, delay: 200, easing: 'ease-out' } } },
            { id: 'lp1-date', type: 'text', position: { x: 120, y: 900, width: 300, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#94a3b8', textAlign: 'left' }, content: '2024.03 — Confidential', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: '타이틀 슬라이드'
        }
      },
      // Slide 2: 문제 정의
      {
        id: 'lp-2', label: '문제 정의',
        data: {
          id: 'tpl-lp-2', order: 1, duration: 6000,
          background: { type: 'solid', value: '#f8fafc' },
          elements: [
            { id: 'lp2-tag', type: 'text', position: { x: 120, y: 80, width: 200, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#ef4444', textAlign: 'left', letterSpacing: '2px' }, content: 'PROBLEM', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'lp2-title', type: 'text', position: { x: 120, y: 115, width: 800, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#0f172a', textAlign: 'left' }, content: '기존 방식의 한계', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Pain point cards
            { id: 'lp2-c1', type: 'shape', position: { x: 120, y: 240, width: 520, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'lp2-c1-num', type: 'text', position: { x: 150, y: 260, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '32px', fontWeight: '800', color: '#ef4444', textAlign: 'left' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'lp2-c1-t', type: 'text', position: { x: 220, y: 265, width: 380, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#0f172a', textAlign: 'left' }, content: '복잡한 워크플로우', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'lp2-c1-d', type: 'text', position: { x: 220, y: 305, width: 380, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#64748b', textAlign: 'left' }, content: '평균 12단계의 프로세스를 거쳐야 하나의 작업이 완료됩니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },

            { id: 'lp2-c2', type: 'shape', position: { x: 120, y: 430, width: 520, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'lp2-c2-num', type: 'text', position: { x: 150, y: 450, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '32px', fontWeight: '800', color: '#ef4444', textAlign: 'left' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'lp2-c2-t', type: 'text', position: { x: 220, y: 455, width: 380, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#0f172a', textAlign: 'left' }, content: '데이터 사일로', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'lp2-c2-d', type: 'text', position: { x: 220, y: 495, width: 380, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#64748b', textAlign: 'left' }, content: '팀 간 정보가 공유되지 않아 의사결정이 지연됩니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },

            // Right side big number
            { id: 'lp2-stat', type: 'text', position: { x: 900, y: 280, width: 800, height: 200 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '160px', fontWeight: '900', color: '#0f172a', textAlign: 'center' }, content: '73%', animation: { enter: { type: 'fadeIn', duration: 600, delay: 400, easing: 'ease-out' } } },
            { id: 'lp2-stat-d', type: 'text', position: { x: 950, y: 490, width: 700, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '의 기업이 비효율적 프로세스로 인한\n생산성 저하를 경험하고 있습니다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 3: 솔루션 (3열 카드)
      {
        id: 'lp-3', label: '솔루션',
        data: {
          id: 'tpl-lp-3', order: 2, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'lp3-tag', type: 'text', position: { x: 660, y: 80, width: 600, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#2563eb', textAlign: 'center', letterSpacing: '2px' }, content: 'SOLUTION', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'lp3-title', type: 'text', position: { x: 310, y: 115, width: 1300, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#0f172a', textAlign: 'center' }, content: '핵심 기능 3가지', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Card 1
            { id: 'lp3-c1', type: 'shape', position: { x: 120, y: 250, width: 520, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f0f7ff', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'lp3-c1-icon', type: 'shape', position: { x: 180, y: 300, width: 64, height: 64 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '16px' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'lp3-c1-t', type: 'text', position: { x: 180, y: 390, width: 400, height: 35 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#0f172a', textAlign: 'left' }, content: '자동화 엔진', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'lp3-c1-d', type: 'text', position: { x: 180, y: 440, width: 400, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#64748b', textAlign: 'left', lineHeight: '1.6' }, content: '반복 작업을 자동화하고\n12단계 → 3단계로\n프로세스를 단순화합니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'lp3-c2', type: 'shape', position: { x: 700, y: 250, width: 520, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#fef3f2', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'lp3-c2-icon', type: 'shape', position: { x: 760, y: 300, width: 64, height: 64 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ef4444', borderRadius: '16px' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'lp3-c2-t', type: 'text', position: { x: 760, y: 390, width: 400, height: 35 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#0f172a', textAlign: 'left' }, content: '실시간 협업', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'lp3-c2-d', type: 'text', position: { x: 760, y: 440, width: 400, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#64748b', textAlign: 'left', lineHeight: '1.6' }, content: '모든 팀원이 하나의\n워크스페이스에서 실시간으로\n함께 작업합니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Card 3
            { id: 'lp3-c3', type: 'shape', position: { x: 1280, y: 250, width: 520, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f0fdf4', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'lp3-c3-icon', type: 'shape', position: { x: 1340, y: 300, width: 64, height: 64 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#16a34a', borderRadius: '16px' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'lp3-c3-t', type: 'text', position: { x: 1340, y: 390, width: 400, height: 35 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#0f172a', textAlign: 'left' }, content: 'AI 인사이트', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'lp3-c3-d', type: 'text', position: { x: 1340, y: 440, width: 400, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#64748b', textAlign: 'left', lineHeight: '1.6' }, content: '데이터를 자동 분석하여\n핵심 인사이트와 액션\n아이템을 제안합니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 4: 성과 지표 (숫자 강조)
      {
        id: 'lp-4', label: '성과 지표',
        data: {
          id: 'tpl-lp-4', order: 3, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'lp4-tag', type: 'text', position: { x: 660, y: 80, width: 600, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#2563eb', textAlign: 'center', letterSpacing: '2px' }, content: 'RESULTS', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'lp4-title', type: 'text', position: { x: 310, y: 115, width: 1300, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#0f172a', textAlign: 'center' }, content: '도입 후 변화', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Line
            { id: 'lp4-line', type: 'shape', position: { x: 760, y: 200, width: 400, height: 2 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e2e8f0', borderRadius: '1px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 150, easing: 'ease-out' } } },
            // Stat 1
            { id: 'lp4-n1', type: 'text', position: { x: 100, y: 300, width: 400, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: '900', color: '#2563eb', textAlign: 'center' }, content: '3x', animation: { enter: { type: 'scaleIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            { id: 'lp4-d1', type: 'text', position: { x: 100, y: 430, width: 400, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '업무 처리 속도 향상', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Stat 2
            { id: 'lp4-n2', type: 'text', position: { x: 560, y: 300, width: 400, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: '900', color: '#ef4444', textAlign: 'center' }, content: '-67%', animation: { enter: { type: 'scaleIn', duration: 500, delay: 300, easing: 'ease-out' } } },
            { id: 'lp4-d2', type: 'text', position: { x: 560, y: 430, width: 400, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '운영 비용 절감', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Stat 3
            { id: 'lp4-n3', type: 'text', position: { x: 1020, y: 300, width: 400, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: '900', color: '#16a34a', textAlign: 'center' }, content: '98%', animation: { enter: { type: 'scaleIn', duration: 500, delay: 400, easing: 'ease-out' } } },
            { id: 'lp4-d3', type: 'text', position: { x: 1020, y: 430, width: 400, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#64748b', textAlign: 'center' }, content: '고객 만족도', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            // Bar chart visual
            { id: 'lp4-b1', type: 'shape', position: { x: 200, y: 700, width: 160, height: 80 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#dbeafe', borderRadius: '8px 8px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'lp4-b2', type: 'shape', position: { x: 420, y: 640, width: 160, height: 140 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#93c5fd', borderRadius: '8px 8px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 550, easing: 'ease-out' } } },
            { id: 'lp4-b3', type: 'shape', position: { x: 640, y: 560, width: 160, height: 220 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#60a5fa', borderRadius: '8px 8px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 600, easing: 'ease-out' } } },
            { id: 'lp4-b4', type: 'shape', position: { x: 860, y: 500, width: 160, height: 280 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '8px 8px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 650, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 5: 고객 후기
      {
        id: 'lp-5', label: '고객 후기',
        data: {
          id: 'tpl-lp-5', order: 4, duration: 6000,
          background: { type: 'solid', value: '#f8fafc' },
          elements: [
            { id: 'lp5-tag', type: 'text', position: { x: 660, y: 80, width: 600, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#2563eb', textAlign: 'center', letterSpacing: '2px' }, content: 'TESTIMONIAL', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'lp5-quote-mark', type: 'text', position: { x: 300, y: 180, width: 150, height: 150 }, rotation: 0, opacity: 0.08, zIndex: 1, style: { fontSize: '200px', fontWeight: '900', color: '#2563eb', textAlign: 'center' }, content: '"', animation: { enter: { type: 'fadeIn', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'lp5-quote', type: 'text', position: { x: 310, y: 300, width: 1300, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#0f172a', textAlign: 'center', lineHeight: '1.6' }, content: '도입 후 팀의 생산성이 눈에 띄게 향상되었습니다.\n무엇보다 팀원들이 반복 작업에서 벗어나\n창의적인 업무에 집중할 수 있게 된 점이 가장 큰 변화입니다.', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'lp5-line', type: 'shape', position: { x: 880, y: 500, width: 160, height: 3 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'lp5-author', type: 'text', position: { x: 310, y: 540, width: 1300, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '600', color: '#0f172a', textAlign: 'center' }, content: '김지현 — CTO, 넥스트테크', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
            { id: 'lp5-role', type: 'text', position: { x: 310, y: 575, width: 1300, height: 25 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#94a3b8', textAlign: 'center' }, content: 'Series B · 직원 120명 · SaaS', animation: { enter: { type: 'fadeIn', duration: 400, delay: 650, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 6: CTA (마무리)
      {
        id: 'lp-6', label: 'CTA',
        data: {
          id: 'tpl-lp-6', order: 5, duration: 5000,
          background: { type: 'solid', value: '#2563eb' },
          elements: [
            { id: 'lp6-title', type: 'text', position: { x: 260, y: 320, width: 1400, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '지금 시작하세요', animation: { enter: { type: 'slideUp', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'lp6-sub', type: 'text', position: { x: 460, y: 440, width: 1000, height: 50 }, rotation: 0, opacity: 0.8, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '14일 무료 체험 · 신용카드 불필요 · 5분 만에 설정 완료', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            // CTA button shape
            { id: 'lp6-btn', type: 'shape', position: { x: 760, y: 540, width: 400, height: 64 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffffff', borderRadius: '32px' }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'lp6-btn-text', type: 'text', position: { x: 760, y: 550, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2563eb', textAlign: 'center' }, content: '무료 체험 시작하기 →', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // contact
            { id: 'lp6-contact', type: 'text', position: { x: 660, y: 680, width: 600, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'hello@product.com · product.com', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
            // Decorative circles
            { id: 'lp6-deco1', type: 'shape', position: { x: -100, y: -100, width: 400, height: 400 }, rotation: 0, opacity: 0.1, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 800, delay: 0, easing: 'ease-out' } } },
            { id: 'lp6-deco2', type: 'shape', position: { x: 1600, y: 700, width: 500, height: 500 }, rotation: 0, opacity: 0.08, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 800, delay: 100, easing: 'ease-out' } } },
          ],
          transition: { type: 'scale', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // 9. 문서형 프레젠테이션 — 도시혁신 정책 (라이트, 5슬라이드)
  {
    id: 'doc-policy',
    title: '정책 보고서 (문서형)',
    category: '보고서',
    thumbnail: { bg: '#f5f5f0' },
    slides: [
      // Slide 1: 표지
      { id: 'dp-1', label: '표지', data: {
        id: 'tpl-dp-1', order: 0, duration: 5000,
        background: { type: 'solid', value: '#f5f5f0' },
        elements: [
          // Left accent bar
          { id: 'dp1-bar', type: 'shape', position: { x: 140, y: 200, width: 6, height: 400 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#1a1a1a', borderRadius: '3px' }, content: '', animation: { enter: { type: 'slideDown', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'dp1-chap', type: 'text', position: { x: 190, y: 220, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#888888', textAlign: 'left' }, content: 'Policy Report 2024', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'dp1-title', type: 'text', position: { x: 190, y: 270, width: 1000, height: 200 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '800', color: '#1a1a1a', textAlign: 'left', lineHeight: '1.2' }, content: '지방 중소도시\n혁신지구 도입 전략', animation: { enter: { type: 'slideUp', duration: 600, delay: 300, easing: 'ease-out' } } },
          { id: 'dp1-sub', type: 'text', position: { x: 190, y: 500, width: 800, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '특화발전과 거점 역할 강화를 위한 정책 제안서', animation: { enter: { type: 'fadeIn', duration: 500, delay: 500, easing: 'ease-out' } } },
          // Bottom info
          { id: 'dp1-line', type: 'shape', position: { x: 190, y: 620, width: 200, height: 1 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#1a1a1a', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'dp1-info', type: 'text', position: { x: 190, y: 640, width: 500, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#999999', textAlign: 'left' }, content: '도시혁신연구원  ·  2024.03', animation: { enter: { type: 'fadeIn', duration: 400, delay: 700, easing: 'ease-out' } } },
          // Decorative large number
          { id: 'dp1-deco', type: 'text', position: { x: 1300, y: 250, width: 500, height: 400 }, rotation: 0, opacity: 0.04, zIndex: 1, style: { fontSize: '400px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 2: Chapter 1 - 배경
      { id: 'dp-2', label: 'Ch.1 배경', data: {
        id: 'tpl-dp-2', order: 1, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          { id: 'dp2-chap', type: 'text', position: { x: 140, y: 100, width: 300, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '500', color: '#aaaaaa', textAlign: 'left' }, content: 'Chapter 1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'dp2-title', type: 'text', position: { x: 140, y: 140, width: 900, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1a1a1a', textAlign: 'left', lineHeight: '1.3' }, content: '특화발전을 위한 혁신지구 도입\n필요성과 주요 기능', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          // Divider
          { id: 'dp2-div', type: 'shape', position: { x: 140, y: 300, width: 1640, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#1a1a1a', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          // Section title
          { id: 'dp2-sec', type: 'text', position: { x: 140, y: 340, width: 800, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left', lineHeight: '1.4' }, content: '거점 지방 중소도시 역할 강화를 위한\n선진국가들의 노력', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          // Bullet points
          { id: 'dp2-b1', type: 'text', position: { x: 160, y: 470, width: 1560, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#444444', textAlign: 'left', lineHeight: '1.8' }, content: '•  해외의 강소도시 육성전략, 컴팩트 & 네트워크 전략 등에서\n   찾아볼 수 있는 공통점은 도시의 입지와 기능 등을 고려하여\n   지방도시 중에서도 주변 거점기능을 담당하는 도시를\n   중심으로 전략적으로 접근한다는 점임', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'dp2-b2', type: 'text', position: { x: 160, y: 640, width: 1560, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#444444', textAlign: 'left', lineHeight: '1.8' }, content: '•  또 하나 공통적으로 강조하고 있는 사항은 경제적인\n   거점 조성을 위해 가장 핵심적으로 다루고 있는 컨텐츠가\n   지역산업의 특화라는 점임', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          // Page number
          { id: 'dp2-pg', type: 'text', position: { x: 1700, y: 1000, width: 100, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#cccccc', textAlign: 'right' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
        ],
        transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 3: Chapter 2 - 3열 비교
      { id: 'dp-3', label: 'Ch.2 전략 비교', data: {
        id: 'tpl-dp-3', order: 2, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          { id: 'dp3-chap', type: 'text', position: { x: 140, y: 100, width: 300, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '500', color: '#aaaaaa', textAlign: 'left' }, content: 'Chapter 2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'dp3-title', type: 'text', position: { x: 140, y: 140, width: 900, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1a1a1a', textAlign: 'left' }, content: '해외 주요국 도시 전략 비교', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'dp3-div', type: 'shape', position: { x: 140, y: 240, width: 1640, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#1a1a1a', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          // Card 1 - 독일
          { id: 'dp3-c1', type: 'shape', position: { x: 140, y: 290, width: 500, height: 540 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f8f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 250, easing: 'ease-out' } } },
          { id: 'dp3-c1-flag', type: 'text', position: { x: 180, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', textAlign: 'center' }, content: '🇩🇪', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'dp3-c1-t', type: 'text', position: { x: 180, y: 400, width: 420, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '독일', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'dp3-c1-st', type: 'text', position: { x: 180, y: 445, width: 420, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#888888', textAlign: 'left' }, content: 'Gleichwertige Lebensverhältnisse', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },
          { id: 'dp3-c1-d', type: 'text', position: { x: 180, y: 500, width: 420, height: 250 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#555555', textAlign: 'left', lineHeight: '1.7' }, content: '•  균등한 생활여건 보장 원칙\n•  중소도시 네트워크 육성\n•  지역 산업 클러스터 집중\n•  연방-주 공동과제 체계', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
          // Card 2 - 일본
          { id: 'dp3-c2', type: 'shape', position: { x: 700, y: 290, width: 500, height: 540 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f8f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 350, easing: 'ease-out' } } },
          { id: 'dp3-c2-flag', type: 'text', position: { x: 740, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', textAlign: 'center' }, content: '🇯🇵', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'dp3-c2-t', type: 'text', position: { x: 740, y: 400, width: 420, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '일본', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'dp3-c2-st', type: 'text', position: { x: 740, y: 445, width: 420, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#888888', textAlign: 'left' }, content: 'コンパクトシティ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          { id: 'dp3-c2-d', type: 'text', position: { x: 740, y: 500, width: 420, height: 250 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#555555', textAlign: 'left', lineHeight: '1.7' }, content: '•  컴팩트시티 + 네트워크\n•  입지적정화 계획 수립\n•  도시기능 집약화 추진\n•  지방창생 교부금 지원', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
          // Card 3 - 프랑스
          { id: 'dp3-c3', type: 'shape', position: { x: 1260, y: 290, width: 500, height: 540 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f8f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
          { id: 'dp3-c3-flag', type: 'text', position: { x: 1300, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', textAlign: 'center' }, content: '🇫🇷', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'dp3-c3-t', type: 'text', position: { x: 1300, y: 400, width: 420, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '프랑스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'dp3-c3-st', type: 'text', position: { x: 1300, y: 445, width: 420, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '600', color: '#888888', textAlign: 'left' }, content: 'Pôles de compétitivité', animation: { enter: { type: 'fadeIn', duration: 300, delay: 620, easing: 'ease-out' } } },
          { id: 'dp3-c3-d', type: 'text', position: { x: 1300, y: 500, width: 420, height: 250 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#555555', textAlign: 'left', lineHeight: '1.7' }, content: '•  경쟁력 거점(Pôle) 지정\n•  산학연 클러스터 중심\n•  지방분권 개혁 병행\n•  메트로폴 광역연계', animation: { enter: { type: 'fadeIn', duration: 400, delay: 650, easing: 'ease-out' } } },
          { id: 'dp3-pg', type: 'text', position: { x: 1700, y: 1000, width: 100, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#cccccc', textAlign: 'right' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'slide-left', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 4: Chapter 3 - 핵심 수치
      { id: 'dp-4', label: 'Ch.3 핵심 수치', data: {
        id: 'tpl-dp-4', order: 3, duration: 6000,
        background: { type: 'solid', value: '#f5f5f0' },
        elements: [
          { id: 'dp4-chap', type: 'text', position: { x: 140, y: 100, width: 300, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '500', color: '#aaaaaa', textAlign: 'left' }, content: 'Chapter 3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'dp4-title', type: 'text', position: { x: 140, y: 140, width: 900, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1a1a1a', textAlign: 'left' }, content: '국내 중소도시 현황', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'dp4-div', type: 'shape', position: { x: 140, y: 240, width: 1640, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#1a1a1a', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          // Stat 1
          { id: 'dp4-n1', type: 'text', position: { x: 140, y: 320, width: 480, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '88px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center' }, content: '89개', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'dp4-d1', type: 'text', position: { x: 140, y: 450, width: 480, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: '#888888', textAlign: 'center', lineHeight: '1.5' }, content: '인구감소 위기지역\n(전체 시군의 52%)', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
          // Stat 2
          { id: 'dp4-n2', type: 'text', position: { x: 720, y: 320, width: 480, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '88px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center' }, content: '-23%', animation: { enter: { type: 'fadeIn', duration: 500, delay: 300, easing: 'ease-out' } } },
          { id: 'dp4-d2', type: 'text', position: { x: 720, y: 450, width: 480, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: '#888888', textAlign: 'center', lineHeight: '1.5' }, content: '10년간 지방 중소도시\n인구 감소율', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
          // Stat 3
          { id: 'dp4-n3', type: 'text', position: { x: 1300, y: 320, width: 480, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '88px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center' }, content: '3.2조', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          { id: 'dp4-d3', type: 'text', position: { x: 1300, y: 450, width: 480, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: '#888888', textAlign: 'center', lineHeight: '1.5' }, content: '연간 지역소멸 관련\n경제적 손실 추정', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
          // Bottom quote
          { id: 'dp4-qbg', type: 'shape', position: { x: 140, y: 600, width: 1640, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'dp4-q', type: 'text', position: { x: 200, y: 640, width: 1520, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '400', color: '#555555', textAlign: 'left', lineHeight: '1.7' }, content: '"지방 중소도시의 소멸은 단순한 인구 감소가 아니라, 지역 경제·교육·의료\n인프라의 연쇄 붕괴를 의미합니다. 선제적 거점도시 전략이 시급합니다."', animation: { enter: { type: 'fadeIn', duration: 500, delay: 600, easing: 'ease-out' } } },
          { id: 'dp4-qa', type: 'text', position: { x: 200, y: 770, width: 400, height: 24 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: '600', color: '#aaaaaa', textAlign: 'left' }, content: '— 국토연구원, 2024', animation: { enter: { type: 'fadeIn', duration: 400, delay: 700, easing: 'ease-out' } } },
          { id: 'dp4-pg', type: 'text', position: { x: 1700, y: 1000, width: 100, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#cccccc', textAlign: 'right' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 5: Chapter 4 - 정책 제안
      { id: 'dp-5', label: 'Ch.4 제안', data: {
        id: 'tpl-dp-5', order: 4, duration: 6000,
        background: { type: 'solid', value: '#1a1a1a' },
        elements: [
          { id: 'dp5-chap', type: 'text', position: { x: 140, y: 100, width: 300, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '500', color: '#666666', textAlign: 'left' }, content: 'Chapter 4', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'dp5-title', type: 'text', position: { x: 140, y: 140, width: 1000, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#f0f0e8', textAlign: 'left' }, content: '4대 핵심 정책 제안', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'dp5-div', type: 'shape', position: { x: 140, y: 240, width: 1640, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 3, style: { backgroundColor: '#ffffff', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          // 4 cards
          { id: 'dp5-c1', type: 'shape', position: { x: 140, y: 300, width: 780, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#242424', borderRadius: '16px', borderColor: '#333333', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 250, easing: 'ease-out' } } },
          { id: 'dp5-c1-n', type: 'text', position: { x: 180, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '800', color: '#f5f5f0', textAlign: 'left' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'dp5-c1-t', type: 'text', position: { x: 180, y: 390, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#f0f0e8', textAlign: 'left' }, content: '거점 혁신지구 지정 및 특화산업 육성', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'dp5-c1-d', type: 'text', position: { x: 180, y: 440, width: 700, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '400', color: '#888888', textAlign: 'left', lineHeight: '1.6' }, content: '지역별 산업 특성을 분석하여 맞춤형\n혁신지구를 지정하고 집중 투자', animation: { enter: { type: 'fadeIn', duration: 300, delay: 430, easing: 'ease-out' } } },

          { id: 'dp5-c2', type: 'shape', position: { x: 1000, y: 300, width: 780, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#242424', borderRadius: '16px', borderColor: '#333333', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 350, easing: 'ease-out' } } },
          { id: 'dp5-c2-n', type: 'text', position: { x: 1040, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '800', color: '#f5f5f0', textAlign: 'left' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'dp5-c2-t', type: 'text', position: { x: 1040, y: 390, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#f0f0e8', textAlign: 'left' }, content: '광역 네트워크 연계 체계 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'dp5-c2-d', type: 'text', position: { x: 1040, y: 440, width: 700, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '400', color: '#888888', textAlign: 'left', lineHeight: '1.6' }, content: '인접 중소도시 간 기능 분담 및\n교통·디지털 인프라 공동 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 530, easing: 'ease-out' } } },

          { id: 'dp5-c3', type: 'shape', position: { x: 140, y: 640, width: 780, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#242424', borderRadius: '16px', borderColor: '#333333', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
          { id: 'dp5-c3-n', type: 'text', position: { x: 180, y: 670, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '800', color: '#f5f5f0', textAlign: 'left' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'dp5-c3-t', type: 'text', position: { x: 180, y: 730, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#f0f0e8', textAlign: 'left' }, content: '정주여건 개선 패키지 도입', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'dp5-c3-d', type: 'text', position: { x: 180, y: 780, width: 700, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '400', color: '#888888', textAlign: 'left', lineHeight: '1.6' }, content: '의료·교육·문화 복합시설 확충으로\n청년 유입 기반 조성', animation: { enter: { type: 'fadeIn', duration: 300, delay: 630, easing: 'ease-out' } } },

          { id: 'dp5-c4', type: 'shape', position: { x: 1000, y: 640, width: 780, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#242424', borderRadius: '16px', borderColor: '#333333', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 550, easing: 'ease-out' } } },
          { id: 'dp5-c4-n', type: 'text', position: { x: 1040, y: 670, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '800', color: '#f5f5f0', textAlign: 'left' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'dp5-c4-t', type: 'text', position: { x: 1040, y: 730, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#f0f0e8', textAlign: 'left' }, content: '성과 기반 재정 지원 체계', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
          { id: 'dp5-c4-d', type: 'text', position: { x: 1040, y: 780, width: 700, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '400', color: '#888888', textAlign: 'left', lineHeight: '1.6' }, content: 'KPI 달성도에 따른 차등 지원으로\n자율성과 책임성 동시 확보', animation: { enter: { type: 'fadeIn', duration: 300, delay: 730, easing: 'ease-out' } } },

          { id: 'dp5-pg', type: 'text', position: { x: 1700, y: 1000, width: 100, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#444444', textAlign: 'right' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 300, delay: 800, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
    ]
  },

  // 도시 리브랜딩 성공사례 — NYC transformation (10 slides, white/navy magazine style)
  {
    id: 'city-rebranding',
    title: '도시 리브랜딩 성공사례',
    category: '케이스스터디',
    thumbnail: { bg: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)' },
    slides: [
      // Slide 1 — 표지
      { id: 'cr-s1', label: '표지', data: {
        id: 'tpl-cr-1', order: 0, duration: 6000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Left decorative shape (navy gradient block)
          { id: 'cr1-deco1', type: 'shape', position: { x: 0, y: 0, width: 700, height: 1080 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#1a237e', borderRadius: '0' }, content: '', animation: { enter: { type: 'slideRight', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'cr1-deco2', type: 'shape', position: { x: 580, y: 0, width: 200, height: 1080 }, rotation: 0, opacity: 0.6, zIndex: 2, style: { backgroundColor: '#283593', borderRadius: '0' }, content: '', animation: { enter: { type: 'slideRight', duration: 600, delay: 100, easing: 'ease-out' } } },
          // Small accent circle
          { id: 'cr1-circle', type: 'shape', position: { x: 620, y: 200, width: 120, height: 120 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#5c6bc0', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          // Title on the right side
          { id: 'cr1-title', type: 'text', position: { x: 820, y: 300, width: 950, height: 160 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '72px', fontWeight: 900, color: '#1a237e', textAlign: 'left', lineHeight: '1.2' }, content: '도시의\n리브랜딩', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'cr1-sub', type: 'text', position: { x: 820, y: 500, width: 900, height: 50 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '24px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '위기의 도시가 세계의 수도가 되기까지', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          // Bottom accent line
          { id: 'cr1-line', type: 'shape', position: { x: 820, y: 580, width: 120, height: 4 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#1a237e', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 2 — 1970s 뉴욕 위기
      { id: 'cr-s2', label: '1970s 뉴욕 위기', data: {
        id: 'tpl-cr-2', order: 1, duration: 8000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Left image placeholder (dark gray)
          { id: 'cr2-img', type: 'shape', position: { x: 0, y: 0, width: 860, height: 1080 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#424242', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'cr2-img-label', type: 'text', position: { x: 300, y: 500, width: 260, height: 40 }, rotation: 0, opacity: 0.3, zIndex: 2, style: { fontSize: '18px', fontWeight: 500, color: '#ffffff', textAlign: 'center' }, content: '1970s New York', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          // Right side content
          { id: 'cr2-label', type: 'text', position: { x: 920, y: 100, width: 900, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: 500, color: '#555555', textAlign: 'left' }, content: '위험한 도시의 대명사,', animation: { enter: { type: 'fadeIn', duration: 300, delay: 100, easing: 'ease-out' } } },
          { id: 'cr2-title', type: 'text', position: { x: 920, y: 150, width: 900, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: 900, color: '#1a237e', textAlign: 'left', lineHeight: '1.2' }, content: '1970-1980\n뉴욕', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
          // Hashtag chips
          { id: 'cr2-tag1-bg', type: 'shape', position: { x: 920, y: 310, width: 130, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '20px', borderColor: '#1a237e', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'cr2-tag1', type: 'text', position: { x: 920, y: 316, width: 130, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: 600, color: '#1a237e', textAlign: 'center' }, content: '#위험하고', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'cr2-tag2-bg', type: 'shape', position: { x: 1065, y: 310, width: 120, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '20px', borderColor: '#1a237e', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr2-tag2', type: 'text', position: { x: 1065, y: 316, width: 120, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: 600, color: '#1a237e', textAlign: 'center' }, content: '#더러워', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr2-tag3-bg', type: 'shape', position: { x: 1200, y: 310, width: 210, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '20px', borderColor: '#1a237e', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cr2-tag3', type: 'text', position: { x: 1200, y: 316, width: 210, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '15px', fontWeight: 600, color: '#1a237e', textAlign: 'center' }, content: '#살고 싶지 않은 도시', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // 2x2 info cards
          { id: 'cr2-c1-bg', type: 'shape', position: { x: 920, y: 400, width: 260, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
          { id: 'cr2-c1-t', type: 'text', position: { x: 940, y: 420, width: 220, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '범죄율 급증', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cr2-c1-d', type: 'text', position: { x: 940, y: 460, width: 220, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '14px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.5' }, content: '연간 살인사건 2,000건 이상\n강력범죄 일상화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          { id: 'cr2-c2-bg', type: 'shape', position: { x: 1200, y: 400, width: 260, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'cr2-c2-t', type: 'text', position: { x: 1220, y: 420, width: 220, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '재정 위기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr2-c2-d', type: 'text', position: { x: 1220, y: 460, width: 220, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '14px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.5' }, content: '파산 직전의 시 정부\n연방정부 구제 요청', animation: { enter: { type: 'fadeIn', duration: 300, delay: 570, easing: 'ease-out' } } },
          { id: 'cr2-c3-bg', type: 'shape', position: { x: 920, y: 560, width: 260, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 550, easing: 'ease-out' } } },
          { id: 'cr2-c3-t', type: 'text', position: { x: 940, y: 580, width: 220, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '낙서와 쓰레기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'cr2-c3-d', type: 'text', position: { x: 940, y: 620, width: 220, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '14px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.5' }, content: '지하철 전체 그래피티\n도시 미관 최악', animation: { enter: { type: 'fadeIn', duration: 300, delay: 620, easing: 'ease-out' } } },
          { id: 'cr2-c4-bg', type: 'shape', position: { x: 1200, y: 560, width: 260, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 600, easing: 'ease-out' } } },
          { id: 'cr2-c4-t', type: 'text', position: { x: 1220, y: 580, width: 220, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '관광객 감소', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'cr2-c4-d', type: 'text', position: { x: 1220, y: 620, width: 220, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '14px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.5' }, content: '여행자 기피 도시 1위\n호텔 점유율 급감', animation: { enter: { type: 'fadeIn', duration: 300, delay: 670, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 3 — 전환점: 변화의 시작
      { id: 'cr-s3', label: '전환점', data: {
        id: 'tpl-cr-3', order: 2, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Top accent bar
          { id: 'cr3-bar', type: 'shape', position: { x: 120, y: 80, width: 60, height: 6 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#1a237e', borderRadius: '3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'cr3-title', type: 'text', position: { x: 120, y: 110, width: 800, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '변화의 시작', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'cr3-sub', type: 'text', position: { x: 120, y: 200, width: 600, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '18px', fontWeight: 400, color: '#555555', textAlign: 'left' }, content: '뉴욕을 바꾼 3가지 결정적 전환점', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          // Timeline horizontal line
          { id: 'cr3-line', type: 'shape', position: { x: 160, y: 500, width: 1600, height: 3 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#1a237e', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 300, easing: 'ease-out' } } },
          // Event 1 — 1994
          { id: 'cr3-dot1', type: 'shape', position: { x: 310, y: 488, width: 24, height: 24 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr3-y1', type: 'text', position: { x: 240, y: 530, width: 170, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: 900, color: '#1a237e', textAlign: 'center' }, content: '1994', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cr3-e1-bg', type: 'shape', position: { x: 200, y: 590, width: 340, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 420, easing: 'ease-out' } } },
          { id: 'cr3-e1-t', type: 'text', position: { x: 230, y: 620, width: 280, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '줄리아니 시장 취임', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
          { id: 'cr3-e1-d', type: 'text', position: { x: 230, y: 665, width: 280, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.6' }, content: '깨진 유리창 이론 기반\n무관용 치안 정책 도입\n경미한 범죄부터 단속', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // Event 2 — BID
          { id: 'cr3-dot2', type: 'shape', position: { x: 790, y: 488, width: 24, height: 24 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#283593', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr3-y2', type: 'text', position: { x: 720, y: 420, width: 170, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: 900, color: '#283593', textAlign: 'center' }, content: '1990s', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cr3-e2-bg', type: 'shape', position: { x: 680, y: 280, width: 340, height: 130 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 520, easing: 'ease-out' } } },
          { id: 'cr3-e2-t', type: 'text', position: { x: 710, y: 295, width: 280, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: 700, color: '#283593', textAlign: 'left' }, content: 'BID 도입', animation: { enter: { type: 'fadeIn', duration: 300, delay: 570, easing: 'ease-out' } } },
          { id: 'cr3-e2-d', type: 'text', position: { x: 710, y: 335, width: 280, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.6' }, content: 'Business Improvement District\n민간 주도 도시 관리 시스템', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          // Event 3 — 타임스퀘어
          { id: 'cr3-dot3', type: 'shape', position: { x: 1310, y: 488, width: 24, height: 24 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr3-y3', type: 'text', position: { x: 1240, y: 530, width: 170, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: 900, color: '#1a237e', textAlign: 'center' }, content: '1995~', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'cr3-e3-bg', type: 'shape', position: { x: 1200, y: 590, width: 340, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 620, easing: 'ease-out' } } },
          { id: 'cr3-e3-t', type: 'text', position: { x: 1230, y: 620, width: 280, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '타임스퀘어 재개발', animation: { enter: { type: 'fadeIn', duration: 300, delay: 670, easing: 'ease-out' } } },
          { id: 'cr3-e3-d', type: 'text', position: { x: 1230, y: 665, width: 280, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.6' }, content: '성인업소·범죄 밀집지역에서\n세계적 관광 명소로 전환\n디즈니·나스닥 유치', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 4 — 핵심 전략 1: 안전
      { id: 'cr-s4', label: '핵심 전략 1 — 안전', data: {
        id: 'tpl-cr-4', order: 3, duration: 7000,
        background: { type: 'solid', value: '#f5f5f5' },
        elements: [
          // Left decorative accent
          { id: 'cr4-accent', type: 'shape', position: { x: 0, y: 0, width: 12, height: 1080 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#1a237e', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          // Big number
          { id: 'cr4-num', type: 'text', position: { x: 120, y: 160, width: 800, height: 220 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '180px', fontWeight: 900, color: '#1a237e', textAlign: 'left', lineHeight: '1' }, content: '65%', animation: { enter: { type: 'slideUp', duration: 600, delay: 100, easing: 'ease-out' } } },
          { id: 'cr4-num-label', type: 'text', position: { x: 120, y: 380, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: 700, color: '#283593', textAlign: 'left' }, content: '범죄율 감소', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'cr4-desc', type: 'text', position: { x: 120, y: 440, width: 600, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '18px', fontWeight: 400, color: '#555555', textAlign: 'left' }, content: '1994~2001년 뉴욕시 전체 범죄율 변화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Right side description cards
          { id: 'cr4-c1-bg', type: 'shape', position: { x: 1000, y: 180, width: 780, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 350, easing: 'ease-out' } } },
          { id: 'cr4-c1-t', type: 'text', position: { x: 1040, y: 210, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '깨진 유리창 이론 (Broken Windows)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cr4-c1-d', type: 'text', position: { x: 1040, y: 260, width: 700, height: 70 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.6' }, content: '경미한 범죄를 방치하면 중범죄로 이어진다는 이론.\n무임승차, 낙서, 무단횡단 등 소규모 위반부터 엄격 단속', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr4-c2-bg', type: 'shape', position: { x: 1000, y: 400, width: 780, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
          { id: 'cr4-c2-t', type: 'text', position: { x: 1040, y: 430, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: 'CompStat 시스템 도입', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cr4-c2-d', type: 'text', position: { x: 1040, y: 480, width: 700, height: 70 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.6' }, content: '데이터 기반 범죄 분석 시스템으로 실시간 범죄 지도 운영.\n경찰 자원을 핫스팟에 집중 배치하여 효율 극대화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr4-c3-bg', type: 'shape', position: { x: 1000, y: 620, width: 780, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 550, easing: 'ease-out' } } },
          { id: 'cr4-c3-t', type: 'text', position: { x: 1040, y: 650, width: 700, height: 35 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '지하철 치안 강화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'cr4-c3-d', type: 'text', position: { x: 1040, y: 700, width: 700, height: 70 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.6' }, content: '낙서 제거 프로그램과 무임승차 단속으로\n시민 안전 체감도 급상승', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 5 — 핵심 전략 2: 디자인
      { id: 'cr-s5', label: '핵심 전략 2 — 디자인', data: {
        id: 'tpl-cr-5', order: 4, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          { id: 'cr5-bar', type: 'shape', position: { x: 120, y: 80, width: 60, height: 6 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#1a237e', borderRadius: '3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'cr5-title', type: 'text', position: { x: 120, y: 110, width: 1000, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '공공 디자인의 힘', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'cr5-sub', type: 'text', position: { x: 120, y: 200, width: 600, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '18px', fontWeight: 400, color: '#555555', textAlign: 'left' }, content: '도시 경관이 시민 의식을 바꾸다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          // Before section
          { id: 'cr5-before-label', type: 'text', position: { x: 120, y: 300, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: 700, color: '#b71c1c', textAlign: 'left' }, content: 'BEFORE', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'cr5-before-img', type: 'shape', position: { x: 120, y: 360, width: 800, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#616161', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'cr5-before-t1', type: 'text', position: { x: 160, y: 420, width: 300, height: 30 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '18px', fontWeight: 500, color: '#ffffff', textAlign: 'left' }, content: '낙서로 뒤덮인 지하철', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr5-b-card1', type: 'shape', position: { x: 160, y: 530, width: 220, height: 100 }, rotation: 0, opacity: 0.8, zIndex: 3, style: { backgroundColor: '#424242', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },
          { id: 'cr5-b-card1-t', type: 'text', position: { x: 175, y: 555, width: 190, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: 500, color: '#ffffff', textAlign: 'center', lineHeight: '1.5' }, content: '방치된 공원\n어두운 골목길', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cr5-b-card2', type: 'shape', position: { x: 410, y: 530, width: 220, height: 100 }, rotation: 0, opacity: 0.8, zIndex: 3, style: { backgroundColor: '#424242', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },
          { id: 'cr5-b-card2-t', type: 'text', position: { x: 425, y: 555, width: 190, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: 500, color: '#ffffff', textAlign: 'center', lineHeight: '1.5' }, content: '무질서한 거리\n버려진 건물', animation: { enter: { type: 'fadeIn', duration: 300, delay: 440, easing: 'ease-out' } } },
          // After section
          { id: 'cr5-after-label', type: 'text', position: { x: 1000, y: 300, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: 'AFTER', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr5-after-img', type: 'shape', position: { x: 1000, y: 360, width: 800, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#e8eaf6', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'cr5-after-t1', type: 'text', position: { x: 1040, y: 420, width: 300, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '18px', fontWeight: 500, color: '#1a237e', textAlign: 'left' }, content: '깨끗한 현대적 도시', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr5-a-card1', type: 'shape', position: { x: 1040, y: 530, width: 220, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#c5cae9', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 480, easing: 'ease-out' } } },
          { id: 'cr5-a-card1-t', type: 'text', position: { x: 1055, y: 555, width: 190, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: 600, color: '#1a237e', textAlign: 'center', lineHeight: '1.5' }, content: '하이라인 파크\n공공 미술 설치', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cr5-a-card2', type: 'shape', position: { x: 1290, y: 530, width: 220, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#c5cae9', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          { id: 'cr5-a-card2-t', type: 'text', position: { x: 1305, y: 555, width: 190, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: 600, color: '#1a237e', textAlign: 'center', lineHeight: '1.5' }, content: '보행자 친화 거리\n친환경 교통', animation: { enter: { type: 'fadeIn', duration: 300, delay: 540, easing: 'ease-out' } } },
          // Arrow between before/after
          { id: 'cr5-arrow', type: 'text', position: { x: 920, y: 480, width: 80, height: 60 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '40px', fontWeight: 400, color: '#1a237e', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 300, delay: 460, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 6 — 핵심 전략 3: 브랜딩
      { id: 'cr-s6', label: '핵심 전략 3 — 브랜딩', data: {
        id: 'tpl-cr-6', order: 5, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Left half navy background
          { id: 'cr6-left', type: 'shape', position: { x: 0, y: 0, width: 900, height: 1080 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#1a237e', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          // I love NY text on left
          { id: 'cr6-logo-label', type: 'text', position: { x: 180, y: 200, width: 540, height: 50 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: 500, color: '#ffffff', textAlign: 'center', letterSpacing: '4px' }, content: '1977년 탄생한 전설의 로고', animation: { enter: { type: 'fadeIn', duration: 300, delay: 100, easing: 'ease-out' } } },
          { id: 'cr6-logo', type: 'text', position: { x: 120, y: 300, width: 660, height: 200 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '120px', fontWeight: 900, color: '#ffffff', textAlign: 'center', lineHeight: '1' }, content: 'I ❤️ NY', animation: { enter: { type: 'scaleIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'cr6-designer', type: 'text', position: { x: 180, y: 530, width: 540, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#ffffff', textAlign: 'center' }, content: 'Designed by Milton Glaser', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          // Right side stats
          { id: 'cr6-title', type: 'text', position: { x: 980, y: 120, width: 800, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '로고의 영향력', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
          // Stat cards
          { id: 'cr6-s1-bg', type: 'shape', position: { x: 980, y: 260, width: 800, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'cr6-s1-n', type: 'text', position: { x: 1020, y: 280, width: 300, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '$30M+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr6-s1-d', type: 'text', position: { x: 1020, y: 340, width: 700, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '연간 라이선스 수익 — 세계에서 가장 많이 복제된 로고', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },
          { id: 'cr6-s2-bg', type: 'shape', position: { x: 980, y: 430, width: 800, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'cr6-s2-n', type: 'text', position: { x: 1020, y: 450, width: 300, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '도시 브랜딩', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr6-s2-d', type: 'text', position: { x: 1020, y: 510, width: 700, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '최초의 도시 마케팅 캠페인 — 전 세계 도시들의 벤치마크', animation: { enter: { type: 'fadeIn', duration: 300, delay: 480, easing: 'ease-out' } } },
          { id: 'cr6-s3-bg', type: 'shape', position: { x: 980, y: 600, width: 800, height: 140 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'cr6-s3-n', type: 'text', position: { x: 1020, y: 620, width: 300, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '감정 연결', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr6-s3-d', type: 'text', position: { x: 1020, y: 680, width: 700, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '9/11 이후 "I ❤️ NY More Than Ever" — 도시 회복의 상징', animation: { enter: { type: 'fadeIn', duration: 300, delay: 580, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 7 — 타임스퀘어 변화
      { id: 'cr-s7', label: '타임스퀘어 변화', data: {
        id: 'tpl-cr-7', order: 6, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Left gray placeholder
          { id: 'cr7-img', type: 'shape', position: { x: 0, y: 0, width: 900, height: 1080 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#545454', borderRadius: '0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'cr7-img-label', type: 'text', position: { x: 300, y: 500, width: 300, height: 40 }, rotation: 0, opacity: 0.3, zIndex: 2, style: { fontSize: '18px', fontWeight: 500, color: '#ffffff', textAlign: 'center' }, content: 'Times Square Today', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          // Right side content
          { id: 'cr7-bar', type: 'shape', position: { x: 980, y: 120, width: 60, height: 6 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#1a237e', borderRadius: '3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 100, easing: 'ease-out' } } },
          { id: 'cr7-title', type: 'text', position: { x: 980, y: 150, width: 800, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: 900, color: '#1a237e', textAlign: 'left', lineHeight: '1.2' }, content: '타임스퀘어의\n재탄생', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'cr7-desc', type: 'text', position: { x: 980, y: 310, width: 800, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '17px', fontWeight: 400, color: '#555555', textAlign: 'left', lineHeight: '1.6' }, content: '범죄와 성인업소의 거리에서\n세계 최대 관광 명소로의 변신', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          // Stat items
          { id: 'cr7-st1-bg', type: 'shape', position: { x: 980, y: 420, width: 380, height: 130 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 350, easing: 'ease-out' } } },
          { id: 'cr7-st1-n', type: 'text', position: { x: 1010, y: 440, width: 320, height: 45 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '5,000만 명', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cr7-st1-d', type: 'text', position: { x: 1010, y: 495, width: 320, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '연간 방문객 수', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },
          { id: 'cr7-st2-bg', type: 'shape', position: { x: 1400, y: 420, width: 380, height: 130 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'cr7-st2-n', type: 'text', position: { x: 1430, y: 440, width: 320, height: 45 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '$5.5B', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr7-st2-d', type: 'text', position: { x: 1430, y: 495, width: 320, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '연간 광고 수익', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
          { id: 'cr7-st3-bg', type: 'shape', position: { x: 980, y: 580, width: 380, height: 130 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
          { id: 'cr7-st3-n', type: 'text', position: { x: 1010, y: 600, width: 320, height: 45 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '460개+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cr7-st3-d', type: 'text', position: { x: 1010, y: 655, width: 320, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '입주 기업 수', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          { id: 'cr7-st4-bg', type: 'shape', position: { x: 1400, y: 580, width: 380, height: 130 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '12px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'cr7-st4-n', type: 'text', position: { x: 1430, y: 600, width: 320, height: 45 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '26,000+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr7-st4-d', type: 'text', position: { x: 1430, y: 655, width: 320, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#333333', textAlign: 'left' }, content: '일자리 창출', animation: { enter: { type: 'fadeIn', duration: 300, delay: 570, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 8 — 경제 효과
      { id: 'cr-s8', label: '경제 효과', data: {
        id: 'tpl-cr-8', order: 7, duration: 7000,
        background: { type: 'solid', value: '#f5f5f5' },
        elements: [
          { id: 'cr8-bar', type: 'shape', position: { x: 120, y: 80, width: 60, height: 6 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#1a237e', borderRadius: '3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'cr8-title', type: 'text', position: { x: 120, y: 110, width: 600, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '경제 효과', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          { id: 'cr8-sub', type: 'text', position: { x: 120, y: 200, width: 700, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '18px', fontWeight: 400, color: '#555555', textAlign: 'left' }, content: '리브랜딩이 가져온 뉴욕의 경제적 성과 (2019 기준)', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          // 3 big number cards
          { id: 'cr8-n1-bg', type: 'shape', position: { x: 120, y: 320, width: 520, height: 480 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'cr8-n1-icon', type: 'shape', position: { x: 180, y: 380, width: 60, height: 60 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr8-n1-v', type: 'text', position: { x: 160, y: 480, width: 440, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: 900, color: '#1a237e', textAlign: 'center', lineHeight: '1' }, content: '6,600만', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          { id: 'cr8-n1-l', type: 'text', position: { x: 160, y: 620, width: 440, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: 600, color: '#333333', textAlign: 'center' }, content: '연간 관광객', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr8-n1-d', type: 'text', position: { x: 180, y: 670, width: 400, height: 50 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#555555', textAlign: 'center', lineHeight: '1.5' }, content: '1993년 대비 3배 이상 증가\n세계 최다 방문 도시', animation: { enter: { type: 'fadeIn', duration: 300, delay: 480, easing: 'ease-out' } } },

          { id: 'cr8-n2-bg', type: 'shape', position: { x: 700, y: 320, width: 520, height: 480 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'cr8-n2-icon', type: 'shape', position: { x: 760, y: 380, width: 60, height: 60 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#283593', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr8-n2-v', type: 'text', position: { x: 740, y: 480, width: 440, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: 900, color: '#283593', textAlign: 'center', lineHeight: '1' }, content: '$1.7조', animation: { enter: { type: 'fadeIn', duration: 500, delay: 500, easing: 'ease-out' } } },
          { id: 'cr8-n2-l', type: 'text', position: { x: 740, y: 620, width: 440, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: 600, color: '#333333', textAlign: 'center' }, content: 'GDP (도시 단독)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr8-n2-d', type: 'text', position: { x: 760, y: 670, width: 400, height: 50 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#555555', textAlign: 'center', lineHeight: '1.5' }, content: '한국 전체 GDP와 비슷한 수준\n단일 도시 세계 1위', animation: { enter: { type: 'fadeIn', duration: 300, delay: 580, easing: 'ease-out' } } },

          { id: 'cr8-n3-bg', type: 'shape', position: { x: 1280, y: 320, width: 520, height: 480 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'cr8-n3-icon', type: 'shape', position: { x: 1340, y: 380, width: 60, height: 60 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr8-n3-v', type: 'text', position: { x: 1320, y: 480, width: 440, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: 900, color: '#1a237e', textAlign: 'center', lineHeight: '1' }, content: '450만', animation: { enter: { type: 'fadeIn', duration: 500, delay: 600, easing: 'ease-out' } } },
          { id: 'cr8-n3-l', type: 'text', position: { x: 1320, y: 620, width: 440, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: 600, color: '#333333', textAlign: 'center' }, content: '일자리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'cr8-n3-d', type: 'text', position: { x: 1340, y: 670, width: 400, height: 50 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '15px', fontWeight: 400, color: '#555555', textAlign: 'center', lineHeight: '1.5' }, content: '금융, 테크, 문화 산업 중심\n미국 최대 고용 도시', animation: { enter: { type: 'fadeIn', duration: 300, delay: 680, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 9 — 교훈
      { id: 'cr-s9', label: '교훈', data: {
        id: 'tpl-cr-9', order: 8, duration: 7000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          { id: 'cr9-bar', type: 'shape', position: { x: 120, y: 80, width: 60, height: 6 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#1a237e', borderRadius: '3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'cr9-title', type: 'text', position: { x: 120, y: 110, width: 600, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '3가지 교훈', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
          // Card 1
          { id: 'cr9-c1-bg', type: 'shape', position: { x: 120, y: 280, width: 520, height: 540 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1a237e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 250, easing: 'ease-out' } } },
          { id: 'cr9-c1-num', type: 'text', position: { x: 160, y: 320, width: 100, height: 70 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '56px', fontWeight: 900, color: '#ffffff', textAlign: 'left' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'cr9-c1-t', type: 'text', position: { x: 160, y: 410, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: 700, color: '#ffffff', textAlign: 'left' }, content: '작은 것부터 바꿔라', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'cr9-c1-d', type: 'text', position: { x: 160, y: 480, width: 440, height: 120 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '17px', fontWeight: 400, color: '#ffffff', textAlign: 'left', lineHeight: '1.7' }, content: '깨진 유리창 이론처럼, 작은\n변화가 큰 전환을 만든다.\n경미한 문제부터 해결하면\n전체 시스템이 바뀐다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          // Card 2
          { id: 'cr9-c2-bg', type: 'shape', position: { x: 700, y: 280, width: 520, height: 540 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 350, easing: 'ease-out' } } },
          { id: 'cr9-c2-num', type: 'text', position: { x: 740, y: 320, width: 100, height: 70 }, rotation: 0, opacity: 0.15, zIndex: 10, style: { fontSize: '56px', fontWeight: 900, color: '#1a237e', textAlign: 'left' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'cr9-c2-t', type: 'text', position: { x: 740, y: 410, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: 700, color: '#1a237e', textAlign: 'left' }, content: '디자인은 전략이다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'cr9-c2-d', type: 'text', position: { x: 740, y: 480, width: 440, height: 120 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '17px', fontWeight: 400, color: '#333333', textAlign: 'left', lineHeight: '1.7' }, content: '공공 디자인과 브랜딩은\n단순한 미화가 아닌 도시의\n정체성을 만드는 핵심 전략.\nI❤NY이 증명했다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          // Card 3
          { id: 'cr9-c3-bg', type: 'shape', position: { x: 1280, y: 280, width: 520, height: 540 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#283593', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
          { id: 'cr9-c3-num', type: 'text', position: { x: 1320, y: 320, width: 100, height: 70 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '56px', fontWeight: 900, color: '#ffffff', textAlign: 'left' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'cr9-c3-t', type: 'text', position: { x: 1320, y: 410, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: 700, color: '#ffffff', textAlign: 'left' }, content: '민관 협력이 핵심', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'cr9-c3-d', type: 'text', position: { x: 1320, y: 480, width: 440, height: 120 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '17px', fontWeight: 400, color: '#ffffff', textAlign: 'left', lineHeight: '1.7' }, content: 'BID처럼 민간의 자본과 정부의\n권한이 결합할 때 도시 재생은\n지속가능해진다. 시민 참여가\n성공의 열쇠다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 10 — 마무리
      { id: 'cr-s10', label: '마무리', data: {
        id: 'tpl-cr-10', order: 9, duration: 6000,
        background: { type: 'solid', value: '#1a237e' },
        elements: [
          // Decorative circle
          { id: 'cr10-deco1', type: 'shape', position: { x: 1500, y: -100, width: 400, height: 400 }, rotation: 0, opacity: 0.1, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'cr10-deco2', type: 'shape', position: { x: -100, y: 800, width: 300, height: 300 }, rotation: 0, opacity: 0.08, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
          // Accent line
          { id: 'cr10-line', type: 'shape', position: { x: 860, y: 340, width: 200, height: 4 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { backgroundColor: '#ffffff', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          // Main quote
          { id: 'cr10-quote', type: 'text', position: { x: 260, y: 400, width: 1400, height: 160 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: 900, color: '#ffffff', textAlign: 'center', lineHeight: '1.3' }, content: '모든 도시는\n다시 태어날 수 있다', animation: { enter: { type: 'slideUp', duration: 600, delay: 300, easing: 'ease-out' } } },
          // Bottom subtitle
          { id: 'cr10-sub', type: 'text', position: { x: 460, y: 620, width: 1000, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '20px', fontWeight: 400, color: '#ffffff', textAlign: 'center' }, content: '뉴욕이 증명한 도시 리브랜딩의 힘', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          // Bottom decorative bar
          { id: 'cr10-bar', type: 'shape', position: { x: 880, y: 700, width: 160, height: 4 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { backgroundColor: '#ffffff', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
    ]
  },

  // 프로젝트 추진 로드맵 — 10 slides, light corporate/government style
  {
    id: 'project-roadmap',
    title: '프로젝트 추진 로드맵',
    category: '기획',
    thumbnail: { bg: '#ffffff' },
    slides: [
      // Slide 1: 표지
      { id: 'pr-1', label: '표지', data: {
        id: 'tpl-pr-1', order: 0, duration: 5000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Left blue accent bar
          { id: 'pr1-accent', type: 'shape', position: { x: 0, y: 0, width: 8, height: 1080 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '0px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
          // Title
          { id: 'pr1-title', type: 'text', position: { x: 120, y: 340, width: 1200, height: 90 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '800', color: '#1a1a1a', textAlign: 'left' }, content: '프로젝트 추진 로드맵', animation: { enter: { type: 'slideRight', duration: 600, delay: 200, easing: 'ease-out' } } },
          // Subtitle
          { id: 'pr1-sub', type: 'text', position: { x: 120, y: 450, width: 1000, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '스마트시티 혁신 프로젝트 2025-2026', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          // Divider line
          { id: 'pr1-line', type: 'shape', position: { x: 120, y: 530, width: 100, height: 4 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          // Bottom org name + date
          { id: 'pr1-org', type: 'text', position: { x: 120, y: 900, width: 600, height: 36 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#999999', textAlign: 'left' }, content: '스마트시티 추진단  |  2025.03', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 2: 목차
      { id: 'pr-2', label: '목차', data: {
        id: 'tpl-pr-2', order: 1, duration: 5000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Title
          { id: 'pr2-title', type: 'text', position: { x: 120, y: 80, width: 400, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '목차', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
          { id: 'pr2-line', type: 'shape', position: { x: 120, y: 150, width: 60, height: 4 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 100, easing: 'ease-out' } } },
          // Items
          { id: 'pr2-n1', type: 'text', position: { x: 120, y: 220, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 150, easing: 'ease-out' } } },
          { id: 'pr2-t1', type: 'text', position: { x: 200, y: 220, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '추진 배경', animation: { enter: { type: 'fadeIn', duration: 300, delay: 150, easing: 'ease-out' } } },
          { id: 'pr2-n2', type: 'text', position: { x: 120, y: 290, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr2-t2', type: 'text', position: { x: 200, y: 290, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '비전 및 목표', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr2-n3', type: 'text', position: { x: 120, y: 360, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr2-t3', type: 'text', position: { x: 200, y: 360, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '추진 전략', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr2-n4', type: 'text', position: { x: 120, y: 430, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr2-t4', type: 'text', position: { x: 200, y: 430, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '세부 과제', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr2-n5', type: 'text', position: { x: 120, y: 500, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr2-t5', type: 'text', position: { x: 200, y: 500, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '일정 계획', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr2-n6', type: 'text', position: { x: 120, y: 570, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '06', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr2-t6', type: 'text', position: { x: 200, y: 570, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '예산 계획', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr2-n7', type: 'text', position: { x: 120, y: 640, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '07', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr2-t7', type: 'text', position: { x: 200, y: 640, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '조직 구성', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr2-n8', type: 'text', position: { x: 120, y: 710, width: 60, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '08', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr2-t8', type: 'text', position: { x: 200, y: 710, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '기대 효과', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 3: 01 추진 배경
      { id: 'pr-3', label: '01 추진 배경', data: {
        id: 'tpl-pr-3', order: 2, duration: 5000,
        background: { type: 'solid', value: '#f8f9fa' },
        elements: [
          // Section badge
          { id: 'pr3-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr3-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          // Title
          { id: 'pr3-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '추진 배경 및 필요성', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Card 1
          { id: 'pr3-c1-bg', type: 'shape', position: { x: 120, y: 160, width: 520, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr3-c1-bar', type: 'shape', position: { x: 120, y: 160, width: 5, height: 220 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr3-c1-t', type: 'text', position: { x: 150, y: 180, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '도시 인프라 노후화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr3-c1-d', type: 'text', position: { x: 150, y: 225, width: 460, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '주요 도시 인프라의 30% 이상이\n20년 이상 경과하여 스마트 전환이\n시급한 상황', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          // Card 2
          { id: 'pr3-c2-bg', type: 'shape', position: { x: 700, y: 160, width: 520, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr3-c2-bar', type: 'shape', position: { x: 700, y: 160, width: 5, height: 220 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr3-c2-t', type: 'text', position: { x: 730, y: 180, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '시민 수요 증가', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr3-c2-d', type: 'text', position: { x: 730, y: 225, width: 460, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '디지털 행정 서비스에 대한\n시민 요구가 매년 25% 이상\n증가하는 추세', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Card 3
          { id: 'pr3-c3-bg', type: 'shape', position: { x: 1280, y: 160, width: 520, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr3-c3-bar', type: 'shape', position: { x: 1280, y: 160, width: 5, height: 220 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr3-c3-t', type: 'text', position: { x: 1310, y: 180, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '정부 정책 방향', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr3-c3-d', type: 'text', position: { x: 1310, y: 225, width: 460, height: 120 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '디지털 뉴딜 및 탄소중립 정책과\n연계한 스마트시티 확대 추진\n국정과제 반영', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 4: 02 비전 및 목표
      { id: 'pr-4', label: '02 비전 및 목표', data: {
        id: 'tpl-pr-4', order: 3, duration: 5000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Badge
          { id: 'pr4-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr4-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr4-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '비전 및 목표', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Vision box
          { id: 'pr4-vbox', type: 'shape', position: { x: 120, y: 160, width: 1680, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#2563eb', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'pr4-vision', type: 'text', position: { x: 120, y: 185, width: 1680, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '32px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '시민 중심의 지속가능한 스마트시티 구현', animation: { enter: { type: 'slideUp', duration: 500, delay: 300, easing: 'ease-out' } } },
          // 4 goal items
          { id: 'pr4-g1-bg', type: 'shape', position: { x: 120, y: 340, width: 390, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr4-g1-t', type: 'text', position: { x: 140, y: 360, width: 350, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#2563eb', textAlign: 'center' }, content: '디지털 인프라 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr4-g1-d', type: 'text', position: { x: 140, y: 405, width: 350, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: 'IoT 센서 네트워크 및\n통합 데이터 플랫폼', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr4-g2-bg', type: 'shape', position: { x: 540, y: 340, width: 390, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr4-g2-t', type: 'text', position: { x: 560, y: 360, width: 350, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#2563eb', textAlign: 'center' }, content: '시민 서비스 혁신', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr4-g2-d', type: 'text', position: { x: 560, y: 405, width: 350, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: '모바일 원스톱 행정 및\nAI 기반 민원 처리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'pr4-g3-bg', type: 'shape', position: { x: 960, y: 340, width: 390, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr4-g3-t', type: 'text', position: { x: 980, y: 360, width: 350, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#2563eb', textAlign: 'center' }, content: '안전·환경 관리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'pr4-g3-d', type: 'text', position: { x: 980, y: 405, width: 350, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: '실시간 재난 모니터링 및\n탄소 배출 관리 시스템', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr4-g4-bg', type: 'shape', position: { x: 1380, y: 340, width: 390, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'pr4-g4-t', type: 'text', position: { x: 1400, y: 360, width: 350, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#2563eb', textAlign: 'center' }, content: '산업 생태계 조성', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr4-g4-d', type: 'text', position: { x: 1400, y: 405, width: 350, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: '스타트업 육성 및\n민관 협력 체계 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 5: 03 추진 전략
      { id: 'pr-5', label: '03 추진 전략', data: {
        id: 'tpl-pr-5', order: 4, duration: 5000,
        background: { type: 'solid', value: '#f8f9fa' },
        elements: [
          // Badge
          { id: 'pr5-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr5-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr5-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '추진 전략', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Strategy 1 — Blue
          { id: 'pr5-s1-bg', type: 'shape', position: { x: 120, y: 160, width: 520, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr5-s1-top', type: 'shape', position: { x: 120, y: 160, width: 520, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '16px 16px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr5-s1-icon', type: 'text', position: { x: 140, y: 190, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#2563eb', textAlign: 'center' }, content: '🏗', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr5-s1-t', type: 'text', position: { x: 140, y: 250, width: 480, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '인프라 선진화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr5-s1-b1', type: 'text', position: { x: 160, y: 310, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 5G 기반 통신 인프라 확충', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr5-s1-b2', type: 'text', position: { x: 160, y: 350, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 클라우드 데이터센터 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr5-s1-b3', type: 'text', position: { x: 160, y: 390, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• IoT 센서 네트워크 배치', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          // Strategy 2 — Green
          { id: 'pr5-s2-bg', type: 'shape', position: { x: 700, y: 160, width: 520, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr5-s2-top', type: 'shape', position: { x: 700, y: 160, width: 520, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#16a34a', borderRadius: '16px 16px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr5-s2-icon', type: 'text', position: { x: 720, y: 190, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#16a34a', textAlign: 'center' }, content: '💡', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr5-s2-t', type: 'text', position: { x: 720, y: 250, width: 480, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '서비스 혁신', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr5-s2-b1', type: 'text', position: { x: 740, y: 310, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• AI 기반 행정 자동화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr5-s2-b2', type: 'text', position: { x: 740, y: 350, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 통합 시민 포털 운영', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr5-s2-b3', type: 'text', position: { x: 740, y: 390, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 실시간 교통·에너지 관리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          // Strategy 3 — Pink
          { id: 'pr5-s3-bg', type: 'shape', position: { x: 1280, y: 160, width: 520, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr5-s3-top', type: 'shape', position: { x: 1280, y: 160, width: 520, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e91e8c', borderRadius: '16px 16px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr5-s3-icon', type: 'text', position: { x: 1300, y: 190, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#e91e8c', textAlign: 'center' }, content: '🤝', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr5-s3-t', type: 'text', position: { x: 1300, y: 250, width: 480, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '민관 협력 강화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr5-s3-b1', type: 'text', position: { x: 1320, y: 310, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 스타트업 지원 프로그램', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'pr5-s3-b2', type: 'text', position: { x: 1320, y: 350, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 시민 참여 거버넌스 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr5-s3-b3', type: 'text', position: { x: 1320, y: 390, width: 460, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 글로벌 네트워크 연계', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 6: 04 세부 과제
      { id: 'pr-6', label: '04 세부 과제', data: {
        id: 'tpl-pr-6', order: 5, duration: 5000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Badge
          { id: 'pr6-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr6-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr6-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '세부 과제', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Row 1
          { id: 'pr6-t1-bg', type: 'shape', position: { x: 120, y: 160, width: 520, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr6-t1-bar', type: 'shape', position: { x: 120, y: 160, width: 5, height: 180 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr6-t1-n', type: 'text', position: { x: 145, y: 175, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '과제 1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr6-t1-t', type: 'text', position: { x: 145, y: 205, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '통합 데이터 플랫폼 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 280, easing: 'ease-out' } } },
          { id: 'pr6-t1-d', type: 'text', position: { x: 145, y: 245, width: 460, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '도시 데이터 수집·분석·활용을 위한\n통합 플랫폼 설계 및 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 310, easing: 'ease-out' } } },

          { id: 'pr6-t2-bg', type: 'shape', position: { x: 700, y: 160, width: 520, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr6-t2-bar', type: 'shape', position: { x: 700, y: 160, width: 5, height: 180 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#16a34a', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr6-t2-n', type: 'text', position: { x: 725, y: 175, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '700', color: '#16a34a', textAlign: 'left' }, content: '과제 2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr6-t2-t', type: 'text', position: { x: 725, y: 205, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: 'IoT 센서 인프라 구축', animation: { enter: { type: 'fadeIn', duration: 300, delay: 330, easing: 'ease-out' } } },
          { id: 'pr6-t2-d', type: 'text', position: { x: 725, y: 245, width: 460, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '환경·교통·에너지 분야 IoT 센서\n설치 및 네트워크 구성', animation: { enter: { type: 'fadeIn', duration: 300, delay: 360, easing: 'ease-out' } } },

          { id: 'pr6-t3-bg', type: 'shape', position: { x: 1280, y: 160, width: 520, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr6-t3-bar', type: 'shape', position: { x: 1280, y: 160, width: 5, height: 180 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e91e8c', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr6-t3-n', type: 'text', position: { x: 1305, y: 175, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '700', color: '#e91e8c', textAlign: 'left' }, content: '과제 3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr6-t3-t', type: 'text', position: { x: 1305, y: 205, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: 'AI 행정 서비스 개발', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },
          { id: 'pr6-t3-d', type: 'text', position: { x: 1305, y: 245, width: 460, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: 'AI 챗봇, 자동 민원 분류 등\n지능형 행정 서비스 구현', animation: { enter: { type: 'fadeIn', duration: 300, delay: 410, easing: 'ease-out' } } },
          // Row 2
          { id: 'pr6-t4-bg', type: 'shape', position: { x: 120, y: 390, width: 520, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr6-t4-bar', type: 'shape', position: { x: 120, y: 390, width: 5, height: 180 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr6-t4-n', type: 'text', position: { x: 145, y: 405, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: '과제 4', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr6-t4-t', type: 'text', position: { x: 145, y: 435, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '시민 참여 플랫폼', animation: { enter: { type: 'fadeIn', duration: 300, delay: 430, easing: 'ease-out' } } },
          { id: 'pr6-t4-d', type: 'text', position: { x: 145, y: 475, width: 460, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '시민 의견 수렴 및 정책 참여를\n위한 디지털 플랫폼 운영', animation: { enter: { type: 'fadeIn', duration: 300, delay: 460, easing: 'ease-out' } } },

          { id: 'pr6-t5-bg', type: 'shape', position: { x: 700, y: 390, width: 520, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr6-t5-bar', type: 'shape', position: { x: 700, y: 390, width: 5, height: 180 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#16a34a', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr6-t5-n', type: 'text', position: { x: 725, y: 405, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '700', color: '#16a34a', textAlign: 'left' }, content: '과제 5', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr6-t5-t', type: 'text', position: { x: 725, y: 435, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '스마트 교통 시스템', animation: { enter: { type: 'fadeIn', duration: 300, delay: 480, easing: 'ease-out' } } },
          { id: 'pr6-t5-d', type: 'text', position: { x: 725, y: 475, width: 460, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '실시간 교통 데이터 기반\n신호 최적화 및 자율주행 인프라', animation: { enter: { type: 'fadeIn', duration: 300, delay: 510, easing: 'ease-out' } } },

          { id: 'pr6-t6-bg', type: 'shape', position: { x: 1280, y: 390, width: 520, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr6-t6-bar', type: 'shape', position: { x: 1280, y: 390, width: 5, height: 180 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e91e8c', borderRadius: '12px 0 0 12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr6-t6-n', type: 'text', position: { x: 1305, y: 405, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '700', color: '#e91e8c', textAlign: 'left' }, content: '과제 6', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr6-t6-t', type: 'text', position: { x: 1305, y: 435, width: 460, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '탄소중립 에너지 관리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 530, easing: 'ease-out' } } },
          { id: 'pr6-t6-d', type: 'text', position: { x: 1305, y: 475, width: 460, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '건물별 에너지 사용량 모니터링 및\n신재생 에너지 통합 관리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 560, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 7: 05 일정 계획 (로드맵)
      { id: 'pr-7', label: '05 일정 계획', data: {
        id: 'tpl-pr-7', order: 6, duration: 6000,
        background: { type: 'solid', value: '#f8f9fa' },
        elements: [
          // Badge
          { id: 'pr7-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr7-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr7-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '일정 계획 (로드맵)', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Timeline line
          { id: 'pr7-tline', type: 'shape', position: { x: 200, y: 210, width: 1520, height: 3 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          // Date markers — circles + labels
          { id: 'pr7-d1-c', type: 'shape', position: { x: 260, y: 200, width: 22, height: 22 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr7-d1-t', type: 'text', position: { x: 210, y: 165, width: 120, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#1a1a1a', textAlign: 'center' }, content: '2025.03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr7-d2-c', type: 'shape', position: { x: 560, y: 200, width: 22, height: 22 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr7-d2-t', type: 'text', position: { x: 510, y: 165, width: 120, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#1a1a1a', textAlign: 'center' }, content: '2025.07', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr7-d3-c', type: 'shape', position: { x: 910, y: 200, width: 22, height: 22 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#16a34a', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr7-d3-t', type: 'text', position: { x: 860, y: 165, width: 120, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#1a1a1a', textAlign: 'center' }, content: '2025.10', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr7-d4-c', type: 'shape', position: { x: 1260, y: 200, width: 22, height: 22 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#16a34a', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr7-d4-t', type: 'text', position: { x: 1210, y: 165, width: 120, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#1a1a1a', textAlign: 'center' }, content: '2026.01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr7-d5-c', type: 'shape', position: { x: 1600, y: 200, width: 22, height: 22 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#e91e8c', borderRadius: '50%' }, content: '', animation: { enter: { type: 'scaleIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr7-d5-t', type: 'text', position: { x: 1550, y: 165, width: 120, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#1a1a1a', textAlign: 'center' }, content: '2026.04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // Phase bars
          // 계획수립 = blue
          { id: 'pr7-p1-bar', type: 'shape', position: { x: 220, y: 270, width: 380, height: 44 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'slideRight', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'pr7-p1-t', type: 'text', position: { x: 220, y: 275, width: 380, height: 34 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '계획수립', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // 실행준비 = green
          { id: 'pr7-p2-bar', type: 'shape', position: { x: 620, y: 270, width: 680, height: 44 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#16a34a', borderRadius: '8px' }, content: '', animation: { enter: { type: 'slideRight', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'pr7-p2-t', type: 'text', position: { x: 620, y: 275, width: 680, height: 34 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '실행준비', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          // 실행 = pink
          { id: 'pr7-p3-bar', type: 'shape', position: { x: 1320, y: 270, width: 400, height: 44 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e91e8c', borderRadius: '8px' }, content: '', animation: { enter: { type: 'slideRight', duration: 400, delay: 600, easing: 'ease-out' } } },
          { id: 'pr7-p3-t', type: 'text', position: { x: 1320, y: 275, width: 400, height: 34 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '실행', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
          // Sub-items below phases
          // 계획수립 sub-items
          { id: 'pr7-s1-bg', type: 'shape', position: { x: 220, y: 340, width: 380, height: 100 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '8px', borderColor: '#2563eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr7-s1-t', type: 'text', position: { x: 235, y: 350, width: 350, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 현황 분석 및 진단\n• 기본 계획 수립\n• 예산 확보 및 승인', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          // 실행준비 sub-items
          { id: 'pr7-s2-bg', type: 'shape', position: { x: 620, y: 340, width: 680, height: 100 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '8px', borderColor: '#16a34a', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
          { id: 'pr7-s2-badge', type: 'shape', position: { x: 1190, y: 345, width: 60, height: 24 }, rotation: 0, opacity: 1, zIndex: 6, style: { backgroundColor: '#16a34a', borderRadius: '6px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 750, easing: 'ease-out' } } },
          { id: 'pr7-s2-badge-t', type: 'text', position: { x: 1190, y: 346, width: 60, height: 22 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '12px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '반영', animation: { enter: { type: 'fadeIn', duration: 300, delay: 750, easing: 'ease-out' } } },
          { id: 'pr7-s2-t', type: 'text', position: { x: 635, y: 350, width: 540, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 사업자 선정 및 계약\n• 시스템 설계 및 개발\n• 파일럿 테스트 운영', animation: { enter: { type: 'fadeIn', duration: 300, delay: 750, easing: 'ease-out' } } },
          // 실행 sub-items
          { id: 'pr7-s3-bg', type: 'shape', position: { x: 1320, y: 340, width: 400, height: 100 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '8px', borderColor: '#e91e8c', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 800, easing: 'ease-out' } } },
          { id: 'pr7-s3-badge', type: 'shape', position: { x: 1610, y: 345, width: 60, height: 24 }, rotation: 0, opacity: 1, zIndex: 6, style: { backgroundColor: '#16a34a', borderRadius: '6px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 850, easing: 'ease-out' } } },
          { id: 'pr7-s3-badge-t', type: 'text', position: { x: 1610, y: 346, width: 60, height: 22 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '12px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '반영', animation: { enter: { type: 'fadeIn', duration: 300, delay: 850, easing: 'ease-out' } } },
          { id: 'pr7-s3-t', type: 'text', position: { x: 1335, y: 350, width: 260, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'left' }, content: '• 본사업 착수\n• 시민 서비스 오픈\n• 성과 모니터링', animation: { enter: { type: 'fadeIn', duration: 300, delay: 850, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 8: 06 예산 계획
      { id: 'pr-8', label: '06 예산 계획', data: {
        id: 'tpl-pr-8', order: 7, duration: 5000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Badge
          { id: 'pr8-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr8-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '06', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr8-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '예산 계획', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Table header
          { id: 'pr8-hdr-bg', type: 'shape', position: { x: 120, y: 160, width: 1680, height: 50 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f1f5f9', borderRadius: '8px 8px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr8-hdr-cat', type: 'text', position: { x: 160, y: 168, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#555555', textAlign: 'left' }, content: '항목', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          { id: 'pr8-hdr-amt', type: 'text', position: { x: 1300, y: 168, width: 400, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#555555', textAlign: 'right' }, content: '예산 (억원)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          // Row 1
          { id: 'pr8-r1-bg', type: 'shape', position: { x: 120, y: 210, width: 1680, height: 60 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '0px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr8-r1-cat', type: 'text', position: { x: 160, y: 222, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '통합 데이터 플랫폼', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr8-r1-amt', type: 'text', position: { x: 1300, y: 222, width: 400, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textAlign: 'right' }, content: '120', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          // Row 2
          { id: 'pr8-r2-bg', type: 'shape', position: { x: 120, y: 270, width: 1680, height: 60 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#f8f9fa', borderRadius: '0px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr8-r2-cat', type: 'text', position: { x: 160, y: 282, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: 'IoT 센서 인프라', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr8-r2-amt', type: 'text', position: { x: 1300, y: 282, width: 400, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textAlign: 'right' }, content: '85', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Row 3
          { id: 'pr8-r3-bg', type: 'shape', position: { x: 120, y: 330, width: 1680, height: 60 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '0px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr8-r3-cat', type: 'text', position: { x: 160, y: 342, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: 'AI 행정 서비스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr8-r3-amt', type: 'text', position: { x: 1300, y: 342, width: 400, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textAlign: 'right' }, content: '65', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          // Row 4
          { id: 'pr8-r4-bg', type: 'shape', position: { x: 120, y: 390, width: 1680, height: 60 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#f8f9fa', borderRadius: '0px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          { id: 'pr8-r4-cat', type: 'text', position: { x: 160, y: 402, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '시민 참여 플랫폼', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr8-r4-amt', type: 'text', position: { x: 1300, y: 402, width: 400, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textAlign: 'right' }, content: '30', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // Row 5
          { id: 'pr8-r5-bg', type: 'shape', position: { x: 120, y: 450, width: 1680, height: 60 }, rotation: 0, opacity: 1, zIndex: 1, style: { backgroundColor: '#ffffff', borderRadius: '0px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          { id: 'pr8-r5-cat', type: 'text', position: { x: 160, y: 462, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '운영 및 유지보수', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'pr8-r5-amt', type: 'text', position: { x: 1300, y: 462, width: 400, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#1a1a1a', textAlign: 'right' }, content: '50', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          // Total row
          { id: 'pr8-total-bg', type: 'shape', position: { x: 120, y: 530, width: 1680, height: 70 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#2563eb', borderRadius: '0 0 8px 8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr8-total-cat', type: 'text', position: { x: 160, y: 545, width: 500, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '합계', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'pr8-total-amt', type: 'text', position: { x: 1300, y: 545, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'right' }, content: '350억원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 9: 07 조직 구성
      { id: 'pr-9', label: '07 조직 구성', data: {
        id: 'tpl-pr-9', order: 8, duration: 5000,
        background: { type: 'solid', value: '#f8f9fa' },
        elements: [
          // Badge
          { id: 'pr9-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr9-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '07', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr9-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '조직 구성', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // Top box — 추진위원회
          { id: 'pr9-top-bg', type: 'shape', position: { x: 710, y: 180, width: 500, height: 80 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#2563eb', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr9-top-t', type: 'text', position: { x: 710, y: 195, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '추진위원회', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
          // Connector line top→mid
          { id: 'pr9-conn1', type: 'shape', position: { x: 958, y: 260, width: 4, height: 60 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          // Middle box — 실무추진단
          { id: 'pr9-mid-bg', type: 'shape', position: { x: 710, y: 320, width: 500, height: 80 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#2563eb', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
          { id: 'pr9-mid-t', type: 'text', position: { x: 710, y: 335, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2563eb', textAlign: 'center' }, content: '실무추진단', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          // Connector line mid→bottom
          { id: 'pr9-conn2', type: 'shape', position: { x: 958, y: 400, width: 4, height: 60 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          // Horizontal connector
          { id: 'pr9-conn3', type: 'shape', position: { x: 370, y: 460, width: 1180, height: 3 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          // Vertical connectors down
          { id: 'pr9-vc1', type: 'shape', position: { x: 370, y: 460, width: 4, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          { id: 'pr9-vc2', type: 'shape', position: { x: 958, y: 460, width: 4, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          { id: 'pr9-vc3', type: 'shape', position: { x: 1546, y: 460, width: 4, height: 40 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#d1d5db', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          // Bottom row — 3 departments
          { id: 'pr9-d1-bg', type: 'shape', position: { x: 160, y: 500, width: 420, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          { id: 'pr9-d1-t', type: 'text', position: { x: 160, y: 520, width: 420, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center' }, content: '인프라팀', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr9-d1-d', type: 'text', position: { x: 180, y: 560, width: 380, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: '네트워크·데이터센터·IoT', animation: { enter: { type: 'fadeIn', duration: 300, delay: 630, easing: 'ease-out' } } },
          { id: 'pr9-d2-bg', type: 'shape', position: { x: 750, y: 500, width: 420, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          { id: 'pr9-d2-t', type: 'text', position: { x: 750, y: 520, width: 420, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center' }, content: '서비스개발팀', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'pr9-d2-d', type: 'text', position: { x: 770, y: 560, width: 380, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: 'AI·플랫폼·UX 개발', animation: { enter: { type: 'fadeIn', duration: 300, delay: 680, easing: 'ease-out' } } },
          { id: 'pr9-d3-bg', type: 'shape', position: { x: 1340, y: 500, width: 420, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          { id: 'pr9-d3-t', type: 'text', position: { x: 1340, y: 520, width: 420, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center' }, content: '시민소통팀', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
          { id: 'pr9-d3-d', type: 'text', position: { x: 1360, y: 560, width: 380, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#555555', textAlign: 'center' }, content: '홍보·참여·거버넌스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 730, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},

      // Slide 10: 08 기대 효과
      { id: 'pr-10', label: '08 기대 효과', data: {
        id: 'tpl-pr-10', order: 9, duration: 5000,
        background: { type: 'solid', value: '#ffffff' },
        elements: [
          // Badge
          { id: 'pr10-badge', type: 'shape', position: { x: 120, y: 60, width: 56, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
          { id: 'pr10-num', type: 'text', position: { x: 120, y: 63, width: 56, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '08', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
          { id: 'pr10-title', type: 'text', position: { x: 200, y: 58, width: 600, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: '기대 효과', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
          // 3 large impact numbers
          { id: 'pr10-i1-bg', type: 'shape', position: { x: 120, y: 160, width: 520, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '16px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
          { id: 'pr10-i1-v', type: 'text', position: { x: 120, y: 190, width: 520, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '800', color: '#2563eb', textAlign: 'center' }, content: '30%', animation: { enter: { type: 'slideUp', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'pr10-i1-l', type: 'text', position: { x: 120, y: 270, width: 520, height: 36 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '600', color: '#555555', textAlign: 'center' }, content: '행정 효율 향상', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },

          { id: 'pr10-i2-bg', type: 'shape', position: { x: 700, y: 160, width: 520, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '16px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
          { id: 'pr10-i2-v', type: 'text', position: { x: 700, y: 190, width: 520, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '800', color: '#16a34a', textAlign: 'center' }, content: '50억', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'pr10-i2-l', type: 'text', position: { x: 700, y: 270, width: 520, height: 36 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '600', color: '#555555', textAlign: 'center' }, content: '연간 비용 절감', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },

          { id: 'pr10-i3-bg', type: 'shape', position: { x: 1280, y: 160, width: 520, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '16px', borderColor: '#e5e7eb', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          { id: 'pr10-i3-v', type: 'text', position: { x: 1280, y: 190, width: 520, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '800', color: '#e91e8c', textAlign: 'center' }, content: '95%', animation: { enter: { type: 'slideUp', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'pr10-i3-l', type: 'text', position: { x: 1280, y: 270, width: 520, height: 36 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '600', color: '#555555', textAlign: 'center' }, content: '시민 만족도 목표', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },

          // Summary quote card
          { id: 'pr10-q-bg', type: 'shape', position: { x: 120, y: 430, width: 1680, height: 160 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8f9fa', borderRadius: '16px', borderColor: '#2563eb', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          { id: 'pr10-q-t', type: 'text', position: { x: 180, y: 470, width: 1560, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '500', color: '#1a1a1a', textAlign: 'center', lineHeight: '1.6' }, content: '스마트시티 혁신 프로젝트를 통해 시민 삶의 질을 높이고,\n지속가능한 도시 성장의 기반을 마련하겠습니다.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 700, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
    ]
  },

  // 디자인 스튜디오 — Creative agency portfolio, avant-garde neon typography
  {
    id: 'design-studio',
    title: '디자인 스튜디오',
    category: '포트폴리오',
    thumbnail: { bg: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)' },
    slides: [
      // Slide 1 — 히어로
      {
        id: 'ds-hero', label: '히어로',
        data: {
          id: 'tpl-ds-1', order: 0, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds1-label', type: 'text', position: { x: 60, y: 40, width: 400, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'left', letterSpacing: '4px' }, content: 'THE OFFICE OF ORDINARY THINGS', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'ds1-ordi', type: 'text', position: { x: 900, y: 30, width: 1200, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#00e5ff', textAlign: 'left' }, content: 'Ordi', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds1-nary', type: 'text', position: { x: -180, y: 550, width: 1400, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#00e676', textAlign: 'left' }, content: 'nary Th', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'ds1-ings', type: 'text', position: { x: 1300, y: 650, width: 800, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#7c6fff', textAlign: 'left' }, content: 'ings', animation: { enter: { type: 'fadeIn', duration: 600, delay: 300, easing: 'ease-out' } } },
            { id: 'ds1-circle', type: 'shape', position: { x: 750, y: 300, width: 320, height: 320 }, rotation: 0, opacity: 0.4, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '50%', borderColor: '#ffffff', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 2 — Work
      {
        id: 'ds-work', label: 'Work',
        data: {
          id: 'tpl-ds-2', order: 1, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds2-title', type: 'text', position: { x: -60, y: 280, width: 1920, height: 450 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '400px', fontWeight: '900', color: '#ff1066', textAlign: 'center' }, content: 'Work', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds2-sub', type: 'text', position: { x: 1500, y: 60, width: 360, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: 'Selected Projects 2024', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'ds2-circle', type: 'shape', position: { x: 1550, y: 750, width: 200, height: 200 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '50%', borderColor: '#ff1066', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 3 — 프로젝트 1
      {
        id: 'ds-proj1', label: '프로젝트 1',
        data: {
          id: 'tpl-ds-3', order: 2, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds3-num', type: 'text', position: { x: -80, y: 300, width: 600, height: 340 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '300px', fontWeight: '900', color: '#00e5ff', textAlign: 'left' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds3-title', type: 'text', position: { x: 1000, y: 350, width: 700, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Brand Identity', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'ds3-desc', type: 'text', position: { x: 1000, y: 430, width: 700, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#aaaaaa', textAlign: 'left' }, content: '글로벌 테크 기업의 새로운 아이덴티티', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 4 — 프로젝트 2
      {
        id: 'ds-proj2', label: '프로젝트 2',
        data: {
          id: 'tpl-ds-4', order: 3, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds4-num', type: 'text', position: { x: 1500, y: 300, width: 600, height: 340 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '300px', fontWeight: '900', color: '#00e676', textAlign: 'left' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds4-title', type: 'text', position: { x: 120, y: 350, width: 700, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Campaign', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'ds4-desc', type: 'text', position: { x: 120, y: 430, width: 700, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#aaaaaa', textAlign: 'left' }, content: '브랜드 캠페인 전략 및 크리에이티브 디렉션', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'ds4-circle', type: 'shape', position: { x: 200, y: 650, width: 250, height: 250 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '50%', borderColor: '#ff1066', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 5 — 프로세스
      {
        id: 'ds-process', label: '프로세스',
        data: {
          id: 'tpl-ds-5', order: 4, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds5-pro', type: 'text', position: { x: -120, y: -60, width: 900, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#7c6fff', textAlign: 'left' }, content: 'Pro', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds5-cess', type: 'text', position: { x: 1050, y: 650, width: 1000, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#00e5ff', textAlign: 'left' }, content: 'cess', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'ds5-r', type: 'text', position: { x: 500, y: 350, width: 200, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'Research', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ds5-d', type: 'text', position: { x: 820, y: 450, width: 200, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→  Design', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ds5-l', type: 'text', position: { x: 1140, y: 550, width: 200, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→  Launch', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 6 — 철학
      {
        id: 'ds-philosophy', label: '철학',
        data: {
          id: 'tpl-ds-6', order: 5, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds6-why', type: 'text', position: { x: 200, y: -120, width: 1520, height: 500 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '450px', fontWeight: '900', color: '#00e676', textAlign: 'center' }, content: 'Why', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds6-desc', type: 'text', position: { x: 460, y: 500, width: 1000, height: 50 }, rotation: 0, opacity: 0.9, zIndex: 10, style: { fontSize: '28px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '우리는 평범한 것들에서 비범함을 찾습니다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'ds6-circle', type: 'shape', position: { x: 1500, y: 700, width: 180, height: 180 }, rotation: 0, opacity: 0.25, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '50%', borderColor: '#00e676', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 7 — 팀
      {
        id: 'ds-team', label: '팀',
        data: {
          id: 'tpl-ds-7', order: 6, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds7-te', type: 'text', position: { x: -200, y: 280, width: 700, height: 450 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '400px', fontWeight: '900', color: '#ff1066', textAlign: 'left' }, content: 'Te', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds7-am', type: 'text', position: { x: 1100, y: 280, width: 700, height: 450 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '400px', fontWeight: '900', color: '#7c6fff', textAlign: 'left' }, content: 'am', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'ds7-sub', type: 'text', position: { x: 560, y: 520, width: 800, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '12 Designers, 3 Studios, 1 Vision', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 8 — 수상
      {
        id: 'ds-awards', label: '수상',
        data: {
          id: 'tpl-ds-8', order: 7, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds8-awa', type: 'text', position: { x: 100, y: -40, width: 900, height: 340 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '300px', fontWeight: '900', color: '#00e5ff', textAlign: 'left' }, content: 'Awa', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds8-rds', type: 'text', position: { x: 900, y: 720, width: 900, height: 340 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '300px', fontWeight: '900', color: '#00e676', textAlign: 'left' }, content: 'rds', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'ds8-a1', type: 'text', position: { x: 700, y: 380, width: 520, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'Red Dot Design Award 2024', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ds8-a2', type: 'text', position: { x: 700, y: 420, width: 520, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'IF Design Award — Gold', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ds8-a3', type: 'text', position: { x: 700, y: 460, width: 520, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'D&AD Pencil — Branding', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'ds8-circle', type: 'shape', position: { x: 1550, y: 350, width: 260, height: 260 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '50%', borderColor: '#ffffff', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 9 — 연락처
      {
        id: 'ds-contact', label: '연락처',
        data: {
          id: 'tpl-ds-9', order: 8, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds9-say', type: 'text', position: { x: -80, y: -60, width: 1000, height: 450 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '400px', fontWeight: '900', color: '#7c6fff', textAlign: 'left' }, content: 'Say', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'ds9-hi', type: 'text', position: { x: 1100, y: 580, width: 900, height: 450 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '400px', fontWeight: '900', color: '#ff1066', textAlign: 'left' }, content: 'Hi.', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'ds9-email', type: 'text', position: { x: 120, y: 750, width: 500, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'left' }, content: 'hello@ordinarythings.studio', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ds9-loc', type: 'text', position: { x: 120, y: 780, width: 500, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'left' }, content: 'Seoul — Tokyo — Berlin', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'ds9-social', type: 'text', position: { x: 120, y: 810, width: 500, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'left' }, content: '@ordinarythings', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 10 — 엔딩
      {
        id: 'ds-ending', label: '엔딩',
        data: {
          id: 'tpl-ds-10', order: 9, duration: 6000,
          background: { type: 'solid', value: '#000000' },
          elements: [
            { id: 'ds10-t1', type: 'text', position: { x: 60, y: 280, width: 450, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#00e5ff', textAlign: 'center' }, content: 'T', animation: { enter: { type: 'fadeIn', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'ds10-o1', type: 'text', position: { x: 480, y: 280, width: 450, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#00e676', textAlign: 'center' }, content: 'O', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            { id: 'ds10-o2', type: 'text', position: { x: 960, y: 280, width: 450, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#ff1066', textAlign: 'center' }, content: 'O', animation: { enter: { type: 'fadeIn', duration: 500, delay: 300, easing: 'ease-out' } } },
            { id: 'ds10-t2', type: 'text', position: { x: 1400, y: 280, width: 450, height: 380 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '350px', fontWeight: '900', color: '#7c6fff', textAlign: 'center' }, content: 'T', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
            { id: 'ds10-credit', type: 'text', position: { x: 560, y: 850, width: 800, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'The Office of Ordinary Things © 2024', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // 12. 한글 첫걸음 — Korean language beginner lessons (10 slides)
  {
    id: 'hangul-first-steps',
    title: '한글 첫걸음',
    category: '교육',
    thumbnail: { bg: '#00e5a0' },
    slides: [
      // Slide 1: 타이틀
      { id: 'hg-1', label: '타이틀', data: {
        id: 'tpl-hg-1', order: 0, duration: 6000,
        background: { type: 'solid', value: '#00e5a0' },
        elements: [
          { id: 'hg1-sub', type: 'text', position: { x: 810, y: 40, width: 300, height: 30 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'center' }, content: 'Learn Korean', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
          { id: 'hg1-title', type: 'text', position: { x: 460, y: 200, width: 1000, height: 350 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '280px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '한글', animation: { enter: { type: 'fadeIn', duration: 600, delay: 100, easing: 'ease-out' } } },
          { id: 'hg1-sub2', type: 'text', position: { x: 610, y: 560, width: 700, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center' }, content: '첫걸음', animation: { enter: { type: 'fadeIn', duration: 500, delay: 300, easing: 'ease-out' } } },
          { id: 'hg1-eng', type: 'text', position: { x: 560, y: 700, width: 800, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: 'Hangul — The Korean Alphabet', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 2: 자음 개요
      { id: 'hg-2', label: '자음 개요', data: {
        id: 'tpl-hg-2', order: 1, duration: 6000,
        background: { type: 'solid', value: '#ff6b6b' },
        elements: [
          { id: 'hg2-title', type: 'text', position: { x: 80, y: 80, width: 600, height: 260 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '200px', fontWeight: '900', color: '#000000', textAlign: 'left' }, content: '자음', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hg2-count', type: 'text', position: { x: 1400, y: 180, width: 400, height: 40 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '28px', fontWeight: '500', color: '#ffffff', textAlign: 'right' }, content: '14 Consonants', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hg2-chars', type: 'text', position: { x: 60, y: 700, width: 1800, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center', letterSpacing: '24px' }, content: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ', animation: { enter: { type: 'fadeIn', duration: 600, delay: 400, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 3: 모음 개요
      { id: 'hg-3', label: '모음 개요', data: {
        id: 'tpl-hg-3', order: 2, duration: 6000,
        background: { type: 'solid', value: '#ffe066' },
        elements: [
          { id: 'hg3-title', type: 'text', position: { x: 1100, y: 80, width: 700, height: 260 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '200px', fontWeight: '900', color: '#000000', textAlign: 'right' }, content: '모음', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hg3-count', type: 'text', position: { x: 100, y: 180, width: 300, height: 40 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '28px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: '10 Vowels', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hg3-chars', type: 'text', position: { x: 60, y: 700, width: 1800, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '900', color: '#1a1a1a', textAlign: 'center', letterSpacing: '28px' }, content: 'ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ', animation: { enter: { type: 'fadeIn', duration: 600, delay: 400, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 4: ㄱ 가
      { id: 'hg-4', label: 'ㄱ 가', data: {
        id: 'tpl-hg-4', order: 3, duration: 6000,
        background: { type: 'solid', value: '#c5a3ff' },
        elements: [
          { id: 'hg4-big', type: 'text', position: { x: 0, y: 200, width: 900, height: 500 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '350px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '가', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'hg4-roman', type: 'text', position: { x: 1050, y: 300, width: 400, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '60px', fontWeight: '900', color: '#000000', textAlign: 'left' }, content: 'ga', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hg4-formula', type: 'text', position: { x: 1050, y: 420, width: 500, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '700', color: '#1a1a1a', textAlign: 'left' }, content: 'ㄱ + ㅏ = 가', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hg4-desc', type: 'text', position: { x: 1050, y: 500, width: 500, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#1a1a1a', textAlign: 'left' }, content: '기역 + 아 = 가', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 5: ㄴ 나
      { id: 'hg-5', label: 'ㄴ 나', data: {
        id: 'tpl-hg-5', order: 4, duration: 6000,
        background: { type: 'solid', value: '#6ec6ff' },
        elements: [
          { id: 'hg5-big', type: 'text', position: { x: 460, y: 100, width: 1000, height: 400 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '300px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '나', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'hg5-desc', type: 'text', position: { x: 460, y: 540, width: 1000, height: 50 }, rotation: 0, opacity: 0.8, zIndex: 10, style: { fontSize: '32px', fontWeight: '600', color: '#1a1a1a', textAlign: 'center' }, content: "na — 나 means 'I' or 'me'", animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hg5-emoji', type: 'text', position: { x: 900, y: 650, width: 120, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '60px', fontWeight: '400', color: '#000000', textAlign: 'center' }, content: '🙋', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 6: ㄷ 다
      { id: 'hg-6', label: 'ㄷ 다', data: {
        id: 'tpl-hg-6', order: 5, duration: 6000,
        background: { type: 'solid', value: '#ff5ca1' },
        elements: [
          { id: 'hg6-big', type: 'text', position: { x: 900, y: 150, width: 900, height: 380 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '280px', fontWeight: '900', color: '#000000', textAlign: 'right' }, content: '다', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'hg6-roman', type: 'text', position: { x: 120, y: 300, width: 300, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '900', color: '#000000', textAlign: 'left' }, content: 'da', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
          { id: 'hg6-desc', type: 'text', position: { x: 120, y: 400, width: 600, height: 40 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '28px', fontWeight: '500', color: '#1a1a1a', textAlign: 'left' }, content: "다 means 'all' or 'every'", animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 7: 안녕하세요
      { id: 'hg-7', label: '안녕하세요', data: {
        id: 'tpl-hg-7', order: 6, duration: 6000,
        background: { type: 'solid', value: '#b8ff57' },
        elements: [
          { id: 'hg7-top', type: 'text', position: { x: 360, y: 140, width: 1200, height: 260 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '200px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '안녕', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hg7-bot', type: 'text', position: { x: 360, y: 400, width: 1200, height: 200 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '160px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '하세요', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'hg7-eng', type: 'text', position: { x: 460, y: 680, width: 800, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#1a1a1a', textAlign: 'center' }, content: 'Hello! — An-nyeong-ha-se-yo', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hg7-emoji', type: 'text', position: { x: 1500, y: 200, width: 120, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '400', color: '#000000', textAlign: 'center' }, content: '👋', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 8: 감사합니다
      { id: 'hg-8', label: '감사합니다', data: {
        id: 'tpl-hg-8', order: 7, duration: 6000,
        background: { type: 'solid', value: '#ff9f43' },
        elements: [
          { id: 'hg8-top', type: 'text', position: { x: 360, y: 180, width: 1200, height: 230 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '180px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '감사', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hg8-bot', type: 'text', position: { x: 360, y: 420, width: 1200, height: 180 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '140px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '합니다', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'hg8-eng', type: 'text', position: { x: 460, y: 660, width: 800, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#1a1a1a', textAlign: 'center' }, content: 'Thank you — Gam-sa-ham-ni-da', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          { id: 'hg8-emoji', type: 'text', position: { x: 1500, y: 250, width: 100, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '60px', fontWeight: '400', color: '#000000', textAlign: 'center' }, content: '🙏', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 9: 숫자
      { id: 'hg-9', label: '숫자', data: {
        id: 'tpl-hg-9', order: 8, duration: 6000,
        background: { type: 'solid', value: '#7bed9f' },
        elements: [
          { id: 'hg9-title', type: 'text', position: { x: 80, y: 60, width: 400, height: 130 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '100px', fontWeight: '900', color: '#000000', textAlign: 'left' }, content: '숫자', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
          { id: 'hg9-row1-kr', type: 'text', position: { x: 160, y: 300, width: 1600, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '900', color: '#000000', textAlign: 'center', letterSpacing: '60px' }, content: '일  이  삼  사  오', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'hg9-row1-num', type: 'text', position: { x: 160, y: 390, width: 1600, height: 50 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '40px', fontWeight: '500', color: '#555555', textAlign: 'center', letterSpacing: '80px' }, content: '1   2   3   4   5', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hg9-row2-kr', type: 'text', position: { x: 160, y: 540, width: 1600, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '900', color: '#000000', textAlign: 'center', letterSpacing: '60px' }, content: '육  칠  팔  구  십', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
          { id: 'hg9-row2-num', type: 'text', position: { x: 160, y: 630, width: 1600, height: 50 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '40px', fontWeight: '500', color: '#555555', textAlign: 'center', letterSpacing: '72px' }, content: '6   7   8   9  10', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
      // Slide 10: 마무리
      { id: 'hg-10', label: '마무리', data: {
        id: 'tpl-hg-10', order: 9, duration: 6000,
        background: { type: 'solid', value: '#ffd3b6' },
        elements: [
          { id: 'hg10-title', type: 'text', position: { x: 360, y: 250, width: 1200, height: 200 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '160px', fontWeight: '900', color: '#000000', textAlign: 'center' }, content: '잘 했어요!', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
          { id: 'hg10-eng', type: 'text', position: { x: 660, y: 470, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center' }, content: 'Great job!', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          { id: 'hg10-bye', type: 'text', position: { x: 460, y: 600, width: 1000, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#1a1a1a', textAlign: 'center' }, content: '다음 시간에 만나요 — See you next time', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          { id: 'hg10-star', type: 'text', position: { x: 300, y: 150, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '60px', fontWeight: '400', color: '#000000', textAlign: 'center' }, content: '⭐', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
          { id: 'hg10-party', type: 'text', position: { x: 1540, y: 180, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '60px', fontWeight: '400', color: '#000000', textAlign: 'center' }, content: '🎉', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
        ],
        transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
      }},
    ]
  },

  // 지속가능경영보고서 — ESG/Sustainability Report (Samsung E&A style), 10 slides
  {
    id: 'esg-sustainability',
    title: '지속가능경영보고서',
    category: 'ESG',
    thumbnail: { bg: 'linear-gradient(180deg, #ffffff 0%, #e8eaf6 100%)' },
    slides: [
      // Slide 1 — 표지
      {
        id: 'esg-s1', label: '표지',
        data: {
          id: 'tpl-esg-1', order: 0, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            // Header
            { id: 'esg1-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Bordered frame
            { id: 'esg1-frame', type: 'shape', position: { x: 120, y: 200, width: 700, height: 500 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Badge "01"
            { id: 'esg1-badge', type: 'shape', position: { x: 180, y: 260, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'esg1-badge-t', type: 'text', position: { x: 180, y: 275, width: 80, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            // Subtitle in frame
            { id: 'esg1-sub', type: 'text', position: { x: 280, y: 280, width: 300, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a237e', textAlign: 'left' }, content: 'Material Topics', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            // Big title
            { id: 'esg1-title', type: 'text', position: { x: 180, y: 380, width: 580, height: 260 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '64px', fontWeight: '800', color: '#1a237e', textAlign: 'left', lineHeight: '1.2' }, content: '지속가능\n경영보고서', animation: { enter: { type: 'slideUp', duration: 600, delay: 200, easing: 'ease-out' } } },
            // Right placeholders
            { id: 'esg1-img1', type: 'shape', position: { x: 920, y: 180, width: 440, height: 220 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'esg1-img2', type: 'shape', position: { x: 960, y: 430, width: 440, height: 160 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg1-img3', type: 'shape', position: { x: 940, y: 620, width: 440, height: 160 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            // Bottom line
            { id: 'esg1-line', type: 'shape', position: { x: 120, y: 840, width: 1680, height: 2 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Bottom text
            { id: 'esg1-bot', type: 'text', position: { x: 120, y: 860, width: 1680, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#1a237e', textAlign: 'center' }, content: 'ESG 경영의 새로운 기준을 제시합니다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 2 — 목차
      {
        id: 'esg-s2', label: '목차',
        data: {
          id: 'tpl-esg-2', order: 1, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'esg2-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'esg2-title', type: 'text', position: { x: 120, y: 100, width: 600, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'left' }, content: 'Contents', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Row 1
            { id: 'esg2-n1', type: 'shape', position: { x: 200, y: 260, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg2-n1t', type: 'text', position: { x: 200, y: 268, width: 50, height: 34 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '20px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg2-t1', type: 'text', position: { x: 280, y: 265, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '600', color: '#1a237e', textAlign: 'left' }, content: '기후변화 대응', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'esg2-l1', type: 'shape', position: { x: 680, y: 285, width: 900, height: 1 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            // Row 2
            { id: 'esg2-n2', type: 'shape', position: { x: 200, y: 380, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'esg2-n2t', type: 'text', position: { x: 200, y: 388, width: 50, height: 34 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '20px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'esg2-t2', type: 'text', position: { x: 280, y: 385, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '600', color: '#1a237e', textAlign: 'left' }, content: '탄소 중립 전략', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'esg2-l2', type: 'shape', position: { x: 680, y: 405, width: 900, height: 1 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Row 3
            { id: 'esg2-n3', type: 'shape', position: { x: 200, y: 500, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'esg2-n3t', type: 'text', position: { x: 200, y: 508, width: 50, height: 34 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '20px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'esg2-t3', type: 'text', position: { x: 280, y: 505, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '600', color: '#1a237e', textAlign: 'left' }, content: '친환경 기술 투자', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'esg2-l3', type: 'shape', position: { x: 680, y: 525, width: 900, height: 1 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Row 4
            { id: 'esg2-n4', type: 'shape', position: { x: 200, y: 620, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'esg2-n4t', type: 'text', position: { x: 200, y: 628, width: 50, height: 34 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '20px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'esg2-t4', type: 'text', position: { x: 280, y: 625, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '600', color: '#1a237e', textAlign: 'left' }, content: '사회적 가치 창출', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'esg2-l4', type: 'shape', position: { x: 680, y: 645, width: 900, height: 1 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            // Row 5
            { id: 'esg2-n5', type: 'shape', position: { x: 200, y: 740, width: 50, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            { id: 'esg2-n5t', type: 'text', position: { x: 200, y: 748, width: 50, height: 34 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '20px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            { id: 'esg2-t5', type: 'text', position: { x: 280, y: 745, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '600', color: '#1a237e', textAlign: 'left' }, content: '거버넌스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
            { id: 'esg2-l5', type: 'shape', position: { x: 680, y: 765, width: 900, height: 1 }, rotation: 0, opacity: 0.3, zIndex: 3, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 3 — 01 기후변화 대응
      {
        id: 'esg-s3', label: '01 기후변화 대응',
        data: {
          id: 'tpl-esg-3', order: 2, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'esg3-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Badge
            { id: 'esg3-badge', type: 'shape', position: { x: 120, y: 160, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'esg3-badge-t', type: 'text', position: { x: 120, y: 175, width: 80, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            // Subtitle
            { id: 'esg3-sub', type: 'text', position: { x: 120, y: 270, width: 500, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#1a237e', textAlign: 'left' }, content: '2024 Material Topics', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            // Title
            { id: 'esg3-title', type: 'text', position: { x: 120, y: 320, width: 600, height: 200 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '64px', fontWeight: '800', color: '#1a237e', textAlign: 'left', lineHeight: '1.2' }, content: '기후변화\n대응', animation: { enter: { type: 'slideUp', duration: 600, delay: 200, easing: 'ease-out' } } },
            // Right bordered frame
            { id: 'esg3-frame', type: 'shape', position: { x: 900, y: 140, width: 880, height: 580 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 1, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 300, easing: 'ease-out' } } },
            // Placeholders inside frame
            { id: 'esg3-ph1', type: 'shape', position: { x: 940, y: 180, width: 380, height: 240 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg3-ph2', type: 'shape', position: { x: 1360, y: 180, width: 380, height: 240 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            { id: 'esg3-ph3', type: 'shape', position: { x: 940, y: 450, width: 800, height: 240 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            // Bottom line + subtitle
            { id: 'esg3-line', type: 'shape', position: { x: 120, y: 840, width: 1680, height: 2 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'esg3-bot', type: 'text', position: { x: 120, y: 860, width: 1680, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#283593', textAlign: 'center' }, content: '기후 리스크 관리 및 탄소 배출 저감 전략', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 4 — 02 탄소 중립 로드맵
      {
        id: 'esg-s4', label: '02 탄소 중립 로드맵',
        data: {
          id: 'tpl-esg-4', order: 3, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'esg4-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Badge
            { id: 'esg4-badge', type: 'shape', position: { x: 120, y: 100, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'esg4-badge-t', type: 'text', position: { x: 120, y: 115, width: 80, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            // Title
            { id: 'esg4-title', type: 'text', position: { x: 240, y: 110, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'left' }, content: '탄소 중립 로드맵', animation: { enter: { type: 'slideUp', duration: 500, delay: 150, easing: 'ease-out' } } },
            // Timeline line
            { id: 'esg4-tl', type: 'shape', position: { x: 260, y: 370, width: 1400, height: 4 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#1a237e' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Circle 1
            { id: 'esg4-c1', type: 'shape', position: { x: 320, y: 340, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'esg4-c1t', type: 'text', position: { x: 220, y: 290, width: 260, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '2025 단기목표', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            // Card 1
            { id: 'esg4-card1', type: 'shape', position: { x: 200, y: 440, width: 340, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'esg4-card1t', type: 'text', position: { x: 220, y: 480, width: 300, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a237e', textAlign: 'center', lineHeight: '1.6' }, content: '탄소 배출량 20% 감축\n재생에너지 전환 30%', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            // Circle 2
            { id: 'esg4-c2', type: 'shape', position: { x: 930, y: 340, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg4-c2t', type: 'text', position: { x: 830, y: 290, width: 260, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '2030 중기목표', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'esg4-card2', type: 'shape', position: { x: 790, y: 440, width: 340, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            { id: 'esg4-card2t', type: 'text', position: { x: 810, y: 480, width: 300, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a237e', textAlign: 'center', lineHeight: '1.6' }, content: '탄소 배출량 50% 감축\n재생에너지 전환 80%', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            // Circle 3
            { id: 'esg4-c3', type: 'shape', position: { x: 1540, y: 340, width: 60, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'esg4-c3t', type: 'text', position: { x: 1440, y: 290, width: 260, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '2050 탄소중립', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            // Card 3
            { id: 'esg4-card3', type: 'shape', position: { x: 1400, y: 440, width: 340, height: 180 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            { id: 'esg4-card3t', type: 'text', position: { x: 1420, y: 480, width: 300, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#1a237e', textAlign: 'center', lineHeight: '1.6' }, content: 'Net Zero 달성\n탄소 배출 제로화', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 5 — 03 친환경 투자 추이
      {
        id: 'esg-s5', label: '03 친환경 투자 추이',
        data: {
          id: 'tpl-esg-5', order: 4, duration: 6000,
          background: { type: 'gradient', value: 'linear-gradient(180deg, #0d1b3e 0%, #162850 100%)' },
          elements: [
            // Pill badge title
            { id: 'esg5-pill', type: 'shape', position: { x: 660, y: 60, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffffff', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'esg5-pill-t', type: 'text', position: { x: 660, y: 70, width: 600, height: 40 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '친환경 기술 투자 내역', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Y-axis labels
            { id: 'esg5-y7', type: 'text', position: { x: 140, y: 180, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '350', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-y6', type: 'text', position: { x: 140, y: 260, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '300', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-y5', type: 'text', position: { x: 140, y: 340, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '250', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-y4', type: 'text', position: { x: 140, y: 420, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '200', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-y3', type: 'text', position: { x: 140, y: 500, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '150', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-y2', type: 'text', position: { x: 140, y: 580, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '100', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-y1', type: 'text', position: { x: 140, y: 660, width: 120, height: 24 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '50', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-yunit', type: 'text', position: { x: 100, y: 150, width: 160, height: 24 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '12px', fontWeight: '400', color: '#ffffff', textAlign: 'right' }, content: '단위:억원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            // Grid lines
            { id: 'esg5-g1', type: 'shape', position: { x: 280, y: 192, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-g2', type: 'shape', position: { x: 280, y: 272, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-g3', type: 'shape', position: { x: 280, y: 352, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-g4', type: 'shape', position: { x: 280, y: 432, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-g5', type: 'shape', position: { x: 280, y: 512, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-g6', type: 'shape', position: { x: 280, y: 592, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            { id: 'esg5-g7', type: 'shape', position: { x: 280, y: 672, width: 1400, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 200, easing: 'ease-out' } } },
            // Bar 2022 (~54 → height ~100)
            { id: 'esg5-bar1', type: 'shape', position: { x: 440, y: 580, width: 100, height: 92 }, rotation: 0, opacity: 1, zIndex: 4, style: { backgroundColor: '#283593', borderRadius: '6px 6px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 500, delay: 400, easing: 'ease-out' } } },
            { id: 'esg5-bar1v', type: 'text', position: { x: 400, y: 545, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '약 54억 원', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'esg5-xl1', type: 'text', position: { x: 420, y: 690, width: 140, height: 30 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '2022', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Bar 2023 (~66 → height ~113)
            { id: 'esg5-bar2', type: 'shape', position: { x: 880, y: 559, width: 100, height: 113 }, rotation: 0, opacity: 1, zIndex: 4, style: { backgroundColor: '#283593', borderRadius: '6px 6px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 500, delay: 500, easing: 'ease-out' } } },
            { id: 'esg5-bar2v', type: 'text', position: { x: 840, y: 524, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '약 66억 원', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
            { id: 'esg5-xl2', type: 'text', position: { x: 860, y: 690, width: 140, height: 30 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '2023', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Bar 2024 (~364 → height ~500, emphasized)
            { id: 'esg5-bar3', type: 'shape', position: { x: 1300, y: 195, width: 140, height: 477 }, rotation: 0, opacity: 1, zIndex: 4, style: { backgroundColor: '#3f51b5', borderRadius: '8px 8px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 600, delay: 600, easing: 'ease-out' } } },
            { id: 'esg5-bar3v', type: 'text', position: { x: 1260, y: 155, width: 220, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '약 364억 원', animation: { enter: { type: 'fadeIn', duration: 400, delay: 700, easing: 'ease-out' } } },
            { id: 'esg5-xl3', type: 'text', position: { x: 1300, y: 690, width: 140, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '2024', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 6 — 04 핵심 기술
      {
        id: 'esg-s6', label: '04 핵심 기술',
        data: {
          id: 'tpl-esg-6', order: 5, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'esg6-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Pill title
            { id: 'esg6-pill', type: 'shape', position: { x: 580, y: 80, width: 760, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'esg6-pill-t', type: 'text', position: { x: 580, y: 90, width: 760, height: 36 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '24px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '핵심 기술 및 인프라 구축', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Large bordered frame
            { id: 'esg6-frame', type: 'shape', position: { x: 120, y: 200, width: 1680, height: 580 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Column 1
            { id: 'esg6-img1', type: 'shape', position: { x: 180, y: 260, width: 420, height: 300 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'esg6-lbl1', type: 'text', position: { x: 180, y: 580, width: 420, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#1a237e', textAlign: 'center' }, content: '수소 연료전지 시스템', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            // Dotted connector 1→2
            { id: 'esg6-dot1', type: 'shape', position: { x: 620, y: 400, width: 80, height: 4 }, rotation: 0, opacity: 0.5, zIndex: 4, style: { backgroundColor: '#1a237e', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Column 2
            { id: 'esg6-img2', type: 'shape', position: { x: 740, y: 260, width: 420, height: 300 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg6-lbl2', type: 'text', position: { x: 740, y: 580, width: 420, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#1a237e', textAlign: 'center' }, content: 'CCUS 탄소 포집 설비', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            // Dotted connector 2→3
            { id: 'esg6-dot2', type: 'shape', position: { x: 1180, y: 400, width: 80, height: 4 }, rotation: 0, opacity: 0.5, zIndex: 4, style: { backgroundColor: '#1a237e', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Column 3
            { id: 'esg6-img3', type: 'shape', position: { x: 1300, y: 260, width: 420, height: 300 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#e0e0e0', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'esg6-lbl3', type: 'text', position: { x: 1300, y: 580, width: 420, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '600', color: '#1a237e', textAlign: 'center' }, content: '스마트 에너지 그리드', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            // Bottom note
            { id: 'esg6-note', type: 'text', position: { x: 120, y: 820, width: 1680, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#9e9e9e', textAlign: 'center' }, content: '※ 상기 기술은 2024년 기준 운영 중인 핵심 인프라입니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 7 — 05 사회적 가치
      {
        id: 'esg-s7', label: '05 사회적 가치',
        data: {
          id: 'tpl-esg-7', order: 6, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'esg7-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Badge
            { id: 'esg7-badge', type: 'shape', position: { x: 120, y: 100, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'esg7-badge-t', type: 'text', position: { x: 120, y: 115, width: 80, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            // Title
            { id: 'esg7-title', type: 'text', position: { x: 240, y: 110, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'left' }, content: '사회적 가치 창출', animation: { enter: { type: 'slideUp', duration: 500, delay: 150, easing: 'ease-out' } } },
            // Stat card 1
            { id: 'esg7-sc1', type: 'shape', position: { x: 160, y: 300, width: 480, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'esg7-v1', type: 'text', position: { x: 160, y: 380, width: 480, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '64px', fontWeight: '800', color: '#1a237e', textAlign: 'center' }, content: '12,500명', animation: { enter: { type: 'slideUp', duration: 500, delay: 300, easing: 'ease-out' } } },
            { id: 'esg7-d1', type: 'text', position: { x: 160, y: 490, width: 480, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#616161', textAlign: 'center' }, content: '지역 고용 창출', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            // Stat card 2
            { id: 'esg7-sc2', type: 'shape', position: { x: 720, y: 300, width: 480, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'esg7-v2', type: 'text', position: { x: 720, y: 380, width: 480, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '64px', fontWeight: '800', color: '#1a237e', textAlign: 'center' }, content: '₩280억', animation: { enter: { type: 'slideUp', duration: 500, delay: 400, easing: 'ease-out' } } },
            { id: 'esg7-d2', type: 'text', position: { x: 720, y: 490, width: 480, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#616161', textAlign: 'center' }, content: '사회공헌 투자', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            // Stat card 3
            { id: 'esg7-sc3', type: 'shape', position: { x: 1280, y: 300, width: 480, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg7-v3', type: 'text', position: { x: 1280, y: 380, width: 480, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '64px', fontWeight: '800', color: '#1a237e', textAlign: 'center' }, content: '95%', animation: { enter: { type: 'slideUp', duration: 500, delay: 500, easing: 'ease-out' } } },
            { id: 'esg7-d3', type: 'text', position: { x: 1280, y: 490, width: 480, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#616161', textAlign: 'center' }, content: '직원 만족도', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 8 — 06 ESG 등급
      {
        id: 'esg-s8', label: '06 ESG 등급',
        data: {
          id: 'tpl-esg-8', order: 7, duration: 6000,
          background: { type: 'solid', value: '#f5f5f5' },
          elements: [
            { id: 'esg8-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Title
            { id: 'esg8-title', type: 'text', position: { x: 120, y: 80, width: 800, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'left' }, content: 'ESG 평가 등급', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Bordered frame
            { id: 'esg8-frame', type: 'shape', position: { x: 160, y: 220, width: 1600, height: 560 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderColor: '#1a237e', borderWidth: 2, borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            // E column
            { id: 'esg8-ec', type: 'shape', position: { x: 320, y: 300, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#2e7d32', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'esg8-el', type: 'text', position: { x: 320, y: 325, width: 100, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '48px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: 'E', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'esg8-eg', type: 'text', position: { x: 280, y: 430, width: 180, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'center' }, content: 'A+', animation: { enter: { type: 'slideUp', duration: 500, delay: 400, easing: 'ease-out' } } },
            { id: 'esg8-ed', type: 'text', position: { x: 260, y: 510, width: 220, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#616161', textAlign: 'center' }, content: 'Environmental\n환경 경영', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            // S column
            { id: 'esg8-sc', type: 'shape', position: { x: 910, y: 300, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1565c0', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg8-sl', type: 'text', position: { x: 910, y: 325, width: 100, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '48px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: 'S', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg8-sg', type: 'text', position: { x: 870, y: 430, width: 180, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'center' }, content: 'A+', animation: { enter: { type: 'slideUp', duration: 500, delay: 500, easing: 'ease-out' } } },
            { id: 'esg8-sd', type: 'text', position: { x: 850, y: 510, width: 220, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#616161', textAlign: 'center' }, content: 'Social\n사회 공헌', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            // G column
            { id: 'esg8-gc', type: 'shape', position: { x: 1500, y: 300, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'esg8-gl', type: 'text', position: { x: 1500, y: 325, width: 100, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '48px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: 'G', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'esg8-gg', type: 'text', position: { x: 1460, y: 430, width: 180, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'center' }, content: 'A+', animation: { enter: { type: 'slideUp', duration: 500, delay: 600, easing: 'ease-out' } } },
            { id: 'esg8-gd', type: 'text', position: { x: 1440, y: 510, width: 220, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#616161', textAlign: 'center' }, content: 'Governance\n지배 구조', animation: { enter: { type: 'fadeIn', duration: 400, delay: 650, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 9 — 07 거버넌스
      {
        id: 'esg-s9', label: '07 거버넌스',
        data: {
          id: 'tpl-esg-9', order: 8, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'esg9-header', type: 'text', position: { x: 60, y: 30, width: 400, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#9e9e9e', textAlign: 'left', letterSpacing: '2px' }, content: '2024 SUSTAINABILITY REPORT', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Badge
            { id: 'esg9-badge', type: 'shape', position: { x: 120, y: 80, width: 80, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'esg9-badge-t', type: 'text', position: { x: 120, y: 95, width: 80, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '07', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            // Title
            { id: 'esg9-title', type: 'text', position: { x: 240, y: 90, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '800', color: '#1a237e', textAlign: 'left' }, content: '거버넌스 체계', animation: { enter: { type: 'slideUp', duration: 500, delay: 150, easing: 'ease-out' } } },
            // Top box: 이사회
            { id: 'esg9-top', type: 'shape', position: { x: 760, y: 250, width: 400, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1a237e', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'esg9-top-t', type: 'text', position: { x: 760, y: 265, width: 400, height: 50 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '이사회', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            // Arrow down 1
            { id: 'esg9-arr1', type: 'text', position: { x: 930, y: 340, width: 60, height: 50 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '32px', fontWeight: '400', color: '#1a237e', textAlign: 'center' }, content: '▼', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Middle row: 3 boxes
            { id: 'esg9-m1', type: 'shape', position: { x: 260, y: 420, width: 380, height: 80 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'esg9-m1t', type: 'text', position: { x: 260, y: 435, width: 380, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: 'ESG위원회', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'esg9-m2', type: 'shape', position: { x: 770, y: 420, width: 380, height: 80 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg9-m2t', type: 'text', position: { x: 770, y: 435, width: 380, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '감사위원회', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'esg9-m3', type: 'shape', position: { x: 1280, y: 420, width: 380, height: 80 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            { id: 'esg9-m3t', type: 'text', position: { x: 1280, y: 435, width: 380, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '보상위원회', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            // Arrow down 2
            { id: 'esg9-arr2', type: 'text', position: { x: 930, y: 510, width: 60, height: 50 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '32px', fontWeight: '400', color: '#1a237e', textAlign: 'center' }, content: '▼', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Bottom flow
            { id: 'esg9-b1', type: 'shape', position: { x: 460, y: 600, width: 340, height: 80 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            { id: 'esg9-b1t', type: 'text', position: { x: 460, y: 615, width: 340, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '경영진', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            { id: 'esg9-barr', type: 'text', position: { x: 830, y: 620, width: 60, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '28px', fontWeight: '400', color: '#1a237e', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            { id: 'esg9-b2', type: 'shape', position: { x: 1120, y: 600, width: 340, height: 80 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: 'transparent', borderColor: '#1a237e', borderWidth: 2, borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
            { id: 'esg9-b2t', type: 'text', position: { x: 1120, y: 615, width: 340, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#1a237e', textAlign: 'center' }, content: '실무조직', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 10 — 마무리
      {
        id: 'esg-s10', label: '마무리',
        data: {
          id: 'tpl-esg-10', order: 9, duration: 6000,
          background: { type: 'gradient', value: 'linear-gradient(180deg, #0d1b3e 0%, #162850 100%)' },
          elements: [
            // Decorative circles
            { id: 'esg10-dc1', type: 'shape', position: { x: -60, y: -60, width: 200, height: 200 }, rotation: 0, opacity: 0.05, zIndex: 1, style: { backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: 2, borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'esg10-dc2', type: 'shape', position: { x: 1720, y: -40, width: 240, height: 240 }, rotation: 0, opacity: 0.08, zIndex: 1, style: { backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: 2, borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'esg10-dc3', type: 'shape', position: { x: -40, y: 880, width: 280, height: 280 }, rotation: 0, opacity: 0.06, zIndex: 1, style: { backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: 2, borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'esg10-dc4', type: 'shape', position: { x: 1700, y: 860, width: 260, height: 260 }, rotation: 0, opacity: 0.1, zIndex: 1, style: { backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: 2, borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 0, easing: 'ease-out' } } },
            // Center text
            { id: 'esg10-main', type: 'text', position: { x: 360, y: 320, width: 1200, height: 200 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: '700', color: '#ffffff', textAlign: 'center', lineHeight: '1.4' }, content: '지속가능한 내일을\n함께 만들어갑니다', animation: { enter: { type: 'slideUp', duration: 600, delay: 200, easing: 'ease-out' } } },
            // Thin white line
            { id: 'esg10-line', type: 'shape', position: { x: 660, y: 580, width: 600, height: 2 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            // Subtitle
            { id: 'esg10-sub', type: 'text', position: { x: 560, y: 610, width: 800, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '18px', fontWeight: '500', color: '#ffffff', textAlign: 'center' }, content: '2024 Sustainability Report', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // 호모 사피엔스 — Human evolution & anthropology
  {
    id: 'homo-sapiens',
    title: '호모 사피엔스',
    category: '교육',
    thumbnail: { bg: 'linear-gradient(180deg, #111111 0%, #1a1a1a 100%)' },
    slides: [
      // Slide 1 — 표지
      {
        id: 'hs-s1', label: '표지',
        data: {
          id: 'tpl-hs-1', order: 0, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            { id: 'hs1-cat', type: 'text', position: { x: 80, y: 60, width: 300, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '400', color: '#999999', textAlign: 'left', letterSpacing: '3px' }, content: 'ANTHROPOLOGY', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'hs1-sub', type: 'text', position: { x: 360, y: 360, width: 1200, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '500', color: '#ffffff', textAlign: 'center' }, content: '인류의 여정', animation: { enter: { type: 'fadeIn', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'hs1-title', type: 'text', position: { x: 260, y: 420, width: 1400, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '800', color: '#2196f3', textAlign: 'center' }, content: '호모 사피엔스', animation: { enter: { type: 'slideUp', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'hs1-info', type: 'text', position: { x: 1400, y: 920, width: 440, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '13px', fontWeight: '400', color: '#999999', textAlign: 'right', lineHeight: '1.6' }, content: 'Human Evolution & Migration\n2024 Educational Series', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 2 — Overview
      {
        id: 'hs-s2', label: 'Overview',
        data: {
          id: 'tpl-hs-2', order: 1, duration: 6000,
          background: { type: 'solid', value: '#2196f3' },
          elements: [
            { id: 'hs2-title', type: 'text', position: { x: 460, y: 320, width: 1000, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'OverView', animation: { enter: { type: 'fadeIn', duration: 500, delay: 0, easing: 'ease-out' } } },
            { id: 'hs2-body', type: 'text', position: { x: 360, y: 430, width: 1200, height: 140 }, rotation: 0, opacity: 0.9, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.8' }, content: '인류의 기원부터 현대 문명까지,\n호모 사피엔스가 지구를 지배하게 된 과정을\n진화, 이동, 그리고 문화의 관점에서 살펴봅니다.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 3 — 진화의 시작
      {
        id: 'hs-s3', label: '진화의 시작',
        data: {
          id: 'tpl-hs-3', order: 2, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            { id: 'hs3-label', type: 'text', position: { x: 660, y: 260, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#2196f3', textAlign: 'center', letterSpacing: '2px' }, content: 'Chapter 01', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'hs3-title', type: 'text', position: { x: 310, y: 320, width: 1300, height: 150 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '700', color: '#ffffff', textAlign: 'center', lineHeight: '1.3' }, content: '700만 년 전,\n모든 것이 시작되다', animation: { enter: { type: 'slideUp', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'hs3-line', type: 'shape', position: { x: 860, y: 520, width: 200, height: 2 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'hs3-sub', type: 'text', position: { x: 460, y: 560, width: 1000, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#999999', textAlign: 'center' }, content: '아프리카 대륙에서 최초의 인류가 등장하다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 4 — 진화 단계
      {
        id: 'hs-s4', label: '진화 단계',
        data: {
          id: 'tpl-hs-4', order: 3, duration: 6000,
          background: { type: 'solid', value: '#1a1a1a' },
          elements: [
            { id: 'hs4-label', type: 'text', position: { x: 660, y: 200, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#2196f3', textAlign: 'center', letterSpacing: '2px' }, content: 'Evolution', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'hs4-title', type: 'text', position: { x: 360, y: 250, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '인류 진화의 핵심 단계', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Card 1
            { id: 'hs4-c1-bg', type: 'shape', position: { x: 200, y: 400, width: 440, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'hs4-c1-icon', type: 'text', position: { x: 200, y: 420, width: 440, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🦴', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'hs4-c1-t', type: 'text', position: { x: 200, y: 490, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '오스트랄로피테쿠스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'hs4-c1-d', type: 'text', position: { x: 220, y: 540, width: 400, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: '약 400만 년 전\n직립보행의 시작', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'hs4-c2-bg', type: 'shape', position: { x: 740, y: 400, width: 440, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'hs4-c2-icon', type: 'text', position: { x: 740, y: 420, width: 440, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🔥', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'hs4-c2-t', type: 'text', position: { x: 740, y: 490, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '호모 에렉투스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'hs4-c2-d', type: 'text', position: { x: 760, y: 540, width: 400, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: '약 190만 년 전\n불의 사용과 도구', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Card 3
            { id: 'hs4-c3-bg', type: 'shape', position: { x: 1280, y: 400, width: 440, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'hs4-c3-icon', type: 'text', position: { x: 1280, y: 420, width: 440, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🧠', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'hs4-c3-t', type: 'text', position: { x: 1280, y: 490, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '호모 사피엔스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'hs4-c3-d', type: 'text', position: { x: 1300, y: 540, width: 400, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: '약 30만 년 전\n인지혁명의 주역', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 5 — 인지혁명
      {
        id: 'hs-s5', label: '인지혁명',
        data: {
          id: 'tpl-hs-5', order: 4, duration: 6000,
          background: { type: 'solid', value: '#2196f3' },
          elements: [
            { id: 'hs5-title', type: 'text', position: { x: 360, y: 300, width: 1200, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '인지혁명', animation: { enter: { type: 'slideUp', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'hs5-body', type: 'text', position: { x: 360, y: 430, width: 1200, height: 100 }, rotation: 0, opacity: 0.9, zIndex: 10, style: { fontSize: '28px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: '약 7만 년 전, 호모 사피엔스는\n\'상상하는 능력\'을 갖게 되었다', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            { id: 'hs5-cite', type: 'text', position: { x: 460, y: 600, width: 1000, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '— 유발 하라리, 《사피엔스》', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 6 — 대이동
      {
        id: 'hs-s6', label: '대이동',
        data: {
          id: 'tpl-hs-6', order: 5, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            { id: 'hs6-label', type: 'text', position: { x: 660, y: 200, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#2196f3', textAlign: 'center', letterSpacing: '2px' }, content: 'Migration', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'hs6-title', type: 'text', position: { x: 360, y: 250, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '아프리카를 벗어나다', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Circle 1
            { id: 'hs6-c1', type: 'shape', position: { x: 260, y: 450, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#1e1e1e', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'hs6-c1-t', type: 'text', position: { x: 210, y: 570, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.5' }, content: '아프리카 출발\n7만 년 전', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Line 1-2
            { id: 'hs6-l1', type: 'shape', position: { x: 370, y: 497, width: 180, height: 2 }, rotation: 0, opacity: 0.3, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Circle 2
            { id: 'hs6-c2', type: 'shape', position: { x: 660, y: 450, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#1e1e1e', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'hs6-c2-t', type: 'text', position: { x: 610, y: 570, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.5' }, content: '중동 도착\n6만 년 전', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Line 2-3
            { id: 'hs6-l2', type: 'shape', position: { x: 770, y: 497, width: 180, height: 2 }, rotation: 0, opacity: 0.3, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Circle 3
            { id: 'hs6-c3', type: 'shape', position: { x: 1060, y: 450, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#1e1e1e', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'hs6-c3-t', type: 'text', position: { x: 1010, y: 570, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.5' }, content: '아시아 확산\n5만 년 전', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Line 3-4
            { id: 'hs6-l3', type: 'shape', position: { x: 1170, y: 497, width: 180, height: 2 }, rotation: 0, opacity: 0.3, zIndex: 2, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            // Circle 4
            { id: 'hs6-c4', type: 'shape', position: { x: 1460, y: 450, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#1e1e1e', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'hs6-c4-t', type: 'text', position: { x: 1410, y: 570, width: 200, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.5' }, content: '전 세계 정착\n1만 년 전', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 7 — 농업혁명
      {
        id: 'hs-s7', label: '농업혁명',
        data: {
          id: 'tpl-hs-7', order: 6, duration: 6000,
          background: { type: 'solid', value: '#1a1a1a' },
          elements: [
            { id: 'hs7-label', type: 'text', position: { x: 660, y: 180, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#2196f3', textAlign: 'center', letterSpacing: '2px' }, content: 'Chapter 03', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'hs7-title', type: 'text', position: { x: 310, y: 230, width: 1300, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#ffffff', textAlign: 'center', lineHeight: '1.3' }, content: '농업혁명 —\n축복인가, 저주인가', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Left card — 축복
            { id: 'hs7-c1-bg', type: 'shape', position: { x: 260, y: 430, width: 620, height: 350 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'hs7-c1-t', type: 'text', position: { x: 260, y: 460, width: 620, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '🌾 축복', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'hs7-c1-d', type: 'text', position: { x: 320, y: 530, width: 500, height: 200 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '17px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '2.0' }, content: '정착 생활\n인구 증가\n문명 탄생', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Right card — 저주
            { id: 'hs7-c2-bg', type: 'shape', position: { x: 1040, y: 430, width: 620, height: 350 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'hs7-c2-t', type: 'text', position: { x: 1040, y: 460, width: 620, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '⚔️ 저주', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'hs7-c2-d', type: 'text', position: { x: 1100, y: 530, width: 500, height: 200 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '17px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '2.0' }, content: '계급 사회\n질병 확산\n노동 강화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 8 — 핵심 수치
      {
        id: 'hs-s8', label: '핵심 수치',
        data: {
          id: 'tpl-hs-8', order: 7, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            { id: 'hs8-label', type: 'text', position: { x: 660, y: 200, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#2196f3', textAlign: 'center', letterSpacing: '2px' }, content: 'Key Numbers', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            // Stat 1
            { id: 'hs8-n1', type: 'text', position: { x: 60, y: 380, width: 560, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '80px', fontWeight: '800', color: '#2196f3', textAlign: 'center' }, content: '300,000', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'hs8-d1', type: 'text', position: { x: 60, y: 490, width: 560, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#999999', textAlign: 'center' }, content: '년 전 등장', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            // Stat 2
            { id: 'hs8-n2', type: 'text', position: { x: 680, y: 390, width: 560, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '60px', fontWeight: '800', color: '#2196f3', textAlign: 'center' }, content: '7,000,000,000', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            { id: 'hs8-d2', type: 'text', position: { x: 680, y: 490, width: 560, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#999999', textAlign: 'center' }, content: '현재 세계 인구', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            // Stat 3
            { id: 'hs8-n3', type: 'text', position: { x: 1300, y: 390, width: 560, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '60px', fontWeight: '800', color: '#2196f3', textAlign: 'center' }, content: '70,000', animation: { enter: { type: 'slideUp', duration: 500, delay: 300, easing: 'ease-out' } } },
            { id: 'hs8-d3', type: 'text', position: { x: 1300, y: 490, width: 560, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: '#999999', textAlign: 'center' }, content: '년 전 인지혁명', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 9 — 현대 사피엔스
      {
        id: 'hs-s9', label: '현대 사피엔스',
        data: {
          id: 'tpl-hs-9', order: 8, duration: 6000,
          background: { type: 'solid', value: '#1a1a1a' },
          elements: [
            { id: 'hs9-label', type: 'text', position: { x: 660, y: 180, width: 600, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#2196f3', textAlign: 'center', letterSpacing: '2px' }, content: 'Today', animation: { enter: { type: 'fadeIn', duration: 400, delay: 0, easing: 'ease-out' } } },
            { id: 'hs9-title', type: 'text', position: { x: 360, y: 230, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '21세기 사피엔스의 과제', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Card 1
            { id: 'hs9-c1-bg', type: 'shape', position: { x: 200, y: 380, width: 440, height: 320 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'hs9-c1-icon', type: 'text', position: { x: 200, y: 400, width: 440, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🌍', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'hs9-c1-t', type: 'text', position: { x: 200, y: 470, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '기후변화', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'hs9-c1-d', type: 'text', position: { x: 220, y: 520, width: 400, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: '지구 온난화와 환경 파괴에\n대한 인류의 대응', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'hs9-c2-bg', type: 'shape', position: { x: 740, y: 380, width: 440, height: 320 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'hs9-c2-icon', type: 'text', position: { x: 740, y: 400, width: 440, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🤖', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'hs9-c2-t', type: 'text', position: { x: 740, y: 470, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '인공지능', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'hs9-c2-d', type: 'text', position: { x: 760, y: 520, width: 400, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: 'AI 기술의 발전과\n인간 정체성의 재정의', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Card 3
            { id: 'hs9-c3-bg', type: 'shape', position: { x: 1280, y: 380, width: 440, height: 320 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e1e', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'hs9-c3-icon', type: 'text', position: { x: 1280, y: 400, width: 440, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '48px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '🧬', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'hs9-c3-t', type: 'text', position: { x: 1280, y: 470, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '생명공학', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'hs9-c3-d', type: 'text', position: { x: 1300, y: 520, width: 400, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: '#ffffff', textAlign: 'center', lineHeight: '1.6' }, content: '유전자 편집과 수명 연장의\n윤리적 딜레마', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 10 — 마무리
      {
        id: 'hs-s10', label: '마무리',
        data: {
          id: 'tpl-hs-10', order: 9, duration: 6000,
          background: { type: 'solid', value: '#2196f3' },
          elements: [
            { id: 'hs10-title', type: 'text', position: { x: 310, y: 320, width: 1300, height: 160 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '56px', fontWeight: '700', color: '#ffffff', textAlign: 'center', lineHeight: '1.4' }, content: '우리는 어디서 왔고\n어디로 가는가', animation: { enter: { type: 'slideUp', duration: 600, delay: 0, easing: 'ease-out' } } },
            { id: 'hs10-line', type: 'shape', position: { x: 760, y: 520, width: 400, height: 2 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'hs10-sub', type: 'text', position: { x: 460, y: 560, width: 1000, height: 40 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '22px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '호모 사피엔스 — 아직 끝나지 않은 이야기', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // UX/UI 디자인 입문 — 10 slides, dark-purple theme
  {
    id: 'uxui-intro',
    title: 'UX/UI 디자인 입문',
    category: '디자인',
    thumbnail: { bg: 'linear-gradient(135deg, #2d2255 0%, #1a1535 100%)' },
    slides: [
      // Slide 1 — 표지
      {
        id: 'ux-s1', label: '표지',
        data: {
          id: 'tpl-ux-1', order: 0, duration: 6000,
          background: { type: 'solid', value: '#2d2255' },
          elements: [
            // "m" logo shape top-left
            { id: 'ux1-logo', type: 'shape', position: { x: 60, y: 50, width: 36, height: 36 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { backgroundColor: '#7c5cfc', borderRadius: '6px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            // Faded "UX" background
            { id: 'ux1-bgtext', type: 'text', position: { x: 400, y: 200, width: 1200, height: 400 }, rotation: 0, opacity: 0.06, zIndex: 1, style: { fontSize: '300px', fontWeight: '900', color: '#ffffff', textAlign: 'center' }, content: 'UX', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
            // "UX/UI"
            { id: 'ux1-title1', type: 'text', position: { x: 460, y: 380, width: 1000, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#ffffff', textAlign: 'center', letterSpacing: '6px' }, content: 'UX/UI', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },
            // "디자인 입문"
            { id: 'ux1-title2', type: 'text', position: { x: 360, y: 440, width: 1200, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '72px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '디자인 입문', animation: { enter: { type: 'slideUp', duration: 600, delay: 300, easing: 'ease-out' } } },
            // URL bottom-right
            { id: 'ux1-url', type: 'text', position: { x: 1550, y: 1010, width: 320, height: 30 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'right' }, content: 'www.designcourse.net', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 2 — Ch.01 정의
      {
        id: 'ux-s2', label: 'Ch.01 정의',
        data: {
          id: 'tpl-ux-2', order: 1, duration: 6000,
          background: { type: 'solid', value: '#2d2255' },
          elements: [
            // Faded "01"
            { id: 'ux2-bgnum', type: 'text', position: { x: 80, y: 250, width: 600, height: 300 }, rotation: 0, opacity: 0.12, zIndex: 1, style: { fontSize: '200px', fontWeight: '900', color: '#ffffff', textAlign: 'left' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
            // "Chapter 01."
            { id: 'ux2-chap', type: 'text', position: { x: 120, y: 340, width: 300, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: 'Chapter 01.', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            // Title right side
            { id: 'ux2-title', type: 'text', position: { x: 900, y: 300, width: 900, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'UX와 UI의 차이점과 정의', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Subtitle
            { id: 'ux2-sub', type: 'text', position: { x: 900, y: 400, width: 900, height: 40 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '20px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left' }, content: '많은 사람들이 헷갈려하는 UX와 UI의 차이점', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 3 — UX vs UI
      {
        id: 'ux-s3', label: 'UX vs UI',
        data: {
          id: 'tpl-ux-3', order: 2, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            // Leaf decorations
            { id: 'ux3-leaf1', type: 'shape', position: { x: 100, y: 80, width: 40, height: 14 }, rotation: 35, opacity: 0.08, zIndex: 1, style: { backgroundColor: '#888888', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'ux3-leaf2', type: 'shape', position: { x: 1750, y: 150, width: 35, height: 12 }, rotation: -20, opacity: 0.06, zIndex: 1, style: { backgroundColor: '#999999', borderRadius: '6px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'ux3-leaf3', type: 'shape', position: { x: 300, y: 950, width: 45, height: 15 }, rotation: 60, opacity: 0.07, zIndex: 1, style: { backgroundColor: '#777777', borderRadius: '10px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'ux3-leaf4', type: 'shape', position: { x: 1600, y: 900, width: 30, height: 10 }, rotation: -45, opacity: 0.05, zIndex: 1, style: { backgroundColor: '#aaaaaa', borderRadius: '6px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            // Left card bg
            { id: 'ux3-card1', type: 'shape', position: { x: 160, y: 140, width: 740, height: 420 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            // Circle outline left
            { id: 'ux3-circ1', type: 'shape', position: { x: 470, y: 170, width: 120, height: 120 }, rotation: 0, opacity: 0.5, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '9999px', borderColor: '#7c5cfc', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            // "UX"
            { id: 'ux3-ux', type: 'text', position: { x: 280, y: 310, width: 500, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '56px', fontWeight: '700', color: '#7c5cfc', textAlign: 'center' }, content: 'UX', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            // "User Experience"
            { id: 'ux3-uxsub', type: 'text', position: { x: 280, y: 400, width: 500, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }, content: 'User Experience', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // "+" between cards
            { id: 'ux3-plus', type: 'text', position: { x: 920, y: 310, width: 80, height: 60 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { fontSize: '36px', fontWeight: '300', color: '#ffffff', textAlign: 'center' }, content: '+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Right card bg
            { id: 'ux3-card2', type: 'shape', position: { x: 1020, y: 140, width: 740, height: 420 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Circle outline right
            { id: 'ux3-circ2', type: 'shape', position: { x: 1330, y: 170, width: 120, height: 120 }, rotation: 0, opacity: 0.5, zIndex: 3, style: { backgroundColor: 'transparent', borderRadius: '9999px', borderColor: '#7c5cfc', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            // "UI"
            { id: 'ux3-ui', type: 'text', position: { x: 1140, y: 310, width: 500, height: 80 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '56px', fontWeight: '700', color: '#7c5cfc', textAlign: 'center' }, content: 'UI', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            // "User Interface"
            { id: 'ux3-uisub', type: 'text', position: { x: 1140, y: 400, width: 500, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }, content: 'User Interface', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Below cards — left
            { id: 'ux3-uxlabel', type: 'text', position: { x: 160, y: 600, width: 740, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '사용자 경험', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'ux3-uxdesc', type: 'text', position: { x: 200, y: 660, width: 660, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: '1.6' }, content: '사용자가 제품을 사용하면서 느끼는\n총체적인 경험을 설계하는 분야', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            // Purple pill left
            { id: 'ux3-pill1', type: 'shape', position: { x: 380, y: 740, width: 200, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'ux3-pill1t', type: 'text', position: { x: 380, y: 742, width: 200, height: 32 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '14px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '광범위한 영역 설계', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
            // Below cards — right
            { id: 'ux3-uilabel', type: 'text', position: { x: 1020, y: 600, width: 740, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '사용자 환경', animation: { enter: { type: 'slideUp', duration: 400, delay: 420, easing: 'ease-out' } } },
            { id: 'ux3-uidesc', type: 'text', position: { x: 1060, y: 660, width: 660, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: '1.6' }, content: '사용자가 직접 마주하는\n시각적 인터페이스를 디자인하는 분야', animation: { enter: { type: 'fadeIn', duration: 400, delay: 470, easing: 'ease-out' } } },
            // Purple pill right
            { id: 'ux3-pill2', type: 'shape', position: { x: 1240, y: 740, width: 200, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
            { id: 'ux3-pill2t', type: 'text', position: { x: 1240, y: 742, width: 200, height: 32 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '14px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '폰트 컬러 레이아웃', animation: { enter: { type: 'fadeIn', duration: 300, delay: 540, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 4 — Ch.02 UX 프로세스
      {
        id: 'ux-s4', label: 'Ch.02 UX 프로세스',
        data: {
          id: 'tpl-ux-4', order: 3, duration: 6000,
          background: { type: 'solid', value: '#2d2255' },
          elements: [
            // Faded "02"
            { id: 'ux4-bgnum', type: 'text', position: { x: 80, y: 250, width: 600, height: 300 }, rotation: 0, opacity: 0.12, zIndex: 1, style: { fontSize: '200px', fontWeight: '900', color: '#ffffff', textAlign: 'left' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
            // Title
            { id: 'ux4-title', type: 'text', position: { x: 460, y: 200, width: 1000, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'UX 디자인 프로세스', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Step circles + connecting lines
            { id: 'ux4-line', type: 'shape', position: { x: 260, y: 488, width: 1400, height: 3 }, rotation: 0, opacity: 0.2, zIndex: 2, style: { backgroundColor: '#7c5cfc' }, content: '', animation: { enter: { type: 'fadeIn', duration: 600, delay: 200, easing: 'ease-out' } } },
            // Circle 1
            { id: 'ux4-c1', type: 'shape', position: { x: 230, y: 440, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'ux4-c1t', type: 'text', position: { x: 230, y: 455, width: 100, height: 70 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 270, easing: 'ease-out' } } },
            { id: 'ux4-l1', type: 'text', position: { x: 180, y: 560, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '리서치', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Circle 2
            { id: 'ux4-c2', type: 'shape', position: { x: 530, y: 440, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux4-c2t', type: 'text', position: { x: 530, y: 455, width: 100, height: 70 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 370, easing: 'ease-out' } } },
            { id: 'ux4-l2', type: 'text', position: { x: 480, y: 560, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '분석', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Circle 3
            { id: 'ux4-c3', type: 'shape', position: { x: 830, y: 440, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'ux4-c3t', type: 'text', position: { x: 830, y: 455, width: 100, height: 70 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
            { id: 'ux4-l3', type: 'text', position: { x: 780, y: 560, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '설계', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Circle 4
            { id: 'ux4-c4', type: 'shape', position: { x: 1130, y: 440, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'ux4-c4t', type: 'text', position: { x: 1130, y: 455, width: 100, height: 70 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 570, easing: 'ease-out' } } },
            { id: 'ux4-l4', type: 'text', position: { x: 1080, y: 560, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '프로토타입', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            // Circle 5
            { id: 'ux4-c5', type: 'shape', position: { x: 1430, y: 440, width: 100, height: 100 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
            { id: 'ux4-c5t', type: 'text', position: { x: 1430, y: 455, width: 100, height: 70 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 300, delay: 670, easing: 'ease-out' } } },
            { id: 'ux4-l5', type: 'text', position: { x: 1380, y: 560, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '테스트', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
            // Arrow indicators between circles
            { id: 'ux4-a1', type: 'text', position: { x: 350, y: 460, width: 60, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 4, style: { fontSize: '20px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 200, delay: 320, easing: 'ease-out' } } },
            { id: 'ux4-a2', type: 'text', position: { x: 650, y: 460, width: 60, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 4, style: { fontSize: '20px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 200, delay: 420, easing: 'ease-out' } } },
            { id: 'ux4-a3', type: 'text', position: { x: 950, y: 460, width: 60, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 4, style: { fontSize: '20px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 200, delay: 520, easing: 'ease-out' } } },
            { id: 'ux4-a4', type: 'text', position: { x: 1250, y: 460, width: 60, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 4, style: { fontSize: '20px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 200, delay: 620, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 5 — Ch.03 UI 요소
      {
        id: 'ux-s5', label: 'Ch.03 UI 요소',
        data: {
          id: 'tpl-ux-5', order: 4, duration: 6000,
          background: { type: 'solid', value: '#1a1535' },
          elements: [
            // Faded "03"
            { id: 'ux5-bgnum', type: 'text', position: { x: 80, y: 250, width: 600, height: 300 }, rotation: 0, opacity: 0.12, zIndex: 1, style: { fontSize: '200px', fontWeight: '900', color: '#ffffff', textAlign: 'left' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
            // Title
            { id: 'ux5-title', type: 'text', position: { x: 460, y: 120, width: 1000, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'UI의 핵심 구성 요소', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Card 1 — 컬러 시스템
            { id: 'ux5-c1bg', type: 'shape', position: { x: 160, y: 280, width: 760, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'ux5-c1e', type: 'text', position: { x: 200, y: 310, width: 80, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '\uD83C\uDFA8', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'ux5-c1t', type: 'text', position: { x: 200, y: 380, width: 680, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '컬러 시스템', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'ux5-c1d', type: 'text', position: { x: 200, y: 430, width: 680, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.6' }, content: '브랜드 아이덴티티를 전달하고\n사용자의 감정과 행동을 유도하는 색상 체계', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Card 2 — 타이포그래피
            { id: 'ux5-c2bg', type: 'shape', position: { x: 1000, y: 280, width: 760, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'ux5-c2e', type: 'text', position: { x: 1040, y: 310, width: 80, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '\u270F\uFE0F', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'ux5-c2t', type: 'text', position: { x: 1040, y: 380, width: 680, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '타이포그래피', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ux5-c2d', type: 'text', position: { x: 1040, y: 430, width: 680, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.6' }, content: '가독성과 계층 구조를 만들어\n정보를 효과적으로 전달하는 글꼴 시스템', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Card 3 — 레이아웃 그리드
            { id: 'ux5-c3bg', type: 'shape', position: { x: 160, y: 640, width: 760, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'ux5-c3e', type: 'text', position: { x: 200, y: 670, width: 80, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '\uD83D\uDCD0', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ux5-c3t', type: 'text', position: { x: 200, y: 740, width: 680, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '레이아웃 그리드', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux5-c3d', type: 'text', position: { x: 200, y: 790, width: 680, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.6' }, content: '일관된 정렬과 간격으로\n시각적 질서를 만드는 구조적 프레임워크', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 4 — 컴포넌트
            { id: 'ux5-c4bg', type: 'shape', position: { x: 1000, y: 640, width: 760, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'ux5-c4e', type: 'text', position: { x: 1040, y: 670, width: 80, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '\uD83D\uDD18', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux5-c4t', type: 'text', position: { x: 1040, y: 740, width: 680, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '컴포넌트', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ux5-c4d', type: 'text', position: { x: 1040, y: 790, width: 680, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '15px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.6' }, content: '버튼, 입력 필드 등 재사용 가능한\nUI 빌딩 블록과 디자인 시스템 요소', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 6 — 디자인 원칙
      {
        id: 'ux-s6', label: '디자인 원칙',
        data: {
          id: 'tpl-ux-6', order: 5, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            // Title
            { id: 'ux6-title', type: 'text', position: { x: 360, y: 100, width: 1200, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '좋은 디자인의 10가지 원칙', animation: { enter: { type: 'slideUp', duration: 500, delay: 0, easing: 'ease-out' } } },
            // "by Dieter Rams"
            { id: 'ux6-author', type: 'text', position: { x: 710, y: 190, width: 500, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '500', color: '#7c5cfc', textAlign: 'center' }, content: 'by Dieter Rams', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            // Left column 01-05
            { id: 'ux6-n1', type: 'text', position: { x: 200, y: 300, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'ux6-t1', type: 'text', position: { x: 280, y: 300, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '혁신적이다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 260, easing: 'ease-out' } } },
            { id: 'ux6-n2', type: 'text', position: { x: 200, y: 356, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ux6-t2', type: 'text', position: { x: 280, y: 356, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '제품을 유용하게 만든다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 320, easing: 'ease-out' } } },
            { id: 'ux6-n3', type: 'text', position: { x: 200, y: 412, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux6-t3', type: 'text', position: { x: 280, y: 412, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '심미적이다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 370, easing: 'ease-out' } } },
            { id: 'ux6-n4', type: 'text', position: { x: 200, y: 468, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ux6-t4', type: 'text', position: { x: 280, y: 468, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '제품을 이해하기 쉽게 만든다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },
            { id: 'ux6-n5', type: 'text', position: { x: 200, y: 524, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'ux6-t5', type: 'text', position: { x: 280, y: 524, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '겸손하다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
            // Right column 06-10
            { id: 'ux6-n6', type: 'text', position: { x: 1020, y: 300, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '06', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ux6-t6', type: 'text', position: { x: 1100, y: 300, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '정직하다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 320, easing: 'ease-out' } } },
            { id: 'ux6-n7', type: 'text', position: { x: 1020, y: 356, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '07', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux6-t7', type: 'text', position: { x: 1100, y: 356, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '오래 지속된다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 370, easing: 'ease-out' } } },
            { id: 'ux6-n8', type: 'text', position: { x: 1020, y: 412, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '08', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ux6-t8', type: 'text', position: { x: 1100, y: 412, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '마지막 디테일까지 철저하다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },
            { id: 'ux6-n9', type: 'text', position: { x: 1020, y: 468, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '09', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'ux6-t9', type: 'text', position: { x: 1100, y: 468, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '환경 친화적이다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
            { id: 'ux6-n10', type: 'text', position: { x: 1020, y: 524, width: 60, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#7c5cfc', textAlign: 'right' }, content: '10', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'ux6-t10', type: 'text', position: { x: 1100, y: 524, width: 500, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '20px', fontWeight: '500', color: '#ffffff', textAlign: 'left' }, content: '가능한 한 적게 디자인한다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 7 — Ch.04 도구
      {
        id: 'ux-s7', label: 'Ch.04 도구',
        data: {
          id: 'tpl-ux-7', order: 6, duration: 6000,
          background: { type: 'solid', value: '#2d2255' },
          elements: [
            // Faded "04"
            { id: 'ux7-bgnum', type: 'text', position: { x: 80, y: 250, width: 600, height: 300 }, rotation: 0, opacity: 0.12, zIndex: 1, style: { fontSize: '200px', fontWeight: '900', color: '#ffffff', textAlign: 'left' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
            // Title
            { id: 'ux7-title', type: 'text', position: { x: 460, y: 120, width: 1000, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '디자인 도구', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            // Card 1 — Figma
            { id: 'ux7-c1bg', type: 'shape', position: { x: 120, y: 280, width: 540, height: 620 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'ux7-c1pill-bg', type: 'shape', position: { x: 180, y: 320, width: 100, height: 32 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'ux7-c1pill-t', type: 'text', position: { x: 180, y: 322, width: 100, height: 28 }, rotation: 0, opacity: 1, zIndex: 4, style: { fontSize: '13px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: '추천', animation: { enter: { type: 'fadeIn', duration: 300, delay: 220, easing: 'ease-out' } } },
            { id: 'ux7-c1t', type: 'text', position: { x: 180, y: 380, width: 420, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '32px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Figma', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'ux7-c1d', type: 'text', position: { x: 180, y: 440, width: 420, height: 120 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.8' }, content: '브라우저 기반 협업 디자인 도구.\n실시간 공동 작업, 프로토타이핑,\n디자인 시스템 관리까지 올인원.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Card 2 — Sketch
            { id: 'ux7-c2bg', type: 'shape', position: { x: 700, y: 280, width: 540, height: 620 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#252540', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'ux7-c2t', type: 'text', position: { x: 760, y: 380, width: 420, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '32px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Sketch', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ux7-c2d', type: 'text', position: { x: 760, y: 440, width: 420, height: 120 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.8' }, content: 'macOS 전용 벡터 디자인 도구.\n심볼, 라이브러리 기능으로\nUI 디자인 워크플로우에 최적화.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Card 3 — Framer
            { id: 'ux7-c3bg', type: 'shape', position: { x: 1280, y: 280, width: 540, height: 620 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'ux7-c3t', type: 'text', position: { x: 1340, y: 380, width: 420, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '32px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Framer', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux7-c3d', type: 'text', position: { x: 1340, y: 440, width: 420, height: 120 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'left', lineHeight: '1.8' }, content: '인터랙션과 애니메이션에 강한 도구.\n코드 기반 컴포넌트로\n고급 프로토타입 제작 가능.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 8 — 케이스 스터디
      {
        id: 'ux-s8', label: '케이스 스터디',
        data: {
          id: 'tpl-ux-8', order: 7, duration: 6000,
          background: { type: 'solid', value: '#1a1535' },
          elements: [
            // Title
            { id: 'ux8-title', type: 'text', position: { x: 160, y: 80, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: '케이스 스터디', animation: { enter: { type: 'slideUp', duration: 500, delay: 0, easing: 'ease-out' } } },
            // Purple pill "Case Study"
            { id: 'ux8-pill-bg', type: 'shape', position: { x: 780, y: 90, width: 140, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#7c5cfc', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 100, easing: 'ease-out' } } },
            { id: 'ux8-pill-t', type: 'text', position: { x: 780, y: 92, width: 140, height: 32 }, rotation: 0, opacity: 1, zIndex: 6, style: { fontSize: '14px', fontWeight: '600', color: '#ffffff', textAlign: 'center' }, content: 'Case Study', animation: { enter: { type: 'fadeIn', duration: 300, delay: 120, easing: 'ease-out' } } },
            // Before card
            { id: 'ux8-before-bg', type: 'shape', position: { x: 120, y: 200, width: 800, height: 700 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'ux8-before-t', type: 'text', position: { x: 180, y: 240, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Before', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            // Gray placeholder
            { id: 'ux8-before-ph', type: 'shape', position: { x: 180, y: 300, width: 680, height: 300 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#666666', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            // Issues
            { id: 'ux8-issue1', type: 'text', position: { x: 200, y: 630, width: 660, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#f87171', textAlign: 'left' }, content: '\u2022 복잡한 네비게이션 구조', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux8-issue2', type: 'text', position: { x: 200, y: 670, width: 660, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#f87171', textAlign: 'left' }, content: '\u2022 낮은 전환율 (1.2%)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },
            { id: 'ux8-issue3', type: 'text', position: { x: 200, y: 710, width: 660, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#f87171', textAlign: 'left' }, content: '\u2022 일관성 없는 UI 패턴', animation: { enter: { type: 'fadeIn', duration: 300, delay: 410, easing: 'ease-out' } } },
            // Arrow between
            { id: 'ux8-arrow', type: 'text', position: { x: 930, y: 480, width: 60, height: 60 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '36px', fontWeight: '400', color: '#ffffff', textAlign: 'center' }, content: '→', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            // After card
            { id: 'ux8-after-bg', type: 'shape', position: { x: 1000, y: 200, width: 800, height: 700 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'ux8-after-t', type: 'text', position: { x: 1060, y: 240, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'After', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            // Gray placeholder
            { id: 'ux8-after-ph', type: 'shape', position: { x: 1060, y: 300, width: 680, height: 300 }, rotation: 0, opacity: 0.15, zIndex: 3, style: { backgroundColor: '#888888', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // Improvements
            { id: 'ux8-imp1', type: 'text', position: { x: 1080, y: 630, width: 660, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#4ade80', textAlign: 'left' }, content: '\u2022 직관적인 3-depth 구조', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ux8-imp2', type: 'text', position: { x: 1080, y: 670, width: 660, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#4ade80', textAlign: 'left' }, content: '\u2022 전환율 340% 개선 (5.3%)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 430, easing: 'ease-out' } } },
            { id: 'ux8-imp3', type: 'text', position: { x: 1080, y: 710, width: 660, height: 30 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '16px', fontWeight: '500', color: '#4ade80', textAlign: 'left' }, content: '\u2022 통합 디자인 시스템 적용', animation: { enter: { type: 'fadeIn', duration: 300, delay: 460, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 9 — 커리어
      {
        id: 'ux-s9', label: '커리어',
        data: {
          id: 'tpl-ux-9', order: 8, duration: 6000,
          background: { type: 'solid', value: '#111111' },
          elements: [
            // Title
            { id: 'ux9-title', type: 'text', position: { x: 360, y: 80, width: 1200, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'UX/UI 디자이너 커리어 패스', animation: { enter: { type: 'slideUp', duration: 500, delay: 0, easing: 'ease-out' } } },
            // Junior card
            { id: 'ux9-c1bg', type: 'shape', position: { x: 200, y: 240, width: 1520, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#7c5cfc', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'ux9-c1t', type: 'text', position: { x: 260, y: 270, width: 300, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Junior', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'ux9-c1d', type: 'text', position: { x: 260, y: 320, width: 800, height: 60 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.8)', textAlign: 'left', lineHeight: '1.6' }, content: 'Figma 기본기 \u00b7 디자인 시스템 이해 \u00b7 컴포넌트 제작\n포트폴리오 3-5개 프로젝트', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'ux9-c1s', type: 'text', position: { x: 1500, y: 280, width: 200, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', textAlign: 'right' }, content: '\u20A93,000-4,500\uB9CC', animation: { enter: { type: 'fadeIn', duration: 300, delay: 320, easing: 'ease-out' } } },
            // Mid-level card
            { id: 'ux9-c2bg', type: 'shape', position: { x: 260, y: 480, width: 1520, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#252540', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'ux9-c2t', type: 'text', position: { x: 320, y: 510, width: 300, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Mid-level', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'ux9-c2d', type: 'text', position: { x: 320, y: 560, width: 800, height: 60 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.8)', textAlign: 'left', lineHeight: '1.6' }, content: 'UX 리서치 \u00b7 사용성 테스트 \u00b7 디자인 시스템 구축\n크로스펑셔널 협업 경험 3년+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'ux9-c2s', type: 'text', position: { x: 1560, y: 520, width: 200, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', textAlign: 'right' }, content: '\u20A95,000-7,000\uB9CC', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },
            // Senior card
            { id: 'ux9-c3bg', type: 'shape', position: { x: 320, y: 720, width: 1520, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e1e2e', borderRadius: '20px' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'ux9-c3t', type: 'text', position: { x: 380, y: 750, width: 300, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '28px', fontWeight: '700', color: '#ffffff', textAlign: 'left' }, content: 'Senior', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'ux9-c3d', type: 'text', position: { x: 380, y: 800, width: 800, height: 60 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.8)', textAlign: 'left', lineHeight: '1.6' }, content: '\uB514\uC790\uC778 \uC804\uB7B5 \u00b7 \uD300 \uB9AC\uB529 \u00b7 \uBE44\uC988\uB2C8\uC2A4 \uC784\uD329\uD2B8 \uCE21\uC815\n\uC2DC\uB2C8\uC5B4 \uB808\uBCA8 \uD504\uB85C\uC81D\uD2B8 \uB9AC\uB4DC 5\uB144+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'ux9-c3s', type: 'text', position: { x: 1620, y: 760, width: 200, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', textAlign: 'right' }, content: '\u20A98,000\uB9CC+', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
      // Slide 10 — 마무리
      {
        id: 'ux-s10', label: '마무리',
        data: {
          id: 'tpl-ux-10', order: 9, duration: 6000,
          background: { type: 'solid', value: '#2d2255' },
          elements: [
            // Main quote
            { id: 'ux10-quote', type: 'text', position: { x: 360, y: 280, width: 1200, height: 180 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '800', color: '#ffffff', textAlign: 'center', lineHeight: '1.4' }, content: '\uB514\uC790\uC778\uC740\n\uBB38\uC81C \uD574\uACB0\uC774\uB2E4', animation: { enter: { type: 'slideUp', duration: 600, delay: 0, easing: 'ease-out' } } },
            // Thin purple line
            { id: 'ux10-line', type: 'shape', position: { x: 760, y: 500, width: 400, height: 2 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { backgroundColor: '#7c5cfc' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            // English quote
            { id: 'ux10-eng', type: 'text', position: { x: 360, y: 540, width: 1200, height: 80 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#9b7dff', textAlign: 'center', fontStyle: 'italic', lineHeight: '1.6' }, content: 'Design is not just what it looks like.\nDesign is how it works.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 400, easing: 'ease-out' } } },
            // Attribution
            { id: 'ux10-attr', type: 'text', position: { x: 760, y: 660, width: 400, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }, content: '\u2014 Steve Jobs', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // 나도 혼자 산다! — 자취 초보 가이드 (10 slides, cute casual style)
  {
    id: 'living-alone-guide',
    title: '나도 혼자 산다!',
    category: '라이프',
    thumbnail: { bg: 'linear-gradient(180deg, #ffffff 0%, #f0f6ff 100%)' },
    slides: [
      // Slide 1 — 표지
      {
        id: 'la-cover', label: '표지',
        data: {
          id: 'tpl-la-1', order: 0, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'la1-hi', type: 'text', position: { x: 60, y: 40, width: 200, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '13px', fontWeight: '400', color: '#999999', textAlign: 'left' }, content: 'HI MANGOHOUSE', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'la1-info', type: 'text', position: { x: 1660, y: 40, width: 200, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '13px', fontWeight: '400', color: '#999999', textAlign: 'right' }, content: '자취생 생활정보', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            // Yellow pill badge
            { id: 'la1-pill', type: 'shape', position: { x: 610, y: 320, width: 700, height: 50 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la1-pill-t', type: 'text', position: { x: 610, y: 325, width: 700, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '600', color: '#2d2d2d', textAlign: 'center' }, content: '자신있는 자취 생활 길라잡이', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Main title
            { id: 'la1-title', type: 'text', position: { x: 260, y: 400, width: 1400, height: 100 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '72px', fontWeight: '800', color: '#2d2d2d', textAlign: 'center' }, content: '나도 혼자 산다!', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Sparkles
            { id: 'la1-sp1', type: 'text', position: { x: 300, y: 280, width: 30, height: 30 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: '#cccccc', textAlign: 'center' }, content: '✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la1-sp2', type: 'text', position: { x: 1550, y: 350, width: 30, height: 30 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: '#cccccc', textAlign: 'center' }, content: '✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la1-sp3', type: 'text', position: { x: 1400, y: 250, width: 30, height: 30 }, rotation: 0, opacity: 0.2, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#cccccc', textAlign: 'center' }, content: '✧', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la1-sp4', type: 'text', position: { x: 450, y: 430, width: 30, height: 30 }, rotation: 0, opacity: 0.25, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#cccccc', textAlign: 'center' }, content: '✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // City skyline buildings
            { id: 'la1-b1', type: 'shape', position: { x: 100, y: 780, width: 80, height: 300 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#dddddd', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'la1-b2', type: 'shape', position: { x: 200, y: 680, width: 100, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#cccccc', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 450, easing: 'ease-out' } } },
            { id: 'la1-b2t', type: 'shape', position: { x: 220, y: 675, width: 60, height: 8 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffd43b', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la1-b3', type: 'shape', position: { x: 320, y: 850, width: 60, height: 230 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#e0e0e0', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 470, easing: 'ease-out' } } },
            { id: 'la1-b4', type: 'shape', position: { x: 1400, y: 750, width: 120, height: 330 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#cccccc', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 420, easing: 'ease-out' } } },
            { id: 'la1-b5', type: 'shape', position: { x: 1540, y: 820, width: 80, height: 260 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#dddddd', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 440, easing: 'ease-out' } } },
            { id: 'la1-b5t', type: 'shape', position: { x: 1555, y: 815, width: 50, height: 8 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffd43b', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 520, easing: 'ease-out' } } },
            { id: 'la1-b6', type: 'shape', position: { x: 1640, y: 700, width: 90, height: 380 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#e0e0e0', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 460, easing: 'ease-out' } } },
            { id: 'la1-b7', type: 'shape', position: { x: 1750, y: 880, width: 70, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#dddddd', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 480, easing: 'ease-out' } } },
            { id: 'la1-b8', type: 'shape', position: { x: 1840, y: 760, width: 80, height: 320 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#cccccc', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'slideUp', duration: 400, delay: 490, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 2 — Ch.01 자취가 필요한 이유
      {
        id: 'la-ch01', label: 'Ch.01 자취가 필요한 이유',
        data: {
          id: 'tpl-la-2', order: 1, duration: 6000,
          background: { type: 'solid', value: '#f0f6ff' },
          elements: [
            // Decorative buildings on left
            { id: 'la2-bl1', type: 'shape', position: { x: -20, y: 400, width: 60, height: 680 }, rotation: 0, opacity: 0.15, zIndex: 1, style: { backgroundColor: '#999999', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'la2-bl2', type: 'shape', position: { x: 50, y: 550, width: 50, height: 530 }, rotation: 0, opacity: 0.1, zIndex: 1, style: { backgroundColor: '#999999', borderRadius: '4px 4px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            // Yellow pill
            { id: 'la2-pill', type: 'shape', position: { x: 810, y: 100, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la2-pill-t', type: 'text', position: { x: 810, y: 106, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 01', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la2-title', type: 'text', position: { x: 310, y: 170, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '52px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '자취가 필요한 이유', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Card 1
            { id: 'la2-c1', type: 'shape', position: { x: 180, y: 320, width: 480, height: 380 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'la2-n1', type: 'shape', position: { x: 370, y: 360, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la2-n1t', type: 'text', position: { x: 370, y: 365, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la2-c1t', type: 'text', position: { x: 220, y: 440, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '왜 혼자서 사세요?', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la2-c1d', type: 'text', position: { x: 220, y: 500, width: 400, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.6' }, content: '다른 사람들은 어떠한 이유\n때문에 혼자 살고 있는걸까?', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'la2-c2', type: 'shape', position: { x: 720, y: 320, width: 480, height: 380 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'la2-n2', type: 'shape', position: { x: 910, y: 360, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la2-n2t', type: 'text', position: { x: 910, y: 365, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la2-c2t', type: 'text', position: { x: 760, y: 440, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '현실적으로 생각하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la2-c2d', type: 'text', position: { x: 760, y: 500, width: 400, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.6' }, content: '현실적으로 내 상황을 두고\n보았을 때, 어려움은 무엇인가?', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Card 3
            { id: 'la2-c3', type: 'shape', position: { x: 1260, y: 320, width: 480, height: 380 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'la2-n3', type: 'shape', position: { x: 1450, y: 360, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la2-n3t', type: 'text', position: { x: 1450, y: 365, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la2-c3t', type: 'text', position: { x: 1300, y: 440, width: 400, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '나는 원하고 있는가?', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la2-c3d', type: 'text', position: { x: 1300, y: 500, width: 400, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.6' }, content: '이 결정이 한순간의 충동은\n아닌지 나 자신을 바라본다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 3 — Ch.02 집 구하기
      {
        id: 'la-ch02', label: 'Ch.02 집 구하기',
        data: {
          id: 'tpl-la-3', order: 2, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            // Yellow pill
            { id: 'la3-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la3-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 02', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la3-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '첫 번째 관문, 집 구하기', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Card 1
            { id: 'la3-c1', type: 'shape', position: { x: 120, y: 300, width: 520, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'la3-c1e', type: 'text', position: { x: 160, y: 330, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🏠', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la3-c1t', type: 'text', position: { x: 160, y: 390, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '월세 vs 전세', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la3-c1d', type: 'text', position: { x: 160, y: 450, width: 440, height: 200 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.8' }, content: '월세: 보증금 적고 매달 납부\n전세: 목돈 필요하나 월 부담 없음\n\n내 자금 상황에 맞는\n선택이 중요합니다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'la3-c2', type: 'shape', position: { x: 700, y: 300, width: 520, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'la3-c2e', type: 'text', position: { x: 740, y: 330, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '📋', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la3-c2t', type: 'text', position: { x: 740, y: 390, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '체크리스트', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la3-c2d', type: 'text', position: { x: 740, y: 450, width: 440, height: 200 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.8' }, content: '☑ 채광 및 환기 상태\n☑ 수압 및 온수 확인\n☑ 곰팡이·누수 흔적\n☑ 교통 접근성\n☑ 주변 편의시설', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Card 3
            { id: 'la3-c3', type: 'shape', position: { x: 1280, y: 300, width: 520, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'la3-c3e', type: 'text', position: { x: 1320, y: 330, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '⚠️', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la3-c3t', type: 'text', position: { x: 1320, y: 390, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '사기 주의', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la3-c3d', type: 'text', position: { x: 1320, y: 450, width: 440, height: 200 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.8' }, content: '등기부등본 반드시 확인\n공인중개사 자격 검증\n계약서 특약사항 꼼꼼히\n보증금 반환 조건 확인\n전입신고 즉시 완료', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 4 — Ch.03 예산 짜기
      {
        id: 'la-ch03', label: 'Ch.03 예산 짜기',
        data: {
          id: 'tpl-la-4', order: 3, duration: 6000,
          background: { type: 'solid', value: '#f0f6ff' },
          elements: [
            // Yellow pill
            { id: 'la4-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la4-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 03', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la4-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '48px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '한 달 생활비 계획', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Budget rows container
            { id: 'la4-bg', type: 'shape', position: { x: 460, y: 290, width: 1000, height: 470 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            // Row 1
            { id: 'la4-r1', type: 'text', position: { x: 520, y: 320, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#2d2d2d', textAlign: 'left' }, content: '🏠  월세', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la4-r1v', type: 'text', position: { x: 520, y: 320, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'right' }, content: '50만원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la4-d1', type: 'shape', position: { x: 520, y: 375, width: 880, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#999999' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 300, easing: 'ease-out' } } },
            // Row 2
            { id: 'la4-r2', type: 'text', position: { x: 520, y: 390, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#2d2d2d', textAlign: 'left' }, content: '🍚  식비', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la4-r2v', type: 'text', position: { x: 520, y: 390, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'right' }, content: '30만원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la4-d2', type: 'shape', position: { x: 520, y: 445, width: 880, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#999999' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 350, easing: 'ease-out' } } },
            // Row 3
            { id: 'la4-r3', type: 'text', position: { x: 520, y: 460, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#2d2d2d', textAlign: 'left' }, content: '🚌  교통', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la4-r3v', type: 'text', position: { x: 520, y: 460, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'right' }, content: '10만원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la4-d3', type: 'shape', position: { x: 520, y: 515, width: 880, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#999999' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 400, easing: 'ease-out' } } },
            // Row 4
            { id: 'la4-r4', type: 'text', position: { x: 520, y: 530, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#2d2d2d', textAlign: 'left' }, content: '📱  통신', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la4-r4v', type: 'text', position: { x: 520, y: 530, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'right' }, content: '5만원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la4-d4', type: 'shape', position: { x: 520, y: 585, width: 880, height: 1 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#999999' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 450, easing: 'ease-out' } } },
            // Row 5
            { id: 'la4-r5', type: 'text', position: { x: 520, y: 600, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#2d2d2d', textAlign: 'left' }, content: '💡  공과금', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la4-r5v', type: 'text', position: { x: 520, y: 600, width: 880, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'right' }, content: '8만원', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Total bar
            { id: 'la4-total', type: 'shape', position: { x: 460, y: 790, width: 1000, height: 60 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            { id: 'la4-total-t', type: 'text', position: { x: 460, y: 795, width: 1000, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '합계  약 103만원', animation: { enter: { type: 'fadeIn', duration: 400, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 5 — Ch.04 필수템
      {
        id: 'la-ch04', label: 'Ch.04 필수템',
        data: {
          id: 'tpl-la-5', order: 4, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            // Yellow pill
            { id: 'la5-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la5-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 04', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la5-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '자취 필수 아이템 TOP 6', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Row 1
            { id: 'la5-i1', type: 'shape', position: { x: 180, y: 300, width: 480, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'la5-i1e', type: 'text', position: { x: 220, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🍳', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la5-i1t', type: 'text', position: { x: 300, y: 330, width: 320, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '멀티쿠커', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la5-i1d', type: 'text', position: { x: 300, y: 380, width: 320, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '밥·찌개·볶음 하나로 해결', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Item 2
            { id: 'la5-i2', type: 'shape', position: { x: 720, y: 300, width: 480, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'la5-i2e', type: 'text', position: { x: 760, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🧹', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la5-i2t', type: 'text', position: { x: 840, y: 330, width: 320, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '무선청소기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la5-i2d', type: 'text', position: { x: 840, y: 380, width: 320, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '가볍게 매일 청소 가능', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Item 3
            { id: 'la5-i3', type: 'shape', position: { x: 1260, y: 300, width: 480, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'la5-i3e', type: 'text', position: { x: 1300, y: 330, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🧊', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la5-i3t', type: 'text', position: { x: 1380, y: 330, width: 320, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '미니냉장고', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la5-i3d', type: 'text', position: { x: 1380, y: 380, width: 320, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '원룸에 딱 맞는 사이즈', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Row 2
            { id: 'la5-i4', type: 'shape', position: { x: 180, y: 570, width: 480, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'la5-i4e', type: 'text', position: { x: 220, y: 600, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '💨', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la5-i4t', type: 'text', position: { x: 300, y: 600, width: 320, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '공기청정기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la5-i4d', type: 'text', position: { x: 300, y: 650, width: 320, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '미세먼지·요리 냄새 제거', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            // Item 5
            { id: 'la5-i5', type: 'shape', position: { x: 720, y: 570, width: 480, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            { id: 'la5-i5e', type: 'text', position: { x: 760, y: 600, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🔑', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la5-i5t', type: 'text', position: { x: 840, y: 600, width: 320, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '도어락', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'la5-i5d', type: 'text', position: { x: 840, y: 650, width: 320, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '보안 강화 필수 아이템', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            // Item 6
            { id: 'la5-i6', type: 'shape', position: { x: 1260, y: 570, width: 480, height: 220 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '16px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
            { id: 'la5-i6e', type: 'text', position: { x: 1300, y: 600, width: 60, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '40px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🛏️', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'la5-i6t', type: 'text', position: { x: 1380, y: 600, width: 320, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '메모리폼 매트리스', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            { id: 'la5-i6d', type: 'text', position: { x: 1380, y: 650, width: 320, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '15px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '수면 질이 생활 질을 결정', animation: { enter: { type: 'fadeIn', duration: 300, delay: 650, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 6 — Ch.05 요리
      {
        id: 'la-ch05', label: 'Ch.05 요리',
        data: {
          id: 'tpl-la-6', order: 5, duration: 6000,
          background: { type: 'solid', value: '#f0f6ff' },
          elements: [
            // Yellow pill
            { id: 'la6-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la6-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 05', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la6-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '초보 자취생 만능 레시피', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Recipe Card 1
            { id: 'la6-c1', type: 'shape', position: { x: 120, y: 300, width: 520, height: 480 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'la6-c1t', type: 'text', position: { x: 160, y: 320, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '🍳 계란볶음밥', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la6-s1-1c', type: 'shape', position: { x: 200, y: 400, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la6-s1-1n', type: 'text', position: { x: 200, y: 403, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la6-s1-1t', type: 'text', position: { x: 250, y: 400, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '찬밥에 계란 2개 풀어 섞기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la6-s1-2c', type: 'shape', position: { x: 200, y: 460, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la6-s1-2n', type: 'text', position: { x: 200, y: 463, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la6-s1-2t', type: 'text', position: { x: 250, y: 460, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '기름 두르고 센불에 볶기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s1-3c', type: 'shape', position: { x: 200, y: 520, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s1-3n', type: 'text', position: { x: 200, y: 523, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s1-3t', type: 'text', position: { x: 250, y: 520, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '간장·참기름으로 간 맞추기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Recipe Card 2
            { id: 'la6-c2', type: 'shape', position: { x: 700, y: 300, width: 520, height: 480 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'la6-c2t', type: 'text', position: { x: 740, y: 320, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '🍝 원팬 파스타', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la6-s2-1c', type: 'shape', position: { x: 780, y: 400, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la6-s2-1n', type: 'text', position: { x: 780, y: 403, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la6-s2-1t', type: 'text', position: { x: 830, y: 400, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '면+물+재료 한번에 넣기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s2-2c', type: 'shape', position: { x: 780, y: 460, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s2-2n', type: 'text', position: { x: 780, y: 463, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s2-2t', type: 'text', position: { x: 830, y: 460, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '뚜껑 덮고 10분 끓이기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la6-s2-3c', type: 'shape', position: { x: 780, y: 520, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la6-s2-3n', type: 'text', position: { x: 780, y: 523, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la6-s2-3t', type: 'text', position: { x: 830, y: 520, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '소스 넣고 잘 섞어 완성', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            // Recipe Card 3
            { id: 'la6-c3', type: 'shape', position: { x: 1280, y: 300, width: 520, height: 480 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'la6-c3t', type: 'text', position: { x: 1320, y: 320, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '🥘 찌개 공식', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la6-s3-1c', type: 'shape', position: { x: 1360, y: 400, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s3-1n', type: 'text', position: { x: 1360, y: 403, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la6-s3-1t', type: 'text', position: { x: 1410, y: 400, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '물 끓이며 된장/고추장 풀기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la6-s3-2c', type: 'shape', position: { x: 1360, y: 460, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la6-s3-2n', type: 'text', position: { x: 1360, y: 463, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la6-s3-2t', type: 'text', position: { x: 1410, y: 460, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '두부·호박·버섯 넣기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'la6-s3-3c', type: 'shape', position: { x: 1360, y: 520, width: 36, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'la6-s3-3n', type: 'text', position: { x: 1360, y: 523, width: 36, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '3', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'la6-s3-3t', type: 'text', position: { x: 1410, y: 520, width: 380, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left' }, content: '5분 더 끓이면 완성!', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 7 — Ch.06 청소
      {
        id: 'la-ch06', label: 'Ch.06 청소',
        data: {
          id: 'tpl-la-7', order: 6, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            // Yellow pill
            { id: 'la7-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la7-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 06', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la7-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '청소 루틴 만들기', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Weekly schedule container
            { id: 'la7-bg', type: 'shape', position: { x: 160, y: 310, width: 1600, height: 400 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '24px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            // Mon
            { id: 'la7-d1', type: 'shape', position: { x: 220, y: 370, width: 180, height: 260 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la7-d1dot', type: 'shape', position: { x: 290, y: 390, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la7-d1t', type: 'text', position: { x: 220, y: 420, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '월', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la7-d1task', type: 'text', position: { x: 220, y: 470, width: 180, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#666666', textAlign: 'center' }, content: '빨래', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Wed
            { id: 'la7-d2', type: 'shape', position: { x: 440, y: 370, width: 180, height: 260 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la7-d2dot', type: 'shape', position: { x: 510, y: 390, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#60a5fa', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la7-d2t', type: 'text', position: { x: 440, y: 420, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '수', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la7-d2task', type: 'text', position: { x: 440, y: 470, width: 180, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#666666', textAlign: 'center' }, content: '화장실', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Fri
            { id: 'la7-d3', type: 'shape', position: { x: 660, y: 370, width: 180, height: 260 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la7-d3dot', type: 'shape', position: { x: 730, y: 390, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#4ade80', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la7-d3t', type: 'text', position: { x: 660, y: 420, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '금', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la7-d3task', type: 'text', position: { x: 660, y: 470, width: 180, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#666666', textAlign: 'center' }, content: '바닥', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Sun
            { id: 'la7-d4', type: 'shape', position: { x: 880, y: 370, width: 180, height: 260 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffffff', borderRadius: '16px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la7-d4dot', type: 'shape', position: { x: 950, y: 390, width: 20, height: 20 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#f97316', borderRadius: '50%' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la7-d4t', type: 'text', position: { x: 880, y: 420, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '20px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '일', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la7-d4task', type: 'text', position: { x: 880, y: 470, width: 180, height: 80 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#666666', textAlign: 'center' }, content: '전체 정리', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            // Tip text
            { id: 'la7-tip', type: 'text', position: { x: 1200, y: 440, width: 500, height: 80 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '18px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.6' }, content: '매일 10분씩만 투자하면\n깨끗한 집을 유지할 수 있어요 ✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 8 — Ch.07 안전
      {
        id: 'la-ch07', label: 'Ch.07 안전',
        data: {
          id: 'tpl-la-8', order: 7, duration: 6000,
          background: { type: 'solid', value: '#f0f6ff' },
          elements: [
            // Yellow pill
            { id: 'la8-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la8-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 07', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la8-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '혼자 사는 안전 수칙', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Card 1 (top-left)
            { id: 'la8-c1', type: 'shape', position: { x: 310, y: 310, width: 580, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'la8-c1top', type: 'shape', position: { x: 310, y: 310, width: 580, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffd43b', borderRadius: '20px 20px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la8-c1e', type: 'text', position: { x: 350, y: 340, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '32px', fontWeight: '400', color: '#2d2d2d', textAlign: 'left' }, content: '🔒', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la8-c1t', type: 'text', position: { x: 350, y: 400, width: 500, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '현관 이중잠금', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la8-c1d', type: 'text', position: { x: 350, y: 450, width: 500, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '도어락 + 안전고리 반드시 사용', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2 (top-right)
            { id: 'la8-c2', type: 'shape', position: { x: 1030, y: 310, width: 580, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'la8-c2top', type: 'shape', position: { x: 1030, y: 310, width: 580, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffd43b', borderRadius: '20px 20px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la8-c2e', type: 'text', position: { x: 1070, y: 340, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '32px', fontWeight: '400', color: '#2d2d2d', textAlign: 'left' }, content: '📞', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la8-c2t', type: 'text', position: { x: 1070, y: 400, width: 500, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '비상연락처 저장', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la8-c2d', type: 'text', position: { x: 1070, y: 450, width: 500, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '112·119·관리실 단축번호 등록', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Card 3 (bottom-left)
            { id: 'la8-c3', type: 'shape', position: { x: 310, y: 640, width: 580, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'la8-c3top', type: 'shape', position: { x: 310, y: 640, width: 580, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffd43b', borderRadius: '20px 20px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la8-c3e', type: 'text', position: { x: 350, y: 670, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '32px', fontWeight: '400', color: '#2d2d2d', textAlign: 'left' }, content: '🚪', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la8-c3t', type: 'text', position: { x: 350, y: 730, width: 500, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '택배 직접수령 주의', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la8-c3d', type: 'text', position: { x: 350, y: 780, width: 500, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '공동현관·무인택배함 적극 활용', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Card 4 (bottom-right)
            { id: 'la8-c4', type: 'shape', position: { x: 1030, y: 640, width: 580, height: 280 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#ffffff', borderRadius: '20px', borderColor: '#e0e0e0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'la8-c4top', type: 'shape', position: { x: 1030, y: 640, width: 580, height: 6 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffd43b', borderRadius: '20px 20px 0 0' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la8-c4e', type: 'text', position: { x: 1070, y: 670, width: 500, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '32px', fontWeight: '400', color: '#2d2d2d', textAlign: 'left' }, content: '💡', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la8-c4t', type: 'text', position: { x: 1070, y: 730, width: 500, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'left' }, content: '타이머 조명 활용', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'la8-c4d', type: 'text', position: { x: 1070, y: 780, width: 500, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'left', lineHeight: '1.5' }, content: '외출 시 조명 자동 켜짐 설정', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 9 — Ch.08 마음 관리
      {
        id: 'la-ch08', label: 'Ch.08 마음 관리',
        data: {
          id: 'tpl-la-9', order: 8, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            // Yellow pill
            { id: 'la9-pill', type: 'shape', position: { x: 810, y: 80, width: 300, height: 44 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#ffd43b', borderRadius: '9999px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 100, easing: 'ease-out' } } },
            { id: 'la9-pill-t', type: 'text', position: { x: 810, y: 86, width: 300, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center', letterSpacing: '2px' }, content: 'CHAPTER 08', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            // Title
            { id: 'la9-title', type: 'text', position: { x: 310, y: 150, width: 1300, height: 70 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '외로울 때 대처법', animation: { enter: { type: 'slideUp', duration: 500, delay: 200, easing: 'ease-out' } } },
            // Card 1
            { id: 'la9-c1', type: 'shape', position: { x: 120, y: 300, width: 520, height: 360 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'la9-c1e', type: 'text', position: { x: 160, y: 330, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '☕', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la9-c1t', type: 'text', position: { x: 160, y: 390, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '나만의 루틴 만들기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la9-c1d', type: 'text', position: { x: 160, y: 450, width: 440, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.7' }, content: '아침 커피, 저녁 산책 등\n작은 루틴이 하루를\n안정감 있게 만들어줍니다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            // Card 2
            { id: 'la9-c2', type: 'shape', position: { x: 700, y: 300, width: 520, height: 360 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'la9-c2e', type: 'text', position: { x: 740, y: 330, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '📞', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'la9-c2t', type: 'text', position: { x: 740, y: 390, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '정기적 연락하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la9-c2d', type: 'text', position: { x: 740, y: 450, width: 440, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.7' }, content: '가족이나 친구에게\n일주일에 한 번은 전화하세요\n연결감이 큰 힘이 됩니다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            // Card 3
            { id: 'la9-c3', type: 'shape', position: { x: 1280, y: 300, width: 520, height: 360 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f5f5f5', borderRadius: '20px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 350, easing: 'ease-out' } } },
            { id: 'la9-c3e', type: 'text', position: { x: 1320, y: 330, width: 440, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '36px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '🎯', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la9-c3t', type: 'text', position: { x: 1320, y: 390, width: 440, height: 40 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#2d2d2d', textAlign: 'center' }, content: '작은 목표 세우기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'la9-c3d', type: 'text', position: { x: 1320, y: 450, width: 440, height: 100 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#666666', textAlign: 'center', lineHeight: '1.7' }, content: '새 요리 도전, 운동 루틴 등\n성취감이 외로움을\n잊게 해줍니다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            // Motivational quote
            { id: 'la9-quote', type: 'text', position: { x: 460, y: 750, width: 1000, height: 50 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '24px', fontWeight: '600', color: '#2d2d2d', textAlign: 'center' }, content: '혼자여도 괜찮아, 잘하고 있어 ✦', animation: { enter: { type: 'fadeIn', duration: 500, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // Slide 10 — 마무리
      {
        id: 'la-ending', label: '마무리',
        data: {
          id: 'tpl-la-10', order: 9, duration: 6000,
          background: { type: 'solid', value: '#ffd43b' },
          elements: [
            // Sparkles
            { id: 'la10-sp1', type: 'text', position: { x: 250, y: 200, width: 30, height: 30 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'la10-sp2', type: 'text', position: { x: 1600, y: 300, width: 30, height: 30 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { fontSize: '16px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '✧', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'la10-sp3', type: 'text', position: { x: 400, y: 700, width: 30, height: 30 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { fontSize: '18px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'la10-sp4', type: 'text', position: { x: 1500, y: 650, width: 30, height: 30 }, rotation: 0, opacity: 0.25, zIndex: 5, style: { fontSize: '14px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '✦', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            // Main title
            { id: 'la10-title', type: 'text', position: { x: 310, y: 320, width: 1300, height: 180 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '64px', fontWeight: '800', color: '#2d2d2d', textAlign: 'center', lineHeight: '1.4' }, content: '자취 생활,\n두렵지 않아!', animation: { enter: { type: 'slideUp', duration: 600, delay: 0, easing: 'ease-out' } } },
            // Subtitle
            { id: 'la10-sub', type: 'text', position: { x: 410, y: 540, width: 1100, height: 100 }, rotation: 0, opacity: 0.7, zIndex: 10, style: { fontSize: '28px', fontWeight: '500', color: '#555555', textAlign: 'center', lineHeight: '1.5' }, content: '이제 나만의 공간에서\n나다운 삶을 시작하세요 ✦', animation: { enter: { type: 'fadeIn', duration: 500, delay: 300, easing: 'ease-out' } } },
            // Footer
            { id: 'la10-footer', type: 'text', position: { x: 560, y: 900, width: 800, height: 30 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '16px', fontWeight: '400', color: '#2d2d2d', textAlign: 'center' }, content: '나도 혼자 산다! — 자취 가이드 2024', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },



  // ── 정책 보고서 (문서형) — 12장 1:1 리디자인 ──
  {
    id: 'policy-report',
    title: 'TOPIK II 읽기 강의',
    category: '교육',
    thumbnail: { bg: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)' },
    slides: [

      // ═══ 1/12: 표지 — TOPIK II 읽기 - 4차시 ═══
      {
        id: 'pr-s01', label: '표지',
        data: {
          id: 'tpl-pr-01', order: 0, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr1-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr1-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr1-type-bg', type: 'shape', position: { x: 120, y: 300, width: 180, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 100, easing: 'ease-out' } } },
            { id: 'pr1-type', type: 'text', position: { x: 120, y: 305, width: 180, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '18px', fontWeight: '700', color: '#ffffff', textAlign: 'center', letterSpacing: '3px' }, content: 'TOPIK II', animation: { enter: { type: 'fadeIn', duration: 300, delay: 150, easing: 'ease-out' } } },
            { id: 'pr1-title', type: 'text', position: { x: 120, y: 370, width: 1400, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '72px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 – 4차시', animation: { enter: { type: 'slideUp', duration: 600, delay: 200, easing: 'ease-out' } } },
            { id: 'pr1-line', type: 'shape', position: { x: 120, y: 520, width: 120, height: 4 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#3b82f6', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'pr1-sub', type: 'text', position: { x: 120, y: 560, width: 1200, height: 50 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '28px', fontWeight: '400', color: '#475569', textAlign: 'left' }, content: '필자의 태도 고르기 · 읽기 유형 10', animation: { enter: { type: 'fadeIn', duration: 500, delay: 500, easing: 'ease-out' } } },
            { id: 'pr1-meta-line', type: 'shape', position: { x: 120, y: 880, width: 1680, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 5, style: { backgroundColor: '#1e293b' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            { id: 'pr1-author', type: 'text', position: { x: 1300, y: 900, width: 500, height: 30 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '18px', fontWeight: '500', color: '#475569', textAlign: 'right' }, content: '경희사이버대학교 한국어학부', animation: { enter: { type: 'fadeIn', duration: 300, delay: 700, easing: 'ease-out' } } },
            { id: 'pr1-deco', type: 'text', position: { x: 1820, y: 200, width: 40, height: 600 }, rotation: 0, opacity: 0.035, zIndex: 1, style: { fontSize: '28px', fontWeight: '800', color: '#1e3a5f', textAlign: 'center', lineHeight: '2.5' }, content: 'T\nO\nP\nI\nK\n\nI\nI', animation: { enter: { type: 'fadeIn', duration: 800, delay: 0, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 2/12: 학습 목표 + 학습 내용 ═══
      {
        id: 'pr-s02', label: '학습 목표',
        data: {
          id: 'tpl-pr-02', order: 1, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr2-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr2-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr2-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            // 1. 학습 목표
            { id: 'pr2-n1-bg', type: 'shape', position: { x: 120, y: 80, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr2-n1', type: 'text', position: { x: 120, y: 85, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 80, easing: 'ease-out' } } },
            { id: 'pr2-h1', type: 'text', position: { x: 200, y: 80, width: 600, height: 56 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '학습 목표', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },

            { id: 'pr2-obj-bg', type: 'shape', position: { x: 120, y: 160, width: 1680, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'pr2-obj1', type: 'text', position: { x: 170, y: 190, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '1) 필자의 태도에 대한 다양한 어휘를 이해할 수 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'pr2-obj2', type: 'text', position: { x: 170, y: 260, width: 1580, height: 60 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '2) 읽기 유형 10(필자의 태도 고르기)의 유형을 살펴보고 이해할 수 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },

            // 구분선
            { id: 'pr2-div', type: 'shape', position: { x: 120, y: 420, width: 1680, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 5, style: { backgroundColor: '#94a3b8' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 300, easing: 'ease-out' } } },

            // 2. 학습 내용
            { id: 'pr2-n2-bg', type: 'shape', position: { x: 120, y: 470, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr2-n2', type: 'text', position: { x: 120, y: 475, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },
            { id: 'pr2-h2', type: 'text', position: { x: 200, y: 470, width: 600, height: 56 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '학습 내용', animation: { enter: { type: 'slideUp', duration: 500, delay: 400, easing: 'ease-out' } } },

            { id: 'pr2-cnt-bg', type: 'shape', position: { x: 120, y: 550, width: 1680, height: 200 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 450, easing: 'ease-out' } } },
            { id: 'pr2-cnt1', type: 'text', position: { x: 170, y: 580, width: 1580, height: 60 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '1) 읽기 유형 10(필자의 태도 고르기) 유형 확인 및 필자의 태도 관련 어휘 학습', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'pr2-cnt2', type: 'text', position: { x: 170, y: 660, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '2) 읽기 유형 10(필자의 태도 고르기) 문제 풀기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 3/12: 읽기 유형 10의 문제 파악 ═══
      {
        id: 'pr-s03', label: '문제 파악',
        data: {
          id: 'tpl-pr-03', order: 2, duration: 8000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr3-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr3-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr3-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '03', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr3-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr3-title', type: 'text', position: { x: 120, y: 50, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 유형 10의 문제 파악', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },

            // 어떤 문제 뱃지
            { id: 'pr3-badge-bg', type: 'shape', position: { x: 140, y: 140, width: 140, height: 38 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 150, easing: 'ease-out' } } },
            { id: 'pr3-badge', type: 'text', position: { x: 140, y: 145, width: 140, height: 28 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '17px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '어떤 문제', animation: { enter: { type: 'fadeIn', duration: 300, delay: 180, easing: 'ease-out' } } },

            // 카드
            { id: 'pr3-card', type: 'shape', position: { x: 120, y: 200, width: 1680, height: 760 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },

            { id: 'pr3-d1', type: 'text', position: { x: 170, y: 230, width: 1580, height: 40 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '● 유형: 논설문을 읽고 필자의 태도를 파악하는 유형', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },

            { id: 'pr3-d2', type: 'text', position: { x: 170, y: 300, width: 300, height: 40 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '● 경향 분석', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },

            { id: 'pr3-grade-bg', type: 'shape', position: { x: 210, y: 350, width: 80, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#dbeafe', borderRadius: '6px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 340, easing: 'ease-out' } } },
            { id: 'pr3-grade', type: 'text', position: { x: 210, y: 354, width: 80, height: 32 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '22px', fontWeight: '700', color: '#3b82f6', textAlign: 'center' }, content: '6급', animation: { enter: { type: 'fadeIn', duration: 200, delay: 360, easing: 'ease-out' } } },
            { id: 'pr3-grade-d', type: 'text', position: { x: 310, y: 354, width: 600, height: 36 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '46~47번(논설문)에서 1문제', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },

            { id: 'pr3-d3', type: 'text', position: { x: 170, y: 430, width: 1580, height: 100 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.7' }, content: '● \'유형 4의 2. 글과 일치하는 내용 고르기\'와 함께 묶음형 문제로만 출제됩니다. 한 개의 지문을 읽고 두 문제를 푸는 연습을 해 두는 것이 좋습니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 420, easing: 'ease-out' } } },

            { id: 'pr3-d4', type: 'text', position: { x: 170, y: 570, width: 1580, height: 100 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.7' }, content: '● 필자가 글을 쓴 목적을 파악하면 태도도 알 수 있습니다. 예를 들어 \'문제점을 알리기 위해\' 쓴 글이라면 \'지적하고 있다, 비판하고 있다\' 등이 태도로 나타납니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 4/12: 관련 어휘 학습 ═══
      {
        id: 'pr-s04', label: '어휘 학습',
        data: {
          id: 'tpl-pr-04', order: 3, duration: 8000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr4-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr4-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr4-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '04', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr4-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr4-title', type: 'text', position: { x: 120, y: 50, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 유형 10 – 관련 어휘 학습', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },

            // 3열 카드
            { id: 'pr4-c1', type: 'shape', position: { x: 120, y: 140, width: 540, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#fef2f2', borderRadius: '12px', borderColor: '#fecaca', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'pr4-c1-label', type: 'text', position: { x: 160, y: 165, width: 200, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: 'ㄱ — ㅂ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'pr4-c1-line', type: 'shape', position: { x: 160, y: 200, width: 50, height: 3 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { backgroundColor: '#dc2626', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 270, easing: 'ease-out' } } },
            { id: 'pr4-c1-w', type: 'text', position: { x: 160, y: 220, width: 460, height: 330 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '500', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '가정하다 · 감탄하다\n강조하다 · 경계하다\n공감하다 · 기대하다\n동정하다 · 비판하다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },

            { id: 'pr4-c2', type: 'shape', position: { x: 700, y: 140, width: 540, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#eff6ff', borderRadius: '12px', borderColor: '#bfdbfe', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'pr4-c2-label', type: 'text', position: { x: 740, y: 165, width: 200, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#2563eb', textAlign: 'left' }, content: 'ㅅ — ㅇ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr4-c2-line', type: 'shape', position: { x: 740, y: 200, width: 50, height: 3 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { backgroundColor: '#2563eb', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 370, easing: 'ease-out' } } },
            { id: 'pr4-c2-w', type: 'text', position: { x: 740, y: 220, width: 460, height: 330 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '500', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '설득하다 · 설명하다\n수긍하다 · 역설하다\n염려하다 · 옹호하다\n요구하다 · 우려하다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },

            { id: 'pr4-c3', type: 'shape', position: { x: 1280, y: 140, width: 540, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f0fdf4', borderRadius: '12px', borderColor: '#bbf7d0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'pr4-c3-label', type: 'text', position: { x: 1320, y: 165, width: 200, height: 28 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '18px', fontWeight: '700', color: '#16a34a', textAlign: 'left' }, content: 'ㅇ — ㅎ', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr4-c3-line', type: 'shape', position: { x: 1320, y: 200, width: 50, height: 3 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { backgroundColor: '#16a34a', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 470, easing: 'ease-out' } } },
            { id: 'pr4-c3-w', type: 'text', position: { x: 1320, y: 220, width: 460, height: 330 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '500', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '예상하다 · 예측하다\n인정하다 · 주장하다\n제안하다 · 제기하다\n지적하다 · 평가하다\n회의적이다', animation: { enter: { type: 'fadeIn', duration: 400, delay: 500, easing: 'ease-out' } } },

            // 하단 기타
            { id: 'pr4-etc-bg', type: 'shape', position: { x: 120, y: 620, width: 1700, height: 120 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 520, easing: 'ease-out' } } },
            { id: 'pr4-etc-l', type: 'text', position: { x: 160, y: 635, width: 100, height: 25 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '14px', fontWeight: '600', color: '#64748b', textAlign: 'left', letterSpacing: '1px' }, content: '기타', animation: { enter: { type: 'fadeIn', duration: 200, delay: 540, easing: 'ease-out' } } },
            { id: 'pr4-etc', type: 'text', position: { x: 160, y: 670, width: 1620, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#475569', textAlign: 'left' }, content: '감탄하다 · 예측하다 · 인정하다 · 제기하다 · 기인하다 · 역설하다', animation: { enter: { type: 'fadeIn', duration: 300, delay: 560, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 5/12: 문제 확인 (지문+선택지) ═══
      {
        id: 'pr-s05', label: '문제 확인',
        data: {
          id: 'tpl-pr-05', order: 4, duration: 10000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr5-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr5-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr5-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '05', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr5-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr5-title', type: 'text', position: { x: 120, y: 50, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 유형 10의 문제 확인', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'pr5-inst', type: 'text', position: { x: 120, y: 115, width: 1600, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: '500', color: '#475569', textAlign: 'left' }, content: '윗글에 나타난 필자의 태도로 가장 알맞은 것을 고르십시오.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 150, easing: 'ease-out' } } },

            // 지문
            { id: 'pr5-pass-bg', type: 'shape', position: { x: 120, y: 160, width: 1680, height: 520 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'pr5-pass-bar', type: 'shape', position: { x: 120, y: 160, width: 5, height: 520 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#3b82f6', borderRadius: '3px 0 0 3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 220, easing: 'ease-out' } } },
            { id: 'pr5-pass', type: 'text', position: { x: 170, y: 180, width: 1580, height: 480 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '근로 빈곤층이란 일을 해도 빈곤한 상태를 벗어나지 못하는 가난한 사회계층을 지칭한다. 이들은 취업을 해서 일을 하고 있음에도 불구하고 저축할 여력이 없는 사람들이다. 저축을 할 수 없기 때문에 일시적 질병 또는 실직이 절대빈곤으로 직결된다는 문제점을 갖고 있다. 과거에는 빈곤을 노동하지 않거나 과다한 지출을 하는 등 개인의 탓에 기인한 문제라고 여겨지만, 오늘날의 빈곤은 글로벌 금융위기와 같이 개인의 범위를 넘어서서 발생하는 것으로 요인이 확대되었다. 경제 위기는 곧바로 대량 실업 사태로 이어져 근로 빈곤층을 형성하는 주된 원인이 된다. 고용불안에 따른 사회 구조적 악순환의 고리가 결국에는 최저생계비 이하로 몰락하는 이들을 대량으로 양산하고 마는 것이다. 이제는 국가가 나서서 개인의 능력을 최대한 개발하고 역량을 발휘할 수 있도록 지원하는 제도적 장치를 마련해 주어야만 한다. 국세청의 근로장려금 제도나 보건복지가족부가 시행하고 있는 \'재산 담보부 생계비 융자지원\' 사업 등이 좋은 예가 될 것이다.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 250, easing: 'ease-out' } } },

            // 선택지
            { id: 'pr5-c1', type: 'text', position: { x: 170, y: 720, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '1) 최저생계비를 주는 고용주를 비판하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'pr5-c2', type: 'text', position: { x: 170, y: 780, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '2) 개인의 빈곤을 국가가 지원해야 한다고 강조하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr5-c3', type: 'text', position: { x: 170, y: 840, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '3) 근로 빈곤층이 곧 사라질 것을 긍정적으로 예상하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'pr5-c4', type: 'text', position: { x: 170, y: 900, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '4) 근로 빈곤층의 최저생계비가 더 떨어질 것을 우려하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 6/12: 어휘 및 표현 확인 ═══
      {
        id: 'pr-s06', label: '어휘 표현',
        data: {
          id: 'tpl-pr-06', order: 5, duration: 8000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr6-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr6-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr6-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '06', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr6-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr6-title', type: 'text', position: { x: 120, y: 50, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 유형 10의 문제 풀이', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'pr6-sub', type: 'text', position: { x: 120, y: 115, width: 400, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: '600', color: '#475569', textAlign: 'left' }, content: '어휘 및 표현 확인', animation: { enter: { type: 'fadeIn', duration: 300, delay: 130, easing: 'ease-out' } } },

            { id: 'pr6-card', type: 'shape', position: { x: 120, y: 160, width: 1680, height: 800 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },

            { id: 'pr6-v1k', type: 'text', position: { x: 170, y: 190, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '빈곤(하다):', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'pr6-v1d', type: 'text', position: { x: 390, y: 190, width: 1360, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '가난하여 생활하기가 어렵다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },

            { id: 'pr6-v2k', type: 'text', position: { x: 170, y: 270, width: 240, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '에도 불구하고:', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'pr6-v2d', type: 'text', position: { x: 430, y: 270, width: 1320, height: 60 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '앞말의 내용에서 기대할 수 있는 것과 다르거나 반대되는 사실이 뒤에 옴을 나타내는 표현.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },

            { id: 'pr6-v3k', type: 'text', position: { x: 170, y: 370, width: 100, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '여력:', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'pr6-v3d', type: 'text', position: { x: 280, y: 370, width: 1470, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '어떤 일을 하고 난 뒤 또 다른 일을 할 수 있을 만큼 남아 있는 힘이나 능력.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },

            { id: 'pr6-v4k', type: 'text', position: { x: 170, y: 450, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '과다(하다):', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr6-v4d', type: 'text', position: { x: 390, y: 450, width: 1360, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '지나치게 많다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },

            { id: 'pr6-v5k', type: 'text', position: { x: 170, y: 530, width: 200, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '기인(하다):', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'pr6-v5d', type: 'text', position: { x: 390, y: 530, width: 1360, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '어떤 사건이나 현상 등이 어떤 일에 원인을 두다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },

            { id: 'pr6-v6k', type: 'text', position: { x: 170, y: 610, width: 170, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '-고 말다:', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr6-v6d', type: 'text', position: { x: 360, y: 610, width: 1390, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '앞에 오는 말이 가리키는 행동이 안타깝게도 끝내 일어났음을 나타내는 표현.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },

            { id: 'pr6-v7k', type: 'text', position: { x: 170, y: 690, width: 170, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '24px', fontWeight: '700', color: '#dc2626', textAlign: 'left' }, content: '시행하다:', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'pr6-v7d', type: 'text', position: { x: 360, y: 690, width: 1390, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '법률이나 명령 등을 일반 대중에게 알린 뒤에 실제로 그 효력을 나타내다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 7/12: 빈칸 연습 ═══
      {
        id: 'pr-s07', label: '빈칸 연습',
        data: {
          id: 'tpl-pr-07', order: 6, duration: 8000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr7-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr7-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr7-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '07', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr7-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr7-title', type: 'text', position: { x: 120, y: 50, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 유형 10의 문제 풀이', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'pr7-sub', type: 'text', position: { x: 120, y: 115, width: 400, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: '600', color: '#475569', textAlign: 'left' }, content: '어휘 및 표현 확인', animation: { enter: { type: 'fadeIn', duration: 300, delay: 130, easing: 'ease-out' } } },

            { id: 'pr7-card', type: 'shape', position: { x: 120, y: 160, width: 1680, height: 800 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },

            { id: 'pr7-q1', type: 'text', position: { x: 170, y: 200, width: 1580, height: 45 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '1. 민준은 지갑을 손에 들고 다니다가 ____________. (잃어버리다)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'pr7-q2', type: 'text', position: { x: 170, y: 290, width: 1580, height: 45 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '2. 국회는 다음 달부터 새로운 법안을 _____________-기로 결정했다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'pr7-q3', type: 'text', position: { x: 170, y: 380, width: 1580, height: 45 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '3. _____________-(으)ㄴ/는 시험 스트레스로 잠을 못 잘 지경이었다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'pr7-q4', type: 'text', position: { x: 170, y: 470, width: 1580, height: 45 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '4. _____________ 공원에는 나들이 나온 가족들로 붐볐다. (추운 날씨)', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr7-q5', type: 'text', position: { x: 170, y: 560, width: 1580, height: 45 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '5. 오늘 하루 아무것도 안 먹었더니 움직일 _____________ 이/가 없다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'pr7-q6', type: 'text', position: { x: 170, y: 650, width: 1580, height: 45 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '6. _____________-아/어서 난방을 못 하고 추위에 떠는 노인들이 많대요.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr7-q7', type: 'text', position: { x: 170, y: 740, width: 1580, height: 60 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '7. 그 교통사고는 운전자의 음주 운전에 _____________-(으)ㄴ/는 것으로 결론이 났다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 8/12: 단계별 풀이 ═══
      {
        id: 'pr-s08', label: '단계별 풀이',
        data: {
          id: 'tpl-pr-08', order: 7, duration: 8000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr8-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr8-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr8-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '08', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr8-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr8-title', type: 'text', position: { x: 120, y: 50, width: 1200, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '읽기 유형 10의 문제 풀이', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'pr8-sub', type: 'text', position: { x: 120, y: 115, width: 300, height: 30 }, rotation: 0, opacity: 0.6, zIndex: 10, style: { fontSize: '22px', fontWeight: '600', color: '#475569', textAlign: 'left' }, content: '단계별 풀이', animation: { enter: { type: 'fadeIn', duration: 300, delay: 130, easing: 'ease-out' } } },

            // STEP 1
            { id: 'pr8-s1', type: 'shape', position: { x: 120, y: 160, width: 860, height: 800 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#eff6ff', borderRadius: '12px', borderColor: '#bfdbfe', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'pr8-s1-bg', type: 'shape', position: { x: 160, y: 190, width: 120, height: 38 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'pr8-s1-label', type: 'text', position: { x: 160, y: 194, width: 120, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'STEP 01', animation: { enter: { type: 'fadeIn', duration: 300, delay: 220, easing: 'ease-out' } } },
            { id: 'pr8-s1-t', type: 'text', position: { x: 300, y: 190, width: 600, height: 38 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#1e293b', textAlign: 'left' }, content: '글을 쓴 목적 파악하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'pr8-s1-d', type: 'text', position: { x: 170, y: 270, width: 780, height: 100 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.7' }, content: '글을 쓴 목적은 \'-어야 하다\' 같은 말 앞에 나타납니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            // 인용
            { id: 'pr8-s1-q-bg', type: 'shape', position: { x: 170, y: 400, width: 780, height: 150 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#ffffff', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr8-s1-q-bar', type: 'shape', position: { x: 170, y: 400, width: 4, height: 150 }, rotation: 0, opacity: 1, zIndex: 4, style: { backgroundColor: '#3b82f6', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 370, easing: 'ease-out' } } },
            { id: 'pr8-s1-q', type: 'text', position: { x: 200, y: 420, width: 720, height: 110 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#1d4ed8', textAlign: 'left', lineHeight: '1.6' }, content: '→ 필자는 개인의 빈곤을 \'국가\'가 해결해 주어야 한다고 주장하고 있습니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },

            // STEP 2
            { id: 'pr8-s2', type: 'shape', position: { x: 1020, y: 160, width: 800, height: 800 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#fef3c7', borderRadius: '12px', borderColor: '#fde68a', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'pr8-s2-bg', type: 'shape', position: { x: 1060, y: 190, width: 120, height: 38 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'pr8-s2-label', type: 'text', position: { x: 1060, y: 194, width: 120, height: 30 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: 'STEP 02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 320, easing: 'ease-out' } } },
            { id: 'pr8-s2-t', type: 'text', position: { x: 1200, y: 190, width: 500, height: 38 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '700', color: '#1e293b', textAlign: 'left' }, content: '선택지 확인하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },

            { id: 'pr8-s2-c1', type: 'text', position: { x: 1060, y: 270, width: 720, height: 50 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '① 비판 대상은 사회 구조입니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'pr8-s2-c2', type: 'text', position: { x: 1060, y: 340, width: 720, height: 120 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.6' }, content: '② \'개인의 빈곤\'은 개인의 범위를 넘어서서 발생하는 것으로 확대되었으며 \'국가가 나서서 제도적 장치를 마련해 주어야 한다\'고 주장합니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr8-s2-c3', type: 'text', position: { x: 1060, y: 490, width: 720, height: 50 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '③ 근로 빈곤층이 더 늘어날 것을 예고하고 있습니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'pr8-s2-c4', type: 'text', position: { x: 1060, y: 560, width: 720, height: 50 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '1.5' }, content: '④ 최저생계비에 대해서 언급하지 않았습니다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 9/12: 전체 풀이 ═══
      {
        id: 'pr-s09', label: '전체 풀이',
        data: {
          id: 'tpl-pr-09', order: 8, duration: 10000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr9-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr9-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr9-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '09', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr9-sec', type: 'text', position: { x: 120, y: 28, width: 80, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 10, style: { fontSize: '14px', fontWeight: '600', color: '#3b82f6', textAlign: 'left', letterSpacing: '2px' }, content: '02', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr9-title', type: 'text', position: { x: 120, y: 50, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '전체 풀이', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },

            // 좌측: 지문
            { id: 'pr9-pass-bg', type: 'shape', position: { x: 120, y: 130, width: 1040, height: 840 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '12px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 150, easing: 'ease-out' } } },
            { id: 'pr9-pass-bar', type: 'shape', position: { x: 120, y: 130, width: 5, height: 840 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#3b82f6', borderRadius: '3px 0 0 3px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 170, easing: 'ease-out' } } },
            { id: 'pr9-pass', type: 'text', position: { x: 160, y: 150, width: 970, height: 800 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '근로 빈곤층이란 일을 해도 빈곤한 상태를 벗어나지 못하는 가난한 사회계층을 지칭한다. 이들은 취업을 해서 일을 하고 있음에도 불구하고 저축할 여력이 없는 사람들이다. 저축을 할 수 없기 때문에 일시적 질병 또는 실직이 절대빈곤으로 직결된다는 문제점을 갖고 있다.\n\n과거에는 빈곤을 노동하지 않거나 과다한 지출을 하는 등 개인의 탓에 기인한 문제라고 여겨지만, 오늘날의 빈곤은 글로벌 금융위기와 같이 개인의 범위를 넘어서서 발생하는 것으로 요인이 확대되었다.\n\n이제는 국가가 나서서 개인의 능력을 최대한 개발하고 역량을 발휘할 수 있도록 지원하는 제도적 장치를 마련해 주어야만 한다. 국세청의 근로장려금 제도나 보건복지가족부가 시행하고 있는 사업 등이 좋은 예가 될 것이다.', animation: { enter: { type: 'fadeIn', duration: 500, delay: 200, easing: 'ease-out' } } },

            // 우측: 선택지 + 정답
            { id: 'pr9-c1', type: 'text', position: { x: 1210, y: 150, width: 680, height: 50 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '① 비판하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },
            { id: 'pr9-c2-bg', type: 'shape', position: { x: 1200, y: 220, width: 690, height: 60 }, rotation: 0, opacity: 1, zIndex: 3, style: { backgroundColor: '#dcfce7', borderRadius: '8px', borderColor: '#22c55e', borderWidth: 2 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr9-c2', type: 'text', position: { x: 1220, y: 230, width: 660, height: 40 }, rotation: 0, opacity: 1, zIndex: 5, style: { fontSize: '22px', fontWeight: '600', color: '#16a34a', textAlign: 'left' }, content: '② 강조하고 있다.  ✓', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },
            { id: 'pr9-c3', type: 'text', position: { x: 1210, y: 310, width: 680, height: 50 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '③ 긍정적으로 예상하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr9-c4', type: 'text', position: { x: 1210, y: 380, width: 680, height: 50 }, rotation: 0, opacity: 0.4, zIndex: 5, style: { fontSize: '22px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '④ 우려하고 있다.', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },

            // 해설 박스
            { id: 'pr9-explain-bg', type: 'shape', position: { x: 1200, y: 480, width: 690, height: 490 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#1e3a5f', borderRadius: '12px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 550, easing: 'ease-out' } } },
            { id: 'pr9-explain-l', type: 'text', position: { x: 1240, y: 500, width: 200, height: 25 }, rotation: 0, opacity: 0.5, zIndex: 5, style: { fontSize: '14px', fontWeight: '600', color: '#94a3b8', textAlign: 'left', letterSpacing: '2px' }, content: '해설', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
            { id: 'pr9-explain', type: 'text', position: { x: 1240, y: 540, width: 610, height: 400 }, rotation: 0, opacity: 0.85, zIndex: 5, style: { fontSize: '20px', fontWeight: '400', color: '#e2e8f0', textAlign: 'left', lineHeight: '1.8' }, content: '필자는 "-어야 하다"라는 당위 표현을 사용하여 국가의 제도적 지원을 강조하고 있습니다.\n\n① 비판 대상은 고용주가 아닌 사회 구조\n② 국가 지원을 강조 → 정답\n③ 빈곤층 증가를 예고(긍정 아님)\n④ 최저생계비 언급 없음', animation: { enter: { type: 'fadeIn', duration: 400, delay: 650, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 10/12: 4차시 정리 ═══
      {
        id: 'pr-s10', label: '정리',
        data: {
          id: 'tpl-pr-10', order: 9, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr10-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr10-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr10-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '10', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            { id: 'pr10-title', type: 'text', position: { x: 120, y: 50, width: 600, height: 60 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '4차시 정리', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },

            // 3열 카드
            { id: 'pr10-c1', type: 'shape', position: { x: 120, y: 140, width: 540, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#eff6ff', borderRadius: '12px', borderColor: '#bfdbfe', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'pr10-c1-l-bg', type: 'shape', position: { x: 160, y: 165, width: 300, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#3b82f6', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },
            { id: 'pr10-c1-l', type: 'text', position: { x: 160, y: 170, width: 300, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '유형 분석 / 어휘 학습', animation: { enter: { type: 'fadeIn', duration: 300, delay: 270, easing: 'ease-out' } } },
            { id: 'pr10-c1-items', type: 'text', position: { x: 170, y: 230, width: 460, height: 300 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '•  유형 확인 / 설명\n•  관련 어휘 학습\n•  문제 확인', animation: { enter: { type: 'fadeIn', duration: 300, delay: 300, easing: 'ease-out' } } },

            { id: 'pr10-c2', type: 'shape', position: { x: 700, y: 140, width: 540, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#fef3c7', borderRadius: '12px', borderColor: '#fde68a', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'pr10-c2-l-bg', type: 'shape', position: { x: 740, y: 165, width: 260, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#f59e0b', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr10-c2-l', type: 'text', position: { x: 740, y: 170, width: 260, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '문제 확인', animation: { enter: { type: 'fadeIn', duration: 300, delay: 370, easing: 'ease-out' } } },
            { id: 'pr10-c2-items', type: 'text', position: { x: 750, y: 230, width: 460, height: 300 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '•  어휘 및 표현 확인\n•  어휘 및 표현 학습\n•  문제 풀이', animation: { enter: { type: 'fadeIn', duration: 300, delay: 400, easing: 'ease-out' } } },

            { id: 'pr10-c3', type: 'shape', position: { x: 1280, y: 140, width: 540, height: 440 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f0fdf4', borderRadius: '12px', borderColor: '#bbf7d0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            { id: 'pr10-c3-l-bg', type: 'shape', position: { x: 1320, y: 165, width: 260, height: 36 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#22c55e', borderRadius: '4px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr10-c3-l', type: 'text', position: { x: 1320, y: 170, width: 260, height: 26 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '16px', fontWeight: '700', color: '#ffffff', textAlign: 'center' }, content: '단계별 풀이', animation: { enter: { type: 'fadeIn', duration: 300, delay: 470, easing: 'ease-out' } } },
            { id: 'pr10-c3-items', type: 'text', position: { x: 1330, y: 230, width: 460, height: 300 }, rotation: 0, opacity: 0.7, zIndex: 5, style: { fontSize: '24px', fontWeight: '400', color: '#334155', textAlign: 'left', lineHeight: '2.0' }, content: '•  [1단계] 목적 파악하기\n•  [2단계] 선택지 확인하기\n•  목적 → 태도 연결', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },

            // 하단 과제
            { id: 'pr10-hw-bg', type: 'shape', position: { x: 120, y: 640, width: 1700, height: 80 }, rotation: 0, opacity: 1, zIndex: 2, style: { backgroundColor: '#f8fafc', borderRadius: '40px', borderColor: '#e2e8f0', borderWidth: 1 }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
            { id: 'pr10-hw', type: 'text', position: { x: 170, y: 658, width: 1600, height: 40 }, rotation: 0, opacity: 0.6, zIndex: 5, style: { fontSize: '22px', fontWeight: '500', color: '#475569', textAlign: 'center' }, content: '과제: 오늘 배운 유형 복습 · 모르는 단어 사전에서 정리하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 600, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 11/12: 과제 안내 + 다음 차시 ═══
      {
        id: 'pr-s11', label: '과제 안내',
        data: {
          id: 'tpl-pr-11', order: 10, duration: 6000,
          background: { type: 'solid', value: '#ffffff' },
          elements: [
            { id: 'pr11-bar', type: 'shape', position: { x: 0, y: 0, width: 1920, height: 8 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr11-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.9, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr11-page', type: 'text', position: { x: 1800, y: 1020, width: 60, height: 25 }, rotation: 0, opacity: 0.3, zIndex: 10, style: { fontSize: '14px', fontWeight: '500', color: '#64748b', textAlign: 'right' }, content: '11', animation: { enter: { type: 'fadeIn', duration: 200, delay: 0, easing: 'ease-out' } } },

            // 1. 과제 안내
            { id: 'pr11-n1-bg', type: 'shape', position: { x: 120, y: 80, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 50, easing: 'ease-out' } } },
            { id: 'pr11-n1', type: 'text', position: { x: 120, y: 85, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '1', animation: { enter: { type: 'fadeIn', duration: 300, delay: 80, easing: 'ease-out' } } },
            { id: 'pr11-h1', type: 'text', position: { x: 200, y: 80, width: 600, height: 56 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '과제 안내', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
            { id: 'pr11-hw1', type: 'text', position: { x: 170, y: 170, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '1) 오늘 배운 유형 복습하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
            { id: 'pr11-hw2', type: 'text', position: { x: 170, y: 230, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '2) 모르는 단어와 표현 사전 찾아 공책에 정리하기', animation: { enter: { type: 'fadeIn', duration: 300, delay: 250, easing: 'ease-out' } } },

            { id: 'pr11-div', type: 'shape', position: { x: 120, y: 350, width: 1680, height: 1 }, rotation: 0, opacity: 0.1, zIndex: 5, style: { backgroundColor: '#94a3b8' }, content: '', animation: { enter: { type: 'fadeIn', duration: 200, delay: 300, easing: 'ease-out' } } },

            // 2. 다음 차시
            { id: 'pr11-n2-bg', type: 'shape', position: { x: 120, y: 410, width: 56, height: 56 }, rotation: 0, opacity: 1, zIndex: 5, style: { backgroundColor: '#1e3a5f', borderRadius: '8px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 350, easing: 'ease-out' } } },
            { id: 'pr11-n2', type: 'text', position: { x: 120, y: 415, width: 56, height: 46 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '28px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '2', animation: { enter: { type: 'fadeIn', duration: 300, delay: 380, easing: 'ease-out' } } },
            { id: 'pr11-h2', type: 'text', position: { x: 200, y: 410, width: 800, height: 56 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '44px', fontWeight: '800', color: '#1e293b', textAlign: 'left' }, content: '다음 차시 안내', animation: { enter: { type: 'slideUp', duration: 500, delay: 400, easing: 'ease-out' } } },
            { id: 'pr11-nx1', type: 'text', position: { x: 170, y: 500, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '1) 53번 유형(표 또는 그래프 분석하기) 분석과 학습 전략', animation: { enter: { type: 'fadeIn', duration: 300, delay: 450, easing: 'ease-out' } } },
            { id: 'pr11-nx2', type: 'text', position: { x: 170, y: 560, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '2) 54번 유형(주제에 대해 글 쓰기) 분석과 학습 전략', animation: { enter: { type: 'fadeIn', duration: 300, delay: 500, easing: 'ease-out' } } },
            { id: 'pr11-nx3', type: 'text', position: { x: 170, y: 620, width: 1580, height: 40 }, rotation: 0, opacity: 0.8, zIndex: 5, style: { fontSize: '26px', fontWeight: '400', color: '#334155', textAlign: 'left' }, content: '3) 원고지 사용법', animation: { enter: { type: 'fadeIn', duration: 300, delay: 550, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },

      // ═══ 12/12: 감사합니다 ═══
      {
        id: 'pr-s12', label: '감사합니다',
        data: {
          id: 'tpl-pr-12', order: 11, duration: 4000,
          background: { type: 'solid', value: '#1e3a5f' },
          elements: [
            { id: 'pr12-univ', type: 'image', position: { x: 1540, y: 24, width: 340, height: 60 }, rotation: 0, opacity: 0.6, zIndex: 10, style: {}, content: '/static/media/khu-logo.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
            { id: 'pr12-thanks', type: 'text', position: { x: 260, y: 360, width: 1400, height: 120 }, rotation: 0, opacity: 1, zIndex: 10, style: { fontSize: '96px', fontWeight: '800', color: '#ffffff', textAlign: 'center' }, content: '감사합니다', animation: { enter: { type: 'slideUp', duration: 600, delay: 100, easing: 'ease-out' } } },
            { id: 'pr12-line', type: 'shape', position: { x: 860, y: 510, width: 200, height: 3 }, rotation: 0, opacity: 0.3, zIndex: 5, style: { backgroundColor: '#ffffff', borderRadius: '2px' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 300, easing: 'ease-out' } } },
            { id: 'pr12-sub', type: 'text', position: { x: 460, y: 550, width: 1000, height: 40 }, rotation: 0, opacity: 0.4, zIndex: 10, style: { fontSize: '24px', fontWeight: '400', color: '#94a3b8', textAlign: 'center' }, content: '경희사이버대학교 한국어학부', animation: { enter: { type: 'fadeIn', duration: 400, delay: 400, easing: 'ease-out' } } },
            // 코너 장식
            { id: 'pr12-tl-h', type: 'shape', position: { x: 100, y: 100, width: 80, height: 2 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'pr12-tl-v', type: 'shape', position: { x: 100, y: 100, width: 2, height: 80 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 200, easing: 'ease-out' } } },
            { id: 'pr12-br-h', type: 'shape', position: { x: 1740, y: 900, width: 80, height: 2 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
            { id: 'pr12-br-v', type: 'shape', position: { x: 1818, y: 822, width: 2, height: 80 }, rotation: 0, opacity: 0.15, zIndex: 5, style: { backgroundColor: '#ffffff' }, content: '', animation: { enter: { type: 'fadeIn', duration: 400, delay: 250, easing: 'ease-out' } } },
          ],
          transition: { type: 'fade', duration: 500, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // ── 경국대전과 성종의 업적 (AI 이미지 + 내레이션) ──
  {
    id: 'gyeongguk-daejeon',
    title: '경국대전과 성종의 업적',
    category: '교육',
    thumbnail: { bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' },
    slides: [
      {
        id: 'gk-s1', label: '성종 즉위',
        data: {
          id: 'gyeongguk-1', order: 0, duration: 14700,
          background: { type: 'image', value: 'http://localhost:8000/static/media/generated/6f7066ba-29fd-4ecd-a6c2-b3aea7e2c7c4/1cc6b90f828a.png' },
          elements: [],
          transition: { type: 'fade', duration: 800, easing: 'ease-out' }, notes: ''
        }
      },
      {
        id: 'gk-s2', label: '법전 편찬',
        data: {
          id: 'gyeongguk-2', order: 1, duration: 30100,
          background: { type: 'image', value: 'http://localhost:8000/static/media/generated/6f7066ba-29fd-4ecd-a6c2-b3aea7e2c7c4/ac4d49d716a3.png' },
          elements: [],
          transition: { type: 'fade', duration: 800, easing: 'ease-out' }, notes: ''
        }
      },
      {
        id: 'gk-s3', label: '경국대전 반포',
        data: {
          id: 'gyeongguk-3', order: 2, duration: 25500,
          background: { type: 'image', value: 'http://localhost:8000/static/media/generated/6f7066ba-29fd-4ecd-a6c2-b3aea7e2c7c4/b9e88aa3c71e.png' },
          elements: [],
          transition: { type: 'fade', duration: 800, easing: 'ease-out' }, notes: ''
        }
      },
      {
        id: 'gk-s4', label: '법치 국가',
        data: {
          id: 'gyeongguk-4', order: 3, duration: 26800,
          background: { type: 'image', value: 'http://localhost:8000/static/media/generated/6f7066ba-29fd-4ecd-a6c2-b3aea7e2c7c4/f6a6603ba20e.png' },
          elements: [],
          transition: { type: 'fade', duration: 800, easing: 'ease-out' }, notes: ''
        }
      },
      {
        id: 'gk-s5', label: '성종의 유산',
        data: {
          id: 'gyeongguk-5', order: 4, duration: 29900,
          background: { type: 'image', value: 'http://localhost:8000/static/media/generated/6f7066ba-29fd-4ecd-a6c2-b3aea7e2c7c4/890c2c02306f.png' },
          elements: [],
          transition: { type: 'fade', duration: 800, easing: 'ease-out' }, notes: ''
        }
      },
    ]
  },

  // ── 청약의 진실 (9:16 쇼츠) ──
  {
    id: 'cheongya-shorts',
    title: '아무도 가르쳐 주지않은 청약의 진실',
    category: '교육',
    thumbnail: { bg: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' },
    slides: [
      { id: 'cy-s1', label: '청약이 뭔지?', data: { id: 'cheongya-1', order: 0, duration: 10000, background: { type: 'solid', value: '#f5f5f5' }, elements: [
        { id: 'cy0-top-bar', type: 'shape', position: { x: 0, y: 0, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy0-title', type: 'text', position: { x: 40, y: 40, width: 1000, height: 220 }, rotation: 0, opacity: 1, zIndex: 15, style: { fontSize: '64px', fontWeight: '800', color: '#FFD700', textAlign: 'left', lineHeight: '1.3' }, content: '형님들 그거 알아?\n청약이 뭔지?', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
        { id: 'cy0-bottom-bar', type: 'shape', position: { x: 0, y: 1640, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy0-logo', type: 'image', position: { x: 290, y: 1720, width: 500, height: 120 }, rotation: 0, opacity: 0.9, zIndex: 15, style: {}, content: '/static/media/joganji_logo_white.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
      ], transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: '' } },
      { id: 'cy-s2', label: '청약통장', data: { id: 'cheongya-2', order: 1, duration: 10000, background: { type: 'solid', value: '#f5f5f5' }, elements: [
        { id: 'cy1-top-bar', type: 'shape', position: { x: 0, y: 0, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy1-title', type: 'text', position: { x: 40, y: 40, width: 1000, height: 220 }, rotation: 0, opacity: 1, zIndex: 15, style: { fontSize: '64px', fontWeight: '800', color: '#FFD700', textAlign: 'left', lineHeight: '1.3' }, content: '청약통장,\n왜 필수일까?', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
        { id: 'cy1-bottom-bar', type: 'shape', position: { x: 0, y: 1640, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy1-logo', type: 'image', position: { x: 290, y: 1720, width: 500, height: 120 }, rotation: 0, opacity: 0.9, zIndex: 15, style: {}, content: '/static/media/joganji_logo_white.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
      ], transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: '' } },
      { id: 'cy-s3', label: '가점제', data: { id: 'cheongya-3', order: 2, duration: 10000, background: { type: 'solid', value: '#f5f5f5' }, elements: [
        { id: 'cy2-top-bar', type: 'shape', position: { x: 0, y: 0, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy2-title', type: 'text', position: { x: 40, y: 40, width: 1000, height: 220 }, rotation: 0, opacity: 1, zIndex: 15, style: { fontSize: '64px', fontWeight: '800', color: '#FFD700', textAlign: 'left', lineHeight: '1.3' }, content: '모르면 손해보는\n청약 가점제', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
        { id: 'cy2-bottom-bar', type: 'shape', position: { x: 0, y: 1640, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy2-logo', type: 'image', position: { x: 290, y: 1720, width: 500, height: 120 }, rotation: 0, opacity: 0.9, zIndex: 15, style: {}, content: '/static/media/joganji_logo_white.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
      ], transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: '' } },
      { id: 'cy-s4', label: '지금 해야할 것', data: { id: 'cheongya-4', order: 3, duration: 10000, background: { type: 'solid', value: '#f5f5f5' }, elements: [
        { id: 'cy3-top-bar', type: 'shape', position: { x: 0, y: 0, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy3-title', type: 'text', position: { x: 40, y: 40, width: 1000, height: 220 }, rotation: 0, opacity: 1, zIndex: 15, style: { fontSize: '64px', fontWeight: '800', color: '#FFD700', textAlign: 'left', lineHeight: '1.3' }, content: '지금 당장\n해야 할 것', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
        { id: 'cy3-bottom-bar', type: 'shape', position: { x: 0, y: 1640, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy3-logo', type: 'image', position: { x: 290, y: 1720, width: 500, height: 120 }, rotation: 0, opacity: 0.9, zIndex: 15, style: {}, content: '/static/media/joganji_logo_white.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
      ], transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: '' } },
      { id: 'cy-s5', label: '당첨 가능!', data: { id: 'cheongya-5', order: 4, duration: 10000, background: { type: 'solid', value: '#f5f5f5' }, elements: [
        { id: 'cy4-top-bar', type: 'shape', position: { x: 0, y: 0, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy4-title', type: 'text', position: { x: 40, y: 40, width: 1000, height: 220 }, rotation: 0, opacity: 1, zIndex: 15, style: { fontSize: '64px', fontWeight: '800', color: '#FFD700', textAlign: 'left', lineHeight: '1.3' }, content: '청약 당첨,\n불가능하지 않아!', animation: { enter: { type: 'slideUp', duration: 500, delay: 100, easing: 'ease-out' } } },
        { id: 'cy4-bottom-bar', type: 'shape', position: { x: 0, y: 1640, width: 1080, height: 280 }, rotation: 0, opacity: 1, zIndex: 10, style: { backgroundColor: '#000000' }, content: '', animation: { enter: { type: 'fadeIn', duration: 300, delay: 0, easing: 'ease-out' } } },
        { id: 'cy4-logo', type: 'image', position: { x: 290, y: 1720, width: 500, height: 120 }, rotation: 0, opacity: 0.9, zIndex: 15, style: {}, content: '/static/media/joganji_logo_white.png', animation: { enter: { type: 'fadeIn', duration: 300, delay: 200, easing: 'ease-out' } } },
      ], transition: { type: 'fade', duration: 600, easing: 'ease-out' }, notes: '' } },
    ]
  },
];
