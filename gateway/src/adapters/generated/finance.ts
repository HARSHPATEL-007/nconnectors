// Generated Adapters — finance (100 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY

import { AdapterConfig, AdapterResponse, AuthCredentials, registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';


// Stripe Adapter [208]
// Online payment processing
const stripe_config: AdapterConfig = {
  id: 'stripe',
  name: 'Stripe',
  category: 'finance',
  description: 'Online payment processing',
  authTypes: ['basic'],
  baseUrl: 'https://api.stripe.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(stripe_config);

export class StripeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = stripe_config;

  constructor(credentials: AuthCredentials) {
    super(stripe_config, credentials);
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

registry.register('stripe', StripeAdapter);


// PayPal Adapter [209]
// Online payment system
const paypal_config: AdapterConfig = {
  id: 'paypal',
  name: 'PayPal',
  category: 'finance',
  description: 'Online payment system',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.paypal.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(paypal_config);

export class PaypalAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = paypal_config;

  constructor(credentials: AuthCredentials) {
    super(paypal_config, credentials);
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

registry.register('paypal', PaypalAdapter);


// Braintree Adapter [210]
// Payment gateway by PayPal
const braintree_config: AdapterConfig = {
  id: 'braintree',
  name: 'Braintree',
  category: 'finance',
  description: 'Payment gateway by PayPal',
  authTypes: ['api_key'],
  baseUrl: 'https://payments.sandbox.braintree-api.com/merchants',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(braintree_config);

export class BraintreeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = braintree_config;

  constructor(credentials: AuthCredentials) {
    super(braintree_config, credentials);
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

registry.register('braintree', BraintreeAdapter);


// Adyen Adapter [211]
// Global payment platform
const adyen_config: AdapterConfig = {
  id: 'adyen',
  name: 'Adyen',
  category: 'finance',
  description: 'Global payment platform',
  authTypes: ['api_key'],
  baseUrl: 'https://checkout-test.adyen.com/v70',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(adyen_config);

export class AdyenAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = adyen_config;

  constructor(credentials: AuthCredentials) {
    super(adyen_config, credentials);
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

registry.register('adyen', AdyenAdapter);


// Authorize.Net Adapter [212]
// Payment gateway services
const authorize_net_config: AdapterConfig = {
  id: 'authorize_net',
  name: 'Authorize.Net',
  category: 'finance',
  description: 'Payment gateway services',
  authTypes: ['api_key'],
  baseUrl: 'https://api.authorize.net/xml/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(authorize_net_config);

export class AuthorizeNetAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = authorize_net_config;

  constructor(credentials: AuthCredentials) {
    super(authorize_net_config, credentials);
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

registry.register('authorize_net', AuthorizeNetAdapter);


// Square Adapter [213]
// Payment POS platform
const square_finance_config: AdapterConfig = {
  id: 'square_finance',
  name: 'Square',
  category: 'finance',
  description: 'Payment POS platform',
  authTypes: ['oauth2'],
  baseUrl: 'https://connect.squareup.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(square_finance_config);

export class SquareFinanceAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = square_finance_config;

  constructor(credentials: AuthCredentials) {
    super(square_finance_config, credentials);
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

registry.register('square_finance', SquareFinanceAdapter);


// Worldpay Adapter [214]
// Global payment processing
const worldpay_config: AdapterConfig = {
  id: 'worldpay',
  name: 'Worldpay',
  category: 'finance',
  description: 'Global payment processing',
  authTypes: ['basic'],
  baseUrl: 'https://api.worldpay.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(worldpay_config);

export class WorldpayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = worldpay_config;

  constructor(credentials: AuthCredentials) {
    super(worldpay_config, credentials);
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

registry.register('worldpay', WorldpayAdapter);


// Checkout.com Adapter [215]
// Global payment solutions
const checkout_com_config: AdapterConfig = {
  id: 'checkout_com',
  name: 'Checkout.com',
  category: 'finance',
  description: 'Global payment solutions',
  authTypes: ['api_key'],
  baseUrl: 'https://api.checkout.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(checkout_com_config);

export class CheckoutComAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = checkout_com_config;

  constructor(credentials: AuthCredentials) {
    super(checkout_com_config, credentials);
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

registry.register('checkout_com', CheckoutComAdapter);


// Razorpay Adapter [216]
// Payment gateway for India
const razorpay_config: AdapterConfig = {
  id: 'razorpay',
  name: 'Razorpay',
  category: 'finance',
  description: 'Payment gateway for India',
  authTypes: ['basic'],
  baseUrl: 'https://api.razorpay.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(razorpay_config);

export class RazorpayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = razorpay_config;

  constructor(credentials: AuthCredentials) {
    super(razorpay_config, credentials);
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

registry.register('razorpay', RazorpayAdapter);


// Paytm Adapter [217]
// Indian digital payments
const paytm_config: AdapterConfig = {
  id: 'paytm',
  name: 'Paytm',
  category: 'finance',
  description: 'Indian digital payments',
  authTypes: ['api_key'],
  baseUrl: 'https://securegw.paytm.in',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(paytm_config);

export class PaytmAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = paytm_config;

  constructor(credentials: AuthCredentials) {
    super(paytm_config, credentials);
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

registry.register('paytm', PaytmAdapter);


// PhonePe Adapter [218]
// Indian digital payments
const phonepe_config: AdapterConfig = {
  id: 'phonepe',
  name: 'PhonePe',
  category: 'finance',
  description: 'Indian digital payments',
  authTypes: ['api_key'],
  baseUrl: 'https://api.phonepe.com/apis/hermes',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(phonepe_config);

export class PhonepeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = phonepe_config;

  constructor(credentials: AuthCredentials) {
    super(phonepe_config, credentials);
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

registry.register('phonepe', PhonepeAdapter);


// Google Pay Adapter [219]
// Digital wallet payments
const google_pay_config: AdapterConfig = {
  id: 'google_pay',
  name: 'Google Pay',
  category: 'finance',
  description: 'Digital wallet payments',
  authTypes: ['oauth2'],
  baseUrl: 'https://wallet.googleapis.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(google_pay_config);

export class GooglePayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = google_pay_config;

  constructor(credentials: AuthCredentials) {
    super(google_pay_config, credentials);
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

registry.register('google_pay', GooglePayAdapter);


// Apple Pay Adapter [220]
// Mobile payment by Apple
const apple_pay_config: AdapterConfig = {
  id: 'apple_pay',
  name: 'Apple Pay',
  category: 'finance',
  description: 'Mobile payment by Apple',
  authTypes: ['custom'],
  baseUrl: 'https://api.apple-pay.apple.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(apple_pay_config);

export class ApplePayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = apple_pay_config;

  constructor(credentials: AuthCredentials) {
    super(apple_pay_config, credentials);
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

registry.register('apple_pay', ApplePayAdapter);


// Samsung Pay Adapter [221]
// Mobile payment by Samsung
const samsung_pay_config: AdapterConfig = {
  id: 'samsung_pay',
  name: 'Samsung Pay',
  category: 'finance',
  description: 'Mobile payment by Samsung',
  authTypes: ['api_key'],
  baseUrl: 'https://api.samsungpay.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(samsung_pay_config);

export class SamsungPayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = samsung_pay_config;

  constructor(credentials: AuthCredentials) {
    super(samsung_pay_config, credentials);
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

registry.register('samsung_pay', SamsungPayAdapter);


// Klarna Adapter [222]
// Buy now pay later
const klarna_config: AdapterConfig = {
  id: 'klarna',
  name: 'Klarna',
  category: 'finance',
  description: 'Buy now pay later',
  authTypes: ['basic'],
  baseUrl: 'https://api.klarna.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(klarna_config);

export class KlarnaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = klarna_config;

  constructor(credentials: AuthCredentials) {
    super(klarna_config, credentials);
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

registry.register('klarna', KlarnaAdapter);


// Affirm Adapter [223]
// Buy now pay later financing
const affirm_config: AdapterConfig = {
  id: 'affirm',
  name: 'Affirm',
  category: 'finance',
  description: 'Buy now pay later financing',
  authTypes: ['basic'],
  baseUrl: 'https://api.affirm.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(affirm_config);

export class AffirmAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = affirm_config;

  constructor(credentials: AuthCredentials) {
    super(affirm_config, credentials);
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

registry.register('affirm', AffirmAdapter);


// Afterpay Adapter [224]
// Buy now pay later
const afterpay_config: AdapterConfig = {
  id: 'afterpay',
  name: 'Afterpay',
  category: 'finance',
  description: 'Buy now pay later',
  authTypes: ['api_key'],
  baseUrl: 'https://api.us.afterpay.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(afterpay_config);

export class AfterpayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = afterpay_config;

  constructor(credentials: AuthCredentials) {
    super(afterpay_config, credentials);
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

registry.register('afterpay', AfterpayAdapter);


// Sezzle Adapter [225]
// Buy now pay later e-commerce
const sezzle_config: AdapterConfig = {
  id: 'sezzle',
  name: 'Sezzle',
  category: 'finance',
  description: 'Buy now pay later e-commerce',
  authTypes: ['api_key'],
  baseUrl: 'https://gateway.sezzle.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(sezzle_config);

export class SezzleAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = sezzle_config;

  constructor(credentials: AuthCredentials) {
    super(sezzle_config, credentials);
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

registry.register('sezzle', SezzleAdapter);


// Payoneer Adapter [226]
// Cross-border payments
const payoneer_config: AdapterConfig = {
  id: 'payoneer',
  name: 'Payoneer',
  category: 'finance',
  description: 'Cross-border payments',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.payoneer.com/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(payoneer_config);

export class PayoneerAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = payoneer_config;

  constructor(credentials: AuthCredentials) {
    super(payoneer_config, credentials);
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

registry.register('payoneer', PayoneerAdapter);


// Wise Adapter [227]
// International money transfers
const wise_config: AdapterConfig = {
  id: 'wise',
  name: 'Wise',
  category: 'finance',
  description: 'International money transfers',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.transferwise.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(wise_config);

export class WiseAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = wise_config;

  constructor(credentials: AuthCredentials) {
    super(wise_config, credentials);
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

registry.register('wise', WiseAdapter);


// Revolut Adapter [228]
// Digital banking payments
const revolut_config: AdapterConfig = {
  id: 'revolut',
  name: 'Revolut',
  category: 'finance',
  description: 'Digital banking payments',
  authTypes: ['oauth2'],
  baseUrl: 'https://b2b.revolut.com/api/1.0',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(revolut_config);

export class RevolutAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = revolut_config;

  constructor(credentials: AuthCredentials) {
    super(revolut_config, credentials);
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

registry.register('revolut', RevolutAdapter);


// Xero Adapter [229]
// Cloud accounting software
const xero_config: AdapterConfig = {
  id: 'xero',
  name: 'Xero',
  category: 'finance',
  description: 'Cloud accounting software',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.xero.com/api.xro/2.0',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(xero_config);

export class XeroAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = xero_config;

  constructor(credentials: AuthCredentials) {
    super(xero_config, credentials);
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

registry.register('xero', XeroAdapter);


// QuickBooks Adapter [230]
// Accounting by Intuit
const quickbooks_config: AdapterConfig = {
  id: 'quickbooks',
  name: 'QuickBooks',
  category: 'finance',
  description: 'Accounting by Intuit',
  authTypes: ['oauth2'],
  baseUrl: 'https://quickbooks.api.intuit.com/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(quickbooks_config);

export class QuickbooksAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = quickbooks_config;

  constructor(credentials: AuthCredentials) {
    super(quickbooks_config, credentials);
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

registry.register('quickbooks', QuickbooksAdapter);


// FreshBooks Adapter [231]
// Cloud accounting small business
const freshbooks_config: AdapterConfig = {
  id: 'freshbooks',
  name: 'FreshBooks',
  category: 'finance',
  description: 'Cloud accounting small business',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.freshbooks.com/accounting/1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(freshbooks_config);

export class FreshbooksAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = freshbooks_config;

  constructor(credentials: AuthCredentials) {
    super(freshbooks_config, credentials);
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

registry.register('freshbooks', FreshbooksAdapter);


// Wave Adapter [232]
// Free small business accounting
const wave_config: AdapterConfig = {
  id: 'wave',
  name: 'Wave',
  category: 'finance',
  description: 'Free small business accounting',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.waveapps.com/businesses',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(wave_config);

export class WaveAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = wave_config;

  constructor(credentials: AuthCredentials) {
    super(wave_config, credentials);
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

registry.register('wave', WaveAdapter);


// Sage Adapter [233]
// Accounting business management
const sage_config: AdapterConfig = {
  id: 'sage',
  name: 'Sage',
  category: 'finance',
  description: 'Accounting business management',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.accounting.sage.com/v3.1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(sage_config);

export class SageAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = sage_config;

  constructor(credentials: AuthCredentials) {
    super(sage_config, credentials);
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

registry.register('sage', SageAdapter);


// FreeAgent Adapter [234]
// Cloud accounting freelancers
const freeagent_config: AdapterConfig = {
  id: 'freeagent',
  name: 'FreeAgent',
  category: 'finance',
  description: 'Cloud accounting freelancers',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.freeagent.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(freeagent_config);

export class FreeagentAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = freeagent_config;

  constructor(credentials: AuthCredentials) {
    super(freeagent_config, credentials);
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

registry.register('freeagent', FreeagentAdapter);


// Sage Intacct Adapter [235]
// Cloud ERP financial mgmt
const sage_intacct_config: AdapterConfig = {
  id: 'sage_intacct',
  name: 'Sage Intacct',
  category: 'finance',
  description: 'Cloud ERP financial mgmt',
  authTypes: ['custom'],
  baseUrl: 'https://api.intacct.com/xmlgw.jsp',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(sage_intacct_config);

export class SageIntacctAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = sage_intacct_config;

  constructor(credentials: AuthCredentials) {
    super(sage_intacct_config, credentials);
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

registry.register('sage_intacct', SageIntacctAdapter);


// Oracle NetSuite Adapter [236]
// Cloud ERP financials
const netsuite_config: AdapterConfig = {
  id: 'netsuite',
  name: 'Oracle NetSuite',
  category: 'finance',
  description: 'Cloud ERP financials',
  authTypes: ['oauth2'],
  baseUrl: 'https://{account}.suitetalk.api.netsuite.com/services/rest/record/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(netsuite_config);

export class NetsuiteAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = netsuite_config;

  constructor(credentials: AuthCredentials) {
    super(netsuite_config, credentials);
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

registry.register('netsuite', NetsuiteAdapter);


// QuickFile Adapter [237]
// Free UK accounting
const quickfile_config: AdapterConfig = {
  id: 'quickfile',
  name: 'QuickFile',
  category: 'finance',
  description: 'Free UK accounting',
  authTypes: ['api_key'],
  baseUrl: 'https://api.quickfile.co.uk/1.0',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(quickfile_config);

export class QuickfileAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = quickfile_config;

  constructor(credentials: AuthCredentials) {
    super(quickfile_config, credentials);
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

registry.register('quickfile', QuickfileAdapter);


// Exact Online Adapter [238]
// Cloud accounting SMBs
const exact_online_config: AdapterConfig = {
  id: 'exact_online',
  name: 'Exact Online',
  category: 'finance',
  description: 'Cloud accounting SMBs',
  authTypes: ['oauth2'],
  baseUrl: 'https://start.exactonline.nl/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(exact_online_config);

export class ExactOnlineAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = exact_online_config;

  constructor(credentials: AuthCredentials) {
    super(exact_online_config, credentials);
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

registry.register('exact_online', ExactOnlineAdapter);


// ClearBooks Adapter [239]
// Cloud accounting UK
const clearbooks_config: AdapterConfig = {
  id: 'clearbooks',
  name: 'ClearBooks',
  category: 'finance',
  description: 'Cloud accounting UK',
  authTypes: ['api_key'],
  baseUrl: 'https://api.clearbooks.co.uk/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(clearbooks_config);

export class ClearbooksAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = clearbooks_config;

  constructor(credentials: AuthCredentials) {
    super(clearbooks_config, credentials);
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

registry.register('clearbooks', ClearbooksAdapter);


// Mollie Adapter [240]
// European payment provider
const mollie_config: AdapterConfig = {
  id: 'mollie',
  name: 'Mollie',
  category: 'finance',
  description: 'European payment provider',
  authTypes: ['basic'],
  baseUrl: 'https://api.mollie.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(mollie_config);

export class MollieAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = mollie_config;

  constructor(credentials: AuthCredentials) {
    super(mollie_config, credentials);
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

registry.register('mollie', MollieAdapter);


// GoCardless Adapter [241]
// Direct debit bank payments
const go_cardless_config: AdapterConfig = {
  id: 'go_cardless',
  name: 'GoCardless',
  category: 'finance',
  description: 'Direct debit bank payments',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.gocardless.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(go_cardless_config);

export class GoCardlessAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = go_cardless_config;

  constructor(credentials: AuthCredentials) {
    super(go_cardless_config, credentials);
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

registry.register('go_cardless', GoCardlessAdapter);


// Plaid Adapter [242]
// Financial data connectivity
const plaid_config: AdapterConfig = {
  id: 'plaid',
  name: 'Plaid',
  category: 'finance',
  description: 'Financial data connectivity',
  authTypes: ['api_key'],
  baseUrl: 'https://production.plaid.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(plaid_config);

export class PlaidAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = plaid_config;

  constructor(credentials: AuthCredentials) {
    super(plaid_config, credentials);
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

registry.register('plaid', PlaidAdapter);


// Tink Adapter [243]
// Open banking platform
const tink_config: AdapterConfig = {
  id: 'tink',
  name: 'Tink',
  category: 'finance',
  description: 'Open banking platform',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.tink.com/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(tink_config);

export class TinkAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = tink_config;

  constructor(credentials: AuthCredentials) {
    super(tink_config, credentials);
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

registry.register('tink', TinkAdapter);


// Salt Edge Adapter [244]
// Open banking PSD2 API
const saltedge_config: AdapterConfig = {
  id: 'saltedge',
  name: 'Salt Edge',
  category: 'finance',
  description: 'Open banking PSD2 API',
  authTypes: ['api_key'],
  baseUrl: 'https://www.saltedge.com/api/v5',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(saltedge_config);

export class SaltedgeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = saltedge_config;

  constructor(credentials: AuthCredentials) {
    super(saltedge_config, credentials);
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

registry.register('saltedge', SaltedgeAdapter);


// Envestnet Yodlee Adapter [245]
// Financial data aggregation
const yodlee_config: AdapterConfig = {
  id: 'yodlee',
  name: 'Envestnet Yodlee',
  category: 'finance',
  description: 'Financial data aggregation',
  authTypes: ['oauth2'],
  baseUrl: 'https://developer.api.yodlee.com/ysl',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(yodlee_config);

export class YodleeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = yodlee_config;

  constructor(credentials: AuthCredentials) {
    super(yodlee_config, credentials);
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

registry.register('yodlee', YodleeAdapter);


// Finicity Adapter [246]
// Financial data decisioning
const finicity_config: AdapterConfig = {
  id: 'finicity',
  name: 'Finicity',
  category: 'finance',
  description: 'Financial data decisioning',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.finicity.com/aggregation/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(finicity_config);

export class FinicityAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = finicity_config;

  constructor(credentials: AuthCredentials) {
    super(finicity_config, credentials);
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

registry.register('finicity', FinicityAdapter);


// MX Adapter [247]
// Financial data enhancement
const mx_config: AdapterConfig = {
  id: 'mx',
  name: 'MX',
  category: 'finance',
  description: 'Financial data enhancement',
  authTypes: ['basic'],
  baseUrl: 'https://api.mx.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(mx_config);

export class MxAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = mx_config;

  constructor(credentials: AuthCredentials) {
    super(mx_config, credentials);
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

registry.register('mx', MxAdapter);


// Dwolla Adapter [248]
// Bank transfer payments
const dwolla_config: AdapterConfig = {
  id: 'dwolla',
  name: 'Dwolla',
  category: 'finance',
  description: 'Bank transfer payments',
  authTypes: ['oauth2'],
  baseUrl: 'https://api-sandbox.dwolla.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(dwolla_config);

export class DwollaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = dwolla_config;

  constructor(credentials: AuthCredentials) {
    super(dwolla_config, credentials);
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

registry.register('dwolla', DwollaAdapter);


// Marqeta Adapter [249]
// Modern card issuing
const marqeta_config: AdapterConfig = {
  id: 'marqeta',
  name: 'Marqeta',
  category: 'finance',
  description: 'Modern card issuing',
  authTypes: ['basic'],
  baseUrl: 'https://sandbox.marqeta.com/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(marqeta_config);

export class MarqetaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = marqeta_config;

  constructor(credentials: AuthCredentials) {
    super(marqeta_config, credentials);
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

registry.register('marqeta', MarqetaAdapter);


// Unit Adapter [250]
// Banking-as-a-service
const unit_co_config: AdapterConfig = {
  id: 'unit_co',
  name: 'Unit',
  category: 'finance',
  description: 'Banking-as-a-service',
  authTypes: ['api_key'],
  baseUrl: 'https://api.unit.co',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(unit_co_config);

export class UnitCoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = unit_co_config;

  constructor(credentials: AuthCredentials) {
    super(unit_co_config, credentials);
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

registry.register('unit_co', UnitCoAdapter);


// Alloy Adapter [251]
// Identity decisioning fintech
const alloy_config: AdapterConfig = {
  id: 'alloy',
  name: 'Alloy',
  category: 'finance',
  description: 'Identity decisioning fintech',
  authTypes: ['api_key'],
  baseUrl: 'https://api.alloy.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(alloy_config);

export class AlloyAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = alloy_config;

  constructor(credentials: AuthCredentials) {
    super(alloy_config, credentials);
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

registry.register('alloy', AlloyAdapter);


// Persona Adapter [252]
// Identity verification
const persona_config: AdapterConfig = {
  id: 'persona',
  name: 'Persona',
  category: 'finance',
  description: 'Identity verification',
  authTypes: ['api_key'],
  baseUrl: 'https://withpersona.com/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(persona_config);

export class PersonaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = persona_config;

  constructor(credentials: AuthCredentials) {
    super(persona_config, credentials);
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

registry.register('persona', PersonaAdapter);


// Jumio Adapter [253]
// Identity verification KYC
const jumio_config: AdapterConfig = {
  id: 'jumio',
  name: 'Jumio',
  category: 'finance',
  description: 'Identity verification KYC',
  authTypes: ['basic'],
  baseUrl: 'https://netverify.com/api/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(jumio_config);

export class JumioAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = jumio_config;

  constructor(credentials: AuthCredentials) {
    super(jumio_config, credentials);
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

registry.register('jumio', JumioAdapter);


// Onfido Adapter [254]
// Identity verification KYC
const onfido_config: AdapterConfig = {
  id: 'onfido',
  name: 'Onfido',
  category: 'finance',
  description: 'Identity verification KYC',
  authTypes: ['api_key'],
  baseUrl: 'https://api.eu.onfido.com/v3.6',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(onfido_config);

export class OnfidoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = onfido_config;

  constructor(credentials: AuthCredentials) {
    super(onfido_config, credentials);
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

registry.register('onfido', OnfidoAdapter);


// Trulioo Adapter [255]
// Global identity verification
const trulioo_config: AdapterConfig = {
  id: 'trulioo',
  name: 'Trulioo',
  category: 'finance',
  description: 'Global identity verification',
  authTypes: ['basic'],
  baseUrl: 'https://api.globaldatacompany.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(trulioo_config);

export class TruliooAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = trulioo_config;

  constructor(credentials: AuthCredentials) {
    super(trulioo_config, credentials);
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

registry.register('trulioo', TruliooAdapter);


// ComplyAdvantage Adapter [256]
// AML compliance screening
const comply_advantage_config: AdapterConfig = {
  id: 'comply_advantage',
  name: 'ComplyAdvantage',
  category: 'finance',
  description: 'AML compliance screening',
  authTypes: ['api_key'],
  baseUrl: 'https://api.complyadvantage.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(comply_advantage_config);

export class ComplyAdvantageAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = comply_advantage_config;

  constructor(credentials: AuthCredentials) {
    super(comply_advantage_config, credentials);
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

registry.register('comply_advantage', ComplyAdvantageAdapter);


// Chainalysis Adapter [257]
// Blockchain data compliance
const chainalysis_config: AdapterConfig = {
  id: 'chainalysis',
  name: 'Chainalysis',
  category: 'finance',
  description: 'Blockchain data compliance',
  authTypes: ['api_key'],
  baseUrl: 'https://api.chainalysis.com/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(chainalysis_config);

export class ChainalysisAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = chainalysis_config;

  constructor(credentials: AuthCredentials) {
    super(chainalysis_config, credentials);
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

registry.register('chainalysis', ChainalysisAdapter);


// Elliptic Adapter [258]
// Crypto compliance analytics
const elliptic_config: AdapterConfig = {
  id: 'elliptic',
  name: 'Elliptic',
  category: 'finance',
  description: 'Crypto compliance analytics',
  authTypes: ['api_key'],
  baseUrl: 'https://api.elliptic.co/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(elliptic_config);

export class EllipticAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = elliptic_config;

  constructor(credentials: AuthCredentials) {
    super(elliptic_config, credentials);
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

registry.register('elliptic', EllipticAdapter);


// Feedzai Adapter [259]
// Financial crime risk
const feedzai_config: AdapterConfig = {
  id: 'feedzai',
  name: 'Feedzai',
  category: 'finance',
  description: 'Financial crime risk',
  authTypes: ['api_key'],
  baseUrl: 'https://api.feedzai.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(feedzai_config);

export class FeedzaiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = feedzai_config;

  constructor(credentials: AuthCredentials) {
    super(feedzai_config, credentials);
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

registry.register('feedzai', FeedzaiAdapter);


// Binance Adapter [260]
// Cryptocurrency exchange
const binance_config: AdapterConfig = {
  id: 'binance',
  name: 'Binance',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.binance.com/api/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(binance_config);

export class BinanceAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = binance_config;

  constructor(credentials: AuthCredentials) {
    super(binance_config, credentials);
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

registry.register('binance', BinanceAdapter);


// Coinbase Adapter [261]
// Cryptocurrency exchange wallet
const coinbase_config: AdapterConfig = {
  id: 'coinbase',
  name: 'Coinbase',
  category: 'finance',
  description: 'Cryptocurrency exchange wallet',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coinbase.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coinbase_config);

export class CoinbaseAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coinbase_config;

  constructor(credentials: AuthCredentials) {
    super(coinbase_config, credentials);
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

registry.register('coinbase', CoinbaseAdapter);


// Kraken Adapter [262]
// Cryptocurrency exchange
const kraken_config: AdapterConfig = {
  id: 'kraken',
  name: 'Kraken',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.kraken.com/0',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(kraken_config);

export class KrakenAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = kraken_config;

  constructor(credentials: AuthCredentials) {
    super(kraken_config, credentials);
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

registry.register('kraken', KrakenAdapter);


// Gemini Adapter [263]
// Cryptocurrency exchange
const gemini_config: AdapterConfig = {
  id: 'gemini',
  name: 'Gemini',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.gemini.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(gemini_config);

export class GeminiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = gemini_config;

  constructor(credentials: AuthCredentials) {
    super(gemini_config, credentials);
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

registry.register('gemini', GeminiAdapter);


// Crypto.com Adapter [264]
// Cryptocurrency platform
const crypto_com_config: AdapterConfig = {
  id: 'crypto_com',
  name: 'Crypto.com',
  category: 'finance',
  description: 'Cryptocurrency platform',
  authTypes: ['api_key'],
  baseUrl: 'https://api.crypto.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(crypto_com_config);

export class CryptoComAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = crypto_com_config;

  constructor(credentials: AuthCredentials) {
    super(crypto_com_config, credentials);
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

registry.register('crypto_com', CryptoComAdapter);


// Blockchain.com Adapter [265]
// Crypto wallet and exchange
const blockchain_com_config: AdapterConfig = {
  id: 'blockchain_com',
  name: 'Blockchain.com',
  category: 'finance',
  description: 'Crypto wallet and exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.blockchain.com/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(blockchain_com_config);

export class BlockchainComAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = blockchain_com_config;

  constructor(credentials: AuthCredentials) {
    super(blockchain_com_config, credentials);
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

registry.register('blockchain_com', BlockchainComAdapter);


// Bitfinex Adapter [266]
// Cryptocurrency exchange
const bitfinex_config: AdapterConfig = {
  id: 'bitfinex',
  name: 'Bitfinex',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api-pub.bitfinex.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitfinex_config);

export class BitfinexAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitfinex_config;

  constructor(credentials: AuthCredentials) {
    super(bitfinex_config, credentials);
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

registry.register('bitfinex', BitfinexAdapter);


// Bitstamp Adapter [267]
// Cryptocurrency exchange
const bitstamp_config: AdapterConfig = {
  id: 'bitstamp',
  name: 'Bitstamp',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://www.bitstamp.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitstamp_config);

export class BitstampAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitstamp_config;

  constructor(credentials: AuthCredentials) {
    super(bitstamp_config, credentials);
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

registry.register('bitstamp', BitstampAdapter);


// OKX Adapter [268]
// Cryptocurrency exchange
const okx_config: AdapterConfig = {
  id: 'okx',
  name: 'OKX',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://www.okx.com/api/v5',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(okx_config);

export class OkxAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = okx_config;

  constructor(credentials: AuthCredentials) {
    super(okx_config, credentials);
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

registry.register('okx', OkxAdapter);


// HTX (Huobi) Adapter [269]
// Cryptocurrency exchange
const huobi_config: AdapterConfig = {
  id: 'huobi',
  name: 'HTX (Huobi)',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.huobi.pro',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(huobi_config);

export class HuobiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = huobi_config;

  constructor(credentials: AuthCredentials) {
    super(huobi_config, credentials);
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

registry.register('huobi', HuobiAdapter);


// KuCoin Adapter [270]
// Cryptocurrency exchange
const kucoin_config: AdapterConfig = {
  id: 'kucoin',
  name: 'KuCoin',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.kucoin.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(kucoin_config);

export class KucoinAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = kucoin_config;

  constructor(credentials: AuthCredentials) {
    super(kucoin_config, credentials);
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

registry.register('kucoin', KucoinAdapter);


// Bybit Adapter [271]
// Cryptocurrency derivatives
const bybit_config: AdapterConfig = {
  id: 'bybit',
  name: 'Bybit',
  category: 'finance',
  description: 'Cryptocurrency derivatives',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bybit.com/v5',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bybit_config);

export class BybitAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bybit_config;

  constructor(credentials: AuthCredentials) {
    super(bybit_config, credentials);
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

registry.register('bybit', BybitAdapter);


// Gate.io Adapter [272]
// Cryptocurrency exchange
const gate_io_config: AdapterConfig = {
  id: 'gate_io',
  name: 'Gate.io',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.gateio.ws/api/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(gate_io_config);

export class GateIoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = gate_io_config;

  constructor(credentials: AuthCredentials) {
    super(gate_io_config, credentials);
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

registry.register('gate_io', GateIoAdapter);


// Bitget Adapter [273]
// Cryptocurrency exchange
const bitget_config: AdapterConfig = {
  id: 'bitget',
  name: 'Bitget',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bitget.com/api/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitget_config);

export class BitgetAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitget_config;

  constructor(credentials: AuthCredentials) {
    super(bitget_config, credentials);
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

registry.register('bitget', BitgetAdapter);


// Luno Adapter [274]
// Cryptocurrency exchange
const luno_config: AdapterConfig = {
  id: 'luno',
  name: 'Luno',
  category: 'finance',
  description: 'Cryptocurrency exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.luno.com/api/1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(luno_config);

export class LunoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = luno_config;

  constructor(credentials: AuthCredentials) {
    super(luno_config, credentials);
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

registry.register('luno', LunoAdapter);


// NDAX Adapter [275]
// Canadian crypto exchange
const ndax_config: AdapterConfig = {
  id: 'ndax',
  name: 'NDAX',
  category: 'finance',
  description: 'Canadian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.ndax.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(ndax_config);

export class NdaxAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = ndax_config;

  constructor(credentials: AuthCredentials) {
    super(ndax_config, credentials);
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

registry.register('ndax', NdaxAdapter);


// Bitso Adapter [276]
// Latin American crypto exchange
const bitso_config: AdapterConfig = {
  id: 'bitso',
  name: 'Bitso',
  category: 'finance',
  description: 'Latin American crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bitso.com/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitso_config);

export class BitsoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitso_config;

  constructor(credentials: AuthCredentials) {
    super(bitso_config, credentials);
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

registry.register('bitso', BitsoAdapter);


// Mercado Bitcoin Adapter [277]
// Brazilian crypto exchange
const mercado_bitcoin_config: AdapterConfig = {
  id: 'mercado_bitcoin',
  name: 'Mercado Bitcoin',
  category: 'finance',
  description: 'Brazilian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://www.mercadobitcoin.net/api/v4',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(mercado_bitcoin_config);

export class MercadoBitcoinAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = mercado_bitcoin_config;

  constructor(credentials: AuthCredentials) {
    super(mercado_bitcoin_config, credentials);
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

registry.register('mercado_bitcoin', MercadoBitcoinAdapter);


// Foxbit Adapter [278]
// Brazilian crypto exchange
const foxbit_config: AdapterConfig = {
  id: 'foxbit',
  name: 'Foxbit',
  category: 'finance',
  description: 'Brazilian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.foxbit.com.br/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(foxbit_config);

export class FoxbitAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = foxbit_config;

  constructor(credentials: AuthCredentials) {
    super(foxbit_config, credentials);
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

registry.register('foxbit', FoxbitAdapter);


// Ripio Adapter [279]
// Latin American crypto exchange
const ripio_config: AdapterConfig = {
  id: 'ripio',
  name: 'Ripio',
  category: 'finance',
  description: 'Latin American crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.ripio.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(ripio_config);

export class RipioAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = ripio_config;

  constructor(credentials: AuthCredentials) {
    super(ripio_config, credentials);
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

registry.register('ripio', RipioAdapter);


// Satoshi Tango Adapter [280]
// Argentine crypto exchange
const satoshi_tango_config: AdapterConfig = {
  id: 'satoshi_tango',
  name: 'Satoshi Tango',
  category: 'finance',
  description: 'Argentine crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.satoshitango.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(satoshi_tango_config);

export class SatoshiTangoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = satoshi_tango_config;

  constructor(credentials: AuthCredentials) {
    super(satoshi_tango_config, credentials);
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

registry.register('satoshi_tango', SatoshiTangoAdapter);


// Letobit Adapter [281]
// Latin American crypto exchange
const letobit_config: AdapterConfig = {
  id: 'letobit',
  name: 'Letobit',
  category: 'finance',
  description: 'Latin American crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.letobit.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(letobit_config);

export class LetobitAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = letobit_config;

  constructor(credentials: AuthCredentials) {
    super(letobit_config, credentials);
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

registry.register('letobit', LetobitAdapter);


// Buenbit Adapter [282]
// Argentine crypto exchange
const buenbit_config: AdapterConfig = {
  id: 'buenbit',
  name: 'Buenbit',
  category: 'finance',
  description: 'Argentine crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.buenbit.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(buenbit_config);

export class BuenbitAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = buenbit_config;

  constructor(credentials: AuthCredentials) {
    super(buenbit_config, credentials);
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

registry.register('buenbit', BuenbitAdapter);


// CryptoMKT Adapter [283]
// Latin American crypto exchange
const cryptomkt_config: AdapterConfig = {
  id: 'cryptomkt',
  name: 'CryptoMKT',
  category: 'finance',
  description: 'Latin American crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.cryptomkt.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(cryptomkt_config);

export class CryptomktAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = cryptomkt_config;

  constructor(credentials: AuthCredentials) {
    super(cryptomkt_config, credentials);
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

registry.register('cryptomkt', CryptomktAdapter);


// Bitbns Adapter [284]
// Indian crypto exchange
const bit_bns_config: AdapterConfig = {
  id: 'bit_bns',
  name: 'Bitbns',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bitbns.com/api/trade/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bit_bns_config);

export class BitBnsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bit_bns_config;

  constructor(credentials: AuthCredentials) {
    super(bit_bns_config, credentials);
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

registry.register('bit_bns', BitBnsAdapter);


// WazirX Adapter [285]
// Indian crypto exchange
const wazirx_config: AdapterConfig = {
  id: 'wazirx',
  name: 'WazirX',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.wazirx.com/sapi/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(wazirx_config);

export class WazirxAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = wazirx_config;

  constructor(credentials: AuthCredentials) {
    super(wazirx_config, credentials);
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

registry.register('wazirx', WazirxAdapter);


// CoinDCX Adapter [286]
// Indian crypto exchange
const coin_dcx_config: AdapterConfig = {
  id: 'coin_dcx',
  name: 'CoinDCX',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coindcx.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coin_dcx_config);

export class CoinDcxAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coin_dcx_config;

  constructor(credentials: AuthCredentials) {
    super(coin_dcx_config, credentials);
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

registry.register('coin_dcx', CoinDcxAdapter);


// ZebPay Adapter [287]
// Indian crypto exchange
const zebpay_config: AdapterConfig = {
  id: 'zebpay',
  name: 'ZebPay',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.zebpay.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(zebpay_config);

export class ZebpayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = zebpay_config;

  constructor(credentials: AuthCredentials) {
    super(zebpay_config, credentials);
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

registry.register('zebpay', ZebpayAdapter);


// Giottus Adapter [288]
// Indian crypto exchange
const giottus_config: AdapterConfig = {
  id: 'giottus',
  name: 'Giottus',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.giottus.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(giottus_config);

export class GiottusAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = giottus_config;

  constructor(credentials: AuthCredentials) {
    super(giottus_config, credentials);
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

registry.register('giottus', GiottusAdapter);


// Colodax Adapter [289]
// Indian crypto exchange
const colodax_config: AdapterConfig = {
  id: 'colodax',
  name: 'Colodax',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.colodax.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(colodax_config);

export class ColodaxAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = colodax_config;

  constructor(credentials: AuthCredentials) {
    super(colodax_config, credentials);
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

registry.register('colodax', ColodaxAdapter);


// Bitbns Pro Adapter [290]
// Indian crypto trading
const bitbns_pro_config: AdapterConfig = {
  id: 'bitbns_pro',
  name: 'Bitbns Pro',
  category: 'finance',
  description: 'Indian crypto trading',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bitbns.com/api/trade/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitbns_pro_config);

export class BitbnsProAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitbns_pro_config;

  constructor(credentials: AuthCredentials) {
    super(bitbns_pro_config, credentials);
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

registry.register('bitbns_pro', BitbnsProAdapter);


// Unocoin Adapter [291]
// Indian crypto exchange
const unocoin_config: AdapterConfig = {
  id: 'unocoin',
  name: 'Unocoin',
  category: 'finance',
  description: 'Indian crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.unocoin.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(unocoin_config);

export class UnocoinAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = unocoin_config;

  constructor(credentials: AuthCredentials) {
    super(unocoin_config, credentials);
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

registry.register('unocoin', UnocoinAdapter);


// Bidget Adapter [292]
// Crypto payments
const bidget_config: AdapterConfig = {
  id: 'bidget',
  name: 'Bidget',
  category: 'finance',
  description: 'Crypto payments',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bidget.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bidget_config);

export class BidgetAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bidget_config;

  constructor(credentials: AuthCredentials) {
    super(bidget_config, credentials);
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

registry.register('bidget', BidgetAdapter);


// CoinRemitter Adapter [293]
// Crypto payment gateway
const coinremitter_config: AdapterConfig = {
  id: 'coinremitter',
  name: 'CoinRemitter',
  category: 'finance',
  description: 'Crypto payment gateway',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coinremitter.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coinremitter_config);

export class CoinremitterAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coinremitter_config;

  constructor(credentials: AuthCredentials) {
    super(coinremitter_config, credentials);
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

registry.register('coinremitter', CoinremitterAdapter);


// NOWPayments Adapter [294]
// Crypto payment gateway
const nowpayments_config: AdapterConfig = {
  id: 'nowpayments',
  name: 'NOWPayments',
  category: 'finance',
  description: 'Crypto payment gateway',
  authTypes: ['api_key'],
  baseUrl: 'https://api.nowpayments.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(nowpayments_config);

export class NowpaymentsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = nowpayments_config;

  constructor(credentials: AuthCredentials) {
    super(nowpayments_config, credentials);
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

registry.register('nowpayments', NowpaymentsAdapter);


// CoinGate Adapter [295]
// Crypto payment gateway
const coingate_config: AdapterConfig = {
  id: 'coingate',
  name: 'CoinGate',
  category: 'finance',
  description: 'Crypto payment gateway',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coinagate.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coingate_config);

export class CoingateAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coingate_config;

  constructor(credentials: AuthCredentials) {
    super(coingate_config, credentials);
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

registry.register('coingate', CoingateAdapter);


// BitPay Adapter [296]
// Crypto payment processing
const bitpay_config: AdapterConfig = {
  id: 'bitpay',
  name: 'BitPay',
  category: 'finance',
  description: 'Crypto payment processing',
  authTypes: ['basic'],
  baseUrl: 'https://bitpay.com/api',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitpay_config);

export class BitpayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitpay_config;

  constructor(credentials: AuthCredentials) {
    super(bitpay_config, credentials);
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

registry.register('bitpay', BitpayAdapter);


// Coinbase Commerce Adapter [297]
// Crypto payments
const coinbase_commerce_config: AdapterConfig = {
  id: 'coinbase_commerce',
  name: 'Coinbase Commerce',
  category: 'finance',
  description: 'Crypto payments',
  authTypes: ['api_key'],
  baseUrl: 'https://api.commerce.coinbase.com',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coinbase_commerce_config);

export class CoinbaseCommerceAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coinbase_commerce_config;

  constructor(credentials: AuthCredentials) {
    super(coinbase_commerce_config, credentials);
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

registry.register('coinbase_commerce', CoinbaseCommerceAdapter);


// Flexa Adapter [298]
// Crypto payments network
const flexa_config: AdapterConfig = {
  id: 'flexa',
  name: 'Flexa',
  category: 'finance',
  description: 'Crypto payments network',
  authTypes: ['api_key'],
  baseUrl: 'https://api.flexa.network/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(flexa_config);

export class FlexaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = flexa_config;

  constructor(credentials: AuthCredentials) {
    super(flexa_config, credentials);
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

registry.register('flexa', FlexaAdapter);


// Alchemy Pay Adapter [299]
// Crypto fiat payments
const alchemy_pay_config: AdapterConfig = {
  id: 'alchemy_pay',
  name: 'Alchemy Pay',
  category: 'finance',
  description: 'Crypto fiat payments',
  authTypes: ['api_key'],
  baseUrl: 'https://api.alchemyapi.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(alchemy_pay_config);

export class AlchemyPayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = alchemy_pay_config;

  constructor(credentials: AuthCredentials) {
    super(alchemy_pay_config, credentials);
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

registry.register('alchemy_pay', AlchemyPayAdapter);


// MoonPay Adapter [300]
// Crypto on-ramp
const moonpay_config: AdapterConfig = {
  id: 'moonpay',
  name: 'MoonPay',
  category: 'finance',
  description: 'Crypto on-ramp',
  authTypes: ['api_key'],
  baseUrl: 'https://api.moonpay.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(moonpay_config);

export class MoonpayAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = moonpay_config;

  constructor(credentials: AuthCredentials) {
    super(moonpay_config, credentials);
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

registry.register('moonpay', MoonpayAdapter);


// Transak Adapter [301]
// Crypto fiat on-ramp
const transak_config: AdapterConfig = {
  id: 'transak',
  name: 'Transak',
  category: 'finance',
  description: 'Crypto fiat on-ramp',
  authTypes: ['api_key'],
  baseUrl: 'https://api.transak.com/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(transak_config);

export class TransakAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = transak_config;

  constructor(credentials: AuthCredentials) {
    super(transak_config, credentials);
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

registry.register('transak', TransakAdapter);


// Ramp Network Adapter [302]
// Crypto fiat on-ramp
const ramp_network_config: AdapterConfig = {
  id: 'ramp_network',
  name: 'Ramp Network',
  category: 'finance',
  description: 'Crypto fiat on-ramp',
  authTypes: ['api_key'],
  baseUrl: 'https://api.ramp.network/api/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(ramp_network_config);

export class RampNetworkAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = ramp_network_config;

  constructor(credentials: AuthCredentials) {
    super(ramp_network_config, credentials);
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

registry.register('ramp_network', RampNetworkAdapter);


// Wyre Adapter [303]
// Crypto fiat payments
const wyre_config: AdapterConfig = {
  id: 'wyre',
  name: 'Wyre',
  category: 'finance',
  description: 'Crypto fiat payments',
  authTypes: ['api_key'],
  baseUrl: 'https://api.sendwyre.com/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(wyre_config);

export class WyreAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = wyre_config;

  constructor(credentials: AuthCredentials) {
    super(wyre_config, credentials);
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

registry.register('wyre', WyreAdapter);


// Xapo Bank Adapter [304]
// Crypto banking
const xapo_config: AdapterConfig = {
  id: 'xapo',
  name: 'Xapo Bank',
  category: 'finance',
  description: 'Crypto banking',
  authTypes: ['api_key'],
  baseUrl: 'https://api.xapo.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(xapo_config);

export class XapoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = xapo_config;

  constructor(credentials: AuthCredentials) {
    super(xapo_config, credentials);
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

registry.register('xapo', XapoAdapter);


// BlockFi Adapter [305]
// Crypto lending and trading
const blockfi_config: AdapterConfig = {
  id: 'blockfi',
  name: 'BlockFi',
  category: 'finance',
  description: 'Crypto lending and trading',
  authTypes: ['api_key'],
  baseUrl: 'https://api.blockfi.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(blockfi_config);

export class BlockfiAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = blockfi_config;

  constructor(credentials: AuthCredentials) {
    super(blockfi_config, credentials);
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

registry.register('blockfi', BlockfiAdapter);


// Celsius Network Adapter [306]
// Crypto lending
const celsius_config: AdapterConfig = {
  id: 'celsius',
  name: 'Celsius Network',
  category: 'finance',
  description: 'Crypto lending',
  authTypes: ['api_key'],
  baseUrl: 'https://api.celsius.network/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(celsius_config);

export class CelsiusAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = celsius_config;

  constructor(credentials: AuthCredentials) {
    super(celsius_config, credentials);
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

registry.register('celsius', CelsiusAdapter);


// Nexo Adapter [307]
// Crypto lending platform
const nexo_config: AdapterConfig = {
  id: 'nexo',
  name: 'Nexo',
  category: 'finance',
  description: 'Crypto lending platform',
  authTypes: ['api_key'],
  baseUrl: 'https://api.nexo.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(nexo_config);

export class NexoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = nexo_config;

  constructor(credentials: AuthCredentials) {
    super(nexo_config, credentials);
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

registry.register('nexo', NexoAdapter);

