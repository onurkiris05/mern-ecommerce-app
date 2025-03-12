import * as CartsController from "../controllers/carts";
import * as CartsService from "../middlewares/carts";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router
  .route("/")
  .get(AuthsService.verifyTokenAndAdmin, handleAsync(CartsController.getAllCarts))
  .post(
    AuthsService.verifyToken,
    handleAsync(CartsService.validateCreateCart),
    handleAsync(CartsController.createCart)
  );

router.get(
  "/:userId",
  AuthsService.verifyTokenAndAuthorization,
  handleAsync(CartsController.getCart)
);

router
  .route("/:id")
  .put(
    AuthsService.verifyTokenAndAuthorization,
    handleAsync(CartsService.validateUpdateCart),
    handleAsync(CartsController.updateCart)
  )
  .delete(AuthsService.verifyTokenAndAuthorization, handleAsync(CartsController.deleteCart));

export default router;
