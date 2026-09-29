import express from "express";

import registerValidator from "../validators/auth.validator.js";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  authController.register
);

export default router;