'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from './Product.type';
import ProductCard from './ProductCard';
import { Autoplay } from 'swiper/modules';
import ProductSkeleton from './ProductSkeleton';

import 'swiper/css';

const ProductSlider = ({ products }: { products: Product[] | null }) => {
  return (
    <div className='flex items-center gap-2'>
      <Swiper
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 3000
        }}
        breakpoints={{
          400: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        className='w-full p-2'
      >
        {products ? (
          products.map((p) => (
            <SwiperSlide key={p.id} className='mx-auto p-1'>
              <ProductCard className='mx-auto ' product={p} />
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
