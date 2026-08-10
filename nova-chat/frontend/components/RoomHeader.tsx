'use client';

import { useChatStore } from '@/lib/store';

export function RoomHeader() {
  const { activeRoom } = useChatStore();

  if (!activeRoom) return null;

  return (
    <div className="px-4 py-3 border-b border-nova-border bg-nova-darker/50">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-nova-text">
            # {activeRoom.display_name}
          </h2>
          {activeRoom.description && (
            <p className="text-sm text-nova-muted">{activeRoom.description}</p>
          )}
        </div>
        <div className="flex items-center gap-3 text-nova-muted text-sm">
          <span>{activeRoom.member_count} members</span>
        </div>
      </div>
    </div>
  );
}
