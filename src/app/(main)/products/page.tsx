'use client'

import { axiosInstance } from '@/app/service/axios';
import { Product } from '@/components/Product/Product.type';
import Filter from '@/components/store/Filter';
import Products from '@/components/store/Products';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import { LuLayers, LuSettings2 } from 'react-icons/lu';

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);
    const [categories, setCategories] = useState(undefined);
    const [brands, setBrands] = useState(undefined);
  
    useEffect(() => {
      featchData();
      async function featchData() {
        setCategories((await axiosInstance.get('/products/categories')).data);
        setBrands((await axiosInstance.get('/products/brands')).data);
        setProducts((await axiosInstance.get('/products')).data);
      }
    }, []);
  return (
    <>
      <div className='relative container mx-auto my-24 flex items-stretch gap-6 p-5'>
        <div className='sticky top-20 h-[400px] w-[280px] rounded-lg border'>
          <p className='font-medium text-sm flex gap-1.5 items-center border-b p-4'><LuSettings2 size={22} /> فیلترها</p>
          {products ? <Filter categories={categories} brands={brands} products={products} /> : <div className='w-full p-4 h-full'>
            <Skeleton className='w-full h-[300px]' />
          </div> } 
        </div>
        <div className='grow'>
          <div className='bg-primary-100/30 rounded-lg p-3 mb-4 w-full'>
              <p className='flex gap-1 items-center text-sm font-medium'><LuLayers /> ترتیب:</p>
          </div>
            <Products products={products}/>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
