function addProductToCart(productName, productPrice, productImg) {
    const itemsHolder = document.querySelector('.items');

    // Create a new product div
    const productDiv = document.createElement('div');
    productDiv.classList.add('product', 'mb-3'); 

    
    productDiv.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mx-auto d-block image" width="100" height="100" src="${productImg}">
            </div>
            <div class="col-md-8">
                <div class="info">
                    <div class="row">
                        <div class="col-md-5 product-name">
                            <div class="product-name">
                                <p class="cart-item-name">${productName}</p>
                                <div class="product-info">
                                    <div>Size: <span class="value"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 quantity">
                            <label for="quantity">Quantity:</label>
                            <input type="number" value="1" class="form-control quantity-input">
                        </div>
                        <div class="col-md-3 price">
                            <span>${productPrice}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-center">
                <button class="btn btn-danger btn-sm remove-item">Remove</button>
            </div>
            </div>
            
        </div>
        </div>
    `;
    

    itemsHolder.appendChild(productDiv);

    productDiv.querySelector('.remove-item').addEventListener('click', () => {
        productDiv.remove();
        
        
    });
    
    
}

