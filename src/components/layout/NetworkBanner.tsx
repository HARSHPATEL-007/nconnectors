'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff } from 'lucide-react';
import { useOnlineStatus } from '@/lib/hooks';
import { useAppStore } from '@/store/useAppStore';
import { useEffect } from 'react';

export function NetworkBanner() {
  const isOnline = useOnlineStatus();
  const { setIsOnline } = useAppStore();

  useEffect(() => {
    setIsOnline(isOnline);
  }, [isOnline, setIsOnline]);

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[60] px-4 pt-[env(safe-area-inset-top)]"
        >
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-b-xl bg-accent-rose/90 backdrop-blur-md text-white text-xs font-medium shadow-lg">
            <WifiOff size={14} />
            <span>You're offline — cached data shown</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Online pulse indicator (subtle)
export function OnlineIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div className="flex items-center gap-1.5">
      {isOnline ? (
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-accent-emerald" />
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent-emerald animate-ping opacity-50" />
        </div>
      ) : (
        <WifiOff size={12} className="text-accent-rose" />
      )}
    </div>
  );
}
