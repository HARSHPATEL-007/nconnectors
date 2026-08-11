import { BaseAdapter, AdapterResponse, AdapterConfig, AuthCredentials } from '../core/index.js';
export declare class SalesforceAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    query(soql: string): Promise<AdapterResponse>;
    search(query: string): Promise<AdapterResponse>;
    describe(sobject: string): Promise<AdapterResponse>;
    getLeads(params?: Record<string, string>): Promise<AdapterResponse>;
    getOpportunities(params?: Record<string, string>): Promise<AdapterResponse>;
    getContacts(params?: Record<string, string>): Promise<AdapterResponse>;
}
export declare class HubSpotAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getCompanies(params?: Record<string, string>): Promise<AdapterResponse>;
    getDeals(params?: Record<string, string>): Promise<AdapterResponse>;
    searchContacts(query: string): Promise<AdapterResponse>;
}
export declare class PipedriveAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getDeals(params?: Record<string, string>): Promise<AdapterResponse>;
    getOrganizations(params?: Record<string, string>): Promise<AdapterResponse>;
    search(term: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=index.d.ts.map