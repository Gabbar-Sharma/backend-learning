
import express from "express"
import authRoutes from '../app/routes/auth.routes.js'
const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes);

app.get("/", (req, res) =>{
    res.send("Express is start")
})


export default app