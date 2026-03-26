import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

// Simple global toast state
let toastListeners: ((toasts: ToastItem[]) => void)[] = [];
let toasts: ToastItem[] = [];

function notifyListeners() {
  toastListeners.forEach((l) => l([...toasts]));
}

export const toast = {
  show(message: string, type: 'success' | 'error' | 'info' = 'info', duration = 3000) {
    const id = crypto.randomUUID();
    toasts = [...toasts, { id, message, type, duration }];
    notifyListeners();
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
      notifyListeners();
    }, duration);
  },
  success(message: string) { toast.show(message, 'success'); },
  error(message: string) { toast.show(message, 'error', 5000); },
  info(message: string) { toast.show(message, 'info'); },
};

const ToastContainer = () => {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    toastListeners.push(setItems);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== setItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className={styles.container} aria-live="polite">
      {items.map((item) => (
        <div
          key={item.id}
          className={`${styles.toast} ${styles[item.type]}`}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
