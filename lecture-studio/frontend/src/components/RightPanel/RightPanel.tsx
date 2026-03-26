import { useState } from 'react';
import ChatPanel from '../ChatPanel/ChatPanel';
import styles from './RightPanel.module.css';

interface RightPanelProps {
  collapsed: boolean;
  onToggle: () => void;
}

function RightPanel({ collapsed, onToggle }: RightPanelProps) {
  const [activeTab, setActiveTab] = useState<'chat' | 'props' | 'settings'>('chat');

  if (collapsed) {
    return (
      <div className={styles.collapsed}>
        <button className={styles.toggleBtn} onClick={onToggle}>
          &#9664;
        </button>
      </div>
    );
  }

  const tabs = [
    { key: 'chat' as const, label: '채팅' },
    { key: 'props' as const, label: '속성' },
    { key: 'settings' as const, label: '설정' },
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
        <button className={styles.toggleBtn} onClick={onToggle}>
          &#9654;
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'chat' && <ChatPanel />}
        {activeTab === 'props' && (
          <div className={styles.contentPadded}>
            <p className={styles.placeholder}>속성 패널</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className={styles.contentPadded}>
            <p className={styles.placeholder}>설정 패널</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightPanel;
