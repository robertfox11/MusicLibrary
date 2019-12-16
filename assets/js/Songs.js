class Songs {
    constructor(id, caratula, songsNames, artistNames, albumNames, songsPrices, releaseDate, songLength, musicGener, audioSong, linkSongs) {

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
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: "https://itunes.apple.com/search?term=" + tags.val(),
            // data: tags,
            success: function(response) {
                console.log(response)

                var listaSearch = $("#list-search");

                $.each(response.results, function(index, element) {
                    var song = new Songs(element['trackId'], element['artworkUrl100'], element['trackName'], element['artistName'], element['collectionName'], element['trackPrice'], element['releaseDate'], element['trackTimeMillis'], element['primaryGenreName'], element['previewUrl'], element['trackViewUrl'])
                    listaSearch.append(
                        '<div class="mb-4 card-desk col-md-4 text-center">' +
                        '<div class="mb-1 card shadow-sm">' +
                        '<div class="card-header">' +
                        '<h2 class="my-0 font-weight-bold">' + song.artistNames + '</h2>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<img src=' + song.caratula + ' class="imgSearch"></img>' +
                        '<h4 class="mb-1">' + song.albumNames +
                        '</h4>' +
                        '<p>' + song.id + '</p>' +
                        '<h6 class="mb-1">' + song.songsNames +
                        '</h6>' + '<span class="card-title mx-auto stock"> price €/' + song.songsPrices + '</span>' +
                        '<h5 class="list-unstyled mt-3 mb-4">' + song.musicGener + '</h5>' +
                        '<h5 class="list-unstyled mt-3 mb-4">' + song.releaseDate + '</h5>' +
                        '<p class="list-unstyled mt-3 mb-4"> Timer ' + song.songLength + '</p>' +
                        '<a  class="badge badge-primary" data-id=' + song.id + ' ' + 'href=' + song.linkSongs + ' target=_blank>link</a>' +
                        '<audio id=' + 'play' + song.id + ' ' + 'src=' + song.audioSong + '></audio>' +
                        '<div>' +
                        '<button id=' + 'btnPlay' + song.id + ' ' + ' submit="submit" >play</button>' +
                        '<button id=' + 'btnPause' + song.id + ' ' + 'submit="submit">pause</button>' +
                        '<button id=' + 'btnStop' + song.id + ' ' + 'submit="submit">Stop</button>' +
                        '</div> ' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );

                    var btnPlay = document.querySelectorAll('#btnPlay' + song.id);
                    console.log(btnPlay)
                    var btnPause = document.querySelectorAll('#btnPause' + song.id);
                    var btnStop = document.querySelectorAll('#btnStop' + song.id);
                    var _audio = document.querySelectorAll('#play' + song.id);

                    btnPlay.forEach(function(index) {
                        index.addEventListener('click', function() {
                            _audio.forEach(function(params) {
                                params.play();
                            })
                        })
                    })
                    btnPause.forEach(function(index) {
                        index.addEventListener('click', function() {
                            _audio.forEach(function(params) {
                                params.pause();
                            })
                        })
                    })
                    btnStop.forEach(function(index) {
                        index.addEventListener('click', function() {
                            _audio.forEach(function(params) {
                                params.load();

                            })
                        })
                    })

                    // addEventListener('click', function() {
                    //     var _audio = document.getElementById('play' + song.id);

                    //     _audio.play();
                    // })
                });
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            },
            timeout: 3000
        });
    }
}