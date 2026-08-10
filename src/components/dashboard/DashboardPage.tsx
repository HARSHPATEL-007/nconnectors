'use client';

import { Card, StatCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useAppStore } from '@/store/useAppStore';
import { formatNumber } from '@/lib/utils';
import { useMediaQuery } from '@/lib/hooks';
import {
  Activity,
  Bot,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

export function DashboardPage() {
  const { setActivePage, dashboardMetrics, integrations, agents, loading } = useAppStore();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const m = dashboardMetrics;
  const isLoading = loading?.metrics;

  const connectedCount = integrations.filter((i) => i.status === 'connected').length;
  const activeAgents = agents.filter((a) => a.status === 'active').length;

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {!isMobile && (
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-surface-950">Command Center</h1>
            <p className="text-sm text-surface-700 mt-1">Real-time overview of your N0VA1O integration gateway</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success" dot>Live</Badge>
            <span className="text-xs text-surface-600">Updated just now</span>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-surface-950">Welcome back</h1>
            <p className="text-xs text-surface-600 mt-0.5">System operational · {connectedCount} connections</p>
          </div>
          <Badge variant="success" dot size="sm">Live</Badge>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatCard
          title="Agents"
          value={isLoading ? '...' : (m?.agents ?? 0)}
          icon={<Bot size={isMobile ? 14 : 18} />}
          subtitle={`${activeAgents} active`}
        />
        <StatCard
          title="Sessions"
          value={isLoading ? '...' : (m?.sessions ?? 0)}
          icon={<Activity size={isMobile ? 14 : 18} />}
          subtitle="Total"
        />
        <StatCard
          title="Connections"
          value={isLoading ? '...' : (m?.connections ?? 0)}
          icon={<Zap size={isMobile ? 14 : 18} />}
          subtitle={`${connectedCount} active`}
        />
        <StatCard
          title="Audit Entries"
          value={isLoading ? '...' : (m?.auditEntries ?? 0)}
          icon={<Clock size={isMobile ? 14 : 18} />}
          subtitle="Total"
        />
      </div>

      {isMobile && (
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Integrations', count: integrations.length, color: 'text-accent-blue', bg: 'bg-accent-blue/10', page: 'integrations' },
            { label: 'Agents', count: agents.length, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10', page: 'agents' },
            { label: 'Alerts', count: m?.escalations ?? 0, color: 'text-accent-amber', bg: 'bg-accent-amber/10', page: 'escalation' },
          ].map((item) => (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage(item.page)}
              className="p-3 rounded-xl bg-surface-200/40 border border-surface-300/20 flex flex-col items-center gap-1 active:bg-surface-300/30 transition-colors"
            >
              <span className={`text-lg font-bold ${item.color}`}>{item.count}</span>
              <span className="text-[10px] text-surface-700">{item.label}</span>
            </motion.button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-surface-950">Integrations</h3>
            <button onClick={() => setActivePage('integrations')} className="text-xs text-n0va-400 hover:text-n0va-300 flex items-center gap-1">
              View all <ArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-2.5">
            {integrations.slice(0, 5).map((item, i) => (
              <div key={item.id} className="flex items-center gap-2.5">
                <span className="text-[10px] text-surface-600 w-3">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[11px] font-medium text-surface-900">{item.name}</span>
                    <Badge variant={item.status === 'connected' ? 'success' : 'info'} size="sm">{item.status || 'available'}</Badge>
                  </div>
                  <Progress value={item.status === 'connected' ? 100 : 0} max={100} size="sm" color="bg-n0va-500" />
                </div>
              </div>
            ))}
            {integrations.length === 0 && (
              <p className="text-xs text-surface-600 text-center py-4">Loading integrations...</p>
            )}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-surface-950">Agents</h3>
            <button onClick={() => setActivePage('agents')} className="text-xs text-n0va-400 hover:text-n0va-300 flex items-center gap-1">
              Manage <ArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-2.5">
            {agents.slice(0, 5).map((agent) => (
              <div key={agent.agent_id} className="flex items-center gap-2.5">
                <span className={`status-dot ${agent.status === 'active' ? 'status-dot-active' : 'status-dot-warning'}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-medium text-surface-900">{agent.name}</span>
                    <Badge variant={agent.status === 'active' ? 'success' : 'warning'} size="sm">{agent.status}</Badge>
                  </div>
                  <p className="text-[10px] text-surface-600">{agent.type}</p>
                </div>
              </div>
            ))}
            {agents.length === 0 && (
              <p className="text-xs text-surface-600 text-center py-4">Loading agents...</p>
            )}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <Card hover className="cursor-pointer touch-manipulation" onClick={() => setActivePage('audit')}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Compliance</h3>
              <p className="text-xs text-surface-600 mt-1">All passing</p>
            </div>
            <Shield size={18} className="text-accent-emerald" />
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {['GDPR', 'SOC 2', 'HIPAA', 'PCI DSS'].map((f) => (
              <Badge key={f} variant="success" size="sm">{f}</Badge>
            ))}
          </div>
        </Card>
        <Card hover className="cursor-pointer touch-manipulation" onClick={() => setActivePage('sessions')}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Sessions</h3>
              <p className="text-xs text-surface-600 mt-1">{m?.sessions ?? 0} total</p>
            </div>
            <Activity size={18} className="text-accent-blue" />
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-active" />
              <span className="text-[11px] text-surface-800">{agents.filter(a => a.status === 'active').length} agents active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-warning" />
              <span className="text-[11px] text-surface-800">{integrations.length} integrations</span>
            </div>
          </div>
        </Card>
        <Card hover className="cursor-pointer touch-manipulation" onClick={() => setActivePage('escalation')}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Escalations</h3>
              <p className="text-xs text-surface-600 mt-1">{m?.escalations ?? 0} pending</p>
            </div>
            <TrendingUp size={18} className="text-accent-amber" />
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-danger" />
              <span className="text-[11px] text-surface-800">HITL queue active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-active" />
              <span className="text-[11px] text-surface-800">Auto-escalation enabled</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
