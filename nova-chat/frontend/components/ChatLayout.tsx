'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useChatStore } from '@/lib/store';
import { api } from '@/lib/api';
import { Sidebar } from './Sidebar';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { RoomHeader } from './RoomHeader';

export function ChatLayout() {
  const {
    user,
    token,
    activeRoom,
    setRooms,
    setMessages,
    addMessage,
    setConnected,
    updatePresence,
    setTyping,
    typing,
  } = useChatStore();

  const wsRef = useRef<WebSocket | null>(null);

  const loadRooms = useCallback(async () => {
    try {
      const data = await api.getRooms();
      if (data.data) {
        setRooms(data.data);
      }
    } catch (err) {
      console.error('Failed to load rooms:', err);
    }
  }, [setRooms]);

  const loadMessages = useCallback(async (roomId: string) => {
    try {
      const data = await api.getRoomMessages(roomId);
      if (data.data) {
        setMessages(data.data.reverse());
      }
    } catch (err) {
      console.error('Failed to load messages:', err);
    }
  }, [setMessages]);

  useEffect(() => {
    if (token) {
      loadRooms();
    }
  }, [token, loadRooms]);

  useEffect(() => {
    if (activeRoom) {
      loadMessages(activeRoom.id);
    }
  }, [activeRoom, loadMessages]);

  useEffect(() => {
    if (!user || !token) return;

    const ws = api.wsConnect(user.id);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
      if (activeRoom) {
        ws.send(JSON.stringify({
          event: 'room.join',
          payload: { room_id: activeRoom.id },
        }));
      }
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        handleWsMessage(msg);
      } catch (err) {
        console.error('WS message error:', err);
      }
    };

    ws.onclose = () => {
      setConnected(false);
    };

    ws.onerror = () => {
      setConnected(false);
    };

    return () => {
      ws.close();
    };
  }, [user, token]);

  useEffect(() => {
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN && activeRoom) {
      ws.send(JSON.stringify({
        event: 'room.join',
        payload: { room_id: activeRoom.id },
      }));
      loadMessages(activeRoom.id);
    }
  }, [activeRoom]);

  const handleWsMessage = (msg: any) => {
    switch (msg.event) {
      case 'message.new':
        const newMsg: any = {
          id: msg.payload.message_id || `msg_${Date.now()}`,
          room_id: msg.payload.content?.room_id || activeRoom?.id,
          sender: {
            user_id: msg.payload.sender_id || msg.payload.content?.sender_id,
            display_name: msg.payload.content?.sender_name || 'Unknown',
          },
          content: msg.payload.content || { body: msg.payload.body || '', content_type: 'text', language: 'en' },
          reactions: [],
          attachments: [],
          is_edited: false,
          reply_count: 0,
          created_at: msg.payload.timestamp || new Date().toISOString(),
          updated_at: msg.payload.timestamp || new Date().toISOString(),
        };
        addMessage(newMsg);
        break;
      case 'presence.change':
        updatePresence(msg.payload.user_id, {
          user_id: msg.payload.user_id,
          status: msg.payload.status,
          custom_status: msg.payload.custom_status,
          focus_mode: false,
        });
        break;
      case 'typing.active':
        if (activeRoom?.id === msg.payload.room_id) {
          setTyping(msg.payload.room_id, [msg.payload.user_id]);
        }
        break;
      case 'typing.inactive':
        if (activeRoom?.id === msg.payload.room_id) {
          setTyping(msg.payload.room_id, []);
        }
        break;
    }
  };

  const handleSendMessage = (body: string) => {
    if (!wsRef.current || !activeRoom || !body.trim()) return;

    const payload = {
      room_id: activeRoom.id,
      content: {
        content_type: 'text',
        body: body.trim(),
        language: 'en',
      },
      thread_id: null,
    };

    wsRef.current.send(JSON.stringify({
      event: 'message.send',
      payload,
    }));

    addMessage({
      id: `local_${Date.now()}`,
      room_id: activeRoom.id,
      sender: {
        user_id: user?.id || '',
        display_name: user?.display_name || 'You',
      },
      content: { content_type: 'text', body: body.trim(), language: 'en' },
      reactions: [],
      attachments: [],
      is_edited: false,
      reply_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  };

  return (
    <div className="h-screen flex bg-nova-dark overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {activeRoom ? (
          <>
            <RoomHeader />
            <MessageList />
            <MessageInput onSend={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-nova-text mb-2">Welcome to N0VA Chat</h2>
              <p className="text-nova-muted">Select a channel or DM to get started</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
