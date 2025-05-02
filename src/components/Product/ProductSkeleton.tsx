import { Skeleton } from '../ui/skeleton';

const ProductSkeleton = () => {
  return (
    <div className='relative mx-auto  h-[320px] w-[280px]  rounded-2xl border border-zinc-100 bg-white p-4 '>
      <Skeleton
        className='mx-auto h-7/12 w-full'
      />
      <Skeleton className='mt-4 w-3/4 h-3'/>
      <Skeleton className='mt-4 w-1/2 h-2'/>
      
    </div>
  );
};

export default ProductSkeleton;
