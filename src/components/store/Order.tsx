'use client';

import { LuLayers } from 'react-icons/lu';
import { Button } from '../ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { updateParams } from '@/app/utils/updateParams';
import { useTranslation } from 'react-i18next';

const Order = ({
  className
}: {
  className? : string
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const order = searchParams.get('order') ?? 'newest';
  const {t} = useTranslation();
  return (
    <div className={cn(' flex w-full items-center gap-1 rounded-lg  ',className)}>
      <p className='flex items-center gap-1.5 text-sm font-medium'>
        <LuLayers size={18} /> {t('shop.sort')}:
      </p>
      <div className='flex flex-wrap items-center gap-2 gap-y-0 px-2'>
        <Button 
          onClick={() => {
            if (order != 'newest') {
              updateParams('order', 'newest',params,router);
            }
          }}
          variant={null}
          className={`${order == 'newest' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          {t('shop.sorts.newest')}
        </Button>
        <Button
          onClick={() => {
            if (order != 'popluar') {
              updateParams('order', 'popluar',params,router)
            }
          }}
          variant={null}
          className={`${order == 'popluar' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          {t('shop.sorts.popular')}
        </Button>
        <Button
          onClick={() => {
            if (order != 'highPrice') {
              updateParams(
                'order',
                'highPrice',
                params,
                router,
              );
            }
          }}
          variant={null}
          className={`${order == 'highPrice' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          {t('shop.sorts.expensive')}
        </Button>
        <Button
          onClick={() => {
            if (order != 'lowPrice') {
              updateParams(
                'order',
                'lowPrice',
                params,
                router,
              );
            }
          }}
          variant={null}
          className={`${order == 'lowPrice' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          
          {t('shop.sorts.cheapest')}
        </Button>
      </div>
    </div>
  );
};

export default Order;
