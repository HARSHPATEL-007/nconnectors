// Communication Production Connectors
import { BaseAdapter, registerAdapter } from '../core/index.js';
const slackConfig = {
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
    config = slackConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/conversations.list',
            params: { limit: params?.limit || '200', cursor: params?.cursor || '' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: '/conversations.info', params: { channel: id } });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/conversations.create', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'POST', path: '/conversations.rename', body: { channel: id, ...body } });
    }
    async delete(id) {
        return this.performRequest({ method: 'POST', path: '/conversations.archive', body: { channel: id } });
    }
    async postMessage(channel, text, blocks) {
        return this.performRequest({
            method: 'POST',
            path: '/chat.postMessage',
            body: { channel, text, blocks },
        });
    }
    async getUsers(params) {
        return this.performRequest({
            method: 'GET',
            path: '/users.list',
            params: { limit: params?.limit || '200', cursor: params?.cursor || '' },
        });
    }
    async getUserInfo(userId) {
        return this.performRequest({ method: 'GET', path: '/users.info', params: { user: userId } });
    }
}
const teamsConfig = {
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
    config = teamsConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/teams',
            params: { $top: params?.limit || '999', $skip: params?.skip || '0' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/teams/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/teams', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PATCH', path: `/teams/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/teams/${id}` });
    }
    async getChannels(teamId) {
        return this.performRequest({ method: 'GET', path: `/teams/${teamId}/channels` });
    }
    async sendMessage(teamId, channelId, content) {
        return this.performRequest({
            method: 'POST',
            path: `/teams/${teamId}/channels/${channelId}/messages`,
            body: { body: { content, contentType: 'text' } },
        });
    }
    async getMessages(teamId, channelId) {
        return this.performRequest({ method: 'GET', path: `/teams/${teamId}/channels/${channelId}/messages` });
    }
}
const discordConfig = {
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
    config = discordConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/guilds',
            params: { limit: params?.limit || '200', after: params?.after || '0' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/guilds/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/guilds', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PATCH', path: `/guilds/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/guilds/${id}` });
    }
    async getChannels(guildId) {
        return this.performRequest({ method: 'GET', path: `/guilds/${guildId}/channels` });
    }
    async sendMessage(channelId, content, embeds) {
        return this.performRequest({
            method: 'POST',
            path: `/channels/${channelId}/messages`,
            body: { content, embeds },
        });
    }
    async getMessages(channelId, params) {
        return this.performRequest({
            method: 'GET',
            path: `/channels/${channelId}/messages`,
            params: { limit: params?.limit || '50', before: params?.before || '' },
        });
    }
}
//# sourceMappingURL=index.js.map