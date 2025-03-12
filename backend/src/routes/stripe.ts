import express from "express";
import * as StripeController from "../controllers/stripe";

const router = express.Router();

router.post("/payment", StripeController.processPayment);

export default router;
