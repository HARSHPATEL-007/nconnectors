'use client';

import { Card, StatCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { dashboardMetrics, executionChartData, integrationUsageData, agentPerformanceData } from '@/data/metrics';
import { useAppStore } from '@/store/useAppStore';
import { formatNumber, formatLatency, relativeTime } from '@/lib/utils';
import { useMediaQuery } from '@/lib/hooks';
import {
  Activity,
  Bot,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  DollarSign,
  ArrowRight,
  BarChart3,
  ChevronRight,
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

export function DashboardPage() {
  const { setActivePage } = useAppStore();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const m = dashboardMetrics;

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {/* Header - hidden on mobile (shows in topbar) */}
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

      {/* Mobile: Show greeting */}
      {isMobile && (
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-surface-950">Welcome back</h1>
            <p className="text-xs text-surface-600 mt-0.5">System operational · 18 connections</p>
          </div>
          <Badge variant="success" dot size="sm">Live</Badge>
        </div>
      )}

      {/* Stats Grid - 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatCard
          title="Executions"
          value={formatNumber(m.totalExecutions)}
          trend={m.executionsTrend}
          icon={<Activity size={isMobile ? 14 : 18} />}
          subtitle="Last 24h"
        />
        <StatCard
          title="Agents"
          value={m.activeAgents}
          trend={m.agentsTrend}
          icon={<Bot size={isMobile ? 14 : 18} />}
          subtitle="6 registered"
        />
        <StatCard
          title="Success"
          value={`${m.successRate}%`}
          trend={m.successTrend}
          icon={<TrendingUp size={isMobile ? 14 : 18} />}
          subtitle="7-day rolling"
        />
        <StatCard
          title="Latency"
          value={formatLatency(m.avgLatency)}
          trend={m.latencyTrend}
          icon={<Clock size={isMobile ? 14 : 18} />}
          subtitle="p99 calls"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Execution Chart */}
        <Card className={isMobile ? 'lg:col-span-2' : 'lg:col-span-2'}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Execution Volume</h3>
              <p className="text-xs text-surface-600 mt-0.5">24h overview</p>
            </div>
            <Badge variant="info" size="sm">{formatNumber(m.dailyActions)}</Badge>
          </div>
          <div className="h-40 md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={executionChartData}>
                <defs>
                  <linearGradient id="execGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#4f4f80" fontSize={9} tickLine={false} axisLine={false} interval={isMobile ? 3 : 0} />
                <YAxis stroke="#4f4f80" fontSize={9} tickLine={false} axisLine={false} width={25} />
                {!isMobile && (
                  <Tooltip
                    contentStyle={{ background: '#13131e', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', fontSize: '12px' }}
                    labelStyle={{ color: '#8585b8' }}
                    itemStyle={{ color: '#a5b4fc' }}
                  />
                )}
                <Area type="monotone" dataKey="value" stroke="#6366f1" fill="url(#execGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Security Score - circular on mobile */}
        <Card>
          <h3 className="text-sm font-semibold text-surface-950 mb-1">Security</h3>
          <p className="text-xs text-surface-600 mb-3">Threat assessment</p>
          <div className="flex flex-col items-center py-2 md:py-4">
            <div className="relative">
              <Progress value={m.securityScore} max={100} size="lg" color="bg-gradient-to-r from-accent-emerald to-accent-cyan" className="w-32 md:w-48" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-surface-950">{m.securityScore}</span>
              </div>
            </div>
            <div className="mt-4 w-full space-y-2.5">
              {[
                { label: 'Encryption', badge: 'AES-256-GCM' },
                { label: 'Auth Uptime', badge: '99.99%' },
                { label: 'Compliance', badge: 'SOC 2' },
                { label: 'Post-Quantum', badge: 'Kyber768' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-[11px] text-surface-700">{item.label}</span>
                  <Badge variant="success" size="sm">{item.badge}</Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions - mobile optimized */}
      {isMobile && (
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Sessions', count: 3, color: 'text-accent-blue', bg: 'bg-accent-blue/10', page: 'sessions' },
            { label: 'Alerts', count: 1, color: 'text-accent-amber', bg: 'bg-accent-amber/10', page: 'escalation' },
            { label: 'Pending', count: 1, color: 'text-accent-rose', bg: 'bg-accent-rose/10', page: 'audit' },
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

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Integration Usage */}
        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-surface-950">Top Integrations</h3>
            <button onClick={() => setActivePage('integrations')} className="text-xs text-n0va-400 hover:text-n0va-300 flex items-center gap-1 active:text-n0va-500">
              View all <ArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-2.5">
            {integrationUsageData.slice(0, isMobile ? 4 : 5).map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-[10px] text-surface-600 w-3">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[11px] font-medium text-surface-900">{item.name}</span>
                    <span className="text-[10px] text-surface-700">{formatNumber(item.executions)}</span>
                  </div>
                  <Progress value={item.success} max={100} size="sm" color="bg-n0va-500" />
                </div>
                <span className="text-[9px] text-accent-emerald font-medium">{item.success}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Agent Performance */}
        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-surface-950">Agent Performance</h3>
            <button onClick={() => setActivePage('agents')} className="text-xs text-n0va-400 hover:text-n0va-300 flex items-center gap-1 active:text-n0va-500">
              Manage <ArrowRight size={12} />
            </button>
          </div>
          {isMobile ? (
            // Mobile: horizontal scrollable chips
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {agentPerformanceData.map((agent, i) => (
                <div key={i} className="flex-shrink-0 w-28 p-2.5 rounded-xl bg-surface-200/30 border border-surface-300/10">
                  <p className="text-[10px] font-medium text-surface-900 truncate">{agent.name.replace(' Agent', '')}</p>
                  <p className="text-sm font-bold text-surface-950 mt-1">{formatNumber(agent.actions)}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[9px] text-accent-emerald">{agent.success}%</span>
                    <span className="text-[9px] text-surface-600">{formatLatency(agent.latency)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={agentPerformanceData} layout="vertical">
                  <XAxis type="number" stroke="#4f4f80" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="name" stroke="#4f4f80" fontSize={10} tickLine={false} axisLine={false} width={80} />
                  <Tooltip
                    contentStyle={{ background: '#13131e', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', fontSize: '12px' }}
                    labelStyle={{ color: '#8585b8' }}
                  />
                  <Bar dataKey="actions" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>
      </div>

      {/* Cost & Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <StatCard
          title="Cost Savings"
          value={`$${formatNumber(m.costSavings)}`}
          trend={m.savingsTrend}
          icon={<DollarSign size={isMobile ? 14 : 18} />}
          subtitle="This quarter"
        />
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
              <p className="text-xs text-surface-600 mt-1">3 running · 1 pending</p>
            </div>
            <Activity size={18} className="text-accent-blue" />
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-active" />
              <span className="text-[11px] text-surface-800">Finance: Invoice processing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-warning" />
              <span className="text-[11px] text-surface-800">Marketing: Campaign review</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
