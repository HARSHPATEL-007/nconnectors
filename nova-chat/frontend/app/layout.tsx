import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'N0VA Chat',
  description: 'Hyper-Scale Team Messaging — Project Nexus Transcendent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
