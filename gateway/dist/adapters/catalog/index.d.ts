export interface IntegrationEntry {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    description: string;
    baseUrl: string;
    authType: 'oauth2' | 'oauth1' | 'api_key' | 'basic' | 'bearer' | 'custom';
    docsUrl: string;
    websiteUrl: string;
}
export declare const integrations: IntegrationEntry[];
//# sourceMappingURL=index.d.ts.map