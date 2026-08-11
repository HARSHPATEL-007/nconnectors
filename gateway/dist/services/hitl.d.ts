import { EventEmitter } from 'node:events';
import type { EscalationCase, RiskLevel, Agent } from '../types/index.js';
declare class HITLService extends EventEmitter {
    private cases;
    assessRisk(toolName: string, params: Record<string, unknown>, agent: Agent): number;
    getRiskLevel(score: number): RiskLevel;
    createEscalation(agent_id: string, session_id: string, tool_name: string, params: Record<string, unknown>, risk_score: number, reasoning: string[]): EscalationCase;
    resolveEscalation(escalation_id: string, decision: 'approve' | 'reject' | 'modify' | 'escalate', modified_parameters?: Record<string, unknown>, digital_signature?: string): EscalationCase | null;
    getEscalation(escalation_id: string): EscalationCase | undefined;
    query(filters: {
        status?: string;
        risk_level?: string;
    }): EscalationCase[];
    getPending(): EscalationCase[];
    getStats(): {
        total: number;
        pending: number;
        approved: number;
        rejected: number;
        escalated: number;
    };
    private getTimeoutHours;
    private extractAmount;
    private extractItemCount;
    private assessImpact;
    private scheduleTimeoutCheck;
}
export declare const hitlService: HITLService;
export {};
//# sourceMappingURL=hitl.d.ts.map