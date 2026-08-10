const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const WS_URL = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8080';

export class ApiClient {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
  }

  private headers(): HeadersInit {
    const h: HeadersInit = { 'Content-Type': 'application/json' };
    if (this.token) {
      (h as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }
    return h;
  }

  async register(username: string, email: string, password: string, display_name: string) {
    const res = await fetch(`${API_URL}/v1/auth/register`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({ username, email, password, display_name }),
    });
    return res.json();
  }

  async login(email: string, password: string) {
    const res = await fetch(`${API_URL}/v1/auth/login`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  }

  async getRooms(page = 1, perPage = 20) {
    const res = await fetch(`${API_URL}/v1/rooms?page=${page}&per_page=${perPage}`, {
      headers: this.headers(),
    });
    return res.json();
  }

  async createRoom(name: string, display_name: string, room_type: string, member_ids: string[] = []) {
    const res = await fetch(`${API_URL}/v1/rooms`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({ name, display_name, room_type, member_ids }),
    });
    return res.json();
  }

  async getRoomMessages(roomId: string, page = 1, perPage = 50) {
    const res = await fetch(`${API_URL}/v1/rooms/${roomId}/messages?page=${page}&per_page=${perPage}`, {
      headers: this.headers(),
    });
    return res.json();
  }

  async getUsers() {
    const res = await fetch(`${API_URL}/v1/users`, {
      headers: this.headers(),
    });
    return res.json();
  }

  async searchMessages(query: string, roomId?: string) {
    const params = new URLSearchParams({ q: query });
    if (roomId) params.append('room_id', roomId);
    const res = await fetch(`${API_URL}/v1/search/messages?${params}`, {
      headers: this.headers(),
    });
    return res.json();
  }

  wsConnect(userId: string): WebSocket {
    return new WebSocket(`${WS_URL}/ws/${userId}`);
  }
}

export const api = new ApiClient();
