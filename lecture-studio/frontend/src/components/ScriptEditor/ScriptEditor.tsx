import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { useEffect, useCallback } from 'react';
import { useProjectStore } from '../../stores/projectStore';
import { uploadMedia } from '../../api/client';
import styles from './ScriptEditor.module.css';

const ScriptEditor = () => {
  const script = useProjectStore((s) => s.project?.script);
  const setScript = useProjectStore((s) => s.setScript);

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
          return '스크립트를 입력하세요... (--- 로 슬라이드를 구분할 수 있어요)';
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
        handleFilesRef(files);
        return true;
      },
      handlePaste: (_view, event) => {
        const items = event.clipboardData?.items;
        if (!items) return false;

        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file) handleFilesRef([file]);
            return true;
          }
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

  // Use a ref-like pattern so handleDrop/handlePaste closures always get the latest
  const handleFilesRef = useCallback((files: File[]) => {
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
  }, [script?.type]); // Only on initial load

  return (
    <div className={styles.container}>
      {editor && <EditorToolbar editor={editor} />}
      <div className={styles.editorWrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

// Simple toolbar
const EditorToolbar = ({ editor }: { editor: any }) => {
  return (
    <div className={styles.toolbar}>
      <button
        className={`${styles.toolBtn} ${editor.isActive('bold') ? styles.active : ''}`}
        onClick={() => editor.chain().focus().toggleBold().run()}
        title="Bold"
      >
        B
      </button>
      <button
        className={`${styles.toolBtn} ${editor.isActive('italic') ? styles.active : ''}`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        title="Italic"
      >
        I
      </button>
      <div className={styles.toolDivider} />
      <button
        className={`${styles.toolBtn} ${editor.isActive('heading', { level: 1 }) ? styles.active : ''}`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        title="Heading 1"
      >
        H1
      </button>
      <button
        className={`${styles.toolBtn} ${editor.isActive('heading', { level: 2 }) ? styles.active : ''}`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        title="Heading 2"
      >
        H2
      </button>
      <div className={styles.toolDivider} />
      <button
        className={`${styles.toolBtn} ${editor.isActive('bulletList') ? styles.active : ''}`}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        title="Bullet List"
      >
        &bull;
      </button>
      <button
        className={`${styles.toolBtn} ${editor.isActive('orderedList') ? styles.active : ''}`}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        title="Ordered List"
      >
        1.
      </button>
      <div className={styles.toolDivider} />
      <button
        className={styles.toolBtn}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        title="슬라이드 구분선"
      >
        ---
      </button>
    </div>
  );
};

export default ScriptEditor;
