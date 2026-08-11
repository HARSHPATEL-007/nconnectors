import type { Agent } from '../types/index.js';
interface ModifierRule {
    tool_pattern: string;
    action: 'redact' | 'cap' | 'block' | 'mask' | 'inject';
    fields?: string[];
    value?: number;
    condition?: (params: Record<string, unknown>, agent?: Agent) => boolean;
}
declare class SchemaModifierService {
    private rules;
    private dangerousFields;
    private piiPatterns;
    constructor();
    private registerDefaultRules;
    addRule(rule: ModifierRule): void;
    applySchemaModifiers(params: Record<string, unknown>, agent?: Agent, toolName?: string): Record<string, unknown>;
    validateBeforeExecution(toolName: string, params: Record<string, unknown>): void;
    applyAfterModifiers(toolName: string, result: unknown): unknown;
    redactSchema(schema: Record<string, unknown>, agent?: Agent): Record<string, unknown>;
    private matchesPattern;
    private maskPII;
    private containsInjection;
}
export declare const schemaModifier: SchemaModifierService;
export {};
//# sourceMappingURL=modifiers.d.ts.map