export interface Product {
  id: string;
  name: string;
  category: 'women' | 'men' | 'footwear' | 'jewellery' | 'stationery' | 'utensils';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discount: string;
  badge?: {
    text: string;
    bg: string;
  };
  shopName: string;
  deliveryTime: string;
  image: string;
  sizes?: string[];
}

export interface StoreCard {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface CircleCategory {
  id: string;
  name: string;
  image: string;
}

export const CIRCLE_CATEGORIES: CircleCategory[] = [
  {
    id: 'women',
    name: "Women's\nFashion",
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'men',
    name: "Men's\nFashion",
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'footwear',
    name: "Footwear\n& Shoes",
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'jewellery',
    name: "Artificial\nJewellery",
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'stationery',
    name: "Stationery\n& Study",
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'utensils',
    name: "Kitchen\n& Utensils",
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&auto=format&fit=crop&q=80',
  },
];

export const CITY_STORES: StoreCard[] = [
  {
    id: 's1',
    name: 'M.G. Road Boutiques',
    category: "Women's Fashion",
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 's2',
    name: 'Sarafa Bazaar Jewellers',
    category: 'Artificial Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 's3',
    name: 'Linking Road Footwear',
    category: 'Shoes & Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 's4',
    name: 'University Circle Stationers',
    category: 'Books & Study',
    image: 'https://images.unsplash.com/photo-1507842229450-7907e89828e3?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 's5',
    name: 'Main Chowk Bartan Bhandar',
    category: 'Kitchen & Utensils',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80',
  },
];

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 'tp1',
    name: 'Embroidered Kurti',
    category: 'women',
    categoryLabel: "Women's Fashion",
    price: 799,
    originalPrice: 1299,
    discount: '38% OFF',
    badge: { text: 'Bestseller', bg: 'bg-[#d946ef]' },
    shopName: 'M.G. Road Boutiques',
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'tp2',
    name: 'Casual Shirt',
    category: 'men',
    categoryLabel: "Men's Fashion",
    price: 599,
    originalPrice: 899,
    discount: '33% OFF',
    badge: { text: 'New', bg: 'bg-[#10b981]' },
    shopName: 'M.G. Road Boutiques',
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?w=600&auto=format&fit=crop&q=80',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 'tp3',
    name: 'White Sneakers',
    category: 'footwear',
    categoryLabel: 'Footwear & Shoes',
    price: 1499,
    originalPrice: 2299,
    discount: '35% OFF',
    badge: { text: 'Trending', bg: 'bg-[#f43f5e]' },
    shopName: 'Linking Road Footwear',
    deliveryTime: '30-45 min',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80',
    sizes: ['UK 7', 'UK 8', 'UK 9'],
  },
  {
    id: 'tp4',
    name: 'Kundan Jhumkas',
    category: 'jewellery',
    categoryLabel: 'Artificial Jewellery',
    price: 999,
    originalPrice: 1499,
    discount: '33% OFF',
    badge: { text: 'Premium', bg: 'bg-[#8b5cf6]' },
    shopName: 'Sarafa Bazaar Jewellers',
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'tp5',
    name: 'Exam Stationery Kit',
    category: 'stationery',
    categoryLabel: 'Stationery & Study',
    price: 249,
    originalPrice: 349,
    discount: '29% OFF',
    badge: { text: 'Student Pick', bg: 'bg-[#eab308]' },
    shopName: 'University Circle Stationers',
    deliveryTime: '15-25 min',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'tp6',
    name: 'Steel Cookware Set',
    category: 'utensils',
    categoryLabel: 'Kitchen & Utensils',
    price: 1999,
    originalPrice: 2799,
    discount: '29% OFF',
    badge: { text: 'Top Rated', bg: 'bg-[#ea580c]' },
    shopName: 'Main Chowk Bartan Bhandar',
    deliveryTime: '35-45 min',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
  },
];

export const NAV_LINKS = [
  { label: 'Women', href: '#women' },
  { label: 'Men', href: '#men' },
  { label: 'Footwear', href: '#footwear' },
  { label: 'Jewellery', href: '#jewellery' },
  { label: 'Stationery', href: '#stationery' },
  { label: 'Kitchen & Utensils', href: '#utensils' },
];
