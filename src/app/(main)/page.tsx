'use server'

import Categories from '@/components/Home/Categories';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import MoreProducts from '@/components/Home/MoreProducts';
import { SiteUrl } from '../../../constant';
import AdsSlider from '@/components/Home/AdsSlider';

export default async function Home() {
  const sliderItems = await fetch(`${SiteUrl}/api/sliderItems`).then(res => res.json());
  const featuredProducts = await fetch(`${SiteUrl}/api/featuredProducts`).then(
    (res) => res.json(),
  );
  const products = await fetch(`${SiteUrl}/api/products`).then((res) =>
    res.json(),
  ) ;

  return (
    <>
      <AdsSlider sliderItems={sliderItems} />
      <Categories />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <MoreProducts products={products.data}  />
    </>
  );
}
