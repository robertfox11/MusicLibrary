class Video {
    constructor(id, cover, nameSongs, artistName, songsPrice, releaseDate, songLength, musicGner, clipVideo, linkMusiVideo) {
        this.id = id;
        this.cover = cover;
        this.nameSongs = nameSongs;
        this.artistName = artistName;
        this.songsPrice = songsPrice;
        this.releaseDate = releaseDate;
        this.songLength = songLength;
        this.musicGner = musicGner;
        this.clipVideo = clipVideo;
        this.linkMusiVideo = linkMusiVideo;
    }
    getvideo() {
        var tags = $('#autocomplete');
        console.log(tags.val())
        let cors = 'https://cors-anywhere.herokuapp.com';
        let link = 'https://www.apple.com/itunes/link/';
        // console.log(tags.value)
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: "https://itunes.apple.com/search?term=" + tags.val() + "&media=musicVideo",
            data: tags,
            success: function(response) {
                console.log(response)

                var listaSearch = $("#list-search");

                $.each(response.results, function(index, element) {
                    var video = new Video(element['trackId'], element['artworkUrl100'], element['trackName'], element['artistName'], element['trackPrice'], element['releaseDate'], element['trackTimeMillis'], element['primaryGenreName'], element['previewUrl'], element['trackViewUrl'])
                    listaSearch.append(
                        '<div class="mb-4 card-desk col-md-4 text-center">' +
                        '<div class="mb-1 card shadow-sm">' +
                        '<div class="card-header">' +
                        '<h2 class="my-0 font-weight-bold">' + video.artistName + '</h2>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<img src=' + video.cover + ' class="imgSearch"></img>' +
                        '<ul class="list-group list-group-flush">' +
                        '<li class="list-group-item">' + video.nameSongs + '</li>' +
                        '<li class="list-group-item">Time Songs' + video.songLength + '</li>' +
                        '<li class="list-group-item">' + video.releaseDate + '</li>' +
                        '</ul>' +
                        '<h4 class="mb-1">' + video.musicGner +
                        '</h4>' +
                        '<p>' + video.id + '</p>' +
                        '<a  class="badge badge-primary" data-id=' + video.id + ' ' + 'href=' + video.linkMusiVideo + ' target=_blank>link</a>' +
                        '<h4 class="mb-1"> Price Video €' + video.songsPrice +
                        '</h4>' +
                        '<div class="embed-responsive embed-responsive-1by1">' +
                        '<video controls>' +
                        '<source controls id=' + 'video' + video.id + ' ' + 'src=' + video.clipVideo + ' ' + 'type="video/m4v">' +
                        '<source controls id=' + 'video' + video.id + ' ' + 'src=' + video.clipVideo + ' ' + 'type="video/webm">' +
                        '</video>' +
                        '</div>' +
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