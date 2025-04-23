'use client';

import AdsSlider from '@/components/Home/AdsSlider';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../service/axios';
import Categories from '@/components/Home/Categories';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import MoreProducts from '@/components/Home/MoreProducts';

export default function Home() {
  const [sliderItems, setSliderItems] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    featchData();
    async function featchData() {
      setFeaturedProducts((await axiosInstance.get('/featuredProducts')).data);
      setSliderItems((await axiosInstance.get('/sliderItems')).data);
      setProducts((await axiosInstance.get('/products')).data.data);
    }
  }, []);

  return (
    <>
      <AdsSlider sliderItems={sliderItems} />
      <Categories />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <MoreProducts products={products}  />
    </>
  );
}
