import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { useProjectStore } from '../../stores/projectStore';
import { useAutoSave } from '../../hooks/useAutoSave';
import { uploadMedia } from '../../api/client';
import { toast } from '../../components/common/Toast/Toast';
import ToastContainer from '../../components/common/Toast/Toast';
import styles from './ScriptEditor.module.css';

export default function ScriptEditorPage() {
  const navigate = useNavigate();
  const project = useProjectStore((s) => s.project);
  const script = useProjectStore((s) => s.project?.script);
  const setScript = useProjectStore((s) => s.setScript);
  const setSlides = useProjectStore((s) => s.setSlides);
  const loadProject = useProjectStore((s) => s.loadProject);
  const createProject = useProjectStore((s) => s.createProject);

  const [title, setTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

  useAutoSave();

  // Initialize project if none loaded
  useEffect(() => {
    const init = async () => {
      if (project) {
        setTitle(project.title === '새 프로젝트' || project.title === '새 강의' ? '' : project.title);
        setInitialized(true);
        return;
      }
      try {
        const res = await fetch(`${API_BASE}/projects`);
        const projects = await res.json();
        if (projects.length > 0) {
          await loadProject(projects[0].id);
        } else {
          await createProject('새 프로젝트');
        }
      } catch {
        await createProject('새 프로젝트');
      }
      const proj = useProjectStore.getState().project;
      if (proj) setTitle(proj.title);
      setInitialized(true);
    };
    init();
  }, []);

  // Sync title from project
  useEffect(() => {
    if (project && !title) {
      setTitle(project.title === '새 프로젝트' || project.title === '새 강의' ? '' : project.title);
    }
  }, [project?.id]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
      }),
      HorizontalRule.configure({
        HTMLAttributes: {
          class: styles.slideBreak,
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return '제목을 입력하세요';
          }
          return '여기에 강의 내용을 입력하세요...';
        },
      }),
    ],
    content: script || { type: 'doc', content: [] },
    onUpdate: ({ editor: ed }) => {
      setScript(ed.getJSON() as any);
    },
    editorProps: {
      attributes: {
        class: styles.editor,
      },
      handleDrop: (view, event, _slice, moved) => {
        if (moved || !event.dataTransfer?.files.length) return false;
        const files = Array.from(event.dataTransfer.files);
        handleFilesCallback(files);
        return true;
      },
      handlePaste: (view, event) => {
        const items = event.clipboardData?.items;
        if (!items) return false;

        // Handle image paste
        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file) handleFilesCallback([file]);
            return true;
          }
        }

        // Keep HTML structure (lists, paragraphs) but strip inline styles
        const html = event.clipboardData?.getData('text/html');
        if (html) {
          event.preventDefault();
          // Remove all style attributes and class attributes, keep structure
          const clean = html
            .replace(/\s*style="[^"]*"/gi, '')
            .replace(/\s*class="[^"]*"/gi, '')
            .replace(/\s*color="[^"]*"/gi, '')
            .replace(/\s*face="[^"]*"/gi, '')
            .replace(/\s*size="[^"]*"/gi, '')
            .replace(/<font[^>]*>/gi, '')
            .replace(/<\/font>/gi, '')
            .replace(/<span[^>]*>/gi, '')
            .replace(/<\/span>/gi, '')
            // Remove empty list items (blank lines between items)
            .replace(/<li[^>]*>\s*(<br\s*\/?>)?\s*<\/li>/gi, '')
            // Remove empty paragraphs inside list items
            .replace(/<li[^>]*>\s*<p[^>]*>\s*(<br\s*\/?>)?\s*<\/p>\s*<\/li>/gi, '');
          editor?.commands.insertContent(clean);
          return true;
        }

        return false;
      },
    },
  });

  const handleFiles = useCallback(async (files: File[]) => {
    for (const file of files) {
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) continue;
      try {
        const result = await uploadMedia(file);
        if (result.type === 'image' && editor) {
          editor.chain().focus().setImage({ src: result.url }).run();
        }
      } catch (err) {
        console.error('업로드 실패:', err);
      }
    }
  }, [editor]);

  const handleFilesCallback = useCallback((files: File[]) => {
    handleFiles(files);
  }, [handleFiles]);

  // Load content when project changes
  useEffect(() => {
    if (editor && script && !editor.isDestroyed) {
      const currentJSON = JSON.stringify(editor.getJSON());
      const newJSON = JSON.stringify(script);
      if (currentJSON !== newJSON) {
        editor.commands.setContent(script);
      }
    }
  }, [script?.type]);

  const handleGenerate = async () => {
    if (!editor || !project) return;

    const text = editor.getText();
    if (!text.trim()) {
      toast.error('스크립트를 입력해주세요');
      return;
    }

    setIsGenerating(true);
    try {
      const res = await fetch(`${API_BASE}/ai/generate-slides`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          script_text: text,
          style_preset: 'modern',
        }),
      });

      if (!res.ok) throw new Error('슬라이드 생성 실패');
      const data = await res.json();

      if (data.slides?.length) {
        setSlides(data.slides);
        toast.success(`${data.slides.length}개 슬라이드를 생성했어요`);
        navigate('/editor');
      } else {
        toast.error('슬라이드를 생성하지 못했어요');
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : '생성 중 오류가 발생했어요');
    }
    setIsGenerating(false);
  };

  const handleGoToEmptyEditor = () => {
    navigate('/editor');
  };

  const handleImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) handleFilesCallback(Array.from(files));
    e.target.value = '';
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    if (project && title.trim()) {
      useProjectStore.setState({
        project: { ...project, title: title.trim() },
        isDirty: true,
      });
    }
  };

  if (!initialized) {
    return (
      <div className={styles.page}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}>
          불러오는 중...
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')} title="홈으로">
          &#8592;
        </button>
        <span className={styles.headerLogo}>Lecture Studio</span>
        <div className={styles.headerSpacer} />
        <div className={styles.headerActions}>
          <button className={styles.emptyEditorBtn} onClick={handleGoToEmptyEditor}>
            빈 에디터로
          </button>
          <button
            className={styles.generateBtn}
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <span className={styles.loadingText}>
                <span className={styles.spinner} />
                생성 중...
              </span>
            ) : (
              '슬라이드 생성'
            )}
          </button>
        </div>
      </header>

      {editor && (
        <div className={styles.toolbar}>
          <button
            className={`${styles.toolBtn} ${editor.isActive('bold') ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
          >
            B
          </button>
          <button
            className={`${styles.toolBtn} ${editor.isActive('italic') ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            I
          </button>
          <div className={styles.toolDivider} />
          <button
            className={`${styles.toolBtn} ${editor.isActive('heading', { level: 1 }) ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            title="Heading 1"
          >
            H1
          </button>
          <button
            className={`${styles.toolBtn} ${editor.isActive('heading', { level: 2 }) ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Heading 2"
          >
            H2
          </button>
          <button
            className={`${styles.toolBtn} ${editor.isActive('heading', { level: 3 }) ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            title="Heading 3"
          >
            H3
          </button>
          <div className={styles.toolDivider} />
          <button
            className={`${styles.toolBtn} ${editor.isActive('bulletList') ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet List"
          >
            &bull;
          </button>
          <button
            className={`${styles.toolBtn} ${editor.isActive('orderedList') ? styles.toolBtnActive : ''}`}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Ordered List"
          >
            1.
          </button>
          <div className={styles.toolDivider} />
          <button
            className={styles.toolBtn}
            onClick={handleImageUpload}
            title="이미지 삽입"
          >
            IMG
          </button>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            className={styles.imageInput}
            onChange={handleImageFileChange}
          />
          <button
            className={styles.toolBtn}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="슬라이드 구분선"
          >
            ---
          </button>
        </div>
      )}

      <div className={styles.editorArea}>
        <div className={styles.editorContent}>
          <input
            className={styles.inlineTitle}
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            placeholder="제목을 입력하세요"
            onClick={(e) => e.stopPropagation()}
          />
          <div className={styles.editorWrap} onClick={() => editor?.chain().focus().run()}>
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
