'use client';

import { useState, useRef, useEffect } from 'react';
import { useChatStore } from '@/lib/store';

interface MessageInputProps {
  onSend: (body: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [body, setBody] = useState('');
  const { activeRoom } = useChatStore();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeRoom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;
    onSend(body);
    setBody('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!activeRoom) return null;

  return (
    <div className="p-4 border-t border-nova-border">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <textarea
          ref={inputRef}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Message #${activeRoom.display_name}`}
          rows={1}
          className="flex-1 nova-input resize-none min-h-[40px] max-h-[120px]"
        />
        <button
          type="submit"
          disabled={!body.trim()}
          className="nova-button px-6"
        >
          Send
        </button>
      </form>
      <p className="text-xs text-nova-muted mt-1">
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
}
