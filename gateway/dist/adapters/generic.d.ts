import { BaseAdapter, AdapterConfig, AdapterResponse, AuthCredentials } from './core/index.js';
import { IntegrationEntry } from './catalog/index.js';
export declare class GenericRestAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(config: AdapterConfig, credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
}
export declare class AdapterFactory {
    private credentials;
    setCredentials(integrationId: string, credentials: AuthCredentials): void;
    create(integrationId: string): GenericRestAdapter | null;
    createFromEntry(entry: IntegrationEntry, credentials: AuthCredentials): GenericRestAdapter;
    getAvailableIntegrations(): IntegrationEntry[];
    getIntegrationsByCategory(category: string): IntegrationEntry[];
    search(query: string): IntegrationEntry[];
}
export declare const adapterFactory: AdapterFactory;
//# sourceMappingURL=generic.d.ts.map