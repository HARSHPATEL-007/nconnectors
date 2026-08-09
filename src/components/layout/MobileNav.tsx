'use client';

import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { useMediaQuery } from '@/lib/hooks';
import {
  LayoutDashboard,
  Plug,
  Bot,
  Activity,
  AlertTriangle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const tabItems = [
  { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'integrations', label: 'Apps', icon: Plug },
  { id: 'agents', label: 'Agents', icon: Bot },
  { id: 'sessions', label: 'Sessions', icon: Activity },
  { id: 'escalation', label: 'Alerts', icon: AlertTriangle, badge: 1 },
];

export function MobileNav() {
  const { activePage, setActivePage, notifications } = useAppStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return null;

  const alertBadge = notifications.filter(n => n.type === 'warning' || n.type === 'error').length;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="bg-surface-50/95 backdrop-blur-2xl border-t border-surface-300/30 px-2 pt-1.5">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {tabItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            const badge = item.id === 'escalation' ? alertBadge : 0;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  // Haptic-style visual feedback
                  if (navigator.vibrate) navigator.vibrate(5);
                }}
                className={cn(
                  'flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all duration-200 relative',
                  'active:scale-90 touch-manipulation',
                  isActive ? 'text-n0va-400' : 'text-surface-600'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileTabIndicator"
                    className="absolute -top-1.5 w-8 h-0.5 rounded-full bg-gradient-to-r from-n0va-500 to-accent-cyan"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <div className="relative">
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  {badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 text-[8px] font-bold bg-accent-rose text-white rounded-full flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </div>
                <span className={cn(
                  'text-[10px]',
                  isActive ? 'font-semibold' : 'font-medium'
                )}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
