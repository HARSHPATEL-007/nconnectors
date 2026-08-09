export interface Session {
  id: string;
  agentId: string;
  agentName: string;
  type: 'interactive' | 'automated' | 'webhook' | 'scheduled';
  status: 'running' | 'completed' | 'paused' | 'failed' | 'waiting_approval';
  startTime: string;
  endTime?: string;
  steps: SessionStep[];
  currentStep: number;
  totalSteps: number;
  toolsInvoked: string[];
  tokensUsed: number;
  latencyMs: number;
  riskScore: number;
  user?: string;
  context?: string;
}

export interface SessionStep {
  step: number;
  action: string;
  tool: string;
  status: 'completed' | 'running' | 'failed' | 'pending';
  latencyMs: number;
  timestamp: string;
  result?: string;
}

export const sessions: Session[] = [
  {
    id: 'sess_001',
    agentId: 'agent_001',
    agentName: 'Finance Automation Agent',
    type: 'automated',
    status: 'running',
    startTime: new Date(Date.now() - 180000).toISOString(),
    currentStep: 3,
    totalSteps: 5,
    toolsInvoked: ['dropbox.search_files', 'csv_converter.convert', 'n0va_sheets.import_csv'],
    tokensUsed: 4520,
    latencyMs: 2340,
    riskScore: 0.12,
    context: 'Q3 Invoice Processing',
    steps: [
      { step: 1, action: 'Search invoices', tool: 'dropbox.search_files', status: 'completed', latencyMs: 450, timestamp: new Date(Date.now() - 175000).toISOString(), result: 'Found 24 PDF files' },
      { step: 2, action: 'Convert to CSV', tool: 'csv_converter.convert', status: 'completed', latencyMs: 1200, timestamp: new Date(Date.now() - 120000).toISOString(), result: 'Converted 24 files' },
      { step: 3, action: 'Import to Sheets', tool: 'n0va_sheets.import_csv', status: 'running', latencyMs: 690, timestamp: new Date(Date.now() - 30000).toISOString() },
      { step: 4, action: 'Notify Slack', tool: 'slack.post_message', status: 'pending', latencyMs: 0, timestamp: '' },
      { step: 5, action: 'Update audit log', tool: 'n0va_audit.log', status: 'pending', latencyMs: 0, timestamp: '' },
    ],
  },
  {
    id: 'sess_002',
    agentId: 'agent_002',
    agentName: 'Marketing Campaign Agent',
    type: 'interactive',
    status: 'running',
    startTime: new Date(Date.now() - 90000).toISOString(),
    currentStep: 2,
    totalSteps: 4,
    toolsInvoked: ['meta_ads.read_campaigns', 'analytics.read_report'],
    tokensUsed: 2100,
    latencyMs: 1100,
    riskScore: 0.35,
    user: 'sarah@company.com',
    context: 'Campaign performance review',
    steps: [
      { step: 1, action: 'Fetch campaign data', tool: 'meta_ads.read_campaigns', status: 'completed', latencyMs: 380, timestamp: new Date(Date.now() - 85000).toISOString(), result: '12 active campaigns' },
      { step: 2, action: 'Analyze performance', tool: 'analytics.read_report', status: 'running', latencyMs: 720, timestamp: new Date(Date.now() - 30000).toISOString() },
      { step: 3, action: 'Generate insights', tool: 'llm.analyze', status: 'pending', latencyMs: 0, timestamp: '' },
      { step: 4, action: 'Send report', tool: 'slack.post_message', status: 'pending', latencyMs: 0, timestamp: '' },
    ],
  },
  {
    id: 'sess_003',
    agentId: 'agent_003',
    agentName: 'DevOps Automation',
    type: 'webhook',
    status: 'completed',
    startTime: new Date(Date.now() - 600000).toISOString(),
    endTime: new Date(Date.now() - 540000).toISOString(),
    currentStep: 4,
    totalSteps: 4,
    toolsInvoked: ['github.read_pr', 'github.run_ci', 'slack.post_message'],
    tokensUsed: 1800,
    latencyMs: 450,
    riskScore: 0.08,
    context: 'PR #4821 opened',
    steps: [
      { step: 1, action: 'Read PR details', tool: 'github.read_pr', status: 'completed', latencyMs: 120, timestamp: new Date(Date.now() - 595000).toISOString(), result: 'PR #4821 by @devuser' },
      { step: 2, action: 'Run CI checks', tool: 'github.run_ci', status: 'completed', latencyMs: 280, timestamp: new Date(Date.now() - 580000).toISOString(), result: 'All checks passed' },
      { step: 3, action: 'Assign reviewer', tool: 'github.assign_reviewer', status: 'completed', latencyMs: 50, timestamp: new Date(Date.now() - 560000).toISOString(), result: 'Assigned @seniordev' },
      { step: 4, action: 'Notify team', tool: 'slack.post_message', status: 'completed', latencyMs: 0, timestamp: new Date(Date.now() - 545000).toISOString(), result: 'Posted to #engineering' },
    ],
  },
  {
    id: 'sess_004',
    agentId: 'agent_001',
    agentName: 'Finance Automation Agent',
    type: 'automated',
    status: 'waiting_approval',
    startTime: new Date(Date.now() - 300000).toISOString(),
    currentStep: 3,
    totalSteps: 5,
    toolsInvoked: ['stripe.read_charges', 'sheets.read'],
    tokensUsed: 3200,
    latencyMs: 890,
    riskScore: 0.72,
    context: 'Monthly revenue report >$50K',
    steps: [
      { step: 1, action: 'Fetch Stripe data', tool: 'stripe.read_charges', status: 'completed', latencyMs: 320, timestamp: new Date(Date.now() - 295000).toISOString(), result: '1,247 charges found' },
      { step: 2, action: 'Read existing sheet', tool: 'sheets.read', status: 'completed', latencyMs: 210, timestamp: new Date(Date.now() - 250000).toISOString(), result: 'Current MRR: $142K' },
      { step: 3, action: 'Prepare external share', tool: 'drive.share_externally', status: 'running', latencyMs: 360, timestamp: new Date(Date.now() - 200000).toISOString() },
      { step: 4, action: 'Send to stakeholders', tool: 'email.send', status: 'pending', latencyMs: 0, timestamp: '' },
      { step: 5, action: 'Log compliance', tool: 'audit.log', status: 'pending', latencyMs: 0, timestamp: '' },
    ],
  },
  {
    id: 'sess_005',
    agentId: 'agent_004',
    agentName: 'Customer Support Concierge',
    type: 'interactive',
    status: 'failed',
    startTime: new Date(Date.now() - 900000).toISOString(),
    endTime: new Date(Date.now() - 850000).toISOString(),
    currentStep: 2,
    totalSteps: 3,
    toolsInvoked: ['zendesk.read_ticket'],
    tokensUsed: 890,
    latencyMs: 1200,
    riskScore: 0.45,
    user: 'john@company.com',
    context: 'Escalation request',
    steps: [
      { step: 1, action: 'Read ticket', tool: 'zendesk.read_ticket', status: 'completed', latencyMs: 150, timestamp: new Date(Date.now() - 895000).toISOString(), result: 'Ticket #4521' },
      { step: 2, action: 'Generate response', tool: 'llm.generate', status: 'failed', latencyMs: 1050, timestamp: new Date(Date.now() - 870000).toISOString(), result: 'Model timeout' },
      { step: 3, action: 'Send response', tool: 'slack.post_message', status: 'pending', latencyMs: 0, timestamp: '' },
    ],
  },
];
