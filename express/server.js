const express = require('express');
const app = express()
const port = 3000
app.use(express.json())
const products = []
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post("/product", (req, res) =>{
     console.log("REQUEST BODY:", req.body);
        res.send(req.body);
        products.push(req.body)

        res.status(201).json
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})