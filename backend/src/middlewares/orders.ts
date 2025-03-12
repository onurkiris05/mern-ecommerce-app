import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";

interface OrderBody {
  userId?: string;
  products?: {
    productId: string;
    quantity?: number;
  }[];
  amount?: number;
  address?: object;
  status?: string;
}

export const validateCreateOrder: RequestHandler<unknown, unknown, OrderBody, unknown> = async (
  req,
  res,
  next
) => {
  const { userId, amount, address } = req.body;

  if (!userId) {
    throw createHttpError(400, "User ID is required");
  }

  if (!amount) {
    throw createHttpError(400, "Amount is required");
  }

  if (!address) {
    throw createHttpError(400, "Address is required");
  }

  next();
};

export const validateUpdateOrder: RequestHandler<
  { id: string },
  unknown,
  OrderBody,
  unknown
> = async (req, res, next) => {
  const { id } = req.params;
  const { userId, amount, address } = req.body;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Order Id");
  }

  if (!userId) {
    throw createHttpError(400, "User ID is required");
  }

  if (!amount) {
    throw createHttpError(400, "Amount is required");
  }

  if (!address) {
    throw createHttpError(400, "Address is required");
  }

  next();
};
