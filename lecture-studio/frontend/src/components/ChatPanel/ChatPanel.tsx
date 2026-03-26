import { useState, useRef, useEffect } from 'react';
import { useChatStore } from '../../stores/chatStore';
import styles from './ChatPanel.module.css';

const ChatPanel = () => {
  const messages = useChatStore((s) => s.messages);
  const isLoading = useChatStore((s) => s.isLoading);
  const thinkingText = useChatStore((s) => s.thinkingText);
  const streamingText = useChatStore((s) => s.streamingText);
  const sendMessage = useChatStore((s) => s.sendMessage);
  const undoLastChange = useChatStore((s) => s.undoLastChange);
  const thinkingEnabled = useChatStore((s) => s.thinkingEnabled);
  const toggleThinking = useChatStore((s) => s.toggleThinking);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinkingText, streamingText]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');
    await sendMessage(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageList}>
        {messages.length === 0 && !isLoading && (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>AI에게 슬라이드 수정을 요청하세요</p>
            <p className={styles.emptyHint}>
              예: "3번 슬라이드 배경을 어둡게 바꿔줘"
            </p>
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${msg.role === 'user' ? styles.userMsg : styles.aiMsg}`}
          >
            <div className={styles.msgRole}>
              {msg.role === 'user' ? '나' : 'AI'}
            </div>
            <div className={styles.msgContent}>{msg.content}</div>
            {msg.slideChanges && (
              <button
                className={styles.undoBtn}
                onClick={() => undoLastChange(msg.id)}
              >
                되돌리기
              </button>
            )}
          </div>
        ))}

        {/* Streaming: thinking — show last line only */}
        {isLoading && thinkingText && (
          <div className={`${styles.message} ${styles.thinkingMsg}`}>
            <div className={styles.msgRole}>AI 생각 중</div>
            <div className={styles.thinkingContent}>
              {thinkingText.trim().split('\n').filter(Boolean).slice(-2).join('\n')}
              <span className={styles.thinkingCursor}>|</span>
            </div>
          </div>
        )}

        {/* Streaming: text output — hide raw JSON, show progress */}
        {isLoading && streamingText && (
          <div className={`${styles.message} ${styles.aiMsg}`}>
            <div className={styles.msgRole}>AI</div>
            <div className={styles.msgContent}>
              슬라이드를 구성하고 있어요...
              <span className={styles.progressDots}>
                <span /><span /><span />
              </span>
            </div>
          </div>
        )}

        {/* Loading dots when no streaming content yet */}
        {isLoading && !thinkingText && !streamingText && (
          <div className={`${styles.message} ${styles.aiMsg}`}>
            <div className={styles.msgRole}>AI</div>
            <div className={styles.loadingDots}>
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputArea}>
        <div className={styles.inputOptions}>
          <label className={styles.switchLabel}>
            <span className={styles.switchText}>사고모드</span>
            <div
              className={`${styles.switch} ${thinkingEnabled ? styles.switchOn : ''}`}
              onClick={toggleThinking}
              role="switch"
              aria-checked={thinkingEnabled}
              tabIndex={0}
            >
              <div className={styles.switchThumb} />
            </div>
          </label>
        </div>
        <div className={styles.inputRow}>
          <textarea
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="수정 요청... (Ctrl+Enter로 전송)"
            rows={2}
            disabled={isLoading}
          />
          <button
            className={styles.sendBtn}
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
