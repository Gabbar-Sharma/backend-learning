import express from "express";
import jwt from "jsonwebtoken";
import userModel from "./models/auth.model.js";
import bcrypt from "bcryptjs";
import authenticate from "./middlewere/auth.middlewere.js";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  try {
    return res.status(200).json({
      message: "get api created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong brother",
    });
  }
});

app.get("/api/me", authenticate, (req, res) => {
  return res.status(200).json({
    user: req.user,
  });
});

app.post("/api/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // save data on mongodb
    const user = await userModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    // token create here
    const token = jwt.sign(
      {
        id: user._id,
      },
      "frKTcYPV8y6wQkxi0AHYxnljCx5ELcCXuffhr1Y9b13",
    );

    return res.status(201).json({
      message: "user created successfully",
      user: {
        email,
        name,
        id: user._id,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong brother",
    });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
      const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(200).json({
        message: "Internal server error aa gya yaar",
      });
    }
    const isMatch = await bcrypt.compare(
  password,
  user.password
);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET
);    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

export default app;
