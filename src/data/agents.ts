export interface Agent {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'active' | 'idle' | 'paused' | 'error';
  autonomyLevel: 'low' | 'medium' | 'high' | 'full';
  permissions: string[];
  sandboxEnabled: boolean;
  toolsAvailable: number;
  toolsUsed: number;
  dailyActions: number;
  maxDailyActions: number;
  successRate: number;
  avgLatency: number;
  lastActive: string;
  created: string;
  model: string;
  approvalRequired: string[];
}

export const agents: Agent[] = [
  {
    id: 'agent_001',
    name: 'Finance Automation Agent',
    type: 'workflow_orchestrator',
    description: 'Autonomous multi-app workflow execution for finance operations — invoice processing, reconciliation, reporting',
    status: 'active',
    autonomyLevel: 'high',
    permissions: ['storage.read', 'storage.write', 'sheets.write', 'slack.post', 'email.send'],
    sandboxEnabled: true,
    toolsAvailable: 48,
    toolsUsed: 12,
    dailyActions: 847,
    maxDailyActions: 10000,
    successRate: 0.97,
    avgLatency: 340,
    lastActive: new Date(Date.now() - 30000).toISOString(),
    created: '2026-06-15T10:00:00Z',
    model: 'claude-3-5-sonnet-20241022',
    approvalRequired: ['storage.share_externally', 'email.send_to_external'],
  },
  {
    id: 'agent_002',
    name: 'Marketing Campaign Agent',
    type: 'campaign_orchestrator',
    description: 'End-to-end campaign management — creative upload, audience sync, bid optimization, performance reporting',
    status: 'active',
    autonomyLevel: 'medium',
    permissions: ['meta_ads.read', 'meta_ads.write', 'google_ads.read', 'analytics.read', 'slack.post'],
    sandboxEnabled: true,
    toolsAvailable: 62,
    toolsUsed: 24,
    dailyActions: 1234,
    maxDailyActions: 10000,
    successRate: 0.94,
    avgLatency: 520,
    lastActive: new Date(Date.now() - 120000).toISOString(),
    created: '2026-06-20T14:30:00Z',
    model: 'claude-3-5-sonnet-20241022',
    approvalRequired: ['meta_ads.update_budget', 'google_ads.update_budget', 'meta_ads.create_campaign'],
  },
  {
    id: 'agent_003',
    name: 'DevOps Automation',
    type: 'infrastructure_orchestrator',
    description: 'CI/CD pipeline management, deployment automation, incident response, code review',
    status: 'active',
    autonomyLevel: 'high',
    permissions: ['github.read', 'github.write', 'aws.ec2.manage', 'aws.lambda.invoke', 'slack.post'],
    sandboxEnabled: true,
    toolsAvailable: 56,
    toolsUsed: 18,
    dailyActions: 523,
    maxDailyActions: 50000,
    successRate: 0.99,
    avgLatency: 180,
    lastActive: new Date(Date.now() - 5000).toISOString(),
    created: '2026-05-10T08:00:00Z',
    model: 'claude-3-5-sonnet-20241022',
    approvalRequired: ['github.delete_repository', 'aws.ec2.terminate_instance'],
  },
  {
    id: 'agent_004',
    name: 'Customer Support Concierge',
    type: 'support_orchestrator',
    description: 'Intelligent ticket routing, response drafting, escalation management, knowledge base lookup',
    status: 'idle',
    autonomyLevel: 'medium',
    permissions: ['zendesk.read', 'zendesk.write', 'slack.post', 'slack.read'],
    sandboxEnabled: false,
    toolsAvailable: 34,
    toolsUsed: 8,
    dailyActions: 312,
    maxDailyActions: 5000,
    successRate: 0.96,
    avgLatency: 290,
    lastActive: new Date(Date.now() - 600000).toISOString(),
    created: '2026-07-01T12:00:00Z',
    model: 'gpt-4-turbo-preview',
    approvalRequired: ['zendesk.delete_ticket', 'slack.post_to_external'],
  },
  {
    id: 'agent_005',
    name: 'Data Pipeline Agent',
    type: 'data_orchestrator',
    description: 'ETL pipeline orchestration, data warehouse sync, quality monitoring, anomaly detection',
    status: 'paused',
    autonomyLevel: 'full',
    permissions: ['snowflake.read', 'snowflake.write', 's3.read', 's3.write', 'bigquery.read'],
    sandboxEnabled: true,
    toolsAvailable: 72,
    toolsUsed: 31,
    dailyActions: 2156,
    maxDailyActions: 100000,
    successRate: 0.98,
    avgLatency: 890,
    lastActive: new Date(Date.now() - 3600000).toISOString(),
    created: '2026-04-22T09:15:00Z',
    model: 'claude-3-5-sonnet-20241022',
    approvalRequired: ['snowflake.delete_table', 's3.delete_bucket'],
  },
  {
    id: 'agent_006',
    name: 'HR Onboarding Agent',
    type: 'workflow_orchestrator',
    description: 'Automated employee onboarding — account provisioning, document collection, training scheduling',
    status: 'error',
    autonomyLevel: 'low',
    permissions: ['bamboohr.read', 'slack.post', 'google_drive.read', 'gsuite.admin'],
    sandboxEnabled: false,
    toolsAvailable: 28,
    toolsUsed: 6,
    dailyActions: 45,
    maxDailyActions: 1000,
    successRate: 0.88,
    avgLatency: 450,
    lastActive: new Date(Date.now() - 7200000).toISOString(),
    created: '2026-07-05T16:00:00Z',
    model: 'claude-3-5-sonnet-20241022',
    approvalRequired: ['gsuite.admin.create_user', 'gsuite.admin.delete_user', 'bamboohr.update_salary'],
  },
];
