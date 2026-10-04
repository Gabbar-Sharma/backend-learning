console.log("start server today...")
import express from "express"

const app = express()


app.request(3000, () =>{
    console.log("app running")
})