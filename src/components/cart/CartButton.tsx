'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '../ui/button';
import { Product } from '../Product/Product.type';
import { ArrowLeft, Minus, MoveLeft, Plus, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CartButton = ({ product }: { product: Product }) => {
  const context = useCart();
  const router = useRouter();

  const item = context?.getCartItems().find((r) => r.product.id == product.id);

  return (
    <>
      {context
        ?.getCartItems()
        ?.find((item) => item.product.id == product.id) ? (
        <div className='flex items-stretch gap-1'>
          <div className='flex gap-1 items-center border rounded-lg overflow-hidden'>
            <Button
              onClick={() => {
                context?.addToCart(product);
              }}
              variant={null}
              className='cursor-pointer h-full'
            >
              <Plus className='size-5' />
            </Button>
            <p className='font-[vazir] font-semibold text-lg px-1'>{item?.quantity}</p>
            <Button
              onClick={() => {
                context?.removeFromCart(product);
              }}
              variant={null}
              className='cursor-pointer h-full'
            >
              {item && item?.quantity > 1 ? <Minus className='size-5' /> : <Trash2 className='size-5' />}
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            context?.addToCart(product);
          }}
          className='border-primary-100 relative w-full cursor-pointer border-2 py-6 font-medium'
        >
          افزورن به سبد خرید
        </Button>
      )}
    </>
  );
};

export default CartButton;
