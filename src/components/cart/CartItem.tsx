'use client';
import Image from 'next/image';
import { Product } from '../Product/Product.type';
import { CalDiscount } from '@/app/utils/calDiscount';
import { productDetail } from '@/app/data/mockData';
import CartButton from './CartButton';
import { useTranslation } from 'react-i18next';
const CartItem = ({ product }: { product: Product }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className='flex w-full gap-4 border-b p-1 not-md:pb-8 lg:my-2 lg:rounded-xl lg:border lg:p-4'>
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
        <div className='mt-auto ml-1 flex items-center justify-center'>
          <CartButton product={product} />
        </div>
      </div>

      <div className='flex grow flex-col'>
        <div className='justify mt-auto flex flex-col'>
          <p className='my-1 text-lg font-medium'>
            {i18n.language === 'en' ? product.Ename : product.name}
          </p>
          <p className='text-dark-300 mt-1 text-xs'>
            {i18n.language === 'en'
              ? productDetail.Edescription
              : productDetail.description}
          </p>
        </div>
        <div className='mt-auto flex flex-wrap items-center gap-1 pt-2'>
          {product.discount > 0 && (
            <p className='mx-1 w-fit rounded-lg bg-red-500 p-0.5 px-2 text-sm text-white'>
              {product.discount}%
            </p>
          )}
          <div className='flex flex-wrap-reverse items-center gap-1 p-1 px-1.5 md:gap-2'>
            <p
              className={`${product.discount == 0 && 'hidden'} text-base font-semibold text-zinc-600`}
            >
              <span className='line-through'>
                {product.price.toLocaleString()}
              </span>
            </p>
            <p className={`line text-lg font-semibold`}>
              {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
              <span className='text-sm font-medium'>{t('global.toman')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
