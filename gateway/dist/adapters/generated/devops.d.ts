import { AdapterConfig, AdapterResponse, AuthCredentials } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
export declare class GithubAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GitlabAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitbucketAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class JiraAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AzureDevopsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class JenkinsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CircleciAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TravisCiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GithubActionsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TerraformCloudAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PulumiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class DockerHubAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class KubernetesAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class DatadogAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class NewRelicAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GrafanaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PrometheusAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PagerdutyAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class OpsgenieAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SentryAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BugsnagAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HoneycombAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ElasticAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SplunkAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class LogzioAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class DynatraceAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AppdynamicsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HoneybadgerAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RollbarAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class UptimerobotAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PingdomAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class StatuspageAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class IncidentIoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RootlyAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FirehydrantAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CoralogixAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SysdigAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PosthogAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AppsflyerAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CloudflareWorkersAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class VercelAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class NetlifyAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HerokuAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RenderAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FlyIoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class DigitaloceanAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class LinodeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class VultrAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AwsEc2Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GcpComputeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AzureComputeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CloudflareAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FastlyAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AkamaiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AwsLambdaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GoogleFunctionsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AzureFunctionsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=devops.d.ts.map