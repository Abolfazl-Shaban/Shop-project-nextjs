'use client';
import Image from 'next/image';
import { Product } from '../Product/Product.type';
import { CalDiscount } from '@/app/utils/calDiscount';
import { productDetail } from '@/app/data/mockData';
import CartButton from './CartButton';
const CartItem = ({ product }: { product: Product }) => {
  return (
    <div className=' gap-4 flex lg:rounded-xl border-b lg:border w-full p-1 not-md:pb-8 lg:p-4 lg:my-2'>
      <div>
        <div className='flex-center w-[150px]'>
          <Image
            className='h-auto w-full'
            priority
            src={product.image}
            alt={product.name}
            height={1024}
            width={1024}
          />
        </div>
        <div className='mt-auto justify-center ml-1 flex items-center '>
          <CartButton product={product} />
        </div>
      </div>

      <div className='flex grow flex-col'>
        <div className='flex mt-auto justify flex-col'>
          <p className=' text-lg my-1 font-medium'>{product.name}</p>
          <p className='text-dark-300 mt-1 text-xs'>
            {productDetail.description}
          </p>
        </div>
        <div className='mt-auto pt-2 flex flex-wrap items-center gap-1'>
          {product.discount > 0 && (
            <p className='mx-1 w-fit rounded-lg bg-red-500 p-0.5 px-2 font-[vazir] text-sm text-white'>
              {product.discount}%
            </p>
          )}
          <div className='flex flex-wrap-reverse items-center gap-1 md:gap-2 p-1 px-1.5'>
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
      </div>
    </div>
  );
};

export default CartItem;
