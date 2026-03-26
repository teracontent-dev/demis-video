import ScriptEditor from './ScriptEditor';
import styles from './ScriptEditorModal.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

const ScriptEditorModal = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>스크립트 편집</h2>
          <p className={styles.hint}>
            스크립트를 작성하고 AI에게 슬라이드 생성을 요청하세요. --- 로 슬라이드를 구분할 수 있어요.
          </p>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className={styles.body}>
          <ScriptEditor />
        </div>
        <div className={styles.footer}>
          <button className={styles.doneBtn} onClick={onClose}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScriptEditorModal;
