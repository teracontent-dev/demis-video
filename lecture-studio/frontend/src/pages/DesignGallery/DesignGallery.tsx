import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectStore } from '../../stores/projectStore';
import { useUIStore } from '../../stores/uiStore';
import Modal from '../../components/common/Modal/Modal';
import SlidePreview from './SlidePreview';
import { TEMPLATES } from './templates';
import type { SlideTemplate } from './templates';
import styles from './DesignGallery.module.css';

interface Folder {
  id: string;
  name: string;
  parentId: string | null;
  type: 'design' | 'narration';
}

const FOLDERS_KEY = '__folders';

function loadFolders(type: 'design' | 'narration'): Folder[] {
  try {
    const raw = localStorage.getItem(FOLDERS_KEY);
    if (!raw) return [];
    return (JSON.parse(raw) as Folder[]).filter((f) => f.type === type);
  } catch {
    return [];
  }
}

function saveFolders(folders: Folder[], type: 'design' | 'narration') {
  try {
    const raw = localStorage.getItem(FOLDERS_KEY);
    const all: Folder[] = raw ? JSON.parse(raw) : [];
    const others = all.filter((f) => f.type !== type);
    localStorage.setItem(FOLDERS_KEY, JSON.stringify([...others, ...folders]));
  } catch {}
}

function TemplateModal({ template, onClose, onUse }: {
  template: SlideTemplate | null;
  onClose: () => void;
  onUse: (slides: any[], templateId?: string) => void;
}) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  useEffect(() => { setActiveSlideIdx(0); }, [template?.id]);

  if (!template) return null;

  return (
    <Modal open={!!template} onClose={onClose} title={template.title}>
      <div className={styles.modalContent}>
        <div className={styles.previewLarge}>
          <SlidePreview slide={template.slides[activeSlideIdx].data} scale={0.225} />
        </div>

        {template.slides.length > 1 && (
          <div className={styles.slideTabs}>
            {template.slides.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.slideTab} ${i === activeSlideIdx ? styles.slideTabActive : ''}`}
                onClick={() => setActiveSlideIdx(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <div className={styles.modalActions}>
          <button className={styles.useBtn} onClick={() => onUse(template.slides.map(s => s.data), template.id)}>
            이 템플릿으로 편집하기
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default function DesignGallery() {
  const [selectedTemplate, setSelectedTemplate] = useState<SlideTemplate | null>(null);
  const [templates, setTemplates] = useState<SlideTemplate[]>([...TEMPLATES]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const navigate = useNavigate();
  const project = useProjectStore((s) => s.project);
  const createProject = useProjectStore((s) => s.createProject);
  const loadProject = useProjectStore((s) => s.loadProject);

  useEffect(() => {
    setFolders(loadFolders('design'));
  }, []);

  const handleDeleteTemplate = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setTemplates((prev) => prev.filter((t) => t.id !== id));
  };

  const handleNewFolder = () => {
    const name = prompt('폴더 이름을 입력하세요');
    if (!name?.trim()) return;
    const newFolder: Folder = {
      id: crypto.randomUUID(),
      name: name.trim(),
      parentId: currentFolderId,
      type: 'design',
    };
    const updated = [...folders, newFolder];
    setFolders(updated);
    saveFolders(updated, 'design');
  };

  const handleDeleteFolder = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = folders.filter((f) => f.id !== id);
    setFolders(updated);
    saveFolders(updated, 'design');
  };

  // 템플릿 → 프로젝트 매핑 (narration이 연결된 기존 프로젝트가 있으면 그걸 열기)
  const TEMPLATE_PROJECT_MAP: Record<string, string> = {
    'policy-report': '0638aeba-0ddb-41e2-8be8-61e6031c7369',
    'gyeongguk-daejeon': '6f7066ba-29fd-4ecd-a6c2-b3aea7e2c7c4',
    'cheongya-shorts': '6d8058b4-f6f4-4444-838a-2681ed55fc57',
  };

  const handleUseTemplate = async (slides: any[], templateId?: string) => {
    // 이미 연결된 프로젝트가 있으면 그 프로젝트로 바로 이동
    if (templateId && TEMPLATE_PROJECT_MAP[templateId]) {
      const existingId = TEMPLATE_PROJECT_MAP[templateId];
      setSelectedTemplate(null);
      navigate(`/editor/${existingId}`);
      return;
    }

    // 새 프로젝트 생성
    await createProject('새 강의');

    useProjectStore.getState().setSlides(slides);
    useUIStore.getState().setSelectedSlide(0);

    try {
      await useProjectStore.getState().saveProject();
    } catch {}

    const newProject = useProjectStore.getState().project;
    setSelectedTemplate(null);
    if (newProject) {
      navigate(`/editor/${newProject.id}`);
    } else {
      navigate('/editor');
    }
  };

  // Build breadcrumb path
  const breadcrumbPath: Folder[] = [];
  let walkId = currentFolderId;
  while (walkId) {
    const folder = folders.find((f) => f.id === walkId);
    if (folder) {
      breadcrumbPath.unshift(folder);
      walkId = folder.parentId;
    } else {
      break;
    }
  }

  const visibleFolders = folders.filter((f) => f.parentId === currentFolderId);
  // Templates don't have folderId, so show all at root level only
  const visibleTemplates = currentFolderId === null ? templates : [];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.logo}>Lecture Studio</h1>
          <span className={styles.headerDivider} />
          <h2 className={styles.pageTitle}>디자인 갤러리</h2>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.newFolderBtn} onClick={handleNewFolder}>
            새 폴더
          </button>
          <button className={styles.backBtn} onClick={() => navigate('/editor')}>
            에디터로 돌아가기
          </button>
        </div>
      </header>

      <main className={styles.main}>
        {breadcrumbPath.length > 0 && (
          <div className={styles.breadcrumb}>
            <button className={styles.breadcrumbBtn} onClick={() => setCurrentFolderId(null)}>
              홈
            </button>
            {breadcrumbPath.map((f, i) => (
              <span key={f.id}>
                <span> / </span>
                {i === breadcrumbPath.length - 1 ? (
                  <span className={styles.breadcrumbCurrent}>{f.name}</span>
                ) : (
                  <button className={styles.breadcrumbBtn} onClick={() => setCurrentFolderId(f.id)}>
                    {f.name}
                  </button>
                )}
              </span>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {visibleFolders.map((folder) => (
            <div
              key={folder.id}
              className={styles.folderCard}
              onClick={() => setCurrentFolderId(folder.id)}
            >
              <button
                className={styles.deleteBtn}
                onClick={(e) => handleDeleteFolder(e, folder.id)}
                title="폴더 삭제"
              >
                ×
              </button>
              <span className={styles.folderIcon}>📁</span>
              <span className={styles.folderName}>{folder.name}</span>
            </div>
          ))}

          {visibleTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className={styles.card}
              onClick={() => setSelectedTemplate(tpl)}
            >
              <div className={styles.cardThumb}>
                <button
                  className={styles.deleteBtn}
                  onClick={(e) => handleDeleteTemplate(e, tpl.id)}
                  title="템플릿 삭제"
                >
                  ×
                </button>
                <SlidePreview slide={tpl.slides[0].data} scale={0.14} />
                <span className={styles.cardCategory}>{tpl.category}</span>
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{tpl.title}</h3>
                <span className={styles.cardSlideCount}>{tpl.slides.length}장</span>
              </div>
            </div>
          ))}

          {currentFolderId === null && Array.from({ length: Math.max(0, 5 - ((visibleTemplates.length + visibleFolders.length) % 5 || 5)) }).map((_, i) => (
            <div key={`placeholder-${i}`} className={styles.cardPlaceholder}>
              <span className={styles.placeholderText}>Coming Soon</span>
            </div>
          ))}
        </div>
      </main>

      <TemplateModal
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        onUse={handleUseTemplate}
      />
    </div>
  );
}
