'use client';

import Image from 'next/image';
import { Product } from './Product.type';
import { Button } from '../ui/button';
import { CalDiscount } from '@/app/utils/calDiscount';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const ProductCardStore = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  return (
    <div
      className={cn(
        `relative flex h-[180px] min-w-[260px] flex-row-reverse items-start border-b border-zinc-200 bg-white p-4 pt-1 not-md:w-full md:h-[320px] md:flex-col md:rounded-lg md:border md:shadow`,
        className,
      )}
    >
      <Link
        href={`/products/${product.id}`}
        className='mx-auto my-auto w-auto not-md:relative not-md:w-[150px] md:h-7/12'
      >
        <Image
          priority={true}
          className='h-full w-full'
          src={product.image}
          alt={product.name}
          width={512}
          height={512}
        />
        <p className='flex-center absolute end-1/3 bottom-8 h-fit w-fit gap-1 rounded-full border border-zinc-100 bg-white p-1 px-2 text-sm not-md:-start-8 not-md:bottom-0 md:end-2 md:top-6/12'>
          {product.rating}
          <Star fill='#FA8618' className='text-primary-100' size={24} />
        </p>
      </Link>
      <div className='flex h-full grow flex-col justify-center md:w-full'>
        <Link href={`/products/${product.id}`}>
          <h2 className='text-lg font-normal'>
            {i18n.language == 'en' ? product.Ename : product.name}
          </h2>
        </Link>
        <p
          className={`${product.discount > 0 && ''} text-dark-100 line mt-4 text-lg`}
        >
          {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
          <span className='text-sm font-medium'>{t('global.toman')}</span>
        </p>
        <p
          className={`${product.discount == 0 && 'hidden'} text-base text-zinc-600`}
        >
          <span className='line-through'>{product.price.toLocaleString()}</span>
          <span className='text-sm font-medium'> {t('global.toman')}</span>
        </p>
        <Link href={`/products/${product.id}`} className='ms-auto mt-auto'>
          <Button
            onClick={() => router.push(`/products/${product.id}`)}
            variant={'outline'}
            className='hover:bg-primary-200 not-md:hidden hover:text-white'
          >
            {t('global.view')}
          </Button>
        </Link>
        {product.discount > 0 && (
          <p className='absolute end-1 top-4 w-fit rounded-lg bg-red-500 p-0.5 px-1 text-sm text-white md:start-4'>
            {product.discount}% {t('global.discount')}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCardStore;
