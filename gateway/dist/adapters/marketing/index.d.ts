import { BaseAdapter, AdapterResponse, AdapterConfig, AuthCredentials } from '../core/index.js';
export declare class MailchimpAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getCampaigns(params?: Record<string, string>): Promise<AdapterResponse>;
    sendCampaign(campaignId: string): Promise<AdapterResponse>;
    getMembers(listId: string): Promise<AdapterResponse>;
    addMember(listId: string, email: string, status?: string): Promise<AdapterResponse>;
}
export declare class KlaviyoAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getLists(): Promise<AdapterResponse>;
    getCampaigns(): Promise<AdapterResponse>;
    sendCampaign(campaignId: string): Promise<AdapterResponse>;
    addToList(listId: string, email: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=index.d.ts.map