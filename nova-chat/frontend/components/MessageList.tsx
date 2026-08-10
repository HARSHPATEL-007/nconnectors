'use client';

import { useEffect, useRef } from 'react';
import { useChatStore } from '@/lib/store';
import { formatDistanceToNow } from 'date-fns';

export function MessageList() {
  const { messages, activeRoom, typing } = useChatStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const typingUsers = activeRoom ? typing[activeRoom.id] || [] : [];

  if (!activeRoom) return null;

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-nova-text mb-1">
              # {activeRoom.display_name}
            </h3>
            <p className="text-nova-muted text-sm">No messages yet. Start the conversation!</p>
          </div>
        </div>
      )}

      {messages.map((msg, idx) => {
        const prevMsg = messages[idx - 1];
        const showHeader = !prevMsg || prevMsg.sender.user_id !== msg.sender.user_id ||
          new Date(msg.created_at).getTime() - new Date(prevMsg.created_at).getTime() > 300000;

        return (
          <div
            key={msg.id}
            className={`group px-2 py-1 rounded hover:bg-nova-surface/50 transition-colors ${
              showHeader ? 'mt-3' : ''
            }`}
          >
            {showHeader ? (
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-nova-text text-sm">
                  {msg.sender.display_name}
                </span>
                <span className="text-xs text-nova-muted">
                  {formatDistanceToNow(new Date(msg.created_at), { addSuffix: true })}
                </span>
              </div>
            ) : null}
            <p className="text-nova-text text-sm leading-relaxed pl-0">{msg.content.body}</p>

            {msg.reactions.length > 0 && (
              <div className="flex gap-1 mt-1">
                {msg.reactions.map((r, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-nova-surface border border-nova-border rounded-full text-xs"
                  >
                    {r.emoji} {r.count}
                  </span>
                ))}
              </div>
            )}

            {msg.reply_count > 0 && (
              <button className="text-xs text-nova-accent hover:text-nova-accent-hover mt-1">
                {msg.reply_count} {msg.reply_count === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>
        );
      })}

      {typingUsers.length > 0 && (
        <div className="px-2 py-1 text-xs text-nova-muted italic">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
