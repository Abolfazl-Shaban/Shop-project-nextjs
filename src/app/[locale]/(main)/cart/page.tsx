import CartPage from '@/components/cart/CartPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سبد خرید',
  description:
    'محصولاتی که انتخاب کرده‌اید در این قسمت قرار دارند. برای نهایی‌سازی سفارش، ادامه دهید.',
  robots: {
    index: false,
    follow: true,
  },
};

const Cart = () => {
  return (
    <div className='container mx-auto mt-4'>
      <CartPage />
    </div>
  );
};

export default Cart;
