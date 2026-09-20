const app = require('./src/app')
const connectDb = require("./src/config/db")
require("dotenv").config()
const port = 4000;

connectDb()

app.listen(port, () =>{
    console.log(`server running on ${port}`)
})