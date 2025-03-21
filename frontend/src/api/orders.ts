import { fetchData } from "./fetchData";
import { Order } from "../models/order";

export interface OrderInput {
  userId: string;
  products?: {
    productId: string;
    quantity?: number;
  }[];
  amount: number;
  address: object;
  status?: string;
}

export const createOrder = async (order: OrderInput): Promise<Order> => {
  const response = await fetchData("/api/orders/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  return response.json();
};
