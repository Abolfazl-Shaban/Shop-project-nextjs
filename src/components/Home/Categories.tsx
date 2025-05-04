'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';

const Categories = () => {
  const { t } = useTranslation();

  return (
    <section className='container mx-auto mt-6'>
      <p className='text-center text-xl font-medium'>
        <Trans
          i18nKey='home.categoriesTitle'
          components={{ strong: <span className='text-primary-300 text-xl' /> }}
        />
      </p>
      <div className='mt-4 flex items-center justify-evenly'>
        <Link
          href={'/products?category=clothing'}
          className='flex-center hover:bg-primary-50 relative size-[74px] rounded-full border-2 p-4 transition-all lg:size-24'
        >
          <Image
            src={'/images/category/clothing.png'}
            alt='clothing'
            width={256}
            height={256}
          />
          <span className='text-dark-100 absolute -bottom-8 text-nowrap'>
            {t('home.categories.clothing')}
          </span>
        </Link>
        <Link
          href={'/products?category=kitchen'}
          className='flex-center hover:bg-primary-50 relative size-[70px] rounded-full border-2 p-4 transition-all lg:size-24'
        >
          <Image
            src={'/images/category/kitchen.png'}
            alt='kitchen'
            width={256}
            height={256}
          />
          <span className='text-dark-100 absolute -bottom-8 text-nowrap'>
            {t('home.categories.kitchen')}
          </span>
        </Link>
        <Link
          href={'/products?category=electric'}
          className='flex-center hover:bg-primary-50 relative size-[70px] rounded-full border-2 p-4 transition-all lg:size-24'
        >
          <Image
            src={'/images/category/electric.png'}
            alt='electric'
            width={256}
            height={256}
          />
          <span className='text-dark-100 absolute -bottom-8'>
            {t('home.categories.electric')}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
