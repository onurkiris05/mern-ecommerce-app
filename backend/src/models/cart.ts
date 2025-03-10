import { InferSchemaType, model, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

type Cart = InferSchemaType<typeof cartSchema>;

export default model<Cart>("Cart", cartSchema);
