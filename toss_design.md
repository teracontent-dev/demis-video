---
name: tds-design-system
description: "TDS(Toss Design System) 기반 디자인 가이드. UI 컴포넌트 구현, 웹 프론트엔드 개발, 색상/타이포/간격 토큰 적용, UX 라이팅 시 참조. TailwindCSS 사용 금지 — 반드시 CSS Variables + CSS Modules 방식으로 구현. 이 스킬은 TDS Mobile 공식 문서(tossmini-docs.toss.im/tds-mobile)를 기반으로 정리한 디자인 토큰과 컴포넌트 규격."
---

# TDS (Toss Design System) 디자인 스킬

> **출처:** https://tossmini-docs.toss.im/tds-mobile/
> **목적:** TDS의 디자인 원칙/토큰/컴포넌트 규격을 참조하여, 독립 웹앱에서 CSS로 직접 구현할 때 사용
> **⚠️ 핵심 규칙: TailwindCSS 사용 금지. CSS Variables + CSS Modules(또는 순수 CSS) 방식으로만 구현.**

---

## 1. 파운데이션: Colors

### 1-1. Grey 스케일 (가장 많이 사용)

| 토큰 | HEX | 용도 |
|------|-----|------|
| grey50 | `#f9fafb` | 가장 밝은 배경 |
| grey100 | `#f2f4f6` | 카드/패널 배경, greyBackground |
| grey200 | `#e5e8eb` | 보더, 구분선 |
| grey300 | `#d1d6db` | 강한 보더 |
| grey400 | `#b0b8c1` | 비활성 텍스트 |
| grey500 | `#8b95a1` | 보조 텍스트 (tertiary) |
| grey600 | `#6b7684` | 부가 설명 |
| grey700 | `#4e5968` | 본문 텍스트 (secondary) |
| grey800 | `#333d4b` | 강조 본문 |
| grey900 | `#191f28` | 제목, 최고 강조 텍스트 |

### 1-2. Grey Opacity

| 토큰 | 색상, 투명도 |
|------|-------------|
| greyOpacity50 | `#001733` 0.02 |
| greyOpacity100 | `#022047` 0.05 |
| greyOpacity200 | `#001b37` 0.10 |
| greyOpacity300 | `#001d3a` 0.18 |
| greyOpacity400 | `#001936` 0.31 |
| greyOpacity500 | `#031832` 0.46 |
| greyOpacity600 | `#00132b` 0.58 |
| greyOpacity700 | `#031228` 0.70 |
| greyOpacity800 | `#000c1e` 0.80 |
| greyOpacity900 | `#020913` 0.91 |

### 1-3. Blue (Primary 액션)

| 토큰 | HEX |
|------|-----|
| blue50 | `#e8f3ff` |
| blue100 | `#c9e2ff` |
| blue200 | `#90c2ff` |
| blue300 | `#64a8ff` |
| blue400 | `#4593fc` |
| blue500 | `#3182f6` ← **Primary** |
| blue600 | `#2272eb` ← **Primary Hover** |
| blue700 | `#1b64da` |
| blue800 | `#1957c2` |
| blue900 | `#194aa6` |

### 1-4. Red (Danger/Error)

| 토큰 | HEX |
|------|-----|
| red50 | `#ffeeee` |
| red100 | `#ffd4d6` |
| red200 | `#feafb4` |
| red300 | `#fb8890` |
| red400 | `#f66570` |
| red500 | `#f04452` ← **Danger** |
| red600 | `#e42939` |
| red700 | `#d22030` |
| red800 | `#bc1b2a` |
| red900 | `#a51926` |

### 1-5. Orange

| 토큰 | HEX |
|------|-----|
| orange50 | `#fff3e0` |
| orange500 | `#fe9800` ← **Warning** |
| orange900 | `#e45600` |

### 1-6. Yellow

| 토큰 | HEX |
|------|-----|
| yellow50 | `#fff9e7` |
| yellow500 | `#ffc342` |
| yellow900 | `#dd7d02` |

### 1-7. Green (Success)

| 토큰 | HEX |
|------|-----|
| green50 | `#f0faf6` |
| green500 | `#03b26c` ← **Success** |
| green900 | `#027648` |

### 1-8. Teal

| 토큰 | HEX |
|------|-----|
| teal50 | `#edf8f8` |
| teal500 | `#18a5a5` |
| teal900 | `#076565` |

### 1-9. Purple

| 토큰 | HEX |
|------|-----|
| purple50 | `#f9f0fc` |
| purple500 | `#a234c7` |
| purple900 | `#65237b` |

### 1-10. 배경 색상

| 토큰 | 값 |
|------|-----|
| background | `#FFFFFF` |
| greyBackground | grey100 (`#f2f4f6`) |
| layeredBackground | `#FFFFFF` |
| floatedBackground | `#FFFFFF` |

---

## 2. 파운데이션: Typography

TDS 타이포그래피는 **계층 토큰 기반**. 절대 폰트 크기를 하드코딩하지 말 것.

### 2-1. 토큰 테이블 (기본 100% 기준)

| 토큰 | fontSize | lineHeight | 용도 |
|------|----------|------------|------|
| Typography1 | 30px | 40px | 매우 큰 제목 |
| subTypography1 | 29px | 38px | |
| subTypography2 | 28px | 37px | |
| subTypography3 | 27px | 36px | |
| Typography2 | 26px | 35px | 큰 제목 |
| subTypography4 | 25px | 34px | |
| subTypography5 | 24px | 33px | 조금 큰 제목 |
| subTypography6 | 23px | 32px | |
| Typography3 | 22px | 31px | 일반 제목 |
| subTypography7 | 21px | 30px | |
| Typography4 | 20px | 29px | 작은 제목 |
| subTypography8 | 19px | 28px | 조금 큰 본문 |
| subTypography9 | 18px | 27px | |
| Typography5 | 17px | 25.5px | **일반 본문** |
| subTypography10 | 16px | 24px | |
| Typography6 | 15px | 22.5px | **작은 본문** |
| subTypography11 | 14px | 21px | |
| Typography7 | 13px | 19.5px | 캡션/라벨 |
| subTypography12 | 12px | 18px | |
| subTypography13 | 11px | 16.5px | 최소 텍스트 |

### 2-2. Font Weight 체계

TDS는 5단계 weight를 사용:
- **Light** — 가벼운 장식용
- **Regular (400)** — 본문 기본
- **Medium (500)** — 라벨, 강조 본문
- **SemiBold (600)** — 소제목
- **Bold (700)** — 제목, 강조

### 2-3. 실전 매핑 (Pretendard Variable 사용 시)

```css
:root {
  --font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif;

  /* Typography 토큰 → CSS 변수 */
  --typo-t1-size: 30px;  --typo-t1-line: 40px;
  --typo-t2-size: 26px;  --typo-t2-line: 35px;
  --typo-t3-size: 22px;  --typo-t3-line: 31px;
  --typo-t4-size: 20px;  --typo-t4-line: 29px;
  --typo-t5-size: 17px;  --typo-t5-line: 25.5px;
  --typo-t6-size: 15px;  --typo-t6-line: 22.5px;
  --typo-t7-size: 13px;  --typo-t7-line: 19.5px;
}
```

---

## 3. Semantic 디자인 토큰 (CSS Variables 템플릿)

아래를 프로젝트 전역 CSS에 선언하고 모든 컴포넌트에서 참조할 것.

```css
:root {
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

  /* ── Spacing ── */
  --space-2: 2px;
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;

  /* ── Radius ── */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;

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

## 4. 컴포넌트 규격

### 4-1. Button

**variant:** `fill` | `weak`
**color:** `primary` | `dark` | `danger` | `light`
**size:** `small` | `medium` | `large` | `xlarge`
**display:** `inline` | `block` | `full`

| 속성 | 설명 |
|------|------|
| fill + primary | 채도 높은 파란 배경, 흰 텍스트. 주요 액션용 |
| fill + dark | 어두운 배경. 보조 강조 |
| fill + danger | 빨간 배경. 삭제/경고 액션 |
| weak + primary | 반투명 파란 배경. 보조 액션 |
| weak + dark | 반투명 회색 배경. 낮은 중요도 |
| loading | 3개 인디케이터 순차 움직임, 버튼 너비 유지 |
| disabled | 클릭 불가, 시각적 비활성 표시 |

**CSS 커스터마이징 변수:**
- `--button-color`: 텍스트 색상
- `--button-background-color`: 배경색
- `--button-disabled-opacity-color`: 비활성 배경 투명도
- `--button-pressed-background-color`: 눌림 딤 색상
- `--button-pressed-opacity`: 눌림 투명도

**CSS 구현 패턴:**
```css
.button {
  font-family: var(--font-family);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-out-expo);
}
.button-fill-primary {
  background-color: var(--accent-primary);
  color: var(--text-on-color);
}
.button-fill-primary:hover {
  background-color: var(--accent-primary-hover);
}
.button-weak-primary {
  background-color: rgba(49, 130, 246, 0.12);
  color: var(--accent-primary);
}
.button-small  { height: 32px; padding: 0 12px; font-size: 13px; border-radius: var(--radius-sm); }
.button-medium { height: 40px; padding: 0 16px; font-size: 15px; border-radius: var(--radius-sm); }
.button-large  { height: 48px; padding: 0 20px; font-size: 17px; border-radius: var(--radius-md); }
.button-xlarge { height: 56px; padding: 0 24px; font-size: 17px; border-radius: var(--radius-md); }
.button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

### 4-2. Badge

**variant:** `fill` | `weak`
**size:** `xsmall` | `small` | `medium` | `large`
**color:** `blue` | `teal` | `green` | `red` | `yellow` | `elephant`

```css
.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 600;
  border-radius: var(--radius-full);
}
.badge-xsmall { height: 20px; padding: 0 6px; font-size: 11px; }
.badge-small  { height: 24px; padding: 0 8px; font-size: 12px; }
.badge-medium { height: 28px; padding: 0 10px; font-size: 13px; }
.badge-large  { height: 32px; padding: 0 12px; font-size: 14px; }
.badge-fill-blue { background: #3182f6; color: white; }
.badge-weak-blue { background: rgba(49, 130, 246, 0.12); color: #3182f6; }
.badge-fill-red  { background: #f04452; color: white; }
.badge-weak-red  { background: rgba(240, 68, 82, 0.12); color: #f04452; }
.badge-fill-green { background: #03b26c; color: white; }
.badge-weak-green { background: rgba(3, 178, 108, 0.12); color: #03b26c; }
```

### 4-3. Toast

**position:** `top` | `bottom`
**기본 duration:** 3000ms (버튼 포함 시 5000ms)

동작:
- 화면 상/하단에서 슬라이드 인 → 자동 사라짐
- 드래그로 닫기 가능
- `leftAddon`: 아이콘 또는 Lottie 애니메이션
- `button`: 하단에만 액션 버튼 추가 가능
- `higherThanCTA`: FixedBottomCTA 위에 표시
- `aria-live`: `polite`(기본) | `assertive`(즉시 읽기)

```css
.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: var(--text-primary); /* grey900 */
  color: var(--text-on-color);
  border-radius: var(--radius-md);
  padding: var(--space-12) var(--space-16);
  font-size: 15px;
  line-height: 22.5px;
  box-shadow: var(--shadow-lg);
  z-index: 9999;
  animation: toast-slide-in var(--duration-normal) var(--ease-out-expo);
}
.toast-top { top: var(--space-16); }
.toast-bottom { bottom: var(--space-16); }
```

### 4-4. BottomSheet

- 하단에서 슬라이드 업
- `header`: BottomSheet.Header (t4 텍스트 스타일, h1 태그)
- `headerDescription`: 부제목 (t6 스타일)
- `cta`: 하단 CTA 버튼 (Single 또는 Double)
- `disableDimmer`: 딤 해제 옵션
- `expandBottomSheet`: 위로 10px 드래그 시 전체 높이 확장
- 포커스 락: 기본 활성, `UNSAFE_disableFocusLock`으로 해제

```css
.bottom-sheet-dimmer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  z-index: 1001;
  transform: translateY(100%);
  transition: transform var(--duration-slow) var(--ease-out-expo);
}
.bottom-sheet.open {
  transform: translateY(0);
}
.bottom-sheet-handle {
  width: 36px;
  height: 4px;
  background: var(--border-default);
  border-radius: var(--radius-full);
  margin: var(--space-8) auto var(--space-16);
}
```

### 4-5. Dialog (AlertDialog / ConfirmDialog)

- AlertDialog: 단일 버튼 (확인)
- ConfirmDialog: 이중 버튼 (취소 + 확인)
- 중앙 모달 형태, 딤 배경

### 4-6. Tab

```css
.tab-container {
  display: flex;
  border-bottom: 1px solid var(--border-default);
}
.tab-item {
  padding: var(--space-12) var(--space-16);
  font-size: 15px;
  font-weight: 600;
  color: var(--text-tertiary);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all var(--duration-fast);
}
.tab-item.active {
  color: var(--text-primary);
  border-bottom-color: var(--text-primary);
}
```

### 4-7. Segmented Control

토글 스위치 형태의 탭. 배경이 있는 pill 스타일.

### 4-8. TextField / TextArea

- 기본, 포커스, 에러, 비활성 상태
- 라벨 + 입력 + 도움말/에러 메시지 구조

```css
.text-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.text-field-input {
  height: 48px;
  padding: 0 var(--space-16);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  font-size: 17px;
  font-family: var(--font-family);
  color: var(--text-primary);
  background: var(--bg-primary);
  transition: border-color var(--duration-fast);
}
.text-field-input:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.text-field-input.error {
  border-color: var(--accent-danger);
}
.text-field-label {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}
.text-field-helper {
  font-size: 13px;
  color: var(--text-tertiary);
}
.text-field-error {
  font-size: 13px;
  color: var(--accent-danger);
}
```

### 4-9. Checkbox / Switch

- Checkbox: 체크 아이콘 + 라벨
- Switch: 토글 ON/OFF

### 4-10. Progress Bar

```css
.progress-bar {
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: var(--accent-primary);
  border-radius: var(--radius-full);
  transition: width var(--duration-normal) var(--ease-out-expo);
}
```

### 4-11. Skeleton

로딩 상태 플레이스홀더.

```css
.skeleton {
  background: linear-gradient(90deg, #f2f4f6 25%, #e5e8eb 50%, #f2f4f6 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}
@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 4-12. Loader

```css
.loader {
  display: inline-flex;
  gap: 4px;
}
.loader-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-primary);
  animation: loader-bounce 0.6s infinite alternate;
}
.loader-dot:nth-child(2) { animation-delay: 0.2s; }
.loader-dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes loader-bounce {
  to { opacity: 0.3; transform: translateY(-4px); }
}
```

### 4-13. Tooltip

- 화살표 + 말풍선 형태
- 위/아래/좌/우 방향
- 어두운 배경(grey900) + 흰 텍스트

### 4-14. Slider

- 트랙 + 핸들(thumb)
- 트랙: grey200 배경, 채워진 부분 blue500
- 핸들: 원형, 흰 배경, 그림자

### 4-15. ListRow

- 리스트 항목의 표준 레이아웃
- 영역: leading(아이콘/이미지) + contents(텍스트) + trailing(화살표/부가정보)

### 4-16. SearchField

- 검색 아이콘 + 입력 + 초기화(X) 버튼
- 회색 배경 라운드 형태

---

## 5. 유틸리티: Overlay Extension

오버레이(BottomSheet, Dialog, Toast)를 명령형으로 호출하는 패턴.

- `useDialog()` → `dialog.open({ title, description, onConfirm })`
- `useToast()` → `toast.open({ text, position })`
- `useBottomSheet()` → `bottomSheet.open({ header, children, cta })`

**구현 시:** React Context + Portal 패턴으로 구현. 전역 OverlayProvider에서 오버레이 스택 관리.

---

## 6. UX 라이팅 가이드

### 6-1. 기본 규칙

| 규칙 | 예시 |
|------|------|
| **해요체** 통일 | "저장되었습니다" ✗ → "저장했어요" ✓ |
| **능동형** 우선 | "등록됐어요" ✗ → "등록했어요" ✓ |
| **긍정형** 우선 | "사용할 수 없어요" ✗ → "~하면 사용할 수 있어요" ✓ |
| **캐주얼 경어** | "확인하시겠어요?" ✗ → "확인할까요?" ✓ |
| **'~시' 빼기** | "로그인하시겠어요?" ✗ → "로그인할까요?" ✓ |
| **'계시다' → '있다'** | "로그인되어 계시네요" ✗ → "로그인되어 있어요" ✓ |
| **한자어 풀어쓰기** | "인증 실패" ✗ → "인증에 실패했어요" ✓ |
| **'되어요' → '돼요'** | 모바일 좁은 공간 고려, 모든 곳에 '돼요' 통일 |

### 6-2. 예외 (수동형 허용)

- 서비스 종료/기간 만료: "이벤트가 종료됐어요" ✓
- 사용자에게 미치는 영향: "연체될 수 있어요" ✓
- 사용자 안심: "개인정보는 저장되지 않아요" ✓

### 6-3. 예외 (경어 허용)

- 사용자 맥락 활용 질문: "혹시 계좌를 해지하셨나요?" ✓
- 사용자 상황 추정: "이 주소가 맞으시나요?" ✓
- 선의가 필요한 상황(설문 등): "잠깐 알려주시겠어요?" ✓

### 6-4. 버튼 텍스트

- 동사형으로 끝내기: "확인", "저장하기", "다음", "시작하기"
- "예/아니오" 대신 구체적 동작: "삭제하기" / "취소"

---

## 7. 절대 하지 말 것 (Anti-patterns)

1. ❌ **TailwindCSS 사용 금지** — `text-gray-500`, `p-4`, `rounded-lg` 등 Tailwind 유틸리티 클래스 절대 사용 불가
2. ❌ **Inter, Roboto, Arial 사용 금지** — Pretendard Variable만 사용
3. ❌ **폰트 크기 하드코딩 금지** — 반드시 Typography 토큰(CSS 변수) 참조
4. ❌ **색상 직접 입력 금지** — 반드시 Semantic 토큰(CSS 변수) 참조
5. ❌ **purple gradient on white 같은 AI 슬롭 디자인 금지**
6. ❌ **styled-components 불필요** — CSS Modules 또는 순수 CSS 사용
7. ❌ **`@toss/tds-mobile` 패키지 직접 import 금지** — 외부 프로젝트이므로 CSS로 직접 구현

---

## 8. 반드시 할 것 (Best Practices)

1. ✅ 모든 색상은 `var(--accent-primary)` 형태로 참조
2. ✅ 모든 간격은 `var(--space-16)` 형태로 참조
3. ✅ 모든 radius는 `var(--radius-md)` 형태로 참조
4. ✅ 트랜지션은 `var(--ease-out-expo)` + `var(--duration-normal)` 사용
5. ✅ 컴포넌트 상태별(default, hover, active, focus, disabled) 스타일 모두 정의
6. ✅ 접근성: `aria-label`, `aria-live`, `role` 적절히 사용
7. ✅ 다크모드 대비: CSS 변수만 바꾸면 전환 가능하도록 설계
8. ✅ 웹폰트 로딩:
   ```html
   <link rel="stylesheet" as="style" crossorigin
     href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
   ```
