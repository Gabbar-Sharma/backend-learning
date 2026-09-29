import express from "express";

import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";
import authController from "../controllers/auth.controller.js";
import authMiddlewere from "../middleware/auth.middleware.js";

const router = express.Router();
// register Router
router.post("/register", registerValidator, authController.register);
router.post("/login", loginValidator, authController.login);
router.get("/me", authMiddlewere, authController.getMe);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout )

export default router;
