import { AdapterConfig, AdapterResponse, AuthCredentials } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
export declare class StripeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PaypalAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BraintreeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AdyenAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AuthorizeNetAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SquareFinanceAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WorldpayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CheckoutComAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RazorpayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PaytmAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PhonepeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GooglePayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ApplePayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SamsungPayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class KlarnaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AffirmAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AfterpayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SezzleAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PayoneerAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WiseAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RevolutAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class XeroAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class QuickbooksAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FreshbooksAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WaveAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SageAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FreeagentAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SageIntacctAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class NetsuiteAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class QuickfileAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ExactOnlineAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ClearbooksAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MollieAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GoCardlessAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PlaidAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TinkAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SaltedgeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class YodleeAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FinicityAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class DwollaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MarqetaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class UnitCoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AlloyAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class PersonaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class JumioAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class OnfidoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TruliooAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ComplyAdvantageAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ChainalysisAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class EllipticAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FeedzaiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BinanceAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CoinbaseAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class KrakenAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GeminiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CryptoComAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BlockchainComAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitfinexAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitstampAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class OkxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class HuobiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class KucoinAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BybitAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GateIoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitgetAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class LunoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class NdaxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitsoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MercadoBitcoinAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FoxbitAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RipioAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class SatoshiTangoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class LetobitAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BuenbitAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CryptomktAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitBnsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WazirxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CoinDcxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ZebpayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class GiottusAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class ColodaxAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitbnsProAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class UnocoinAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BidgetAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CoinremitterAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class NowpaymentsAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CoingateAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BitpayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CoinbaseCommerceAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class FlexaAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class AlchemyPayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class MoonpayAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class TransakAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class RampNetworkAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class WyreAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class XapoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class BlockfiAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class CelsiusAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
export declare class NexoAdapter extends GenericRestAdapter {
    readonly config: AdapterConfig;
    constructor(credentials: AuthCredentials);
    search(query: string, params?: Record<string, string>): Promise<AdapterResponse>;
    getById(id: string): Promise<AdapterResponse>;
    createResource(body: unknown): Promise<AdapterResponse>;
    updateResource(id: string, body: unknown): Promise<AdapterResponse>;
    deleteResource(id: string): Promise<AdapterResponse>;
}
//# sourceMappingURL=finance.d.ts.map