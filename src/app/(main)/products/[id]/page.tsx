'use client';

import { axiosInstance } from '@/app/service/axios';
import { Product } from '@/components/Product/Product.type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductInfo = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const params = useParams();
  const id = params.id; // مقدار id اینجا در دسترسه
  useEffect(() => {
    const fetchProduct = async () => {
      const prod = (await axiosInstance.get(`/products/${id}`))
        .data;
      setProduct(prod as Product);
    };
    fetchProduct();
  }, [id]);

  return <div>
  </div>;
};

export default ProductInfo;
