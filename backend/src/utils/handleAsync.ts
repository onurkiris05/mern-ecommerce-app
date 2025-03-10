import { RequestHandler } from "express";

const handleAsync = (func: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
};

export default handleAsync;
