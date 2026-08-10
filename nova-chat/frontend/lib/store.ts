import { create } from 'zustand';

export interface User {
  id: string;
  username: string;
  email: string;
  display_name: string;
  avatar_url?: string;
  status: 'online' | 'away' | 'busy' | 'dnd' | 'offline';
  custom_status?: string;
}

export interface Room {
  id: string;
  name: string;
  display_name: string;
  description?: string;
  room_type: 'dm' | 'group_dm' | 'public_channel' | 'private_channel' | 'announcement';
  member_count: number;
  last_message_at?: string;
  unread_count?: number;
}

export interface Message {
  id: string;
  room_id: string;
  sender: {
    user_id: string;
    display_name: string;
    avatar_url?: string;
  };
  content: {
    content_type: string;
    body: string;
    formatted_body?: string;
    language: string;
  };
  thread_id?: string;
  reactions: { emoji: string; users: string[]; count: number }[];
  attachments: any[];
  is_edited: boolean;
  reply_count: number;
  created_at: string;
  updated_at: string;
}

export interface Presence {
  user_id: string;
  status: string;
  custom_status?: string;
  focus_mode: boolean;
}

interface ChatState {
  user: User | null;
  token: string | null;
  rooms: Room[];
  activeRoom: Room | null;
  messages: Message[];
  presence: Record<string, Presence>;
  typing: Record<string, string[]>;
  connected: boolean;
  sidebarOpen: boolean;

  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setRooms: (rooms: Room[]) => void;
  setActiveRoom: (room: Room | null) => void;
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  updatePresence: (userId: string, presence: Presence) => void;
  setTyping: (roomId: string, users: string[]) => void;
  setConnected: (connected: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  logout: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  user: null,
  token: null,
  rooms: [],
  activeRoom: null,
  messages: [],
  presence: {},
  typing: {},
  connected: false,
  sidebarOpen: true,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setRooms: (rooms) => set({ rooms }),
  setActiveRoom: (room) => set({ activeRoom: room, messages: [] }),
  setMessages: (messages) => set({ messages }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  updatePresence: (userId, presence) =>
    set((state) => ({ presence: { ...state.presence, [userId]: presence } })),
  setTyping: (roomId, users) =>
    set((state) => ({ typing: { ...state.typing, [roomId]: users } })),
  setConnected: (connected) => set({ connected }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  logout: () =>
    set({
      user: null,
      token: null,
      rooms: [],
      activeRoom: null,
      messages: [],
      presence: {},
      connected: false,
    }),
}));
