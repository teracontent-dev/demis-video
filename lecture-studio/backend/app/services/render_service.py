import asyncio
import json
import os
import subprocess
import shutil
from pathlib import Path
from typing import AsyncGenerator
from dataclasses import dataclass

DATA_DIR = os.getenv("DATA_DIR", "./data")
RENDERS_DIR = os.getenv("RENDERS_DIR", os.path.join(DATA_DIR, "renders"))

FFMPEG_PRESETS = {
    "draft": {"crf": "28", "preset": "ultrafast", "fps": 24},
    "standard": {"crf": "20", "preset": "medium", "fps": 30},
    "high": {"crf": "18", "preset": "slow", "fps": 60},
    "ultra": {"crf": "18", "preset": "slow", "fps": 30},
}


@dataclass
class RenderProgress:
    phase: str  # "capturing" | "encoding" | "muxing" | "done" | "error"
    percent: int = 0
    frame: int = 0
    total: int = 0
    eta: float = 0
    message: str = ""
    output: str = ""


class VideoRenderer:
    def __init__(self, project_id: str, project_data: dict, preset: str = "standard"):
        self.project_id = project_id
        self.project_data = project_data
        self.preset = preset
        self.render_dir = os.path.join(RENDERS_DIR, project_id)
        self.frames_dir = os.path.join(self.render_dir, "frames")
        self.project_json_path = os.path.join(self.render_dir, "project.json")
        self.video_path = os.path.join(self.render_dir, "video.mp4")
        self.final_path = os.path.join(self.render_dir, "final.mp4")

    async def render_stream(self) -> AsyncGenerator[RenderProgress, None]:
        """Full render pipeline with progress streaming."""
        os.makedirs(self.frames_dir, exist_ok=True)

        # Save project JSON for render worker
        with open(self.project_json_path, "w", encoding="utf-8") as f:
            json.dump(self.project_data, f, ensure_ascii=False)

        # Phase 1: Capture frames
        async for progress in self._capture_frames():
            yield progress

        # Phase 2: Encode video
        async for progress in self._encode_video():
            yield progress

        # Phase 3: Mux audio (if audio tracks exist)
        audio_tracks = self.project_data.get("timeline", {}).get("audio_tracks", [])
        if audio_tracks:
            async for progress in self._mux_audio():
                yield progress
        else:
            # No audio, just copy video to final
            shutil.copy2(self.video_path, self.final_path)

        # Clean up frames
        shutil.rmtree(self.frames_dir, ignore_errors=True)

        yield RenderProgress(
            phase="done",
            percent=100,
            output=f"/api/renders/{self.project_id}/final.mp4",
        )

    async def _capture_frames(self) -> AsyncGenerator[RenderProgress, None]:
        """Run Puppeteer render worker to capture frames."""
        render_worker_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
            "..", "render-worker", "render-worker.js"
        )

        fps = FFMPEG_PRESETS[self.preset]["fps"]

        cmd = [
            "node", render_worker_path,
            self.project_json_path,
            self.frames_dir,
            str(fps),
            self.preset,
        ]

        process = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )

        async for line in process.stdout:
            line_text = line.decode().strip()
            if not line_text:
                continue
            try:
                data = json.loads(line_text)
                if data.get("phase") == "capturing":
                    yield RenderProgress(
                        phase="capturing",
                        percent=data.get("percent", 0),
                        frame=data.get("frame", 0),
                        total=data.get("totalFrames", 0),
                    )
                elif data.get("error"):
                    yield RenderProgress(
                        phase="error",
                        message=data["error"],
                    )
            except json.JSONDecodeError:
                pass

        await process.wait()

        if process.returncode != 0:
            stderr = await process.stderr.read()
            yield RenderProgress(
                phase="error",
                message=f"프레임 캡처 실패: {stderr.decode()[:500]}",
            )

    async def _encode_video(self) -> AsyncGenerator[RenderProgress, None]:
        """Encode PNG frames to H.264 MP4 using FFmpeg."""
        yield RenderProgress(phase="encoding", percent=0)

        preset_config = FFMPEG_PRESETS[self.preset]
        fps = preset_config["fps"]

        cmd = [
            "ffmpeg", "-y",
            "-framerate", str(fps),
            "-i", os.path.join(self.frames_dir, "frame_%06d.png"),
            "-c:v", "libx264",
            "-preset", preset_config["preset"],
            "-crf", preset_config["crf"],
            "-pix_fmt", "yuv420p",
            "-movflags", "+faststart",
            self.video_path,
        ]

        process = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )

        await process.wait()

        if process.returncode != 0:
            stderr = await process.stderr.read()
            yield RenderProgress(
                phase="error",
                message=f"인코딩 실패: {stderr.decode()[:500]}",
            )
        else:
            yield RenderProgress(phase="encoding", percent=100)

    async def _mux_audio(self) -> AsyncGenerator[RenderProgress, None]:
        """Mux audio tracks with video."""
        yield RenderProgress(phase="muxing", percent=0)

        # For now, simple audio mux if there's a single audio file
        audio_tracks = self.project_data.get("timeline", {}).get("audio_tracks", [])
        if not audio_tracks:
            shutil.copy2(self.video_path, self.final_path)
            yield RenderProgress(phase="muxing", percent=100)
            return

        # Use first audio track for now
        audio_src = audio_tracks[0].get("src", "")
        audio_path = os.path.join(DATA_DIR, audio_src.lstrip("/"))

        if os.path.exists(audio_path):
            cmd = [
                "ffmpeg", "-y",
                "-i", self.video_path,
                "-i", audio_path,
                "-c:v", "copy",
                "-c:a", "aac",
                "-b:a", "192k",
                "-shortest",
                self.final_path,
            ]

            process = await asyncio.create_subprocess_exec(
                *cmd,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            await process.wait()

            if process.returncode != 0:
                # Fallback: just use video without audio
                shutil.copy2(self.video_path, self.final_path)
        else:
            # No audio file found, use video only
            shutil.copy2(self.video_path, self.final_path)

        yield RenderProgress(phase="muxing", percent=100)
