import { RequestHandler } from "express";
import Order from "../models/order";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getPrevMonthIncome: RequestHandler = async (req, res, next) => {
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
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
    ]);

    res.status(200).json(income);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders: RequestHandler = async (req, res) => {
  const orders = await Order.find();

  res.status(200).json(orders);
};

export const getOrder: RequestHandler<{ userId: string }> = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const order = await Order.find({ userId: userId });

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
