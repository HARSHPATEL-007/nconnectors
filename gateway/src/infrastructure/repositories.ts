import { prisma } from '../infrastructure/database.js';
import { cacheGet, cacheSet, cacheDelete } from '../infrastructure/redis.js';
import { encrypt, decrypt, generateApiKey, generateConnectionId, generateAgentId, hashData, generateMerkleRoot } from '../services/crypto.js';
import type { Agent, ConnectedAccount, Session, AuditEntry, EscalationCase, Recipe } from '../types/index.js';

const CACHE_TTL = 300;

export const tenantRepository = {
  async create(name: string, settings?: Record<string, unknown>) {
    return prisma.tenant.create({
      data: {
        name,
        settings: settings ? { create: settings } : undefined,
      },
      include: { settings: true },
    });
  },

  async findById(id: string) {
    const cached = await cacheGet(`tenant:${id}`);
    if (cached) return cached;

    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: { settings: true },
    });

    if (tenant) await cacheSet(`tenant:${id}`, tenant, CACHE_TTL);
    return tenant;
  },
};

export const agentRepository = {
  async create(tenantId: string, params: Partial<Agent> & { name: string; type: string }) {
    const apiKey = generateApiKey();
    const now = new Date();
    const expires = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

    return prisma.agent.create({
      data: {
        tenantId,
        name: params.name,
        type: params.type,
        description: params.description || '',
        status: 'active',
        permissions: (params.permissions || {}) as any,
        autonomyLevel: params.autonomy_level || 'medium',
        approvalRequiredFor: params.approval_required_for || [],
        webhookUrl: params.webhook_url,
        maxDailyActions: params.max_daily_actions || 10000,
        sandboxEnabled: params.sandbox_enabled ?? true,
        contextWindow: params.context_window || 128000,
        preferredModel: params.preferred_model || 'claude-3-5-sonnet-20241022',
        fallbackModel: params.fallback_model,
        apiKey,
        expiresAt: expires,
      },
    });
  },

  async findById(id: string) {
    return prisma.agent.findUnique({ where: { id } });
  },

  async findByApiKey(apiKey: string) {
    const cached = await cacheGet(`agent:apiKey:${apiKey}`);
    if (cached) return cached;

    const agent = await prisma.agent.findUnique({ where: { apiKey } });
    if (agent) await cacheSet(`agent:apiKey:${apiKey}`, agent, CACHE_TTL);
    return agent;
  },

  async findByTenant(tenantId: string) {
    return prisma.agent.findMany({ where: { tenantId } });
  },

  async toggleStatus(id: string) {
    const agent = await prisma.agent.findUnique({ where: { id } });
    if (!agent) return null;

    const newStatus = agent.status === 'active' ? 'paused' : 'active';
    const updated = await prisma.agent.update({
      where: { id },
      data: { status: newStatus },
    });

    await cacheDelete(`agent:apiKey:${agent.apiKey}`);
    return updated;
  },
};

export const connectionRepository = {
  async create(
    tenantId: string,
    userId: string,
    provider: string,
    authType: string,
    tokens: { access_token: string; refresh_token: string; expires_at: string; scopes: string[] }
  ) {
    const id = generateConnectionId();
    return prisma.connectedAccount.create({
      data: {
        id,
        tenantId,
        userId,
        provider,
        authType,
        encryptedAccessToken: encrypt(tokens.access_token),
        encryptedRefreshToken: encrypt(tokens.refresh_token),
        expiresAt: new Date(tokens.expires_at),
        scopes: tokens.scopes,
        allowedActions: tokens.scopes,
        blockedActions: [],
        jitEnabled: true,
        autoRefresh: true,
      },
    });
  },

  async findById(id: string) {
    return prisma.connectedAccount.findUnique({ where: { id } });
  },

  async getDecryptedTokens(id: string): Promise<{ access_token: string; refresh_token: string } | null> {
    const conn = await prisma.connectedAccount.findUnique({ where: { id } });
    if (!conn) return null;

    return {
      access_token: decrypt(conn.encryptedAccessToken),
      refresh_token: decrypt(conn.encryptedRefreshToken),
    };
  },

  async findByTenant(tenantId: string) {
    return prisma.connectedAccount.findMany({ where: { tenantId } });
  },

  async revoke(id: string) {
    return prisma.connectedAccount.update({
      where: { id },
      data: { status: 'revoked' },
    });
  },

  async incrementUsage(id: string) {
    return prisma.connectedAccount.update({
      where: { id },
      data: {
        usageCount: { increment: 1 },
        lastUsed: new Date(),
      },
    });
  },
};

export const sessionRepository = {
  async create(agentId: string, tenantId: string, userId: string, tools: string[], sandboxConfig?: Record<string, unknown>) {
    const id = `sess_${crypto.randomUUID().replace(/-/g, '')}`;
    const now = new Date();
    const expires = new Date(now.getTime() + 8 * 60 * 60 * 1000);

    return prisma.session.create({
      data: {
        id,
        agentId,
        tenantId,
        userId,
        status: 'running',
        context: { userId, tenantId, session_type: 'interactive' } as any,
        toolsInjected: tools,
        currentStep: 0,
        sandboxConfig: (sandboxConfig || { cpu_quota: 2, ram_quota: 4096, timeout_seconds: 600, network_mode: 'filtered' }) as any,
        websocketUrl: `wss://n0va1o.io/sessions/${id}`,
        sandboxUrl: `https://sandbox.n0va1o.io/sessions/${id}`,
        expiresAt: expires,
      },
    });
  },

  async findById(id: string) {
    const cached = await cacheGet(`session:${id}`);
    if (cached) return cached;

    const session = await prisma.session.findUnique({
      where: { id },
      include: { steps: { orderBy: { stepNumber: 'asc' } } },
    });

    if (session) await cacheSet(`session:${id}`, session, 60);
    return session;
  },

  async addStep(sessionId: string, step: { stepNumber: number; toolName: string; parameters: Record<string, unknown>; status: string; result?: string; latencyMs?: number; error?: string }) {
    return prisma.sessionStep.create({
      data: {
        sessionId,
        stepNumber: step.stepNumber,
        toolName: step.toolName,
        parameters: step.parameters,
        status: step.status,
        result: step.result,
        latencyMs: step.latencyMs,
        error: step.error,
      },
    });
  },

  async updateStep(stepId: string, data: { status: string; result?: string; latencyMs?: number; error?: string }) {
    return prisma.sessionStep.update({
      where: { id: stepId },
      data,
    });
  },

  async updateStatus(id: string, status: string) {
    const session = await prisma.session.update({
      where: { id },
      data: { status },
    });
    await cacheDelete(`session:${id}`);
    return session;
  },

  async incrementStep(id: string) {
    return prisma.session.update({
      where: { id },
      data: { currentStep: { increment: 1 } },
    });
  },
};

export const auditRepository = {
  async create(entry: Omit<AuditEntry, 'audit_id' | 'timestamp' | 'hash' | 'merkle_root'>) {
    const id = `audit_${entry.agent_id}_${Date.now()}`;

    const lastEntry = await prisma.auditEntry.findFirst({
      orderBy: { timestamp: 'desc' },
      select: { merkleRoot: true },
    });

    const entryData = JSON.stringify({ id, ...entry });
    const hash = hashData(entryData);
    const merkleRoot = generateMerkleRoot([lastEntry?.merkleRoot || '', hash]);

    return prisma.auditEntry.create({
      data: {
        id,
        tenantId: entry.tenant_id,
        agentId: entry.agent_id,
        agentName: entry.agent_name,
        agentVersion: entry.agent_version,
        toolName: entry.tool_name,
        toolParameters: entry.tool_parameters as any,
        sessionId: entry.session_id,
        workflowId: entry.workflow_id,
        stepNumber: entry.step_number,
        intentClassification: entry.intent_classification,
        confidence: entry.confidence,
        reasoningChain: entry.reasoning_chain,
        status: entry.status,
        resultSummary: entry.result_summary,
        latencyMs: entry.latency_ms,
        tokensConsumed: entry.tokens_consumed,
        approvalRequired: entry.approval_required,
        approvedBy: entry.approved_by,
        approvalTimestamp: entry.approval_timestamp as any,
        ipAddress: entry.ip_address,
        userAgent: entry.user_agent,
        mfaVerified: entry.mfa_verified,
        riskScore: entry.risk_score,
        hash,
        merkleRoot,
      },
    });
  },

  async query(filters: { agentId?: string; tenantId?: string; since?: string; status?: string; limit?: number }) {
    return prisma.auditEntry.findMany({
      where: {
        ...(filters.agentId && { agentId: filters.agentId }),
        ...(filters.tenantId && { tenantId: filters.tenantId }),
        ...(filters.status && { status: filters.status }),
        ...(filters.since && { timestamp: { gte: new Date(filters.since) } }),
      },
      orderBy: { timestamp: 'desc' },
      take: filters.limit || 50,
    });
  },

  async getMerkleRoot(): Promise<string> {
    const latest = await prisma.auditEntry.findFirst({
      orderBy: { timestamp: 'desc' },
      select: { merkleRoot: true },
    });
    return latest?.merkleRoot || '';
  },
};

export const escalationRepository = {
  async create(data: {
    tenantId: string;
    agentId: string;
    sessionId: string;
    riskLevel: string;
    riskScore: number;
    action: Record<string, unknown>;
    agentReasoning: string[];
    proposedParameters: Record<string, unknown>;
    timeoutAt: Date;
  }) {
    return prisma.escalationCase.create({
      data: {
        tenantId: data.tenantId,
        agentId: data.agentId,
        sessionId: data.sessionId,
        riskLevel: data.riskLevel,
        riskScore: data.riskScore,
        status: 'pending',
        action: data.action as any,
        agentReasoning: data.agentReasoning,
        dataAccessed: [],
        proposedParameters: data.proposedParameters as any,
        timeoutAt: data.timeoutAt,
      },
    });
  },

  async findById(id: string) {
    return prisma.escalationCase.findUnique({ where: { id } });
  },

  async resolve(id: string, decision: string, resolvedBy?: string, digitalSignature?: string) {
    return prisma.escalationCase.update({
      where: { id },
      data: {
        status: decision === 'approve' ? 'approved' : decision === 'reject' ? 'rejected' : decision,
        resolvedAt: new Date(),
        resolvedBy,
        digitalSignature,
      },
    });
  },

  async findPending() {
    return prisma.escalationCase.findMany({
      where: { status: 'pending' },
      orderBy: { createdAt: 'asc' },
    });
  },

  async findTimeoutExpired() {
    return prisma.escalationCase.findMany({
      where: {
        status: 'pending',
        timeoutAt: { lt: new Date() },
      },
    });
  },
};

export const recipeRepository = {
  async create(data: {
    tenantId: string;
    agentId: string;
    name: string;
    description: string;
    sourceSessionId: string;
    compiledSchema: string;
    executionEndpoint: string;
    estimatedLatencyMs: number;
    riskScore: number;
    steps: Record<string, unknown>[];
    schedule?: Record<string, unknown>;
  }) {
    return prisma.recipe.create({
      data: {
        tenantId: data.tenantId,
        agentId: data.agentId,
        name: data.name,
        description: data.description,
        sourceSessionId: data.sourceSessionId,
        compiledSchema: data.compiledSchema,
        executionEndpoint: data.executionEndpoint,
        estimatedLatencyMs: data.estimatedLatencyMs,
        riskScore: data.riskScore,
        steps: data.steps as any,
        schedule: data.schedule as any,
        compiledAt: new Date(),
      },
    });
  },

  async findById(id: string) {
    return prisma.recipe.findUnique({ where: { id } });
  },

  async findByTenant(tenantId: string) {
    return prisma.recipe.findMany({ where: { tenantId } });
  },
};
