import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import { PrismaClient } from '@prisma/client';
export const prisma = global.prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}
export async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log('[N0VA1O] PostgreSQL connected');
    }
    catch (error) {
        console.error('[N0VA1O] PostgreSQL connection failed:', error);
        process.exit(1);
    }
}
export async function disconnectDatabase() {
    await prisma.$disconnect();
    console.log('[N0VA1O] PostgreSQL disconnected');
}
//# sourceMappingURL=database.js.map