import { productDetail } from "@/app/data/mockData";

export async function GET(request: Request) {
    return Response.json(productDetail)
}