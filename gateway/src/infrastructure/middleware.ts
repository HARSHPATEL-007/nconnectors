import type { Request, Response, NextFunction } from 'express';
import type { PrismaClient } from '@prisma/client';
import { agentRepository } from './repositories.js';
import { logger } from './logger.js';

type AgentType = Awaited<ReturnType<typeof agentRepository.findByApiKey>>;

declare global {
  namespace Express {
    interface Request {
      agent?: {
        id: string;
        tenantId: string;
        name: string;
        apiKey: string;
      };
    }
  }
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function authenticateAgent(req: Request, res: Response, next: NextFunction): Promise<void> {
  const apiKey = req.headers.authorization?.replace('Bearer ', '') || req.headers['x-api-key'] as string;

  if (!apiKey) {
    res.status(401).json({ error: 'API key required' });
    return;
  }

  const agent = await agentRepository.findByApiKey(apiKey);
  if (!agent) {
    res.status(401).json({ error: 'Invalid API key' });
    return;
  }

  if ((agent as any).status !== 'active') {
    res.status(403).json({ error: `Agent is ${(agent as any).status}` });
    return;
  }

  if (new Date((agent as any).expiresAt) < new Date()) {
    res.status(403).json({ error: 'Agent API key expired' });
    return;
  }

  req.agent = {
    id: (agent as any).id,
    tenantId: (agent as any).tenantId,
    name: (agent as any).name,
    apiKey: (agent as any).apiKey,
  };

  next();
}

export function rateLimit(maxRequests: number = 100, windowMs: number = 60000) {
  return (req: Request, res: Response, next: NextFunction): void => {
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

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
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

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction): void {
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
