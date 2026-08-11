// CRM Production Connectors
import { BaseAdapter, registerAdapter } from '../core/index.js';
const salesforceConfig = {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'World\'s #1 CRM platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://your-instance.salesforce.com/services/data/v58.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 200 },
};
registerAdapter(salesforceConfig);
export class SalesforceAdapter extends BaseAdapter {
    config = salesforceConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        const sobject = params?.sobject || 'Account';
        const limit = params?.limit || '200';
        const offset = params?.offset || '0';
        return this.performRequest({
            method: 'GET',
            path: `/sobjects/${sobject}`,
            params: { limit, offset },
        });
    }
    async get(id) {
        const sobject = 'Account';
        return this.performRequest({ method: 'GET', path: `/sobjects/${sobject}/${id}` });
    }
    async create(body) {
        const sobject = 'Account';
        return this.performRequest({ method: 'POST', path: `/sobjects/${sobject}`, body });
    }
    async update(id, body) {
        const sobject = 'Account';
        return this.performRequest({ method: 'PATCH', path: `/sobjects/${sobject}/${id}`, body });
    }
    async delete(id) {
        const sobject = 'Account';
        return this.performRequest({ method: 'DELETE', path: `/sobjects/${sobject}/${id}` });
    }
    // Salesforce-specific methods
    async query(soql) {
        return this.performRequest({ method: 'GET', path: '/query', params: { q: soql } });
    }
    async search(query) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query } });
    }
    async describe(sobject) {
        return this.performRequest({ method: 'GET', path: `/sobjects/${sobject}/describe` });
    }
    async getLeads(params) {
        return this.performRequest({
            method: 'GET',
            path: '/sobjects/Lead',
            params: { limit: params?.limit || '200', offset: params?.offset || '0' },
        });
    }
    async getOpportunities(params) {
        return this.performRequest({
            method: 'GET',
            path: '/sobjects/Opportunity',
            params: { limit: params?.limit || '200', offset: params?.offset || '0' },
        });
    }
    async getContacts(params) {
        return this.performRequest({
            method: 'GET',
            path: '/sobjects/Contact',
            params: { limit: params?.limit || '200', offset: params?.offset || '0' },
        });
    }
}
const hubspotConfig = {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'Inbound marketing and sales platform',
    authTypes: ['oauth2', 'api_key'],
    baseUrl: 'https://api.hubapi.com',
    rateLimit: { requests: 100, windowMs: 10000 },
    pagination: { type: 'cursor', maxPerPage: 100 },
};
registerAdapter(hubspotConfig);
export class HubSpotAdapter extends BaseAdapter {
    config = hubspotConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/crm/v3/objects/contacts',
            params: { limit: params?.limit || '100', after: params?.after || '' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/crm/v3/objects/contacts/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/crm/v3/objects/contacts', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PATCH', path: `/crm/v3/objects/contacts/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/crm/v3/objects/contacts/${id}` });
    }
    async getCompanies(params) {
        return this.performRequest({
            method: 'GET',
            path: '/crm/v3/objects/companies',
            params: { limit: params?.limit || '100' },
        });
    }
    async getDeals(params) {
        return this.performRequest({
            method: 'GET',
            path: '/crm/v3/objects/deals',
            params: { limit: params?.limit || '100' },
        });
    }
    async searchContacts(query) {
        return this.performRequest({
            method: 'POST',
            path: '/crm/v3/objects/contacts/search',
            body: { query, limit: 100 },
        });
    }
}
const pipedriveConfig = {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crm',
    description: 'Sales CRM and pipeline management',
    authTypes: ['oauth2', 'api_key'],
    baseUrl: 'https://api.pipedrive.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
};
registerAdapter(pipedriveConfig);
export class PipedriveAdapter extends BaseAdapter {
    config = pipedriveConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/persons',
            params: { limit: params?.limit || '500', start: params?.start || '0' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/persons/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/persons', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PUT', path: `/persons/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/persons/${id}` });
    }
    async getDeals(params) {
        return this.performRequest({
            method: 'GET',
            path: '/deals',
            params: { limit: params?.limit || '500' },
        });
    }
    async getOrganizations(params) {
        return this.performRequest({
            method: 'GET',
            path: '/organizations',
            params: { limit: params?.limit || '500' },
        });
    }
    async search(term) {
        return this.performRequest({
            method: 'GET',
            path: '/searchResults',
            params: { term, limit: '100' },
        });
    }
}
//# sourceMappingURL=index.js.map