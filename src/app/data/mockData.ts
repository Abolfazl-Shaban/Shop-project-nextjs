export const homePageData = {
  sliderItems: [
    {
      id: 1,
      title: 'تخفیف ویژه بهار',
      description: 'تا 40٪ تخفیف روی تمام محصولات',
      image: '/images/offer.jpg',
      link: '/products',
    },
    {
      id: 2,
      title: 'محصولات جدید',
      description: '1403 مجموعه بهار',
      image: '/images/offer2.jpg',
      link: '/products?new=true',
    },
  ],
  featuredProducts: [
    {
      id: 101,
      name: 'لپتاپ ایسوس',
      price: 25000000,
      discount: 15,
      image: '/images/products/laptop.png',
      rating: 4.5,
    },
    {
      id: 102,
      name: 'هدفون بیسیم',
      price: 4500000,
      discount: 0,
      image: '/images/products/headphone.png',
      rating: 4.8,
    },
    {
      id: 103,
      name: 'موس بیسیم',
      price: 4500000,
      discount: 25,
      image: '/images/products/mouse.png',
      rating: 4.3,
    },
    {
      id: 104,
      name: ' گوشی سامسونگ',
      price: 4500000,
      discount: 0,
      image: '/images/products/mobile.png',
      rating: 4.1,
    },
    {
      id: 105,
      name: 'تلویزیون شیائومی',
      price: 4500000,
      discount: 10,
      image: '/images/products/tv.png',
      rating: 4.9,
    },
  ],
};

export const productsData = {
  filters: {
    categories: [
      { id: 'electric', name: 'الکترونیک', count: 42 },
      { id: 'clothing', name: 'پوشاک', count: 36 },
      { id: 'kitchen', name: 'خانه و آشپزخانه', count: 28 },
    ],
    brands: [
      { id: 1, name: 'سامسونگ', count: 15 },
      { id: 2, name: 'اپل', count: 12 },
      { id: 3, name: 'هواوی', count: 8 },
    ],
  },
  products: Array(15)
    .fill(undefined)
    .map((_, i) => ({
      id: 200 + i,
      name: `محصول نمونه ${i + 1}`,
      price: Math.floor(Math.random() * 100) * 100000 + 1000000,
      discount: i % 3 === 0 ? Math.floor(Math.random() * 30) + 10 : 0,
      image: `/images/product-sample-${(i % 5) + 1}.png`,
      rating: (Math.random() * 1 + 4).toFixed(1),
      category: ['electric', 'clothing', 'kitchen'][i % 3],
      brand: ['1','2','3'][i % 3],
    })),
};
