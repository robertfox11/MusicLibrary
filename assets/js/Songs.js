class Songs {
    constructor(id, caratula, songsNames, artistNames, albumNames, songsPrices, releaseDate, songLength, musicGener, audioSong, linkSongs) {
        // , albumNames, songsPrices, releaseDate, songLength, musicGener, audioSong, linkSongs
        this.id = id;
        this.caratula = caratula;
        this.songsNames = songsNames;
        this.artistNames = artistNames;
        this.albumNames = albumNames;
        this.songsPrices = songsPrices;
        this.releaseDate = releaseDate;
        this.songLength = songLength;
        this.musicGener = musicGener;
        this.audioSong = audioSong;
        this.linkSongs = linkSongs;
    }

    getSongNAmes() {
        var tags = $('#autocomplete');
        console.log(tags.val())
        let cors = 'https://cors-anywhere.herokuapp.com';
        let link = 'https://www.apple.com/itunes/link/';
        // console.log(tags.value)
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: "https://itunes.apple.com/search?term=" + tags.val(),
            data: tags,
            success: function(response) {
                console.log(response)

                var listaUsuarios = $("#list-search");

                $.each(response.results, function(index, element) {
                    var song = new Songs(element['artistId'], element['artworkUrl100'], element['trackName'], element['artistName'], element['collectionName'], element['trackPrice'], element['releaseDate'], element['trackTimeMillis'], element['primaryGenreName'], element['previewUrl'], element['trackViewUrl'])
                    listaUsuarios.append(
                        '<div class="mb-4 card-desk col-md-4 text-center">' +
                        '<div class="mb-1 card shadow-sm">' +
                        '<div class="card-header">' +
                        '<h2 class="my-0 font-weight-bold">' + song.artistNames + '</h2>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<img src=' + song.caratula + ' class="imgSearch"></img>' +
                        '<h4 class="mb-1">' + song.albumNames +
                        '</h4>' +
                        '<h6 class="mb-1">' + song.songsNames +
                        '</h6>' + '<span class="card-title mx-auto stock"> price €/' + song.songsPrices + '</span>' +
                        '<h5 class="list-unstyled mt-3 mb-4">' + song.musicGener + '</h5>' +
                        '<h5 class="list-unstyled mt-3 mb-4">' + song.releaseDate + '</h5>' +
                        '<p class="list-unstyled mt-3 mb-4"> Timer ' + song.songLength + '</p>' +
                        '<a  class="badge badge-primary" data-id=' + song.id + 'href=' + song.linkSongs + ' target=_blank>link</a>' +
                        '<audio id="mireproductor" src=' + song.audioSong + '></audio>' +
                        '<div>' +

                        '</div> ' +
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