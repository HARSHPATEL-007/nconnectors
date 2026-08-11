import pino from 'pino';
export const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    transport: process.env.NODE_ENV === 'development'
        ? { target: 'pino-pretty', options: { colorize: true, translateTime: 'HH:MM:ss.l' } }
        : undefined,
    base: { service: 'n0va1o-gateway' },
    timestamp: pino.stdTimeFunctions.isoTime,
});
export function createChildLogger(context) {
    return logger.child(context);
}
//# sourceMappingURL=logger.js.map