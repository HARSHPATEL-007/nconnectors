import { EventEmitter } from 'node:events';
import { generateEscalationId, hashData } from './crypto.js';
import { config, RISK_THRESHOLDS } from '../config/index.js';
class HITLService extends EventEmitter {
    cases = new Map();
    assessRisk(toolName, params, agent) {
        let score = 0;
        const toolNameLower = toolName.toLowerCase();
        const paramsStr = JSON.stringify(params).toLowerCase();
        if (toolNameLower.includes('delete') || paramsStr.includes('delete'))
            score += 0.3;
        if (toolNameLower.includes('remove') || toolNameLower.includes('destroy'))
            score += 0.25;
        if (toolNameLower.includes('update_budget') || paramsStr.includes('budget'))
            score += 0.2;
        if (toolNameLower.includes('transfer') || paramsStr.includes('transfer'))
            score += 0.35;
        if (toolNameLower.includes('send') || toolNameLower.includes('post'))
            score += 0.1;
        if (toolNameLower.includes('share') || paramsStr.includes('share'))
            score += 0.15;
        const amount = this.extractAmount(params);
        if (amount > 5000)
            score += 0.4;
        else if (amount > 1000)
            score += 0.2;
        else if (amount > 100)
            score += 0.1;
        const itemCount = this.extractItemCount(params);
        if (itemCount > 500)
            score += 0.3;
        else if (itemCount > 100)
            score += 0.15;
        if (agent.autonomy_level === 'low')
            score += 0.1;
        if (agent.autonomy_level === 'high')
            score -= 0.05;
        const isApprovedTool = agent.approval_required_for.includes(toolName);
        if (isApprovedTool)
            score += 0.2;
        return Math.min(Math.max(score, 0), 1);
    }
    getRiskLevel(score) {
        if (score >= RISK_THRESHOLDS.critical)
            return 'critical';
        if (score >= RISK_THRESHOLDS.high)
            return 'high';
        if (score >= RISK_THRESHOLDS.medium)
            return 'medium';
        return 'low';
    }
    createEscalation(agent_id, session_id, tool_name, params, risk_score, reasoning) {
        const escalation_id = generateEscalationId();
        const risk_level = this.getRiskLevel(risk_score);
        const now = new Date();
        const timeoutHours = this.getTimeoutHours(risk_level);
        const escalation = {
            escalation_id,
            tenant_id: '',
            agent_id,
            session_id,
            risk_level,
            risk_score,
            status: 'pending',
            action: {
                tool_name,
                description: `Agent attempted to execute ${tool_name}`,
                parameters: params,
                impact: this.assessImpact(tool_name, params),
            },
            agent_reasoning: reasoning,
            data_accessed: [],
            proposed_parameters: params,
            created_at: now.toISOString(),
            timeout_at: new Date(now.getTime() + timeoutHours * 60 * 60 * 1000).toISOString(),
        };
        this.cases.set(escalation_id, escalation);
        this.emit('escalation.created', escalation);
        this.scheduleTimeoutCheck(escalation_id, timeoutHours);
        return escalation;
    }
    resolveEscalation(escalation_id, decision, modified_parameters, digital_signature) {
        const escalation = this.cases.get(escalation_id);
        if (!escalation)
            return null;
        const now = new Date().toISOString();
        switch (decision) {
            case 'approve':
                escalation.status = 'approved';
                escalation.resolved_at = now;
                escalation.digital_signature = digital_signature || hashData(`${escalation_id}:approved:${now}`);
                break;
            case 'reject':
                escalation.status = 'rejected';
                escalation.resolved_at = now;
                break;
            case 'modify':
                escalation.status = 'modified';
                if (modified_parameters) {
                    escalation.proposed_parameters = modified_parameters;
                    escalation.action.parameters = modified_parameters;
                }
                break;
            case 'escalate':
                escalation.status = 'escalated';
                break;
        }
        this.emit('escalation.resolved', escalation);
        return escalation;
    }
    getEscalation(escalation_id) {
        return this.cases.get(escalation_id);
    }
    query(filters) {
        let results = Array.from(this.cases.values());
        if (filters.status) {
            results = results.filter(c => c.status === filters.status);
        }
        if (filters.risk_level) {
            results = results.filter(c => c.risk_level === filters.risk_level);
        }
        results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        return results;
    }
    getPending() {
        return this.query({ status: 'pending' });
    }
    getStats() {
        const all = Array.from(this.cases.values());
        return {
            total: all.length,
            pending: all.filter(c => c.status === 'pending').length,
            approved: all.filter(c => c.status === 'approved').length,
            rejected: all.filter(c => c.status === 'rejected').length,
            escalated: all.filter(c => c.status === 'escalated').length,
        };
    }
    getTimeoutHours(risk_level) {
        switch (risk_level) {
            case 'critical': return config.hitl.critical_timeout_hours;
            case 'high': return config.hitl.high_timeout_hours;
            case 'medium': return config.hitl.medium_timeout_hours;
            default: return config.hitl.medium_timeout_hours;
        }
    }
    extractAmount(params) {
        const amountFields = ['amount', 'budget', 'value', 'price', 'total', 'sum'];
        for (const field of amountFields) {
            const val = params[field];
            if (typeof val === 'number')
                return val;
            if (typeof val === 'string') {
                const parsed = parseFloat(val);
                if (!isNaN(parsed))
                    return parsed;
            }
        }
        return 0;
    }
    extractItemCount(params) {
        const countFields = ['count', 'items', 'batch_size', 'limit', 'quantity'];
        for (const field of countFields) {
            const val = params[field];
            if (typeof val === 'number')
                return val;
            if (typeof val === 'string') {
                const parsed = parseInt(val, 10);
                if (!isNaN(parsed))
                    return parsed;
            }
        }
        return 0;
    }
    assessImpact(tool_name, params) {
        const toolNameLower = tool_name.toLowerCase();
        if (toolNameLower.includes('delete'))
            return 'Data will be permanently deleted';
        if (toolNameLower.includes('send'))
            return 'Message will be sent to external recipients';
        if (toolNameLower.includes('transfer'))
            return 'Funds will be transferred';
        if (toolNameLower.includes('update'))
            return 'Records will be modified';
        if (toolNameLower.includes('create'))
            return 'New records will be created';
        return 'Action will be performed';
    }
    scheduleTimeoutCheck(escalation_id, hours) {
        const timeoutMs = hours * 60 * 60 * 1000;
        setTimeout(() => {
            const escalation = this.cases.get(escalation_id);
            if (escalation && escalation.status === 'pending') {
                escalation.status = 'rejected';
                escalation.resolved_at = new Date().toISOString();
                this.emit('escalation.timeout', escalation);
            }
        }, Math.min(timeoutMs, 2147483647));
    }
}
export const hitlService = new HITLService();
//# sourceMappingURL=hitl.js.map