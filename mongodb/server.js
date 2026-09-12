const express = require('express');
const mongoose = require('mongoose')
require("dotenv").config()

const app = express()
const port = 3000;

app.get("/", (req , res) =>{
   res.send("hi gaurav")
})
const connectDb = async() =>{
   try{
     await mongoose.connect(process.env.MONGO_URI)
     console.log("mongoDb connected")
   } catch(error){
        console.log(error)
   }
}
connectDb()

app.listen(port , () =>{
    console.log(`Example apps listening on port ${port}`)
})