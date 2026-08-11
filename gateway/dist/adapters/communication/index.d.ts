import { BaseAdapter, AdapterResponse, AdapterConfig, AuthCredentials } from '../core/index.js';
export declare class SlackAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    postMessage(channel: string, text: string, blocks?: unknown[]): Promise<AdapterResponse>;
    getUsers(params?: Record<string, string>): Promise<AdapterResponse>;
    getUserInfo(userId: string): Promise<AdapterResponse>;
}
export declare class MicrosoftTeamsAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getChannels(teamId: string): Promise<AdapterResponse>;
    sendMessage(teamId: string, channelId: string, content: string): Promise<AdapterResponse>;
    getMessages(teamId: string, channelId: string): Promise<AdapterResponse>;
}
export declare class DiscordAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getChannels(guildId: string): Promise<AdapterResponse>;
    sendMessage(channelId: string, content: string, embeds?: unknown[]): Promise<AdapterResponse>;
    getMessages(channelId: string, params?: Record<string, string>): Promise<AdapterResponse>;
}
//# sourceMappingURL=index.d.ts.map