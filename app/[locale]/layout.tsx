import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


import {NextIntlClientProvider, hasLocale, Locale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const _cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(
  props: Omit<LayoutProps<'/[locale]'>, 'children'>
) {
  const {locale} = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'LocaleLayout'
  });

  return {
    title: t('title'),
    description: 'Rejoignez-nous pour célébrer notre union - Un voyage féerique vers notre amour éternel',
    generator: 'Wedding Invitation Website',
    icons: {
    icon: [
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        //type: 'image/svg+xml',
      },
    ],
    apple: '/icon.png',
  },
  };
}

export default async function RootLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider>
          {children}
        <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
