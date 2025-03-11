import express from "express";
import * as AuthsController from "../controllers/auths";
import * as AuthsService from "../middlewares/auths";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router.post(
  "/register",
  handleAsync(AuthsService.validateRegister),
  handleAsync(AuthsController.register)
);
router.post("/login", handleAsync(AuthsService.validateLogin), handleAsync(AuthsController.login));

export default router;
