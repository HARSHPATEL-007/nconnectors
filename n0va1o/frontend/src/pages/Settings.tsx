import { useState } from 'react'
import { Settings as SettingsIcon, Shield, Key, Bell, Database, Cpu, Lock } from 'lucide-react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="page">
      <header className="page-header">
        <h2>Gateway Settings</h2>
      </header>

      <div className="settings-layout">
        <div className="settings-tabs">
          {[
            { id: 'general', label: 'General', icon: SettingsIcon },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'auth', label: 'Authentication', icon: Key },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'plugins', label: 'Plugins', icon: Cpu },
            { id: 'data', label: 'Data & Privacy', icon: Database },
          ].map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="settings-content">
          {activeTab === 'general' && (
            <div className="settings-panel">
              <h3>General Configuration</h3>
              <div className="form-group">
                <label>Gateway Name</label>
                <input type="text" defaultValue="N0VA1O Production Gateway" />
              </div>
              <div className="form-group">
                <label>Endpoint URL</label>
                <input type="text" defaultValue="https://n0va1o.io" />
              </div>
              <div className="form-group">
                <label>Default Transport</label>
                <select defaultValue="websocket">
                  <option value="websocket">WebSocket (Real-time)</option>
                  <option value="http_sse">HTTP SSE (Cloud)</option>
                  <option value="stdio">stdio (Local IDE)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Max Concurrent Agents</label>
                <input type="number" defaultValue={50} />
              </div>
              <div className="form-group">
                <label>Default Sandbox Timeout (seconds)</label>
                <input type="number" defaultValue={600} />
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settings-panel">
              <h3><Shield size={18} /> Security Configuration</h3>
              <div className="security-options">
                <div className="security-option">
                  <div>
                    <h4>AES-256-GCM Envelope Encryption</h4>
                    <p>Encrypt all tokens at rest with tenant-isolated keys</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="security-option">
                  <div>
                    <h4>Post-Quantum Key Exchange</h4>
                    <p>Use CRYSTALS-Kyber for key encapsulation</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="security-option">
                  <div>
                    <h4>Hardware Attestation</h4>
                    <p>Require TPM-based attestation for auth flows</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="security-option">
                  <div>
                    <h4>PII Auto-Redaction</h4>
                    <p>Automatically mask PII in agent responses</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="security-option">
                  <div>
                    <h4>Schema Modifiers</h4>
                    <p>Hide dangerous fields from agent context</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'plugins' && (
            <div className="settings-panel">
              <h3><Cpu size={18} /> 8-Slot Plugin System</h3>
              <div className="plugins-grid">
                {[
                  { name: 'Auth Optimizer', desc: 'Token lifecycle prediction', slot: 1, enabled: true },
                  { name: 'Schema Drift Detector', desc: 'API change detection', slot: 2, enabled: true },
                  { name: 'Rate Limit Predictor', desc: 'Throttling avoidance', slot: 3, enabled: true },
                  { name: 'Error Classifier', desc: 'Failure pattern learning', slot: 4, enabled: true },
                  { name: 'Payload Compressor', desc: 'Data size optimization', slot: 5, enabled: true },
                  { name: 'Route Optimizer', desc: 'Path efficiency', slot: 6, enabled: true },
                  { name: 'Security Hardening', desc: 'Vulnerability patching', slot: 7, enabled: true },
                  { name: 'Cost Optimizer', desc: 'Spend reduction', slot: 8, enabled: false },
                ].map(plugin => (
                  <div key={plugin.slot} className={`plugin-card ${plugin.enabled ? 'enabled' : 'disabled'}`}>
                    <div className="plugin-slot">Slot {plugin.slot}</div>
                    <h4>{plugin.name}</h4>
                    <p>{plugin.desc}</p>
                    <label className="toggle">
                      <input type="checkbox" defaultChecked={plugin.enabled} />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'auth' && (
            <div className="settings-panel">
              <h3><Key size={18} /> Authentication Settings</h3>
              <div className="form-group">
                <label>JWT Token Expiry (minutes)</label>
                <input type="number" defaultValue={1440} />
              </div>
              <div className="form-group">
                <label>SSO Provider</label>
                <select defaultValue="okta">
                  <option value="okta">Okta</option>
                  <option value="azure_ad">Azure AD</option>
                  <option value="auth0">Auth0</option>
                  <option value="google">Google Workspace</option>
                </select>
              </div>
              <div className="form-group">
                <label>Token Rotation Interval (days)</label>
                <input type="number" defaultValue={15} />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked /> Require MFA for all admin actions
                </label>
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-panel">
              <h3><Bell size={18} /> Notification Channels</h3>
              <div className="form-group">
                <label>Webhook URL</label>
                <input type="text" placeholder="https://hooks.example.com/n0va1o" />
              </div>
              <div className="form-group">
                <label>Email Notifications</label>
                <input type="email" placeholder="admin@company.com" />
              </div>
              <div className="form-group">
                <label>Slack Channel</label>
                <input type="text" placeholder="#n0va1o-alerts" />
              </div>
              <div className="form-group">
                <h4>Event Subscriptions</h4>
                {['connection_established', 'connection_failed', 'recipe_executed', 'approval_required', 'security_alert', 'schema_drift_detected'].map(event => (
                  <label key={event} className="checkbox-label">
                    <input type="checkbox" defaultChecked /> {event.replace(/_/g, ' ')}
                  </label>
                ))}
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="settings-panel">
              <h3><Database size={18} /> Data & Privacy</h3>
              <div className="form-group">
                <label>Audit Log Retention (days)</label>
                <input type="number" defaultValue={365} />
              </div>
              <div className="form-group">
                <label>Data Residency</label>
                <select defaultValue="us-east-1">
                  <option value="us-east-1">US East (N. Virginia)</option>
                  <option value="eu-west-1">EU West (Ireland)</option>
                  <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked /> Enable GDPR Right to Erasure automation
                </label>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked /> Store audit metadata only (no payloads)
                </label>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked /> Enable blockchain anchoring for audit chain
                </label>
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
