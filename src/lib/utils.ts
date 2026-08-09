import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num.toString();
}

export function formatLatency(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

export function formatTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function relativeTime(date: Date | string): string {
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export function generateId(prefix: string = ''): string {
  return `${prefix}${Math.random().toString(36).substring(2, 10)}${Date.now().toString(36).slice(-4)}`;
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

export function getRiskColor(score: number): string {
  if (score >= 0.8) return 'text-accent-rose';
  if (score >= 0.5) return 'text-accent-amber';
  if (score >= 0.2) return 'text-accent-blue';
  return 'text-accent-emerald';
}

export function getRiskBg(score: number): string {
  if (score >= 0.8) return 'bg-accent-rose/10 border-accent-rose/30';
  if (score >= 0.5) return 'bg-accent-amber/10 border-accent-amber/30';
  if (score >= 0.2) return 'bg-accent-blue/10 border-accent-blue/30';
  return 'bg-accent-emerald/10 border-accent-emerald/30';
}

export function getRiskLabel(score: number): string {
  if (score >= 0.8) return 'Critical';
  if (score >= 0.5) return 'High';
  if (score >= 0.2) return 'Medium';
  return 'Low';
}
