import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Конфигуратор товара | Next.js',
  description: 'Пример интерактивного конфигуратора с динамической ценой на Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>{children}</body>
    </html>
  );
}
