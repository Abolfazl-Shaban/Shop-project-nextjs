import { productsData } from '@/app/data/mockData';

export async function GET(request: Request) {
  const products = productsData.products;

  const { searchParams } = new URL(request.url);

  const category = searchParams.get('category');
  const brands = searchParams.get('brands')?.split('_');
  const minPrice = searchParams.get('price_from');
  const maxPrice = searchParams.get('price_to');
  const order = searchParams.get('order');
  const page = searchParams.get('page') || '1';

  const pageSize = 8;

  const filteredProducts = products.filter(
    (f) =>
      (!category || f.category === category) &&
      (!minPrice || Number(minPrice) <= f.price) &&
      (!maxPrice || Number(maxPrice) >= f.price) &&
      (!brands || brands.includes(f.brand)),
  );

  switch (order) {
    case 'newest':
      filteredProducts.sort((a, b) => a.id - b.id);
      break;
    case 'lowPrice':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'highPrice':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'popluar':
      filteredProducts.sort((a, b) => Number(b.rating) - Number(a.rating));
      break;
  }

  if (!page) {
    return Response.json({
      data: filteredProducts,
      meta: {
        currentPage: null,
        totalPages: 1,
        totalItems: filteredProducts.length,
      },
    });
  }

  const pageNumber = parseInt(page, 10);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return Response.json({
    data: paginatedProducts,
    meta: {
      currentPage: pageNumber,
      totalPages: Math.ceil(filteredProducts.length / pageSize),
      totalItems: filteredProducts.length,
    },
  });
}
