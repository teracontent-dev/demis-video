from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.db import get_session, ProjectRecord
from app.models.schemas import Project, CreateProjectRequest
import json
import os
from datetime import datetime

router = APIRouter()

DATA_DIR = os.getenv("DATA_DIR", "./data")


@router.get("")
async def list_projects(session: AsyncSession = Depends(get_session)):
    result = await session.execute(
        select(ProjectRecord).order_by(ProjectRecord.updated_at.desc())
    )
    records = result.scalars().all()
    projects = []
    for r in records:
        info = {
            "id": r.id,
            "title": r.title,
            "created_at": r.created_at.isoformat() if r.created_at else None,
            "updated_at": r.updated_at.isoformat() if r.updated_at else None,
            "slides": [],
            "has_narration": False,
        }
        # 프로젝트 JSON에서 슬라이드 수, narration 유무 읽기
        try:
            data_path = os.path.join(DATA_DIR, "projects", r.id, "project.json")
            if os.path.exists(data_path):
                with open(data_path, encoding="utf-8") as f:
                    data = json.load(f)
                info["slides"] = [{"id": s.get("id", "")} for s in data.get("slides", [])]
                info["has_narration"] = bool(data.get("narration") and data["narration"].get("segments"))
        except:
            pass
        projects.append(info)
    return projects


@router.post("")
async def create_project(
    req: CreateProjectRequest,
    session: AsyncSession = Depends(get_session),
):
    project = Project(title=req.title)
    project_dir = os.path.join(DATA_DIR, "projects", project.id)
    os.makedirs(project_dir, exist_ok=True)
    data_path = os.path.join(project_dir, "project.json")

    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(project.model_dump(), f, ensure_ascii=False, indent=2)

    record = ProjectRecord(
        id=project.id,
        title=project.title,
        data_path=data_path,
    )
    session.add(record)
    await session.commit()

    return project.model_dump()


@router.get("/{project_id}")
async def get_project(
    project_id: str,
    session: AsyncSession = Depends(get_session),
):
    result = await session.execute(
        select(ProjectRecord).where(ProjectRecord.id == project_id)
    )
    record = result.scalar_one_or_none()
    if not record:
        raise HTTPException(404, "프로젝트를 찾을 수 없어요")

    with open(record.data_path, "r", encoding="utf-8") as f:
        return json.load(f)


@router.put("/{project_id}")
async def update_project(
    project_id: str,
    project_data: dict,
    session: AsyncSession = Depends(get_session),
):
    result = await session.execute(
        select(ProjectRecord).where(ProjectRecord.id == project_id)
    )
    record = result.scalar_one_or_none()
    if not record:
        raise HTTPException(404, "프로젝트를 찾을 수 없어요")

    project_data["updated_at"] = datetime.now().isoformat()
    with open(record.data_path, "w", encoding="utf-8") as f:
        json.dump(project_data, f, ensure_ascii=False, indent=2)

    record.title = project_data.get("title", record.title)
    record.updated_at = datetime.utcnow()
    await session.commit()

    return {"status": "saved"}


@router.delete("/{project_id}")
async def delete_project(
    project_id: str,
    session: AsyncSession = Depends(get_session),
):
    result = await session.execute(
        select(ProjectRecord).where(ProjectRecord.id == project_id)
    )
    record = result.scalar_one_or_none()
    if not record:
        raise HTTPException(404, "프로젝트를 찾을 수 없어요")

    # Delete project file
    if os.path.exists(record.data_path):
        project_dir = os.path.dirname(record.data_path)
        import shutil
        shutil.rmtree(project_dir, ignore_errors=True)

    await session.delete(record)
    await session.commit()
    return {"status": "deleted"}
