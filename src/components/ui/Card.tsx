'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/lib/hooks';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, glow = false, onClick }: CardProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (onClick && isMobile) {
    return (
      <motion.div
        className={cn(
          'rounded-xl bg-surface-100/60 backdrop-blur-xl border border-surface-300/30 p-4 md:p-5',
          glow && 'glow-border',
          'cursor-pointer touch-manipulation',
          className
        )}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-xl bg-surface-100/60 backdrop-blur-xl border border-surface-300/30 p-4 md:p-5',
        hover && 'card-hover cursor-pointer',
        glow && 'glow-border',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon?: ReactNode;
  subtitle?: string;
  color?: string;
}

export function StatCard({ title, value, trend, icon, subtitle, color = 'text-n0va-400' }: StatCardProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Card hover className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className={cn('text-surface-800 mb-0.5', isMobile ? 'text-[11px]' : 'text-sm')}>{title}</p>
          <p className={cn('font-bold text-surface-950', isMobile ? 'text-lg' : 'text-2xl')}>{value}</p>
          {subtitle && <p className={cn('text-surface-700 mt-0.5', isMobile ? 'text-[10px]' : 'text-xs')}>{subtitle}</p>}
        </div>
        {icon && (
          <div className={cn(
            'rounded-lg bg-surface-200/50 flex-shrink-0',
            isMobile ? 'p-1.5' : 'p-2',
            color
          )}>
            {icon}
          </div>
        )}
      </div>
      {trend !== undefined && (
        <div className="mt-2 flex items-center gap-1">
          <span className={cn(
            'font-medium',
            isMobile ? 'text-[10px]' : 'text-xs',
            trend >= 0 ? 'text-accent-emerald' : 'text-accent-rose'
          )}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
          {!isMobile && <span className="text-xs text-surface-700">vs last period</span>}
        </div>
      )}
      <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-bl from-n0va-500/5 to-transparent rounded-bl-full" />
    </Card>
  );
}
