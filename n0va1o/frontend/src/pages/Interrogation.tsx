import { useState } from 'react'
import { AlertTriangle, CheckCircle, XCircle, Clock, Shield, Eye } from 'lucide-react'

const mockRooms = [
  {
    id: 'room_001',
    tool: 'meta_ads.update_budget',
    agent: 'Marketing Campaign',
    risk: 0.75,
    riskLevel: 'high',
    status: 'pending',
    created: '2 min ago',
    factors: ['high_value_transaction', 'budget_modification'],
    parameters: { campaign_id: 'camp_123', budget_amount: 15000, budget_type: 'daily' },
    reasoning: ['Detected budget increase request', 'Amount exceeds $5K threshold', 'Requires human approval per policy'],
  },
  {
    id: 'room_002',
    tool: 'n0va1o.delete_resource',
    agent: 'DevOps Automation',
    risk: 0.85,
    riskLevel: 'critical',
    status: 'approved',
    created: '15 min ago',
    factors: ['destructive_action', 'resource_deletion'],
    parameters: { resource_type: 'database', resource_id: 'db_staging_001' },
    reasoning: ['Agent requested database deletion', 'Staging environment confirmed', 'Approved by admin@acme.io'],
  },
]

export default function Interrogation() {
  const [rooms] = useState(mockRooms)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  return (
    <div className="page">
      <header className="page-header">
        <h2>Interrogation Rooms</h2>
        <p className="subtitle">Human-in-the-loop review for high-risk agent actions</p>
      </header>

      <div className="interrogation-stats">
        <div className="stat-card critical">
          <AlertTriangle size={18} />
          <div>
            <span className="stat-value">1</span>
            <span className="stat-label">Pending Review</span>
          </div>
        </div>
        <div className="stat-card">
          <CheckCircle size={18} />
          <div>
            <span className="stat-value">12</span>
            <span className="stat-label">Approved Today</span>
          </div>
        </div>
        <div className="stat-card">
          <XCircle size={18} />
          <div>
            <span className="stat-value">2</span>
            <span className="stat-label">Rejected Today</span>
          </div>
        </div>
        <div className="stat-card">
          <Clock size={18} />
          <div>
            <span className="stat-value">4.2h</span>
            <span className="stat-label">Avg Decision Time</span>
          </div>
        </div>
      </div>

      <div className="rooms-grid">
        {rooms.map(room => (
          <div
            key={room.id}
            className={`room-card risk-${room.riskLevel} status-${room.status}`}
            onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
          >
            <div className="room-header">
              <div className="room-risk">
                <AlertTriangle size={16} />
                <span className="risk-score">{room.risk.toFixed(2)}</span>
                <span className={`risk-level level-${room.riskLevel}`}>{room.riskLevel}</span>
              </div>
              <span className={`badge badge-${room.status === 'pending' ? 'warning' : 'active'}`}>{room.status}</span>
            </div>
            <h3><code>{room.tool}</code></h3>
            <p className="room-agent">Agent: {room.agent}</p>
            <div className="room-factors">
              {room.factors.map(f => <span key={f} className="factor-tag">{f}</span>)}
            </div>

            {selectedRoom === room.id && (
              <div className="room-details">
                <div className="detail-section">
                  <h4><Eye size={14} /> Agent Reasoning</h4>
                  <ul>
                    {room.reasoning.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
                <div className="detail-section">
                  <h4>Parameters</h4>
                  <pre>{JSON.stringify(room.parameters, null, 2)}</pre>
                </div>
                {room.status === 'pending' && (
                  <div className="room-actions">
                    <button className="btn btn-sm btn-primary"><CheckCircle size={14} /> Approve</button>
                    <button className="btn btn-sm btn-danger"><XCircle size={14} /> Reject</button>
                    <button className="btn btn-sm btn-secondary">Modify</button>
                    <button className="btn btn-sm btn-secondary">Escalate</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
