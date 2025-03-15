import express from "express";
import * as ConstantsController from "../controllers/constants";

const router = express.Router();

router.get("/", ConstantsController.getConstants);

export default router;
