/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          dark: '#0a0a0f',
          darker: '#06060a',
          surface: '#12121a',
          border: '#1e1e2e',
          accent: '#6366f1',
          'accent-hover': '#818cf8',
          muted: '#6b7280',
          text: '#e5e7eb',
          'text-dim': '#9ca3af',
        },
      },
    },
  },
  plugins: [],
};
