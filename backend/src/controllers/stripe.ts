import { RequestHandler } from "express";
import Stripe from "stripe";
import env from "../utils/validateEnv";
import createHttpError from "http-errors";

const stripe = new Stripe(env.STRIPE_SECRET);

export const processPayment: RequestHandler = (req, res, next) => {
  const { tokenId, amount } = req.body;

  stripe.charges
    .create({
      source: tokenId,
      amount: amount,
      currency: "usd",
    })
    .then((stripeRes) => {
      res.status(200).json(stripeRes);
    })
    .catch((stripeErr) => {
      return next(createHttpError(500, `Payment processing failed: ${stripeErr.message}`));
    });
};
