import * as UsersController from "../controllers/users";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router.get("/", AuthsService.verifyTokenAndAdmin, handleAsync(UsersController.getAllUsers));
router.get("/stats", AuthsService.verifyTokenAndAdmin, handleAsync(UsersController.getStats));

router
  .route("/:id")
  .get(AuthsService.verifyTokenAndAdmin, handleAsync(UsersController.getUser))
  .put(AuthsService.verifyTokenAndAuthorization, handleAsync(UsersController.updateUser))
  .delete(AuthsService.verifyTokenAndAuthorization, handleAsync(UsersController.deleteUser));

export default router;
