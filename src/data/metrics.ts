export interface MetricPoint {
  time: string;
  value: number;
}

export interface DashboardMetrics {
  totalExecutions: number;
  executionsTrend: number;
  activeAgents: number;
  agentsTrend: number;
  successRate: number;
  successTrend: number;
  avgLatency: number;
  latencyTrend: number;
  totalIntegrations: number;
  connectedIntegrations: number;
  dailyActions: number;
  actionsTrend: number;
  costSavings: number;
  savingsTrend: number;
  securityScore: number;
  complianceScore: number;
}

export const dashboardMetrics: DashboardMetrics = {
  totalExecutions: 45892,
  executionsTrend: 12.5,
  activeAgents: 4,
  agentsTrend: 0,
  successRate: 96.8,
  successTrend: 1.2,
  avgLatency: 340,
  latencyTrend: -15.3,
  totalIntegrations: 1024,
  connectedIntegrations: 18,
  dailyActions: 4817,
  actionsTrend: 8.7,
  costSavings: 142000,
  savingsTrend: 22.1,
  securityScore: 98,
  complianceScore: 100,
};

export const executionChartData: MetricPoint[] = [
  { time: '00:00', value: 120 },
  { time: '02:00', value: 85 },
  { time: '04:00', value: 45 },
  { time: '06:00', value: 90 },
  { time: '08:00', value: 280 },
  { time: '09:00', value: 420 },
  { time: '10:00', value: 380 },
  { time: '11:00', value: 450 },
  { time: '12:00', value: 320 },
  { time: '13:00', value: 480 },
  { time: '14:00', value: 520 },
  { time: '15:00', value: 440 },
  { time: '16:00', value: 380 },
  { time: '17:00', value: 290 },
  { time: '18:00', value: 180 },
];

export const latencyChartData: MetricPoint[] = [
  { time: 'Mon', value: 420 },
  { time: 'Tue', value: 380 },
  { time: 'Wed', value: 340 },
  { time: 'Thu', value: 290 },
  { time: 'Fri', value: 310 },
  { time: 'Sat', value: 250 },
  { time: 'Sun', value: 220 },
];

export const integrationUsageData = [
  { name: 'Meta Ads', executions: 1240, success: 97.2 },
  { name: 'Google Ads', executions: 980, success: 96.8 },
  { name: 'Salesforce', executions: 850, success: 99.1 },
  { name: 'Slack', executions: 2100, success: 99.8 },
  { name: 'GitHub', executions: 1560, success: 98.5 },
  { name: 'Stripe', executions: 720, success: 98.2 },
  { name: 'Drive', executions: 1890, success: 97.9 },
  { name: 'Sheets', executions: 1340, success: 98.1 },
];

export const agentPerformanceData = [
  { name: 'Finance Agent', actions: 847, success: 97, latency: 340 },
  { name: 'Marketing Agent', actions: 1234, success: 94, latency: 520 },
  { name: 'DevOps Agent', actions: 523, success: 99, latency: 180 },
  { name: 'Support Agent', actions: 312, success: 96, latency: 290 },
  { name: 'Data Pipeline', actions: 2156, success: 98, latency: 890 },
  { name: 'HR Agent', actions: 45, success: 88, latency: 450 },
];
