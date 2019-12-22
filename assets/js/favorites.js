class Favorites {
    // add products cart
    $("#list-search").on("click", function(e) {
        if ($(event.target).hasClass('btn')) {
            var idBtn = $(e.target).attr('id');
            console.log(idBtn)
            saveProductLocalStorage(idBtn);
        }
    });
    tobuyProducts(e) {
            e.preventDefault();
            if (e.target.classList.contains('add_cart')) {
                const producto = e.target.parentElement.parentElement;
                this.readDataProducts(producto);
                // console.log(producto);
            }
        }
        // creamos otro metodo para leer los datos del producto
    readDataProducts(product) {
            const infoProduct = {
                imagen: product.querySelector('img').src,
                marca: product.querySelector('h4').textContent,
                precio: product.querySelector('.precio span').textContent,
                stock: product.querySelector('.stock').textContent,
                id: product.querySelector('a').getAttribute('data-id'),
                cantidad: 1
            }
            let productsLS;
            productsLS = this.getProductLocalStorage();
            productsLS.forEach(function(productLS) {
                if (productLS.id === infoProduct.id) {
                    productsLS = productLS.id;
                }
            });

            if (productsLS === infoProduct.id) {
                alert("El producto ya esta agregado")
            } else {
                this.insert_car(infoProduct);
            }
            // console.log(infoProducto);

        }
        //creamos otro metodo para insetar cart
    insert_car(product) {
            //     //recibimos un valor del producto
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
                <img src="${product.imagen}" width = 100>
            </td>
            <td>${product.marca}</td>
            <td>${product.precio}</td>
            <td>${product.cantidad}</td>
            <td>
                <a href = "#"  class= "borrar_producto btn btn-danger"   data-id="${product.id}">x</a>
            </td>
            `;
            list_products.appendChild(row);
            this.saveProductLocalStorage(product);
            // console.log(row);
            // console.log(producto)
        }
        //remove product selection
    removeProduct(e) {
        //remove product
        e.preventDefault();
        let product, productoId;
        if (e.target.classList.contains('borrar_producto')) {
            e.target.parentElement.parentElement.remove();
            product = e.target.parentElement.parentElement;
            productoId = product.querySelector('a').getAttribute('data-id');
            // var _productoId = JSON.stringify(productoID)
            // localStorage.removeItem(productoId);
            // console.log(localStorage + "articulo elimando" + productoId);
        }
        this.removeProductLocalStorage(productoId);
        this.calculateTotal();
    }

    empty_Cart(e) {
            e.preventDefault();
            while (list_products.firstChild) {
                list_products.removeChild(list_products.firstChild);
                localStorage.clear();
            }
            // this.vaciarCarritoLocalStorage();
            return false;
        }
        //Guardamos los datos local Storage
    saveProductLocalStorage(product) {
            let products;
            products = this.getProductLocalStorage();
            products.push(product);

            localStorage.setItem('products', JSON.stringify(products));
            // console.log(products)

        }
        //     //     //obtenemos los datos localStorage
    getProductLocalStorage() {
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
        //Eliminar producto LocalStorage
    removeProductLocalStorage(productoID) {
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
        //leer como quedo local storage en la ultima visita
    readLocalStorage() {
            let productoLS;
            productoLS = this.getProductLocalStorage();
            productoLS.forEach(function(product) {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>
                <img src="${product.imagen}" width = 100>
            </td>
            <td>${product.marca}</td>
            <td>${product.precio}</td>
            <td>${product.cantidad}</td>
            <td>
                <a href = "#"  class= "borrar_producto btn btn-danger" data-id="${product.id}">x</a>
            </td>
            `;
                list_products.appendChild(row);
            });
        }
        //leer local storage comprando
    readLocalStoragebuy() {
        let productoLS;
        productoLS = this.getProductLocalStorage();
        productoLS.forEach(function(product) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${product.imagen}" width=100>
                </td>
                <td>${product.marca}</td>
                <td>${product.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" name="${product.id}" value=${product.cantidad}>
                </td>
                <td id='subtotales'></td>
                <td>
                <a href = "#"  class= "borrar_producto btn btn-danger" data-id="${product.id}">x</a>
                </td>
            `;
            list_Buy.appendChild(row);
        });
    }
    vaciarLocalStorage() {
            localStorage.clear();
        }
        //procesar agregando producto
    processOrder(e) {
            e.preventDefault();
            if (this.getProductLocalStorage().length === 0) {
                alert("no hay productos en el carrito  agrega algun producto");
            } else {
                location.href = "buy.html";
            }
        }
        //calculamos el total del compra
    calculateTotal() {
            let productsLS;
            let total = 0,
                iva = 0,
                subtotal = 0;
            productsLS = this.getProductLocalStorage();
            for (let i = 0; i < productsLS.length; i++) {
                let element = Number(productsLS[i].precio * productsLS[i].cantidad);
                total = total + element;

            }

            iva = parseFloat(total * 0.21).toFixed(2);
            subtotal = parseFloat(total - iva).toFixed(2);

            document.getElementById('subtotal').innerHTML = "€/. " + subtotal;
            document.getElementById('iva').innerHTML = "€/. " + iva;
            document.getElementById('total').innerHTML = "€/. " + total.toFixed(2);
        }
        //preocesar compra completada 
    processBuy(e) {
        e.preventDefault();
        if (buy.getProductLocalStorage().length === 0) {
            alert("no hay producto seleccionado").then(function() {
                window.location = "index.html";
            })
        } else if (cliente.value === '' || correo.value === '') {
            alert("ingrese todos los campos requeridos")
        } else {
            const loadGif = document.querySelector('#cargando');
            loadGif.style.display = 'block';

            const send = document.createElement('img');
            send.src = 'compra/mail.gif';
            send.style.display = 'block';
            send.width = '150';

            setTimeout(() => {
                loadGif.style.display = 'none';
                document.querySelector('#loaders').appendChild(send);
                setTimeout(() => {
                    send.remove();
                    buy.vaciarLocalStorage();
                    window.location = "index.html";
                }, 2000);
            }, 3000);
        }
    }
    calculateTotalR() {
        let productsLS;
        let total = 0,
            iva = 0,
            subtotal = 0;
        productsLS = this.getProductLocalStorage();
        for (let i = 0; i < productsLS.length; i++) {
            let element = Number(productsLS[i].precio * productsLS[i].cantidad);
            total += element;
            console.log(total)

        }

        iva = parseFloat(total * 0.21).toFixed(2);
        subtotal = parseFloat(total - iva).toFixed(2);

        document.getElementById('subtotales').innerHTML = "€/. " + total;

    }
}