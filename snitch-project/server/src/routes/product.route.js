import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware.js"
import productController from "../controllers/product.Controller.js"
const router = express.Router()

// We careate api endpoint
router.post("/", authMiddleware,roleMiddleware("customer", "seller"))


export default router