import { mcpServer } from './services/mcp-server.js';
import { authService } from './services/auth.js';
import { toolRegistry } from './services/tool-registry.js';
import { sessionManager } from './services/session.js';
import { auditService } from './services/audit.js';
import { hitlService } from './services/hitl.js';
import { sandboxRuntime } from './services/sandbox.js';
import { recipeCompiler } from './services/recipe-compiler.js';
import { protocolTranslator } from './services/protocol-translator.js';
import { schemaModifier } from './services/modifiers.js';
import { config } from './config/index.js';
import type { ToolDefinition } from './types/index.js';

function seedTools(): void {
  const tools: ToolDefinition[] = [
    { name: 'dropbox.search_files', description: 'Search for files in Dropbox by name, type, or content', parameters: { query: { type: 'string', description: 'Search query', required: true }, path: { type: 'string', description: 'Folder path to search in' }, limit: { type: 'number', description: 'Max results', default: 50 } }, provider: 'dropbox', integration: 'dropbox', category: 'storage', risk_level: 'low', required_scopes: ['files.content.read'], estimated_latency_ms: 450, deprecated: false },
    { name: 'dropbox.upload_file', description: 'Upload a file to Dropbox', parameters: { path: { type: 'string', description: 'Destination path', required: true }, content: { type: 'string', description: 'File content' } }, provider: 'dropbox', integration: 'dropbox', category: 'storage', risk_level: 'medium', required_scopes: ['files.content.write'], estimated_latency_ms: 800, deprecated: false },
    { name: 'slack.post_message', description: 'Post a message to a Slack channel', parameters: { channel: { type: 'string', description: 'Channel name or ID', required: true }, text: { type: 'string', description: 'Message text', required: true }, thread_ts: { type: 'string', description: 'Thread timestamp for replies' } }, provider: 'slack', integration: 'slack', category: 'communication', risk_level: 'medium', required_scopes: ['chat:write'], estimated_latency_ms: 300, deprecated: false },
    { name: 'slack.list_channels', description: 'List all channels in a Slack workspace', parameters: { types: { type: 'string', description: 'Channel types to include' } }, provider: 'slack', integration: 'slack', category: 'communication', risk_level: 'low', required_scopes: ['channels:read'], estimated_latency_ms: 250, deprecated: false },
    { name: 'google_drive.read', description: 'Read a file from Google Drive', parameters: { file_id: { type: 'string', description: 'File ID', required: true }, mime_type: { type: 'string', description: 'Export MIME type' } }, provider: 'google', integration: 'google_drive', category: 'storage', risk_level: 'low', required_scopes: ['drive.readonly'], estimated_latency_ms: 400, deprecated: false },
    { name: 'google_drive.upload', description: 'Upload a file to Google Drive', parameters: { name: { type: 'string', description: 'File name', required: true }, content: { type: 'string', description: 'File content' }, parent_id: { type: 'string', description: 'Parent folder ID' } }, provider: 'google', integration: 'google_drive', category: 'storage', risk_level: 'medium', required_scopes: ['drive.file'], estimated_latency_ms: 600, deprecated: false },
    { name: 'salesforce.create', description: 'Create a new record in Salesforce', parameters: { object_type: { type: 'string', description: 'Salesforce object type', required: true }, fields: { type: 'object', description: 'Field values', required: true } }, provider: 'salesforce', integration: 'salesforce', category: 'crm', risk_level: 'medium', required_scopes: ['api'], estimated_latency_ms: 500, deprecated: false },
    { name: 'salesforce.query', description: 'Query records from Salesforce', parameters: { query: { type: 'string', description: 'SOQL query', required: true } }, provider: 'salesforce', integration: 'salesforce', category: 'crm', risk_level: 'low', required_scopes: ['api'], estimated_latency_ms: 450, deprecated: false },
    { name: 'github.list_pull_requests', description: 'List pull requests in a GitHub repository', parameters: { owner: { type: 'string', description: 'Repository owner', required: true }, repo: { type: 'string', description: 'Repository name', required: true }, state: { type: 'string', description: 'PR state filter', default: 'open' } }, provider: 'github', integration: 'github', category: 'devops', risk_level: 'low', required_scopes: ['repo'], estimated_latency_ms: 350, deprecated: false },
    { name: 'github.create_issue', description: 'Create a new issue in a GitHub repository', parameters: { owner: { type: 'string', description: 'Repository owner', required: true }, repo: { type: 'string', description: 'Repository name', required: true }, title: { type: 'string', description: 'Issue title', required: true }, body: { type: 'string', description: 'Issue body' } }, provider: 'github', integration: 'github', category: 'devops', risk_level: 'medium', required_scopes: ['repo'], estimated_latency_ms: 400, deprecated: false },
    { name: 'stripe.create_charge', description: 'Create a payment charge via Stripe', parameters: { amount: { type: 'number', description: 'Amount in cents', required: true }, currency: { type: 'string', description: 'Currency code', default: 'usd' }, customer: { type: 'string', description: 'Customer ID' } }, provider: 'stripe', integration: 'stripe', category: 'finance', risk_level: 'high', required_scopes: ['write'], estimated_latency_ms: 600, deprecated: false },
    { name: 'csv_converter.convert', description: 'Convert files to CSV format', parameters: { source_format: { type: 'string', description: 'Source file format', required: true }, target_format: { type: 'string', description: 'Target format', default: 'csv' }, file_path: { type: 'string', description: 'Path to source file', required: true } }, provider: 'n0va', integration: 'csv_converter', category: 'utility', risk_level: 'low', required_scopes: ['sandbox.execute'], estimated_latency_ms: 2000, deprecated: false },
    { name: 'n0va_sheets.import_csv', description: 'Import CSV data into N0VA Sheets', parameters: { csv_data: { type: 'string', description: 'CSV content', required: true }, workbook_id: { type: 'string', description: 'Target workbook ID' }, sheet_name: { type: 'string', description: 'Sheet name' } }, provider: 'n0va', integration: 'n0va_sheets', category: 'productivity', risk_level: 'low', required_scopes: ['sheets.write'], estimated_latency_ms: 800, deprecated: false },
    { name: 'hubspot.create_contact', description: 'Create a new contact in HubSpot', parameters: { email: { type: 'string', description: 'Contact email', required: true }, firstname: { type: 'string', description: 'First name' }, lastname: { type: 'string', description: 'Last name' } }, provider: 'hubspot', integration: 'hubspot', category: 'crm', risk_level: 'medium', required_scopes: ['contacts'], estimated_latency_ms: 400, deprecated: false },
    { name: 'shopify.list_products', description: 'List products from a Shopify store', parameters: { limit: { type: 'number', description: 'Max products', default: 50 }, collection_id: { type: 'string', description: 'Filter by collection' } }, provider: 'shopify', integration: 'shopify', category: 'ecommerce', risk_level: 'low', required_scopes: ['read_products'], estimated_latency_ms: 500, deprecated: false },
    { name: 'jira.create_issue', description: 'Create a new issue in Jira', parameters: { project: { type: 'string', description: 'Project key', required: true }, summary: { type: 'string', description: 'Issue summary', required: true }, issue_type: { type: 'string', description: 'Issue type', default: 'Task' } }, provider: 'jira', integration: 'jira', category: 'productivity', risk_level: 'medium', required_scopes: ['write:jira-work'], estimated_latency_ms: 450, deprecated: false },
  ];

  for (const tool of tools) {
    toolRegistry.registerTool(tool);
  }

  const integrations = [
    { id: 'dropbox', name: 'Dropbox', category: 'storage' },
    { id: 'slack', name: 'Slack', category: 'communication' },
    { id: 'google_drive', name: 'Google Drive', category: 'storage' },
    { id: 'salesforce', name: 'Salesforce', category: 'crm' },
    { id: 'github', name: 'GitHub', category: 'devops' },
    { id: 'stripe', name: 'Stripe', category: 'finance' },
    { id: 'hubspot', name: 'HubSpot', category: 'crm' },
    { id: 'shopify', name: 'Shopify', category: 'ecommerce' },
    { id: 'jira', name: 'Jira', category: 'productivity' },
    { id: 'csv_converter', name: 'CSV Converter', category: 'utility' },
    { id: 'n0va_sheets', name: 'N0VA Sheets', category: 'productivity' },
  ];

  for (const int of integrations) {
    toolRegistry.registerIntegration(int.id, int.name, int.category);
  }

  console.log(`[N0VA1O] Seeded ${tools.length} tools across ${integrations.length} integrations`);
}

function setupEventListeners(): void {
  authService.on('agent.registered', (agent) => {
    console.log(`[N0VA1O] Agent registered: ${agent.name} (${agent.agent_id})`);
  });

  authService.on('connection.established', ({ connection_id, provider }) => {
    console.log(`[N0VA1O] Connection established: ${provider} (${connection_id})`);
  });

  sessionManager.on('session.created', ({ session_id, agent_id }) => {
    console.log(`[N0VA1O] Session created: ${session_id} for agent ${agent_id}`);
  });

  hitlService.on('escalation.created', (escalation) => {
    console.log(`[N0VA1O] HITL escalation: ${escalation.escalation_id} [${escalation.risk_level}]`);
  });

  auditService.on('audit.logged', (entry) => {
    console.log(`[N0VA1O] Audit: ${entry.tool_name} by ${entry.agent_name} [${entry.status}]`);
  });

  sandboxRuntime.on('sandbox.ready', ({ sandbox_id }) => {
    console.log(`[N0VA1O] Sandbox ready: ${sandbox_id}`);
  });

  recipeCompiler.on('recipe.compiled', (recipe) => {
    console.log(`[N0VA1O] Recipe compiled: ${recipe.name} (${recipe.recipe_id})`);
  });
}

async function main(): Promise<void> {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║           N0VA1O INFINITE INTEGRATION GATEWAY           ║');
  console.log('║              Transcendent Edition v2026.07              ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log();

  seedTools();
  setupEventListeners();

  await mcpServer.start();

  console.log();
  console.log(`[N0VA1O] Transports: ${config.transports.join(', ')}`);
  console.log(`[N0VA1O] Encryption: ${config.encryption.algorithm} (quantum-safe: ${config.encryption.quantum_safe})`);
  console.log(`[N0VA1O] Sandbox: ${config.sandbox.cpu_quota} vCPU, ${config.sandbox.ram_quota}MB RAM`);
  console.log(`[N0VA1O] Audit: ${config.audit.retention_days} days retention, Merkle tree: ${config.audit.merkle_tree}`);
  console.log(`[N0VA1O] HITL: critical ${config.hitl.critical_timeout_hours}h, high ${config.hitl.high_timeout_hours}h, medium ${config.hitl.medium_timeout_hours}h`);
  console.log();
  console.log('[N0VA1O] Gateway ready. Awaiting agent connections...');
  console.log();

  process.on('SIGINT', async () => {
    console.log('\n[N0VA1O] Shutting down gracefully...');
    await mcpServer.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n[N0VA1O] Shutting down gracefully...');
    await mcpServer.stop();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error('[N0VA1O] Fatal error:', err);
  process.exit(1);
});
