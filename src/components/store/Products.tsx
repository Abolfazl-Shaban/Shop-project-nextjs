import { useSearchParams } from 'next/navigation';
import { Product } from '../Product/Product.type';
import ProductCard from '../Product/ProductCard';
import ProductSkeleton from '../Product/ProductSkeleton';

const Products = ({ products }: { products: Product[] | undefined }) => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || undefined;
  const priceMax = searchParams.get('price_to') || undefined;
  const priceMin = searchParams.get('price_from') || undefined;
  const brands = searchParams.get('brands')?.split('_') || undefined;

  return (
    <div className='grid w-full gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {products ? (
        products
          .filter(
            (f) =>
              (!category || category == f.category) &&
              (!priceMin || Number(priceMin) <= f.price) &&
              (!priceMax || Number(priceMax) >= f.price) &&
              (!brands || brands.includes(f.brand!)),
          )
          .map((p) => <ProductCard className='grow' key={p.id} product={p} />)
      ) : (
        <>
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
