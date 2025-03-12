import { RequestHandler } from "express";
import Cart from "../models/cart";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getAllCarts: RequestHandler = async (req, res) => {
  const carts = await Cart.find();

  res.status(200).json(carts);
};

export const getCart: RequestHandler<{ userId: string }> = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const cart = await Cart.findOne({ userId: userId });

  res.status(200).json(cart);
};

export const createCart: RequestHandler = async (req, res) => {
  const newCart = await Cart.create(req.body);

  res.status(201).json(newCart);
};

export const updateCart: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const updatedCart = await Cart.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedCart) {
    throw createHttpError(404, "Cart not found");
  }

  res.status(200).json(updatedCart);
};

export const deleteCart: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Cart Id");
  }

  const cart = await Cart.findById(id);

  if (!cart) {
    throw createHttpError(404, "Cart not found");
  }

  await cart.deleteOne();

  res.status(204).json({ message: "Cart deleted successfully" });
};
