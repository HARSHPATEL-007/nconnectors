'use client';

import { ReactNode, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { useMediaQuery } from '@/lib/hooks';

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string;
}

const pageVariants = {
  enter: { opacity: 0, x: 20, scale: 0.98 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -20, scale: 0.98 },
};

const mobileVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export function PageTransition({ children, pageKey }: PageTransitionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) {
    return <motion.div initial="enter" animate="center" exit="exit" variants={pageVariants} transition={{ duration: 0.2, ease: 'easeOut' }}>{children}</motion.div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial="enter"
        animate="center"
        exit="exit"
        variants={mobileVariants}
        transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Swipeable container for horizontal tab swiping
interface SwipeableProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}

export function Swipeable({ children, onSwipeLeft, onSwipeRight, className }: SwipeableProps) {
  const { activePage, setActivePage } = useAppStore();
  const tabs = ['dashboard', 'integrations', 'agents', 'sessions', 'escalation'];
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const currentIndex = tabs.indexOf(activePage);

  const handleDragEnd = useCallback((_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    setIsDragging(false);
    const threshold = 50;
    const velocity = 500;

    if (info.offset.x < -threshold || info.velocity.x < -velocity) {
      // Swiped left - go to next tab
      if (currentIndex < tabs.length - 1) {
        setActivePage(tabs[currentIndex + 1]);
        onSwipeLeft?.();
      }
    } else if (info.offset.x > threshold || info.velocity.x > velocity) {
      // Swiped right - go to previous tab
      if (currentIndex > 0) {
        setActivePage(tabs[currentIndex - 1]);
        onSwipeRight?.();
      }
    }
    setDragX(0);
  }, [currentIndex, setActivePage, onSwipeLeft, onSwipeRight]);

  return (
    <motion.div
      className={className}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDrag={(_, info) => setDragX(info.offset.x)}
      onDragEnd={handleDragEnd}
      style={{ x: dragX }}
    >
      {children}
      {/* Swipe indicators */}
      {isDragging && (
        <>
          {currentIndex > 0 && dragX > 20 && (
            <div className="fixed left-2 top-1/2 -translate-y-1/2 w-1 h-12 rounded-full bg-n0va-500/50 transition-opacity" />
          )}
          {currentIndex < tabs.length - 1 && dragX < -20 && (
            <div className="fixed right-2 top-1/2 -translate-y-1/2 w-1 h-12 rounded-full bg-n0va-500/50 transition-opacity" />
          )}
        </>
      )}
    </motion.div>
  );
}
