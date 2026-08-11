// Core Adapter Framework
// Standardized interface for all production connectors
// Base adapter with common functionality
export class BaseAdapter {
    credentials;
    rateLimitRemaining = 0;
    rateLimitResetAt = 0;
    requestTimestamps = [];
    constructor(credentials) {
        this.credentials = credentials;
    }
    async ping() {
        try {
            const response = await this.performRequest({ method: 'GET', path: '/health' });
            return response.success;
        }
        catch {
            return false;
        }
    }
    async getRateLimit() {
        return { remaining: this.rateLimitRemaining, resetAt: this.rateLimitResetAt };
    }
    async performRequest(options) {
        // Rate limiting
        if (this.config.rateLimit) {
            await this.enforceRateLimit();
        }
        const url = this.buildUrl(options);
        const headers = this.buildHeaders(options);
        try {
            const response = await fetch(url, {
                method: options.method || 'GET',
                headers,
                body: options.body ? JSON.stringify(options.body) : undefined,
            });
            // Parse rate limit headers
            this.parseRateLimits(response);
            const data = await response.json().catch(() => null);
            if (!response.ok) {
                return {
                    success: false,
                    error: data?.error?.message || data?.message || `HTTP ${response.status}`,
                    statusCode: response.status,
                };
            }
            return {
                success: true,
                data: data,
                statusCode: response.status,
                rateLimit: {
                    remaining: this.rateLimitRemaining,
                    resetAt: this.rateLimitResetAt,
                },
            };
        }
        catch (err) {
            return {
                success: false,
                error: err instanceof Error ? err.message : 'Request failed',
                statusCode: 0,
            };
        }
    }
    buildUrl(options) {
        let url = this.config.baseUrl;
        if (options.path) {
            url += options.path.startsWith('/') ? options.path : `/${options.path}`;
        }
        if (options.params) {
            const searchParams = new URLSearchParams(options.params);
            url += `?${searchParams.toString()}`;
        }
        return url;
    }
    buildHeaders(options) {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...options.headers,
        };
        switch (this.credentials.type) {
            case 'oauth2':
            case 'bearer':
                if (this.credentials.accessToken) {
                    headers['Authorization'] = `Bearer ${this.credentials.accessToken}`;
                }
                break;
            case 'api_key':
                if (this.credentials.apiKey) {
                    headers['Authorization'] = `Bearer ${this.credentials.apiKey}`;
                }
                break;
            case 'basic':
                if (this.credentials.username && this.credentials.password) {
                    const encoded = Buffer.from(`${this.credentials.username}:${this.credentials.password}`).toString('base64');
                    headers['Authorization'] = `Basic ${encoded}`;
                }
                break;
        }
        return headers;
    }
    parseRateLimits(response) {
        const remaining = response.headers.get('x-ratelimit-remaining');
        const reset = response.headers.get('x-ratelimit-reset');
        if (remaining)
            this.rateLimitRemaining = parseInt(remaining, 10);
        if (reset)
            this.rateLimitResetAt = parseInt(reset, 10) * 1000;
    }
    async enforceRateLimit() {
        if (!this.config.rateLimit)
            return;
        const now = Date.now();
        const windowStart = now - this.config.rateLimit.windowMs;
        // Remove old timestamps
        this.requestTimestamps = this.requestTimestamps.filter((t) => t > windowStart);
        if (this.requestTimestamps.length >= this.config.rateLimit.requests) {
            const oldestInWindow = this.requestTimestamps[0];
            const waitTime = oldestInWindow + this.config.rateLimit.windowMs - now;
            if (waitTime > 0) {
                await new Promise((resolve) => setTimeout(resolve, waitTime));
            }
        }
        this.requestTimestamps.push(now);
    }
}
// Adapter registry
export class AdapterRegistry {
    adapters = new Map();
    register(id, adapter) {
        this.adapters.set(id, adapter);
    }
    create(id, credentials) {
        const AdapterClass = this.adapters.get(id);
        if (!AdapterClass)
            return null;
        return new AdapterClass(credentials);
    }
    getAvailableAdapters() {
        return adapterConfigs;
    }
    getAdaptersByCategory(category) {
        return adapterConfigs.filter((c) => c.category === category);
    }
}
export const adapterConfigs = [];
export const registry = new AdapterRegistry();
export function registerAdapter(config) {
    adapterConfigs.push(config);
}
//# sourceMappingURL=index.js.map