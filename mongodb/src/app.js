const express = require('express');
const NotesModel = require('./models/noteModel');
const app = express()
app.use(express.json())

app.get("/", (req , res) =>{
   res.send("Notes create...")
})


app.post("/create", async(req, res) =>{
     const {title, description} = req.body

     const newNotes = await NotesModel.create({
        title,
        description,
     })
    res.send({
        success: true,
        message: "Notes create successfully",
        data: newNotes,

    })
})

module.exports = app; 