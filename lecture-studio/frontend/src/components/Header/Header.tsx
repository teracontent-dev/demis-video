import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectStore } from '../../stores/projectStore';
import { toast } from '../common/Toast/Toast';
import { exportSlidesToPdf } from '../../utils/exportPdf';
import ExportDialog from '../ExportDialog/ExportDialog';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  const projectTitle = useProjectStore((s) => s.project?.title) || '새 프로젝트';
  const isDirty = useProjectStore((s) => s.isDirty);
  const saveProject = useProjectStore((s) => s.saveProject);
  const undo = useProjectStore((s) => s.undo);
  const redo = useProjectStore((s) => s.redo);
  const undoLen = useProjectStore((s) => s.undoStack.length);
  const redoLen = useProjectStore((s) => s.redoStack.length);

  const [exportOpen, setExportOpen] = useState(false);
  const [pdfExporting, setPdfExporting] = useState(false);

  const slides = useProjectStore((s) => s.project?.slides) || [];

  const handlePdfExport = async () => {
    if (slides.length === 0) {
      toast.error('내보낼 슬라이드가 없어요');
      return;
    }
    setPdfExporting(true);
    try {
      const title = projectTitle.replace(/[^a-zA-Z0-9가-힣_-]/g, '_') || 'lecture';
      await exportSlidesToPdf(slides, `${title}.pdf`);
      toast.success('PDF를 내보냈어요');
    } catch (e) {
      console.error('PDF 내보내기 실패:', e);
      toast.error('PDF 내보내기에 실패했어요');
    } finally {
      setPdfExporting(false);
    }
  };

  const handleSave = async () => {
    try {
      await saveProject();
      toast.success('저장했어요');
    } catch {
      toast.error('저장에 실패했어요');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Lecture Studio</div>
      <div className={styles.projectTitle}>{projectTitle}</div>
      <div className={styles.undoRedo}>
        <button className={styles.btnIcon} onClick={undo} disabled={undoLen === 0} title="Undo (Ctrl+Z)">&#8617;</button>
        <button className={styles.btnIcon} onClick={redo} disabled={redoLen === 0} title="Redo (Ctrl+Shift+Z)">&#8618;</button>
      </div>
      <div className={styles.autosave}>
        {isDirty ? '저장 중...' : '저장됨'}
      </div>
      <div className={styles.actions}>
        <button className={styles.btnPreview} onClick={() => navigate('/')}>
          홈
        </button>
        <button className={styles.btnPreview} onClick={() => navigate('/script')}>
          스크립트
        </button>
        <button className={styles.btnPreview} onClick={() => navigate('/design')}>
          갤러리
        </button>
        <button className={styles.btnPreview} onClick={() => navigate('/narration')}>
          내레이션
        </button>
        <button className={styles.btnPreview} onClick={handleSave}>
          저장
        </button>
        <button
          className={styles.btnPreview}
          onClick={handlePdfExport}
          disabled={pdfExporting}
        >
          {pdfExporting ? 'PDF 생성 중...' : 'PDF 내보내기'}
        </button>
        <button className={styles.btnExport} onClick={() => setExportOpen(true)}>
          내보내기
        </button>
      </div>
      <ExportDialog open={exportOpen} onClose={() => setExportOpen(false)} />
    </header>
  );
}

export default Header;
