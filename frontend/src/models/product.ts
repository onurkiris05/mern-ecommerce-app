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
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}
