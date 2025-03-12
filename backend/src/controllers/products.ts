import { RequestHandler } from "express";
import Product from "../models/product";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getAllProducts: RequestHandler = async (req, res) => {
  const { new: qNew, category: qCategory } = req.query;

  const filter: Record<string, unknown> = {};

  if (qCategory) {
    filter.categories = { $in: [qCategory] };
  }

  const products =
    qNew === "true"
      ? await Product.find(filter).sort({ createdAt: -1 }).limit(1)
      : await Product.find(filter);

  res.status(200).json(products);
};

export const getProduct: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Product Id");
  }

  const product = await Product.findById(id);

  if (!product) {
    throw createHttpError(404, "Product not found");
  }

  res.status(200).json(product);
};

export const createProduct: RequestHandler = async (req, res) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json(newProduct);
};

export const updateProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedProduct) {
    throw createHttpError(404, "Product not found");
  }

  res.status(200).json(updatedProduct);
};

export const deleteProduct: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Product Id");
  }

  const product = await Product.findById(id);

  if (!product) {
    throw createHttpError(404, "Product not found");
  }

  await product.deleteOne();

  res.status(204).json({ message: "Product deleted successfully" });
};
