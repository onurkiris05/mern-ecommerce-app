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
    title: "women",
    cat: "women",
  },
  {
    id: 2,
    img: "/assets/images/category-2.jpg",
    title: "men",
    cat: "men",
  },
  {
    id: 3,
    img: "/assets/images/category-3.jpg",
    title: "kids",
    cat: "child",
  },
];

export default categoryItems;
