import './globals.css';

import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'فروشگاه انلاین شاپ',
  description: 'بزرگترین فروشگاه انلاین در ایران',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='fa' dir='rtl'>
      <body
        cz-shortcut-listen='true'
        className={`${vazirmatn.className} antialiased`}
      >
          <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
