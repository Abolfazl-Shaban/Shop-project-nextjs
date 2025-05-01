'use server';

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
import { SiteUrl } from '../../../../constant';
import { ReadonlyURLSearchParams } from 'next/navigation';

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = new URLSearchParams(
    (await searchParams) as never,
  ) as ReadonlyURLSearchParams;

  const [products, brands, categories, priceRange] = await Promise.all([
    fetch(`${SiteUrl}/api/products?${query.toString()}`).then((res) =>
      res.json(),
    ),
    fetch(`${SiteUrl}/api/products/brands`).then((res) => res.json()),
    fetch(`${SiteUrl}/api/products/categories`).then((res) => res.json()),
    fetch(`${SiteUrl}/api/products/pricerange`).then((res) => res.json()),
  ]);

  return (
    <>
      <div className='relative container mx-auto my-24 flex items-stretch gap-6 p-5'>
        <div className='sticky top-20 h-[400px] w-[280px] rounded-lg border not-md:hidden'>
          <Filter
            categories={categories}
            brands={brands}
            priceRnage={priceRange}
          />
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
                <Filter
                  className='md:hidden'
                  categories={categories}
                  brands={brands}
                  priceRnage={priceRange}
                />
              </SheetContent>
            </Sheet>
            <Order className='bg-zinc-100 p-3 not-md:hidden' />
          </div>
          {products.data.length == 0 ? (
            <p className='text-dark-300 text-sm mt-12 text-center'>محصولی یافت نشد!</p>
          ) : (
            <>
              <Products products={products?.data} />
              {products?.meta && (
                <Pagination
                  totalPages={products?.meta.totalPages}
                  currentPage={Number(query.get('page') || 1)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
