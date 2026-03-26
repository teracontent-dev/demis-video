import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectStore } from '../../stores/projectStore';
import { toast } from '../common/Toast/Toast';
import styles from './ScriptPage.module.css';

interface Props {
  onGenerated: () => void;
}

const ScriptPage = ({ onGenerated }: Props) => {
  const navigate = useNavigate();
  const project = useProjectStore((s) => s.project);
  const setSlides = useProjectStore((s) => s.setSlides);
  const [script, setScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

  const handleGenerate = async () => {
    if (!script.trim()) {
      toast.error('스크립트를 입력해주세요');
      return;
    }
    if (!project) return;

    setIsGenerating(true);
    try {
      const res = await fetch(`${API_BASE}/ai/generate-slides`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          script_text: script,
          style_preset: 'modern',
        }),
      });

      if (!res.ok) throw new Error('슬라이드 생성 실패');
      const data = await res.json();

      if (data.slides?.length) {
        setSlides(data.slides);
        toast.success(`${data.slides.length}개 슬라이드를 생성했어요`);
        onGenerated();
      } else {
        toast.error('슬라이드를 생성하지 못했어요');
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : '생성 중 오류가 발생했어요');
    }
    setIsGenerating(false);
  };

  const handleSkip = () => {
    onGenerated();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>강의 스크립트 작성</h1>
          <p className={styles.subtitle}>
            강의 내레이션을 작성하면, AI가 자동으로 슬라이드를 디자인해요.
          </p>
        </div>

        <div className={styles.editorArea}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder={`여기에 강의 스크립트를 입력하세요.\n\n예시:\n안녕하세요, 오늘은 시계의 역사에 대해 알아보겠습니다.\n\n시계의 기원은 고대 이집트로 거슬러 올라갑니다.\n해시계는 인류가 처음으로 사용한 시간 측정 도구였습니다.\n\n중세 시대에는 기계식 시계가 등장했습니다.\n유럽의 교회와 성당에 큰 시계탑이 세워졌죠.\n\n---\n(--- 로 슬라이드를 구분할 수 있어요)`}
            disabled={isGenerating}
          />
          <div className={styles.charCount}>
            {script.length}자
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.skipBtn}
            onClick={() => navigate('/design')}
            disabled={isGenerating}
          >
            디자인 갤러리
          </button>
          <button
            className={styles.skipBtn}
            onClick={() => navigate('/narration')}
            disabled={isGenerating}
          >
            내레이션 라이브러리
          </button>
          <button
            className={styles.skipBtn}
            onClick={handleSkip}
            disabled={isGenerating}
          >
            빈 프로젝트로 시작
          </button>
          <button
            className={styles.generateBtn}
            onClick={handleGenerate}
            disabled={isGenerating || !script.trim()}
          >
            {isGenerating ? (
              <span className={styles.loadingText}>
                <span className={styles.spinner} />
                슬라이드 생성 중...
              </span>
            ) : (
              '슬라이드 생성하기'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScriptPage;
