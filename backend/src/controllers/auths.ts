import { RequestHandler } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

export const register: RequestHandler<unknown, unknown, RegisterBody, unknown> = async (
  req,
  res
) => {
  const { username, email, password } = req.body;
  const passwordHashed = await bcrypt.hash(password ?? "", 10);

  const newUser = await User.create({
    username: username,
    email: email,
    password: passwordHashed,
  });

  res.status(201).json(newUser);
};
