export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Menu",
    href: "/",
  },
  {
    title: "Build Burger",
    href: "/",
  },
  {
    title: "Track Order",
    href: "/",
  },
  {
    title: "Rewards",
    href: "/",
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
