import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
  return (
    <section className='mt-6 container mx-auto'>
      <p className='text-center text-xl font-medium'>دسته بندی های <span className='text-xl text-primary-300'>مجبوب</span></p>
      <div className='flex items-center justify-evenly mt-4'>
        <Link
          href={'/products#category=clothing'}
          className='flex-center hover:bg-primary-50 relative size-[74px] lg:size-24 rounded-full border-2 p-4 transition-all'
        >
          <Image
            className=''
            src={'/images/category/clothing.png'}
            alt='clothing'
            width={256}
            height={256}
          />
          <span className='text-dark-100 absolute -bottom-8 text-nowrap'>پوشاک</span>
        </Link>
        <Link
          href={'/products#category=kitchen'}
          className='flex-center hover:bg-primary-50 relative size-[70px] lg:size-24 rounded-full border-2 p-4 transition-all'
        >
          <Image
            className=''
            src={'/images/category/kitchen.png'}
            alt='kitchen'
            width={256}
            height={256}
          />
          
          <span className='text-dark-100 absolute -bottom-8  text-nowrap'>خانه و اشپزخانه</span>
        </Link>
        <Link
          href={'/products#category=electric'}
          className='flex-center hover:bg-primary-50 relative size-[70px] lg:size-24 rounded-full border-2 p-4 transition-all'
        >
          <Image
            className=''
            src={'/images/category/electric.png'}
            alt='electric'
            width={256}
            height={256}
          />
          <span className='text-dark-100 absolute -bottom-8'>الکترونیکی</span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
