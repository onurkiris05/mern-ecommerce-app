import { RequestHandler } from "express";
import Order from "../models/order";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getLatestIncomes: RequestHandler = async (req, res, next) => {
  try {
    const date = new Date();
    const twoMonthsAgo = new Date(date);
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    // This will return last 2 months incomes
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: twoMonthsAgo },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          totalIncome: { $sum: "$sales" },
        },
      },
    ]).sort({ _id: 1 });

    res.status(200).json(income);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders: RequestHandler = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });

  res.status(200).json(orders);
};

export const getUserOrders: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const orders = await Order.find({ userId: id });

  if (!orders) {
    throw createHttpError(404, "Orders not found");
  }

  res.status(200).json(orders);
};

export const getOrder: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Order Id");
  }

  const order = await Order.findById(id);

  if (!order) {
    throw createHttpError(404, "Order not found");
  }

  res.status(200).json(order);
};

export const createOrder: RequestHandler = async (req, res) => {
  const newOrder = await Order.create(req.body);

  res.status(201).json(newOrder);
};

export const updateOrder: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedOrder) {
    throw createHttpError(404, "Order not found");
  }

  res.status(200).json(updatedOrder);
};

export const deleteOrder: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid Order Id");
  }

  const order = await Order.findById(id);

  if (!order) {
    throw createHttpError(404, "Order not found");
  }

  await order.deleteOne();

  res.status(204).json({ message: "Order deleted successfully" });
};
