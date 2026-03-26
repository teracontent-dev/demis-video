"""TTS 라우터 — ElevenLabs 음성 생성 + 자막 + 슬라이드 타이밍"""

from fastapi import APIRouter, HTTPException
import os
import json

from app.models.schemas import TTSRequest, AudioTrack
from app.services.tts_service import generate_narration

router = APIRouter()

DATA_DIR = os.getenv("DATA_DIR", "./data")


def _load_project(project_id: str) -> dict:
    path = os.path.join(DATA_DIR, "projects", project_id, "project.json")
    if not os.path.exists(path):
        raise HTTPException(404, "프로젝트를 찾을 수 없어요")
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def _save_project(project_id: str, data: dict):
    path = os.path.join(DATA_DIR, "projects", project_id, "project.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


@router.post("/generate")
async def generate_tts(req: TTSRequest):
    """내레이션 TTS 생성 — 슬라이드별 세그먼트로 분할 호출"""

    project = _load_project(req.project_id)

    print(f"[TTS] Starting narration generation for project {req.project_id}")
    print(f"[TTS] Voice: {req.voice_id}, Model: {req.model_id}, Speed: {req.speed}")
    print(f"[TTS] Segments: {len(req.segments)}")

    narration = await generate_narration(
        segments=req.segments,
        voice_id=req.voice_id,
        model_id=req.model_id,
        project_id=req.project_id,
        speed=req.speed,
    )

    # 프로젝트에 narration 저장
    project["narration"] = narration.model_dump()

    # 슬라이드 duration 업데이트 (내레이션 길이에 맞게)
    slides = project.get("slides", [])
    for seg in narration.segments:
        idx = seg.slide_index
        if idx < len(slides):
            seg_duration = seg.end_time - seg.start_time
            if seg_duration > 0:
                # 내레이션 길이 + 여유 1초
                slides[idx]["duration"] = seg_duration + 1000

    # timeline에 오디오 트랙 추가
    timeline = project.get("timeline", {})
    timeline["audio_tracks"] = [
        AudioTrack(
            type="tts",
            src=narration.audio_url,
            start_time=0,
            duration=narration.segments[-1].end_time if narration.segments else 0,
            volume=1.0,
        ).model_dump()
    ]
    timeline["total_duration"] = narration.segments[-1].end_time if narration.segments else 0
    timeline["subtitle_track"] = [s.model_dump() for s in narration.subtitles]
    project["timeline"] = timeline

    _save_project(req.project_id, project)

    return {
        "status": "ok",
        "audio_url": narration.audio_url,
        "total_duration_ms": narration.segments[-1].end_time if narration.segments else 0,
        "segments_count": len(narration.segments),
        "subtitles_count": len(narration.subtitles),
    }


@router.get("/narration/{project_id}")
async def get_narration(project_id: str):
    """프로젝트의 내레이션 데이터 조회"""
    project = _load_project(project_id)
    narration = project.get("narration")
    if not narration:
        raise HTTPException(404, "내레이션이 없어요")
    return narration
