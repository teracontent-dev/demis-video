"""이미지 생성 라우터 — Google AI Studio (Gemini) Nano Banana 2"""

from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from pydantic import BaseModel
from typing import Optional
import os
import uuid

from app.services.image_gen_service import generate_image, generate_slide_images

router = APIRouter()

DATA_DIR = os.getenv("DATA_DIR", "./data")
MEDIA_DIR = os.getenv("MEDIA_DIR", os.path.join(DATA_DIR, "media"))


class ImageGenRequest(BaseModel):
    prompt: str
    aspect_ratio: str = "16:9"
    model: Optional[str] = None
    project_id: Optional[str] = None
    reference_image_path: Optional[str] = None


class BatchImageGenRequest(BaseModel):
    prompts: list[dict]  # [{"slide_index": 0, "prompt": "..."}]
    aspect_ratio: str = "16:9"
    model: Optional[str] = None
    project_id: Optional[str] = None
    reference_image_path: Optional[str] = None


@router.post("/generate")
async def gen_image(req: ImageGenRequest):
    """단일 이미지 생성"""
    try:
        result = await generate_image(
            prompt=req.prompt,
            aspect_ratio=req.aspect_ratio,
            reference_image_path=req.reference_image_path,
            model=req.model,
            project_id=req.project_id,
        )
        return result
    except Exception as e:
        raise HTTPException(500, str(e))


@router.post("/generate-with-reference")
async def gen_with_ref(
    prompt: str = Form(...),
    aspect_ratio: str = Form("16:9"),
    project_id: Optional[str] = Form(None),
    reference: UploadFile = File(None),
):
    """참고 이미지를 업로드해서 이미지 생성"""
    ref_path = None

    if reference and reference.filename:
        # 참고 이미지 임시 저장
        ref_dir = os.path.join(MEDIA_DIR, "references")
        os.makedirs(ref_dir, exist_ok=True)
        ref_path = os.path.join(ref_dir, f"{uuid.uuid4().hex[:8]}_{reference.filename}")
        with open(ref_path, "wb") as f:
            content = await reference.read()
            f.write(content)

    try:
        result = await generate_image(
            prompt=prompt,
            aspect_ratio=aspect_ratio,
            reference_image_path=ref_path,
            project_id=project_id,
        )
        return result
    except Exception as e:
        raise HTTPException(500, str(e))


@router.post("/generate-batch")
async def gen_batch(req: BatchImageGenRequest):
    """여러 슬라이드용 이미지 일괄 생성"""
    try:
        results = await generate_slide_images(
            prompts=req.prompts,
            aspect_ratio=req.aspect_ratio,
            reference_image_path=req.reference_image_path,
            model=req.model,
            project_id=req.project_id,
        )
        return {
            "status": "ok",
            "count": len(results),
            "images": results,
        }
    except Exception as e:
        raise HTTPException(500, str(e))
