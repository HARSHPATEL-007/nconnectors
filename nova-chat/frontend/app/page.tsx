'use client';

import { useEffect, useState } from 'react';
import { useChatStore } from '@/lib/store';
import { api } from '@/lib/api';
import { AuthScreen } from '@/components/AuthScreen';
import { ChatLayout } from '@/components/ChatLayout';

export default function Home() {
  const { token, setUser, setToken } = useChatStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('nova_token');
    const savedUser = localStorage.getItem('nova_user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      api.setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, [setToken, setUser]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-nova-dark">
        <div className="text-nova-accent text-xl font-semibold animate-pulse">
          N0VA Chat
        </div>
      </div>
    );
  }

  if (!token) {
    return <AuthScreen />;
  }

  return <ChatLayout />;
}
