# TDS 컴포넌트 CSS 규격

## Button

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

---

## Badge

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

---

## Toast

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

---

## BottomSheet

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

---

## Dialog (AlertDialog / ConfirmDialog)

- AlertDialog: 단일 버튼 (확인)
- ConfirmDialog: 이중 버튼 (취소 + 확인)
- 중앙 모달 형태, 딤 배경

---

## Tab

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

---

## Segmented Control

토글 스위치 형태의 탭. 배경이 있는 pill 스타일.

---

## TextField / TextArea

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

---

## Checkbox / Switch

- Checkbox: 체크 아이콘 + 라벨
- Switch: 토글 ON/OFF

---

## Progress Bar

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

---

## Skeleton

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

---

## Loader

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

---

## Tooltip

- 화살표 + 말풍선 형태
- 위/아래/좌/우 방향
- 어두운 배경(grey900) + 흰 텍스트

---

## Slider

- 트랙 + 핸들(thumb)
- 트랙: grey200 배경, 채워진 부분 blue500
- 핸들: 원형, 흰 배경, 그림자

---

## ListRow

- 리스트 항목의 표준 레이아웃
- 영역: leading(아이콘/이미지) + contents(텍스트) + trailing(화살표/부가정보)

---

## SearchField

- 검색 아이콘 + 입력 + 초기화(X) 버튼
- 회색 배경 라운드 형태
