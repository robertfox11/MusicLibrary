// import { Songs } from "./Songs";
$(document).ready(function() {
    var songs = new Songs();
    // songs.getSongsNames()

    // var user = [];
    $('#ajax').click(function() {

    });
    $("#boton-usuarios").on("click", function() {
        songs.getSongNAmes()
            // let cors = 'https://cors-anywhere.herokuapp.com';
    });
    // $('#autocomplete').autocomplete({
    //     serviceUrl: '/autocomplete/countries',
    //     onSelect: function(suggestion) {
    //         alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    //     }
    // });
    // var countries = [
    //     { value: 'Andorra', data: 'AD' },
    //     // ...
    //     { value: 'Zimbabwe', data: 'ZZ' }
    // ];
    // $("#autocomplete").autocomplete({
    //     source: countries

    // });
    // $('#autocomplete').autocomplete({
    //     source: countries,
    //     onSelect: function(suggestion) {
    //         alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    //     }
    // });
    // var _formInput = $('input');
    // _formInput.on('keydown', function(params) {
    //     var _text = $("#text");
    //     // _text.html(params.type + ":" + params.which);
    //     _text.text($(this).val()).show();

});


// function getDatos() {
//     let url = 'https://itunes.apple.com/search? término = jack + johnson';
//     console.log(url)
// }
// })