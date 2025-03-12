import * as OrdersController from "../controllers/orders";
import * as OrdersService from "../middlewares/orders";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router
  .route("/")
  .get(AuthsService.verifyTokenAndAdmin, handleAsync(OrdersController.getAllOrders))
  .post(
    AuthsService.verifyToken,
    handleAsync(OrdersService.validateCreateOrder),
    handleAsync(OrdersController.createOrder)
  );

router.get(
  "/income",
  AuthsService.verifyTokenAndAdmin,
  handleAsync(OrdersController.getPrevMonthIncome)
);

router.get(
  "/:userId",
  AuthsService.verifyTokenAndAuthorization,
  handleAsync(OrdersController.getOrder)
);

router
  .route("/:id")
  .put(
    AuthsService.verifyTokenAndAdmin,
    handleAsync(OrdersService.validateUpdateOrder),
    handleAsync(OrdersController.updateOrder)
  )
  .delete(AuthsService.verifyTokenAndAdmin, handleAsync(OrdersController.deleteOrder));

export default router;
