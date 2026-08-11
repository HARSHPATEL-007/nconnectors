import { useState, useEffect } from 'react'
import {
  Bot, Activity, Link2, Zap, TrendingUp, Clock,
  CheckCircle, AlertTriangle, Cpu
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const latencyData = [
  { time: '00:00', value: 45 }, { time: '04:00', value: 52 },
  { time: '08:00', value: 120 }, { time: '12:00', value: 85 },
  { time: '16:00', value: 95 }, { time: '20:00', value: 65 },
  { time: '24:00', value: 48 },
]

const throughputData = [
  { time: '00:00', agents: 12, calls: 340 },
  { time: '04:00', agents: 8, calls: 220 },
  { time: '08:00', agents: 25, calls: 890 },
  { time: '12:00', agents: 42, calls: 1450 },
  { time: '16:00', agents: 38, calls: 1200 },
  { time: '20:00', agents: 28, calls: 780 },
  { time: '24:00', agents: 15, calls: 420 },
]

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    agents: { total: 3, active: 2 },
    sessions: { total: 12, active: 5 },
    connections: { total: 8, active: 8, avg_health: 0.98 },
    tier: 'pro',
  })

  return (
    <div className="page dashboard">
      <header className="page-header">
        <h2>Gateway Dashboard</h2>
        <p className="subtitle">N0VA Infinite Integration Gateway — Transcendent Edition</p>
      </header>

      <div className="metrics-grid">
        <MetricCard
          icon={Bot}
          label="Active Agents"
          value={`${metrics.agents.active}/${metrics.agents.total}`}
          trend="+2 today"
          color="indigo"
        />
        <MetricCard
          icon={Activity}
          label="Live Sessions"
          value={`${metrics.sessions.active}`}
          trend="5 active workflows"
          color="green"
        />
        <MetricCard
          icon={Link2}
          label="Connections"
          value={`${metrics.connections.active}`}
          trend={`${(metrics.connections.avg_health * 100).toFixed(0)}% health`}
          color="amber"
        />
        <MetricCard
          icon={Zap}
          label="API Calls Today"
          value="2,847"
          trend="12% vs yesterday"
          color="purple"
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3><Clock size={16} /> Tool Call Latency (p99)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={latencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} unit="ms" />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
              <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3><TrendingUp size={16} /> Agent Throughput</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={throughputData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
              <Area type="monotone" dataKey="calls" stroke="#10b981" fill="#10b98180" />
              <Area type="monotone" dataKey="agents" stroke="#8b5cf6" fill="#8b5cf680" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="status-grid">
        <div className="status-card">
          <h3><Cpu size={16} /> Gateway Health</h3>
          <div className="health-items">
            <HealthItem label="MCP Gateway" status="online" />
            <HealthItem label="Auth Service" status="online" />
            <HealthItem label="Sandbox Pool" status="online" />
            <HealthItem label="Plugin Engine" status="online" />
            <HealthItem label="Webhook Ingest" status="online" />
            <HealthItem label="Audit Chain" status="online" />
          </div>
        </div>

        <div className="status-card">
          <h3><AlertTriangle size={16} /> Recent Activity</h3>
          <div className="activity-list">
            <ActivityItem text="Agent 'Finance Automation' executed Q3 invoice sync" time="2m ago" type="success" />
            <ActivityItem text="New connection established: Meta Ads" time="5m ago" type="info" />
            <ActivityItem text="Recipe 'Monthly_Invoice_Sync' compiled successfully" time="12m ago" type="success" />
            <ActivityItem text="High-risk action queued for interrogation" time="18m ago" type="warning" />
            <ActivityItem text="Schema drift detected: Salesforce v57.0" time="25m ago" type="info" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ icon: Icon, label, value, trend, color }: any) {
  return (
    <div className={`metric-card metric-${color}`}>
      <div className="metric-icon">
        <Icon size={22} />
      </div>
      <div className="metric-content">
        <span className="metric-value">{value}</span>
        <span className="metric-label">{label}</span>
        <span className="metric-trend">{trend}</span>
      </div>
    </div>
  )
}

function HealthItem({ label, status }: { label: string; status: string }) {
  return (
    <div className="health-item">
      <span className={`status-dot ${status}`}></span>
      <span>{label}</span>
      <span className="health-status">{status}</span>
    </div>
  )
}

function ActivityItem({ text, time, type }: { text: string; time: string; type: string }) {
  return (
    <div className={`activity-item activity-${type}`}>
      <CheckCircle size={14} />
      <span className="activity-text">{text}</span>
      <span className="activity-time">{time}</span>
    </div>
  )
}
