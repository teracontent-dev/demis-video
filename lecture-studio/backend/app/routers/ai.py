from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from app.models.schemas import GenerateSlidesRequest, ChatEditRequest
from app.services.ai_service import (
    generate_slides, chat_edit,
    generate_slides_stream, chat_edit_stream,
    generate_slides_cli, chat_edit_cli,
)

router = APIRouter()

SSE_HEADERS = {
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no",
}


# ── Streaming endpoints (SSE) — uses claude CLI by default, API if thinking enabled ──

@router.post("/generate-slides/stream")
async def api_generate_slides_stream(req: GenerateSlidesRequest):
    # CLI = free but slow, API = fast but costs
    if req.thinking:
        gen = generate_slides_stream(req.script_text, req.style_preset, True)
    else:
        gen = generate_slides_cli(req.script_text, req.style_preset)
    return StreamingResponse(gen, media_type="text/event-stream", headers=SSE_HEADERS)


@router.post("/chat-edit/stream")
async def api_chat_edit_stream(req: ChatEditRequest):
    if req.thinking:
        gen = chat_edit_stream(req.message, req.context, True)
    else:
        gen = chat_edit_cli(req.message, req.context)
    return StreamingResponse(gen, media_type="text/event-stream", headers=SSE_HEADERS)


# ── Non-streaming endpoints (backward compat) ──

@router.post("/generate-slides")
async def api_generate_slides(req: GenerateSlidesRequest):
    try:
        return await generate_slides(req.script_text, req.style_preset)
    except ValueError as e:
        raise HTTPException(500, str(e))
    except Exception as e:
        raise HTTPException(500, f"슬라이드 생성 중 오류가 발생했어요: {str(e)}")


@router.post("/chat-edit")
async def api_chat_edit(req: ChatEditRequest):
    try:
        return await chat_edit(req.message, req.context)
    except ValueError as e:
        raise HTTPException(500, str(e))
    except Exception as e:
        raise HTTPException(500, f"수정 중 오류가 발생했어요: {str(e)}")
