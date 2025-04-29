'use client';

import CartItem from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/ProductSummary';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const cart = useCart();
  return (
    <div className='container mx-auto mt-4 '>
      <h2 className='text-lg font-medium p-2'>سبد خرید</h2>
      <div className='flex not-md:flex-col gap-5'>
        {cart?.getCartItems().length == 0 ? (
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
            <div className='grow p-1'>
              {cart
                ?.getCartItems()
                .map((r) => (
                  <CartItem key={r.product.id} product={r.product} />
                ))}
            </div>
            <div className='not-md:border-t not-md:border-zinc-400 not-md:bottom-0 bg-zinc-100 p-2 not-md:left-0 not-md:w-full md:sticky z-[1] md:bg-white lg:top-16 h-fit w-[35%] lg:w-1/4 '>
              <p className='p-1 lg:p-2 text-sm font-semibold py-4'>صورتحساب</p>
              <div className='rounded-xl md:bg-white p-2 md:p-4 lg:p-6 md:shadow-[0_0_15px_-5px_#ddd]'>
                <CartSummary cart={cart!} />
                <Button className='bg-green-500 hover:bg-green-500/70 py-5 w-full  mt-4'>تایید و ادامه</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
