// DevOps Production Connectors
import { BaseAdapter, AdapterResponse, registerAdapter, AdapterConfig, AuthCredentials } from '../core/index.js';

const githubConfig: AdapterConfig = {
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
  readonly config = githubConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/user/repos',
      params: { per_page: params?.per_page || '100', page: params?.page || '1' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/repositories/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/user/repos', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    const [owner, repo] = id.split('/');
    return this.performRequest({ method: 'PATCH', path: `/repos/${owner}/${repo}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    const [owner, repo] = id.split('/');
    return this.performRequest({ method: 'DELETE', path: `/repos/${owner}/${repo}` });
  }

  async listPullRequests(owner: string, repo: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: `/repos/${owner}/${repo}/pulls`,
      params: { state: params?.state || 'open', per_page: params?.per_page || '30' },
    });
  }

  async createIssue(owner: string, repo: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: `/repos/${owner}/${repo}/issues`, body });
  }

  async listIssues(owner: string, repo: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: `/repos/${owner}/${repo}/issues`,
      params: { state: params?.state || 'open', per_page: params?.per_page || '30' },
    });
  }

  async listWorkflowRuns(owner: string, repo: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/repos/${owner}/${repo}/actions/runs` });
  }

  async mergePullRequest(owner: string, repo: string, pullNumber: number): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'PUT',
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/merge`,
      body: { merge_method: 'merge' },
    });
  }
}

const gitlabConfig: AdapterConfig = {
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
  readonly config = gitlabConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/projects',
      params: { per_page: params?.per_page || '100', page: params?.page || '1' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/projects/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/projects', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/projects/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/projects/${id}` });
  }

  async listMergeRequests(projectId: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: `/projects/${projectId}/merge_requests`,
      params: { state: params?.state || 'opened', per_page: params?.per_page || '30' },
    });
  }

  async listIssues(projectId: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: `/projects/${projectId}/issues`,
      params: { state: params?.state || 'opened', per_page: params?.per_page || '30' },
    });
  }

  async listPipelines(projectId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/projects/${projectId}/pipelines` });
  }
}

const jiraConfig: AdapterConfig = {
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
  readonly config = jiraConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/search',
      params: { jql: params?.jql || 'order by created DESC', maxResults: params?.maxResults || '50', startAt: params?.startAt || '0' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/issue/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/issue', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/issue/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/issue/${id}` });
  }

  async getProjects(): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/project' });
  }

  async getBoards(): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/board' });
  }

  async getSprints(boardId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/board/${boardId}/sprint` });
  }

  async transitionIssue(issueId: string, transitionId: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: `/issue/${issueId}/transitions`,
      body: { transition: { id: transitionId } },
    });
  }

  async addComment(issueId: string, body: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: `/issue/${issueId}/comment`,
      body: { body },
    });
  }
}
