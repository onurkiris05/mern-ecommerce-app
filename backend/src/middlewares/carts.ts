import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import User from "../models/user";

interface CartBody {
  userId?: string;
  products?: {
    productId: string;
    quantity?: number;
  }[];
}

export const validateCreateCart: RequestHandler<unknown, unknown, CartBody, unknown> = async (
  req,
  res,
  next
) => {
  const { userId } = req.body;

  if (!userId) {
    throw createHttpError(400, "User ID is required");
  }

  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw createHttpError(404, "User not found");
  }

  next();
};

export const validateUpdateCart: RequestHandler<
  { id: string },
  unknown,
  CartBody,
  unknown
> = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Cart Id");
  }

  if (!userId) {
    throw createHttpError(400, "User ID is required");
  }

  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw createHttpError(404, "User not found");
  }

  next();
};
