import { useState } from 'react'
import { Bot, Plus, Settings, Play, Pause, Trash2 } from 'lucide-react'

const mockAgents = [
  {
    id: 'agent_001',
    name: 'Finance Automation Agent',
    type: 'workflow_orchestrator',
    status: 'active',
    tools: 8,
    autonomy: 'high',
    executions: 1247,
    successRate: 0.96,
    lastActive: '2 min ago',
  },
  {
    id: 'agent_002',
    name: 'Marketing Campaign Agent',
    type: 'campaign_orchestrator',
    status: 'active',
    tools: 12,
    autonomy: 'medium',
    executions: 892,
    successRate: 0.94,
    lastActive: '5 min ago',
  },
  {
    id: 'agent_003',
    name: 'DevOps Automation',
    type: 'infrastructure_orchestrator',
    status: 'paused',
    tools: 15,
    autonomy: 'high',
    executions: 456,
    successRate: 0.91,
    lastActive: '1 hour ago',
  },
]

export default function Agents() {
  const [agents, setAgents] = useState(mockAgents)
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="page">
      <header className="page-header">
        <h2>Agent Management</h2>
        <button className="btn btn-primary" onClick={() => setShowCreate(!showCreate)}>
          <Plus size={16} /> Register Agent
        </button>
      </header>

      {showCreate && (
        <div className="create-panel">
          <h3>Register New Agent</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Agent Name</label>
              <input type="text" placeholder="e.g., Sales Automation Agent" />
            </div>
            <div className="form-group">
              <label>Agent Type</label>
              <select>
                <option value="workflow_orchestrator">Workflow Orchestrator</option>
                <option value="campaign_orchestrator">Campaign Orchestrator</option>
                <option value="infrastructure_orchestrator">Infrastructure Orchestrator</option>
                <option value="concierge">Concierge</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <div className="form-group">
              <label>Autonomy Level</label>
              <select>
                <option value="low">Low — Always require approval</option>
                <option value="medium">Medium — Approval for high-risk</option>
                <option value="high">High — Auto-execute most actions</option>
                <option value="full">Full — Complete autonomy</option>
              </select>
            </div>
            <div className="form-group">
              <label>Max Daily Actions</label>
              <input type="number" defaultValue={10000} />
            </div>
          </div>
          <div className="form-group">
            <label>Permissions</label>
            <div className="permissions-grid">
              {['storage.read', 'storage.write', 'sheets.read', 'sheets.write', 'slack.post', 'crm.read', 'crm.write', 'sandbox.execute'].map(p => (
                <label key={p} className="checkbox-label">
                  <input type="checkbox" /> {p}
                </label>
              ))}
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary">Register Agent</button>
            <button className="btn btn-secondary" onClick={() => setShowCreate(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="agents-grid">
        {agents.map(agent => (
          <div key={agent.id} className="agent-card">
            <div className="agent-header">
              <div className="agent-icon">
                <Bot size={20} />
              </div>
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <span className="agent-type">{agent.type}</span>
              </div>
              <span className={`badge badge-${agent.status}`}>{agent.status}</span>
            </div>
            <div className="agent-stats">
              <div className="stat">
                <span className="stat-value">{agent.tools}</span>
                <span className="stat-label">Tools</span>
              </div>
              <div className="stat">
                <span className="stat-value">{agent.executions}</span>
                <span className="stat-label">Executions</span>
              </div>
              <div className="stat">
                <span className="stat-value">{(agent.successRate * 100).toFixed(0)}%</span>
                <span className="stat-label">Success</span>
              </div>
            </div>
            <div className="agent-meta">
              <span>Autonomy: <strong>{agent.autonomy}</strong></span>
              <span>Last active: {agent.lastActive}</span>
            </div>
            <div className="agent-actions">
              <button className="btn btn-sm btn-icon"><Play size={14} /></button>
              <button className="btn btn-sm btn-icon"><Pause size={14} /></button>
              <button className="btn btn-sm btn-icon"><Settings size={14} /></button>
              <button className="btn btn-sm btn-icon btn-danger"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
