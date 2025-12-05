const express = require("express");
const cors = require("cors");

const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());

let lastProduct;
let displayProduct;

let cart = [];


app.post("/api/productInfo", (req, res) => {
    const prodInfoUser = req.body;
    let {productName, productPrice, productImg} = prodInfoUser;
    
    
    displayProduct = {productName, productPrice, productImg};
    
    
});

app.post("/api/productInfoCart", (req, res) => {
    const prodInfoUser = req.body;
    let {productName, productPrice, productImg, quantity} = prodInfoUser;

    const existingItem = cart.find(item => item.productName === productName);
    
    if(existingItem){
      existingItem.quantity++;
    }
    else{
      lastProduct = {productName, productPrice, productImg, quantity};
      cart.push(lastProduct);
    }

    
    
    
});

app.post("/api/removeFromCart", (req, res) =>{
  const {productName} = req.body;

  cart = cart.filter(item => item.productName != productName);
  

});

app.post("/api/changeQty", (req, res) => {
    const {productName, quantity} = req.body;

    const item = cart.find( i => i.productName === productName);

    
    if(quantity == 0){
      item.quantity = 1;
    }
    else{
      item.quantity = quantity
    }

    

});

app.get("/api/clearCart", (req,res) => {
    cart = [];
});

app.get("/api/getSubtotal", (req,res) => {
    let subtotal = 0;
    let tax = 0;
    const shipping = 5.99;
    let total = 0;
    cart.forEach(item => {
      let priceNum = 0;  
      priceNum = parseFloat(item.productPrice.replace("$", ""));

      
      subtotal = subtotal + (item.quantity * priceNum);
      
        
    });
    tax = subtotal * 0.06625;
    total = shipping + tax + subtotal;

    tax = tax.toFixed(2);
    total = total.toFixed(2);
    subtotal = subtotal.toFixed(2);

    
    res.json({subtotal, tax, total});

});

app.get("/api/cart", (req,res) => {
    res.json(cart);
});

app.get("/api/getProductInfo", (req,res) => {
    res.json(displayProduct);
    
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});