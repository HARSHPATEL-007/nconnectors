'use client';

import { motion } from 'framer-motion';
import { usePullToRefresh } from '@/lib/hooks';
import { Loader2 } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

export function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
  const { isRefreshing, pullDistance } = usePullToRefresh(onRefresh);

  return (
    <div className="relative">
      {/* Pull indicator */}
      {pullDistance > 10 && (
        <div className="flex justify-center py-3">
          <motion.div
            animate={{ rotate: pullDistance > 60 ? 360 : 0 }}
            transition={{ duration: 0.5, repeat: pullDistance > 60 ? Infinity : 0 }}
          >
            <Loader2 size={20} className="text-n0va-400" />
          </motion.div>
        </div>
      )}

      {/* Spacer for pull */}
      {pullDistance > 0 && (
        <div style={{ height: pullDistance }} />
      )}

      {children}
    </div>
  );
}
