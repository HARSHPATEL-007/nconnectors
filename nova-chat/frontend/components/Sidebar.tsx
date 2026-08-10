'use client';

import { useState } from 'react';
import { useChatStore } from '@/lib/store';
import { api } from '@/lib/api';

export function Sidebar() {
  const { rooms, activeRoom, setActiveRoom, user, logout, connected } = useChatStore();
  const [showCreate, setShowCreate] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDisplay, setNewRoomDisplay] = useState('');

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    try {
      await api.createRoom(
        newRoomName.toLowerCase().replace(/\s+/g, '-'),
        newRoomDisplay || newRoomName,
        'public_channel'
      );
      setShowCreate(false);
      setNewRoomName('');
      setNewRoomDisplay('');
      const data = await api.getRooms();
      if (data.data) {
        useChatStore.getState().setRooms(data.data);
      }
    } catch (err) {
      console.error('Failed to create room:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('nova_token');
    localStorage.removeItem('nova_user');
    logout();
  };

  const channels = rooms.filter(r => r.room_type === 'public_channel' || r.room_type === 'private_channel');
  const dms = rooms.filter(r => r.room_type === 'dm' || r.room_type === 'group_dm');

  return (
    <div className="w-64 bg-nova-darker border-r border-nova-border flex flex-col">
      <div className="p-4 border-b border-nova-border">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-nova-accent">N0VA</h1>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-xs text-nova-muted">{connected ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="mb-4">
          <div className="flex items-center justify-between px-2 mb-1">
            <span className="text-xs font-semibold text-nova-muted uppercase tracking-wider">Channels</span>
            <button
              onClick={() => setShowCreate(!showCreate)}
              className="text-nova-muted hover:text-nova-text text-lg leading-none"
            >
              +
            </button>
          </div>

          {showCreate && (
            <form onSubmit={handleCreateRoom} className="px-2 mb-2 space-y-1">
              <input
                type="text"
                placeholder="channel-name"
                value={newRoomName}
                onChange={(e) => setNewRoomName(e.target.value)}
                className="nova-input w-full text-sm py-1"
              />
              <input
                type="text"
                placeholder="Display name"
                value={newRoomDisplay}
                onChange={(e) => setNewRoomDisplay(e.target.value)}
                className="nova-input w-full text-sm py-1"
              />
              <button type="submit" className="nova-button w-full text-sm py-1">Create</button>
            </form>
          )}

          {channels.map(room => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room)}
              className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                activeRoom?.id === room.id
                  ? 'bg-nova-accent/20 text-nova-accent'
                  : 'text-nova-text-dim hover:text-nova-text hover:bg-nova-surface'
              }`}
            >
              # {room.display_name}
            </button>
          ))}
        </div>

        {dms.length > 0 && (
          <div>
            <span className="text-xs font-semibold text-nova-muted uppercase tracking-wider px-2">
              Direct Messages
            </span>
            {dms.map(room => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                  activeRoom?.id === room.id
                    ? 'bg-nova-accent/20 text-nova-accent'
                    : 'text-nova-text-dim hover:text-nova-text hover:bg-nova-surface'
                }`}
              >
                {room.display_name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-3 border-t border-nova-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-nova-accent flex items-center justify-center text-white text-sm font-bold">
              {user?.display_name?.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm text-nova-text truncate max-w-[120px]">{user?.display_name}</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-nova-muted hover:text-red-400 text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
