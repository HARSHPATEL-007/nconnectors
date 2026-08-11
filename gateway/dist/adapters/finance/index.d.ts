import { BaseAdapter, AdapterResponse, AdapterConfig, AuthCredentials } from '../core/index.js';
export declare class StripeAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    createCharge(amount: number, currency: string, customerId?: string): Promise<AdapterResponse>;
    listCharges(params?: Record<string, string>): Promise<AdapterResponse>;
    createRefund(chargeId: string): Promise<AdapterResponse>;
    listSubscriptions(params?: Record<string, string>): Promise<AdapterResponse>;
}
export declare class PayPalAdapter extends BaseAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    createOrder(amount: string, currency: string): Promise<AdapterResponse>;
    captureOrder(orderId: string): Promise<AdapterResponse>;
    listTransactions(params?: Record<string, string>): Promise<AdapterResponse>;
}
//# sourceMappingURL=index.d.ts.map