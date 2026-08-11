import { BaseAdapter, AdapterResponse, AdapterConfig, AuthCredentials } from '../core/index.js';
export declare class S3Adapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    uploadFile(bucket: string, key: string, content: string): Promise<AdapterResponse>;
    downloadFile(bucket: string, key: string): Promise<AdapterResponse>;
    listBuckets(): Promise<AdapterResponse>;
}
export declare class GoogleDriveAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    downloadFile(fileId: string): Promise<AdapterResponse>;
    uploadFile(name: string, content: string, mimeType: string): Promise<AdapterResponse>;
    search(query: string): Promise<AdapterResponse>;
}
export declare class DropboxAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    upload(path: string, content: string): Promise<AdapterResponse>;
    download(path: string): Promise<AdapterResponse>;
    search(query: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=index.d.ts.map