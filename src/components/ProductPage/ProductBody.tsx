'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductDetail } from '../Product/ProductDetails.type';
import { Button } from '../ui/button';
import CommentCard from './CommentCard';

const ProductBody = ({ productDetails }: { productDetails: ProductDetail }) => {
  const { t, i18n } = useTranslation();
  const [tab, setTab] = useState<'description' | 'specifications' | 'comments'>(
    'description',
  );

  return (
    <div className='mt-8'>
      <div className='bg-primary-100/10 flex items-center gap-2 rounded-md p-2'>
        <Button
          variant={null}
          className={`${
            tab == 'description'
              ? 'bg-primary-100 text-white'
              : 'hover:bg-primary-100/65 hover:text-white'
          } rounded-md transition-all`}
          onClick={() => setTab('description')}
        >
          {t('product.description')}
        </Button>
        <Button
          variant={null}
          className={`${
            tab == 'specifications'
              ? 'bg-primary-100 text-white'
              : 'hover:bg-primary-100/65 hover:text-white'
          } rounded-md transition-all`}
          onClick={() => setTab('specifications')}
        >
          {t('product.specifications')}
        </Button>
        <Button
          variant={null}
          className={`${
            tab == 'comments'
              ? 'bg-primary-100 text-white'
              : 'hover:bg-primary-100/65 hover:text-white'
          } rounded-md transition-all`}
          onClick={() => setTab('comments')}
        >
          {t('product.comments')}
        </Button>
      </div>
      <div>
        {/* Description */}
        <div className={`${tab != 'description' && 'hidden'} p-5`}>
          <p className='text-dark-300 text-sm'>
            {i18n.language === 'en'
              ? productDetails.Edescription
              : productDetails.description}
          </p>
        </div>
        {/* Specifications */}
        <div className={`${tab != 'specifications' && 'hidden'} p-3`}>
          {productDetails.specifications.map((r, index) => (
            <div
              className='bg-primary-50/5 my-4 flex flex-col gap-2 rounded-lg p-4'
              key={index}
            >
              <p className='text-dark-200 text-lg font-medium not-lg:text-base'>
                {i18n.language === 'en' ? t(r.Etitle) : t(r.title)}:
              </p>
              <p className='text-dark-300 text-sm'>{r.value}</p>
            </div>
          ))}
        </div>
        {/* Comments */}
        <div className={`${tab != 'comments' && 'hidden'} p-3`}>
          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
