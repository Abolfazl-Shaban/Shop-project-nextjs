import Footer from '@/components/global/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'فروشگاه آنلاین شاپ',
    template: '%s | فروشگاه آنلاین شاپ',
  },
  description:
    'خرید آنلاین انواع محصولات با بهترین قیمت از فروشگاه آنلاین شاپ. ارسال سریع، ضمانت اصالت و پشتیبانی ۲۴ ساعته.',
  keywords: [
    'فروشگاه اینترنتی',
    'آنلاین شاپ',
    'خرید اینترنتی',
    'قیمت مناسب',
    'محصول با کیفیت',
  ],
  openGraph: {
    title: 'فروشگاه آنلاین شاپ',
    description:
      'فروشگاه اینترنتی با تنوع محصولات بالا، ارسال سریع و پشتیبانی کامل.',
    siteName: 'فروشگاه آنلاین شاپ',
    locale: 'fa_IR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
