// src/app/[locale]/layout.tsx
import '../globals.css';
import '@fontsource/roboto/300.css'; // Roboto Light
import '@fontsource/roboto/400.css'; // Roboto Regular
import '@fontsource/roboto/500.css'; // Roboto Medium
import '@fontsource/roboto/700.css'; // Roboto Bold

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/footer';

import path from 'path';
import { readFile } from 'fs/promises';
import { getLocale } from 'next-intl/server';

export const metadata = {
  title: 'Indígenas',
  description: 'Investment platform for Puerto Ricans',
};

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  // Determine the current locale from the route
  const locale = await getLocale();

  // Load messages from your locales folder
  const messagesPath = path.resolve(`locales/${locale}.json`);
  const messages = JSON.parse(await readFile(messagesPath, 'utf-8'));

  return (
    <html lang={locale}>
      <body className="font-sans text-gray-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
