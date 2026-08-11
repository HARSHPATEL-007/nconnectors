import { useState } from 'react'
import { Shield, Search, Download, Hash, Clock } from 'lucide-react'

const mockAuditEvents = [
  { id: 'audit_001', time: '2026-07-15 20:47:12', agent: 'Finance Automation', action: 'tool_call', tool: 'dropbox.search_files', status: 'success', latency: 340, risk: 0.12 },
  { id: 'audit_002', time: '2026-07-15 20:47:14', agent: 'Finance Automation', action: 'tool_call', tool: 'csv_converter.convert', status: 'success', latency: 1200, risk: 0.10 },
  { id: 'audit_003', time: '2026-07-15 20:47:16', agent: 'Finance Automation', action: 'tool_call', tool: 'n0va_sheets.import_csv', status: 'success', latency: 800, risk: 0.15 },
  { id: 'audit_004', time: '2026-07-15 20:47:18', agent: 'Finance Automation', action: 'tool_call', tool: 'slack.post_message', status: 'success', latency: 300, risk: 0.30 },
  { id: 'audit_005', time: '2026-07-15 20:45:02', agent: 'Marketing Campaign', action: 'tool_call', tool: 'meta_ads.update_budget', status: 'pending_approval', latency: 600, risk: 0.75 },
  { id: 'audit_006', time: '2026-07-15 20:42:11', agent: 'DevOps Automation', action: 'sandbox_executed', tool: 'python.execute', status: 'success', latency: 2400, risk: 0.20 },
  { id: 'audit_007', time: '2026-07-15 20:40:05', agent: 'Marketing Campaign', action: 'recipe_executed', tool: 'Campaign_Performance_Report', status: 'success', latency: 120, risk: 0.05 },
  { id: 'audit_008', time: '2026-07-15 20:38:22', agent: 'Finance Automation', action: 'connection_established', tool: 'meta_ads.connect', status: 'success', latency: 450, risk: 0.05 },
]

export default function Audit() {
  const [events] = useState(mockAuditEvents)
  const [filter, setFilter] = useState('all')

  const filtered = events.filter(e => filter === 'all' || e.status === filter)

  return (
    <div className="page">
      <header className="page-header">
        <h2>Audit Trail</h2>
        <div className="header-actions">
          <button className="btn btn-secondary"><Download size={16} /> Export CSV</button>
        </div>
      </header>

      <div className="audit-stats">
        <div className="audit-stat">
          <Shield size={16} />
          <span>SHA3-512 Integrity</span>
          <span className="stat-verified">Verified</span>
        </div>
        <div className="audit-stat">
          <Hash size={16} />
          <span>Merkle Root</span>
          <code>0x7f3a...9e2d</code>
        </div>
        <div className="audit-stat">
          <Clock size={16} />
          <span>Chain Length</span>
          <span>1,247 events</span>
        </div>
      </div>

      <div className="audit-toolbar">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search audit events..." />
        </div>
        <div className="filter-tabs">
          {['all', 'success', 'pending_approval', 'failed'].map(f => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="audit-table">
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Agent</th>
              <th>Action</th>
              <th>Tool</th>
              <th>Status</th>
              <th>Latency</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(event => (
              <tr key={event.id} className={`risk-${event.risk >= 0.5 ? 'high' : event.risk >= 0.2 ? 'medium' : 'low'}`}>
                <td><code>{event.time}</code></td>
                <td>{event.agent}</td>
                <td><span className="action-tag">{event.action}</span></td>
                <td><code>{event.tool}</code></td>
                <td><span className={`badge badge-${event.status === 'success' ? 'active' : event.status === 'pending_approval' ? 'warning' : 'danger'}`}>{event.status}</span></td>
                <td>{event.latency}ms</td>
                <td>
                  <div className="risk-indicator">
                    <div className="risk-bar">
                      <div className="risk-fill" style={{ width: `${event.risk * 100}%` }}></div>
                    </div>
                    <span>{event.risk.toFixed(2)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
