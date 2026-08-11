// Generic REST Adapter — Powers all 1,000+ catalog integrations
// Through configuration-driven API calls
import { BaseAdapter } from './core/index.js';
import { integrations } from './catalog/index.js';
export class GenericRestAdapter extends BaseAdapter {
    config;
    constructor(config, credentials) {
        super(credentials);
        this.config = config;
    }
    async list(params) {
        return this.performRequest({ method: 'GET', path: '/', params });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
// Adapter Factory — Creates adapters dynamically from catalog
export class AdapterFactory {
    credentials = new Map();
    setCredentials(integrationId, credentials) {
        this.credentials.set(integrationId, credentials);
    }
    create(integrationId) {
        const entry = integrations.find((i) => i.id === integrationId);
        if (!entry)
            return null;
        const credentials = this.credentials.get(integrationId) || { type: 'api_key' };
        const config = {
            id: entry.id,
            name: entry.name,
            category: entry.category,
            description: entry.description,
            authTypes: [entry.authType],
            baseUrl: entry.baseUrl,
        };
        return new GenericRestAdapter(config, credentials);
    }
    createFromEntry(entry, credentials) {
        const config = {
            id: entry.id,
            name: entry.name,
            category: entry.category,
            description: entry.description,
            authTypes: [entry.authType],
            baseUrl: entry.baseUrl,
        };
        return new GenericRestAdapter(config, credentials);
    }
    getAvailableIntegrations() {
        return integrations;
    }
    getIntegrationsByCategory(category) {
        return integrations.filter((i) => i.category === category);
    }
    search(query) {
        const lower = query.toLowerCase();
        return integrations.filter((i) => i.name.toLowerCase().includes(lower) ||
            i.description.toLowerCase().includes(lower) ||
            i.category.toLowerCase().includes(lower));
    }
}
export const adapterFactory = new AdapterFactory();
//# sourceMappingURL=generic.js.map