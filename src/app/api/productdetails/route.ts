import { productDetail } from "@/app/data/mockData";

export async function GET() {
    return Response.json(productDetail)
}