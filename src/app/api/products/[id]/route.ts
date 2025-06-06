import { productsData } from "@/app/data/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const products = productsData.products;
    const { id } = await params;

  const product = products.find((f) => f.id === Number(id));

  if (!product) {
    return Response.json(null);
  }

  return Response.json(product);
}
