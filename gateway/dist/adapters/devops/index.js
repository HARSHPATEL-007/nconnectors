// DevOps Production Connectors
import { BaseAdapter, registerAdapter } from '../core/index.js';
const githubConfig = {
    id: 'github',
    name: 'GitHub',
    category: 'devops',
    description: 'Code repository and CI/CD platform',
    authTypes: ['oauth2', 'bearer', 'api_key'],
    baseUrl: 'https://api.github.com',
    rateLimit: { requests: 5000, windowMs: 3600000 },
    pagination: { type: 'cursor', maxPerPage: 100 },
};
registerAdapter(githubConfig);
export class GitHubAdapter extends BaseAdapter {
    config = githubConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/user/repos',
            params: { per_page: params?.per_page || '100', page: params?.page || '1' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/repositories/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/user/repos', body });
    }
    async update(id, body) {
        const [owner, repo] = id.split('/');
        return this.performRequest({ method: 'PATCH', path: `/repos/${owner}/${repo}`, body });
    }
    async delete(id) {
        const [owner, repo] = id.split('/');
        return this.performRequest({ method: 'DELETE', path: `/repos/${owner}/${repo}` });
    }
    async listPullRequests(owner, repo, params) {
        return this.performRequest({
            method: 'GET',
            path: `/repos/${owner}/${repo}/pulls`,
            params: { state: params?.state || 'open', per_page: params?.per_page || '30' },
        });
    }
    async createIssue(owner, repo, body) {
        return this.performRequest({ method: 'POST', path: `/repos/${owner}/${repo}/issues`, body });
    }
    async listIssues(owner, repo, params) {
        return this.performRequest({
            method: 'GET',
            path: `/repos/${owner}/${repo}/issues`,
            params: { state: params?.state || 'open', per_page: params?.per_page || '30' },
        });
    }
    async listWorkflowRuns(owner, repo) {
        return this.performRequest({ method: 'GET', path: `/repos/${owner}/${repo}/actions/runs` });
    }
    async mergePullRequest(owner, repo, pullNumber) {
        return this.performRequest({
            method: 'PUT',
            path: `/repos/${owner}/${repo}/pulls/${pullNumber}/merge`,
            body: { merge_method: 'merge' },
        });
    }
}
const gitlabConfig = {
    id: 'gitlab',
    name: 'GitLab',
    category: 'devops',
    description: 'DevOps platform and code repository',
    authTypes: ['oauth2', 'bearer'],
    baseUrl: 'https://gitlab.com/api/v4',
    rateLimit: { requests: 600, windowMs: 60000 },
    pagination: { type: 'page', maxPerPage: 100 },
};
registerAdapter(gitlabConfig);
export class GitLabAdapter extends BaseAdapter {
    config = gitlabConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/projects',
            params: { per_page: params?.per_page || '100', page: params?.page || '1' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/projects/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/projects', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PUT', path: `/projects/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/projects/${id}` });
    }
    async listMergeRequests(projectId, params) {
        return this.performRequest({
            method: 'GET',
            path: `/projects/${projectId}/merge_requests`,
            params: { state: params?.state || 'opened', per_page: params?.per_page || '30' },
        });
    }
    async listIssues(projectId, params) {
        return this.performRequest({
            method: 'GET',
            path: `/projects/${projectId}/issues`,
            params: { state: params?.state || 'opened', per_page: params?.per_page || '30' },
        });
    }
    async listPipelines(projectId) {
        return this.performRequest({ method: 'GET', path: `/projects/${projectId}/pipelines` });
    }
}
const jiraConfig = {
    id: 'jira',
    name: 'Jira',
    category: 'devops',
    description: 'Project tracking and agile management',
    authTypes: ['oauth2', 'basic', 'bearer'],
    baseUrl: 'https://your-domain.atlassian.net/rest/api/3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 50 },
};
registerAdapter(jiraConfig);
export class JiraAdapter extends BaseAdapter {
    config = jiraConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/search',
            params: { jql: params?.jql || 'order by created DESC', maxResults: params?.maxResults || '50', startAt: params?.startAt || '0' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/issue/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/issue', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PUT', path: `/issue/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/issue/${id}` });
    }
    async getProjects() {
        return this.performRequest({ method: 'GET', path: '/project' });
    }
    async getBoards() {
        return this.performRequest({ method: 'GET', path: '/board' });
    }
    async getSprints(boardId) {
        return this.performRequest({ method: 'GET', path: `/board/${boardId}/sprint` });
    }
    async transitionIssue(issueId, transitionId) {
        return this.performRequest({
            method: 'POST',
            path: `/issue/${issueId}/transitions`,
            body: { transition: { id: transitionId } },
        });
    }
    async addComment(issueId, body) {
        return this.performRequest({
            method: 'POST',
            path: `/issue/${issueId}/comment`,
            body: { body },
        });
    }
}
//# sourceMappingURL=index.js.map