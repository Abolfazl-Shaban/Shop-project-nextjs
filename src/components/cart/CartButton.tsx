'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '../ui/button';
import { Product } from '../Product/Product.type';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CartButton = ({ product }: { product: Product }) => {
  const context = useCart();
  const {t} = useTranslation();


  const item = context?.getCartItems().find((r) => r.product.id == product.id);

  return (
    <>
      {context
        ?.getCartItems()
        ?.find((item) => item.product.id == product.id) ? (
        <div className='flex items-stretch gap-1'>
          <div className='flex items-center gap-1 overflow-hidden rounded-lg border'>
            <Button
              onClick={() => {
                context?.addToCart(product);
              }}
              variant={null}
              className='h-full cursor-pointer'
            >
              <Plus className='size-5' />
            </Button>
            <p className='px-1 text-lg font-semibold'>{item?.quantity}</p>
            <Button
              onClick={() => {
                context?.removeFromCart(product);
              }}
              variant={null}
              className='h-full cursor-pointer'
            >
              {item && item?.quantity > 1 ? (
                <Minus className='size-5' />
              ) : (
                <Trash2 className='size-5' />
              )}
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
          {t('shop.add-to-cart')}
        </Button>
      )}
    </>
  );
};

export default CartButton;
