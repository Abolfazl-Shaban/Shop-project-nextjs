'use client';

import { CheckoutSummary } from '@/components/checkout/CheckoutSummary';
import OrderSummary from '@/components/checkout/OrderSummary';
import PaymentMethods from '@/components/checkout/PaymentMethods';
import UserInfo from '@/components/checkout/UserInfo';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

import { useState } from 'react';
const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  const cart = useCart();
  

  return (
    <div className='container mx-auto my-6 flex not-md:flex-col fo gap-6'>
      <div className='grow p-1.5'>
        <UserInfo />
        <PaymentMethods
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <OrderSummary />
      </div>
      <div className='not-md:border-t not-md:border-zinc-400 not-md:bottom-0 bg-zinc-100 p-2 not-md:left-0 not-md:w-full md:sticky z-[1] md:bg-white lg:top-16 h-fit w-[35%] lg:w-1/4'>
        <p className='p-1 lg:p-2 text-sm font-semibold py-4'>صورتحساب</p>
        <div className='rounded-xl md:bg-white p-4 md:shadow-[0_0_15px_-5px_#ddd]'>
          <CheckoutSummary addition={(paymentMethod == 'online' ? 120000 : paymentMethod == 'cartToCart' ? 100000 : 150000)} cart={cart!} />
          
          <div className='group relative'>
            <p className='group-hover:opacity-100 transition-all items-center justify-center left-0 right-0 -top-2 p-1 bg-red-500 rounded-full text-xs opacity-0 text-white px-2 absolute w-fit pointer-events-none'>پرداخت موقتا غیر فعال میباشد</p>
          <Button className='bg-green-500 py-5 w-full mt-4 hover:bg-green-500/70' >
            پرداخت
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
