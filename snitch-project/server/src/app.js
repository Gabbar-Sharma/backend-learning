import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from "./routes/auth.router.js"
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter)

app.get('/', (req, res) =>{
    res.send("api are created bro")
})



export default app;
