import { gateway } from './server.js';
import { connectDatabase, disconnectDatabase } from './infrastructure/database.js';
import { connectRedis, disconnectRedis } from './infrastructure/redis.js';
import { logger } from './infrastructure/logger.js';
import { config } from './config/index.js';

async function main(): Promise<void> {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║           N0VA1O INFINITE INTEGRATION GATEWAY           ║');
  console.log('║              Transcendent Edition v2026.07              ║');
  console.log('║                   PRODUCTION BACKEND                   ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log();

  try {
    await connectDatabase();
    await connectRedis();
    await gateway.start();

    console.log();
    console.log(`[N0VA1O] Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`[N0VA1O] Transports: ${config.transports.join(', ')}`);
    console.log(`[N0VA1O] Encryption: ${config.encryption.algorithm}`);
    console.log(`[N0VA1O] Database: PostgreSQL`);
    console.log(`[N0VA1O] Cache: Redis`);
    console.log();
    console.log('[N0VA1O] Production gateway ready. Awaiting connections...');
    console.log();
  } catch (err) {
    logger.fatal({ err }, 'Failed to start gateway');
    process.exit(1);
  }
}

async function shutdown(signal: string): Promise<void> {
  console.log(`\n[N0VA1O] Received ${signal}. Shutting down gracefully...`);
  try {
    await gateway.stop();
    await disconnectRedis();
    await disconnectDatabase();
    logger.info('Gateway shut down gracefully');
    process.exit(0);
  } catch (err) {
    logger.error({ err }, 'Error during shutdown');
    process.exit(1);
  }
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('uncaughtException', (err) => {
  logger.fatal({ err }, 'Uncaught exception');
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  logger.fatal({ reason }, 'Unhandled rejection');
  process.exit(1);
});

main();
