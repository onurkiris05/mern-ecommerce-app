export interface Category {
  id: number;
  img: string;
  title: string;
  cat: string;
}

const categoryItems = [
  {
    id: 1,
    img: "/assets/images/category-1.jpg",
    title: "Stylish Shirts",
    cat: "shirts",
  },
  {
    id: 2,
    img: "/assets/images/category-2.jpg",
    title: "Relaxed Wear",
    cat: "women",
  },
  {
    id: 3,
    img: "/assets/images/category-3.jpg",
    title: "Breezy Jackets",
    cat: "jackets",
  },
];

export default categoryItems;
