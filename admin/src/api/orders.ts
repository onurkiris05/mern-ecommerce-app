import { fetchData } from "./fetchData";
import { Order } from "../models/order";

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await fetchData(`/api/orders`, { method: "GET" });
  return response.json();
};
