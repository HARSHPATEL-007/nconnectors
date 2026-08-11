// Finance Production Connectors
import { BaseAdapter, registerAdapter } from '../core/index.js';
const stripeConfig = {
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
    config = stripeConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/customers',
            params: { limit: params?.limit || '100', starting_after: params?.starting_after || '' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/customers/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/customers', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'POST', path: `/customers/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/customers/${id}` });
    }
    async createCharge(amount, currency, customerId) {
        return this.performRequest({
            method: 'POST',
            path: '/charges',
            body: { amount, currency, customer: customerId },
        });
    }
    async listCharges(params) {
        return this.performRequest({
            method: 'GET',
            path: '/charges',
            params: { limit: params?.limit || '100' },
        });
    }
    async createRefund(chargeId) {
        return this.performRequest({ method: 'POST', path: '/refunds', body: { charge: chargeId } });
    }
    async listSubscriptions(params) {
        return this.performRequest({
            method: 'GET',
            path: '/subscriptions',
            params: { limit: params?.limit || '100' },
        });
    }
}
const paypalConfig = {
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
    config = paypalConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/payments',
            params: { page_size: params?.page_size || '100', page: params?.page || '1' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/payments/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/payments', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PATCH', path: `/payments/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/payments/${id}` });
    }
    async createOrder(amount, currency) {
        return this.performRequest({
            method: 'POST',
            path: '/checkout/orders',
            body: {
                intent: 'CAPTURE',
                purchase_units: [{ amount: { currency_code: currency, value: amount } }],
            },
        });
    }
    async captureOrder(orderId) {
        return this.performRequest({ method: 'POST', path: `/checkout/orders/${orderId}/capture` });
    }
    async listTransactions(params) {
        return this.performRequest({
            method: 'GET',
            path: '/transactions',
            params: { start_date: params?.start_date || '', end_date: params?.end_date || '' },
        });
    }
}
//# sourceMappingURL=index.js.map