export interface Order {
  _id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  amount: number;
  address: object;
  status: string;
  createdAt: string;
  updatedAt: string;
}
