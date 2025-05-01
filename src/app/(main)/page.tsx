'use server';

import Categories from '@/components/Home/Categories';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import MoreProducts from '@/components/Home/MoreProducts';
import { SiteUrl } from '../../../constant';
import AdsSlider from '@/components/Home/AdsSlider';

export default async function Home() {
  const sliderItems = await fetch(`${SiteUrl}/api/sliderItems`).then((res) =>
    res.json(),
  );
  const featuredProducts = await fetch(`${SiteUrl}/api/featuredProducts`).then(
    (res) => res.json(),
  );
  const products = await fetch(`${SiteUrl}/api/products`).then((res) =>
    res.json(),
  );

  return (
    <>
      <AdsSlider sliderItems={sliderItems} />
      <Categories />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <MoreProducts products={products.data} />
      <div className='container mx-auto flex flex-col gap-4 p-2 lg:px-[3%]'>
        <h3 className='text-2xl text-dark-200 font-medium'>چرا ما؟</h3>
        <p className='text-dark-400 text-justify  px-2 leading-8 texts tracking-wide  '>
          در دنیای شلوغ خریدهای آنلاین، ما تلاش کرده‌ایم تجربه‌ای متفاوت و قابل
          اعتماد برای شما بسازیم.  با ارائه محصولاتی متنوع، کیفیت بالا، قیمت‌های
          منصفانه و پشتیبانی واقعی، هدف ما فقط فروش نیست، بلکه رضایت و آرامش
          خاطر شماست. ما به جزئیات اهمیت می‌دهیم، از بسته‌بندی تا تحویل. <br />اینجا
          جایی‌ست که می‌توانید با اطمینان انتخاب کنید، راحت خرید کنید و همیشه
          پشتیبانی شوید.
        </p>
      </div>
    </>
  );
}
