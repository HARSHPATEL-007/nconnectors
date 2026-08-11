import { useState } from 'react'
import { Activity, Play, Pause, Square, Clock } from 'lucide-react'

const mockSessions = [
  { id: 'sess_abc123', agent: 'Finance Automation', type: 'interactive', status: 'active', tools: 4, steps: 7, started: '2 min ago' },
  { id: 'sess_def456', agent: 'Marketing Campaign', type: 'automated', status: 'active', tools: 6, steps: 12, started: '5 min ago' },
  { id: 'sess_ghi789', agent: 'DevOps Automation', type: 'sandbox', status: 'paused', tools: 3, steps: 3, started: '15 min ago' },
  { id: 'sess_jkl012', agent: 'Finance Automation', type: 'recipe', status: 'completed', tools: 4, steps: 4, started: '1 hour ago' },
  { id: 'sess_mno345', agent: 'Marketing Campaign', type: 'interactive', status: 'failed', tools: 8, steps: 23, started: '2 hours ago' },
]

export default function Sessions() {
  const [sessions] = useState(mockSessions)

  return (
    <div className="page">
      <header className="page-header">
        <h2>Active Sessions</h2>
        <button className="btn btn-primary"><Play size={16} /> New Session</button>
      </header>

      <div className="sessions-list">
        {sessions.map(session => (
          <div key={session.id} className={`session-card status-${session.status}`}>
            <div className="session-header">
              <div className="session-id">
                <Activity size={16} />
                <code>{session.id}</code>
              </div>
              <span className={`badge badge-${session.status}`}>{session.status}</span>
            </div>
            <div className="session-details">
              <div className="session-detail">
                <span className="detail-label">Agent</span>
                <span className="detail-value">{session.agent}</span>
              </div>
              <div className="session-detail">
                <span className="detail-label">Type</span>
                <span className="detail-value">{session.type}</span>
              </div>
              <div className="session-detail">
                <span className="detail-label">Tools</span>
                <span className="detail-value">{session.tools}</span>
              </div>
              <div className="session-detail">
                <span className="detail-label">Steps</span>
                <span className="detail-value">{session.steps}</span>
              </div>
              <div className="session-detail">
                <span className="detail-label">Started</span>
                <span className="detail-value"><Clock size={12} /> {session.started}</span>
              </div>
            </div>
            <div className="session-actions">
              {session.status === 'active' && <button className="btn btn-sm"><Pause size={14} /> Pause</button>}
              {session.status === 'paused' && <button className="btn btn-sm btn-primary"><Play size={14} /> Resume</button>}
              {(session.status === 'active' || session.status === 'paused') && (
                <button className="btn btn-sm btn-danger"><Square size={14} /> Terminate</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
