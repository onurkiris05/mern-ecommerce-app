import express from "express";
import * as AuthsService from "../middlewares/auths";
import * as ConstantsController from "../controllers/constants";

const router = express.Router();

router.get("/", AuthsService.verifyToken, ConstantsController.getConstants);

export default router;
