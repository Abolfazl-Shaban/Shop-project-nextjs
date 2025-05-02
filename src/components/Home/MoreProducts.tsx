'use client';

import { useTranslation } from 'react-i18next';
import { Product } from '../Product/Product.type';
import ProductSlider from '../Product/ProductSlider';

const MoreProducts = ({ products }: { products: Product[] | null }) => {
  const { t } = useTranslation();
  return (
    <section className='container mx-auto mt-10 px-[3%] pb-14'>
      {t('header.search')}
      {/* <Button onClick={() => i18n.changeLanguage('en')}>تغییر زبان</Button> */}
      <h2 className='mb-3 text-2xl'>
        محصولات <span className='text-primary-300'>محبوب</span>
      </h2>
      <ProductSlider products={products} />
    </section>
  );
};

export default MoreProducts;
