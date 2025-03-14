import { InferSchemaType, model, Schema } from "mongoose";
import { CategoryEnum, GenderEnum, SizeEnum } from "../constants/constants";

const productSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: {
      type: [String],
      enum: Object.values(CategoryEnum),
    },
    genders: {
      type: [String],
      enum: Object.values(GenderEnum),
    },
    sizes: {
      type: [String],
      enum: Object.values(SizeEnum),
    },
    colors: {
      type: [String],
    },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

type Product = InferSchemaType<typeof productSchema>;

export default model<Product>("Product", productSchema);
