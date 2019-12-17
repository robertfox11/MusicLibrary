class Album {
    constructor(id, caratula, nameAlbum, nameArtist, priceAlbum, numSongs, releaseDate, generMusic) {
        this.id = id;
        this.caratula = caratula;
        this.nameAlbum = nameAlbum;
        this.nameArtist = nameArtist;
        this.priceAlbum = priceAlbum;
        this.numSongs = numSongs;
        this.releaseDate = releaseDate;
        this.generMusic = generMusic;
    }
    getAlbum() {
        var tags = $('#autocomplete');
        console.log(tags.val())
        let cors = 'https://cors-anywhere.herokuapp.com';
        let link = 'https://www.apple.com/itunes/link/';
        // console.log(tags.value)
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: "https://itunes.apple.com/search?term=" + tags.val(),
            data: tags,
            success: function(response) {
                console.log(response)

                var listaSearch = $("#list-search");

                $.each(response.results, function(index, element) {
                    var album = new Album(element['trackId'], element['artworkUrl100'], element['collectionName'], element['artistName'], element['collectionPrice'], element['trackCount'], element['releaseDate'], element['primaryGenreName'])
                    listaSearch.append(
                        '<div class="mb-4 card-desk col-md-4 text-center">' +
                        '<div class="mb-1 card shadow-sm">' +
                        '<div class="card-header">' +
                        '<h2 class="my-0 font-weight-bold">' + album.nameArtist + '</h2>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<img src=' + album.caratula + ' class="imgSearch"></img>' +
                        '<ul class="list-group list-group-flush">' +
                        '<li class="list-group-item">' + album.nameAlbum + '</li>' +
                        '<li class="list-group-item">Num Songs' + album.numSongs + '</li>' +
                        '<li class="list-group-item">' + album.releaseDate + '</li>' +
                        '</ul>' +
                        '<h4 class="mb-1">' + album.generMusic +
                        '</h4>' +
                        '<p>' + album.id + '</p>' +
                        '<h4 class="mb-1"> Price Album €' + album.priceAlbum +
                        '</h4>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );
                });
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            },
            timeout: 3000
        });
    }
}