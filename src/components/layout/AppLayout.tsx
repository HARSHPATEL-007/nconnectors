'use client';

import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MobileNav } from './MobileNav';
import { NetworkBanner } from './NetworkBanner';
import { PageTransition, Swipeable } from './PageTransition';
import { FAB } from './FAB';
import { SearchOverlay } from './SearchOverlay';
import { ReactNode, useState } from 'react';
import { useMediaQuery } from '@/lib/hooks';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { sidebarOpen, activePage } = useAppStore();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-0">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Network status banner */}
      <NetworkBanner />

      {/* Sidebar - desktop only */}
      {!isMobile && <Sidebar />}

      {/* Topbar - desktop only */}
      {!isMobile && <Topbar />}

      {/* Mobile header */}
      {isMobile && <MobileHeader onSearch={() => setSearchOpen(true)} />}

      {/* Main content */}
      <main
        className={cn(
          'transition-all duration-300 min-h-screen',
          isMobile ? 'pt-14 pb-24' : sidebarOpen ? 'ml-64' : 'ml-20'
        )}
      >
        <div className={cn(isMobile ? 'p-4' : 'p-6')}>
          {isMobile ? (
            <Swipeable>
              <PageTransition pageKey={activePage}>
                {children}
              </PageTransition>
            </Swipeable>
          ) : (
            <PageTransition pageKey={activePage}>
              {children}
            </PageTransition>
          )}
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <MobileNav />

      {/* Floating Action Button */}
      <FAB />

      {/* Search Overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

function MobileHeader({ onSearch }: { onSearch: () => void }) {
  const { notifications, activePage, goBack, pageHistory } = useAppStore();
  const unreadCount = notifications.length;
  const canGoBack = pageHistory.length > 1;

  const pageTitle: Record<string, string> = {
    dashboard: 'N0VA1O',
    integrations: 'Integrations',
    agents: 'Agents',
    sessions: 'Sessions',
    audit: 'Audit Trail',
    escalation: 'Escalation',
    settings: 'Settings',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 bg-surface-0/90 backdrop-blur-2xl border-b border-surface-300/20 safe-top">
      <div className="flex items-center gap-2">
        {/* Back button */}
        {canGoBack && (
          <button
            onClick={goBack}
            className="p-2 -ml-2 rounded-xl hover:bg-surface-300/30 text-surface-700 active:scale-90 transition-all touch-manipulation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        )}

        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-n0va-500 to-accent-violet flex items-center justify-center shadow-lg shadow-n0va-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l19.2-6.02A1 1 0 0 0 11 14z"/>
            </svg>
          </div>
          <h1 className="text-sm font-bold text-surface-950">{pageTitle[activePage] || 'N0VA1O'}</h1>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Search */}
        <button
          onClick={onSearch}
          className="p-2 rounded-xl hover:bg-surface-300/30 text-surface-700 active:scale-95 transition-all touch-manipulation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
        </button>
        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-surface-300/30 text-surface-700 active:scale-95 transition-all touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
          </svg>
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 text-[8px] font-bold bg-accent-rose text-white rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
        {/* Profile */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-n0va-500 to-accent-cyan flex items-center justify-center ml-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
