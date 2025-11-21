function shoppingCartClick(){
    let productName = document.querySelector(".productName").textContent;
    let productPrice = document.querySelector(".price").textContent;

    console.log(productName, productPrice);

    try {
        const responseProdInfo = fetch("http://localhost:5500/api/productInfo", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productName, productPrice})
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}