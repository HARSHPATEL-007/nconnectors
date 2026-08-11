'use client';

import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import {
  LayoutDashboard,
  Plug,
  Bot,
  Activity,
  Shield,
  AlertTriangle,
  Settings,
  ChevronLeft,
  Zap,
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'integrations', label: 'Integrations', icon: Plug },
  { id: 'agents', label: 'Agents', icon: Bot },
  { id: 'sessions', label: 'Sessions', icon: Activity },
  { id: 'audit', label: 'Audit Trail', icon: Shield },
  { id: 'escalation', label: 'Interrogation Room', icon: AlertTriangle, badge: 3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const { sidebarOpen, activePage, setActivePage, toggleSidebar } = useAppStore();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-out',
        'bg-surface-50/90 backdrop-blur-2xl border-r border-surface-300/30',
        'flex flex-col',
        sidebarOpen ? 'w-64' : 'w-20'
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-5 border-b border-surface-300/20">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-n0va-500 to-accent-violet flex items-center justify-center flex-shrink-0 shadow-lg shadow-n0va-500/20">
            <Zap size={18} className="text-white" />
          </div>
          {sidebarOpen && (
            <div className="animate-fade-in">
              <h1 className="text-sm font-bold text-surface-950 tracking-tight">N0VA1O</h1>
              <p className="text-[10px] text-surface-700 -mt-0.5">Integration Gateway</p>
            </div>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className={cn(
            'p-1.5 rounded-lg hover:bg-surface-300/50 text-surface-700 transition-all',
            !sidebarOpen && 'rotate-180'
          )}
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200',
                'relative group',
                isActive
                  ? 'bg-gradient-to-r from-n0va-500/15 to-n0va-600/5 text-n0va-400 border border-n0va-500/20'
                  : 'text-surface-700 hover:text-surface-900 hover:bg-surface-300/30',
                !sidebarOpen && 'justify-center'
              )}
            >
              <Icon size={18} className="flex-shrink-0" />
              {sidebarOpen && (
                <span className="text-sm font-medium truncate">{item.label}</span>
              )}
              {sidebarOpen && item.badge && (
                <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold bg-accent-rose/20 text-accent-rose rounded-full">
                  {item.badge}
                </span>
              )}
              {!sidebarOpen && item.badge && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] font-bold bg-accent-rose text-white rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-n0va-400 rounded-r" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Status */}
      <div className="p-4 border-t border-surface-300/20">
        <div className={cn('flex items-center gap-2', !sidebarOpen && 'justify-center')}>
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          {sidebarOpen && (
            <div>
              <p className="text-xs text-surface-900 font-medium">System Operational</p>
              <p className="text-[10px] text-surface-700">99.99% uptime · 18 connections</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
