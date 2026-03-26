import { useState } from 'react';
import Modal from '../common/Modal/Modal';
import { toast } from '../common/Toast/Toast';
import { useProjectStore } from '../../stores/projectStore';
import styles from './ExportDialog.module.css';

interface ExportDialogProps {
  open: boolean;
  onClose: () => void;
}

type ExportPreset = 'draft' | 'standard' | 'high' | 'ultra';

const PRESETS: { key: ExportPreset; label: string; desc: string }[] = [
  { key: 'draft', label: '초안', desc: '720p · 24fps · 빠른 미리보기' },
  { key: 'standard', label: '표준', desc: '1080p · 30fps · 일반 배포' },
  { key: 'high', label: '고품질', desc: '1080p · 60fps · 고화질' },
  { key: 'ultra', label: '4K', desc: '2160p · 30fps · 최고 품질' },
];

const ExportDialog = ({ open, onClose }: ExportDialogProps) => {
  const [preset, setPreset] = useState<ExportPreset>('standard');
  const [isRendering, setIsRendering] = useState(false);
  const [progress, setProgress] = useState({ phase: '', percent: 0 });
  const project = useProjectStore((s) => s.project);

  const handleExport = async () => {
    if (!project) return;
    setIsRendering(true);
    setProgress({ phase: 'connecting', percent: 0 });

    try {
      const wsUrl = `${import.meta.env.VITE_WS_BASE_URL || 'ws://localhost:8000/ws'}/render/${project.id}`;
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        ws.send(JSON.stringify({ preset }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setProgress({ phase: data.phase, percent: data.percent || 0 });

        if (data.phase === 'done') {
          setIsRendering(false);
          toast.success('영상 내보내기가 완료됐어요!');
          onClose();

          // Trigger download
          if (data.output) {
            const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
            window.open(`${apiBase.replace('/api', '')}${data.output}`, '_blank');
          }
        } else if (data.phase === 'error') {
          setIsRendering(false);
          toast.error(data.message || '렌더링 중 오류가 발생했어요');
        }
      };

      ws.onerror = () => {
        setIsRendering(false);
        toast.error('렌더링 서버에 연결할 수 없어요');
      };
    } catch (err) {
      setIsRendering(false);
      toast.error('내보내기를 시작할 수 없어요');
    }
  };

  const handleDownloadJSON = () => {
    if (!project) return;
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.title || 'project'}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.info('프로젝트 JSON을 다운로드했어요');
  };

  const phaseLabels: Record<string, string> = {
    connecting: '연결 중...',
    capturing: '프레임 캡처 중...',
    encoding: '영상 인코딩 중...',
    muxing: '오디오 합성 중...',
  };

  return (
    <Modal open={open} onClose={onClose} title="내보내기">
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>영상 내보내기</h3>
          <div className={styles.presetList}>
            {PRESETS.map((p) => (
              <label
                key={p.key}
                className={`${styles.presetItem} ${preset === p.key ? styles.selected : ''}`}
              >
                <input
                  type="radio"
                  name="preset"
                  value={p.key}
                  checked={preset === p.key}
                  onChange={() => setPreset(p.key)}
                  className={styles.radio}
                />
                <div>
                  <div className={styles.presetLabel}>{p.label}</div>
                  <div className={styles.presetDesc}>{p.desc}</div>
                </div>
              </label>
            ))}
          </div>

          {isRendering ? (
            <div className={styles.progressArea}>
              <div className={styles.progressLabel}>
                {phaseLabels[progress.phase] || progress.phase}
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
              <div className={styles.progressPercent}>{progress.percent}%</div>
            </div>
          ) : (
            <button className={styles.exportBtn} onClick={handleExport}>
              MP4로 내보내기
            </button>
          )}
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>기타</h3>
          <button className={styles.secondaryBtn} onClick={handleDownloadJSON}>
            프로젝트 JSON 다운로드
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ExportDialog;
