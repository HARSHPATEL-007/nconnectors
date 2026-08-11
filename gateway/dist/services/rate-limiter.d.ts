export interface RateLimiterConfig {
    requests: number;
    windowMs: number;
    burst?: number;
}
export declare class RateLimiter {
    private buckets;
    private readonly config;
    constructor(config: RateLimiterConfig);
    acquire(key: string, timeoutMs?: number): Promise<void>;
    getRemaining(key: string): number;
    getResetTime(key: string): number;
    private getBucket;
    private refill;
}
export declare class RateLimiterRegistry {
    private limiters;
    getOrCreate(key: string, config: RateLimiterConfig): RateLimiter;
    get(key: string): RateLimiter | undefined;
    has(key: string): boolean;
}
export declare const globalRateLimiterRegistry: RateLimiterRegistry;
//# sourceMappingURL=rate-limiter.d.ts.map