import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فروشگاه انلاین شاپ',
  description: 'بزرگترین فروشگاه انلاین در ایران',
};

export function generateStaticParams() {
  return [{ locale: 'fa' }, { locale: 'en' }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
