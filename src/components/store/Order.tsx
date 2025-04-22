'use client';

import { LuLayers } from 'react-icons/lu';
import { Button } from '../ui/button';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const Order = ({
  updateParams,
  className
}: {
  updateParams: (key: string, value: string | number | undefined) => void;
  className? : string
}) => {
  const searchParams = useSearchParams();
  const order = searchParams.get('order') ?? 'newest';
  //   const [order, setOrder] = useState(searchParams.get('order') ?? 'popluar');
  return (
    <div className={cn(' flex w-full items-center gap-1 rounded-lg  ',className)}>
      <p className='flex items-center gap-1.5 text-sm font-medium'>
        <LuLayers /> ترتیب:
      </p>
      <div className='flex items-center gap-2 px-2'>
        <Button 
          onClick={() => {
            if (order != 'newest') {
              updateParams('order', 'newest');
            }
          }}
          variant={null}
          className={`${order == 'newest' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          جدیدترین
        </Button>
        <Button
          onClick={() => {
            if (order != 'popluar') {
              updateParams('order', 'popluar');
            }
          }}
          variant={null}
          className={`${order == 'popluar' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          محبوب‌ترین
        </Button>
        <Button
          onClick={() => {
            if (order != 'highPrice') {
              updateParams('order', 'highPrice');
            }
          }}
          variant={null}
          className={`${order == 'highPrice' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          گران‌ترین
        </Button>
        <Button
          onClick={() => {
            if (order != 'lowPrice') {
              updateParams('order', 'lowPrice');
            }
          }}
          variant={null}
          className={`${order == 'lowPrice' ? 'text-primary-300 font-medium' : 'font-normal'} cursor-pointer p-1`}
        >
          ارزان‌ترین
        </Button>
      </div>
    </div>
  );
};

export default Order;
