export interface AuditEntry {
  id: string;
  timestamp: string;
  agentId: string;
  agentName: string;
  toolName: string;
  action: string;
  status: 'success' | 'failed' | 'blocked' | 'pending_approval';
  parameters: Record<string, unknown>;
  result?: string;
  riskScore: number;
  latencyMs: number;
  tokensUsed: number;
  sessionId: string;
  ipAddress: string;
  approvedBy?: string;
  hash: string;
}

export const auditEntries: AuditEntry[] = [
  { id: 'audit_001', timestamp: new Date(Date.now() - 30000).toISOString(), agentId: 'agent_001', agentName: 'Finance Automation Agent', toolName: 'n0va_sheets.import_csv', action: 'import_data', status: 'success', parameters: { file: 'q3_invoices.csv', rows: 240, sheet: 'Q3_2026' }, result: '240 rows imported', riskScore: 0.12, latencyMs: 680, tokensUsed: 240, sessionId: 'sess_001', ipAddress: '10.0.1.45', hash: 'sha3:a1b2c3...' },
  { id: 'audit_002', timestamp: new Date(Date.now() - 60000).toISOString(), agentId: 'agent_002', agentName: 'Marketing Campaign Agent', toolName: 'meta_ads.read_campaigns', action: 'read_campaigns', status: 'success', parameters: { account: 'act_12345', limit: 50 }, result: '12 campaigns found', riskScore: 0.05, latencyMs: 380, tokensUsed: 180, sessionId: 'sess_002', ipAddress: '10.0.1.46', hash: 'sha3:d4e5f6...' },
  { id: 'audit_003', timestamp: new Date(Date.now() - 120000).toISOString(), agentId: 'agent_001', agentName: 'Finance Automation Agent', toolName: 'drive.share_externally', action: 'share_external', status: 'blocked', parameters: { file: 'revenue_report.pdf', recipient: 'external@partner.com' }, result: 'Blocked: external sharing requires approval', riskScore: 0.72, latencyMs: 50, tokensUsed: 0, sessionId: 'sess_004', ipAddress: '10.0.1.45', hash: 'sha3:g7h8i9...' },
  { id: 'audit_004', timestamp: new Date(Date.now() - 180000).toISOString(), agentId: 'agent_003', agentName: 'DevOps Automation', toolName: 'github.create_pr', action: 'create_pr', status: 'success', parameters: { repo: 'n0va-platform', branch: 'feature/auth-v2', title: 'feat: Auth v2 migration' }, result: 'PR #4822 created', riskScore: 0.15, latencyMs: 220, tokensUsed: 150, sessionId: 'sess_003', ipAddress: '10.0.1.47', hash: 'sha3:j1k2l3...' },
  { id: 'audit_005', timestamp: new Date(Date.now() - 300000).toISOString(), agentId: 'agent_004', agentName: 'Customer Support Concierge', toolName: 'zendesk.update_ticket', action: 'update_ticket', status: 'success', parameters: { ticket_id: 4521, status: 'solved', priority: 'high' }, result: 'Ticket updated', riskScore: 0.08, latencyMs: 180, tokensUsed: 95, sessionId: 'sess_005', ipAddress: '10.0.1.48', hash: 'sha3:m4n5o6...' },
  { id: 'audit_006', timestamp: new Date(Date.now() - 450000).toISOString(), agentId: 'agent_002', agentName: 'Marketing Campaign Agent', toolName: 'meta_ads.update_budget', action: 'update_budget', status: 'pending_approval', parameters: { campaign: 'camp_789', budget_increase_pct: 35 }, result: 'Awaiting admin approval', riskScore: 0.58, latencyMs: 30, tokensUsed: 0, sessionId: 'sess_002', ipAddress: '10.0.1.46', hash: 'sha3:p7q8r9...' },
  { id: 'audit_007', timestamp: new Date(Date.now() - 600000).toISOString(), agentId: 'agent_005', agentName: 'Data Pipeline Agent', toolName: 'snowflake.run_query', action: 'execute_query', status: 'success', parameters: { warehouse: 'analytics_wh', query_hash: 'sha256:abc...', rows_returned: 50000 }, result: 'Query completed', riskScore: 0.22, latencyMs: 1800, tokensUsed: 350, sessionId: 'sess_006', ipAddress: '10.0.1.49', hash: 'sha3:s1t2u3...' },
  { id: 'audit_008', timestamp: new Date(Date.now() - 900000).toISOString(), agentId: 'agent_003', agentName: 'DevOps Automation', toolName: 'aws.ec2.terminate_instance', action: 'terminate_instance', status: 'blocked', parameters: { instance_id: 'i-0abc123', reason: 'unused for 30 days' }, result: 'Blocked: requires admin override for production instances', riskScore: 0.85, latencyMs: 20, tokensUsed: 0, sessionId: 'sess_007', ipAddress: '10.0.1.47', hash: 'sha3:v4w5x6...' },
  { id: 'audit_009', timestamp: new Date(Date.now() - 1200000).toISOString(), agentId: 'agent_001', agentName: 'Finance Automation Agent', toolName: 'stripe.create_invoice', action: 'create_invoice', status: 'success', parameters: { customer: 'cus_abc123', amount: 5400, currency: 'usd' }, result: 'Invoice inv_789 created', riskScore: 0.35, latencyMs: 420, tokensUsed: 210, sessionId: 'sess_008', ipAddress: '10.0.1.45', hash: 'sha3:y7z8a9...' },
  { id: 'audit_010', timestamp: new Date(Date.now() - 1800000).toISOString(), agentId: 'agent_006', agentName: 'HR Onboarding Agent', toolName: 'gsuite.admin.create_user', action: 'create_user', status: 'failed', parameters: { email: 'newhire@company.com', name: 'Jane Smith', dept: 'Engineering' }, result: 'Error: directory API unavailable', riskScore: 0.42, latencyMs: 5000, tokensUsed: 180, sessionId: 'sess_009', ipAddress: '10.0.1.50', hash: 'sha3:b1c2d3...' },
];
