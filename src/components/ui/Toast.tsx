'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useEffect, useState, createContext, useContext, useCallback } from 'react';

interface ToastItem {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (item: Omit<ToastItem, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((item: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...item, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, onDismiss }: { toasts: ToastItem[]; onDismiss: (id: string) => void }) {
  return (
    <div className="fixed top-16 left-4 right-4 z-[70] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastMessage key={t.id} item={t} onDismiss={() => onDismiss(t.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ToastMessage({ item, onDismiss }: { item: ToastItem; onDismiss: () => void }) {
  const icons = {
    success: <CheckCircle size={16} className="text-accent-emerald flex-shrink-0" />,
    error: <XCircle size={16} className="text-accent-rose flex-shrink-0" />,
    warning: <AlertTriangle size={16} className="text-accent-amber flex-shrink-0" />,
    info: <Info size={16} className="text-accent-blue flex-shrink-0" />,
  };

  useEffect(() => {
    const timer = setTimeout(onDismiss, item.duration || 3000);
    return () => clearTimeout(timer);
  }, [item.duration, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="pointer-events-auto"
    >
      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-100/95 backdrop-blur-xl border border-surface-300/40 shadow-lg shadow-black/20">
        {icons[item.type]}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-surface-950">{item.title}</p>
          {item.message && <p className="text-[11px] text-surface-700 mt-0.5">{item.message}</p>}
        </div>
        <button onClick={onDismiss} className="p-1 rounded-lg hover:bg-surface-300/50 text-surface-600 flex-shrink-0">
          <X size={12} />
        </button>
      </div>
    </motion.div>
  );
}
