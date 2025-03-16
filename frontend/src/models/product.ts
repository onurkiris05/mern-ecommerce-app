export interface Product {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories?: string[];
  genders?: string[];
  sizes?: string[];
  colors?: string[];
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
