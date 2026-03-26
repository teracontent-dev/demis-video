from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
import os

load_dotenv()

from app.routers import projects, media, ai, render, tts, imagegen, music
from app.db import init_db

app = FastAPI(title="Lecture Studio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data directories
DATA_DIR = os.getenv("DATA_DIR", "./data")
MEDIA_DIR = os.getenv("MEDIA_DIR", os.path.join(DATA_DIR, "media"))
RENDERS_DIR = os.getenv("RENDERS_DIR", os.path.join(DATA_DIR, "renders"))

for d in [DATA_DIR, MEDIA_DIR, RENDERS_DIR, os.path.join(DATA_DIR, "projects")]:
    os.makedirs(d, exist_ok=True)

# Static files
app.mount("/static/media", StaticFiles(directory=MEDIA_DIR), name="media")
app.mount("/static/renders", StaticFiles(directory=RENDERS_DIR), name="renders")

# Routers
app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(media.router, prefix="/api/media", tags=["media"])
app.include_router(ai.router, prefix="/api/ai", tags=["ai"])
app.include_router(render.router, prefix="/api/render", tags=["render"])
app.include_router(tts.router, prefix="/api/tts", tags=["tts"])
app.include_router(imagegen.router, prefix="/api/imagegen", tags=["imagegen"])
app.include_router(music.router, prefix="/api/music", tags=["music"])


@app.on_event("startup")
async def startup():
    await init_db()


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.get("/api/renders/{project_id}/final.mp4")
async def download_render(project_id: str):
    final_path = os.path.join(RENDERS_DIR, project_id, "final.mp4")
    if not os.path.exists(final_path):
        raise HTTPException(404, "렌더링 결과를 찾을 수 없어요")
    return FileResponse(final_path, media_type="video/mp4")
