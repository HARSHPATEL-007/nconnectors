export const config = {
    host: process.env.N0VA1O_HOST || '0.0.0.0',
    port: parseInt(process.env.N0VA1O_PORT || '3001', 10),
    transports: (process.env.N0VA1O_TRANSPORTS || 'http_sse,websocket').split(','),
    encryption: {
        algorithm: 'aes-256-gcm',
        key_rotation_days: 15,
        quantum_safe: true,
    },
    sandbox: {
        cpu_quota: 2,
        ram_quota: 4096,
        timeout_seconds: 600,
        network_mode: 'isolated',
    },
    audit: {
        retention_days: parseInt(process.env.AUDIT_RETENTION_DAYS || '365', 10),
        merkle_tree: process.env.AUDIT_MERKLE_TREE !== 'false',
        blockchain_anchor: process.env.AUDIT_BLOCKCHAIN_ANCHIP === 'true',
    },
    hitl: {
        critical_timeout_hours: parseInt(process.env.HITL_CRITICAL_TIMEOUT_HOURS || '4', 10),
        high_timeout_hours: parseInt(process.env.HITL_HIGH_TIMEOUT_HOURS || '24', 10),
        medium_timeout_hours: parseInt(process.env.HITL_MEDIUM_TIMEOUT_HOURS || '72', 10),
    },
};
export const MCP_VERSION = '2024-11-05';
export const RISK_THRESHOLDS = {
    critical: 0.8,
    high: 0.5,
    medium: 0.2,
    low: 0,
};
//# sourceMappingURL=index.js.map