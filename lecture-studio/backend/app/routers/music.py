"""배경음악 생성 라우터 — ElevenLabs Music API"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
import json
import os

from app.services.music_service import generate_bgm

router = APIRouter()

DATA_DIR = os.getenv("DATA_DIR", "./data")


class MusicGenRequest(BaseModel):
    prompt: str
    duration_ms: int = 30000
    project_id: Optional[str] = None


class AutoBGMRequest(BaseModel):
    """프로젝트 narration 길이에 맞춰 자동 BGM 생성"""
    project_id: str
    prompt: str = "Gentle, warm Korean traditional inspired background music with soft gayageum and ambient pads. Calm and scholarly atmosphere, suitable for educational narration."


@router.post("/generate")
async def gen_music(req: MusicGenRequest):
    """배경음악 생성"""
    try:
        result = await generate_bgm(
            prompt=req.prompt,
            duration_ms=req.duration_ms,
            project_id=req.project_id,
        )
        return result
    except Exception as e:
        raise HTTPException(500, str(e))


@router.post("/auto-bgm")
async def auto_bgm(req: AutoBGMRequest):
    """프로젝트 narration 길이에 맞춰 자동 BGM 생성 + 프로젝트에 삽입"""
    proj_path = os.path.join(DATA_DIR, "projects", req.project_id, "project.json")
    if not os.path.exists(proj_path):
        raise HTTPException(404, "프로젝트를 찾을 수 없어요")

    with open(proj_path, encoding="utf-8") as f:
        project = json.load(f)

    # narration 또는 slide duration에서 총 길이 계산
    narr = project.get("narration")
    if narr and narr.get("segments"):
        total_ms = narr["segments"][-1].get("end_time", 0)
    else:
        total_ms = sum(s.get("duration", 5000) for s in project.get("slides", []))

    if total_ms <= 0:
        raise HTTPException(400, "프로젝트에 슬라이드나 내레이션이 없어요")

    print(f"[Music] Auto BGM for project {req.project_id}, duration={total_ms/1000:.0f}s")

    try:
        result = await generate_bgm(
            prompt=req.prompt,
            duration_ms=total_ms,
            project_id=req.project_id,
        )
    except Exception as e:
        raise HTTPException(500, f"음악 생성 실패: {e}")

    # 프로젝트 timeline에 BGM 트랙 추가
    timeline = project.get("timeline", {})
    audio_tracks = timeline.get("audio_tracks", [])

    # 기존 BGM 제거
    audio_tracks = [t for t in audio_tracks if t.get("type") != "bgm"]

    audio_tracks.append({
        "id": "bgm-auto",
        "type": "bgm",
        "src": result["url"],
        "start_time": 0,
        "duration": total_ms,
        "volume": 0.15,  # 내레이션보다 작게
    })

    timeline["audio_tracks"] = audio_tracks
    project["timeline"] = timeline

    with open(proj_path, "w", encoding="utf-8") as f:
        json.dump(project, f, ensure_ascii=False, indent=2)

    return {
        "status": "ok",
        "bgm_url": result["url"],
        "duration_ms": total_ms,
        "volume": 0.15,
    }
