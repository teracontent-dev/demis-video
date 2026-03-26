import anthropic
import json
import os
import re
import uuid
from typing import Any, AsyncGenerator


# ⭐ 슬라이드 디자인 모델 — 절대 변경 금지
SLIDE_DESIGN_MODEL = "claude-opus-4-6"

SYSTEM_PROMPT = """당신은 세계적 수준의 프레젠테이션 디자이너입니다.
스크립트나 수정 요청을 받아 슬라이드 JSON을 생성/수정합니다.

## 슬라이드 JSON 스키마

```json
{
  "id": "고유id",
  "order": 0,
  "duration": 5000,
  "background": { "type": "solid|gradient|image", "value": "#색상 또는 CSS gradient 또는 이미지URL" },
  "elements": [
    {
      "id": "고유id",
      "type": "text|shape|image",
      "position": { "x": 100, "y": 100, "width": 800, "height": 200 },
      "rotation": 0,
      "opacity": 1,
      "zIndex": 1,
      "style": { "fontSize": "30px", "fontWeight": "700", "color": "#ffffff", "textAlign": "center" },
      "content": "텍스트 내용",
      "animation": { "enter": { "type": "fadeIn", "duration": 500, "delay": 0, "easing": "ease-out" } }
    }
  ],
  "transition": { "type": "fade", "duration": 500, "easing": "ease-out" },
  "notes": ""
}
```

## 좌표계
- 1920×1080px 고정. 절대 좌표만 사용 (퍼센트 금지)
- fontSize는 반드시 문자열 "30px" 형태

## 디자인 자유도
색상, 배경, 레이아웃은 완전히 자유롭게 사용할 수 있다. 제한 없음.
- 그라데이션 배경: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
- 어두운 테마, 밝은 테마, 비비드 컬러 모두 가능
- 사용자가 레퍼런스를 주면 그 스타일을 최대한 따를 것

## 디자인 퀄리티 원칙
- 한 슬라이드에 핵심 메시지 하나
- 여백 충분히 (최소 80px 마진)
- 시각적 계층구조: 제목 > 소제목 > 본문 > 캡션
- 대비(contrast)를 높여 가독성 확보
- 요소 간 정렬(alignment) 철저히
- 색상 조합은 조화롭게 (보색, 유사색, 단색 톤)

## 차트/그래프
shape 엘리먼트로 직접 구성:
- 막대: type:"shape", position.height로 값 표현, 각 막대 다른 색상
- 원형: style:{borderRadius:"50%"}
- 라벨: type:"text"
- 구분선/축: type:"shape", height:2 또는 width:2

## 엘리먼트 타입
- text: 텍스트. content에 문자열.
- shape: 도형. style.backgroundColor로 색상, style.borderRadius로 모양. content는 빈 문자열.
- image: 이미지. content에 URL 문자열.

## 애니메이션/트랜지션
- 애니메이션: fadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn, typewriter, wordReveal, highlight, countUp
- 트랜지션: none, fade, slide-left, slide-right, slide-up, wipe-left, wipe-right, scale, dissolve, morph

## 절대 하지 말 것
- 좌측 세로 액센트 바(줄) 사용 금지. 슬라이드 왼쪽에 얇은 세로선/바를 장식으로 넣지 말 것.

## 수정 규칙
- 요청된 부분만 변경, 나머지 유지
- 모호한 요청은 합리적 해석 후 ai_message로 근거 설명

## 응답 형식

반드시 JSON으로 응답하세요. 마크다운 코드 블록(```json ... ```) 안에 넣어도 됩니다.

### 슬라이드 생성 시 (새로 만들기):
{
  "slides": [새로 만든 슬라이드들만],
  "ai_message": "설명 메시지"
}

### 슬라이드 수정 시:
⚠️ 중요: 변경된 슬라이드만 반환하세요. 변경되지 않은 슬라이드는 포함하지 마세요!
{
  "changed_slides": {인덱스: 슬라이드객체} 형태로 변경된 것만,
  "new_slides": [새로 추가할 슬라이드 배열] (추가 요청 시에만),
  "delete_indices": [삭제할 인덱스] (삭제 요청 시에만),
  "ai_message": "설명 메시지"
}

예시 - 3번 슬라이드(인덱스2) 배경만 변경:
{"changed_slides": {"2": {"id":"기존id","background":{"type":"solid","value":"#191f28"},...}}, "ai_message": "3번 배경을 어둡게 변경했어요."}

예시 - 슬라이드 3개 추가:
{"new_slides": [{새슬라이드1}, {새슬라이드2}, {새슬라이드3}], "ai_message": "3개 슬라이드를 추가했어요."}
"""


def _get_client() -> anthropic.Anthropic:
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise ValueError("ANTHROPIC_API_KEY가 .env에 설정되지 않았습니다")
    return anthropic.Anthropic(api_key=api_key)


def _get_async_client() -> anthropic.AsyncAnthropic:
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise ValueError("ANTHROPIC_API_KEY가 .env에 설정되지 않았습니다")
    return anthropic.AsyncAnthropic(api_key=api_key)


def _extract_json(text: str) -> dict:
    """Extract JSON from response text. Handles code blocks, long text, multiple attempts."""
    # 1. Try direct parse
    try:
        return json.loads(text.strip())
    except json.JSONDecodeError:
        pass

    # 2. Try all code blocks (greedy — find the LARGEST one)
    code_blocks = re.findall(r'```(?:json)?\s*\n(.*?)\n```', text, re.DOTALL)
    for block in sorted(code_blocks, key=len, reverse=True):
        try:
            return json.loads(block.strip())
        except json.JSONDecodeError:
            continue

    # 3. Find the outermost { ... } with proper brace matching
    brace_start = text.find('{')
    if brace_start >= 0:
        depth = 0
        in_string = False
        escape_next = False
        last_valid_end = -1
        for i in range(brace_start, len(text)):
            c = text[i]
            if escape_next:
                escape_next = False
                continue
            if c == '\\' and in_string:
                escape_next = True
                continue
            if c == '"':
                in_string = not in_string
                continue
            if in_string:
                continue
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    last_valid_end = i
                    break

        if last_valid_end > 0:
            candidate = text[brace_start:last_valid_end + 1]
            try:
                return json.loads(candidate)
            except json.JSONDecodeError:
                pass

    # 4. Try to repair truncated JSON (max_tokens cutoff)
    brace_start = text.find('{')
    if brace_start >= 0:
        truncated = text[brace_start:]
        # Remove trailing incomplete string/value
        # Find last complete array element or object
        for trim_pos in range(len(truncated) - 1, max(0, len(truncated) - 500), -1):
            if truncated[trim_pos] == '}':
                # Try closing all open brackets
                attempt = truncated[:trim_pos + 1]
                # Count unclosed brackets
                opens = attempt.count('{') - attempt.count('}')
                open_arrays = attempt.count('[') - attempt.count(']')
                if opens >= 0 and open_arrays >= 0:
                    repair = attempt + ']' * open_arrays + '}' * opens
                    try:
                        return json.loads(repair)
                    except json.JSONDecodeError:
                        continue

    raise ValueError("AI 응답에서 JSON을 추출할 수 없어요")


def _generate_slide_id() -> str:
    return str(uuid.uuid4())


def _ensure_slide_ids(slides: list) -> list:
    for slide in slides:
        if not slide.get("id"):
            slide["id"] = _generate_slide_id()
        for element in slide.get("elements", []):
            if not element.get("id"):
                element["id"] = _generate_slide_id()
    return slides


def _normalize_slides(slides: list) -> list:
    """Ensure all slides have required fields and correct types."""
    slides = _ensure_slide_ids(slides)
    for i, slide in enumerate(slides):
        slide["order"] = i
        if "duration" not in slide:
            slide["duration"] = 5000
        if "transition" not in slide:
            slide["transition"] = {"type": "fade", "duration": 500, "easing": "ease-out"}
        if "notes" not in slide:
            slide["notes"] = ""
        # Ensure fontSize is string with px
        for el in slide.get("elements", []):
            style = el.get("style", {})
            if "fontSize" in style and isinstance(style["fontSize"], (int, float)):
                style["fontSize"] = f"{int(style['fontSize'])}px"
            if "lineHeight" in style and isinstance(style["lineHeight"], (int, float)):
                style["lineHeight"] = f"{int(style['lineHeight'])}px"
    return slides


# ──────────────────────────────────────
# Claude CLI mode (uses claude -p, no API key cost)
# ──────────────────────────────────────

async def _run_claude_cli(prompt: str) -> AsyncGenerator[str, None]:
    """Run claude CLI as subprocess. Collects full output, then returns result."""
    import asyncio

    yield f"data: {json.dumps({'type': 'text_start'})}\n\n"
    yield f"data: {json.dumps({'type': 'text', 'content': '슬라이드를 구성하고 있어요...'})}\n\n"

    # Pass prompt via stdin to avoid shell escaping issues
    process = await asyncio.create_subprocess_shell(
        'claude -p - --output-format text',
        stdin=asyncio.subprocess.PIPE,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )

    stdout, stderr = await process.communicate(input=prompt.encode("utf-8"))
    full_text = stdout.decode("utf-8", errors="replace")

    if process.returncode != 0:
        err_text = stderr.decode("utf-8", errors="replace")[:300]
        yield f"data: {json.dumps({'type': 'error', 'message': f'Claude CLI error: {err_text}'})}\n\n"
        yield "data: [DONE]\n\n"
        return

    # Parse result
    try:
        result = _extract_json(full_text)
        response_data: dict = {"type": "result", "ai_message": result.get("ai_message", "완료했어요.")}
        if "slides" in result:
            response_data["slides"] = _normalize_slides(result["slides"])
        if "new_slides" in result:
            response_data["new_slides"] = _normalize_slides(result["new_slides"])
        if "changed_slides" in result:
            normalized = {}
            for idx_str, slide in result["changed_slides"].items():
                normalized[idx_str] = _normalize_slides([slide])[0] if slide else slide
            response_data["changed_slides"] = normalized
        if "delete_indices" in result:
            response_data["delete_indices"] = result["delete_indices"]
        if "updated_slides" in result:
            response_data["updated_slides"] = _normalize_slides(result["updated_slides"])
        yield f"data: {json.dumps(response_data, ensure_ascii=False)}\n\n"
    except Exception as e:
        import sys
        print(f"[CLI_DEBUG] JSON parse failed. Length={len(full_text)}, first200={full_text[:200]}", file=sys.stderr)
        yield f"data: {json.dumps({'type': 'error', 'message': f'JSON 파싱 실패: {str(e)}. 텍스트 길이: {len(full_text)}'}, ensure_ascii=False)}\n\n"

    yield "data: [DONE]\n\n"


async def generate_slides_cli(script_text: str, style_preset: str = "modern") -> AsyncGenerator[str, None]:
    """스크립트 → 슬라이드 생성 (Claude CLI 모드)"""
    style_guidance = {
        "modern": "깔끔하고 모던한 디자인.",
        "bold": "대담하고 강렬한 디자인.",
        "minimal": "최소한의 요소만 사용.",
        "dark": "어두운 배경(#191f28) 위에 밝은 텍스트.",
    }.get(style_preset, "깔끔하고 모던한 디자인.")

    prompt = f"""{SYSTEM_PROMPT}

다음 스크립트를 분석해서 슬라이드 JSON을 생성해주세요.

스타일: {style_guidance}

스크립트:
{script_text}

각 슬라이드에는 핵심 메시지 하나만 넣고, 적절한 애니메이션과 트랜지션을 설정해주세요.
응답은 반드시 JSON 형식으로만 해주세요. 설명 없이 JSON만."""

    async for chunk in _run_claude_cli(prompt):
        yield chunk


async def chat_edit_cli(message: str, context: dict) -> AsyncGenerator[str, None]:
    """채팅으로 슬라이드 수정 (Claude CLI 모드)"""
    current_slides = context.get("current_slides", [])
    slides_summary = []
    for i, s in enumerate(current_slides):
        slides_summary.append({
            "index": i, "id": s.get("id"), "duration": s.get("duration"),
            "background": s.get("background"),
            "element_count": len(s.get("elements", [])),
            "elements_preview": [
                {"id": e.get("id"), "type": e.get("type"),
                 "content": (e.get("content", "")[:50] if isinstance(e.get("content"), str) else "")}
                for e in s.get("elements", [])[:5]
            ],
        })

    prompt = f"""{SYSTEM_PROMPT}

현재 슬라이드 요약 ({len(current_slides)}개):
{json.dumps(slides_summary, ensure_ascii=False)}

수정 요청: {message}

⚠️ 변경/추가된 슬라이드만 반환하세요. 변경 없는 슬라이드는 포함하지 마세요.
응답은 반드시 JSON 형식으로만 해주세요. 설명 없이 JSON만."""

    async for chunk in _run_claude_cli(prompt):
        yield chunk


# ──────────────────────────────────────
# Streaming API (Anthropic API mode)
# ──────────────────────────────────────

async def generate_slides_stream(script_text: str, style_preset: str = "modern", thinking: bool = False) -> AsyncGenerator[str, None]:
    """스크립트 → 슬라이드 자동 생성 (비동기 스트리밍)"""
    client = _get_async_client()

    style_guidance = {
        "modern": "깔끔하고 모던한 디자인. 여백을 충분히 사용하고, 색상은 절제된 톤.",
        "bold": "대담하고 강렬한 디자인. 큰 텍스트와 강한 대비.",
        "minimal": "최소한의 요소만 사용. 텍스트 중심, 매우 넓은 여백.",
        "dark": "어두운 배경(#191f28) 위에 밝은 텍스트. 세련된 느낌.",
    }.get(style_preset, "깔끔하고 모던한 디자인.")

    full_text = ""

    stream_kwargs: dict = {
        "model": SLIDE_DESIGN_MODEL,
        "max_tokens": 16000,
        "system": SYSTEM_PROMPT,
    }
    if thinking:
        stream_kwargs["thinking"] = {"type": "adaptive"}

    async with client.messages.stream(
        **stream_kwargs,
        messages=[{
            "role": "user",
            "content": f"""다음 스크립트를 분석해서 슬라이드 JSON을 생성해주세요.

스타일: {style_guidance}

스크립트:
{script_text}

각 슬라이드에는 핵심 메시지 하나만 넣고, 적절한 애니메이션과 트랜지션을 설정해주세요.
응답은 반드시 JSON 형식으로 해주세요."""
        }]
    ) as stream:
        async for event in stream:
            try:
                if event.type == "content_block_start":
                    block_type = getattr(event.content_block, 'type', None)
                    if block_type == "thinking":
                        yield f"data: {json.dumps({'type': 'thinking_start'})}\n\n"
                    elif block_type == "text":
                        yield f"data: {json.dumps({'type': 'text_start'})}\n\n"
                elif event.type == "content_block_delta":
                    delta = event.delta
                    delta_type = getattr(delta, 'type', None)
                    if delta_type == "thinking_delta":
                        yield f"data: {json.dumps({'type': 'thinking', 'content': delta.thinking})}\n\n"
                    elif delta_type == "text_delta":
                        full_text += delta.text
                        yield f"data: {json.dumps({'type': 'text', 'content': delta.text})}\n\n"
            except Exception as ex:
                import sys
                print(f"[STREAM_EVENT_ERROR] {ex}", file=sys.stderr)
                continue

    try:
        result = _extract_json(full_text)
        slides = _normalize_slides(result.get("slides", []))
        yield f"data: {json.dumps({'type': 'result', 'slides': slides, 'ai_message': result.get('ai_message', f'{len(slides)}개 슬라이드를 생성했어요.')}, ensure_ascii=False)}\n\n"
    except Exception as e:
        import sys
        print(f"[AI_DEBUG] JSON parse failed. Length={len(full_text)}, first200={full_text[:200]}", file=sys.stderr)
        yield f"data: {json.dumps({'type': 'error', 'message': f'JSON 파싱 실패: {str(e)}. 텍스트 길이: {len(full_text)}'}, ensure_ascii=False)}\n\n"

    yield "data: [DONE]\n\n"


async def chat_edit_stream(message: str, context: dict, thinking: bool = False) -> AsyncGenerator[str, None]:
    """채팅으로 슬라이드 수정 (비동기 스트리밍)"""
    client = _get_async_client()

    messages = []
    for msg in context.get("chat_history", [])[-10:]:
        messages.append({
            "role": msg["role"],
            "content": msg["content"],
        })

    # Send compact slide summary (id + order + element count only) to save tokens
    current_slides = context.get("current_slides", [])
    slides_summary = []
    for i, s in enumerate(current_slides):
        slides_summary.append({
            "index": i,
            "id": s.get("id"),
            "duration": s.get("duration"),
            "background": s.get("background"),
            "element_count": len(s.get("elements", [])),
            "elements_preview": [
                {"id": e.get("id"), "type": e.get("type"), "content": (e.get("content", "")[:50] if isinstance(e.get("content"), str) else "")}
                for e in s.get("elements", [])[:5]
            ],
        })

    selected = context.get("selected_slide_index")
    selected_text = f"선택된 슬라이드: {selected}번 (0부터 시작)" if selected is not None else "선택된 슬라이드: 없음"

    messages.append({
        "role": "user",
        "content": f"""현재 슬라이드 요약 ({len(current_slides)}개):
{json.dumps(slides_summary, ensure_ascii=False)}

{selected_text}

수정 요청: {message}

⚠️ 중요: 변경/추가된 슬라이드만 반환하세요. 변경 없는 슬라이드는 포함하지 마세요.
응답은 반드시 JSON 형식으로 해주세요."""
    })

    full_text = ""

    stream_kwargs: dict = {
        "model": SLIDE_DESIGN_MODEL,
        "max_tokens": 16000,
        "system": SYSTEM_PROMPT,
        "messages": messages,
    }
    if thinking:
        stream_kwargs["thinking"] = {"type": "adaptive"}

    async with client.messages.stream(**stream_kwargs) as stream:
        async for event in stream:
            try:
                if event.type == "content_block_start":
                    block_type = getattr(event.content_block, 'type', None)
                    if block_type == "thinking":
                        yield f"data: {json.dumps({'type': 'thinking_start'})}\n\n"
                    elif block_type == "text":
                        yield f"data: {json.dumps({'type': 'text_start'})}\n\n"
                elif event.type == "content_block_delta":
                    delta = event.delta
                    delta_type = getattr(delta, 'type', None)
                    if delta_type == "thinking_delta":
                        yield f"data: {json.dumps({'type': 'thinking', 'content': delta.thinking})}\n\n"
                    elif delta_type == "text_delta":
                        full_text += delta.text
                        yield f"data: {json.dumps({'type': 'text', 'content': delta.text})}\n\n"
            except Exception as ex:
                import sys
                print(f"[STREAM_EVENT_ERROR] {ex}", file=sys.stderr)
                continue

    try:
        result = _extract_json(full_text)

        # Build response — handle both old format (updated_slides) and new format (changed_slides/new_slides)
        response_data: dict = {
            "type": "result",
            "ai_message": result.get("ai_message", "수정했어요."),
        }

        if "changed_slides" in result:
            changed = result["changed_slides"]
            # changed_slides is {index_str: slide_obj}
            normalized = {}
            for idx_str, slide in changed.items():
                normalized[idx_str] = _normalize_slides([slide])[0] if slide else slide
            response_data["changed_slides"] = normalized

        if "new_slides" in result:
            response_data["new_slides"] = _normalize_slides(result["new_slides"])

        if "delete_indices" in result:
            response_data["delete_indices"] = result["delete_indices"]

        # Backward compat: if AI still returns updated_slides
        if "updated_slides" in result:
            response_data["updated_slides"] = _normalize_slides(result["updated_slides"])

        yield f"data: {json.dumps(response_data, ensure_ascii=False)}\n\n"
    except Exception as e:
        import sys
        print(f"[AI_DEBUG] JSON parse failed. Length={len(full_text)}, first200={full_text[:200]}", file=sys.stderr)
        yield f"data: {json.dumps({'type': 'error', 'message': f'JSON 파싱 실패: {str(e)}. 텍스트 길이: {len(full_text)}'}, ensure_ascii=False)}\n\n"

    yield "data: [DONE]\n\n"


# ──────────────────────────────────────
# Non-streaming (kept for backward compatibility)
# ──────────────────────────────────────

async def generate_slides(script_text: str, style_preset: str = "modern") -> dict:
    client = _get_client()
    style_guidance = {
        "modern": "깔끔하고 모던한 디자인.",
        "bold": "대담하고 강렬한 디자인.",
        "minimal": "최소한의 요소만 사용.",
        "dark": "어두운 배경(#191f28) 위에 밝은 텍스트.",
    }.get(style_preset, "깔끔하고 모던한 디자인.")

    response = client.messages.create(
        model=SLIDE_DESIGN_MODEL,
        max_tokens=32000,
        system=SYSTEM_PROMPT,
        messages=[{
            "role": "user",
            "content": f"다음 스크립트를 분석해서 슬라이드 JSON을 생성해주세요.\n\n스타일: {style_guidance}\n\n스크립트:\n{script_text}\n\n각 슬라이드에는 핵심 메시지 하나만 넣고, 적절한 애니메이션과 트랜지션을 설정해주세요.\n응답은 반드시 JSON 형식으로 해주세요."
        }]
    )
    text = response.content[0].text
    result = _extract_json(text)
    slides = _normalize_slides(result.get("slides", []))
    return {
        "slides": slides,
        "ai_message": result.get("ai_message", f"{len(slides)}개 슬라이드를 생성했어요."),
    }


async def chat_edit(message: str, context: dict) -> dict:
    client = _get_client()
    messages = []
    for msg in context.get("chat_history", [])[-10:]:
        messages.append({"role": msg["role"], "content": msg["content"]})

    current_slides_json = json.dumps(context.get("current_slides", []), ensure_ascii=False, indent=2)
    selected = context.get("selected_slide_index")
    selected_text = f"선택된 슬라이드: {selected}번" if selected is not None else "선택된 슬라이드: 없음"

    messages.append({
        "role": "user",
        "content": f"현재 슬라이드 상태:\n{current_slides_json}\n\n{selected_text}\n\n수정 요청: {message}\n\n변경된 슬라이드를 포함한 전체 슬라이드 배열을 updated_slides로 반환해주세요.\n변경된 슬라이드의 인덱스를 changed_indices로 알려주세요.\n응답은 반드시 JSON 형식으로 해주세요."
    })

    response = client.messages.create(
        model=SLIDE_DESIGN_MODEL, max_tokens=32000, system=SYSTEM_PROMPT, messages=messages,
    )
    text = response.content[0].text
    result = _extract_json(text)
    updated_slides = _normalize_slides(result.get("updated_slides", []))
    return {
        "updated_slides": updated_slides,
        "changed_indices": result.get("changed_indices", []),
        "ai_message": result.get("ai_message", "수정했어요."),
        "diff": result.get("diff", {}),
    }
