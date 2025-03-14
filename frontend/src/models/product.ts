export interface Product {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories?: string[];
  size?: string[];
  color?: string[];
  price: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}
