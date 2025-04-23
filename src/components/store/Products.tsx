import { Product } from '../Product/Product.type';
import ProductSkeleton from '../Product/ProductSkeleton';
import ProductCardStore from '../Product/ProductCardStore';

const Products = ({ products }: { products: Product[] | undefined }) => {

  return (
    <div className='grid w-full gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {products ? (
        products.map((p) => (
          <ProductCardStore className='grow' key={p.id} product={p} />
        ))
      ) : (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      )}
    </div>
  );
};

export default Products;
