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

const ProductInfo = async ({ params }: { params: { id: string } }) => {
  const [product, productDetails]: [Product, ProductDetail] = await Promise.all(
    [
      fetch(`${SiteUrl}/api/products/${params.id}`).then((res) => res.json()),
      fetch(`${SiteUrl}/api/productdetails`).then((res) => res.json()),
    ],  
  );
console.log(product);

  if(!product){
    return <div className='flex items-center justify-center h-[70vh]'>
      <div>
        <p className='text-xl font-semibold'>محصول مورد نظر پیدا نشد!</p>
        <p className='mt-1'>میتوانید به صفحه فروشگاه بروید</p>
        <Link href={'/products'}  className='block mt-3'>
        <Button>
          بازگشت
        </Button>
        </Link>
      </div>
    </div>
  }

  return (
    <div className='container mx-auto my-24 p-5'>
      <div className='relative my-8 flex gap-8'>
        <div className='grow'>
          <div className='flex items-center justify-between rounded-xl border border-zinc-300 px-6 py-8'>
            <div>
              <h2 className='text-xl font-medium'>{product?.name}</h2>
              <p className='text-dark-300 mt-2 text-sm'>
                {productDetails.description}
              </p>
              <p className='my-4 flex items-center gap-1 font-[vazir]'>
                <Star fill='#FA8618' className='text-primary-100' size={24} />
                {product?.rating}
              </p>
              <hr className='my-4 w-[120px] border-zinc-300' />
              <p className='text-sm font-medium'>
                نظرات کاربران{' '}
                <span className='text-primary-100 font-[vazir]'>
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
        <div className='sticky top-20 h-fit w-1/4 rounded-xl border-zinc-100 p-6 shadow-[0_0_15px_-2px_#bbb]'>
          <h2 className='text-lg font-medium'>{product.name}</h2>
          {product.discount > 0 && (
            <p className='mx-1 mr-auto w-fit rounded-lg bg-red-500 p-0.5 px-2 font-[vazir] text-sm text-white'>
              {product.discount}% تخفیف
            </p>
          )}
          <div className='flex items-center justify-end gap-2 p-2 px-1.5'>
            <p
              className={`${product.discount == 0 && 'hidden'} font-[vazir] text-base font-semibold text-zinc-600`}
            >
              <span className='font-[vazir] line-through'>
                {product.price.toLocaleString()}
              </span>
            </p>
            <p
              className={`${product.discount > 0 && ''} line font-[vazir] text-xl font-semibold`}
            >
              {CalDiscount(product.price, product.discount).toLocaleString()}{' '}
              <span className='text-sm font-medium'>تومان</span>
            </p>
          </div>
          <Button className='relative w-full cursor-pointer py-6 font-medium'>
            افزورن به سبد خرید
          </Button>
        </div>
      </div>
      <hr className='mx-auto mt-24 w-2/3 border-zinc-400' />
      <div className='mt-8'>
        <p className='my-3 text-xl font-medium'>محصولات مرتبط</p>
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
