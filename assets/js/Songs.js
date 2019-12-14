class Songs {
    constructor(caratula, songsNames, artistNames, albumNames, songsPrices, releaseDate, songLength, musicGener, audioSong, linkSongs) {
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
        let cors = 'https://cors-anywhere.herokuapp.com';
        // console.log(tags.value)
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: "https://itunes.apple.com/search?term=" + tags.val(),
            // + this.songsNames + "&limit=5",
            success: function(response) {
                console.log(response)

                var listaUsuarios = $("#lista-usuarios");

                $.each(response.results, function(index, element) {
                    listaUsuarios.append(
                        '<div>' +
                        '<p>' + element.artistName + ' ' + element.trackName + '</p>' +
                        '<img src=' + element.artworkUrl30 + '></img>' +
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