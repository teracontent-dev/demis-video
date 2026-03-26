from fastapi import APIRouter, WebSocket, HTTPException, Depends
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.db import get_session, ProjectRecord
from app.models.schemas import RenderRequest
from app.services.render_service import VideoRenderer, RENDERS_DIR
import json
import os

router = APIRouter()


@router.post("/{project_id}")
async def start_render(
    project_id: str,
    req: RenderRequest,
    session: AsyncSession = Depends(get_session),
):
    # Load project data
    result = await session.execute(
        select(ProjectRecord).where(ProjectRecord.id == project_id)
    )
    record = result.scalar_one_or_none()
    if not record:
        raise HTTPException(404, "프로젝트를 찾을 수 없어요")

    with open(record.data_path, "r", encoding="utf-8") as f:
        project_data = json.load(f)

    # Start render (synchronous for now, WebSocket for progress)
    renderer = VideoRenderer(project_id, project_data, req.preset)
    final_progress = None
    async for progress in renderer.render_stream():
        final_progress = progress

    if final_progress and final_progress.phase == "error":
        raise HTTPException(500, final_progress.message)

    return {
        "status": "completed",
        "output": f"/api/renders/{project_id}/final.mp4",
    }


@router.get("/{project_id}/status")
async def render_status(project_id: str):
    render_dir = os.path.join(RENDERS_DIR, project_id)
    final_path = os.path.join(render_dir, "final.mp4")
    if os.path.exists(final_path):
        return {"status": "completed", "output": f"/api/renders/{project_id}/final.mp4"}
    return {"status": "idle"}


@router.get("s/{project_id}/final.mp4")
async def download_render(project_id: str):
    final_path = os.path.join(RENDERS_DIR, project_id, "final.mp4")
    if not os.path.exists(final_path):
        raise HTTPException(404, "렌더링 결과물을 찾을 수 없어요")
    return FileResponse(final_path, media_type="video/mp4", filename=f"{project_id}.mp4")


@router.websocket("/ws/render/{project_id}")
async def render_ws(websocket: WebSocket, project_id: str):
    await websocket.accept()

    try:
        # Receive render request
        data = await websocket.receive_json()
        preset = data.get("preset", "standard")

        # Load project
        project_json_path = os.path.join(
            os.getenv("DATA_DIR", "./data"), "projects", project_id, "project.json"
        )
        if not os.path.exists(project_json_path):
            await websocket.send_json({"phase": "error", "message": "프로젝트를 찾을 수 없어요"})
            await websocket.close()
            return

        with open(project_json_path, "r", encoding="utf-8") as f:
            project_data = json.load(f)

        renderer = VideoRenderer(project_id, project_data, preset)
        async for progress in renderer.render_stream():
            await websocket.send_json({
                "phase": progress.phase,
                "percent": progress.percent,
                "frame": progress.frame,
                "total_frames": progress.total,
                "eta_seconds": progress.eta,
                "message": progress.message,
                "output": progress.output,
            })

    except Exception as e:
        await websocket.send_json({"phase": "error", "message": str(e)})
    finally:
        try:
            await websocket.close()
        except:
            pass
