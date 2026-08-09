'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, glow = false, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-surface-100/60 backdrop-blur-xl border border-surface-300/30 p-5',
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
  return (
    <Card hover className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-surface-800 mb-1">{title}</p>
          <p className="text-2xl font-bold text-surface-950">{value}</p>
          {subtitle && <p className="text-xs text-surface-700 mt-1">{subtitle}</p>}
        </div>
        {icon && (
          <div className={cn('p-2 rounded-lg bg-surface-200/50', color)}>
            {icon}
          </div>
        )}
      </div>
      {trend !== undefined && (
        <div className="mt-3 flex items-center gap-1">
          <span className={cn('text-xs font-medium', trend >= 0 ? 'text-accent-emerald' : 'text-accent-rose')}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
          <span className="text-xs text-surface-700">vs last period</span>
        </div>
      )}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-n0va-500/5 to-transparent rounded-bl-full" />
    </Card>
  );
}
