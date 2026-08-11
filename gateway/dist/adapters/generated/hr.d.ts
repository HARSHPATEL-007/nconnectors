import { AdapterConfig, AdapterResponse, AuthCredentials } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
export declare class HrRecruiting1Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrOnboarding2Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPerformance3Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPayroll4Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrBenefits5Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrTimeTracking6Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrEngagement7Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrLearning8Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrWorkforce9Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrAnalytics10Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrRecruiting11Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrOnboarding12Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPerformance13Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPayroll14Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrBenefits15Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrTimeTracking16Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrEngagement17Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrLearning18Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrWorkforce19Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrAnalytics20Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrRecruiting21Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrOnboarding22Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPerformance23Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPayroll24Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrBenefits25Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrTimeTracking26Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrEngagement27Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrLearning28Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrWorkforce29Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrAnalytics30Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrRecruiting31Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrOnboarding32Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPerformance33Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPayroll34Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrBenefits35Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrTimeTracking36Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrEngagement37Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrLearning38Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrWorkforce39Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrAnalytics40Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrRecruiting41Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrOnboarding42Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPerformance43Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPayroll44Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrBenefits45Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrTimeTracking46Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrEngagement47Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrLearning48Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrWorkforce49Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrAnalytics50Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrRecruiting51Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrOnboarding52Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPerformance53Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrPayroll54Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrBenefits55Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrTimeTracking56Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrEngagement57Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrLearning58Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrWorkforce59Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HrAnalytics60Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=hr.d.ts.map