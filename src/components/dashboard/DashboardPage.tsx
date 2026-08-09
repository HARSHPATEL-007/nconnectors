'use client';

import { Card, StatCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { dashboardMetrics, executionChartData, latencyChartData, integrationUsageData, agentPerformanceData } from '@/data/metrics';
import { useAppStore } from '@/store/useAppStore';
import { formatNumber, formatLatency, relativeTime } from '@/lib/utils';
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
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useRouter } from 'next/navigation';

export function DashboardPage() {
  const router = useRouter();
  const { setActivePage } = useAppStore();
  const m = dashboardMetrics;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Executions"
          value={formatNumber(m.totalExecutions)}
          trend={m.executionsTrend}
          icon={<Activity size={18} />}
          subtitle="Last 24h"
        />
        <StatCard
          title="Active Agents"
          value={m.activeAgents}
          trend={m.agentsTrend}
          icon={<Bot size={18} />}
          subtitle="6 registered"
        />
        <StatCard
          title="Success Rate"
          value={`${m.successRate}%`}
          trend={m.successTrend}
          icon={<TrendingUp size={18} />}
          subtitle="7-day rolling"
        />
        <StatCard
          title="Avg Latency"
          value={formatLatency(m.avgLatency)}
          trend={m.latencyTrend}
          icon={<Clock size={18} />}
          subtitle="p99 tool calls"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Execution Chart */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Execution Volume</h3>
              <p className="text-xs text-surface-600 mt-0.5">Agent executions over 24h</p>
            </div>
            <Badge variant="info">{formatNumber(m.dailyActions)} today</Badge>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={executionChartData}>
                <defs>
                  <linearGradient id="execGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#4f4f80" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#4f4f80" fontSize={10} tickLine={false} axisLine={false} width={30} />
                <Tooltip
                  contentStyle={{ background: '#13131e', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', fontSize: '12px' }}
                  labelStyle={{ color: '#8585b8' }}
                  itemStyle={{ color: '#a5b4fc' }}
                />
                <Area type="monotone" dataKey="value" stroke="#6366f1" fill="url(#execGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Security Score */}
        <Card>
          <h3 className="text-sm font-semibold text-surface-950 mb-1">Security Score</h3>
          <p className="text-xs text-surface-600 mb-4">Real-time threat assessment</p>
          <div className="flex flex-col items-center py-4">
            <div className="relative">
              <Progress value={m.securityScore} max={100} size="lg" color="bg-gradient-to-r from-accent-emerald to-accent-cyan" className="w-48" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-surface-950">{m.securityScore}</span>
              </div>
            </div>
            <div className="mt-6 w-full space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-surface-700">Encryption</span>
                <Badge variant="success" size="sm">AES-256-GCM</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-surface-700">Auth Uptime</span>
                <span className="text-xs text-surface-900 font-medium">99.99%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-surface-700">Compliance</span>
                <Badge variant="success" size="sm">SOC 2</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-surface-700">Post-Quantum</span>
                <Badge variant="success" size="sm">Kyber768</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Integration Usage */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-surface-950">Top Integrations</h3>
            <button onClick={() => setActivePage('integrations')} className="text-xs text-n0va-400 hover:text-n0va-300 flex items-center gap-1">
              View all <ArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-3">
            {integrationUsageData.slice(0, 5).map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-surface-600 w-4">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-surface-900">{item.name}</span>
                    <span className="text-xs text-surface-700">{formatNumber(item.executions)}</span>
                  </div>
                  <Progress value={item.success} max={100} size="sm" color="bg-n0va-500" />
                </div>
                <span className="text-[10px] text-accent-emerald font-medium">{item.success}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Agent Performance */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-surface-950">Agent Performance</h3>
            <button onClick={() => setActivePage('agents')} className="text-xs text-n0va-400 hover:text-n0va-300 flex items-center gap-1">
              Manage <ArrowRight size={12} />
            </button>
          </div>
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
        </Card>
      </div>

      {/* Cost & Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Cost Savings"
          value={`$${formatNumber(m.costSavings)}`}
          trend={m.savingsTrend}
          icon={<DollarSign size={18} />}
          subtitle="This quarter"
        />
        <Card hover className="cursor-pointer" onClick={() => setActivePage('audit')}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Compliance Status</h3>
              <p className="text-xs text-surface-600 mt-1">All frameworks passing</p>
            </div>
            <Shield size={20} className="text-accent-emerald" />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {['GDPR', 'SOC 2', 'HIPAA', 'ISO 27001', 'PCI DSS'].map((f) => (
              <Badge key={f} variant="success" size="sm">{f}</Badge>
            ))}
          </div>
        </Card>
        <Card hover className="cursor-pointer" onClick={() => setActivePage('sessions')}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-surface-950">Active Sessions</h3>
              <p className="text-xs text-surface-600 mt-1">3 running · 1 awaiting approval</p>
            </div>
            <Activity size={20} className="text-accent-blue" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-active" />
              <span className="text-xs text-surface-800">Finance: Invoice processing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-warning" />
              <span className="text-xs text-surface-800">Marketing: Campaign review</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
