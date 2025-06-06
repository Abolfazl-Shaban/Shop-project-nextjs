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
      link: '/products?order=newest',
    },
  ],
  featuredProducts: [
    {
      id: 101,
      name: 'لپتاپ ایسوس',
      Ename: 'Asus Laptop',
      price: 25000000,
      discount: 15,
      image: '/images/products/laptop.png',
      rating: 4.5,
    },
    {
      id: 102,
      name: 'هدفون بیسیم',
      Ename: 'Wireless Headphone',
      price: 4500000,
      discount: 0,
      image: '/images/products/headphone.png',
      rating: 4.8,
    },
    {
      id: 103,
      name: 'موس بیسیم',
      Ename: 'Wireless Mouse',
      price: 4500000,
      discount: 25,
      image: '/images/products/mouse.png',
      rating: 4.3,
    },
    {
      id: 104,
      name: ' گوشی سامسونگ',
      Ename: 'Mobile Samsung',
      price: 4500000,
      discount: 0,
      image: '/images/products/mobile.png',
      rating: 4.1,
    },
    {
      id: 105,
      name: 'تلویزیون شیائومی',
      Ename: 'Xiaomi TV',
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
      { id: 'electric', name: 'الکترونیک', Ename: 'Electric', count: 42 },
      { id: 'clothing', name: 'پوشاک', Ename: 'Clothing', count: 36 },
      { id: 'kitchen', name: 'خانه و آشپزخانه', Ename: 'Kitchen', count: 28 },
    ],
    brands: [
      { id: 1, name: 'سامسونگ', Ename: 'Samsung', count: 15 },
      { id: 2, name: 'اپل', Ename: 'Apple', count: 12 },
      { id: 3, name: 'هواوی', Ename: 'Huawei', count: 8 },
    ],
  },
  products: Array(15)
    .fill(undefined)
    .map((_, i) => ({
      id: 200 + i,
      name: `محصول نمونه ${i + 1}`,
      Ename: `Example Product ${i + 1}`,
      price: Math.floor(Math.random() * 100) * 100000 + 1000000,
      discount: i % 3 === 0 ? Math.floor(Math.random() * 30) + 10 : 0,
      image: `/images/product-sample-${(i % 5) + 1}.png`,
      rating: (Math.random() * 1 + 4).toFixed(1),
      category: ['electric', 'clothing', 'kitchen'][i % 3],
      brand: ['1', '2', '3'][i % 3],
    })),
};

export const productDetail = {
  id: 101,
  name: 'لپ‌تاپ ایسوس مدل X543',
  Ename: 'Laptop Asus X543',
  price: 25000000,
  discount: 15,
  finalPrice: 21250000,
  images: [
    '/images/product-detail-1.jpg',
    '/images/product-detail-2.jpg',
    '/images/product-detail-3.jpg',
  ],
  rating: 4.5,
  reviewCount: 24,
  description:
    'لپ‌تاپ ایسوس با پردازنده Core i7 نسل ۱۱، ۱۶ گیگابایت رم و ۵۱۲ گیگابایت SSD',
  Edescription:
    'Asus laptop with 11th generation Core i7 processor, 16GB RAM and 512GB SSD',
  specifications: [
    {
      title: 'پردازنده',
      Etitle: 'Cpu',
      value: 'Core i7 1165G7',
    },
    {
      title: 'حافظه رم',
      Etitle: 'Ram',
      value: '16GB DDR4',
    },
    {
      title: 'ذخیره‌سازی',
      Etitle: 'Disk',
      value: '512GB SSD',
    },
    {
      title: 'صفحه نمایش',
      Etitle: 'Display',
      value: '15.6 Inch Full HD',
    },
    {
      title: 'سیستم عامل',
      Etitle: 'OS',
      value: 'Windows 11 Home',
    },
  ],
  relatedProducts: [
    {
      id: 103,
      name: 'لپ‌تاپ دل',
      Ename: 'Laptop Dell',
      price: 28000000,
      image: '/images/products/laptop.png',
    },
    {
      id: 104,
      name: 'لپ‌تاپ لنوو',
      Ename: 'Laptop Lenovo',
      price: 23000000,
      image: '/images/products/laptop.png',
    },
    {
      id: 105,
      name: 'لپ‌تاپ ایسوس',
      Ename: 'Laptop Asus',
      price: 32000000,
      image: '/images/products/laptop.png',
    },
  ],
};

export const userData = {
  profile: {
    name: 'محمد رضایی',
    email: 'mohammad@example.com',
    phone: '09123456789',
    address: 'تهران، خیابان آزادی، کوچه شهید فلانی، پلاک ۱۲',
  },
  orders: [
    {
      id: 'ORD-1001',
      date: '1402/12/15',
      status: 'تحویل شده',
      Estatus: 'Delivered',
      total: 18750000,
      items: [
        { name: 'هدفون بی‌سیم', Ename: 'Wireless Headphone', quantity: 1 },
        { name: 'ماوس گیمینگ', Ename: 'Gaming Mouse', quantity: 1 },
      ],
    },
    {
      id: 'ORD-1002',
      date: '1402/11/03',
      status: 'در حال ارسال',
      Estatus: 'Sending',
      total: 32500000,
      items: [{ name: 'لپ‌تاپ ایسوس', Ename: 'Asus Laptop', quantity: 1 }],
    },
  ],
};
