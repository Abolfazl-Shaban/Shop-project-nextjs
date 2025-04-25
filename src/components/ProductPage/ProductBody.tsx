'use client';
import { useState } from 'react';
import { ProductDetail } from '../Product/ProductDetails.type';
import { Button } from '../ui/button';
import CommentCard from './CommentCard';

const ProductBody = ({ productDetails }: { productDetails: ProductDetail }) => {
  const [tab, setTab] = useState<'description' | 'specifications' | 'comments'>(
    'description',
  );

  return (
    <div className='mt-8'>
      <div className='bg-primary-100/10 flex gap-2 items-center rounded-md p-2'>
        <Button
          variant={null}
          className={`${tab == 'description' ? 'bg-primary-100 text-white' : 'hover:bg-primary-100/65 hover:text-white'} rounded-md transition-all`}
          onClick={() => setTab('description')}
        >
          توضیحات
        </Button>
        <Button
          variant={null}
          className={`${tab == 'specifications' ? 'bg-primary-100 text-white' : 'hover:bg-primary-100/65 hover:text-white'} rounded-md transition-all`}
          onClick={() => setTab('specifications')}
        >
          مشخصات فنی
        </Button>
        <Button
          variant={null}
          className={`${tab == 'comments' ? 'bg-primary-100 text-white' : 'hover:bg-primary-100/65 hover:text-white'} rounded-md transition-all`}
          onClick={() => setTab('comments')}
        >
          نظرات
        </Button>
      </div>
      <div>
        {/* Desc */}
        <div className={`${tab != 'description' && 'hidden'} p-5`}>
          <p className=' text-dark-300'>{productDetails.description}</p>
        </div>
        {/* spec */}
        <div className={`${tab != 'specifications' && 'hidden'} p-3 `}>
          {productDetails.specifications.map((r,index) => <div className='bg-primary-50/5 rounded-lg p-4 flex flex-col my-4 gap-2' key={index}>
                <p className='text-lg font-medium  text-dark-200'>{r.title}:</p>
                <p className=' text-sm text-dark-300'>{r.value}</p>
          </div> )}
        </div>
        {/* comments */}
        <div className={`${tab != 'comments' && 'hidden'} p-3`}>
         <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
