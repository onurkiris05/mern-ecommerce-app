import { InferSchemaType, model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

type Order = InferSchemaType<typeof orderSchema>;

export default model<Order>("Order", orderSchema);
