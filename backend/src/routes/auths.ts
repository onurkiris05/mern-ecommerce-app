import express from "express";
import * as AuthsController from "../controllers/auths";
import * as Middlewares from "../middlewares/auths";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router.post(
  "/register",
  handleAsync(Middlewares.validateRegister),
  handleAsync(AuthsController.register)
);

export default router;
