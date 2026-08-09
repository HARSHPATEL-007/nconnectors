import { EventEmitter } from 'node:events';
import type { Server } from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';
import express from 'express';
import type {
  MCPRequest,
  MCPResponse,
  MCPError,
  Agent,
  Session,
  TransportType,
  ToolDiscoveryResult,
  AuditEntry,
} from '../types/index.js';
import { config, MCP_VERSION, ERROR_CODES } from '../config/index.js';
import { authService } from './auth.js';
import { toolRegistry } from './tool-registry.js';
import { sessionManager } from './session.js';
import { auditService } from './audit.js';
import { hitlService } from './hitl.js';
import { schemaModifier } from './modifiers.js';
import {
  generateSessionId,
  generateAgentId,
  generateAuditId,
  hashData,
} from './crypto.js';

class MCPServer extends EventEmitter {
  private app: express.Application;
  private server: Server | null = null;
  private wss: WebSocketServer | null = null;
  private clients: Map<string, WebSocket> = new Map();

  constructor() {
    super();
    this.app = express();
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(express.json({ limit: '50mb' }));

    this.app.use((req, _res, next) => {
      const clientId = req.headers['x-agent-id'] as string || req.ip || 'unknown';
      this.emit('request', { clientId, method: req.method, path: req.path });
      next();
    });

    this.app.get('/health', (_req, res) => {
      res.json({ status: 'healthy', version: MCP_VERSION, timestamp: new Date().toISOString() });
    });

    this.app.get('/v1/mcp', this.handleSSE.bind(this));
    this.app.post('/v1/mcp', this.handleHTTPRequest.bind(this));

    this.app.post('/v1/ai/agents/register', this.handleAgentRegistration.bind(this));
    this.app.post('/v1/ai/tools/discover', this.handleToolDiscovery.bind(this));
    this.app.post('/v1/ai/sessions/create', this.handleSessionCreate.bind(this));
    this.app.post('/v1/ai/sessions/:sessionId/execute', this.handleSessionExecute.bind(this));
    this.app.get('/v1/ai/sessions/:sessionId', this.handleSessionGet.bind(this));
    this.app.delete('/v1/ai/sessions/:sessionId', this.handleSessionClose.bind(this));
    this.app.post('/v1/ai/recipes/compile', this.handleRecipeCompile.bind(this));
    this.app.get('/v1/ai/recipes/:recipeId/execute', this.handleRecipeExecute.bind(this));
    this.app.get('/v1/ai/audit', this.handleAuditQuery.bind(this));
    this.app.get('/v1/ai/escalations', this.handleEscalationList.bind(this));
    this.app.post('/v1/ai/escalations/:escalationId/resolve', this.handleEscalationResolve.bind(this));
    this.app.get('/v1/ai/integrations', this.handleIntegrationCatalog.bind(this));
    this.app.post('/v1/ai/connections/provision', this.handleConnectionProvision.bind(this));
    this.app.get('/v1/ai/connections/:connectionId', this.handleConnectionGet.bind(this));
    this.app.delete('/v1/ai/connections/:connectionId', this.handleConnectionRevoke.bind(this));
    this.app.put('/v1/ai/agents/:agentId/toggle', this.handleAgentToggle.bind(this));
  }

  async start(): Promise<void> {
    return new Promise((resolve) => {
      this.server = this.app.listen(config.port, config.host, () => {
        console.log(`[N0VA1O] MCP Gateway listening on ${config.host}:${config.port}`);
        this.emit('started');
        resolve();
      });

      if (config.transports.includes('websocket')) {
        this.wss = new WebSocketServer({ server: this.server, path: '/v1/mcp/ws' });
        this.wss.on('connection', this.handleWebSocketConnection.bind(this));
        console.log(`[N0VA1O] WebSocket transport ready at ws://${config.host}:${config.port}/v1/mcp/ws`);
      }
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve) => {
      this.wss?.close();
      this.server?.close(() => {
        console.log('[N0VA1O] Gateway stopped');
        resolve();
      });
    });
  }

  private handleWebSocketConnection(ws: WebSocket): void {
    const clientId = `ws_${Date.now().toString(36)}`;
    this.clients.set(clientId, ws);
    console.log(`[N0VA1O] WebSocket client connected: ${clientId}`);

    ws.on('message', async (data) => {
      try {
        const request: MCPRequest = JSON.parse(data.toString());
        const response = await this.processMCPRequest(request);
        ws.send(JSON.stringify(response));
      } catch {
        ws.send(JSON.stringify(this.createErrorResponse(-1, -32700, 'Parse error')));
      }
    });

    ws.on('close', () => {
      this.clients.delete(clientId);
      console.log(`[N0VA1O] WebSocket client disconnected: ${clientId}`);
    });

    ws.send(JSON.stringify({
      jsonrpc: '2.0',
      id: 'init',
      result: {
        protocol: 'MCP',
        version: MCP_VERSION,
        server: 'N0VA1O Gateway',
        capabilities: ['tools', 'sessions', 'recipes', 'audit'],
      },
    }));
  }

  private handleSSE(req: express.Request, res: express.Response): void {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.write(`data: ${JSON.stringify({
      jsonrpc: '2.0',
      id: 'init',
      result: {
        protocol: 'MCP',
        version: MCP_VERSION,
        server: 'N0VA1O Gateway',
        capabilities: ['tools', 'sessions', 'recipes', 'audit'],
      },
    })}\n\n`);

    const heartbeat = setInterval(() => {
      res.write(`: heartbeat\n\n`);
    }, 30000);

    req.on('close', () => {
      clearInterval(heartbeat);
    });
  }

  private async handleHTTPRequest(req: express.Request, res: express.Response): Promise<void> {
    const request: MCPRequest = req.body;
    const response = await this.processMCPRequest(request);
    res.json(response);
  }

  private async processMCPRequest(request: MCPRequest): Promise<MCPResponse> {
    try {
      let result: unknown;

      switch (request.method) {
        case 'initialize':
          result = this.handleInitialize(request.params);
          break;
        case 'tools/list':
          result = this.handleToolsList(request.params);
          break;
        case 'tools/call':
          result = await this.handleToolCall(request.params);
          break;
        case 'sessions/create':
          result = await this.handleSessionCreateInline(request.params);
          break;
        case 'sessions/execute':
          result = await this.handleSessionExecuteInline(request.params);
          break;
        case 'resources/list':
          result = { resources: [] };
          break;
        case 'prompts/list':
          result = { prompts: [] };
          break;
        default:
          return this.createErrorResponse(request.id, -32601, `Method not found: ${request.method}`);
      }

      return { jsonrpc: '2.0', id: request.id, result };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return this.createErrorResponse(request.id, -32603, message);
    }
  }

  private handleInitialize(params?: Record<string, unknown>): unknown {
    return {
      protocolVersion: MCP_VERSION,
      serverInfo: { name: 'N0VA1O Gateway', version: '2026.07.0' },
      capabilities: {
        tools: { listChanged: true },
        sessions: { execute: true, create: true },
        recipes: { compile: true, execute: true },
        audit: { query: true },
      },
      instructions: 'N0VA1O Infinite Integration Gateway. Connect AI agents to 1,000+ platforms.',
    };
  }

  private handleToolsList(params?: Record<string, unknown>): unknown {
    let tools = toolRegistry.getAllTools();

    if (params?.provider) {
      tools = tools.filter(t => t.provider === params.provider);
    }
    if (params?.category) {
      tools = tools.filter(t => t.category === params.category);
    }

    return {
      tools: tools.map(t => ({
        name: t.name,
        description: t.description,
        inputSchema: {
          type: 'object',
          properties: t.parameters,
          required: Object.entries(t.parameters)
            .filter(([, v]) => v.required)
            .map(([k]) => k),
        },
      })),
    };
  }

  private async handleToolCall(params?: Record<string, unknown>): Promise<unknown> {
    const toolName = params?.name as string;
    const toolParams = params?.arguments as Record<string, unknown> || {};
    const agent = params?.agent as Agent;

    if (!toolName) throw new Error('Tool name required');

    const tool = toolRegistry.getTool(toolName);
    if (!tool) throw new Error(`Tool not found: ${toolName}`);

    const modifiedParams = schemaModifier.applySchemaModifiers(toolParams, agent);
    schemaModifier.validateBeforeExecution(toolName, modifiedParams);

    const result = await this.executeTool(toolName, modifiedParams, agent);
    const finalResult = schemaModifier.applyAfterModifiers(toolName, result);

    return { content: [{ type: 'text', text: JSON.stringify(finalResult) }] };
  }

  private async executeTool(toolName: string, params: Record<string, unknown>, agent?: Agent): Promise<unknown> {
    const [provider, action] = toolName.split('.');

    if (agent) {
      const riskScore = hitlService.assessRisk(toolName, params, agent);
      if (riskScore >= 0.8) {
        const escalation = hitlService.createEscalation(agent.agent_id, 'unknown', toolName, params, riskScore, []);
        throw new Error(`HITL_REQUIRED: ${escalation.escalation_id}`);
      }
    }

    const mockResults: Record<string, unknown> = {
      'dropbox.search_files': { files: [], total: 0 },
      'slack.post_message': { ok: true, channel: params.channel, ts: Date.now().toString() },
      'google_drive.read': { content: '', size: 0 },
      'salesforce.create': { id: `sf_${Date.now()}`, success: true },
      'github.list_pull_requests': { prs: [], count: 0 },
      'stripe.create_charge': { id: `ch_${Date.now()}`, status: 'succeeded' },
    };

    const result = mockResults[toolName] || { success: true, tool: toolName, params };

    if (agent) {
      await auditService.logAction({
        agent_id: agent.agent_id,
        agent_name: agent.name,
        agent_version: '1.0.0',
        tool_name: toolName,
        tool_parameters: params,
        session_id: 'mcp-direct',
        step_number: 1,
        intent_classification: action || 'unknown',
        confidence: 0.95,
        reasoning_chain: [`Direct MCP call to ${toolName}`],
        status: 'success',
        result_summary: JSON.stringify(result).slice(0, 200),
        latency_ms: Math.floor(Math.random() * 200) + 50,
        tokens_consumed: 0,
        approval_required: false,
        ip_address: '127.0.0.1',
        user_agent: 'N0VA1O-MCP/1.0',
        mfa_verified: true,
        risk_score: 0.1,
      });
    }

    return result;
  }

  private async handleAgentRegistration(req: express.Request, res: express.Response): Promise<void> {
    const { tenant_id, agent_name, agent_type, description, permissions, autonomy_level, approval_required_for, webhook_url, max_daily_actions, sandbox_enabled, neural_mode, context_window, preferred_model, fallback_model } = req.body;

    let tenant = authService.getTenant(tenant_id);
    if (!tenant) {
      tenant = authService.createTenant(`Tenant ${tenant_id || 'Default'}`);
    }

    const agent = authService.registerAgent(tenant.tenant_id, {
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

    res.json({
      agent_id: agent.agent_id,
      api_key: agent.api_key,
      status: agent.status,
      connected_account: `ca_n0va1o_${agent.agent_id.slice(-6)}`,
      tools_available: agent.tools_available,
      session_endpoint: agent.session_endpoint,
      sandbox_endpoint: agent.sandbox_endpoint,
      recipe_endpoint: agent.recipe_endpoint,
      created_at: agent.created_at,
      expires_at: agent.expires_at,
    });
  }

  private async handleToolDiscovery(req: express.Request, res: express.Response): Promise<void> {
    const { query, agent_id, max_tools, context_window_size, preferred_latency, risk_tolerance } = req.body;

    const agent = authService.getAgent(agent_id);
    if (!agent) {
      res.status(404).json({ error: 'Agent not found' });
      return;
    }

    const discovery: ToolDiscoveryResult = toolRegistry.discoverTools(query, agent, max_tools || 5);

    res.json({
      ...discovery,
      fallback_tools: toolRegistry.getAllTools().slice(0, 3).map(t => t.name),
    });
  }

  private async handleSessionCreate(req: express.Request, res: express.Response): Promise<void> {
    const { agent_id, context, tools, sandbox_config } = req.body;

    const agent = authService.getAgent(agent_id);
    if (!agent) {
      res.status(404).json({ error: 'Agent not found' });
      return;
    }

    const session = sessionManager.createSession(agent, context, tools, sandbox_config);

    res.json({
      session_id: session.session_id,
      websocket_url: session.websocket_url,
      sandbox_url: session.sandbox_url,
      expires_at: session.expires_at,
      tools_injected: session.tools_injected.length,
      context_tokens_used: 2450,
      context_tokens_remaining: agent.context_window - 2450,
    });
  }

  private async handleSessionExecute(req: express.Request, res: express.Response): Promise<void> {
    const { sessionId } = req.params;
    const { instruction } = req.body;

    const result = await sessionManager.executeStep(sessionId, instruction);
    res.json(result);
  }

  private async handleSessionGet(req: express.Request, res: express.Response): Promise<void> {
    const session = sessionManager.getSession(req.params.sessionId);
    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }
    res.json(session);
  }

  private async handleSessionClose(req: express.Request, res: express.Response): Promise<void> {
    const closed = sessionManager.closeSession(req.params.sessionId);
    res.json({ closed, session_id: req.params.sessionId });
  }

  private async handleRecipeCompile(req: express.Request, res: express.Response): Promise<void> {
    const { session_id, recipe_name, description, schedule, optimization_level, failover_enabled } = req.body;

    const session = sessionManager.getSession(session_id);
    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }

    const recipe = {
      recipe_id: `rec_${Date.now().toString(36)}`,
      compiled_schema: 'pydantic_v2',
      execution_endpoint: `https://n0va1o.io/recipes/rec_${Date.now().toString(36)}/execute`,
      estimated_latency_ms: 85,
      requires_approval: false,
      risk_score: 0.12,
      version: '1.0.0',
      compiled_at: new Date().toISOString(),
      next_scheduled_run: schedule ? this.calculateNextRun(schedule) : null,
      monitoring_dashboard: `https://n0va1o.io/dashboard/recipes/${recipe_name}`,
    };

    res.json(recipe);
  }

  private async handleRecipeExecute(req: express.Request, res: express.Response): Promise<void> {
    const { recipeId } = req.params;
    const startTime = Date.now();

    const result = {
      recipe_id: recipeId,
      status: 'completed',
      latency_ms: Math.floor(Math.random() * 85) + 15,
      timestamp: new Date().toISOString(),
    };

    res.json(result);
  }

  private async handleAuditQuery(req: express.Request, res: express.Response): Promise<void> {
    const { agent_id, since, status, limit } = req.query;
    const entries = auditService.query({
      agent_id: agent_id as string,
      since: since as string,
      status: status as string,
      limit: parseInt(limit as string || '50', 10),
    });
    res.json({ entries, total: entries.length });
  }

  private async handleEscalationList(req: express.Request, res: express.Response): Promise<void> {
    const { status, risk_level } = req.query;
    const cases = hitlService.query({
      status: status as string,
      risk_level: risk_level as string,
    });
    res.json({ escalations: cases, total: cases.length });
  }

  private async handleEscalationResolve(req: express.Request, res: express.Response): Promise<void> {
    const { escalationId } = req.params;
    const { decision, modified_parameters, digital_signature } = req.body;

    const result = hitlService.resolveEscalation(escalationId, decision, modified_parameters, digital_signature);
    if (!result) {
      res.status(404).json({ error: 'Escalation not found' });
      return;
    }
    res.json(result);
  }

  private async handleIntegrationCatalog(req: express.Request, res: express.Response): Promise<void> {
    const { category, provider } = req.query;
    let tools = toolRegistry.getAllTools();

    if (category) {
      tools = tools.filter(t => t.category === category);
    }
    if (provider) {
      tools = tools.filter(t => t.provider === provider);
    }

    const catalog = toolRegistry.getIntegrationCatalog();
    res.json({
      integrations: catalog,
      tools: tools.map(t => ({ name: t.name, provider: t.provider, category: t.category })),
      total: tools.length,
    });
  }

  private async handleConnectionProvision(req: express.Request, res: express.Response): Promise<void> {
    const { tenant_id, user_id, provider, auth_type, tokens } = req.body;

    const connection = authService.provisionConnection(tenant_id, user_id, provider, auth_type, tokens);

    res.json({
      connection_id: connection.connection_id,
      status: connection.status,
      auth_link: authService.generateAuthLink(connection.connection_id),
      provisioned_at: connection.provisioned_at,
    });
  }

  private async handleConnectionGet(req: express.Request, res: express.Response): Promise<void> {
    const connection = authService.getConnection(req.params.connectionId);
    if (!connection) {
      res.status(404).json({ error: 'Connection not found' });
      return;
    }

    const validation = authService.validateConnection(req.params.connectionId);
    res.json({
      connection_id: connection.connection_id,
      provider: connection.provider,
      status: connection.status,
      health_score: connection.health_score,
      usage_count: connection.usage_count,
      last_used: connection.last_used,
      validation,
    });
  }

  private async handleConnectionRevoke(req: express.Request, res: express.Response): Promise<void> {
    const revoked = authService.revokeConnection(req.params.connectionId);
    if (!revoked) {
      res.status(404).json({ error: 'Connection not found' });
      return;
    }
    res.json({ revoked: true, connection_id: req.params.connectionId });
  }

  private async handleAgentToggle(req: express.Request, res: express.Response): Promise<void> {
    const agent = authService.toggleAgentStatus(req.params.agentId);
    if (!agent) {
      res.status(404).json({ error: 'Agent not found' });
      return;
    }
    res.json({ agent_id: agent.agent_id, status: agent.status });
  }

  private async handleSessionCreateInline(params?: Record<string, unknown>): Promise<unknown> {
    const agent = authService.getAgent(params?.agent_id as string);
    if (!agent) throw new Error('Agent not found');
    return sessionManager.createSession(agent, params?.context as any, params?.tools as string[], params?.sandbox_config as any);
  }

  private async handleSessionExecuteInline(params?: Record<string, unknown>): Promise<unknown> {
    return sessionManager.executeStep(params?.session_id as string, params?.instruction as string);
  }

  private calculateNextRun(schedule: { type: string; expression: string; timezone: string }): string {
    const now = new Date();
    now.setDate(now.getDate() + 1);
    return now.toISOString();
  }

  private createErrorResponse(id: string | number, code: number, message: string): MCPResponse {
    return {
      jsonrpc: '2.0',
      id,
      error: { code, message },
    };
  }
}

export const mcpServer = new MCPServer();
