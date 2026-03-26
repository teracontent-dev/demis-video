import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NarrationLibrary.module.css';

interface Narration {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  folderId?: string | null;
}

interface Folder {
  id: string;
  name: string;
  parentId: string | null;
  type: 'design' | 'narration';
}

const NARRATIONS_KEY = '__narrations';
const FOLDERS_KEY = '__folders';

function loadNarrations(): Narration[] {
  try {
    const raw = localStorage.getItem(NARRATIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNarrations(narrations: Narration[]) {
  localStorage.setItem(NARRATIONS_KEY, JSON.stringify(narrations));
}

function loadFolders(): Folder[] {
  try {
    const raw = localStorage.getItem(FOLDERS_KEY);
    if (!raw) return [];
    return (JSON.parse(raw) as Folder[]).filter((f) => f.type === 'narration');
  } catch {
    return [];
  }
}

function saveFolders(folders: Folder[]) {
  try {
    const raw = localStorage.getItem(FOLDERS_KEY);
    const all: Folder[] = raw ? JSON.parse(raw) : [];
    const others = all.filter((f) => f.type !== 'narration');
    localStorage.setItem(FOLDERS_KEY, JSON.stringify([...others, ...folders]));
  } catch {}
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
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

export default function NarrationLibrary() {
  const navigate = useNavigate();
  const [narrations, setNarrations] = useState<Narration[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);

  useEffect(() => {
    setNarrations(loadNarrations());
    setFolders(loadFolders());
  }, []);

  const handleCreate = () => {
    const title = prompt('내레이션 제목을 입력하세요');
    if (!title?.trim()) return;
    const content = prompt('내용을 입력하세요') || '';
    const newNarration: Narration = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content,
      createdAt: new Date().toISOString(),
      folderId: currentFolderId,
    };
    const updated = [newNarration, ...narrations];
    setNarrations(updated);
    saveNarrations(updated);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = narrations.filter((n) => n.id !== id);
    setNarrations(updated);
    saveNarrations(updated);
  };

  const handleNewFolder = () => {
    const name = prompt('폴더 이름을 입력하세요');
    if (!name?.trim()) return;
    const newFolder: Folder = {
      id: crypto.randomUUID(),
      name: name.trim(),
      parentId: currentFolderId,
      type: 'narration',
    };
    const updated = [...folders, newFolder];
    setFolders(updated);
    saveFolders(updated);
  };

  const handleDeleteFolder = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = folders.filter((f) => f.id !== id);
    setFolders(updated);
    saveFolders(updated);
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
  const visibleNarrations = narrations.filter((n) =>
    currentFolderId === null ? !n.folderId : n.folderId === currentFolderId
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.logo}>Lecture Studio</h1>
          <span className={styles.headerDivider} />
          <h2 className={styles.pageTitle}>내레이션 라이브러리</h2>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.createBtn} onClick={handleCreate}>
            새 내레이션
          </button>
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

          {visibleNarrations.map((narration) => (
            <div key={narration.id} className={styles.card}>
              <button
                className={styles.deleteBtn}
                onClick={(e) => handleDelete(e, narration.id)}
                title="내레이션 삭제"
              >
                ×
              </button>
              <h3 className={styles.cardTitle}>{narration.title}</h3>
              <p className={styles.cardPreview}>
                {narration.content.slice(0, 100)}
                {narration.content.length > 100 ? '...' : ''}
              </p>
              <div className={styles.cardMeta}>
                <span>{wordCount(narration.content)}단어</span>
                <span>{formatDate(narration.createdAt)}</span>
              </div>
            </div>
          ))}

          {visibleFolders.length === 0 && visibleNarrations.length === 0 && (
            <div className={styles.empty}>
              내레이션이 없습니다. 새 내레이션을 만들어보세요.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
