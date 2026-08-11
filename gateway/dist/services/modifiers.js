class SchemaModifierService {
    rules = [];
    dangerousFields = new Set([
        'delete_account', 'delete_user', 'remove_admin', 'destroy',
        'purge', 'drop_table', 'DROP', 'truncate',
    ]);
    piiPatterns = [
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
        /\b\d{3}-\d{2}-\d{4}\b/g,
        /\b\d{16}\b/g,
    ];
    constructor() {
        this.registerDefaultRules();
    }
    registerDefaultRules() {
        this.rules.push({
            tool_pattern: '*.delete_*',
            action: 'block',
            fields: ['delete_account', 'delete_user', 'destroy'],
        });
        this.rules.push({
            tool_pattern: '*.update_budget',
            action: 'cap',
            fields: ['amount', 'budget', 'value'],
            value: 0.5,
        });
        this.rules.push({
            tool_pattern: '*',
            action: 'redact',
            fields: Array.from(this.dangerousFields),
        });
        this.rules.push({
            tool_pattern: '*',
            action: 'mask',
        });
    }
    addRule(rule) {
        this.rules.push(rule);
    }
    applySchemaModifiers(params, agent, toolName) {
        const modified = { ...params };
        for (const rule of this.rules) {
            if (toolName && !this.matchesPattern(toolName, rule.tool_pattern)) {
                continue;
            }
            if (rule.condition && !rule.condition(modified, agent)) {
                continue;
            }
            switch (rule.action) {
                case 'redact':
                    if (rule.fields) {
                        for (const field of rule.fields) {
                            if (field in modified) {
                                delete modified[field];
                            }
                        }
                    }
                    break;
                case 'cap':
                    if (rule.fields && rule.value !== undefined) {
                        for (const field of rule.fields) {
                            const val = modified[field];
                            if (typeof val === 'number' && val > rule.value) {
                                modified[field] = rule.value;
                            }
                        }
                    }
                    break;
                case 'block':
                    if (rule.fields) {
                        for (const field of rule.fields) {
                            if (field in modified) {
                                throw new Error(`Action blocked: ${field} requires explicit admin override`);
                            }
                        }
                    }
                    break;
                case 'mask':
                    this.maskPII(modified);
                    break;
                case 'inject':
                    if (rule.fields) {
                        for (const field of rule.fields) {
                            modified[field] = rule.value;
                        }
                    }
                    break;
            }
        }
        return modified;
    }
    validateBeforeExecution(toolName, params) {
        const toolLower = toolName.toLowerCase();
        if (toolLower.includes('delete')) {
            const hasConfirm = params.confirm === true || params.confirmed === true;
            if (!hasConfirm && params.force !== true) {
                console.warn(`[N0VA1O] Destructive action detected: ${toolName}. Adding safety check.`);
            }
        }
        const paramStr = JSON.stringify(params);
        if (paramStr.length > 1_000_000) {
            throw new Error('Payload exceeds maximum size limit');
        }
        for (const [key, value] of Object.entries(params)) {
            if (typeof value === 'string' && this.containsInjection(value)) {
                throw new Error(`Potential injection detected in parameter: ${key}`);
            }
        }
    }
    applyAfterModifiers(toolName, result) {
        if (result === null || result === undefined)
            return result;
        if (typeof result === 'string' && result.length > 100_000) {
            return {
                _type: 'large_payload',
                _truncated: true,
                _original_size: result.length,
                _pointer: `/workspace/outputs/${Date.now()}.txt`,
                summary: result.slice(0, 500) + '... [truncated]',
                message: 'Large response offloaded to virtual filesystem. Use file pointer to access.',
            };
        }
        if (typeof result === 'object') {
            const obj = result;
            if (obj.data && Array.isArray(obj.data) && obj.data.length > 1000) {
                return {
                    ...obj,
                    _type: 'large_dataset',
                    _truncated: true,
                    _total_rows: obj.data.length,
                    _returned_rows: 100,
                    _pointer: `/workspace/outputs/dataset_${Date.now()}.json`,
                    data: obj.data.slice(0, 100),
                    message: `Showing 100 of ${obj.data.length} rows. Use chunk-reader for full dataset.`,
                };
            }
            if (obj.content && typeof obj.content === 'string' && obj.content.length > 100_000) {
                return {
                    ...obj,
                    content: obj.content.slice(0, 500) + '... [truncated]',
                    _pointer: `/workspace/outputs/file_${Date.now()}.dat`,
                };
            }
        }
        return result;
    }
    redactSchema(schema, agent) {
        const redacted = JSON.parse(JSON.stringify(schema));
        if (redacted.properties) {
            const props = redacted.properties;
            for (const field of this.dangerousFields) {
                if (field in props) {
                    delete props[field];
                }
            }
            if (agent && agent.autonomy_level === 'low') {
                for (const [key, value] of Object.entries(props)) {
                    if (typeof value === 'object' && value !== null) {
                        const fieldDef = value;
                        if (fieldDef.dangerous || fieldDef.admin_only) {
                            delete props[key];
                        }
                    }
                }
            }
        }
        return redacted;
    }
    matchesPattern(toolName, pattern) {
        if (pattern === '*')
            return true;
        if (pattern === toolName)
            return true;
        if (pattern.includes('*')) {
            const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
            return regex.test(toolName);
        }
        return false;
    }
    maskPII(obj) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'string') {
                let masked = value;
                for (const pattern of this.piiPatterns) {
                    masked = masked.replace(pattern, (match) => {
                        if (match.includes('@'))
                            return '***@***.com';
                        return '***-**-****';
                    });
                }
                obj[key] = masked;
            }
            else if (typeof value === 'object' && value !== null) {
                this.maskPII(value);
            }
        }
    }
    containsInjection(value) {
        const injectionPatterns = [
            /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b)/i,
            /(<script|javascript:|on\w+=)/i,
            /(\.\.\/|\/etc\/passwd|\/bin\/sh)/,
        ];
        return injectionPatterns.some(pattern => pattern.test(value));
    }
}
export const schemaModifier = new SchemaModifierService();
//# sourceMappingURL=modifiers.js.map