import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'فروشگاه انلاین شاپ',
  description: 'بزرگترین فروشگاه انلاین در ایران',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body
        cz-shortcut-listen='true'
        className={`${vazirmatn.className}  antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
