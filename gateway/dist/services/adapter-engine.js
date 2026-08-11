// Adapter Execution Engine — Bridges 1,519 generated adapters to the server
// Replaces hardcoded connectors with catalog-driven adapter registry
import { registry, adapterConfigs } from '../adapters/core/index.js';
import { adapterFactory } from '../adapters/generic.js';
import { globalTokenManager } from './token-manager.js';
import { globalRateLimiterRegistry } from './rate-limiter.js';
// Load all 1,519 generated adapters (self-registering)
import '../adapters/index.js';
export class AdapterEngine {
    static instance;
    static getInstance() {
        if (!AdapterEngine.instance) {
            AdapterEngine.instance = new AdapterEngine();
        }
        return AdapterEngine.instance;
    }
    // Get adapter from registry or factory
    getAdapter(provider, credentials) {
        // Try registry first (generated adapters)
        let adapter = registry.create(provider, credentials);
        // Fall back to factory
        if (!adapter) {
            adapter = adapterFactory.create(provider);
        }
        return adapter;
    }
    // Execute any adapter action
    async execute(request) {
        const startTime = Date.now();
        const { provider, action, params = {}, credentials } = request;
        try {
            // Resolve credentials
            let creds = credentials || { type: 'api_key' };
            const managedTokens = globalTokenManager.get(provider);
            if (managedTokens) {
                creds = { type: 'oauth2', accessToken: managedTokens.accessToken };
            }
            // Get adapter
            const adapter = this.getAdapter(provider, creds);
            if (!adapter) {
                return {
                    success: false,
                    error: `No adapter found for provider: ${provider}`,
                    provider,
                    action,
                    latencyMs: Date.now() - startTime,
                };
            }
            // Rate limiting
            const rateLimitConfig = this.getRateLimitForProvider(provider);
            const limiter = globalRateLimiterRegistry.getOrCreate(`${provider}`, rateLimitConfig);
            await limiter.acquire(`${provider}`, 10000);
            // Execute action
            const response = await this.executeAction(adapter, action, params);
            const latencyMs = Date.now() - startTime;
            return {
                success: response.success,
                data: response.data,
                error: response.error,
                provider,
                action,
                latencyMs,
            };
        }
        catch (err) {
            const latencyMs = Date.now() - startTime;
            const error = err instanceof Error ? err.message : 'Unknown error';
            return {
                success: false,
                error,
                provider,
                action,
                latencyMs,
            };
        }
    }
    // Map action names to adapter methods
    async executeAction(adapter, action, params) {
        const a = adapter;
        switch (action) {
            case 'list':
            case 'search':
                if (a.search)
                    return a.search(params.query || '*', params);
                return a.list(params);
            case 'get':
            case 'read':
                if (a.getById)
                    return a.getById(params.id);
                return a.get(params.id);
            case 'create':
            case 'post':
                if (a.createResource)
                    return a.createResource(params.body || params);
                return a.create(params.body || params);
            case 'update':
            case 'put':
            case 'patch':
                if (a.updateResource)
                    return a.updateResource(params.id, params.body || params);
                return a.update(params.id, params.body || params);
            case 'delete':
            case 'remove':
                if (a.deleteResource)
                    return a.deleteResource(params.id);
                return a.delete(params.id);
            case 'ping':
                const healthy = await a.ping();
                return { success: healthy, data: { healthy }, statusCode: healthy ? 200 : 503 };
            default:
                // Try provider-specific method if available
                if (typeof adapter[action] === 'function') {
                    return adapter[action](params);
                }
                return { success: false, error: `Unknown action: ${action}`, statusCode: 400 };
        }
    }
    // Get rate limit config for a provider
    getRateLimitForProvider(_provider) {
        const config = adapterConfigs.find(c => c.id === _provider);
        return config?.rateLimit || { requests: 100, windowMs: 60000 };
    }
    // Get all available providers
    getAvailableProviders() {
        return adapterConfigs;
    }
    // Get providers by category
    getProvidersByCategory(category) {
        return adapterConfigs.filter(c => c.category === category);
    }
    // Search providers
    searchProviders(query) {
        const lower = query.toLowerCase();
        return adapterConfigs.filter(c => c.name.toLowerCase().includes(lower) ||
            c.category.toLowerCase().includes(lower) ||
            c.description.toLowerCase().includes(lower));
    }
    // Get all categories
    getCategories() {
        return [...new Set(adapterConfigs.map(c => c.category))];
    }
}
export const adapterEngine = AdapterEngine.getInstance();
//# sourceMappingURL=adapter-engine.js.map