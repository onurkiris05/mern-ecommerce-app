import { fetchData } from "./fetchData";
import { Order } from "../models/order";

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await fetchData(`/api/orders`, { method: "GET" });
  return response.json();
};

export const getOrder = async (id: string): Promise<Order> => {
  const response = await fetchData(`/api/orders/${id}`, { method: "GET" });
  return response.json();
};

export interface OrderUpdateInput {
  userId?: string;
  amount?: number;
  address?: object;
  status?: string;
}

export const updateOrder = async (id: string, order: OrderUpdateInput): Promise<Order> => {
  const response = await fetchData(`/api/orders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  return response.json();
};

export const getIncomes = async (): Promise<[]> => {
  const response = await fetchData(`/api/orders/income`, { method: "GET" });
  return response.json();
};

export const deleteOrder = async (id: string) => {
  await fetchData(`/api/orders/${id}`, { method: "DELETE" });
};
