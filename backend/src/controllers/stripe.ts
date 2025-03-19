import { RequestHandler } from "express";
import Stripe from "stripe";
import env from "../utils/validateEnv";
import createHttpError from "http-errors";

const stripe = new Stripe(env.STRIPE_SECRET);

export const processPaymentIntent: RequestHandler = async (req, res, next) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    return next(createHttpError(500, `Payment processing failed: ${error}`));
  }
};
