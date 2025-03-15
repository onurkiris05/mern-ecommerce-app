import * as ProductsController from "../controllers/products";
import * as ProductsService from "../middlewares/products";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router
  .route("/")
  .get(handleAsync(ProductsController.getAllProducts))
  .post(
    AuthsService.verifyTokenAndAdmin,
    handleAsync(ProductsService.validateCreateProduct),
    handleAsync(ProductsController.createProduct)
  );

router
  .route("/:id")
  .get(handleAsync(ProductsController.getProduct))
  .put(
    AuthsService.verifyTokenAndAdmin,
    handleAsync(ProductsService.validateUpdateProduct),
    handleAsync(ProductsController.updateProduct)
  )
  .delete(AuthsService.verifyTokenAndAdmin, handleAsync(ProductsController.deleteProduct));

export default router;
