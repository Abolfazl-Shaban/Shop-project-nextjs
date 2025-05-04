'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { CheckoutSummary } from './CheckoutSummary';
import OrderSummary from './OrderSummary';
import PaymentMethods from './PaymentMethods';
import UserInfo from './UserInfo';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  const cart = useCart();
  const { t } = useTranslation();

  return (
    <>
      <div className='grow p-1.5'>
        <UserInfo />
        <PaymentMethods
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <OrderSummary />
      </div>
      <div className='z-[1] h-fit w-[35%] bg-zinc-100 p-2 not-md:bottom-0 not-md:left-0 not-md:w-full not-md:border-t not-md:border-zinc-400 md:sticky md:bg-white lg:top-16 lg:w-1/4'>
        <p className='p-1 py-4 text-sm font-semibold lg:p-2'>
          {t('checkout.invoice')}
        </p>
        <div className='rounded-xl p-4 md:bg-white md:shadow-[0_0_15px_-5px_#ddd]'>
          <CheckoutSummary
            addition={
              paymentMethod == 'online'
                ? 120000
                : paymentMethod == 'cartToCart'
                  ? 100000
                  : 150000
            }
            cart={cart!}
          />

          <Button className='mt-4 w-full bg-green-500 py-5 hover:bg-green-500/70'>
            {t('checkout.payment')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
