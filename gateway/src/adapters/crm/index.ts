// CRM Production Connectors
import { BaseAdapter, AdapterResponse, registerAdapter, AdapterConfig, AuthCredentials } from '../core/index.js';

const salesforceConfig: AdapterConfig = {
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
  readonly config = salesforceConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    const sobject = params?.sobject || 'Account';
    const limit = params?.limit || '200';
    const offset = params?.offset || '0';
    return this.performRequest({
      method: 'GET',
      path: `/sobjects/${sobject}`,
      params: { limit, offset },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    const sobject = 'Account';
    return this.performRequest({ method: 'GET', path: `/sobjects/${sobject}/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    const sobject = 'Account';
    return this.performRequest({ method: 'POST', path: `/sobjects/${sobject}`, body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    const sobject = 'Account';
    return this.performRequest({ method: 'PATCH', path: `/sobjects/${sobject}/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    const sobject = 'Account';
    return this.performRequest({ method: 'DELETE', path: `/sobjects/${sobject}/${id}` });
  }

  // Salesforce-specific methods
  async query(soql: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/query', params: { q: soql } });
  }

  async search(query: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query } });
  }

  async describe(sobject: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/sobjects/${sobject}/describe` });
  }

  async getLeads(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/sobjects/Lead',
      params: { limit: params?.limit || '200', offset: params?.offset || '0' },
    });
  }

  async getOpportunities(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/sobjects/Opportunity',
      params: { limit: params?.limit || '200', offset: params?.offset || '0' },
    });
  }

  async getContacts(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/sobjects/Contact',
      params: { limit: params?.limit || '200', offset: params?.offset || '0' },
    });
  }
}

const hubspotConfig: AdapterConfig = {
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
  readonly config = hubspotConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/crm/v3/objects/contacts',
      params: { limit: params?.limit || '100', after: params?.after || '' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/crm/v3/objects/contacts/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/crm/v3/objects/contacts', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PATCH', path: `/crm/v3/objects/contacts/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/crm/v3/objects/contacts/${id}` });
  }

  async getCompanies(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/crm/v3/objects/companies',
      params: { limit: params?.limit || '100' },
    });
  }

  async getDeals(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/crm/v3/objects/deals',
      params: { limit: params?.limit || '100' },
    });
  }

  async searchContacts(query: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: '/crm/v3/objects/contacts/search',
      body: { query, limit: 100 },
    });
  }
}

const pipedriveConfig: AdapterConfig = {
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
  readonly config = pipedriveConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/persons',
      params: { limit: params?.limit || '500', start: params?.start || '0' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/persons/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/persons', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/persons/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/persons/${id}` });
  }

  async getDeals(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/deals',
      params: { limit: params?.limit || '500' },
    });
  }

  async getOrganizations(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/organizations',
      params: { limit: params?.limit || '500' },
    });
  }

  async search(term: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/searchResults',
      params: { term, limit: '100' },
    });
  }
}
