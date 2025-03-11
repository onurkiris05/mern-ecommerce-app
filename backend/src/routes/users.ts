import * as UsersController from "../controllers/users";
import * as AuthsService from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router.get("/", AuthsService.verifyTokenAndAdmin, handleAsync(UsersController.getAllUsers));
router.get("/stats", AuthsService.verifyTokenAndAdmin, handleAsync(UsersController.getStats));

router
  .get("/:id", AuthsService.verifyTokenAndAdmin, handleAsync(UsersController.getUser))
  .put("/:id", AuthsService.verifyTokenAndAuthorization, handleAsync(UsersController.updateUser))
  .delete(
    "/:id",
    AuthsService.verifyTokenAndAuthorization,
    handleAsync(UsersController.deleteUser)
  );

export default router;
