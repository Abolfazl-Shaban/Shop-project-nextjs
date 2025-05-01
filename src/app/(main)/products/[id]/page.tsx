import { Product } from '@/components/Product/Product.type';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { SiteUrl } from '../../../../../constant';
import { ProductDetail } from '@/components/Product/ProductDetails.type';
import ProductGallery from '@/components/ProductPage/ProductGallery.';
import { CalDiscount } from '@/app/utils/calDiscount';
import ProductBody from '@/components/ProductPage/ProductBody';
import ProductSlider from '@/components/Product/ProductSlider';
import Link from 'next/link';
import ProductCartButton from '@/components/ProductPage/ProductCartButton';

const ProductInfo = async ({ params }: { params: { id: string } }) => {
  const [product, productDetails]: [Product, ProductDetail] = await Promise.all(
    [
      fetch(`${SiteUrl}/api/products/${params.id}`).then((res) => res.json()),
      fetch(`${SiteUrl}/api/productdetails`).then((res) => res.json()),
    ],
  );

  if (!product) {
    return (
      <div className='flex h-[70vh] items-center justify-center'>
        <div>
          <p className='text-xl font-semibold'>محصول مورد نظر پیدا نشد!</p>
          <p className='mt-1'>میتوانید به صفحه فروشگاه بروید</p>
          <Link href={'/products'} className='mt-3 block'>
            <Button>بازگشت</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto lg:my-24'>
      <div className='relative flex gap-8 lg:my-8'>
        <div className='grow'>
          <div className='flex items-center justify-between rounded-xl border-zinc-300 px-6 py-8 not-lg:flex-col-reverse lg:border'>
            <div>
              <h2 className='text-xl font-medium'>{product?.name}</h2>
              <p className='text-dark-300 mt-2 text-sm'>
                {productDetails.description}
              </p>
              <p className='my-4 flex items-center gap-1'>
                <Star fill='#FA8618' className='text-primary-100' size={24} />
                {product?.rating}
              </p>
              <hr className='my-4 w-[120px] border-zinc-300' />
              <p className='text-sm font-medium'>
                نظرات کاربران{' '}
                <span className='text-primary-100'>
                  {productDetails?.reviewCount} نظر
                </span>
              </p>
            </div>
            <div className='w-[300px]'>
              <ProductGallery
                images={[product.image, ...productDetails.images]}
              />
            </div>
          </div>
          <ProductBody productDetails={productDetails} />
        </div>
        {/* side bar*/}
        <div className='fixed bottom-0 left-0 z-[2] h-fit w-full border-zinc-300 bg-white p-3 not-lg:border-t not-lg:px-5 lg:sticky lg:top-20 lg:w-1/4 lg:rounded-xl lg:shadow-[0_0_15px_-2px_#bbb]'>
          <h2 className='text-base font-medium not-lg:hidden'>
            {product.name}
          </h2>
          <div className='mr-auto flex items-center justify-end gap-2 pb-2 lg:flex-col lg:items-end'>
            {product.discount > 0 && (
              <p className='mx-1 w-fit rounded-lg bg-red-500 p-0.5 px-2 text-sm text-white'>
                {product.discount}%<span className='not-lg:hidden'> تخفیف</span>
              </p>
            )}
            <div className='flex items-center gap-2 p-1 px-1.5'>
              <p
                className={`${product.discount == 0 && 'hidden'} text-base font-semibold text-zinc-600`}
              >
                <span className='line-through'>
                  {product.price.toLocaleString()}
                </span>
              </p>
              <p
                className={`${product.discount > 0 && ''} line text-lg font-semibold`}
              >
                {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
                <span className='text-sm font-medium'>تومان</span>
              </p>
            </div>
          </div>
          <ProductCartButton product={product} />
        </div>
      </div>
      <hr className='mx-auto mt-24 w-2/3 border-zinc-400' />
      <div className='mt-8'>
        <p className='my-3 px-2 text-xl font-medium'>محصولات مرتبط</p>
        <div>
          <ProductSlider
            products={productDetails.relatedProducts as Product[]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
