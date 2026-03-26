"""ElevenLabs TTS 서비스 — v3 모델, with-timestamps 엔드포인트 사용"""

import os
import base64
import json
import httpx
import wave
import io
import struct
from datetime import datetime
from typing import Any

from app.models.schemas import SlideNarration, SubtitleCue, Narration


ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY", "")
ELEVENLABS_BASE = "https://api.elevenlabs.io/v1"
DATA_DIR = os.getenv("DATA_DIR", "./data")

# 슬라이드 전환 시 삽입할 무음 시간 (ms)
SILENCE_BETWEEN_SLIDES_MS = 2500


def generate_silence_mp3(duration_ms: int = 2500) -> bytes:
    """지정 길이의 무음 MP3 바이트 생성 (128kbps 기준 0바이트 프레임)"""
    # MP3 128kbps = 16000 bytes/sec
    num_bytes = int(duration_ms / 1000 * 16000)
    # 최소한의 유효 MP3 프레임 — 무음 데이터
    # 간단하게 0으로 채운 raw bytes (MP3 concat에서 무음으로 작동)
    return b'\x00' * num_bytes


def add_natural_pauses(text: str) -> str:
    """문장 사이에 자연스러운 쉼 삽입 — 과하지 않게"""
    import re
    # 마침표/물음표/느낌표 + 공백 뒤에 짧은 쉼 (한 번만)
    # ElevenLabs는 줄바꿈을 자연스러운 pause로 처리함
    text = re.sub(r'([.?!])\s+', r'\1\n', text)
    return text


async def generate_segment_audio(
    text: str,
    voice_id: str,
    model_id: str = "eleven_v3",
    speed: float = 0.7,
) -> dict[str, Any]:
    """단일 세그먼트 TTS 생성 — 타임스탬프 포함, 속도 조절"""
    url = f"{ELEVENLABS_BASE}/text-to-speech/{voice_id}/with-timestamps"

    # 문장 사이 자연스러운 쉼 삽입
    processed_text = add_natural_pauses(text)

    payload = {
        "text": processed_text,
        "model_id": model_id,
        "output_format": "mp3_44100_128",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75,
            "style": 0.0,
            "speed": speed,
            "use_speaker_boost": True,
        },
    }

    headers = {
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY,
    }

    async with httpx.AsyncClient(timeout=120.0) as client:
        resp = await client.post(url, json=payload, headers=headers)
        resp.raise_for_status()
        return resp.json()


def alignment_to_subtitles(
    alignment: dict,
    time_offset_ms: int = 0,
    slide_index: int = 0,
    max_chars: int = 40,
) -> list[dict]:
    """ElevenLabs alignment 데이터를 자막 큐 리스트로 변환.

    글자 단위 타임스탬프를 단어/구문 단위로 묶어서 자막을 만든다.
    """
    chars = alignment.get("characters", [])
    starts = alignment.get("character_start_times_seconds", [])
    ends = alignment.get("character_end_times_seconds", [])

    if not chars or not starts or not ends:
        return []

    subtitles = []
    current_text = ""
    current_start = None
    current_end = None

    for i, ch in enumerate(chars):
        if current_start is None:
            current_start = starts[i]

        current_text += ch
        current_end = ends[i]

        # 자막 끊기 조건: 마침표/물음표/느낌표 뒤 또는 글자 수 초과 시 공백에서
        is_sentence_end = ch in (".", "?", "!", "。") and i < len(chars) - 1
        is_long_at_space = len(current_text) >= max_chars and ch == " "
        is_comma_break = ch in (",", "，") and len(current_text) >= 20
        is_last = i == len(chars) - 1

        if is_sentence_end or is_long_at_space or is_comma_break or is_last:
            text = current_text.strip()
            if text:
                subtitles.append({
                    "start_time": int(current_start * 1000) + time_offset_ms,
                    "end_time": int(current_end * 1000) + time_offset_ms,
                    "text": text,
                    "slide_index": slide_index,
                })
            current_text = ""
            current_start = None
            current_end = None

    return subtitles


def get_audio_duration_from_base64(audio_b64: str) -> float:
    """base64 MP3 데이터에서 대략적 재생 시간 추정 (바이트 기반).
    정확한 값은 alignment 데이터에서 가져온다."""
    audio_bytes = base64.b64decode(audio_b64)
    # MP3 128kbps → 16000 bytes/sec
    return len(audio_bytes) / 16000.0


async def generate_narration(
    segments: list[dict],
    voice_id: str,
    model_id: str,
    project_id: str,
    speed: float = 0.7,
) -> Narration:
    """전체 내레이션 생성 — 세그먼트별 TTS 호출 후 합치기"""

    audio_dir = os.path.join(DATA_DIR, "media", "tts", project_id)
    os.makedirs(audio_dir, exist_ok=True)

    narration_segments: list[SlideNarration] = []
    all_subtitles: list[SubtitleCue] = []
    all_audio_bytes: list[bytes] = []
    current_offset_ms = 0

    for seg in segments:
        slide_index = seg["slide_index"]
        text = seg["text"].strip()

        if not text:
            narration_segments.append(SlideNarration(
                slide_index=slide_index,
                text="",
                start_time=current_offset_ms,
                end_time=current_offset_ms,
            ))
            continue

        print(f"  [TTS] Slide {slide_index + 1}: {text[:50]}...")

        # ElevenLabs 호출 (speed로 속도 조절)
        result = await generate_segment_audio(text, voice_id, model_id, speed=speed)

        audio_b64 = result.get("audio_base64", "")
        alignment = result.get("alignment", {})

        # 오디오 저장
        audio_bytes = base64.b64decode(audio_b64)
        segment_file = os.path.join(audio_dir, f"slide_{slide_index:02d}.mp3")
        with open(segment_file, "wb") as f:
            f.write(audio_bytes)

        all_audio_bytes.append(audio_bytes)

        # 세그먼트 duration 계산 (alignment 기반)
        char_ends = alignment.get("character_end_times_seconds", [])
        if char_ends:
            segment_duration_ms = int(max(char_ends) * 1000)
        else:
            segment_duration_ms = int(get_audio_duration_from_base64(audio_b64) * 1000)

        # 자막 생성
        subs = alignment_to_subtitles(
            alignment,
            time_offset_ms=current_offset_ms,
            slide_index=slide_index,
        )

        for sub_data in subs:
            all_subtitles.append(SubtitleCue(
                start_time=sub_data["start_time"],
                end_time=sub_data["end_time"],
                text=sub_data["text"],
                slide_index=sub_data["slide_index"],
            ))

        narration_segments.append(SlideNarration(
            slide_index=slide_index,
            text=text,
            start_time=current_offset_ms,
            end_time=current_offset_ms + segment_duration_ms,
            audio_file=f"/static/media/tts/{project_id}/slide_{slide_index:02d}.mp3",
        ))

        current_offset_ms += segment_duration_ms

        # (무음 삽입 없음 — MP3 concat seek 호환성 유지)

    # 전체 오디오 합치기 (MP3 concat)
    combined_path = os.path.join(audio_dir, "narration_full.mp3")
    with open(combined_path, "wb") as f:
        for chunk in all_audio_bytes:
            f.write(chunk)

    combined_url = f"/static/media/tts/{project_id}/narration_full.mp3"

    narration = Narration(
        voice_id=voice_id,
        model_id=model_id,
        segments=narration_segments,
        audio_url=combined_url,
        subtitles=all_subtitles,
        generated_at=datetime.now().isoformat(),
    )

    return narration
