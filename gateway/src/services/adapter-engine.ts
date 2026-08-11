// Adapter Execution Engine — Bridges 1,519 generated adapters to the server
// Replaces hardcoded connectors with catalog-driven adapter registry

import { registry, adapterConfigs, BaseAdapter, AdapterConfig, AdapterResponse, AuthCredentials } from '../adapters/core/index.js';
import { GenericRestAdapter, adapterFactory } from '../adapters/generic.js';
import { integrations } from '../adapters/catalog/index.js';
import { globalTokenManager } from './token-manager.js';
import { globalRateLimiterRegistry } from './rate-limiter.js';
import { globalErrorHandler } from './error-handler.js';
import { logger } from '../infrastructure/logger.js';

// Load all 1,519 generated adapters (self-registering)
import '../adapters/index.js';

export interface AdapterRequest {
  provider: string;
  action: string;
  params?: Record<string, unknown>;
  credentials?: AuthCredentials;
}

export interface AdapterResult {
  success: boolean;
  data?: unknown;
  error?: string;
  provider: string;
  action: string;
  latencyMs: number;
}

export class AdapterEngine {
  private static instance: AdapterEngine;

  static getInstance(): AdapterEngine {
    if (!AdapterEngine.instance) {
      AdapterEngine.instance = new AdapterEngine();
    }
    return AdapterEngine.instance;
  }

  // Get adapter from registry or factory
  private getAdapter(provider: string, credentials: AuthCredentials): BaseAdapter | null {
    // Try registry first (generated adapters)
    let adapter = registry.create(provider, credentials);

    // Fall back to factory
    if (!adapter) {
      adapter = adapterFactory.create(provider);
    }

    return adapter as BaseAdapter | null;
  }

  // Execute any adapter action
  async execute(request: AdapterRequest): Promise<AdapterResult> {
    const startTime = Date.now();
    const { provider, action, params = {}, credentials } = request;

    try {
      // Resolve credentials
      let creds: AuthCredentials = credentials || { type: 'api_key' };
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
    } catch (err) {
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
  private async executeAction(
    adapter: BaseAdapter,
    action: string,
    params: Record<string, string | number | unknown>
  ): Promise<AdapterResponse> {
    const a = adapter as GenericRestAdapter & BaseAdapter & {
      search?: (q: string, p?: Record<string, string>) => Promise<AdapterResponse>;
      getById?: (id: string) => Promise<AdapterResponse>;
      createResource?: (body: unknown) => Promise<AdapterResponse>;
      updateResource?: (id: string, body: unknown) => Promise<AdapterResponse>;
      deleteResource?: (id: string) => Promise<AdapterResponse>;
    };

    switch (action) {
      case 'list':
      case 'search':
        if (a.search) return a.search(params.query as string || '*', params as Record<string, string>);
        return a.list(params as Record<string, string>);

      case 'get':
      case 'read':
        if (a.getById) return a.getById(params.id as string);
        return a.get(params.id as string);

      case 'create':
      case 'post':
        if (a.createResource) return a.createResource(params.body || params);
        return a.create(params.body || params);

      case 'update':
      case 'put':
      case 'patch':
        if (a.updateResource) return a.updateResource(params.id as string, params.body || params);
        return a.update(params.id as string, params.body || params);

      case 'delete':
      case 'remove':
        if (a.deleteResource) return a.deleteResource(params.id as string);
        return a.delete(params.id as string);

      case 'ping':
        const healthy = await a.ping();
        return { success: healthy, data: { healthy }, statusCode: healthy ? 200 : 503 };

      default:
        // Try provider-specific method if available
        if (typeof (adapter as any)[action] === 'function') {
          return (adapter as any)[action](params);
        }
        return { success: false, error: `Unknown action: ${action}`, statusCode: 400 };
    }
  }

  // Get rate limit config for a provider
  private getRateLimitForProvider(_provider: string): { requests: number; windowMs: number } {
    const config = adapterConfigs.find(c => c.id === _provider);
    return config?.rateLimit || { requests: 100, windowMs: 60000 };
  }

  // Get all available providers
  getAvailableProviders(): AdapterConfig[] {
    return adapterConfigs;
  }

  // Get providers by category
  getProvidersByCategory(category: string): AdapterConfig[] {
    return adapterConfigs.filter(c => c.category === category);
  }

  // Search providers
  searchProviders(query: string): AdapterConfig[] {
    const lower = query.toLowerCase();
    return adapterConfigs.filter(
      c =>
        c.name.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower) ||
        c.description.toLowerCase().includes(lower)
    );
  }

  // Get all categories
  getCategories(): string[] {
    return [...new Set(adapterConfigs.map(c => c.category))];
  }
}

export const adapterEngine = AdapterEngine.getInstance();
