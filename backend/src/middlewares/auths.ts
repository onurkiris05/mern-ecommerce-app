import { RequestHandler } from "express";
import createHttpError from "http-errors";
import User from "../models/user";

interface RegisterBody {
  username?: string;
  email?: string;
  password?: string;
}

export const validateRegister: RequestHandler<unknown, unknown, RegisterBody, unknown> = async (
  req,
  res,
  next
) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw createHttpError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw createHttpError(409, "Username already exists");
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw createHttpError(409, "Email address already exists");
  }

  next();
};
