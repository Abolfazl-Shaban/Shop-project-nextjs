

import { Product } from '../Product/Product.type';
import ProductSlider from '../Product/ProductSlider';



const FeaturedProducts = ({
  featuredProducts,
}: {
  featuredProducts: Product[] | null;
}) => {
  return (
    <section className='mt-16 px-[3%] pb-14 relative'>
      <div className='container mx-auto'>
        <h2 className='mb-3 text-2xl text-white'>
          محصولات <span className='text-2xl text-red-500'>ویژه</span>
        </h2>
        <ProductSlider products={featuredProducts} />
        <div className='bg-primary-100 absolute left-0 -top-4 -z-[1] h-[410px] lg:w-[97%] w-full lg:rounded-r-2xl p-5'></div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
