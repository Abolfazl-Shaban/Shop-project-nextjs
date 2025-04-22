import { Product } from '@/components/Product/Product.type';

export function getPriceRange(products: Product[]) {
  let maxPrice = -Infinity;
  let minPrice = Infinity;

  for (const p of products) {
    if (p.price > maxPrice) maxPrice = p.price;
    if (p.price < minPrice) minPrice = p.price;
  }

  return [minPrice, maxPrice];
}
