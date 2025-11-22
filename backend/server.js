const express = require("express");
const cors = require("cors");

const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());

let lastProduct;

app.post("/api/productInfo", (req, res) => {
    const prodInfoUser = req.body;
    let {productName, productPrice, productImg} = prodInfoUser;
    
    

    lastProduct = {productName, productPrice, productImg};
    
});



app.get("/api/cart", (req,res) => {
    res.json(lastProduct);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});