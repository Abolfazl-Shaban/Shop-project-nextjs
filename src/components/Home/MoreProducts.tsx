'use client';

import { Trans } from 'react-i18next';
import { Product } from '../Product/Product.type';
import ProductSlider from '../Product/ProductSlider';
const MoreProducts = ({ products }: { products: Product[] | null }) => {
  return (
    <section className='container mx-auto mt-10 px-[3%] pb-14'>
      <h2 className='mb-3 text-2xl'>
        <Trans
          i18nKey='home.popular-products'
          components={{ highlight: <span className='text-primary-300' /> }}
        />
      </h2>
      <ProductSlider products={products} />
    </section>
  );
};

export default MoreProducts;
