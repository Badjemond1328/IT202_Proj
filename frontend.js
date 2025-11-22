function shoppingCartClick(){
    let productName = document.querySelector(".productName").textContent;
    let productPrice = document.querySelector(".price").textContent;
    let productImg = document.querySelector(".prod-img").getAttribute("src");

    console.log(productImg);

    console.log(productName, productPrice);

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