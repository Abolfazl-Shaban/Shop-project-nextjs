import CheckoutPage from "@/components/checkout/CheckoutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'پرداخت',
  description:
    'در این صفحه می‌توانید پرداخت خود را نهایی کنید و سفارش خود را ثبت نمایید.',
  robots: {
    index: false,
    follow: false,
  },
};

const Checkout = () => {
  return (
    <div className='container mx-auto my-6 flex gap-6 not-md:flex-col'>
        <CheckoutPage />
    </div>
  );
};

export default Checkout;
