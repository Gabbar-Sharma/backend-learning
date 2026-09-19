const express = require("express");

const app = express()

app.get('/', (req, res) =>{
    res.send("Api created succussfully");
})



module.exports = app