import { productsData } from '@/app/data/mockData';

export async function GET() {
  return Response.json(productsData.products);
}
