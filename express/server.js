const express = require('express');
const app = express()
const port = 3000
app.use(express.json())

const products = []
app.get('/', (req, res) => {

  const response = res.json({
    massage: "Products fetched successfully",
    data: products
  })
  console.log(response)
})
app.post("/create", (req, res) => {
    const body = req.body;
    console.log("REQUEST BODY:", body);

    products.push(body);

    res.status(201).json({
        message: "Product created successfully",
        data: body
    });
});

app.delete("/delete:id", (req, res) => {
    const id = Number(req.params.id);
    const userData = products.filter((val) => val.id !== id)
    products = userData
    products.length = 0;
    products.push(...userData);
    res.send(userData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})