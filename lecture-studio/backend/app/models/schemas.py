from pydantic import BaseModel, Field
from typing import Optional, Literal, Any
from datetime import datetime
import uuid


def gen_id() -> str:
    return str(uuid.uuid4())


# === Animation ===
class AnimationConfig(BaseModel):
    type: str = "fadeIn"
    duration: int = 500  # ms
    delay: int = 0
    easing: str = "ease-out"


# === Media ===
class MediaRef(BaseModel):
    id: str = Field(default_factory=gen_id)
    type: Literal["image", "video"]
    src: str
    thumbnail: Optional[str] = None
    original_name: str = ""


# === Slide Element ===
class ElementPosition(BaseModel):
    x: float = 0
    y: float = 0
    width: float = 400
    height: float = 200


class SlideElement(BaseModel):
    id: str = Field(default_factory=gen_id)
    type: Literal["text", "image", "video", "shape"]
    position: ElementPosition = Field(default_factory=ElementPosition)
    rotation: float = 0
    opacity: float = 1.0
    z_index: int = 0
    style: dict[str, Any] = Field(default_factory=dict)
    content: str | dict = ""
    animation: dict[str, Any] = Field(default_factory=lambda: {
        "enter": {"type": "fadeIn", "duration": 500, "delay": 0, "easing": "ease-out"}
    })


# === Slide ===
class SlideBackground(BaseModel):
    type: Literal["solid", "gradient", "image"] = "solid"
    value: str = "#FFFFFF"


class SlideTransition(BaseModel):
    type: Literal[
        "none", "fade", "slide-left", "slide-right", "slide-up",
        "wipe-left", "wipe-right", "scale", "dissolve", "morph"
    ] = "fade"
    duration: int = 500
    easing: str = "ease-out"


class Slide(BaseModel):
    id: str = Field(default_factory=gen_id)
    order: int = 0
    duration: int = 5000  # ms
    background: SlideBackground = Field(default_factory=SlideBackground)
    elements: list[SlideElement] = Field(default_factory=list)
    transition: SlideTransition = Field(default_factory=SlideTransition)
    notes: str = ""


# === Timeline ===
class AudioTrack(BaseModel):
    id: str = Field(default_factory=gen_id)
    type: Literal["tts", "bgm", "recording"]
    src: str
    start_time: int = 0
    duration: int = 0
    volume: float = 1.0


class SubtitleCue(BaseModel):
    id: str = Field(default_factory=gen_id)
    start_time: int  # ms
    end_time: int  # ms
    text: str
    slide_index: Optional[int] = None


class SlideNarration(BaseModel):
    """내레이션 텍스트와 슬라이드 매칭 정보"""
    slide_index: int
    text: str
    start_time: int = 0  # ms — 전체 오디오에서의 시작 시각
    end_time: int = 0  # ms
    audio_file: Optional[str] = None  # 개별 슬라이드 오디오 파일 경로


class Narration(BaseModel):
    """프로젝트 전체 내레이션 데이터"""
    voice_id: str = ""
    model_id: str = "eleven_v3"
    segments: list[SlideNarration] = Field(default_factory=list)
    audio_url: Optional[str] = None  # 합쳐진 최종 오디오
    subtitles: list[SubtitleCue] = Field(default_factory=list)
    generated_at: Optional[str] = None


class Timeline(BaseModel):
    total_duration: int = 0
    audio_tracks: list[AudioTrack] = Field(default_factory=list)
    subtitle_track: list[SubtitleCue] = Field(default_factory=list)


# === Chat ===
class SlideChanges(BaseModel):
    changed_indices: list[int] = Field(default_factory=list)
    previous_state: list[Slide] = Field(default_factory=list)
    diff: dict[str, Any] = Field(default_factory=dict)


class ChatMessage(BaseModel):
    id: str = Field(default_factory=gen_id)
    role: Literal["user", "assistant"]
    content: str
    timestamp: str = Field(default_factory=lambda: datetime.now().isoformat())
    slide_changes: Optional[SlideChanges] = None


# === Project ===
class ProjectSettings(BaseModel):
    resolution: tuple[int, int] = (1920, 1080)
    fps: int = 30
    font_family: str = "Pretendard Variable"
    export_preset: Literal["draft", "standard", "high", "ultra"] = "standard"


class Project(BaseModel):
    id: str = Field(default_factory=gen_id)
    title: str = "새 프로젝트"
    created_at: str = Field(default_factory=lambda: datetime.now().isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now().isoformat())
    settings: ProjectSettings = Field(default_factory=ProjectSettings)
    script: dict = Field(default_factory=lambda: {"type": "doc", "content": []})
    slides: list[Slide] = Field(default_factory=list)
    timeline: Timeline = Field(default_factory=Timeline)
    narration: Optional[Narration] = None
    chat_history: list[ChatMessage] = Field(default_factory=list)


# === API Request/Response ===
class CreateProjectRequest(BaseModel):
    title: str = "새 프로젝트"


class GenerateSlidesRequest(BaseModel):
    script_text: str
    style_preset: str = "modern"
    thinking: bool = False


class ChatEditRequest(BaseModel):
    project_id: str
    message: str
    thinking: bool = False
    context: dict[str, Any] = Field(default_factory=dict)


class MediaUploadResponse(BaseModel):
    id: str
    url: str
    thumbnail: Optional[str] = None
    original_name: str
    type: Literal["image", "video"]


class TTSRequest(BaseModel):
    project_id: str
    voice_id: str = "BB1SDpm98Oo457i5kVdG"
    model_id: str = "eleven_v3"
    speed: float = 0.7  # 0.5=느림, 1.0=기본, 기본 0.7
    segments: list[dict]  # [{slide_index: int, text: str}]


class RenderRequest(BaseModel):
    preset: Literal["draft", "standard", "high", "ultra"] = "standard"
