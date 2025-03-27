import { RequestHandler } from "express";
import User from "../models/user";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const getStats: RequestHandler = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const data = await User.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },
  ]).sort({ createdAt: -1 });

  res.status(200).json(data);
};

export const getAllUsers: RequestHandler = async (req, res) => {
  const query = req.query.new;

  const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
  res.status(200).json(users);
};

export const getUser: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const user = await User.findById(id);

  if (!user) {
    throw createHttpError(404, "User not found");
  }

  res.status(200).json(user);
};

interface UpdateUserBody {
  username?: string;
  email?: string;
  password?: string;
}

export const updateUser: RequestHandler<{ id: string }, unknown, UpdateUserBody> = async (
  req,
  res
) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const updatedFields: Partial<UpdateUserBody> = {};
  if (username) updatedFields.username = username;
  if (email) updatedFields.email = email;
  if (password) {
    const passwordHashed = await bcrypt.hash(password, 10);
    updatedFields.password = passwordHashed;
  }

  const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true });

  if (!updatedUser) {
    throw createHttpError(404, "User not found");
  }

  res.status(200).json(updatedUser);
};

export const deleteUser: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw createHttpError(400, "Invalid User Id");
  }

  const user = await User.findById(id);

  if (!user) {
    throw createHttpError(404, "User not found");
  }

  await user.deleteOne();

  res.status(204).json({ message: "User deleted successfully" });
};
