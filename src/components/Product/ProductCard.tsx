'use client'
import Image from 'next/image';
import { Product } from './Product.type';
import { Button } from '../ui/button';
import { CalDiscount } from '@/app/utils/calDiscount';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ProductCard = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const {t, i18n} = useTranslation();
  return (
    <div
      className={cn(
        `relative flex h-[320px] max-w-[340px] min-w-[260px] flex-col items-start rounded-lg border border-zinc-200 bg-white p-4 pt-1 shadow`,
        className,
      )}
    >
      <Link
        className='mx-auto my-auto h-7/12 w-auto'
        href={`/products/${product.id}`}
      >
        <Image
          className='h-full w-full'
          src={product.image}
          alt={product.name}
          width={512}
          height={512}
        />
      </Link>
      <h2 className='text-lg font-normal'>{i18n.language == 'en' ? product.Ename : product.name}</h2>
      <p
        className={`${(!product.discount || product.discount == 0) && 'hidden'} text-dark-100 line mt-1 text-lg`}
      >
        {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
        <span className='text-sm font-medium'>{t('global.toman')}</span>
      </p>
      <p
        className={`${product.discount && product.discount > 0 ? 'text-base text-zinc-600' : 'mt-4 text-lg'} `}
      >
        <span
          className={`${product.discount && product.discount > 0 && 'line-through'} `}
        >
          {product.price.toLocaleString()}
        </span>
        <span className='text-sm font-medium'> {t('global.toman')}</span>
      </p>
      <Button
        variant={'outline'}
        className='hover:bg-primary-200 mt-auto ms-auto hover:text-white'
      >
        {t('global.view')}
      </Button>
      {product.discount > 0 && (
        <p className='absolute top-4 start-4 w-fit rounded-lg bg-red-500 p-0.5 px-1 text-sm text-white'>
          {product.discount}% {t('global.discount')}
        </p>
      )}

      {product.rating && (
        <p className='flex-center absolute top-6/12 end-2 gap-1 rounded-full border border-zinc-100 bg-white p-1 px-2 text-sm'>
          {product.rating}
          <Star fill='#FA8618' className='text-primary-100' size={24} />
        </p>
      )}
    </div>
  );
};

export default ProductCard;
