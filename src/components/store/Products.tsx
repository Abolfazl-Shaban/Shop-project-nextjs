import { useSearchParams } from 'next/navigation';
import { Product } from '../Product/Product.type';
import ProductCard from '../Product/ProductCard';
import ProductSkeleton from '../Product/ProductSkeleton';
import { useMemo } from 'react';
import ProductCardStore from '../Product/ProductCardStore';

const Products = ({ products }: { products: Product[] | undefined }) => {
  const searchParams = useSearchParams();

  const order = searchParams.get('order') ?? 'newest';

  const category = searchParams.get('category') || undefined;
  const priceMax = searchParams.get('price_to') || undefined;
  const priceMin = searchParams.get('price_from') || undefined;
  const brands = searchParams.get('brands')?.split('_') || undefined;

  const filteredProducts = useMemo(() => {
    const filtered = products?.filter(
      (f) =>
        (!category || category == f.category) &&
        (!priceMin || Number(priceMin) <= f.price) &&
        (!priceMax || Number(priceMax) >= f.price) &&
        (!brands || brands.includes(f.brand!)),
    );

    switch (order) {
      case 'newest':
        return filtered?.sort((a, b) => a.id - b.id);
      case 'lowPrice':
        return filtered?.sort((a, b) => a.price - b.price);
      case 'highPrice':
        return filtered?.sort((a, b) => b.price - a.price);
      case 'popluar':
        return filtered?.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [products, order, category, priceMin, priceMax, brands]);

  console.log('Products re-rendered');

  return (
    <div className='grid w-full gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {filteredProducts ? (
        filteredProducts.map((p) => (
          <ProductCardStore className='grow' key={p.id} product={p} />
        ))
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
