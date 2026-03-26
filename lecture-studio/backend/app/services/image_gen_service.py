"""Google AI Studio (Gemini) 이미지 생성 서비스
- gemini-3.1-flash-image-preview (Nano Banana 2) 사용
- 16:9, 9:16 비율 지원, 2K 해상도
- 이미지 레퍼런스(참고 이미지) 지원
- 생성된 이미지를 저장하고 URL 반환
"""

import os
import uuid
from io import BytesIO
from typing import Optional
from PIL import Image

from google import genai
from google.genai import types

GOOGLE_AI_API_KEY = os.getenv("GOOGLE_AI_API_KEY", "")
DATA_DIR = os.getenv("DATA_DIR", "./data")
MEDIA_DIR = os.getenv("MEDIA_DIR", os.path.join(DATA_DIR, "media"))

# 기본 모델 — Nano Banana 2
DEFAULT_MODEL = "gemini-3.1-flash-image-preview"


def get_client() -> genai.Client:
    """Google GenAI 클라이언트 생성"""
    if not GOOGLE_AI_API_KEY:
        raise ValueError("GOOGLE_AI_API_KEY가 설정되지 않았습니다")
    return genai.Client(api_key=GOOGLE_AI_API_KEY)


async def generate_image(
    prompt: str,
    aspect_ratio: str = "16:9",
    reference_image_path: Optional[str] = None,
    model: Optional[str] = None,
    project_id: Optional[str] = None,
) -> dict:
    """이미지 생성 → 저장 → URL 반환

    Args:
        prompt: 이미지 설명 프롬프트
        aspect_ratio: "16:9" 또는 "9:16"
        reference_image_path: 참고 이미지 파일 경로 (선택)
        model: 모델 ID (None이면 기본 모델)
        project_id: 프로젝트 ID (저장 경로용)

    Returns:
        {"url": "/static/media/generated/...", "path": "...", "prompt": prompt}
    """
    client = get_client()
    use_model = model or DEFAULT_MODEL

    # 요청 콘텐츠 구성
    contents: list = [prompt]

    # 참고 이미지가 있으면 추가
    if reference_image_path and os.path.exists(reference_image_path):
        ref_image = Image.open(reference_image_path)
        contents.append(ref_image)

    # 생성 설정
    config = types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"],
    )

    # API 호출 (동기 — FastAPI에서는 run_in_executor로 감싸도 됨)
    response = client.models.generate_content(
        model=use_model,
        contents=contents,
        config=config,
    )

    # 응답에서 이미지 추출
    generated_image = None
    response_text = ""

    for part in response.candidates[0].content.parts:
        if part.text is not None:
            response_text = part.text
        elif part.inline_data is not None:
            # PIL Image로 변환
            image_bytes = part.inline_data.data
            mime = part.inline_data.mime_type or "image/png"
            generated_image = Image.open(BytesIO(image_bytes))

    if generated_image is None:
        raise RuntimeError(f"이미지 생성 실패. 응답 텍스트: {response_text[:200]}")

    # 이미지 저장
    filename = f"{uuid.uuid4().hex[:12]}.png"
    save_dir = os.path.join(MEDIA_DIR, "generated")
    if project_id:
        save_dir = os.path.join(save_dir, project_id)
    os.makedirs(save_dir, exist_ok=True)

    save_path = os.path.join(save_dir, filename)
    generated_image.save(save_path, "PNG")

    # Static URL 생성
    rel_path = os.path.relpath(save_path, os.path.dirname(MEDIA_DIR)).replace("\\", "/")
    static_url = f"/static/{rel_path}"

    return {
        "url": static_url,
        "path": save_path,
        "filename": filename,
        "prompt": prompt,
        "aspect_ratio": aspect_ratio,
        "model": use_model,
        "response_text": response_text,
        "width": generated_image.width,
        "height": generated_image.height,
    }


async def generate_slide_images(
    prompts: list[dict],
    aspect_ratio: str = "16:9",
    reference_image_path: Optional[str] = None,
    model: Optional[str] = None,
    project_id: Optional[str] = None,
) -> list[dict]:
    """여러 슬라이드용 이미지를 순차적으로 생성

    Args:
        prompts: [{"slide_index": 0, "prompt": "..."}, ...]
        aspect_ratio: "16:9" 또는 "9:16"
        reference_image_path: 참고 이미지 경로 (모든 슬라이드에 적용)
        model: 모델 ID
        project_id: 프로젝트 ID

    Returns:
        [{"slide_index": 0, "url": "...", "prompt": "..."}, ...]
    """
    results = []

    for item in prompts:
        slide_index = item.get("slide_index", 0)
        prompt = item.get("prompt", "")
        # 개별 슬라이드에 참고 이미지를 지정할 수도 있음
        ref_path = item.get("reference_image") or reference_image_path

        if not prompt:
            results.append({"slide_index": slide_index, "url": None, "error": "빈 프롬프트"})
            continue

        print(f"  [ImageGen] Slide {slide_index + 1}: {prompt[:50]}...")

        try:
            result = await generate_image(
                prompt=prompt,
                aspect_ratio=aspect_ratio,
                reference_image_path=ref_path,
                model=model,
                project_id=project_id,
            )
            results.append({
                "slide_index": slide_index,
                "url": result["url"],
                "prompt": prompt,
                "filename": result["filename"],
                "width": result["width"],
                "height": result["height"],
            })
        except Exception as e:
            print(f"  [ImageGen] Error: {e}")
            results.append({"slide_index": slide_index, "url": None, "error": str(e)})

    return results
