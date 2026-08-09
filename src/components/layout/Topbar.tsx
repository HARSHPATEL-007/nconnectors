'use client';

import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { Bell, Search, Menu, User, Command } from 'lucide-react';
import { useState } from 'react';

export function Topbar() {
  const { sidebarOpen, notifications, dismissNotification } = useAppStore();
  const [showNotifs, setShowNotifs] = useState(false);

  const unreadCount = notifications.length;

  return (
    <header
      className={cn(
        'sticky top-0 z-30 h-16 flex items-center justify-between px-6',
        'bg-surface-0/80 backdrop-blur-xl border-b border-surface-300/20',
        'transition-all duration-300',
        sidebarOpen ? 'ml-64' : 'ml-20'
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-600" />
          <input
            type="text"
            placeholder="Search integrations, agents, tools..."
            className="w-80 pl-9 pr-12 py-2 text-sm bg-surface-200/50 border border-surface-300/30 rounded-xl text-surface-900 placeholder:text-surface-600 focus:outline-none focus:border-n0va-500/40 focus:ring-1 focus:ring-n0va-500/20 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[10px] text-surface-600 bg-surface-300/50 px-1.5 py-0.5 rounded">
            <Command size={10} />K
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifs(!showNotifs)}
            className="relative p-2 rounded-xl hover:bg-surface-300/30 text-surface-700 hover:text-surface-900 transition-colors"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 text-[9px] font-bold bg-accent-rose text-white rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifs && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowNotifs(false)} />
              <div className="absolute right-0 top-12 w-80 rounded-xl bg-surface-100 border border-surface-300/40 shadow-2xl z-50 animate-slide-up overflow-hidden">
                <div className="p-3 border-b border-surface-300/20">
                  <h3 className="text-sm font-semibold text-surface-950">Notifications</h3>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-3 border-b border-surface-300/10 hover:bg-surface-200/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-2">
                        <div className={cn('w-2 h-2 rounded-full mt-1.5 flex-shrink-0', {
                          'bg-accent-emerald': notif.type === 'success',
                          'bg-accent-rose': notif.type === 'error',
                          'bg-accent-amber': notif.type === 'warning',
                          'bg-accent-blue': notif.type === 'info',
                        })} />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-surface-900">{notif.title}</p>
                          <p className="text-[11px] text-surface-700 mt-0.5 truncate">{notif.message}</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); dismissNotification(notif.id); }}
                          className="text-[10px] text-surface-600 hover:text-surface-900"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-2 pl-3 border-l border-surface-300/30">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-n0va-500 to-accent-cyan flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-medium text-surface-900">Admin</p>
            <p className="text-[10px] text-surface-700">Enterprise</p>
          </div>
        </div>
      </div>
    </header>
  );
}
