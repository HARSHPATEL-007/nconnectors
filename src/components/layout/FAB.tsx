'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Bot, Plug, Search, X } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useMediaQuery } from '@/lib/hooks';

interface FABAction {
  icon: React.ReactNode;
  label: string;
  action: () => void;
}

export function FAB() {
  const [isOpen, setIsOpen] = useState(false);
  const { activePage, setActivePage } = useAppStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return null;

  // Context-aware actions based on current page
  const getActions = (): FABAction[] => {
    switch (activePage) {
      case 'agents':
        return [
          { icon: <Plus size={18} />, label: 'Register Agent', action: () => {} },
          { icon: <Bot size={18} />, label: 'Quick Deploy', action: () => {} },
        ];
      case 'integrations':
        return [
          { icon: <Plus size={18} />, label: 'Connect App', action: () => {} },
          { icon: <Plug size={18} />, label: 'Browse Catalog', action: () => {} },
        ];
      case 'sessions':
        return [
          { icon: <Plus size={18} />, label: 'New Session', action: () => {} },
        ];
      default:
        return [
          { icon: <Search size={18} />, label: 'Search', action: () => {} },
          { icon: <Plus size={18} />, label: 'Quick Action', action: () => {} },
        ];
    }
  };

  const actions = getActions();

  return (
    <div className="fixed bottom-24 right-4 z-40">
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && actions.map((action, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => { action.action(); setIsOpen(false); }}
            className="flex items-center gap-2 mb-3 ml-auto"
          >
            <span className="px-2.5 py-1 rounded-lg bg-surface-100/90 backdrop-blur-md border border-surface-300/30 text-xs font-medium text-surface-900 shadow-md">
          {action.label}
        </span>
        <div className="w-10 h-10 rounded-full bg-n0va-500 flex items-center justify-center text-white shadow-lg shadow-n0va-500/30">
          {action.icon}
        </div>
          </motion.button>
        ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors duration-200 ${
          isOpen
            ? 'bg-surface-400 shadow-surface-400/30 rotate-45'
            : 'bg-gradient-to-br from-n0va-500 to-accent-violet shadow-n0va-500/30'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Plus size={24} className="text-white" />
        )}
      </motion.button>
    </div>
  );
}
