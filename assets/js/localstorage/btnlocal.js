const emptyFav = document.getElementById('emptyFav');
const removeLocal = document.querySelector('.borrar_producto');
console.log(emptyFav)
console.log(removeLocal);
// emptyFav.cl
emptyFav.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.clear()
})

removeLocal.addEventListener('click', (e) => {
    localStorage.removeItem()
})