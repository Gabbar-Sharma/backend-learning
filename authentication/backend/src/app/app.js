import express from "express";
import jwt from "jsonwebtoken";
import userModel from './models/auth.model.js'
import bcrypt from 'bcryptjs'

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

app.get('/api/me', async(req, res) =>{
    const authHeader = req.headers.authorization
    const data = jwt.decode(authHeader)
    console.log(data)
    const user = await userModel.findById(data.id)
    console.log(user)
})

app.post("/api/register", async(req, res) => {
  try {
    const { email, name, password } = req.body;

    // save data on mongodb
  const user = await userModel.create({
    name, email, password: await bcrypt.hash(password, 10)
   })
    // token create here
    const token = jwt.sign(
      {
      id: user._id
      },
      "frKTcYPV8y6wQkxi0AHYxnljCx5ELcCXuffhr1Y9b13"
    );

    return res.status(201).json({
      message: "user created successfully",
      user: {
        email,
        name,
        id: user._id
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