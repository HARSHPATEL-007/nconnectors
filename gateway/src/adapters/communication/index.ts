// Communication Production Connectors
import { BaseAdapter, AdapterResponse, registerAdapter, AdapterConfig, AuthCredentials } from '../core/index.js';

const slackConfig: AdapterConfig = {
  id: 'slack',
  name: 'Slack',
  category: 'communication',
  description: 'Team messaging and collaboration',
  authTypes: ['oauth2', 'bearer'],
  baseUrl: 'https://slack.com/api',
  rateLimit: { requests: 100, windowMs: 60000 },
};

registerAdapter(slackConfig);

export class SlackAdapter extends BaseAdapter {
  readonly config = slackConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.request({
      method: 'GET',
      path: '/conversations.list',
      params: { limit: params?.limit || '200', cursor: params?.cursor || '' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: '/conversations.info', params: { channel: id } });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.request({ method: 'POST', path: '/conversations.create', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.request({ method: 'POST', path: '/conversations.rename', body: { channel: id, ...(body as object) } });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.request({ method: 'POST', path: '/conversations.archive', body: { channel: id } });
  }

  async postMessage(channel: string, text: string, blocks?: unknown[]): Promise<AdapterResponse> {
    return this.request({
      method: 'POST',
      path: '/chat.postMessage',
      body: { channel, text, blocks },
    });
  }

  async getUsers(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.request({
      method: 'GET',
      path: '/users.list',
      params: { limit: params?.limit || '200', cursor: params?.cursor || '' },
    });
  }

  async getUserInfo(userId: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: '/users.info', params: { user: userId } });
  }
}

const teamsConfig: AdapterConfig = {
  id: 'microsoft_teams',
  name: 'Microsoft Teams',
  category: 'communication',
  description: 'Microsoft 365 team collaboration',
  authTypes: ['oauth2'],
  baseUrl: 'https://graph.microsoft.com/v1.0',
  rateLimit: { requests: 100, windowMs: 60000 },
};

registerAdapter(teamsConfig);

export class MicrosoftTeamsAdapter extends BaseAdapter {
  readonly config = teamsConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.request({
      method: 'GET',
      path: '/teams',
      params: { $top: params?.limit || '999', $skip: params?.skip || '0' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: `/teams/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.request({ method: 'POST', path: '/teams', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.request({ method: 'PATCH', path: `/teams/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.request({ method: 'DELETE', path: `/teams/${id}` });
  }

  async getChannels(teamId: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: `/teams/${teamId}/channels` });
  }

  async sendMessage(teamId: string, channelId: string, content: string): Promise<AdapterResponse> {
    return this.request({
      method: 'POST',
      path: `/teams/${teamId}/channels/${channelId}/messages`,
      body: { body: { content, contentType: 'text' } },
    });
  }

  async getMessages(teamId: string, channelId: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: `/teams/${teamId}/channels/${channelId}/messages` });
  }
}

const discordConfig: AdapterConfig = {
  id: 'discord',
  name: 'Discord',
  category: 'communication',
  description: 'Community chat and voice platform',
  authTypes: ['bearer'],
  baseUrl: 'https://discord.com/api/v10',
  rateLimit: { requests: 50, windowMs: 1000 },
};

registerAdapter(discordConfig);

export class DiscordAdapter extends BaseAdapter {
  readonly config = discordConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.request({
      method: 'GET',
      path: '/guilds',
      params: { limit: params?.limit || '200', after: params?.after || '0' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: `/guilds/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.request({ method: 'POST', path: '/guilds', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.request({ method: 'PATCH', path: `/guilds/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.request({ method: 'DELETE', path: `/guilds/${id}` });
  }

  async getChannels(guildId: string): Promise<AdapterResponse> {
    return this.request({ method: 'GET', path: `/guilds/${guildId}/channels` });
  }

  async sendMessage(channelId: string, content: string, embeds?: unknown[]): Promise<AdapterResponse> {
    return this.request({
      method: 'POST',
      path: `/channels/${channelId}/messages`,
      body: { content, embeds },
    });
  }

  async getMessages(channelId: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.request({
      method: 'GET',
      path: `/channels/${channelId}/messages`,
      params: { limit: params?.limit || '50', before: params?.before || '' },
    });
  }
}
