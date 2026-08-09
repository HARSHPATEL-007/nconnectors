import type { ServerConfig } from '../types/index.js';

export const config: ServerConfig = {
  host: process.env.N0VA1O_HOST || '0.0.0.0',
  port: parseInt(process.env.N0VA1O_PORT || '3001', 10),
  transports: (process.env.N0VA1O_TRANSPORTS || 'http_sse,websocket').split(',') as ServerConfig['transports'],
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
    retention_days: 365,
    merkle_tree: true,
    blockchain_anchor: false,
  },
  hitl: {
    critical_timeout_hours: 4,
    high_timeout_hours: 24,
    medium_timeout_hours: 72,
  },
};

export const MCP_VERSION = '2024-11-05';

export const RISK_THRESHOLDS = {
  critical: 0.8,
  high: 0.5,
  medium: 0.2,
  low: 0,
} as const;

export const ERROR_CODES = {
  N0VA1O_RATE_LIMIT: { code: 429, message: 'Rate limit exceeded. Backoff and retry.' },
  N0VA1O_AUTH_EXPIRED: { code: 401, message: 'Authentication expired. Re-authorization required.' },
  N0VA1O_NOT_FOUND: { code: 404, message: 'Resource not found.' },
  N0VA1O_SCHEMA_DRIFT: { code: 400, message: 'API schema changed. Auto-adapting.' },
  N0VA1O_SANDBOX_ERROR: { code: 500, message: 'Sandbox execution failed.' },
  N0VA1O_HITL_REQUIRED: { code: 403, message: 'Human approval required for this action.' },
  N0VA1O_PROVIDER_DOWN: { code: 503, message: 'Third-party provider unavailable.' },
  N0VA1O_QUOTA_EXCEEDED: { code: 402, message: 'Plan quota exceeded.' },
} as const;
