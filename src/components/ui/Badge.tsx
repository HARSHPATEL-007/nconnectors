'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export function Badge({ children, variant = 'default', size = 'sm', className, dot = false }: BadgeProps) {
  const variants = {
    default: 'bg-surface-300/50 text-surface-800 border-surface-400/30',
    success: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30',
    warning: 'bg-accent-amber/10 text-accent-amber border-accent-amber/30',
    error: 'bg-accent-rose/10 text-accent-rose border-accent-rose/30',
    info: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
    outline: 'bg-transparent text-surface-800 border-surface-400/50',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full', {
          'bg-surface-600': variant === 'default',
          'bg-accent-emerald': variant === 'success',
          'bg-accent-amber': variant === 'warning',
          'bg-accent-rose': variant === 'error',
          'bg-accent-blue': variant === 'info',
        })} />
      )}
      {children}
    </span>
  );
}
