import { Router } from "express"
import app from "../app.js"

import {
  register,
  login,
  refreshToken,
  logout
} from "../controllers/auth.controller.js"
import authenticate from '../middleware/auth.middleware.js'
// API endpoints
const router = express.Router()
router.post("/register", register)
router.post("/login", login)
// router.get("/me", getMe, authenticate)
router.post("/refreshToken", refreshToken)


export default router;