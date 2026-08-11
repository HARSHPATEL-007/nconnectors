import { agentRepository } from './repositories.js';
import { logger } from './logger.js';
const rateLimitMap = new Map();
export async function authenticateAgent(req, res, next) {
    const apiKey = req.headers.authorization?.replace('Bearer ', '') || req.headers['x-api-key'];
    if (!apiKey) {
        res.status(401).json({ error: 'API key required' });
        return;
    }
    const agent = await agentRepository.findByApiKey(apiKey);
    if (!agent) {
        res.status(401).json({ error: 'Invalid API key' });
        return;
    }
    if (agent.status !== 'active') {
        res.status(403).json({ error: `Agent is ${agent.status}` });
        return;
    }
    if (new Date(agent.expiresAt) < new Date()) {
        res.status(403).json({ error: 'Agent API key expired' });
        return;
    }
    req.agent = {
        id: agent.id,
        tenantId: agent.tenantId,
        name: agent.name,
        apiKey: agent.apiKey,
    };
    next();
}
export function rateLimit(maxRequests = 100, windowMs = 60000) {
    return (req, res, next) => {
        const key = req.agent?.id || req.ip || 'unknown';
        const now = Date.now();
        const entry = rateLimitMap.get(key);
        if (!entry || now > entry.resetAt) {
            rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
            next();
            return;
        }
        if (entry.count >= maxRequests) {
            res.status(429).json({
                error: 'Rate limit exceeded',
                retryAfter: Math.ceil((entry.resetAt - now) / 1000),
            });
            return;
        }
        entry.count++;
        next();
    };
}
export function requestLogger(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info({
            method: req.method,
            path: req.path,
            status: res.statusCode,
            duration,
            agentId: req.agent?.id,
            ip: req.ip,
        }, 'Request completed');
    });
    next();
}
export function errorHandler(err, req, res, _next) {
    logger.error({
        err: err.message,
        stack: err.stack,
        method: req.method,
        path: req.path,
    }, 'Unhandled error');
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
}
//# sourceMappingURL=middleware.js.map