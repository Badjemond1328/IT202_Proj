(async () => {
    try {
        const response = await fetch("http://localhost:5500/api/getSubtotal");

        
        const priceValues = await response.json();
        const {subtotal, tax, total} = priceValues;
        
        
        document.getElementById("subtotal").textContent = "$" + subtotal;
        document.getElementById("tax").textContent = "$" + tax;
        document.getElementById("total").textContent = "$" + total;
        
        
        
    } catch (err) {
        console.error("Fetch failed:", err);
    }


    try {
        const response = await fetch("http://localhost:5500/api/cart");
    
        
        const userCartData = await response.json();
        console.log("Cart data:", userCartData);

        createAndClearCheckout(userCartData);
        
        
        
    } catch (err) {
        console.error("Fetch failed:", err);
    }

    

})();



function createAndClearCheckout(cart){
    const itemsHolder = document.querySelector('.items');

    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', 'mb-3'); 

    
        productDiv.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mx-auto d-block image" width="100" height="100" src="${item.productImg}">
                </div>
                <div class="col-md-8">
                    <div class="info">
                        <div class="row">
                            <div class="col-md-5 product-name">
                                <div class="product-name">
                                    <p class="cart-item-name">${item.productName}</p>
                                    <div class="product-info">
                                        <div><span class="value"></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 quantity">
                                <label for="quantity">Quantity:</label>
                                <label for="quantity">${item.quantity}</label>
                               
                            </div>
                            <div class="col-md-3 price">
                                <span>${item.productPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 d-flex align-items-center">
                    
                </div>
                </div>
                
            </div>
            </div>
        `;
        

        itemsHolder.appendChild(productDiv);

        

        
    });

    (async () => {
        try {
        const response = await fetch("http://localhost:5500/api/clearCart");
        
        
        
    } catch (err) {
        console.error("Fetch failed:", err);
    }
    })();
}