$(document).ready(function() {
    //create objets with class songs
    var songs = new Songs();
    $('#ajax').click(function() {

    });
    $("#btn-search").on("click", function() {
        songs.getSongNAmes()
            // let cors = 'https://cors-anywhere.herokuapp.com';
    });
});