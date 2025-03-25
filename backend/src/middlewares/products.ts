import { RequestHandler } from "express";
import createHttpError from "http-errors";
import Product from "../models/product";
import mongoose from "mongoose";

export interface ProductBody {
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

export const validateCreateProduct: RequestHandler<unknown, unknown, ProductBody, unknown> = async (
  req,
  res,
  next
) => {
  const { title, desc, img, price } = req.body;

  if (!title) {
    throw createHttpError(400, "Title is required");
  }

  const existingProduct = await Product.findOne({ title });
  if (existingProduct) {
    throw createHttpError(409, "Product title already exists");
  }

  if (!desc) {
    throw createHttpError(400, "Description is required");
  }
  if (!img) {
    throw createHttpError(400, "Image is required");
  }
  if (!price) {
    throw createHttpError(400, "Price is required");
  }

  next();
};

export const validateUpdateProduct: RequestHandler<
  { id: string },
  unknown,
  ProductBody,
  unknown
> = async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Product Id");
  }

  const existingProduct = await Product.findOne({ title });
  if (existingProduct && !existingProduct._id.equals(id)) {
    throw createHttpError(409, "Product title already exists");
  }

  next();
};
