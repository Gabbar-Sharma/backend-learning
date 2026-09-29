import express from "express"
import cors from "cors"
import authRouter from "../src/routes/auth.router.js"
const app = express();

app.use(cors());
app.use(express.json());
app.use("api/auth", authRouter)

app.get('/', (req, res) =>{
    res.send("api are created bro")
})



export default app;
