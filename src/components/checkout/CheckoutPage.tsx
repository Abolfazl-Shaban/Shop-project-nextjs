'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { CheckoutSummary } from "./CheckoutSummary";
import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import UserInfo from "./UserInfo";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('online');
    const cart = useCart();

    return ( <>
        <div className='grow p-1.5'>
        <UserInfo />
        <PaymentMethods
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <OrderSummary />
      </div>
      <div className='z-[1] h-fit w-[35%] bg-zinc-100 p-2 not-md:bottom-0 not-md:left-0 not-md:w-full not-md:border-t not-md:border-zinc-400 md:sticky md:bg-white lg:top-16 lg:w-1/4'>
        <p className='p-1 py-4 text-sm font-semibold lg:p-2'>صورتحساب</p>
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

          <div className='group relative'>
            <p className='pointer-events-none absolute -top-2 right-0 left-0 w-fit items-center justify-center rounded-full bg-red-500 p-1 px-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100'>
              پرداخت موقتا غیر فعال میباشد
            </p>
            <Button className='mt-4 w-full bg-green-500 py-5 hover:bg-green-500/70'>
              پرداخت
            </Button>
          </div>
        </div>
      </div>
    </> );
}
 
export default CheckoutPage;