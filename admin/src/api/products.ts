import { Product } from "../models/product";
import { fetchData } from "./fetchData";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetchData(`/api/products`, { method: "GET" });
  return response.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetchData(`/api/products/${id}`, { method: "GET" });
  return response.json();
};

export interface ProductUpdateInput {
  title?: string;
  desc?: string;
  img?: string;
  categories?: string[];
  genders?: string[];
  sizes?: string[];
  colors?: string[];
  price?: number;
  stock?: number;
}

export const updateProduct = async (id: string, product: ProductUpdateInput): Promise<Product> => {
  const response = await fetchData(`/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return response.json();
};

export const deleteProduct = async (id: string) => {
  await fetchData(`/api/products/${id}`, { method: "DELETE" });
};
