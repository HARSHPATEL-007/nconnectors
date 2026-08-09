import { EventEmitter } from 'node:events';
import type { AuditEntry, AuditStatus } from '../types/index.js';
import { generateAuditId, hashData, generateMerkleRoot } from './crypto.js';
import { config } from '../config/index.js';

class AuditService extends EventEmitter {
  private entries: AuditEntry[] = [];
  private merkleLeaves: string[] = [];

  async logAction(params: {
    agent_id: string;
    agent_name: string;
    agent_version: string;
    tool_name: string;
    tool_parameters: Record<string, unknown>;
    session_id: string;
    step_number: number;
    intent_classification: string;
    confidence: number;
    reasoning_chain: string[];
    status: AuditStatus;
    result_summary: string;
    latency_ms: number;
    tokens_consumed: number;
    approval_required: boolean;
    ip_address: string;
    user_agent: string;
    mfa_verified: boolean;
    risk_score: number;
    workflow_id?: string;
    approved_by?: string;
    approval_timestamp?: string;
  }): Promise<AuditEntry> {
    const audit_id = generateAuditId(params.agent_id);
    const timestamp = new Date().toISOString();

    const entryData = JSON.stringify({
      audit_id,
      timestamp,
      agent_id: params.agent_id,
      tool_name: params.tool_name,
      tool_parameters: params.tool_parameters,
      status: params.status,
      risk_score: params.risk_score,
    });

    const hash = hashData(entryData);
    this.merkleLeaves.push(hash);
    const merkleRoot = config.audit.merkle_tree ? generateMerkleRoot(this.merkleLeaves) : '';

    const entry: AuditEntry = {
      audit_id,
      timestamp,
      tenant_id: '',
      agent_id: params.agent_id,
      agent_name: params.agent_name,
      agent_version: params.agent_version,
      tool_name: params.tool_name,
      tool_parameters: this.sanitizeParams(params.tool_parameters),
      session_id: params.session_id,
      workflow_id: params.workflow_id,
      step_number: params.step_number,
      intent_classification: params.intent_classification,
      confidence: params.confidence,
      reasoning_chain: params.reasoning_chain,
      status: params.status,
      result_summary: params.result_summary,
      latency_ms: params.latency_ms,
      tokens_consumed: params.tokens_consumed,
      approval_required: params.approval_required,
      approved_by: params.approved_by,
      approval_timestamp: params.approval_timestamp,
      ip_address: params.ip_address,
      user_agent: params.user_agent,
      mfa_verified: params.mfa_verified,
      risk_score: params.risk_score,
      hash,
      merkle_root: merkleRoot,
      blockchain_anchor: config.audit.blockchain_anchor ? `0x${hash.slice(0, 64)}` : undefined,
    };

    this.entries.push(entry);
    this.emit('audit.logged', entry);
    return entry;
  }

  query(filters: { agent_id?: string; since?: string; status?: string; limit?: number }): AuditEntry[] {
    let results = [...this.entries];

    if (filters.agent_id) {
      results = results.filter(e => e.agent_id === filters.agent_id);
    }
    if (filters.since) {
      const sinceDate = new Date(filters.since);
      results = results.filter(e => new Date(e.timestamp) >= sinceDate);
    }
    if (filters.status) {
      results = results.filter(e => e.status === filters.status);
    }

    results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    if (filters.limit) {
      results = results.slice(0, filters.limit);
    }

    return results;
  }

  getEntry(audit_id: string): AuditEntry | undefined {
    return this.entries.find(e => e.audit_id === audit_id);
  }

  verifyIntegrity(entry: AuditEntry): boolean {
    const entryData = JSON.stringify({
      audit_id: entry.audit_id,
      timestamp: entry.timestamp,
      agent_id: entry.agent_id,
      tool_name: entry.tool_name,
      tool_parameters: entry.tool_parameters,
      status: entry.status,
      risk_score: entry.risk_score,
    });

    const computedHash = hashData(entryData);
    return computedHash === entry.hash;
  }

  getMerkleRoot(): string {
    return generateMerkleRoot(this.merkleLeaves);
  }

  getStats(): { total_entries: number; merkle_root: string; by_status: Record<string, number> } {
    const byStatus: Record<string, number> = {};
    for (const entry of this.entries) {
      byStatus[entry.status] = (byStatus[entry.status] || 0) + 1;
    }

    return {
      total_entries: this.entries.length,
      merkle_root: this.getMerkleRoot(),
      by_status: byStatus,
    };
  }

  exportCSV(): string {
    const headers = ['audit_id', 'timestamp', 'agent_id', 'tool_name', 'status', 'risk_score', 'latency_ms'];
    const rows = this.entries.map(e =>
      [e.audit_id, e.timestamp, e.agent_id, e.tool_name, e.status, e.risk_score, e.latency_ms].join(',')
    );
    return [headers.join(','), ...rows].join('\n');
  }

  private sanitizeParams(params: Record<string, unknown>): Record<string, unknown> {
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(params)) {
      if (key.toLowerCase().includes('token') || key.toLowerCase().includes('password') || key.toLowerCase().includes('secret')) {
        sanitized[key] = '[REDACTED]';
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }
}

export const auditService = new AuditService();
