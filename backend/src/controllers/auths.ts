import { RequestHandler } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../utils/validateEnv";

export const register: RequestHandler = async (req, res) => {
  const { username, email, password } = req.body;
  const passwordHashed = await bcrypt.hash(password ?? "", 10);

  const newUser = await User.create({
    username: username,
    email: email,
    password: passwordHashed,
  });

  res.status(201).json(newUser);
};

export const login: RequestHandler = async (req, res) => {
  const user = req.user.toObject();
  delete user.password;

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(201).json({ ...user, token });
};
