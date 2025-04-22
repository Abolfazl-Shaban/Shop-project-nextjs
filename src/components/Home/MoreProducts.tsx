import { Product } from '../Product/Product.type';
import ProductSlider from '../Product/ProductSlider';

const MoreProducts = ({
  products,
}: {
  products: Product[] | null;
}) => {
  return (
    <section className='mt-10 px-[3%] pb-14 container mx-auto'>
      <h2 className='mb-3 text-2xl'>محصولات <span className='text-primary-300'>محبوب</span></h2>
      <ProductSlider products={products} />
    </section>
  );
};

export default MoreProducts;
