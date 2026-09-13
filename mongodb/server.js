const app = require("./src/app")
const connectDb = require("./src/config/db")
require("dotenv").config()

const port = 3000;

connectDb()
app.listen(port , () =>{
    console.log(`Example apps listening on port ${port}`)
})