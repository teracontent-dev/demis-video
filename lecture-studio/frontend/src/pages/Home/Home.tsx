import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectStore } from '../../stores/projectStore';
import styles from './Home.module.css';

interface ProjectSummary {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  created_at?: string;
  updated_at?: string;
  slides: any[];
  has_narration?: boolean;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

export default function Home() {
  const navigate = useNavigate();
  const createProject = useProjectStore((s) => s.createProject);
  const loadProject = useProjectStore((s) => s.loadProject);

  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/projects`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch {
        // silent
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const handleNewProject = async () => {
    try {
      await createProject('새 프로젝트');
      navigate('/script');
    } catch (err) {
      console.error('프로젝트 생성 실패:', err);
    }
  };

  const handleOpenProject = async (project: ProjectSummary) => {
    try {
      if (project.slides && project.slides.length > 0) {
        navigate(`/editor/${project.id}`);
      } else {
        await loadProject(project.id);
        navigate('/script');
      }
    } catch (err) {
      console.error('프로젝트 로드 실패:', err);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Lecture Studio</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <h2 className={styles.heroTitle}>강의 슬라이드를 만들어보세요</h2>
            <p className={styles.heroSubtitle}>
              스크립트를 작성하면 AI가 자동으로 슬라이드를 디자인해드려요
            </p>
            <button className={styles.newProjectBtn} onClick={handleNewProject}>
              새 프로젝트 시작
            </button>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>최근 프로젝트</h3>
            {loading ? (
              <div className={styles.loadingState}>불러오는 중...</div>
            ) : projects.length === 0 ? (
              <div className={styles.emptyState}>
                아직 프로젝트가 없어요. 새 프로젝트를 시작해보세요.
              </div>
            ) : (
              <div className={styles.projectList}>
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={styles.projectCard}
                    onClick={() => handleOpenProject(proj)}
                  >
                    <div className={styles.projectInfo}>
                      <span className={styles.projectName}>{proj.title}</span>
                      <span className={styles.projectMeta}>
                        <span>{formatDate(proj.updatedAt || proj.updated_at || proj.createdAt || proj.created_at || '')}</span>
                        <span>{proj.slides?.length || 0}개 슬라이드</span>
                        {proj.has_narration && <span style={{ color: 'var(--accent-primary)' }}>🔊 내레이션</span>}
                      </span>
                    </div>
                    <span className={styles.projectArrow}>&rarr;</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.quickLinks}>
            <button
              className={styles.quickLinkBtn}
              onClick={() => navigate('/design')}
            >
              디자인 갤러리
            </button>
            <button
              className={styles.quickLinkBtn}
              onClick={() => navigate('/narration')}
            >
              내레이션 라이브러리
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
