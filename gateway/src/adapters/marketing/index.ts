// Marketing Production Connectors
import { BaseAdapter, AdapterResponse, registerAdapter, AdapterConfig, AuthCredentials } from '../core/index.js';

const mailchimpConfig: AdapterConfig = {
  id: 'mailchimp',
  name: 'Mailchimp',
  category: 'marketing',
  description: 'Email marketing automation',
  authTypes: ['oauth2', 'api_key'],
  baseUrl: 'https://<dc>.api.mailchimp.com/3.0',
  rateLimit: { requests: 10, windowMs: 1000 },
};

registerAdapter(mailchimpConfig);

export class MailchimpAdapter extends BaseAdapter {
  readonly config = mailchimpConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/lists',
      params: { count: params?.count || '100', offset: params?.offset || '0' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/lists/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/lists', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PATCH', path: `/lists/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/lists/${id}` });
  }

  async getCampaigns(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/campaigns',
      params: { count: params?.count || '100' },
    });
  }

  async sendCampaign(campaignId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: `/campaigns/${campaignId}/actions/send` });
  }

  async getMembers(listId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/lists/${listId}/members` });
  }

  async addMember(listId: string, email: string, status: string = 'subscribed'): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: `/lists/${listId}/members`,
      body: { email_address: email, status },
    });
  }
}

const klaviyoConfig: AdapterConfig = {
  id: 'klaviyo',
  name: 'Klaviyo',
  category: 'marketing',
  description: 'E-commerce email & SMS marketing',
  authTypes: ['api_key'],
  baseUrl: 'https://a.klaviyo.com/api',
  rateLimit: { requests: 150, windowMs: 1000 },
};

registerAdapter(klaviyoConfig);

export class KlaviyoAdapter extends BaseAdapter {
  readonly config = klaviyoConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/profiles',
      params: { page_size: params?.page_size || '100', page_cursor: params?.page_cursor || '' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/profiles/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/profiles', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PATCH', path: `/profiles/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/profiles/${id}` });
  }

  async getLists(): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/lists' });
  }

  async getCampaigns(): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/campaigns' });
  }

  async sendCampaign(campaignId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: `/campaigns/${campaignId}/send` });
  }

  async addToList(listId: string, email: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: `/lists/${listId}/relationships/profiles`,
      body: { data: [{ type: 'profile', id: email }] },
    });
  }
}
