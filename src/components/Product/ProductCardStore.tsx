import Image from 'next/image';
import { Product } from './Product.type';
import { Button } from '../ui/button';
import { CalDiscount } from '@/app/utils/calDiscount';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const ProductCardStore = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `relative flex md:h-[320px] min-w-[260px] md:flex-col items-start md:rounded-lg md:border border-b border-zinc-200 bg-white p-4 pt-1 md:shadow h-[180px] not-md:w-full flex-row-reverse`,
        className,
      )}
    >
      <Image
        className='mx-auto md:h-7/12  not-md:w-2/5 w-auto my-auto'
        src={product.image}
        alt={product.name}
        width={512}
        height={512}
      />
      <div className='grow flex flex-col md:w-full h-full justify-center'>
        <h2 className='text-lg font-normal '>{product.name}</h2>
        <p
          className={`${product.discount > 0 && ''} text-dark-100 line mt-4 font-[vazir] text-lg`}
        >
          {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
          <span className='text-sm font-medium'>تومان</span>
        </p>
        <p
          className={`${product.discount == 0 && 'hidden'} font-[vazir] text-base text-zinc-600`}
        >
          <span className='font-[vazir] line-through'>
            {product.price.toLocaleString()}
          </span>
          <span className='text-sm font-medium'> تومان</span>
        </p>
        <Button
          variant={'outline'}
          className='hover:bg-primary-200 mt-auto mr-auto not-md:hidden hover:text-white'
        >
          مشاهده
        </Button>
        {product.discount > 0 && (
          <p className='absolute w-fit top-4 md:right-4 left-1 rounded-lg bg-red-500 p-0.5 px-1 font-[vazir] text-sm text-white'>
            {product.discount}% تخفیف
          </p>
        )}
        <p className='flex-center h-fit w-fit absolute md:top-6/12 md:left-2 bottom-8 left-1/3 gap-1 rounded-full border border-zinc-100 bg-white p-1 px-2 font-[vazir] text-sm'>
          {product.rating}
          <Star fill='#FA8618' className='text-primary-100' size={24} />
        </p>
      </div>
    </div>
  );
};

export default ProductCardStore;
