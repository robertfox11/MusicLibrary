$("#list-search").on("click", function(e) {
    if ($(event.target).hasClass('btn')) {
        var idBtn = $(e.target).attr('id');
        var select = $('#artist' + idBtn).text();
        // saveProductLocalStorage(idBtn);
        console.log(select)

        saveProductLocalStorage(select)
        $("#favorites").append('<h4 id="little">' + select + '</h4>')


    }
});


function saveProductLocalStorage(product) {
    let products;
    products = this.getProductLocalStorage();
    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));
    // console.log(products)

}

function getProductLocalStorage() {
    let productLS1;
    if (localStorage.getItem('products') === null) {
        productLS1 = [];
        // console.log(productLS1)
    } else {
        productLS1 = JSON.parse(localStorage.getItem('products'));
        // console.log(productLS1);
    }
    return productLS1;
}

function removeProductLocalStorage(productoID) {
    let productsLS2;
    productsLS2 = this.getProductLocalStorage();

    productsLS2.forEach(function(productoLS, index) {
        if (productoLS.id === productoID) {
            productsLS2.splice(index, 1);
        }
    });
    //actualizamos localstorge
    localStorage.setItem('products', JSON.stringify(productsLS2));
}

function vaciarLocalStorage(para) {
    localStorage.clear(para);
}