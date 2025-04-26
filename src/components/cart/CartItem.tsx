'use client';
import Image from 'next/image';
import { Product } from '../Product/Product.type';
import { CalDiscount } from '@/app/utils/calDiscount';
import { productDetail } from '@/app/data/mockData';
import ProductCartButton from '../ProductPage/ProductCartButton';
import CartButton from './CartButton';
const CartItem = ({ product }: { product: Product }) => {
  return (
    <div className='m-2 flex items-center rounded-xl border p-4'>
      <div className='grow '>
        <p className='text-lg font-medium'>{product.name}</p>
        <p className='mt-1 text-dark-300 text-xs'>{productDetail.description}</p>

<div className=' flex items-center gap-2 mt-5'>

        <div className='flex items-center gap-2'>
          {product.discount > 0 && (
              <p className='mx-1 w-fit rounded-lg bg-red-500 p-0.5 px-2 font-[vazir] text-sm text-white'>
              {product.discount}%
            </p>
          )}
          <div className='flex items-center gap-2 p-1 px-1.5'>
            <p
              className={`${product.discount == 0 && 'hidden'} font-[vazir] text-base font-semibold text-zinc-600`}
              >
              <span className='font-[vazir] line-through'>
                {product.price.toLocaleString()}
              </span>
            </p>
            <p className={`line font-[vazir] text-lg font-semibold`}>
              {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
              <span className='text-sm font-medium'>تومان</span>
            </p>
          </div>
        </div>

          <CartButton product={product} />
                </div>
      </div>
      <div className='flex-center w-[200px]'>
        <Image
          className='h-auto w-full'
          priority
          src={product.image}
          alt={product.name}
          height={1024}
          width={1024}
        />
      </div>
    </div>
  );
};

export default CartItem;
