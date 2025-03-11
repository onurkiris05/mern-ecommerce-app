import express from "express";
import * as AuthsController from "../controllers/auths";
import * as Auth from "../middlewares/auths";
import handleAsync from "../utils/handleAsync";

const router = express.Router();

router.post("/register", handleAsync(Auth.validateRegister), handleAsync(AuthsController.register));
router.post("/login", handleAsync(Auth.validateLogin), handleAsync(AuthsController.login));

export default router;
