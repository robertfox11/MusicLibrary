// import { getDefaultSettings } from "http2"

$('#ajax').click(function() {
    var _load = $('#load');
    _load.load("https://itunes.apple.com/search?term=jack+johnson&limit=25");
    console.log(_load)
        // getDatos();
});

// function getDatos() {
//     let url = 'https://itunes.apple.com/search? término = jack + johnson';
//     console.log(url)
// }