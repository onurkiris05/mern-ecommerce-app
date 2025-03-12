import * as OrdersController from "../controllers/orders";
import * as OrdersService from "../middlewares/orders";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router
  .get("/", AuthsService.verifyTokenAndAdmin, handleAsync(OrdersController.getAllOrders))
  .post(
    "/",
    AuthsService.verifyToken,
    handleAsync(OrdersService.validateCreateOrder),
    handleAsync(OrdersController.createOrder)
  );

router
  .get("/:userId", AuthsService.verifyTokenAndAuthorization, handleAsync(OrdersController.getOrder))
  .put(
    "/:id",
    AuthsService.verifyTokenAndAdmin,
    handleAsync(OrdersService.validateUpdateOrder),
    handleAsync(OrdersController.updateOrder)
  )
  .delete("/:id", AuthsService.verifyTokenAndAdmin, handleAsync(OrdersController.deleteOrder));

export default router;
