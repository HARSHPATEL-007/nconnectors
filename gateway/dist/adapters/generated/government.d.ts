import { AdapterConfig, AdapterResponse, AuthCredentials } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
export declare class GovernmentCivic1Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPermits2Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTax3Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPublicSafety4Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransportation5Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentHealth6Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEducation7Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEnvironment8Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentProcurement9Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransparency10Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentCivic11Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPermits12Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTax13Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPublicSafety14Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransportation15Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentHealth16Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEducation17Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEnvironment18Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentProcurement19Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransparency20Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentCivic21Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPermits22Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTax23Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPublicSafety24Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransportation25Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentHealth26Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEducation27Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEnvironment28Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentProcurement29Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransparency30Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentCivic31Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPermits32Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTax33Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPublicSafety34Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransportation35Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentHealth36Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEducation37Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEnvironment38Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentProcurement39Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransparency40Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentCivic41Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPermits42Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTax43Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPublicSafety44Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransportation45Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentHealth46Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEducation47Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEnvironment48Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentProcurement49Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransparency50Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentCivic51Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPermits52Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTax53Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentPublicSafety54Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransportation55Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentHealth56Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEducation57Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentEnvironment58Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentProcurement59Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GovernmentTransparency60Adapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=government.d.ts.map