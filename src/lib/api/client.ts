const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class ApiClient {
  private baseUrl: string;
  private apiKey: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setApiKey(key: string) {
    this.apiKey = key;
    if (typeof window !== 'undefined') {
      localStorage.setItem('n0va1o_api_key', key);
    }
  }

  getApiKey(): string | null {
    if (this.apiKey) return this.apiKey;
    if (typeof window !== 'undefined') {
      this.apiKey = localStorage.getItem('n0va1o_api_key');
    }
    return this.apiKey;
  }

  clearApiKey() {
    this.apiKey = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('n0va1o_api_key');
    }
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const apiKey = this.getApiKey();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers as Record<string, string>,
    };

    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  async get<T>(path: string): Promise<T> {
    return this.request<T>(path, { method: 'GET' });
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async delete<T>(path: string): Promise<T> {
    return this.request<T>(path, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
