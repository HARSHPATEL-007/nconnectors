import { useState } from 'react'
import { Link2, CheckCircle, AlertCircle, RefreshCw, Shield } from 'lucide-react'

const mockConnections = [
  { id: 'conn_meta_001', provider: 'Meta Ads', status: 'active', health: 0.98, usage: 1543, lastUsed: '2 min ago', auth: 'oauth2.1' },
  { id: 'conn_google_001', provider: 'Google Ads', status: 'active', health: 0.95, usage: 892, lastUsed: '5 min ago', auth: 'oauth2.1' },
  { id: 'conn_salesforce_001', provider: 'Salesforce', status: 'active', health: 0.99, usage: 456, lastUsed: '12 min ago', auth: 'oauth2.1' },
  { id: 'conn_slack_001', provider: 'Slack', status: 'active', health: 1.0, usage: 2341, lastUsed: '1 min ago', auth: 'oauth2.1' },
  { id: 'conn_github_001', provider: 'GitHub', status: 'active', health: 0.97, usage: 678, lastUsed: '8 min ago', auth: 'oauth2.0' },
  { id: 'conn_shopify_001', provider: 'Shopify', status: 'active', health: 0.96, usage: 234, lastUsed: '15 min ago', auth: 'oauth2.0' },
  { id: 'conn_stripe_001', provider: 'Stripe', status: 'active', health: 0.99, usage: 1234, lastUsed: '3 min ago', auth: 'api_key' },
  { id: 'conn_hubspot_001', provider: 'HubSpot', status: 'degraded', health: 0.72, usage: 567, lastUsed: '30 min ago', auth: 'oauth2.1' },
]

export default function Connections() {
  const [connections] = useState(mockConnections)

  return (
    <div className="page">
      <header className="page-header">
        <h2>Platform Connections</h2>
        <button className="btn btn-primary"><Link2 size={16} /> Connect Platform</button>
      </header>

      <div className="connections-summary">
        <div className="summary-item">
          <CheckCircle size={16} />
          <span>{connections.filter(c => c.status === 'active').length} Active</span>
        </div>
        <div className="summary-item">
          <AlertCircle size={16} />
          <span>{connections.filter(c => c.status === 'degraded').length} Degraded</span>
        </div>
        <div className="summary-item">
          <Shield size={16} />
          <span>All AES-256-GCM encrypted</span>
        </div>
      </div>

      <div className="connections-grid">
        {connections.map(conn => (
          <div key={conn.id} className={`connection-card status-${conn.status}`}>
            <div className="connection-header">
              <div className="provider-icon">{conn.provider[0]}</div>
              <div className="connection-info">
                <h3>{conn.provider}</h3>
                <code className="connection-id">{conn.id}</code>
              </div>
              <span className={`badge badge-${conn.status}`}>{conn.status}</span>
            </div>
            <div className="health-bar">
              <div className="health-fill" style={{ width: `${conn.health * 100}%` }}></div>
              <span className="health-text">{(conn.health * 100).toFixed(0)}% health</span>
            </div>
            <div className="connection-meta">
              <span>Auth: <code>{conn.auth}</code></span>
              <span>Usage: {conn.usage.toLocaleString()} calls</span>
              <span>Last: {conn.lastUsed}</span>
            </div>
            <div className="connection-actions">
              <button className="btn btn-sm"><RefreshCw size={14} /> Refresh Token</button>
              <button className="btn btn-sm btn-secondary">Switch Account</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
