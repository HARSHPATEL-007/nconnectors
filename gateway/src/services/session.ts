import { EventEmitter } from 'node:events';
import type { Agent, Session, SessionStep, SandboxConfig } from '../types/index.js';
import { generateSessionId } from './crypto.js';

class SessionManager extends EventEmitter {
  private sessions: Map<string, Session> = new Map();

  createSession(agent: Agent, context: { user_id: string; tenant_id: string; session_type?: string }, tools?: string[], sandboxConfig?: SandboxConfig): Session {
    const session_id = generateSessionId();
    const now = new Date();
    const expires = new Date(now.getTime() + 8 * 60 * 60 * 1000);

    const toolsInjected = tools || agent.tools_available.slice(0, 10);

    const session: Session = {
      session_id,
      agent_id: agent.agent_id,
      tenant_id: agent.tenant_id,
      user_id: context.user_id || 'anonymous',
      status: 'running',
      context: {
        user_id: context.user_id || 'anonymous',
        tenant_id: context.tenant_id || agent.tenant_id,
        session_type: (context.session_type as 'interactive' | 'automated') || 'interactive',
      },
      tools_injected: toolsInjected,
      steps: [],
      current_step: 0,
      sandbox_config: sandboxConfig || {
        cpu_quota: 2,
        ram_quota: 4096,
        timeout_seconds: 600,
        network_mode: 'filtered',
      },
      websocket_url: `wss://n0va1o.io/sessions/${session_id}`,
      sandbox_url: `https://sandbox.n0va1o.io/sessions/${session_id}`,
      created_at: now.toISOString(),
      expires_at: expires.toISOString(),
    };

    this.sessions.set(session_id, session);
    this.emit('session.created', { session_id, agent_id: agent.agent_id });
    return session;
  }

  getSession(session_id: string): Session | undefined {
    return this.sessions.get(session_id);
  }

  getSessionsByAgent(agent_id: string): Session[] {
    return Array.from(this.sessions.values()).filter(s => s.agent_id === agent_id);
  }

  getSessionsByTenant(tenant_id: string): Session[] {
    return Array.from(this.sessions.values()).filter(s => s.tenant_id === tenant_id);
  }

  async executeStep(session_id: string, instruction: string): Promise<{ session_id: string; step: SessionStep; status: string }> {
    const session = this.sessions.get(session_id);
    if (!session) throw new Error('Session not found');
    if (session.status === 'paused') throw new Error('Session is paused. Awaiting approval.');
    if (session.status === 'failed') throw new Error('Session has failed.');

    const stepNumber = session.current_step + 1;
    const step: SessionStep = {
      step_number: stepNumber,
      tool_name: this.extractToolFromInstruction(instruction),
      parameters: { instruction },
      status: 'running',
    };

    session.steps.push(step);
    session.current_step = stepNumber;

    const startTime = Date.now();

    try {
      await this.simulateToolExecution(step);

      step.status = 'completed';
      step.latency_ms = Date.now() - startTime;
      step.result = `Executed: ${step.tool_name}`;
    } catch (err) {
      step.status = 'failed';
      step.error = err instanceof Error ? err.message : 'Execution failed';
      step.latency_ms = Date.now() - startTime;
      session.status = 'failed';
    }

    this.emit('session.step_completed', { session_id, step });
    return { session_id, step, status: session.status };
  }

  private extractToolFromInstruction(instruction: string): string {
    const toolPatterns: Record<string, RegExp> = {
      'dropbox.search_files': /find|search.*dropbox|dropbox.*find/i,
      'slack.post_message': /notify.*slack|slack.*send|post.*slack/i,
      'google_drive.read': /google drive|drive.*read|read.*drive/i,
      'salesforce.create': /salesforce.*create|create.*lead|create.*opportunity/i,
      'github.list_pull_requests': /pull request|github.*pr|list.*pr/i,
      'csv_converter.convert': /convert.*csv|csv.*convert|pdf.*csv/i,
    };

    for (const [tool, pattern] of Object.entries(toolPatterns)) {
      if (pattern.test(instruction)) return tool;
    }

    return 'generic.execute';
  }

  private async simulateToolExecution(step: SessionStep): Promise<void> {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 500) + 100;
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('Simulated tool execution failure'));
        } else {
          resolve();
        }
      }, delay);
    });
  }

  pauseSession(session_id: string, reason?: string): boolean {
    const session = this.sessions.get(session_id);
    if (!session) return false;
    session.status = 'paused';
    this.emit('session.paused', { session_id, reason });
    return true;
  }

  resumeSession(session_id: string): boolean {
    const session = this.sessions.get(session_id);
    if (!session || session.status !== 'paused') return false;
    session.status = 'running';
    this.emit('session.resumed', { session_id });
    return true;
  }

  closeSession(session_id: string): boolean {
    const session = this.sessions.get(session_id);
    if (!session) return false;
    if (session.status === 'running') {
      session.status = 'completed';
    }
    this.emit('session.closed', { session_id });
    this.sessions.delete(session_id);
    return true;
  }

  getActiveSessions(): Session[] {
    return Array.from(this.sessions.values()).filter(s => s.status === 'running');
  }

  getStats(): { total: number; running: number; paused: number; completed: number; failed: number } {
    const all = Array.from(this.sessions.values());
    return {
      total: all.length,
      running: all.filter(s => s.status === 'running').length,
      paused: all.filter(s => s.status === 'paused').length,
      completed: all.filter(s => s.status === 'completed').length,
      failed: all.filter(s => s.status === 'failed').length,
    };
  }
}

export const sessionManager = new SessionManager();
