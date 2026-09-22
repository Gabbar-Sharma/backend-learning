import express from "express";
import jwt from "jsonwebtoken";

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

app.post("/api/register", (req, res) => {
  try {
    const { email, name, password } = req.body;

    // save data on mongodb

    // token create here
    const token = jwt.sign(
      {
        email,
        name,
      },
      "frKTcYPV8y6wQkxi0AHYxnljCx5ELcCXuffhr1Y9b13"
    );

    return res.status(201).json({
      message: "user created successfully",
      user: {
        email,
        name,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong brother",
    });
  }
});

export default app;