// Token Bucket Rate Limiter — Global and per-adapter rate limiting
// Prevents 429 errors across 1,000+ integrations
export class RateLimiter {
    buckets = new Map();
    config;
    constructor(config) {
        this.config = { burst: config.requests, ...config };
    }
    async acquire(key, timeoutMs = 30000) {
        const bucket = this.getBucket(key);
        this.refill(bucket);
        if (bucket.tokens >= 1) {
            bucket.tokens -= 1;
            return;
        }
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                const idx = bucket.queue.findIndex((q) => q.resolve === resolve);
                if (idx !== -1) {
                    bucket.queue.splice(idx, 1);
                    reject(new Error(`Rate limit timeout for ${key}`));
                }
            }, timeoutMs);
            bucket.queue.push({ resolve, reject, timeout });
        });
    }
    getRemaining(key) {
        const bucket = this.getBucket(key);
        this.refill(bucket);
        return Math.floor(bucket.tokens);
    }
    getResetTime(key) {
        const bucket = this.getBucket(key);
        const needed = 1 - (bucket.tokens % 1);
        const refillRate = this.config.requests / this.config.windowMs;
        return Date.now() + needed / refillRate;
    }
    getBucket(key) {
        let bucket = this.buckets.get(key);
        if (!bucket) {
            bucket = {
                tokens: this.config.burst || this.config.requests,
                lastRefill: Date.now(),
                queue: [],
            };
            this.buckets.set(key, bucket);
        }
        return bucket;
    }
    refill(bucket) {
        const now = Date.now();
        const elapsed = now - bucket.lastRefill;
        const refillRate = this.config.requests / this.config.windowMs;
        const newTokens = elapsed * refillRate;
        if (newTokens > 0) {
            bucket.tokens = Math.min(this.config.burst || this.config.requests, bucket.tokens + newTokens);
            bucket.lastRefill = now;
        }
        while (bucket.tokens >= 1 && bucket.queue.length > 0) {
            const next = bucket.queue.shift();
            clearTimeout(next.timeout);
            bucket.tokens -= 1;
            next.resolve();
        }
    }
}
// Global rate limiter registry
export class RateLimiterRegistry {
    limiters = new Map();
    getOrCreate(key, config) {
        let limiter = this.limiters.get(key);
        if (!limiter) {
            limiter = new RateLimiter(config);
            this.limiters.set(key, limiter);
        }
        return limiter;
    }
    get(key) {
        return this.limiters.get(key);
    }
    has(key) {
        return this.limiters.has(key);
    }
}
export const globalRateLimiterRegistry = new RateLimiterRegistry();
//# sourceMappingURL=rate-limiter.js.map