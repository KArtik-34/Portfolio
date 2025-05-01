import React from 'react';
import '@/app/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className={`${inter.variable} ${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
} 