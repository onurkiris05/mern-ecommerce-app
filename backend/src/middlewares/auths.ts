import { RequestHandler } from "express";
import createHttpError from "http-errors";
import User from "../models/user";
import bcrypt from "bcrypt";
import env from "../utils/validateEnv";
import jwt from "jsonwebtoken";

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

interface LoginBody {
  username?: string;
  password?: string;
}

export const validateLogin: RequestHandler<unknown, unknown, LoginBody, unknown> = async (
  req,
  res,
  next
) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(createHttpError(401, "Invalid credentials"));
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return next(createHttpError(401, "Invalid credentials"));
  }

  req.user = user;

  next();
};

export const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createHttpError(401, "You are not authenticated!");
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw createHttpError(403, "Token is not valid!");
      }

      req.user = decoded as { id: string; isAdmin: boolean };
      next();
    });
  } catch (error) {
    next(error);
  }
};

export const verifyTokenAndAuthorization: RequestHandler = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createHttpError(403, "You are not allowed to do that!"));
    }
  });
};

export const verifyTokenAndAdmin: RequestHandler = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);

    if (req.user.isAdmin) {
      next();
    } else {
      next(createHttpError(403, "You are not allowed to do that!"));
    }
  });
};
