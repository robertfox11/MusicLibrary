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

                var listaUsuarios = $("#lista-usuarios");

                $.each(response.results, function(index, element) {
                    var song = new Songs(element['artistId'], element['artworkUrl30'], element['trackName'], element['artistName'], element['collectionName'], element['trackPrice'], element['releaseDate'], element['trackTimeMillis'], element['primaryGenreName'], element['previewUrl'], element['trackViewUrl'])
                    listaUsuarios.append(
                        '<div>' +
                        '<p>' + song.artistNames + ' ' + song.songsNames + '</p>' +
                        '<p>' + 'TrackID ' + song.id + '</p>' +
                        '<img src=' + song.caratula + '></img>' +
                        '<p>"Album" ' + song.albumNames + ' price ' + song.songsPrices + '</p>' +
                        '<p>"Date" ' + song.releaseDate + ' time ' + song.songLength + '</p>' +
                        '<p>"Genero" ' + song.musicGener + ' time ' + song.musicGener + '</p>' +
                        '<a href=' + song.linkSongs + ' target=_blank>Link </a>' +
                        '<audio src=' + song.audioSong + '></audio>' +
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