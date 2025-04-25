export type ProductDetail = {
  id: number;
  name: string;
  price: number;
  discount: number;
  finalPrice: number;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  specifications: {
    title: string;
    value: string;
  }[];

  relatedProducts: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
};
