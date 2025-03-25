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

export interface ProductInput {
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

export const createProduct = async (product: ProductInput): Promise<Product> => {
  const response = await fetchData(`/api/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return response.json();
};

export const updateProduct = async (id: string, product: ProductInput): Promise<Product> => {
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
