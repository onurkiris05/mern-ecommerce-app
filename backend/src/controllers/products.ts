import { RequestHandler } from "express";

export const getTest: RequestHandler = async (req, res, next) => {
  try {
    res.send("GET/ test is succesful");
  } catch (error) {
    next(error);
  }
};
