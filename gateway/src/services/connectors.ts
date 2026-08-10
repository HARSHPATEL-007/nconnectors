import { logger } from '../infrastructure/logger.js';

interface ConnectorResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

abstract class BaseConnector {
  protected accessToken: string;
  protected refreshToken: string;
  protected baseUrl: string;

  constructor(accessToken: string, refreshToken: string, baseUrl: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.baseUrl = baseUrl;
  }

  protected async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<ConnectorResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        ...options,
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json() as any;

      if (!response.ok) {
        return {
          success: false,
          error: data?.error?.message || data?.message || `HTTP ${response.status}`,
          statusCode: response.status,
        };
      }

      return { success: true, data, statusCode: response.status };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Request failed';
      logger.error({ err, path, baseUrl: this.baseUrl }, 'Connector request failed');
      return { success: false, error: message, statusCode: 0 };
    }
  }
}

export class SlackConnector extends BaseConnector {
  constructor(accessToken: string, refreshToken: string = '') {
    super(accessToken, refreshToken, 'https://slack.com/api');
  }

  async postMessage(channel: string, text: string): Promise<ConnectorResponse> {
    return this.request('/chat.postMessage', {
      method: 'POST',
      body: JSON.stringify({ channel, text }),
    });
  }

  async listChannels(): Promise<ConnectorResponse> {
    return this.request('/conversations.types?types=public_channel,private_channel');
  }

  async getUserInfo(userId: string): Promise<ConnectorResponse> {
    return this.request(`/users.info?user=${userId}`);
  }
}

export class GitHubConnector extends BaseConnector {
  constructor(accessToken: string, refreshToken: string = '') {
    super(accessToken, refreshToken, 'https://api.github.com');
  }

  async listPullRequests(owner: string, repo: string, state: string = 'open'): Promise<ConnectorResponse> {
    return this.request(`/repos/${owner}/${repo}/pulls?state=${state}`);
  }

  async createIssue(owner: string, repo: string, title: string, body: string = ''): Promise<ConnectorResponse> {
    return this.request(`/repos/${owner}/${repo}/issues`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
    });
  }

  async listRepositories(): Promise<ConnectorResponse> {
    return this.request('/user/repos?sort=updated&per_page=30');
  }

  async getRepository(owner: string, repo: string): Promise<ConnectorResponse> {
    return this.request(`/repos/${owner}/${repo}`);
  }
}

export class GoogleDriveConnector extends BaseConnector {
  constructor(accessToken: string, refreshToken: string = '') {
    super(accessToken, refreshToken, 'https://www.googleapis.com/drive/v3');
  }

  async listFiles(query?: string, pageSize: number = 50): Promise<ConnectorResponse> {
    const params = new URLSearchParams({
      pageSize: pageSize.toString(),
      fields: 'nextPageToken,files(id,name,mimeType,size,modifiedTime)',
    });
    if (query) params.set('q', query);
    return this.request(`/files?${params.toString()}`);
  }

  async getFile(fileId: string): Promise<ConnectorResponse> {
    return this.request(`/files/${fileId}?fields=id,name,mimeType,size,modifiedTime,webContentLink`);
  }

  async downloadFile(fileId: string): Promise<ConnectorResponse> {
    return this.request(`/files/${fileId}?alt=media`);
  }

  async uploadFile(name: string, content: string, mimeType: string = 'text/plain'): Promise<ConnectorResponse> {
    const metadata = { name, mimeType };
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', new Blob([content], { type: mimeType }));

    return this.request('/files?uploadType=multipart', {
      method: 'POST',
      body: form,
      headers: {},
    });
  }
}

export class StripeConnector extends BaseConnector {
  constructor(accessToken: string, refreshToken: string = '') {
    super(accessToken, refreshToken, 'https://api.stripe.com/v1');
  }

  async createCharge(amount: number, currency: string = 'usd', customerId?: string): Promise<ConnectorResponse> {
    const params = new URLSearchParams({
      amount: amount.toString(),
      currency,
    });
    if (customerId) params.set('customer', customerId);

    return this.request('/charges', {
      method: 'POST',
      body: params.toString(),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  async listCharges(limit: number = 10): Promise<ConnectorResponse> {
    return this.request(`/charges?limit=${limit}`);
  }
}

export function createConnector(provider: string, accessToken: string, refreshToken: string = ''): BaseConnector {
  switch (provider) {
    case 'slack': return new SlackConnector(accessToken, refreshToken);
    case 'github': return new GitHubConnector(accessToken, refreshToken);
    case 'google_drive': return new GoogleDriveConnector(accessToken, refreshToken);
    case 'stripe': return new StripeConnector(accessToken, refreshToken);
    default: throw new Error(`No connector for provider: ${provider}`);
  }
}
