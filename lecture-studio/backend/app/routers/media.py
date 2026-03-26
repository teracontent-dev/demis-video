from fastapi import APIRouter, UploadFile, File, HTTPException
from app.models.schemas import MediaUploadResponse
import os
import uuid
import shutil

router = APIRouter()

MEDIA_DIR = os.getenv("MEDIA_DIR", "./data/media")


@router.post("/upload", response_model=MediaUploadResponse)
async def upload_media(file: UploadFile = File(...)):
    if not file.content_type:
        raise HTTPException(400, "파일 타입을 확인할 수 없어요")

    if file.content_type.startswith("image/"):
        media_type = "image"
    elif file.content_type.startswith("video/"):
        media_type = "video"
    else:
        raise HTTPException(400, "이미지 또는 영상 파일만 업로드할 수 있어요")

    media_id = str(uuid.uuid4())
    ext = os.path.splitext(file.filename or "")[1] or ".bin"
    filename = f"{media_id}{ext}"
    filepath = os.path.join(MEDIA_DIR, filename)

    os.makedirs(MEDIA_DIR, exist_ok=True)
    with open(filepath, "wb") as f:
        shutil.copyfileobj(file.file, f)

    return MediaUploadResponse(
        id=media_id,
        url=f"/api/media/{media_id}",
        original_name=file.filename or "unknown",
        type=media_type,
    )


@router.get("/{media_id}")
async def get_media(media_id: str):
    from fastapi.responses import FileResponse

    for fname in os.listdir(MEDIA_DIR):
        if fname.startswith(media_id):
            return FileResponse(os.path.join(MEDIA_DIR, fname))
    raise HTTPException(404, "미디어를 찾을 수 없어요")
