import { productsData } from '@/app/data/mockData';
import { NextResponse } from 'next/server';

export async function GET() {

        const prices = productsData.products.map((product) => product.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        return NextResponse.json([minPrice, maxPrice]);

}