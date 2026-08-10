// Generic REST Adapter — Powers all 1,000+ catalog integrations
// Through configuration-driven API calls

import { BaseAdapter, AdapterConfig, AdapterResponse, AuthCredentials } from './core/index.js';
import { IntegrationEntry, integrations } from './catalog/index.js';

export class GenericRestAdapter extends BaseAdapter {
  readonly config: AdapterConfig;

  constructor(config: AdapterConfig, credentials: AuthCredentials) {
    super(credentials);
    this.config = config;
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/', params });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

// Adapter Factory — Creates adapters dynamically from catalog
export class AdapterFactory {
  private credentials: Map<string, AuthCredentials> = new Map();

  setCredentials(integrationId: string, credentials: AuthCredentials): void {
    this.credentials.set(integrationId, credentials);
  }

  create(integrationId: string): GenericRestAdapter | null {
    const entry = integrations.find((i) => i.id === integrationId);
    if (!entry) return null;

    const credentials = this.credentials.get(integrationId) || { type: 'api_key' };

    const config: AdapterConfig = {
      id: entry.id,
      name: entry.name,
      category: entry.category,
      description: entry.description,
      authTypes: [entry.authType],
      baseUrl: entry.baseUrl,
    };

    return new GenericRestAdapter(config, credentials);
  }

  createFromEntry(entry: IntegrationEntry, credentials: AuthCredentials): GenericRestAdapter {
    const config: AdapterConfig = {
      id: entry.id,
      name: entry.name,
      category: entry.category,
      description: entry.description,
      authTypes: [entry.authType],
      baseUrl: entry.baseUrl,
    };

    return new GenericRestAdapter(config, credentials);
  }

  getAvailableIntegrations(): IntegrationEntry[] {
    return integrations;
  }

  getIntegrationsByCategory(category: string): IntegrationEntry[] {
    return integrations.filter((i) => i.category === category);
  }

  search(query: string): IntegrationEntry[] {
    const lower = query.toLowerCase();
    return integrations.filter(
      (i) =>
        i.name.toLowerCase().includes(lower) ||
        i.description.toLowerCase().includes(lower) ||
        i.category.toLowerCase().includes(lower)
    );
  }
}

export const adapterFactory = new AdapterFactory();
