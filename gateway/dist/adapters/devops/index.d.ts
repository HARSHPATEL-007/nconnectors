import { BaseAdapter, AdapterResponse, AdapterConfig, AuthCredentials } from '../core/index.js';
export declare class GitHubAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    listPullRequests(owner: string, repo: string, params?: Record<string, string>): Promise<AdapterResponse>;
    createIssue(owner: string, repo: string, body: unknown): Promise<AdapterResponse>;
    listIssues(owner: string, repo: string, params?: Record<string, string>): Promise<AdapterResponse>;
    listWorkflowRuns(owner: string, repo: string): Promise<AdapterResponse>;
    mergePullRequest(owner: string, repo: string, pullNumber: number): Promise<AdapterResponse>;
}
export declare class GitLabAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    listMergeRequests(projectId: string, params?: Record<string, string>): Promise<AdapterResponse>;
    listIssues(projectId: string, params?: Record<string, string>): Promise<AdapterResponse>;
    listPipelines(projectId: string): Promise<AdapterResponse>;
}
export declare class JiraAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    getProjects(): Promise<AdapterResponse>;
    getBoards(): Promise<AdapterResponse>;
    getSprints(boardId: string): Promise<AdapterResponse>;
    transitionIssue(issueId: string, transitionId: string): Promise<AdapterResponse>;
    addComment(issueId: string, body: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=index.d.ts.map