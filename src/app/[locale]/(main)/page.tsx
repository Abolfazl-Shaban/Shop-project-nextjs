import Categories from '@/components/Home/Categories';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import MoreProducts from '@/components/Home/MoreProducts';
import AdsSlider from '@/components/Home/AdsSlider';
import { SiteUrl } from '../../../../constant';
import { Metadata } from 'next';
import { getTranslation } from '@/i18n/i18n-server';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'صفحه اصلی',
    description:
      'خوش آمدید به فروشگاه آنلاین شاپ! بهترین محصولات با قیمت مناسب در دسترس شماست.',
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const sliderItems = await fetch(`${SiteUrl}/api/sliderItems`).then((res) =>
    res.json(),
  );
  const featuredProducts = await fetch(`${SiteUrl}/api/featuredProducts`).then(
    (res) => res.json(),
  );
  const products = await fetch(`${SiteUrl}/api/products`).then((res) =>
    res.json(),
  );
  
  const t = await getTranslation((await params).locale);

  return (
    <>
      <AdsSlider sliderItems={sliderItems} />
      <Categories />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <MoreProducts products={products.data} />
      <div className='container mx-auto flex flex-col gap-4 p-2 lg:px-[3%]'>
        <h3 className='text-dark-200 text-2xl font-medium'>{t('home.why-us-title')}</h3>
        <p className='text-dark-400 px-2 text-justify  leading-8 tracking-wide'>
        {t('home.why-us-body')}
        </p>
      </div>
    </>
  );
}
