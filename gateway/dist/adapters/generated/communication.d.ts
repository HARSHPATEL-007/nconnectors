import { AdapterConfig, AdapterResponse, AuthCredentials } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
export declare class GmailAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class OutlookAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SlackAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class DiscordAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TelegramAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WhatsappBusinessAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MicrosoftTeamsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ZoomAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GoogleMeetAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WebexAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TwilioAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class VonageAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SendgridCommAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MailgunCommAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PostmarkCommAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AmazonSesCommAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RingcentralAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GoogleChatAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FiretextAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MessenteAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SinchAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PlivoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MessagebirdAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ClickatellAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TelnyxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BandwidthAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AmazonSnsCommAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AmazonPinpointCommAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=communication.d.ts.map