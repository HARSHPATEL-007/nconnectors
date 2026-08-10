import { prisma } from './database.js';
import { getRedis } from './redis.js';
import { logger } from './logger.js';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  checks: {
    database: HealthCheckResult;
    redis: HealthCheckResult;
    memory: HealthCheckResult;
  };
}

interface HealthCheckResult {
  status: 'pass' | 'fail' | 'warn';
  responseTimeMs: number;
  message?: string;
}

interface Metrics {
  agents: { total: number; active: number; paused: number };
  sessions: { total: number; running: number; completed: number };
  connections: { total: number; active: number; expired: number };
  auditEntries: { total: number; last24h: number };
  escalations: { pending: number; resolved: number };
  recipes: { total: number };
}

const startTime = Date.now();

class HealthService {
  async getHealth(): Promise<HealthStatus> {
    const [dbCheck, redisCheck, memoryCheck] = await Promise.all([
      this.checkDatabase(),
      this.checkRedis(),
      this.checkMemory(),
    ]);

    const checks = {
      database: dbCheck,
      redis: redisCheck,
      memory: memoryCheck,
    };

    const allPassed = dbCheck.status === 'pass' && redisCheck.status === 'pass';
    const anyFailed = dbCheck.status === 'fail' || redisCheck.status === 'fail';

    return {
      status: anyFailed ? 'unhealthy' : allPassed ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      uptime: Date.now() - startTime,
      version: '2026.07.0',
      checks,
    };
  }

  private async checkDatabase(): Promise<HealthCheckResult> {
    const start = Date.now();
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { status: 'pass', responseTimeMs: Date.now() - start };
    } catch (err) {
      return {
        status: 'fail',
        responseTimeMs: Date.now() - start,
        message: err instanceof Error ? err.message : 'Database check failed',
      };
    }
  }

  private async checkRedis(): Promise<HealthCheckResult> {
    const start = Date.now();
    try {
      const redis = getRedis();
      await redis.ping();
      return { status: 'pass', responseTimeMs: Date.now() - start };
    } catch {
      return { status: 'warn', responseTimeMs: Date.now() - start, message: 'Redis unavailable' };
    }
  }

  private checkMemory(): HealthCheckResult {
    const usage = process.memoryUsage();
    const usedMB = Math.round(usage.heapUsed / 1024 / 1024);
    const totalMB = Math.round(usage.heapTotal / 1024 / 1024);
    const usagePercent = (usage.heapUsed / usage.heapTotal) * 100;

    return {
      status: usagePercent > 90 ? 'fail' : usagePercent > 75 ? 'warn' : 'pass',
      responseTimeMs: 0,
      message: `${usedMB}MB / ${totalMB}MB (${Math.round(usagePercent)}%)`,
    };
  }

  async getMetrics(): Promise<Metrics> {
    const now = new Date();
    const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const [
      agentsTotal,
      agentsActive,
      agentsPaused,
      sessionsTotal,
      sessionsRunning,
      sessionsCompleted,
      connectionsTotal,
      connectionsActive,
      connectionsExpired,
      auditTotal,
      auditLast24h,
      escalationsPending,
      escalationsResolved,
      recipesTotal,
    ] = await Promise.all([
      prisma.agent.count(),
      prisma.agent.count({ where: { status: 'active' } }),
      prisma.agent.count({ where: { status: 'paused' } }),
      prisma.session.count(),
      prisma.session.count({ where: { status: 'running' } }),
      prisma.session.count({ where: { status: 'completed' } }),
      prisma.connectedAccount.count(),
      prisma.connectedAccount.count({ where: { status: 'active' } }),
      prisma.connectedAccount.count({ where: { status: 'expired' } }),
      prisma.auditEntry.count(),
      prisma.auditEntry.count({ where: { timestamp: { gte: last24h } } }),
      prisma.escalationCase.count({ where: { status: 'pending' } }),
      prisma.escalationCase.count({ where: { status: { in: ['approved', 'rejected'] } } }),
      prisma.recipe.count(),
    ]);

    return {
      agents: { total: agentsTotal, active: agentsActive, paused: agentsPaused },
      sessions: { total: sessionsTotal, running: sessionsRunning, completed: sessionsCompleted },
      connections: { total: connectionsTotal, active: connectionsActive, expired: connectionsExpired },
      auditEntries: { total: auditTotal, last24h: auditLast24h },
      escalations: { pending: escalationsPending, resolved: escalationsResolved },
      recipes: { total: recipesTotal },
    };
  }

  getReadiness(): { ready: boolean; checks: Record<string, boolean> } {
    return {
      ready: true,
      checks: {
        database: true,
        redis: true,
      },
    };
  }
}

export const healthService = new HealthService();
