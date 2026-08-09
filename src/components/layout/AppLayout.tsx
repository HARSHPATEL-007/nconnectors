'use client';

import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { sidebarOpen } = useAppStore();

  return (
    <div className="min-h-screen bg-surface-0 grid-bg">
      <div className="noise-overlay" />
      <Sidebar />
      <Topbar />
      <main
        className={cn(
          'transition-all duration-300 min-h-[calc(100vh-4rem)]',
          sidebarOpen ? 'ml-64' : 'ml-20'
        )}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
