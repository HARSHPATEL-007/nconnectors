import Redis from 'ioredis';
let redis = null;
export function getRedis() {
    if (!redis) {
        const url = process.env.REDIS_URL || 'redis://localhost:6379';
        redis = new Redis(url, {
            maxRetriesPerRequest: 3,
            lazyConnect: true,
            retryStrategy: (times) => Math.min(times * 100, 3000),
        });
        redis.on('connect', () => console.log('[N0VA1O] Redis connected'));
        redis.on('error', (err) => console.error('[N0VA1O] Redis error:', err.message));
    }
    return redis;
}
export async function connectRedis() {
    const client = getRedis();
    await client.connect();
}
export async function disconnectRedis() {
    if (redis) {
        await redis.quit();
        redis = null;
        console.log('[N0VA1O] Redis disconnected');
    }
}
export async function cacheGet(key) {
    const client = getRedis();
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
}
export async function cacheSet(key, value, ttlSeconds) {
    const client = getRedis();
    const serialized = JSON.stringify(value);
    if (ttlSeconds) {
        await client.setex(key, ttlSeconds, serialized);
    }
    else {
        await client.set(key, serialized);
    }
}
export async function cacheDelete(key) {
    const client = getRedis();
    await client.del(key);
}
export async function cacheInvalidatePattern(pattern) {
    const client = getRedis();
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
        await client.del(...keys);
    }
}
//# sourceMappingURL=redis.js.map