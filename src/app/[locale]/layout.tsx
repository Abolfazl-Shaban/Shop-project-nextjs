import '../globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import I18nProvider from '@/components/global/i18n-provider';
import { dir } from 'i18next';
import Header from '@/components/global/Header';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'فروشگاه انلاین شاپ',
  description: 'بزرگترین فروشگاه انلاین در ایران',
};

export function generateStaticParams() {
  return [{ locale: 'fa' }, { locale: 'en' }];
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        cz-shortcut-listen='true'
        className={`${vazirmatn.className} ${
          locale === 'fa' ? 'font-persianNum' : ''
        } antialiased`}
      >
        <I18nProvider locale={locale}>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
