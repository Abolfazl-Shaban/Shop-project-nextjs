'use client'
import { Trans } from 'react-i18next';
import { Product } from '../Product/Product.type';
import ProductSlider from '../Product/ProductSlider';

const FeaturedProducts = ({
  featuredProducts,
}: {
  featuredProducts: Product[] | null;
}) => {
  return (
    <section className='relative mt-16 px-[3%] pb-14'>
      <div className='container mx-auto'>
        <h2 className='mb-3 text-2xl text-white'>
          <Trans
            i18nKey='home.specialProductsTitle'
            components={{
              highlight: <span className='text-2xl text-red-500' />,
            }}
          />
        </h2>
        <ProductSlider products={featuredProducts} />
        <div className='bg-primary-100 absolute -top-4 left-0 -z-[1] h-[410px] w-full p-5 lg:w-[97%] lg:rounded-r-2xl'></div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
