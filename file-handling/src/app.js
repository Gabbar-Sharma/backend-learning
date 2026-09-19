const express = require("express");
const route = require("./router/file.route")

const app = express()
app.use("/api/file", route)
app.get('/', (req, res) =>{
    res.send("Api created succussfully");
})



module.exports = app