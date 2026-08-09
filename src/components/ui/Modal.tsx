'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useMediaQuery } from '@/lib/hooks';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({ open, onClose, children, title, subtitle, size = 'md' }: ModalProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => setIsVisible(false), 250);
      return () => clearTimeout(timer);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!isVisible) return null;

  // Mobile: Bottom sheet
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50">
        <div
          className={cn(
            'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-250',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={onClose}
        />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 max-h-[85vh] rounded-t-3xl bg-surface-100 border-t border-surface-300/40 shadow-2xl overflow-hidden',
            open ? 'sheet-up' : 'sheet-down'
          )}
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-surface-400/50" />
          </div>

          {/* Header */}
          {(title || subtitle) && (
            <div className="flex items-start justify-between px-5 pt-2 pb-3 border-b border-surface-300/20">
              <div>
                {title && <h2 className="text-base font-semibold text-surface-950">{title}</h2>}
                {subtitle && <p className="text-xs text-surface-600 mt-0.5">{subtitle}</p>}
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-1 rounded-xl hover:bg-surface-300/50 text-surface-700 active:scale-95 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Content */}
          <div className="px-5 py-4 overflow-y-auto max-h-[calc(85vh-80px)]">
            {children}
          </div>

          {/* Safe area */}
          <div className="safe-bottom" />
        </div>
      </div>
    );
  }

  // Desktop: Centered modal
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className={cn(
          'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200',
          open ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          'relative w-full rounded-2xl bg-surface-100 border border-surface-300/40 shadow-2xl',
          'animate-slide-up',
          sizes[size]
        )}
      >
        {(title || subtitle) && (
          <div className="flex items-start justify-between p-6 pb-0">
            <div>
              {title && <h2 className="text-lg font-semibold text-surface-950">{title}</h2>}
              {subtitle && <p className="text-sm text-surface-700 mt-1">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-surface-300/50 text-surface-700 hover:text-surface-900 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
