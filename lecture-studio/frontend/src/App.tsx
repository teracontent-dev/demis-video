import { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/Home';
import ScriptEditorPage from './pages/ScriptEditor/ScriptEditor';
import Header from './components/Header/Header';
import SlideList from './components/SlideList/SlideList';
import PreviewArea from './components/PreviewArea/PreviewArea';
import RightPanel from './components/RightPanel/RightPanel';
import ToastContainer from './components/common/Toast/Toast';
import DesignGallery from './pages/DesignGallery/DesignGallery';
import NarrationLibrary from './pages/NarrationLibrary/NarrationLibrary';
import { useAutoSave } from './hooks/useAutoSave';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useProjectStore } from './stores/projectStore';
import { useUIStore } from './stores/uiStore';
import styles from './App.module.css';

function EditorPage() {
  const rightPanelOpen = useUIStore((s) => s.rightPanelOpen);
  const toggleRightPanel = useUIStore((s) => s.toggleRightPanel);

  const { projectId } = useParams<{ projectId: string }>();
  const project = useProjectStore((s) => s.project);
  const loadProject = useProjectStore((s) => s.loadProject);
  const createProject = useProjectStore((s) => s.createProject);

  useEffect(() => {
    const init = async () => {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

      // URL에 projectId가 있으면 그 프로젝트를 로드 (narration 포함)
      if (projectId) {
        try {
          await loadProject(projectId);
        } catch {
          console.error('프로젝트 로드 실패:', projectId);
        }

        // 템플릿 적용 대기 중이면 처리
        const templateRaw = localStorage.getItem('__template_slides');
        if (templateRaw) {
          localStorage.removeItem('__template_slides');
          try {
            const templateSlides = JSON.parse(templateRaw);
            useProjectStore.getState().setSlides(templateSlides);
            await useProjectStore.getState().saveProject();
            // 다시 로드해서 narration 등 최신 데이터 반영
            await loadProject(projectId);
          } catch (e) {
            console.error('템플릿 로드 실패:', e);
          }
        }
        return;
      }

      // projectId 없으면 기존 로직: 첫 프로젝트 or 새로 생성
      if (project) {
        try { await loadProject(project.id); } catch {}
        return;
      }

      // 템플릿 적용 대기 중
      const templateRaw = localStorage.getItem('__template_slides');
      if (templateRaw) {
        localStorage.removeItem('__template_slides');
        try {
          const templateSlides = JSON.parse(templateRaw);
          const res = await fetch(`${API_BASE}/projects`);
          const projects = await res.json();
          if (projects.length > 0) {
            await loadProject(projects[0].id);
          } else {
            await createProject('새 강의');
          }
          useProjectStore.getState().setSlides(templateSlides);
          await useProjectStore.getState().saveProject();
          return;
        } catch (e) {
          console.error('템플릿 로드 실패:', e);
        }
      }

      // 기본: 첫 프로젝트 로드
      try {
        const res = await fetch(`${API_BASE}/projects`);
        const projects = await res.json();
        if (projects.length > 0) {
          await loadProject(projects[0].id);
        } else {
          await createProject('새 강의');
        }
      } catch {
        await createProject('새 강의');
      }
    };
    init();
  }, [projectId]);

  useAutoSave();
  useKeyboardShortcuts();

  if (!project) {
    return (
      <div className={styles.loading}>
        <ToastContainer />
        프로젝트를 불러오는 중...
      </div>
    );
  }

  const appClass = [
    styles.app,
    !rightPanelOpen ? styles.panelCollapsed : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={appClass}>
      <Header />
      <SlideList />
      <PreviewArea />
      <RightPanel
        collapsed={!rightPanelOpen}
        onToggle={toggleRightPanel}
      />
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/script" element={<ScriptEditorPage />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="/editor/:projectId" element={<EditorPage />} />
      <Route path="/design" element={<DesignGallery />} />
      <Route path="/narration" element={<NarrationLibrary />} />
    </Routes>
  );
}

export default App;
