const express = require("express");
const route = require("./router/file.route")

const app = express()
app.use(express.json());
app.use("/api/file", route)
app.get('/', (req, res) =>{
    res.send("Api created succussfully");
})

const createNotesController = async(req, res) =>{
    try{
        console.log(req.body)
        console.log(req.file)
     
        return res.status(201).json({
            message: "file create successfully",
            data: {
                body: req.body,
                file: req.file
            },
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}





module.exports = {
    app,
    createNotesController
}