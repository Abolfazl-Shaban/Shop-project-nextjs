import { homePageData } from '@/app/data/mockData';

export async function GET() {
  return Response.json(homePageData.featuredProducts);
}
