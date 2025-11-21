const express = require("express");
const cors = require("cors");

const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());

let testPro;

app.post("/api/productInfo", (req, res) => {
    const prodInfoUser = req.body;
    let {productName, productPrice} = prodInfoUser;

    testPro = productName;
    
});



app.get("/api/cart", (req,res) => {
    res.json(testPro);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});