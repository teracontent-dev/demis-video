import Preview from '../Preview/Preview';
import ScriptEditor from '../ScriptEditor/ScriptEditor';
import styles from './MainArea.module.css';

function MainArea() {
  return (
    <div className={styles.mainArea}>
      <div className={styles.previewContainer}>
        <Preview />
      </div>
      <div className={styles.scriptEditor}>
        <ScriptEditor />
      </div>
    </div>
  );
}

export default MainArea;
