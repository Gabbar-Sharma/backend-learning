import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../app/models/auth.model.js";

dotenv.config();

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const data = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(data.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authenticate;