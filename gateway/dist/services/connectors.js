import { logger } from '../infrastructure/logger.js';
class BaseConnector {
    accessToken;
    refreshToken;
    baseUrl;
    constructor(accessToken, refreshToken, baseUrl) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.baseUrl = baseUrl;
    }
    async request(path, options = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${path}`, {
                ...options,
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });
            const data = await response.json();
            if (!response.ok) {
                return {
                    success: false,
                    error: data?.error?.message || data?.message || `HTTP ${response.status}`,
                    statusCode: response.status,
                };
            }
            return { success: true, data, statusCode: response.status };
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Request failed';
            logger.error({ err, path, baseUrl: this.baseUrl }, 'Connector request failed');
            return { success: false, error: message, statusCode: 0 };
        }
    }
}
export class SlackConnector extends BaseConnector {
    constructor(accessToken, refreshToken = '') {
        super(accessToken, refreshToken, 'https://slack.com/api');
    }
    async postMessage(channel, text) {
        return this.request('/chat.postMessage', {
            method: 'POST',
            body: JSON.stringify({ channel, text }),
        });
    }
    async listChannels() {
        return this.request('/conversations.types?types=public_channel,private_channel');
    }
    async getUserInfo(userId) {
        return this.request(`/users.info?user=${userId}`);
    }
}
export class GitHubConnector extends BaseConnector {
    constructor(accessToken, refreshToken = '') {
        super(accessToken, refreshToken, 'https://api.github.com');
    }
    async listPullRequests(owner, repo, state = 'open') {
        return this.request(`/repos/${owner}/${repo}/pulls?state=${state}`);
    }
    async createIssue(owner, repo, title, body = '') {
        return this.request(`/repos/${owner}/${repo}/issues`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
        });
    }
    async listRepositories() {
        return this.request('/user/repos?sort=updated&per_page=30');
    }
    async getRepository(owner, repo) {
        return this.request(`/repos/${owner}/${repo}`);
    }
}
export class GoogleDriveConnector extends BaseConnector {
    constructor(accessToken, refreshToken = '') {
        super(accessToken, refreshToken, 'https://www.googleapis.com/drive/v3');
    }
    async listFiles(query, pageSize = 50) {
        const params = new URLSearchParams({
            pageSize: pageSize.toString(),
            fields: 'nextPageToken,files(id,name,mimeType,size,modifiedTime)',
        });
        if (query)
            params.set('q', query);
        return this.request(`/files?${params.toString()}`);
    }
    async getFile(fileId) {
        return this.request(`/files/${fileId}?fields=id,name,mimeType,size,modifiedTime,webContentLink`);
    }
    async downloadFile(fileId) {
        return this.request(`/files/${fileId}?alt=media`);
    }
    async uploadFile(name, content, mimeType = 'text/plain') {
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
    constructor(accessToken, refreshToken = '') {
        super(accessToken, refreshToken, 'https://api.stripe.com/v1');
    }
    async createCharge(amount, currency = 'usd', customerId) {
        const params = new URLSearchParams({
            amount: amount.toString(),
            currency,
        });
        if (customerId)
            params.set('customer', customerId);
        return this.request('/charges', {
            method: 'POST',
            body: params.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    }
    async listCharges(limit = 10) {
        return this.request(`/charges?limit=${limit}`);
    }
}
export function createConnector(provider, accessToken, refreshToken = '') {
    switch (provider) {
        case 'slack': return new SlackConnector(accessToken, refreshToken);
        case 'github': return new GitHubConnector(accessToken, refreshToken);
        case 'google_drive': return new GoogleDriveConnector(accessToken, refreshToken);
        case 'stripe': return new StripeConnector(accessToken, refreshToken);
        default: throw new Error(`No connector for provider: ${provider}`);
    }
}
//# sourceMappingURL=connectors.js.map