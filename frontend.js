function shoppingCartClick(){
    let productName = document.querySelector("#productName").textContent;
    let productPrice = document.querySelector(".price").textContent;
    let productImg = document.querySelector("#productImg").getAttribute("src");
    let quantity = 1;

    console.log(productName, productPrice, productImg);

    

    (async () => {
				try {
					const response = await fetch("http://localhost:5500/api/cart");
				
					
					const userCartData = await response.json();
					console.log("Cart data:", userCartData);

					
					
				} catch (err) {
					console.error("Fetch failed:", err);
				}
			})();


    try {
        const responseProdInfo = fetch("http://localhost:5500/api/productInfoCart", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productName, productPrice, productImg,quantity})
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

function display(card){
    

    let productName = card.querySelector(".productName").textContent;
    let productPrice = card.querySelector(".price").textContent;
    let productImg = card.querySelector(".prod-img").getAttribute("src");

    

    try {
        const responseProdInfo = fetch("http://localhost:5500/api/productInfo", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productName, productPrice, productImg})
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }

    
}