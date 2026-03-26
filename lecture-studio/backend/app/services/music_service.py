"""ElevenLabs Music 생성 서비스
- Eleven Music API로 배경음악 생성
- 영상 길이에 맞게 음악 길이 조절
"""

import os
import uuid
from typing import Optional

from elevenlabs.client import ElevenLabs

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY", "")
DATA_DIR = os.getenv("DATA_DIR", "./data")
MEDIA_DIR = os.getenv("MEDIA_DIR", os.path.join(DATA_DIR, "media"))


def get_client() -> ElevenLabs:
    if not ELEVENLABS_API_KEY:
        raise ValueError("ELEVENLABS_API_KEY가 설정되지 않았습니다")
    return ElevenLabs(api_key=ELEVENLABS_API_KEY)


async def generate_bgm(
    prompt: str,
    duration_ms: int = 30000,
    project_id: Optional[str] = None,
) -> dict:
    """배경음악 생성

    Args:
        prompt: 음악 설명 프롬프트
        duration_ms: 음악 길이 (ms)
        project_id: 프로젝트 ID

    Returns:
        {"url": "/static/media/bgm/...", "duration_ms": ..., "prompt": ...}
    """
    client = get_client()

    print(f"  [Music] Generating {duration_ms/1000:.0f}s BGM...")

    track = client.music.compose(
        prompt=prompt,
        music_length_ms=duration_ms,
    )

    # 저장
    filename = f"bgm_{uuid.uuid4().hex[:8]}.mp3"
    save_dir = os.path.join(MEDIA_DIR, "bgm")
    if project_id:
        save_dir = os.path.join(save_dir, project_id)
    os.makedirs(save_dir, exist_ok=True)

    save_path = os.path.join(save_dir, filename)
    with open(save_path, "wb") as f:
        for chunk in track:
            f.write(chunk)

    file_size = os.path.getsize(save_path)
    rel_path = os.path.relpath(save_path, os.path.dirname(MEDIA_DIR)).replace("\\", "/")
    static_url = f"/static/{rel_path}"

    print(f"  [Music] Done: {save_path} ({file_size/1024:.0f}KB)")

    return {
        "url": static_url,
        "path": save_path,
        "filename": filename,
        "duration_ms": duration_ms,
        "prompt": prompt,
        "file_size": file_size,
    }
