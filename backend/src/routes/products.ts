import * as ProductsController from "../controllers/products";
import * as ProductsService from "../middlewares/products";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router
  .get("/", AuthsService.verifyTokenAndAdmin, handleAsync(ProductsController.getAllProducts))
  .post(
    "/",
    AuthsService.verifyTokenAndAdmin,
    handleAsync(ProductsService.validateCreateProduct),
    handleAsync(ProductsController.createProduct)
  );

router
  .get("/:id", handleAsync(ProductsController.getProduct))
  .put(
    "/:id",
    AuthsService.verifyTokenAndAdmin,
    handleAsync(ProductsService.validateUpdateProduct),
    handleAsync(ProductsController.updateProduct)
  )
  .delete("/:id", AuthsService.verifyTokenAndAdmin, handleAsync(ProductsController.deleteProduct));

export default router;
