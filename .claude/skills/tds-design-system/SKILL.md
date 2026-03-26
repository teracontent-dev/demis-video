---
name: tds-design-system
description: "TDS(Toss Design System) 기반 UI 구현 가이드. 웹 프론트엔드에서 UI 컴포넌트를 만들거나, 색상/타이포/간격/radius 등 디자인 토큰을 적용하거나, CSS 스타일링을 할 때 반드시 이 스킬을 참조할 것. React/HTML/CSS로 UI를 구현하는 모든 작업에 적용된다. 사용자가 버튼, 뱃지, 토스트, 바텀시트, 다이얼로그, 탭, 인풋, 체크박스, 프로그레스바, 스켈레톤, 로더, 툴팁, 슬라이더, 리스트, 검색 필드 등 UI 컴포넌트를 언급하면 이 스킬을 사용한다. TailwindCSS 사용 금지 — 반드시 CSS Variables + CSS Modules 방식으로 구현. 한국어 UX 라이팅 규칙도 포함."
---

# TDS (Toss Design System) 디자인 스킬

> **출처:** TDS Mobile 공식 문서 (tossmini-docs.toss.im/tds-mobile/)
> **핵심:** TailwindCSS 절대 금지. CSS Variables + CSS Modules(또는 순수 CSS)로만 구현.
> **적용 범위:** 에디터 UI(React 컴포넌트)에만 적용. 슬라이드 엔진 내부의 슬라이드 콘텐츠(프레젠테이션 디자인)에는 적용하지 않는다. 슬라이드 콘텐츠는 자유로운 색상/레이아웃을 사용할 수 있다.

---

## 스타일링 방식

이 프로젝트는 **CSS Variables + CSS Modules** 방식을 사용한다. Tailwind 유틸리티 클래스(`text-gray-500`, `p-4`, `rounded-lg` 등)는 절대 사용하지 않는다.

모든 디자인 값(색상, 간격, radius, 그림자, 트랜지션)은 CSS 변수로 참조한다:
- 색상: `var(--accent-primary)`, `var(--text-secondary)` 등
- 간격: `var(--space-16)` 등
- Radius: `var(--radius-md)` 등
- 트랜지션: `var(--ease-out-expo)` + `var(--duration-normal)`

styled-components도 사용하지 않는다.

---

## Semantic 토큰 (전역 CSS 변수)

프로젝트 전역 CSS에 선언하고 모든 컴포넌트에서 참조할 것.

```css
:root {
  /* ── Font ── */
  --font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif;

  /* ── Surface ── */
  --bg-primary: #FFFFFF;
  --bg-secondary: #f9fafb;       /* grey50 */
  --bg-tertiary: #f2f4f6;        /* grey100 */
  --bg-elevated: #FFFFFF;

  /* ── Text ── */
  --text-primary: #191f28;        /* grey900 */
  --text-secondary: #4e5968;      /* grey700 */
  --text-tertiary: #8b95a1;       /* grey500 */
  --text-disabled: #b0b8c1;       /* grey400 */
  --text-on-color: #FFFFFF;

  /* ── Border ── */
  --border-default: #e5e8eb;      /* grey200 */
  --border-strong: #d1d6db;       /* grey300 */

  /* ── Interactive ── */
  --accent-primary: #3182f6;      /* blue500 */
  --accent-primary-hover: #2272eb;/* blue600 */
  --accent-success: #03b26c;      /* green500 */
  --accent-warning: #fe9800;      /* orange500 */
  --accent-danger: #f04452;       /* red500 */

  /* ── Typography ── */
  --typo-t1-size: 30px;  --typo-t1-line: 40px;
  --typo-t2-size: 26px;  --typo-t2-line: 35px;
  --typo-t3-size: 22px;  --typo-t3-line: 31px;
  --typo-t4-size: 20px;  --typo-t4-line: 29px;
  --typo-t5-size: 17px;  --typo-t5-line: 25.5px;
  --typo-t6-size: 15px;  --typo-t6-line: 22.5px;
  --typo-t7-size: 13px;  --typo-t7-line: 19.5px;

  /* ── Spacing ── */
  --space-2: 2px;   --space-4: 4px;   --space-8: 8px;
  --space-12: 12px;  --space-16: 16px;  --space-20: 20px;
  --space-24: 24px;  --space-32: 32px;  --space-40: 40px;
  --space-48: 48px;

  /* ── Radius ── */
  --radius-xs: 4px;    --radius-sm: 8px;    --radius-md: 12px;
  --radius-lg: 16px;   --radius-xl: 20px;   --radius-full: 9999px;

  /* ── Shadow ── */
  --shadow-sm: 0 1px 2px rgba(0, 23, 51, 0.08);
  --shadow-md: 0 2px 8px rgba(0, 23, 51, 0.12);
  --shadow-lg: 0 4px 20px rgba(0, 23, 51, 0.16);
  --shadow-xl: 0 8px 40px rgba(0, 23, 51, 0.20);

  /* ── Transition ── */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
}
```

---

## 폰트

**Pretendard Variable만 사용.** Inter, Roboto, Arial 사용 금지.

```html
<link rel="stylesheet" as="style" crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```

Font Weight 체계:
- Regular (400) — 본문 기본
- Medium (500) — 라벨, 강조 본문
- SemiBold (600) — 소제목
- Bold (700) — 제목, 강조

---

## 컴포넌트 규격

UI 컴포넌트를 구현할 때는 `references/components.md`를 읽어서 해당 컴포넌트의 상세 CSS 규격을 확인할 것. 지원하는 컴포넌트 목록:

| 컴포넌트 | 핵심 |
|----------|------|
| **Button** | variant(fill/weak), color(primary/dark/danger/light), size(small~xlarge) |
| **Badge** | variant(fill/weak), size(xsmall~large), 6가지 color |
| **Toast** | position(top/bottom), 3초 자동 사라짐, 슬라이드 인 |
| **BottomSheet** | 하단 슬라이드 업, 딤 배경, CTA 버튼 |
| **Dialog** | AlertDialog(단일 버튼), ConfirmDialog(이중 버튼), 중앙 모달 |
| **Tab** | 하단 보더 active 표시 |
| **Segmented Control** | pill 스타일 토글 탭 |
| **TextField/TextArea** | 라벨 + 입력 + 도움말/에러 구조 |
| **Checkbox/Switch** | 체크/토글 ON-OFF |
| **Progress Bar** | 4px 높이, 트랙 + 채움 |
| **Skeleton** | shimmer 애니메이션 플레이스홀더 |
| **Loader** | 3개 dot bounce 애니메이션 |
| **Tooltip** | 화살표 말풍선, 어두운 배경 |
| **Slider** | 트랙 + 핸들 |
| **ListRow** | leading + contents + trailing 레이아웃 |
| **SearchField** | 검색 아이콘 + 입력 + X 버튼 |

---

## 색상 팔레트 상세

전체 색상 팔레트(Grey, Blue, Red, Orange, Yellow, Green, Teal, Purple 및 Opacity 변형)는 `references/tokens.md`를 참조할 것.

---

## Overlay 패턴

오버레이(BottomSheet, Dialog, Toast)를 명령형으로 호출하는 패턴:
- `useDialog()` → `dialog.open({ title, description, onConfirm })`
- `useToast()` → `toast.open({ text, position })`
- `useBottomSheet()` → `bottomSheet.open({ header, children, cta })`

React Context + Portal 패턴으로 구현. 전역 OverlayProvider에서 오버레이 스택 관리.

---

## UX 라이팅 가이드

한국어 UI 텍스트 작성 시 반드시 따를 것.

### 기본 규칙

| 규칙 | 잘못된 예 | 올바른 예 |
|------|----------|----------|
| **해요체** 통일 | "저장되었습니다" | "저장했어요" |
| **능동형** 우선 | "등록됐어요" | "등록했어요" |
| **긍정형** 우선 | "사용할 수 없어요" | "~하면 사용할 수 있어요" |
| **캐주얼 경어** | "확인하시겠어요?" | "확인할까요?" |
| **'~시' 빼기** | "로그인하시겠어요?" | "로그인할까요?" |
| **한자어 풀어쓰기** | "인증 실패" | "인증에 실패했어요" |
| **'되어요' → '돼요'** | "되어요" | "돼요" |

### 버튼 텍스트
- 동사형으로 끝내기: "확인", "저장하기", "다음", "시작하기"
- "예/아니오" 대신 구체적 동작: "삭제하기" / "취소"

### 수동형 허용 예외
- 서비스 종료/기간 만료: "이벤트가 종료됐어요"
- 사용자에게 미치는 영향: "연체될 수 있어요"
- 사용자 안심: "개인정보는 저장되지 않아요"

---

## 절대 하지 말 것 (Anti-patterns)

이 규칙들은 토스 디자인 시스템의 일관성과 품질을 유지하기 위해 존재한다.

1. **TailwindCSS 사용 금지** — Tailwind 유틸리티 클래스 절대 불가
2. **Inter, Roboto, Arial 사용 금지** — Pretendard Variable만 사용
3. **폰트 크기 하드코딩 금지** — Typography 토큰(CSS 변수) 참조
4. **색상 직접 입력 금지** — Semantic 토큰(CSS 변수) 참조
5. **purple gradient on white 같은 AI 슬롭 디자인 금지**
6. **styled-components 불필요** — CSS Modules 또는 순수 CSS 사용
7. **`@toss/tds-mobile` 패키지 직접 import 금지** — 외부 프로젝트이므로 CSS로 직접 구현

## 반드시 할 것

1. 모든 색상은 `var(--accent-primary)` 형태로 참조
2. 모든 간격은 `var(--space-16)` 형태로 참조
3. 모든 radius는 `var(--radius-md)` 형태로 참조
4. 트랜지션은 `var(--ease-out-expo)` + `var(--duration-normal)` 사용
5. 컴포넌트 상태별(default, hover, active, focus, disabled) 스타일 모두 정의
6. 접근성: `aria-label`, `aria-live`, `role` 적절히 사용
7. 다크모드 대비: CSS 변수만 바꾸면 전환 가능하도록 설계
