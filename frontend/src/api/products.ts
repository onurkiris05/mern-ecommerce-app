import { Product } from "../models/product";
import { fetchData } from "./fetchData";

interface GetProductsParams {
  new?: boolean;
  gender?: string;
  category?: string;
  size?: string;
  sort?: string;
}

export async function getProducts(params?: GetProductsParams): Promise<Product[]> {
  const query = new URLSearchParams();

  if (params?.new) query.append("new", "true");
  if (params?.gender) query.append("gender", params.gender);
  if (params?.category) query.append("category", params.category);
  if (params?.size) query.append("size", params.size);
  if (params?.sort) query.append("sort", params.sort);

  const url = `/api/products${query.toString() ? "?" + query.toString() : ""}`;

  const response = await fetchData(url, { method: "GET" });
  return response.json();
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetchData(`/api/products/${id}`, { method: "GET" });
  return response.json();
}
