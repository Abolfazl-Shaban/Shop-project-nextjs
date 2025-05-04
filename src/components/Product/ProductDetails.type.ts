export type ProductDetail = {
  id: number;
  name: string;
  Ename: string;
  price: number;
  discount: number;
  finalPrice: number;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  Edescription: string;
  specifications: {
    title: string;
    Etitle: string;
    value: string;
  }[];

  relatedProducts: {
    id: number;
    name: string;
    Ename: string;
    price: number;
    image: string;
  }[];
};
