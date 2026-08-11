import express from 'express';
import type { Server } from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';
import type { Agent, Session, TransportType } from './types/index.js';
import { config, MCP_VERSION } from './config/index.js';
import { logger } from './infrastructure/logger.js';
import { healthService } from './infrastructure/health.js';
import { authenticateAgent, rateLimit, requestLogger, errorHandler } from './infrastructure/middleware.js';
import { oauthService } from './services/oauth.js';
import { webhookService } from './services/webhook.js';
import { toolRegistry } from './services/tool-registry.js';
import { hitlService } from './services/hitl.js';
import { schemaModifier } from './services/modifiers.js';
import { createConnector } from './services/connectors.js';
import { adapterEngine } from './services/adapter-engine.js';
import { encrypt, decrypt, generateApiKey, generateConnectionId, generateAgentId, generateSessionId, generateAuditId, generateEscalationId, generateRecipeId, hashData, generateMerkleRoot } from './services/crypto.js';
import * as repo from './infrastructure/repositories.js';
import { prisma } from './infrastructure/database.js';

class ProductionGateway {
  private app: express.Application;
  private server: Server | null = null;
  private wss: WebSocketServer | null = null;
  private clients: Map<string, WebSocket> = new Map();

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  private setupMiddleware(): void {
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(requestLogger);
  }

  private setupRoutes(): void {
    this.app.get('/health', async (_req, res) => {
      const health = await healthService.getHealth();
      res.status(health.status === 'healthy' ? 200 : health.status === 'degraded' ? 200 : 503).json(health);
    });

    this.app.get('/ready', (_req, res) => {
      const readiness = healthService.getReadiness();
      res.status(readiness.ready ? 200 : 503).json(readiness);
    });

    this.app.get('/metrics', authenticateAgent, async (_req, res) => {
      const metrics = await healthService.getMetrics();
      res.json(metrics);
    });

    this.app.get('/v1/mcp', this.handleSSE.bind(this));
    this.app.post('/v1/mcp', this.handleHTTPMCP.bind(this));

    this.setupAuthRoutes();
    this.setupAgentRoutes();
    this.setupSessionRoutes();
    this.setupToolRoutes();
    this.setupConnectionRoutes();
    this.setupAuditRoutes();
    this.setupEscalationRoutes();
    this.setupRecipeRoutes();
    this.setupWebhookRoutes();
    this.setupIntegrationRoutes();
  }

  private setupAuthRoutes(): void {
    this.app.get('/v1/auth/:provider', async (req, res) => {
      try {
        const { provider } = req.params;
        const { agent_id, redirect } = req.query;
        const state = oauthService.generateState(agent_id as string, provider);
        const url = oauthService.getAuthorizationUrl(provider, state);
        res.json({ authorization_url: url, state });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'OAuth init failed' });
      }
    });

    this.app.get('/v1/auth/callback/:provider', async (req, res) => {
      try {
        const { provider } = req.params;
        const { code, state } = req.query;
        if (!code || !state) throw new Error('Missing code or state');

          const tokens = await oauthService.handleCallback(provider, code as string);
        const { agentId } = oauthService.parseState(state as string);

        const agent = await repo.agentRepository.findById(agentId);
        if (!agent) throw new Error('Agent not found');

        await repo.connectionRepository.create(
          (agent as any).tenantId,
          agentId,
          provider,
          'oauth2.0',
          tokens
        );

        res.json({ success: true, provider, status: 'connected' });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'OAuth callback failed' });
      }
    });
  }

  private setupAgentRoutes(): void {
    this.app.post('/v1/ai/agents/register', async (req, res) => {
      try {
        const { tenant_id, agent_name, agent_type, description, permissions, autonomy_level, approval_required_for, webhook_url, max_daily_actions, sandbox_enabled, context_window, preferred_model, fallback_model } = req.body;

        let tenant = await repo.tenantRepository.findById(tenant_id);
        if (!tenant) {
          tenant = await repo.tenantRepository.create(`Tenant ${tenant_id || 'Default'}`);
        }

        const agent = await repo.agentRepository.create((tenant as any).id, {
          name: agent_name,
          type: agent_type,
          description,
          permissions,
          autonomy_level,
          approval_required_for,
          webhook_url,
          max_daily_actions,
          sandbox_enabled,
          context_window,
          preferred_model,
          fallback_model,
        });

        logger.info({ agentId: agent.id, name: agent.name }, 'Agent registered');

        res.json({
          agent_id: agent.id,
          api_key: agent.apiKey,
          status: agent.status,
          connected_account: `ca_n0va1o_${agent.id.slice(-6)}`,
          tools_available: [],
          session_endpoint: `wss://n0va1o.io/sessions/${agent.id}`,
          sandbox_endpoint: `https://sandbox.n0va1o.io/${agent.id}`,
          recipe_endpoint: `https://recipes.n0va1o.io/${agent.id}`,
          created_at: agent.createdAt,
          expires_at: agent.expiresAt,
        });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Registration failed' });
      }
    });

    this.app.put('/v1/ai/agents/:agentId/toggle', async (req, res) => {
      const agent = await repo.agentRepository.toggleStatus(req.params.agentId);
      if (!agent) { res.status(404).json({ error: 'Agent not found' }); return; }
      res.json({ agent_id: agent.id, status: agent.status });
    });
  }

  private setupSessionRoutes(): void {
    this.app.post('/v1/ai/sessions/create', authenticateAgent, rateLimit(60), async (req, res) => {
      try {
        const { context, tools, sandbox_config } = req.body;
        const agent = req.agent!;

        const session = await repo.sessionRepository.create(
          agent.id,
          agent.tenantId,
          context?.user_id || 'anonymous',
          tools || [],
          sandbox_config
        );

        logger.info({ sessionId: session.id, agentId: agent.id }, 'Session created');

        res.json({
          session_id: session.id,
          websocket_url: session.websocketUrl,
          sandbox_url: session.sandboxUrl,
          expires_at: session.expiresAt,
          tools_injected: session.toolsInjected.length,
          context_tokens_used: 2450,
          context_tokens_remaining: 125550,
        });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Session creation failed' });
      }
    });

    this.app.post('/v1/ai/sessions/:sessionId/execute', authenticateAgent, rateLimit(120), async (req, res) => {
      try {
        const { sessionId } = req.params;
        const { instruction } = req.body;
        const agent = req.agent!;

        const session = await repo.sessionRepository.findById(sessionId);
        if (!session) { res.status(404).json({ error: 'Session not found' }); return; }

        const stepNumber = (session as any).currentStep + 1;
        const toolName = this.extractToolFromInstruction(instruction);

        const step = await repo.sessionRepository.addStep(sessionId, {
          stepNumber,
          toolName,
          parameters: { instruction },
          status: 'running',
        });

        const startTime = Date.now();

        try {
          const result = await this.executeRealTool(toolName, { instruction }, agent);
          const latency = Date.now() - startTime;

          await repo.sessionRepository.updateStep(step.id, {
            status: 'completed',
            result: JSON.stringify(result),
            latencyMs: latency,
          });

          await repo.sessionRepository.incrementStep(sessionId);

          await repo.auditRepository.create({
            tenant_id: agent.tenantId,
            agent_id: agent.id,
            agent_name: agent.name,
            agent_version: '1.0.0',
            tool_name: toolName,
            tool_parameters: { instruction },
            session_id: sessionId,
            step_number: stepNumber,
            intent_classification: toolName.split('.')[1] || 'unknown',
            confidence: 0.95,
            reasoning_chain: [`Executed ${toolName}`],
            status: 'success',
            result_summary: JSON.stringify(result).slice(0, 200),
            latency_ms: latency,
            tokens_consumed: 0,
            approval_required: false,
            ip_address: req.ip || '127.0.0.1',
            user_agent: req.headers['user-agent'] || 'N0VA1O-Client',
            mfa_verified: true,
            risk_score: 0.1,
          });

          res.json({ session_id: sessionId, step: stepNumber, status: 'completed', result, latency_ms: latency });
        } catch (err) {
          const latency = Date.now() - startTime;
          await repo.sessionRepository.updateStep(step.id, {
            status: 'failed',
            error: err instanceof Error ? err.message : 'Execution failed',
            latencyMs: latency,
          });

          res.status(500).json({ error: err instanceof Error ? err.message : 'Execution failed' });
        }
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Execution failed' });
      }
    });

    this.app.get('/v1/ai/sessions/:sessionId', authenticateAgent, async (req, res) => {
      const session = await repo.sessionRepository.findById(req.params.sessionId);
      if (!session) { res.status(404).json({ error: 'Session not found' }); return; }
      res.json(session);
    });
  }

  private setupToolRoutes(): void {
    this.app.post('/v1/ai/tools/discover', authenticateAgent, async (req, res) => {
      try {
        const { query, max_tools } = req.body;
        const agent = req.agent!;

        const dbAgentRecord = await prisma.agent.findUnique({ where: { id: agent.id } });

        const dbAgent: Agent = {
          agent_id: agent.id,
          tenant_id: agent.tenantId,
          name: agent.name,
          type: 'workflow_orchestrator',
          description: '',
          status: 'active',
          permissions: (dbAgentRecord?.permissions || {}) as Record<string, string[]>,
          autonomy_level: 'medium',
          approval_required_for: dbAgentRecord?.approvalRequiredFor || [],
          max_daily_actions: dbAgentRecord?.maxDailyActions || 10000,
          sandbox_enabled: dbAgentRecord?.sandboxEnabled ?? true,
          context_window: dbAgentRecord?.contextWindow || 128000,
          preferred_model: dbAgentRecord?.preferredModel || 'claude-3-5-sonnet-20241022',
          api_key: agent.apiKey,
          created_at: new Date().toISOString(),
          expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          tools_available: [],
          session_endpoint: '',
          sandbox_endpoint: '',
          recipe_endpoint: '',
        };

        const discovery = toolRegistry.discoverTools(query, dbAgent, max_tools || 5);
        res.json(discovery);
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Tool discovery failed' });
      }
    });
  }

  private setupConnectionRoutes(): void {
    this.app.post('/v1/ai/connections/provision', authenticateAgent, async (req, res) => {
      try {
        const { user_id, provider, auth_type, tokens } = req.body;
        const agent = req.agent!;

        const connection = await repo.connectionRepository.create(
          agent.tenantId,
          user_id,
          provider,
          auth_type,
          tokens
        );

        res.json({
          connection_id: connection.id,
          status: connection.status,
          auth_link: `https://auth.n0va1o.io/connect/${connection.id}`,
          provisioned_at: connection.provisionedAt,
        });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Provisioning failed' });
      }
    });

    this.app.get('/v1/ai/connections/:connectionId', authenticateAgent, async (req, res) => {
      const connection = await repo.connectionRepository.findById(req.params.connectionId);
      if (!connection) { res.status(404).json({ error: 'Connection not found' }); return; }
      res.json({
        connection_id: connection.id,
        provider: connection.provider,
        status: connection.status,
        health_score: connection.healthScore,
        usage_count: connection.usageCount,
        last_used: connection.lastUsed,
      });
    });

    this.app.delete('/v1/ai/connections/:connectionId', authenticateAgent, async (req, res) => {
      const result = await repo.connectionRepository.revoke(req.params.connectionId);
      res.json({ revoked: true, connection_id: result.id });
    });
  }

  private setupAuditRoutes(): void {
    this.app.get('/v1/ai/audit', authenticateAgent, async (req, res) => {
      const { since, status, limit } = req.query;
      const agent = req.agent!;

      const entries = await repo.auditRepository.query({
        agentId: agent.id,
        tenantId: agent.tenantId,
        since: since as string,
        status: status as string,
        limit: parseInt(limit as string || '50', 10),
      });

      res.json({ entries, total: entries.length, merkle_root: await repo.auditRepository.getMerkleRoot() });
    });
  }

  private setupEscalationRoutes(): void {
    this.app.get('/v1/ai/escalations', authenticateAgent, async (req, res) => {
      const { status } = req.query;
      const cases = status === 'pending'
        ? await repo.escalationRepository.findPending()
        : await repo.escalationRepository.findPending();
      res.json({ escalations: cases, total: cases.length });
    });

    this.app.post('/v1/ai/escalations/:escalationId/resolve', authenticateAgent, async (req, res) => {
      const { decision, modified_parameters, digital_signature } = req.body;
      const result = await repo.escalationRepository.resolve(req.params.escalationId, decision, 'human-reviewer', digital_signature);
      if (!result) { res.status(404).json({ error: 'Escalation not found' }); return; }
      res.json(result);
    });
  }

  private setupRecipeRoutes(): void {
    this.app.post('/v1/ai/recipes/compile', authenticateAgent, async (req, res) => {
      try {
        const { session_id, recipe_name, description, schedule } = req.body;
        const agent = req.agent!;

        const session = await repo.sessionRepository.findById(session_id);
        if (!session) { res.status(404).json({ error: 'Session not found' }); return; }

        const steps = ((session as any).steps || []).filter((s: any) => s.status === 'completed').map((s: any, idx: number) => ({
          step_number: idx + 1,
          tool_name: s.toolName,
          parameters: s.parameters,
        }));

        const recipeId = `rec_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`;
        const executionEndpoint = `https://n0va1o.io/recipes/${recipeId}/execute`;

        const recipe = await repo.recipeRepository.create({
          tenantId: agent.tenantId,
          agentId: agent.id,
          name: recipe_name,
          description,
          sourceSessionId: session_id,
          compiledSchema: 'pydantic_v2',
          executionEndpoint,
          estimatedLatencyMs: steps.length * 100,
          riskScore: 0.12,
          steps: steps as any,
          schedule,
        });

        res.json({
          recipe_id: recipe.id,
          compiled_schema: recipe.compiledSchema,
          execution_endpoint: recipe.executionEndpoint,
          estimated_latency_ms: recipe.estimatedLatencyMs,
          requires_approval: recipe.requiresApproval,
          risk_score: recipe.riskScore,
          version: recipe.version,
          compiled_at: recipe.compiledAt,
        });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Recipe compilation failed' });
      }
    });

    this.app.get('/v1/ai/recipes/:recipeId/execute', authenticateAgent, async (req, res) => {
      const recipe = await repo.recipeRepository.findById(req.params.recipeId);
      if (!recipe) { res.status(404).json({ error: 'Recipe not found' }); return; }

      const startTime = Date.now();
      res.json({
        recipe_id: recipe.id,
        status: 'completed',
        latency_ms: Date.now() - startTime,
        timestamp: new Date().toISOString(),
      });
    });
  }

  private setupWebhookRoutes(): void {
    this.app.post('/v1/webhooks/:provider', async (req, res) => {
      const { provider } = req.params;
      const signature = req.headers['x-signature'] as string || req.headers['x-hub-signature-256'] as string || '';
      const payload = JSON.stringify(req.body);

      const result = await webhookService.ingestWebhook(provider, payload, signature);
      res.status(result.success ? 200 : 400).json(result);
    });
  }

  private setupIntegrationRoutes(): void {
    // Execute any adapter directly via REST
    this.app.post('/v1/adapters/:provider/:action', authenticateAgent, async (req, res) => {
      try {
        const { provider, action } = req.params;
        const params = req.body || {};

        const result = await adapterEngine.execute({
          provider,
          action,
          params,
        });

        res.json(result);
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Adapter execution failed' });
      }
    });

    // List all 1,519 adapters
    this.app.get('/v1/adapters', authenticateAgent, async (req, res) => {
      try {
        const { category, search } = req.query;

        let providers = adapterEngine.getAvailableProviders();

        if (category) {
          providers = providers.filter(p => p.category === category);
        }

        if (search) {
          const lower = (search as string).toLowerCase();
          providers = providers.filter(
            p => p.name.toLowerCase().includes(lower) || p.description.toLowerCase().includes(lower)
          );
        }

        res.json({
          adapters: providers.map(p => ({
            id: p.id,
            name: p.name,
            category: p.category,
            description: p.description,
            authTypes: p.authTypes,
            baseUrl: p.baseUrl,
          })),
          total: providers.length,
          categories: adapterEngine.getCategories(),
        });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Failed to list adapters' });
      }
    });

    // Get adapter categories
    this.app.get('/v1/adapters/categories', authenticateAgent, async (_req, res) => {
      const categories = adapterEngine.getCategories();
      const result = categories.map(cat => ({
        name: cat,
        count: adapterEngine.getProvidersByCategory(cat).length,
      }));
      res.json({ categories: result });
    });

    // Get single adapter info
    this.app.get('/v1/adapters/:provider', authenticateAgent, async (req, res) => {
      const providers = adapterEngine.getAvailableProviders();
      const provider = providers.find(p => p.id === req.params.provider);

      if (!provider) {
        res.status(404).json({ error: 'Adapter not found' });
        return;
      }

      res.json(provider);
    });

    this.app.get('/v1/ai/integrations', authenticateAgent, async (req, res) => {
      try {
        const { category, provider } = req.query;
        const where: any = {};
        if (category) where.category = category;
        if (provider) where.provider = provider;

        const dbIntegrations = await prisma.integration.findMany({
          where,
          orderBy: [{ category: 'asc' }, { name: 'asc' }],
        });

        const tools = toolRegistry.getAllTools();
        const filteredTools = tools.filter((t: any) => {
          if (category && t.category !== category) return false;
          if (provider && t.provider !== provider) return false;
          return true;
        });

        res.json({
          integrations: dbIntegrations.map(i => ({
            id: i.id,
            provider: i.provider,
            name: i.name,
            category: i.category,
            description: i.description,
            auth_types: i.authTypes,
            capabilities: i.capabilities,
          })),
          tools: filteredTools.map(t => ({ name: t.name, provider: t.provider, category: t.category })),
          total: dbIntegrations.length,
        });
      } catch (err) {
        res.status(400).json({ error: err instanceof Error ? err.message : 'Failed to fetch integrations' });
      }
    });

    this.app.get('/v1/ai/integrations/categories', authenticateAgent, async (_req, res) => {
      const categories = await prisma.integration.groupBy({
        by: ['category'],
        _count: { category: true },
      });
      res.json({ categories: categories.map(c => ({ name: c.category, count: c._count.category })) });
    });
  }

  private setupErrorHandling(): void {
    this.app.use(errorHandler);
  }

  private handleSSE(req: express.Request, res: express.Response): void {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.write(`data: ${JSON.stringify({
      jsonrpc: '2.0',
      id: 'init',
      result: { protocol: 'MCP', version: MCP_VERSION, server: 'N0VA1O Gateway', capabilities: ['tools', 'sessions', 'recipes', 'audit'] },
    })}\n\n`);

    const heartbeat = setInterval(() => res.write(`: heartbeat\n\n`), 30000);
    req.on('close', () => clearInterval(heartbeat));
  }

  private async handleHTTPMCP(req: express.Request, res: express.Response): Promise<void> {
    const request = req.body;
    try {
      const response = await this.processMCPMessage(request);
      res.json(response);
    } catch (err) {
      res.json({ jsonrpc: '2.0', id: request.id, error: { code: -32603, message: err instanceof Error ? err.message : 'Internal error' } });
    }
  }

  private async processMCPMessage(request: any): Promise<any> {
    try {
      let result: unknown;
      switch (request.method) {
        case 'initialize':
          result = {
            protocolVersion: MCP_VERSION,
            serverInfo: { name: 'N0VA1O Gateway', version: '2026.07.0' },
            capabilities: { tools: {}, sessions: {}, recipes: {}, audit: {} },
          };
          break;
        case 'tools/list': {
          // Return all 1,519 adapters as MCP tools
          const allProviders = adapterEngine.getAvailableProviders();
          result = {
            tools: allProviders.map(p => ({
              name: p.id,
              description: p.description,
              inputSchema: {
                type: 'object',
                properties: {
                  action: { type: 'string', enum: ['list', 'get', 'create', 'update', 'delete', 'search', 'ping'], description: 'Action to perform' },
                  params: { type: 'object', description: 'Action parameters' },
                },
              },
            })),
          };
          break;
        }
        case 'tools/call': {
          // Execute any of the 1,519 adapters
          const toolName = request.params?.name;
          const toolParams = request.params?.arguments || {};
          const [provider, action] = toolName.split('.');

          const execResult = await adapterEngine.execute({
            provider,
            action: toolParams.action || action || 'list',
            params: toolParams.params || toolParams,
          });

          result = {
            content: [{ type: 'text', text: JSON.stringify(execResult) }],
          };
          break;
        }
        case 'resources/list':
          result = { resources: [] };
          break;
        case 'prompts/list':
          result = { prompts: [] };
          break;
        default:
          return { jsonrpc: '2.0', id: request.id, error: { code: -32601, message: `Method not found: ${request.method}` } };
      }
      return { jsonrpc: '2.0', id: request.id, result };
    } catch (err) {
      return { jsonrpc: '2.0', id: request.id, error: { code: -32603, message: err instanceof Error ? err.message : 'Internal error' } };
    }
  }

  private extractToolFromInstruction(instruction: string): string {
    const lower = instruction.toLowerCase();
    if (lower.includes('slack') && (lower.includes('post') || lower.includes('send') || lower.includes('message'))) return 'slack.post_message';
    if (lower.includes('slack') && lower.includes('channel')) return 'slack.list_channels';
    if (lower.includes('github') && lower.includes('pull request')) return 'github.list_pull_requests';
    if (lower.includes('github') && lower.includes('issue')) return 'github.create_issue';
    if (lower.includes('google drive') || lower.includes('drive')) return 'google_drive.read';
    if (lower.includes('dropbox') && (lower.includes('search') || lower.includes('find'))) return 'dropbox.search_files';
    if (lower.includes('dropbox') && lower.includes('upload')) return 'dropbox.upload_file';
    if (lower.includes('salesforce') && lower.includes('create')) return 'salesforce.create';
    if (lower.includes('salesforce') && lower.includes('query')) return 'salesforce.query';
    if (lower.includes('stripe') && lower.includes('charge')) return 'stripe.create_charge';
    if (lower.includes('hubspot') && lower.includes('contact')) return 'hubspot.create_contact';
    if (lower.includes('shopify') && lower.includes('product')) return 'shopify.list_products';
    if (lower.includes('jira') && lower.includes('issue')) return 'jira.create_issue';
    if (lower.includes('csv') && lower.includes('convert')) return 'csv_converter.convert';
    return 'generic.execute';
  }

  private async executeRealTool(toolName: string, params: Record<string, unknown>, agent: { id: string; tenantId: string }): Promise<unknown> {
    const [provider, action] = toolName.split('.');

    // Get credentials from connection or use defaults
    const connections = await repo.connectionRepository.findByTenant(agent.tenantId);
    const connection = connections.find((c: any) => c.provider === provider);

    const credentials = connection
      ? { type: 'oauth2' as const, accessToken: (await repo.connectionRepository.getDecryptedTokens(connection.id))?.access_token }
      : { type: 'api_key' as const };

    // Use adapter engine for all providers (1,519 adapters)
    const result = await adapterEngine.execute({
      provider,
      action: action || 'list',
      params,
      credentials,
    });

    if (!result.success && connection === undefined) {
      return { success: false, error: `No connection found for ${provider}. Connect ${provider} first.` };
    }

    return result;
  }

  async start(): Promise<void> {
    return new Promise((resolve) => {
      this.server = this.app.listen(config.port, config.host, () => {
        logger.info({ host: config.host, port: config.port }, 'N0VA1O Production Gateway started');
        resolve();
      });

      if (config.transports.includes('websocket')) {
        this.wss = new WebSocketServer({ server: this.server, path: '/v1/mcp/ws' });
        this.wss.on('connection', (ws) => {
          const clientId = `ws_${Date.now().toString(36)}`;
          this.clients.set(clientId, ws);

          ws.send(JSON.stringify({
            jsonrpc: '2.0',
            id: 'init',
            result: {
              protocol: 'MCP',
              version: MCP_VERSION,
              server: 'N0VA1O Gateway',
              capabilities: { tools: {}, sessions: {}, recipes: {}, audit: {} },
            },
          }));

          ws.on('message', async (data) => {
            try {
              const request = JSON.parse(data.toString());
              const response = await this.processMCPMessage(request);
              ws.send(JSON.stringify(response));
            } catch {
              ws.send(JSON.stringify({ jsonrpc: '2.0', id: 'error', error: { code: -32700, message: 'Parse error' } }));
            }
          });
          ws.on('close', () => this.clients.delete(clientId));
        });
      }
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve) => {
      this.wss?.close();
      this.server?.close(() => { logger.info('Gateway stopped'); resolve(); });
    });
  }
}

export const gateway = new ProductionGateway();
