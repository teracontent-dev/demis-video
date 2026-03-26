import Preview from '../Preview/Preview';
import TimelinePanel from '../Timeline/TimelinePanel';
import styles from './PreviewArea.module.css';

function PreviewArea() {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <Preview />
      </div>
      <div className={styles.timeline}>
        <TimelinePanel />
      </div>
    </div>
  );
}

export default PreviewArea;
