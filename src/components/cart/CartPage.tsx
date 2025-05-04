'use client';

import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import { CartSummary } from './ProductSummary';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';

const CartPage = () => {
  const cart = useCart();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <h2 className='p-2 text-lg font-medium'>{t('global.cart')}</h2>
      <div className='flex gap-5 not-md:flex-col'>
        {cart?.getCartItems().length == 0 ? (
          <div className='flex-center text-dark-300 mt-2 h-[70vh] w-full flex-col rounded-xl border p-2'>
            <p className='text-2xl font-semibold'>{t('cart.empty-title')}</p>
            <p>
              {' '}
              <Trans
                i18nKey='cart.empty-description'
                components={[
                  <Link
                    key={0}
                    className='text-primary-300 underline'
                    href='/products'
                  />,
                ]}
              />
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
            <div className='z-[1] h-fit w-[35%] bg-zinc-100 p-2 not-md:bottom-0 not-md:left-0 not-md:w-full not-md:border-t not-md:border-zinc-400 md:sticky md:bg-white lg:top-16 lg:w-1/4'>
              <p className='p-1 py-4 text-sm font-semibold lg:p-2'>
                {t('cart.invoice')}
              </p>
              <div className='rounded-xl p-2 md:bg-white md:p-4 md:shadow-[0_0_15px_-5px_#ddd] lg:p-6'>
                <CartSummary cart={cart!} />
                <Button
                  onClick={() => router.push('/checkout')}
                  className='mt-4 w-full bg-green-500 py-5 hover:bg-green-500/70'
                >
                  {t('cart.confirm')}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
