// src/app/layout.tsx
import '@/app/globals.css';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';
import { siteMetadata } from '@/lib/config/metadata';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] });

// Use the comprehensive metadata configuration
export const metadata = siteMetadata;

// NEW: Viewport and theme/color settings
export const viewport = {
  themeColor: '#fff',      // Update as needed
  colorScheme: 'light',    // Update as needed
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
