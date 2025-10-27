import type React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'TRUCKWYS - Modern Fleet Management Solution',
  description: 'Advanced fleet management system for efficient tracking, maintenance, and optimization of your vehicle fleet operations.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
