'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
   const [query, setQuery] = useState('');
   const inputRef = useRef<HTMLInputElement>(null);
   const { setActivePage, integrations, agents } = useAppStore();

   useEffect(() => {
     if (open) {
       setTimeout(() => inputRef.current?.focus(), 100);
     } else {
       setQuery('');
     }
   }, [open]);

   const results = query.length > 0 ? [
     ...integrations.filter(i => i.name.toLowerCase().includes(query.toLowerCase())).map(i => ({ type: 'integration' as const, id: i.id, title: i.name, subtitle: i.category, page: 'integrations' })),
     ...agents.filter(a => a.name.toLowerCase().includes(query.toLowerCase())).map(a => ({ type: 'agent' as const, id: a.agent_id, title: a.name, subtitle: a.type, page: 'agents' })),
  ].slice(0, 8) : [];

  const recentSearches = ['Meta Ads', 'Finance Agent', 'GitHub', 'Sessions'];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-surface-0/98 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 pt-[calc(1rem+env(safe-area-inset-top))] border-b border-surface-300/20">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-600" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search apps, agents, tools..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-surface-200/50 border border-surface-300/30 rounded-xl text-surface-900 placeholder:text-surface-600 focus:outline-none focus:border-n0va-500/40"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-surface-300/30 text-surface-700 active:scale-95 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-100px)]">
            {query.length === 0 ? (
              <div>
                <h3 className="text-xs font-semibold text-surface-700 mb-3">Recent</h3>
                <div className="space-y-1">
                  {recentSearches.map((item) => (
                    <button
                      key={item}
                      onClick={() => { setQuery(item); }}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-300/20 active:bg-surface-300/40 transition-colors"
                    >
                      <Search size={14} className="text-surface-500" />
                      <span className="text-sm text-surface-800">{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length > 0 ? (
              <div>
                <h3 className="text-xs font-semibold text-surface-700 mb-3">Results ({results.length})</h3>
                <div className="space-y-1">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => { setActivePage(result.page); onClose(); }}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-300/20 active:bg-surface-300/40 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        result.type === 'integration' ? 'bg-accent-blue/10 text-accent-blue' : 'bg-accent-violet/10 text-accent-violet'
                      }`}>
                        {result.title.charAt(0)}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-sm text-surface-900">{result.title}</p>
                        <p className="text-[10px] text-surface-600">{result.subtitle}</p>
                      </div>
                      <ArrowRight size={14} className="text-surface-500" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <Search size={32} className="text-surface-500 mb-3" />
                <p className="text-sm text-surface-700">No results found</p>
                <p className="text-xs text-surface-600 mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
