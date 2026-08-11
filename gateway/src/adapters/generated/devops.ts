// Generated Adapters — devops (57 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY

import { AdapterConfig, AdapterResponse, AuthCredentials, registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';


// GitHub Adapter [151]
// Code hosting collaboration
const github_config: AdapterConfig = {
  id: 'github',
  name: 'GitHub',
  category: 'devops',
  description: 'Code hosting collaboration',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.github.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(github_config);

export class GithubAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = github_config;

  constructor(credentials: AuthCredentials) {
    super(github_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('github', GithubAdapter);


// GitLab Adapter [152]
// Complete DevOps platform
const gitlab_config: AdapterConfig = {
  id: 'gitlab',
  name: 'GitLab',
  category: 'devops',
  description: 'Complete DevOps platform',
  authTypes: ['oauth2'],
  baseUrl: 'https://gitlab.com/api/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(gitlab_config);

export class GitlabAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = gitlab_config;

  constructor(credentials: AuthCredentials) {
    super(gitlab_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('gitlab', GitlabAdapter);


// Bitbucket Adapter [153]
// Git code management
const bitbucket_config: AdapterConfig = {
  id: 'bitbucket',
  name: 'Bitbucket',
  category: 'devops',
  description: 'Git code management',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.bitbucket.org/2.0',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitbucket_config);

export class BitbucketAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitbucket_config;

  constructor(credentials: AuthCredentials) {
    super(bitbucket_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('bitbucket', BitbucketAdapter);


// Jira Adapter [154]
// Issue project tracking
const jira_config: AdapterConfig = {
  id: 'jira',
  name: 'Jira',
  category: 'devops',
  description: 'Issue project tracking',
  authTypes: ['oauth2'],
  baseUrl: 'https://your-domain.atlassian.net/rest/api/3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(jira_config);

export class JiraAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = jira_config;

  constructor(credentials: AuthCredentials) {
    super(jira_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('jira', JiraAdapter);


// Azure DevOps Adapter [155]
// Microsoft cloud DevOps
const azure_devops_config: AdapterConfig = {
  id: 'azure_devops',
  name: 'Azure DevOps',
  category: 'devops',
  description: 'Microsoft cloud DevOps',
  authTypes: ['oauth2'],
  baseUrl: 'https://dev.azure.com/{org}/_apis',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(azure_devops_config);

export class AzureDevopsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = azure_devops_config;

  constructor(credentials: AuthCredentials) {
    super(azure_devops_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('azure_devops', AzureDevopsAdapter);


// Jenkins Adapter [156]
// Open source automation server
const jenkins_config: AdapterConfig = {
  id: 'jenkins',
  name: 'Jenkins',
  category: 'devops',
  description: 'Open source automation server',
  authTypes: ['basic'],
  baseUrl: 'https://your-jenkins.com/api/json',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(jenkins_config);

export class JenkinsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = jenkins_config;

  constructor(credentials: AuthCredentials) {
    super(jenkins_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('jenkins', JenkinsAdapter);


// CircleCI Adapter [157]
// CI/CD platform
const circleci_config: AdapterConfig = {
  id: 'circleci',
  name: 'CircleCI',
  category: 'devops',
  description: 'CI/CD platform',
  authTypes: ['api_key'],
  baseUrl: 'https://circleci.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(circleci_config);

export class CircleciAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = circleci_config;

  constructor(credentials: AuthCredentials) {
    super(circleci_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('circleci', CircleciAdapter);


// Travis CI Adapter [158]
// Continuous integration
const travis_ci_config: AdapterConfig = {
  id: 'travis_ci',
  name: 'Travis CI',
  category: 'devops',
  description: 'Continuous integration',
  authTypes: ['api_key'],
  baseUrl: 'https://api.travis-ci.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(travis_ci_config);

export class TravisCiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = travis_ci_config;

  constructor(credentials: AuthCredentials) {
    super(travis_ci_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('travis_ci', TravisCiAdapter);


// GitHub Actions Adapter [159]
// Automation CI/CD by GitHub
const github_actions_config: AdapterConfig = {
  id: 'github_actions',
  name: 'GitHub Actions',
  category: 'devops',
  description: 'Automation CI/CD by GitHub',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.github.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(github_actions_config);

export class GithubActionsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = github_actions_config;

  constructor(credentials: AuthCredentials) {
    super(github_actions_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('github_actions', GithubActionsAdapter);


// Terraform Cloud Adapter [160]
// Infrastructure as code
const terraform_cloud_config: AdapterConfig = {
  id: 'terraform_cloud',
  name: 'Terraform Cloud',
  category: 'devops',
  description: 'Infrastructure as code',
  authTypes: ['api_key'],
  baseUrl: 'https://app.terraform.io/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(terraform_cloud_config);

export class TerraformCloudAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = terraform_cloud_config;

  constructor(credentials: AuthCredentials) {
    super(terraform_cloud_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('terraform_cloud', TerraformCloudAdapter);


// Pulumi Adapter [161]
// Modern infrastructure as code
const pulumi_config: AdapterConfig = {
  id: 'pulumi',
  name: 'Pulumi',
  category: 'devops',
  description: 'Modern infrastructure as code',
  authTypes: ['api_key'],
  baseUrl: 'https://api.pulumi.com/api/stacks',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(pulumi_config);

export class PulumiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = pulumi_config;

  constructor(credentials: AuthCredentials) {
    super(pulumi_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('pulumi', PulumiAdapter);


// Docker Hub Adapter [162]
// Container image repository
const docker_hub_config: AdapterConfig = {
  id: 'docker_hub',
  name: 'Docker Hub',
  category: 'devops',
  description: 'Container image repository',
  authTypes: ['basic'],
  baseUrl: 'https://hub.docker.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(docker_hub_config);

export class DockerHubAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = docker_hub_config;

  constructor(credentials: AuthCredentials) {
    super(docker_hub_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('docker_hub', DockerHubAdapter);


// Kubernetes API Adapter [163]
// Container orchestration
const kubernetes_config: AdapterConfig = {
  id: 'kubernetes',
  name: 'Kubernetes API',
  category: 'devops',
  description: 'Container orchestration',
  authTypes: ['bearer'],
  baseUrl: 'https://kubernetes.default.svc/api',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(kubernetes_config);

export class KubernetesAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = kubernetes_config;

  constructor(credentials: AuthCredentials) {
    super(kubernetes_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('kubernetes', KubernetesAdapter);


// Datadog Adapter [164]
// Cloud monitoring security
const datadog_config: AdapterConfig = {
  id: 'datadog',
  name: 'Datadog',
  category: 'devops',
  description: 'Cloud monitoring security',
  authTypes: ['api_key'],
  baseUrl: 'https://api.datadoghq.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(datadog_config);

export class DatadogAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = datadog_config;

  constructor(credentials: AuthCredentials) {
    super(datadog_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('datadog', DatadogAdapter);


// New Relic Adapter [165]
// Full-stack observability
const new_relic_config: AdapterConfig = {
  id: 'new_relic',
  name: 'New Relic',
  category: 'devops',
  description: 'Full-stack observability',
  authTypes: ['api_key'],
  baseUrl: 'https://api.newrelic.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(new_relic_config);

export class NewRelicAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = new_relic_config;

  constructor(credentials: AuthCredentials) {
    super(new_relic_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('new_relic', NewRelicAdapter);


// Grafana Adapter [166]
// Open source analytics
const grafana_config: AdapterConfig = {
  id: 'grafana',
  name: 'Grafana',
  category: 'devops',
  description: 'Open source analytics',
  authTypes: ['api_key'],
  baseUrl: 'https://your-grafana.com/api',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(grafana_config);

export class GrafanaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = grafana_config;

  constructor(credentials: AuthCredentials) {
    super(grafana_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('grafana', GrafanaAdapter);


// Prometheus Adapter [167]
// Open source monitoring
const prometheus_config: AdapterConfig = {
  id: 'prometheus',
  name: 'Prometheus',
  category: 'devops',
  description: 'Open source monitoring',
  authTypes: ['basic'],
  baseUrl: 'https://prometheus.example.com/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(prometheus_config);

export class PrometheusAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = prometheus_config;

  constructor(credentials: AuthCredentials) {
    super(prometheus_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('prometheus', PrometheusAdapter);


// PagerDuty Adapter [168]
// Incident management
const pagerduty_config: AdapterConfig = {
  id: 'pagerduty',
  name: 'PagerDuty',
  category: 'devops',
  description: 'Incident management',
  authTypes: ['api_key'],
  baseUrl: 'https://api.pagerduty.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(pagerduty_config);

export class PagerdutyAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = pagerduty_config;

  constructor(credentials: AuthCredentials) {
    super(pagerduty_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('pagerduty', PagerdutyAdapter);


// Opsgenie Adapter [169]
// Incident management Atlassian
const opsgenie_config: AdapterConfig = {
  id: 'opsgenie',
  name: 'Opsgenie',
  category: 'devops',
  description: 'Incident management Atlassian',
  authTypes: ['api_key'],
  baseUrl: 'https://api.opsgenie.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(opsgenie_config);

export class OpsgenieAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = opsgenie_config;

  constructor(credentials: AuthCredentials) {
    super(opsgenie_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('opsgenie', OpsgenieAdapter);


// Sentry Adapter [170]
// Error tracking performance
const sentry_config: AdapterConfig = {
  id: 'sentry',
  name: 'Sentry',
  category: 'devops',
  description: 'Error tracking performance',
  authTypes: ['oauth2'],
  baseUrl: 'https://sentry.io/api/0',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(sentry_config);

export class SentryAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = sentry_config;

  constructor(credentials: AuthCredentials) {
    super(sentry_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('sentry', SentryAdapter);


// Bugsnag Adapter [171]
// Error monitoring stability
const bugsnag_config: AdapterConfig = {
  id: 'bugsnag',
  name: 'Bugsnag',
  category: 'devops',
  description: 'Error monitoring stability',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bugsnag.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bugsnag_config);

export class BugsnagAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bugsnag_config;

  constructor(credentials: AuthCredentials) {
    super(bugsnag_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('bugsnag', BugsnagAdapter);


// Honeycomb Adapter [172]
// Observability debugging
const honeycomb_config: AdapterConfig = {
  id: 'honeycomb',
  name: 'Honeycomb',
  category: 'devops',
  description: 'Observability debugging',
  authTypes: ['api_key'],
  baseUrl: 'https://api.honeycomb.io/1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(honeycomb_config);

export class HoneycombAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = honeycomb_config;

  constructor(credentials: AuthCredentials) {
    super(honeycomb_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('honeycomb', HoneycombAdapter);


// Elastic Stack Adapter [173]
// Search analytics observability
const elastic_config: AdapterConfig = {
  id: 'elastic',
  name: 'Elastic Stack',
  category: 'devops',
  description: 'Search analytics observability',
  authTypes: ['basic'],
  baseUrl: 'https://your-cluster.com:9200',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(elastic_config);

export class ElasticAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = elastic_config;

  constructor(credentials: AuthCredentials) {
    super(elastic_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('elastic', ElasticAdapter);


// Splunk Adapter [174]
// Data platform monitoring
const splunk_config: AdapterConfig = {
  id: 'splunk',
  name: 'Splunk',
  category: 'devops',
  description: 'Data platform monitoring',
  authTypes: ['basic'],
  baseUrl: 'https://your-splunk.com:8089/services',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(splunk_config);

export class SplunkAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = splunk_config;

  constructor(credentials: AuthCredentials) {
    super(splunk_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('splunk', SplunkAdapter);


// Logz.io Adapter [175]
// Cloud logging observability
const logzio_config: AdapterConfig = {
  id: 'logzio',
  name: 'Logz.io',
  category: 'devops',
  description: 'Cloud logging observability',
  authTypes: ['api_key'],
  baseUrl: 'https://api.logz.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(logzio_config);

export class LogzioAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = logzio_config;

  constructor(credentials: AuthCredentials) {
    super(logzio_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('logzio', LogzioAdapter);


// Dynatrace Adapter [176]
// AI observability platform
const dynatrace_config: AdapterConfig = {
  id: 'dynatrace',
  name: 'Dynatrace',
  category: 'devops',
  description: 'AI observability platform',
  authTypes: ['api_key'],
  baseUrl: 'https://your-env.live.dynatrace.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(dynatrace_config);

export class DynatraceAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = dynatrace_config;

  constructor(credentials: AuthCredentials) {
    super(dynatrace_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('dynatrace', DynatraceAdapter);


// AppDynamics Adapter [177]
// Application perf monitoring
const appdynamics_config: AdapterConfig = {
  id: 'appdynamics',
  name: 'AppDynamics',
  category: 'devops',
  description: 'Application perf monitoring',
  authTypes: ['basic'],
  baseUrl: 'https://your-controller.appdynamics.com/controller/rest',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(appdynamics_config);

export class AppdynamicsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = appdynamics_config;

  constructor(credentials: AuthCredentials) {
    super(appdynamics_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('appdynamics', AppdynamicsAdapter);


// Honeybadger Adapter [178]
// Error uptime monitoring
const honeybadger_config: AdapterConfig = {
  id: 'honeybadger',
  name: 'Honeybadger',
  category: 'devops',
  description: 'Error uptime monitoring',
  authTypes: ['api_key'],
  baseUrl: 'https://api.honeybadger.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(honeybadger_config);

export class HoneybadgerAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = honeybadger_config;

  constructor(credentials: AuthCredentials) {
    super(honeybadger_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('honeybadger', HoneybadgerAdapter);


// Rollbar Adapter [179]
// Error tracking debugging
const rollbar_config: AdapterConfig = {
  id: 'rollbar',
  name: 'Rollbar',
  category: 'devops',
  description: 'Error tracking debugging',
  authTypes: ['api_key'],
  baseUrl: 'https://api.rollbar.com/api/1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(rollbar_config);

export class RollbarAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = rollbar_config;

  constructor(credentials: AuthCredentials) {
    super(rollbar_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('rollbar', RollbarAdapter);


// UptimeRobot Adapter [180]
// Website uptime monitoring
const uptimerobot_config: AdapterConfig = {
  id: 'uptimerobot',
  name: 'UptimeRobot',
  category: 'devops',
  description: 'Website uptime monitoring',
  authTypes: ['api_key'],
  baseUrl: 'https://api.uptimerobot.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(uptimerobot_config);

export class UptimerobotAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = uptimerobot_config;

  constructor(credentials: AuthCredentials) {
    super(uptimerobot_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('uptimerobot', UptimerobotAdapter);


// Pingdom Adapter [181]
// Website monitoring
const pingdom_config: AdapterConfig = {
  id: 'pingdom',
  name: 'Pingdom',
  category: 'devops',
  description: 'Website monitoring',
  authTypes: ['api_key'],
  baseUrl: 'https://api.pingdom.com/api/3.1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(pingdom_config);

export class PingdomAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = pingdom_config;

  constructor(credentials: AuthCredentials) {
    super(pingdom_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('pingdom', PingdomAdapter);


// Atlassian Statuspage Adapter [182]
// Incident communication
const statuspage_config: AdapterConfig = {
  id: 'statuspage',
  name: 'Atlassian Statuspage',
  category: 'devops',
  description: 'Incident communication',
  authTypes: ['api_key'],
  baseUrl: 'https://api.statuspage.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(statuspage_config);

export class StatuspageAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = statuspage_config;

  constructor(credentials: AuthCredentials) {
    super(statuspage_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('statuspage', StatuspageAdapter);


// Incident.io Adapter [183]
// Incident management
const incident_io_config: AdapterConfig = {
  id: 'incident_io',
  name: 'Incident.io',
  category: 'devops',
  description: 'Incident management',
  authTypes: ['api_key'],
  baseUrl: 'https://api.incident.io/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(incident_io_config);

export class IncidentIoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = incident_io_config;

  constructor(credentials: AuthCredentials) {
    super(incident_io_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('incident_io', IncidentIoAdapter);


// Rootly Adapter [184]
// Incident management response
const rootly_config: AdapterConfig = {
  id: 'rootly',
  name: 'Rootly',
  category: 'devops',
  description: 'Incident management response',
  authTypes: ['api_key'],
  baseUrl: 'https://api.rootly.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(rootly_config);

export class RootlyAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = rootly_config;

  constructor(credentials: AuthCredentials) {
    super(rootly_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('rootly', RootlyAdapter);


// FireHydrant Adapter [185]
// Incident management SRE
const firehydrant_config: AdapterConfig = {
  id: 'firehydrant',
  name: 'FireHydrant',
  category: 'devops',
  description: 'Incident management SRE',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.firehydrant.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(firehydrant_config);

export class FirehydrantAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = firehydrant_config;

  constructor(credentials: AuthCredentials) {
    super(firehydrant_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('firehydrant', FirehydrantAdapter);


// Coralogix Adapter [186]
// Log analytics observability
const coralogix_config: AdapterConfig = {
  id: 'coralogix',
  name: 'Coralogix',
  category: 'devops',
  description: 'Log analytics observability',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coralogix.com/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coralogix_config);

export class CoralogixAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coralogix_config;

  constructor(credentials: AuthCredentials) {
    super(coralogix_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('coralogix', CoralogixAdapter);


// Sysdig Adapter [187]
// Container security monitoring
const sysdig_config: AdapterConfig = {
  id: 'sysdig',
  name: 'Sysdig',
  category: 'devops',
  description: 'Container security monitoring',
  authTypes: ['api_key'],
  baseUrl: 'https://app.sysdigcloud.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(sysdig_config);

export class SysdigAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = sysdig_config;

  constructor(credentials: AuthCredentials) {
    super(sysdig_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('sysdig', SysdigAdapter);


// Posthog Adapter [188]
// Open source product analytics
const posthog_config: AdapterConfig = {
  id: 'posthog',
  name: 'Posthog',
  category: 'devops',
  description: 'Open source product analytics',
  authTypes: ['api_key'],
  baseUrl: 'https://app.posthog.com/api',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(posthog_config);

export class PosthogAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = posthog_config;

  constructor(credentials: AuthCredentials) {
    super(posthog_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('posthog', PosthogAdapter);


// AppsFlyer Adapter [189]
// Mobile attribution analytics
const appsflyer_config: AdapterConfig = {
  id: 'appsflyer',
  name: 'AppsFlyer',
  category: 'devops',
  description: 'Mobile attribution analytics',
  authTypes: ['basic'],
  baseUrl: 'https://api2.appsflyer.com/inappevent',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(appsflyer_config);

export class AppsflyerAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = appsflyer_config;

  constructor(credentials: AuthCredentials) {
    super(appsflyer_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('appsflyer', AppsflyerAdapter);


// Cloudflare Workers Adapter [190]
// Serverless edge computing
const cloudflare_workers_config: AdapterConfig = {
  id: 'cloudflare_workers',
  name: 'Cloudflare Workers',
  category: 'devops',
  description: 'Serverless edge computing',
  authTypes: ['api_key'],
  baseUrl: 'https://api.cloudflare.com/client/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(cloudflare_workers_config);

export class CloudflareWorkersAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = cloudflare_workers_config;

  constructor(credentials: AuthCredentials) {
    super(cloudflare_workers_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('cloudflare_workers', CloudflareWorkersAdapter);


// Vercel Adapter [191]
// Frontend cloud platform
const vercel_config: AdapterConfig = {
  id: 'vercel',
  name: 'Vercel',
  category: 'devops',
  description: 'Frontend cloud platform',
  authTypes: ['bearer'],
  baseUrl: 'https://api.vercel.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(vercel_config);

export class VercelAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = vercel_config;

  constructor(credentials: AuthCredentials) {
    super(vercel_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('vercel', VercelAdapter);


// Netlify Adapter [192]
// Web development platform
const netlify_config: AdapterConfig = {
  id: 'netlify',
  name: 'Netlify',
  category: 'devops',
  description: 'Web development platform',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.netlify.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(netlify_config);

export class NetlifyAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = netlify_config;

  constructor(credentials: AuthCredentials) {
    super(netlify_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('netlify', NetlifyAdapter);


// Heroku Adapter [193]
// Cloud platform as a service
const heroku_config: AdapterConfig = {
  id: 'heroku',
  name: 'Heroku',
  category: 'devops',
  description: 'Cloud platform as a service',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.heroku.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(heroku_config);

export class HerokuAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = heroku_config;

  constructor(credentials: AuthCredentials) {
    super(heroku_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('heroku', HerokuAdapter);


// Render Adapter [194]
// Cloud hosting platform
const render_config: AdapterConfig = {
  id: 'render',
  name: 'Render',
  category: 'devops',
  description: 'Cloud hosting platform',
  authTypes: ['api_key'],
  baseUrl: 'https://api.render.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(render_config);

export class RenderAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = render_config;

  constructor(credentials: AuthCredentials) {
    super(render_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('render', RenderAdapter);


// Fly.io Adapter [195]
// App hosting platform
const fly_io_config: AdapterConfig = {
  id: 'fly_io',
  name: 'Fly.io',
  category: 'devops',
  description: 'App hosting platform',
  authTypes: ['basic'],
  baseUrl: 'https://api.fly.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(fly_io_config);

export class FlyIoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = fly_io_config;

  constructor(credentials: AuthCredentials) {
    super(fly_io_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('fly_io', FlyIoAdapter);


// DigitalOcean Adapter [196]
// Cloud infrastructure
const digitalocean_config: AdapterConfig = {
  id: 'digitalocean',
  name: 'DigitalOcean',
  category: 'devops',
  description: 'Cloud infrastructure',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.digitalocean.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(digitalocean_config);

export class DigitaloceanAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = digitalocean_config;

  constructor(credentials: AuthCredentials) {
    super(digitalocean_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('digitalocean', DigitaloceanAdapter);


// Linode (Akamai) Adapter [197]
// Cloud hosting infrastructure
const linode_config: AdapterConfig = {
  id: 'linode',
  name: 'Linode (Akamai)',
  category: 'devops',
  description: 'Cloud hosting infrastructure',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.linode.com/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(linode_config);

export class LinodeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = linode_config;

  constructor(credentials: AuthCredentials) {
    super(linode_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('linode', LinodeAdapter);


// Vultr Adapter [198]
// Cloud hosting platform
const vultr_config: AdapterConfig = {
  id: 'vultr',
  name: 'Vultr',
  category: 'devops',
  description: 'Cloud hosting platform',
  authTypes: ['api_key'],
  baseUrl: 'https://api.vultr.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(vultr_config);

export class VultrAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = vultr_config;

  constructor(credentials: AuthCredentials) {
    super(vultr_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('vultr', VultrAdapter);


// Amazon EC2 Adapter [199]
// AWS compute cloud
const aws_ec2_config: AdapterConfig = {
  id: 'aws_ec2',
  name: 'Amazon EC2',
  category: 'devops',
  description: 'AWS compute cloud',
  authTypes: ['api_key'],
  baseUrl: 'https://ec2.us-east-1.amazonaws.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(aws_ec2_config);

export class AwsEc2Adapter extends GenericRestAdapter {
  readonly config: AdapterConfig = aws_ec2_config;

  constructor(credentials: AuthCredentials) {
    super(aws_ec2_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('aws_ec2', AwsEc2Adapter);


// Google Compute Engine Adapter [200]
// Google Cloud compute
const gcp_compute_config: AdapterConfig = {
  id: 'gcp_compute',
  name: 'Google Compute Engine',
  category: 'devops',
  description: 'Google Cloud compute',
  authTypes: ['oauth2'],
  baseUrl: 'https://compute.googleapis.com/compute/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(gcp_compute_config);

export class GcpComputeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = gcp_compute_config;

  constructor(credentials: AuthCredentials) {
    super(gcp_compute_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('gcp_compute', GcpComputeAdapter);


// Azure Compute Adapter [201]
// Microsoft cloud compute
const azure_compute_config: AdapterConfig = {
  id: 'azure_compute',
  name: 'Azure Compute',
  category: 'devops',
  description: 'Microsoft cloud compute',
  authTypes: ['oauth2'],
  baseUrl: 'https://management.azure.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(azure_compute_config);

export class AzureComputeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = azure_compute_config;

  constructor(credentials: AuthCredentials) {
    super(azure_compute_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('azure_compute', AzureComputeAdapter);


// Cloudflare Adapter [202]
// CDN and security platform
const cloudflare_config: AdapterConfig = {
  id: 'cloudflare',
  name: 'Cloudflare',
  category: 'devops',
  description: 'CDN and security platform',
  authTypes: ['api_key'],
  baseUrl: 'https://api.cloudflare.com/client/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(cloudflare_config);

export class CloudflareAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = cloudflare_config;

  constructor(credentials: AuthCredentials) {
    super(cloudflare_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('cloudflare', CloudflareAdapter);


// Fastly Adapter [203]
// Edge cloud platform
const fastly_config: AdapterConfig = {
  id: 'fastly',
  name: 'Fastly',
  category: 'devops',
  description: 'Edge cloud platform',
  authTypes: ['api_key'],
  baseUrl: 'https://api.fastly.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(fastly_config);

export class FastlyAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = fastly_config;

  constructor(credentials: AuthCredentials) {
    super(fastly_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('fastly', FastlyAdapter);


// Akamai Adapter [204]
// CDN and cloud security
const akamai_config: AdapterConfig = {
  id: 'akamai',
  name: 'Akamai',
  category: 'devops',
  description: 'CDN and cloud security',
  authTypes: ['basic'],
  baseUrl: 'https://{host}/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(akamai_config);

export class AkamaiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = akamai_config;

  constructor(credentials: AuthCredentials) {
    super(akamai_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('akamai', AkamaiAdapter);


// AWS Lambda Adapter [205]
// Serverless compute
const aws_lambda_config: AdapterConfig = {
  id: 'aws_lambda',
  name: 'AWS Lambda',
  category: 'devops',
  description: 'Serverless compute',
  authTypes: ['api_key'],
  baseUrl: 'https://lambda.us-east-1.amazonaws.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(aws_lambda_config);

export class AwsLambdaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = aws_lambda_config;

  constructor(credentials: AuthCredentials) {
    super(aws_lambda_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('aws_lambda', AwsLambdaAdapter);


// Google Cloud Functions Adapter [206]
// Serverless functions
const google_functions_config: AdapterConfig = {
  id: 'google_functions',
  name: 'Google Cloud Functions',
  category: 'devops',
  description: 'Serverless functions',
  authTypes: ['oauth2'],
  baseUrl: 'https://cloudfunctions.googleapis.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(google_functions_config);

export class GoogleFunctionsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = google_functions_config;

  constructor(credentials: AuthCredentials) {
    super(google_functions_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('google_functions', GoogleFunctionsAdapter);


// Azure Functions Adapter [207]
// Serverless compute
const azure_functions_config: AdapterConfig = {
  id: 'azure_functions',
  name: 'Azure Functions',
  category: 'devops',
  description: 'Serverless compute',
  authTypes: ['oauth2'],
  baseUrl: 'https://management.azure.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(azure_functions_config);

export class AzureFunctionsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = azure_functions_config;

  constructor(credentials: AuthCredentials) {
    super(azure_functions_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('azure_functions', AzureFunctionsAdapter);

