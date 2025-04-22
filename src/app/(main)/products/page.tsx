'use client';

import { axiosInstance } from '@/app/service/axios';
import { Product } from '@/components/Product/Product.type';
import Filter from '@/components/store/Filter';
import Order from '@/components/store/Order';
import Products from '@/components/store/Products';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LucideFilter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [categories, setCategories] = useState(undefined);
  const [brands, setBrands] = useState(undefined);

  const searchParams = useSearchParams();
  const router = useRouter();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const updateParams = useCallback(
    (key: string, value: string | number | undefined) => {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }

      router.push(`/products?${params.toString()}`);
    },
    [params, router],
  );

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const [cats, brs, prods] = await Promise.all([
        axiosInstance.get('/products/categories'),
        axiosInstance.get('/products/brands'),
        axiosInstance.get('/products'),
      ]);
      setCategories(cats.data);
      setBrands(brs.data);
      setProducts(prods.data);
    }
  }, []);

  return (
    <>
      <div className='relative container mx-auto my-24 flex items-stretch gap-6 p-5'>
        <div className='sticky top-20 h-[400px] w-[280px] rounded-lg border not-md:hidden'>
          {products && (
            <Filter
              categories={categories}
              brands={brands}
              products={products}
              updateParams={updateParams}
            />
          )}
        </div>
        <div className='grow'>
          <div className='mb-2 flex items-center gap-2'>
            <Sheet>
              <SheetTrigger className='md:hidden'>
                <div className='bg-primary-100 rounded-lg text-sm font-medium flex gap-2 items-center text-white p-3'>
                <LucideFilter className='size-7' />
                <span className=''>فیلتر ها</span>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle />
                {products && (
                  <Filter
                    categories={categories}
                    brands={brands}
                    products={products}
                    updateParams={updateParams}
                  />
                )}
              </SheetContent>
            </Sheet>
            <Order className='not-md:hidden bg-zinc-100 p-3' updateParams={updateParams} />
          </div>
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
