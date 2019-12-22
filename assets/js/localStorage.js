$("#list-search").on("click", function(e) {
    if ($(event.target).hasClass('btn')) {
        var idBtn = $(e.target).attr('id');
        var select = $('#artist' + idBtn).text();
        // saveProductLocalStorage(idBtn);
        console.log(select)

        saveProductLocalStorage(select)
        $("#favorites").append('<h4>' + select + '</h4>')

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