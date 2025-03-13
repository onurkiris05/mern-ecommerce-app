import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import usersRoutes from "./routes/users";
import authsRoutes from "./routes/auths";
import productsRoutes from "./routes/products";
import ordersRoutes from "./routes/orders";
import cartsRoutes from "./routes/carts";
import stripeRoutes from "./routes/stripe";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/api/auths", authsRoutes);
app.use("/api/checkout", stripeRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Page Not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  const errorMsg = isHttpError(error) ? error.message : "An unknown error occurred";
  const statusCode = isHttpError(error) ? error.status : 500;
  res.status(statusCode).json({ error: errorMsg });
});

export default app;
