interface ConnectorResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode: number;
}
declare abstract class BaseConnector {
    protected accessToken: string;
    protected refreshToken: string;
    protected baseUrl: string;
    constructor(accessToken: string, refreshToken: string, baseUrl: string);
    protected request<T>(path: string, options?: RequestInit): Promise<ConnectorResponse<T>>;
}
export declare class SlackConnector extends BaseConnector {
    constructor(accessToken: string, refreshToken?: string);
    postMessage(channel: string, text: string): Promise<ConnectorResponse>;
    listChannels(): Promise<ConnectorResponse>;
    getUserInfo(userId: string): Promise<ConnectorResponse>;
}
export declare class GitHubConnector extends BaseConnector {
    constructor(accessToken: string, refreshToken?: string);
    listPullRequests(owner: string, repo: string, state?: string): Promise<ConnectorResponse>;
    createIssue(owner: string, repo: string, title: string, body?: string): Promise<ConnectorResponse>;
    listRepositories(): Promise<ConnectorResponse>;
    getRepository(owner: string, repo: string): Promise<ConnectorResponse>;
}
export declare class GoogleDriveConnector extends BaseConnector {
    constructor(accessToken: string, refreshToken?: string);
    listFiles(query?: string, pageSize?: number): Promise<ConnectorResponse>;
    getFile(fileId: string): Promise<ConnectorResponse>;
    downloadFile(fileId: string): Promise<ConnectorResponse>;
    uploadFile(name: string, content: string, mimeType?: string): Promise<ConnectorResponse>;
}
export declare class StripeConnector extends BaseConnector {
    constructor(accessToken: string, refreshToken?: string);
    createCharge(amount: number, currency?: string, customerId?: string): Promise<ConnectorResponse>;
    listCharges(limit?: number): Promise<ConnectorResponse>;
}
export declare function createConnector(provider: string, accessToken: string, refreshToken?: string): BaseConnector;
export {};
//# sourceMappingURL=connectors.d.ts.map