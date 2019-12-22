const emptyFav = document.getElementById('emptyFav');
console.log(emptyFav)
    // emptyFav.cl
emptyFav.addEventListener('click', function(e) {
    e.preventDefault()
    localStorage.clear()
})