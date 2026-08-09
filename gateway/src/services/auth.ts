import { EventEmitter } from 'node:events';
import type { ConnectedAccount, ConnectionStatus, Agent, Tenant, AuthType } from '../types/index.js';
import {
  encryptTokens,
  decryptTokens,
  generateConnectionId,
  generateApiKey,
  generateAgentId,
  hmacSign,
} from './crypto.js';
import { config } from '../config/index.js';

class AuthService extends EventEmitter {
  private connections: Map<string, ConnectedAccount> = new Map();
  private agents: Map<string, Agent> = new Map();
  private tenants: Map<string, Tenant> = new Map();
  private apiKeys: Map<string, string> = new Map();

  createTenant(name: string, settings?: Partial<Tenant['settings']>): Tenant {
    const tenant_id = `tenant_${Date.now().toString(36)}`;
    const tenant: Tenant = {
      tenant_id,
      name,
      created_at: new Date().toISOString(),
      encryption_key_id: `key_${tenant_id}`,
      settings: {
        default_transport: 'http_sse',
        sandbox_enabled: true,
        hitl_enabled: true,
        audit_retention_days: 365,
        max_concurrent_agents: 50,
        max_daily_actions: 100000,
        mfa_required: true,
        session_ttl: '8h',
        ...settings,
      },
    };
    this.tenants.set(tenant_id, tenant);
    this.emit('tenant.created', tenant);
    return tenant;
  }

  getTenant(tenant_id: string): Tenant | undefined {
    return this.tenants.get(tenant_id);
  }

  registerAgent(tenant_id: string, params: Partial<Agent> & { name: string; type: string }): Agent {
    const agent_id = generateAgentId();
    const api_key = generateApiKey();
    const now = new Date();
    const expires = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

    const agent: Agent = {
      agent_id,
      tenant_id,
      name: params.name,
      type: params.type,
      description: params.description || '',
      status: 'active',
      permissions: params.permissions || {},
      autonomy_level: params.autonomy_level || 'medium',
      approval_required_for: params.approval_required_for || [],
      webhook_url: params.webhook_url,
      max_daily_actions: params.max_daily_actions || config.hitl ? 10000 : 1000,
      sandbox_enabled: params.sandbox_enabled ?? true,
      context_window: params.context_window || 128000,
      preferred_model: params.preferred_model || 'claude-3-5-sonnet-20241022',
      fallback_model: params.fallback_model,
      api_key,
      created_at: now.toISOString(),
      expires_at: expires.toISOString(),
      tools_available: params.tools_available || [],
      session_endpoint: `wss://n0va1o.io/sessions/${agent_id}`,
      sandbox_endpoint: `https://sandbox.n0va1o.io/${agent_id}`,
      recipe_endpoint: `https://recipes.n0va1o.io/${agent_id}`,
    };

    this.agents.set(agent_id, agent);
    this.apiKeys.set(api_key, agent_id);
    this.emit('agent.registered', agent);
    return agent;
  }

  getAgent(agent_id: string): Agent | undefined {
    return this.agents.get(agent_id);
  }

  getAgentByApiKey(api_key: string): Agent | undefined {
    const agent_id = this.apiKeys.get(api_key);
    if (!agent_id) return undefined;
    return this.agents.get(agent_id);
  }

  authenticateAgent(api_key: string): Agent | null {
    const agent = this.getAgentByApiKey(api_key);
    if (!agent) return null;
    if (agent.status === 'failed' || agent.status === 'paused') return null;
    if (new Date(agent.expires_at) < new Date()) return null;
    return agent;
  }

  provisionConnection(
    tenant_id: string,
    user_id: string,
    provider: string,
    auth_type: AuthType,
    tokens: { access_token: string; refresh_token: string; expires_at: string; scopes: string[] }
  ): ConnectedAccount {
    const connection_id = generateConnectionId();
    const encrypted_tokens = encryptTokens(tokens);

    const connection: ConnectedAccount = {
      connection_id,
      tenant_id,
      user_id,
      provider,
      auth_type,
      status: 'active',
      encrypted_tokens,
      allowed_actions: tokens.scopes,
      blocked_actions: [],
      jit_enabled: true,
      provisioned_at: new Date().toISOString(),
      auto_refresh: true,
      last_used: new Date().toISOString(),
      usage_count: 0,
      health_score: 1.0,
    };

    this.connections.set(connection_id, connection);
    this.emit('connection.established', { connection_id, tenant_id, provider });
    return connection;
  }

  getConnection(connection_id: string): ConnectedAccount | undefined {
    return this.connections.get(connection_id);
  }

  getConnectionToken(connection_id: string): { access_token: string; refresh_token: string; expires_at: string; scopes: string[] } | null {
    const conn = this.connections.get(connection_id);
    if (!conn) return null;
    return decryptTokens(conn.encrypted_tokens);
  }

  validateConnection(connection_id: string): { valid: boolean; status: ConnectionStatus; reason?: string } {
    const conn = this.connections.get(connection_id);
    if (!conn) return { valid: false, status: 'failed', reason: 'Connection not found' };

    if (conn.status === 'revoked') return { valid: false, status: 'revoked', reason: 'Connection revoked' };
    if (conn.status === 'failed') return { valid: false, status: 'failed', reason: 'Connection failed' };

    const expiresAt = new Date(conn.encrypted_tokens.expires_at);
    if (expiresAt < new Date()) {
      conn.status = 'expired';
      return { valid: false, status: 'expired', reason: 'Token expired' };
    }

    return { valid: true, status: 'active' };
  }

  rotateTokens(connection_id: string, newTokens: { access_token: string; refresh_token: string; expires_at: string; scopes: string[] }): boolean {
    const conn = this.connections.get(connection_id);
    if (!conn) return false;

    conn.encrypted_tokens = encryptTokens(newTokens);
    conn.usage_count = 0;
    conn.health_score = 1.0;
    conn.last_used = new Date().toISOString();
    this.emit('token.rotated', { connection_id, tenant_id: conn.tenant_id });
    return true;
  }

  revokeConnection(connection_id: string): boolean {
    const conn = this.connections.get(connection_id);
    if (!conn) return false;
    conn.status = 'revoked';
    this.emit('connection.revoked', { connection_id, tenant_id: conn.tenant_id });
    return true;
  }

  incrementUsage(connection_id: string): void {
    const conn = this.connections.get(connection_id);
    if (conn) {
      conn.usage_count++;
      conn.last_used = new Date().toISOString();
    }
  }

  generateAuthLink(connection_id: string): string {
    const token = hmacSign(`${connection_id}:${Date.now()}`);
    return `https://auth.n0va1o.io/connect/${connection_id}?token=${token}`;
  }

  getConnectionsByTenant(tenant_id: string): ConnectedAccount[] {
    return Array.from(this.connections.values()).filter(c => c.tenant_id === tenant_id);
  }

  getAgentsByTenant(tenant_id: string): Agent[] {
    return Array.from(this.agents.values()).filter(a => a.tenant_id === tenant_id);
  }

  toggleAgentStatus(agent_id: string): Agent | undefined {
    const agent = this.agents.get(agent_id);
    if (!agent) return undefined;
    agent.status = agent.status === 'active' ? 'paused' : 'active';
    this.emit('agent.status_changed', { agent_id, status: agent.status });
    return agent;
  }
}

export const authService = new AuthService();
