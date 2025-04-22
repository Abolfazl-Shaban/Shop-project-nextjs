import Image from 'next/image';
import { Product } from './Product.type';
import { Button } from '../ui/button';
import { CalDiscount } from '@/app/utils/calDiscount';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const ProductCard = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `relative flex h-[320px] min-w-[260px] flex-col items-start rounded-lg border border-zinc-200 bg-white p-4 pt-1 shadow`,
        className,
      )}
    >
      <Image
        className='mx-auto h-7/12 w-auto'
        src={product.image}
        alt={product.name}
        width={512}
        height={512}
      />
      <h2 className='text-lg font-normal'>{product.name}</h2>
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
        className='hover:bg-primary-200 mt-auto mr-auto hover:text-white'
      >
        مشاهده
      </Button>
      {product.discount > 0 && (
        <p className='absolute top-4 w-fit right-4 rounded-lg bg-red-500 p-0.5 px-1 font-[vazir] text-sm text-white'>
          {product.discount}% تخفیف
        </p>
      )}
      <p className='flex-center gap-1 font-[vazir] text-sm absolute top-6/12 left-2 bg-white p-1 px-2 border border-zinc-100 rounded-full'>
         {product.rating}
        <Star fill='#FA8618' className='text-primary-100' size={24} />
      </p>
    </div>
  );
};

export default ProductCard;
