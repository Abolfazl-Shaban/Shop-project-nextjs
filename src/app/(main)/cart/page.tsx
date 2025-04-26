'use client';
import { CalDiscount } from '@/app/utils/calDiscount';
import CartItem from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/ProductSummary';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { it } from 'node:test';

const CartPage = () => {
  const cart = useCart();
  return (
    <div className='container mx-auto mt-4'>
      <h2 className='text-lg font-medium'>سبد خرید</h2>
      <div className='flex relative gap-5'>
        {cart?.getCartItems.length == 1 ? (
          <div className='flex-center text-dark-300 mt-2 h-[70vh] w-full flex-col rounded-xl border p-2'>
            <p className='text-2xl font-semibold'>سبد خرید شما خالی است!</p>
            <p>
              برای سفارش محصول میتوانید به صفحه{' '}
              <Link className='text-primary-300 underline' href={'/products'}>
                فروشگاه
              </Link>{' '}
              بروید.
            </p>
          </div>
        ) : (
          <>
            <div className='grow p-4'>
              {cart
                ?.getCartItems()
                .map((r) => (
                  <CartItem key={r.product.id} product={r.product} />
                ))}
            </div>
            <div className='sticky top-20 w-1/4'>
              <p className='p-2 font-medium'>صورتحساب</p>
                <CartSummary cart={cart!} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
