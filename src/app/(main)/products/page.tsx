'use client';

import { axiosInstance } from '@/app/service/axios';
import { Product } from '@/components/Product/Product.type';
import Filter from '@/components/store/Filter';
import Order from '@/components/store/Order';
import Pagination from '@/components/store/Pagination';
import Products from '@/components/store/Products';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { LucideFilter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState<
    | {
        data: Product[];
        meta: { currentPage: number; totalPages: number; totalItems: number };
      }
    | undefined
  >(undefined);
  const [categories, setCategories] = useState(undefined);
  const [brands, setBrands] = useState(undefined);
  const [priceRange, setPriceRange] = useState(undefined);

  const searchParams = useSearchParams();
  const router = useRouter();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const updateParams = useCallback(
    (key: string, value: string | number | undefined) => {
      if(value != 'page'){ 
        params.delete('page');
      }
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
      const [cats, brs, prods, price] = await Promise.all([
        axiosInstance.get('/products/categories'),
        axiosInstance.get('/products/brands'),
        axiosInstance.get('/products?' + params.toString()),
        axiosInstance.get('/products/pricerange'),
      ]);
      setCategories(cats.data);
      setBrands(brs.data);
      setProducts(prods.data);
      setPriceRange(price.data);
    }
  }, [params]);

  return (
    <>
      <div className='relative container mx-auto my-24 flex items-stretch gap-6 p-5'>
        <div className='sticky top-20 h-[400px] w-[280px] rounded-lg border not-md:hidden'>
          {products && (
            <Filter
              categories={categories}
              brands={brands}
              priceRnage={priceRange}
              updateParams={updateParams}
            />
          )}
        </div>
        <div className='grow'>
          <div className='mb-2 flex items-center gap-2'>
            <Sheet>
              <SheetTrigger className='md:hidden'>
                <div className='bg-primary-100 flex items-center gap-2 rounded-lg p-3 text-sm font-medium text-white'>
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
                    priceRnage={priceRange}
                    updateParams={updateParams}
                  />
                )}
              </SheetContent>
            </Sheet>
            <Order
              className='bg-zinc-100 p-3 not-md:hidden'
              updateParams={updateParams}
            />
          </div>
          <Products products={products?.data} />
          {products?.meta && 
          <Pagination totalPages={products?.meta.totalPages} currentPage={Number(params.get('page') || 1)} onPageChange={(num)=>{
            updateParams('page', num);
          }} />
          }
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
