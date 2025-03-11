import * as UsersController from "../controllers/users";
import * as Auth from "../middlewares/auths";
import express from "express";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router.get("/", Auth.verifyTokenAndAdmin, handleAsync(UsersController.getAllUsers));
router.get("/stats", Auth.verifyTokenAndAdmin, handleAsync(UsersController.getStats));

router
  .get("/:id", Auth.verifyTokenAndAdmin, handleAsync(UsersController.getUser))
  .put("/:id", Auth.verifyTokenAndAuthorization, handleAsync(UsersController.updateUser))
  .delete("/:id", Auth.verifyTokenAndAuthorization, handleAsync(UsersController.deleteUser));

export default router;
