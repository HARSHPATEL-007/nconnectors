// Finance Production Connectors
import { BaseAdapter, AdapterResponse, registerAdapter, AdapterConfig, AuthCredentials } from '../core/index.js';

const stripeConfig: AdapterConfig = {
  id: 'stripe',
  name: 'Stripe',
  category: 'finance',
  description: 'Payment processing platform',
  authTypes: ['bearer', 'api_key'],
  baseUrl: 'https://api.stripe.com/v1',
  rateLimit: { requests: 100, windowMs: 1000 },
};

registerAdapter(stripeConfig);

export class StripeAdapter extends BaseAdapter {
  readonly config = stripeConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/customers',
      params: { limit: params?.limit || '100', starting_after: params?.starting_after || '' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/customers/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/customers', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: `/customers/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/customers/${id}` });
  }

  async createCharge(amount: number, currency: string, customerId?: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: '/charges',
      body: { amount, currency, customer: customerId },
    });
  }

  async listCharges(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/charges',
      params: { limit: params?.limit || '100' },
    });
  }

  async createRefund(chargeId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/refunds', body: { charge: chargeId } });
  }

  async listSubscriptions(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/subscriptions',
      params: { limit: params?.limit || '100' },
    });
  }
}

const paypalConfig: AdapterConfig = {
  id: 'paypal',
  name: 'PayPal',
  category: 'finance',
  description: 'Online payment system',
  authTypes: ['oauth2'],
  baseUrl: 'https://api.paypal.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
};

registerAdapter(paypalConfig);

export class PayPalAdapter extends BaseAdapter {
  readonly config = paypalConfig;

  constructor(credentials: AuthCredentials) {
    super(credentials);
  }

  async list(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/payments',
      params: { page_size: params?.page_size || '100', page: params?.page || '1' },
    });
  }

  async get(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/payments/${id}` });
  }

  async create(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/payments', body });
  }

  async update(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PATCH', path: `/payments/${id}`, body });
  }

  async delete(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/payments/${id}` });
  }

  async createOrder(amount: string, currency: string): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'POST',
      path: '/checkout/orders',
      body: {
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: currency, value: amount } }],
      },
    });
  }

  async captureOrder(orderId: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: `/checkout/orders/${orderId}/capture` });
  }

  async listTransactions(params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({
      method: 'GET',
      path: '/transactions',
      params: { start_date: params?.start_date || '', end_date: params?.end_date || '' },
    });
  }
}
