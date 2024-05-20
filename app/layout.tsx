// pages/_app.tsx
import '@/app/ui/global.css';
import type { AppProps } from 'next/app';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      
    </html>
  );
}
