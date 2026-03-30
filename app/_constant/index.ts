export const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Menu',
    href: '/menu',
  },
  {
    title: 'Track Order',
    href: '/tracking_order',
  },
  {
    title: 'Rewards',
    href: '/rewards',
  },
];

export type Item = {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  bestSeller: boolean;
  reviews: number;
};

export const itemMenu = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Burgers',
  },
  {
    id: 3,
    name: 'Sides',
  },
  {
    id: 4,
    name: 'Drinks',
  },
  {
    id: 5,
    name: 'Combos',
  },
];

export type CartItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  bestSeller: boolean;
  image: string;
  quantity: number;
};

export const statusArray = [
  {
    status: 'received',
    title: 'Received',
    bg: 'bg-blue-500/20',
    text: 'text-blue-500',
  },
  {
    status: 'cooking',
    title: 'Cooking',
    bg: 'bg-orange-500/20',
    text: 'text-orange-500',
  },
  {
    status: 'quality',
    title: 'Quality',
    bg: 'bg-red-500/20',
    text: 'text-red-500',
  },
  {
    status: 'delivered',
    title: 'Delivered',
    bg: 'bg-purple-500/20',
    text: 'text-purple-500',
  },
];

// item = {
//     id: 1,
//     name: Classic Cheeseburger,
//     category: combos,
//     description:  A juicy 100% beef patty with melted cheddar,
//                     crisp lettuce, tomato,
//                      and our signature sauce.,
//     rating: 3.5,
//     price: 8.45 $,
//     bestSeller : true,
//     reviews: 409
// }
