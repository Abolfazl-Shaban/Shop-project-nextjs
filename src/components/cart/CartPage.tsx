'use client';

import { useCart } from '@/context/CartContext';
import { Link } from 'lucide-react';
import CartItem from './CartItem';
import { CartSummary } from './ProductSummary';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const cart = useCart();
  const router = useRouter();

  return (
    <div className='flex gap-5 not-md:flex-col'>
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
              .map((r) => <CartItem key={r.product.id} product={r.product} />)}
          </div>
          <div className='z-[1] h-fit w-[35%] bg-zinc-100 p-2 not-md:bottom-0 not-md:left-0 not-md:w-full not-md:border-t not-md:border-zinc-400 md:sticky md:bg-white lg:top-16 lg:w-1/4'>
            <p className='p-1 py-4 text-sm font-semibold lg:p-2'>صورتحساب</p>
            <div className='rounded-xl p-2 md:bg-white md:p-4 md:shadow-[0_0_15px_-5px_#ddd] lg:p-6'>
              <CartSummary cart={cart!} />
              <Button onClick={()=> router.push('/checkout')} className='mt-4 w-full bg-green-500 py-5 hover:bg-green-500/70'>
                تایید و ادامه
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
