function showResults(response, entity) {
    var results = $("#list-search");
    results.empty();

    $.each(response, function(index, element) {

        if (entity == 'song') {
            // console.log(response[index])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + response[index].artistName + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<img src=' + response[index].cover + ' class="imgSearch"></img>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + response[index].nameSongs + '</li>' +
                '<li class="list-group-item">Num Songs' + response[index].trackCount + '</li>' +
                '<li class="list-group-item">' + response[index].releaseDate + '</li>' +
                '</ul>' +
                '<h4 class="mb-1">' + response[index].musicGner +
                '</h4>' +
                '<p>' + response[index].songLength + '</p>' +
                '<p>' + response[index].linkSong + '</p>' +
                '<h4 class="mb-1"> Price Music €' + response[index].songsPrice +
                '</h4>' +
                '<a  class="badge badge-primary" href=' + response[index].linkSong + ' ' + 'target=_blank>link</a>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        }
    });


    $.each(response, function(index, element) {
        // var artist = new Artist(element.artistName, element.primaryGenreName, element.artistLinkUrl)
        if (entity == 'musicArtist') {
            // console.log(response[index])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + response[index].nameArtis + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<h4 class="mb-1">' + response[index].musicGener +
                '</h4>' +
                '<a  class="badge badge-primary" data-id=' + response[index].artistId + ' ' + 'href=' + response[index].linkGener + ' target=_blank>link</a>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        }
    });


    $.each(response, function(index, element) {

        if (entity == 'album') {
            // console.log(response[index])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + response[index].nameArtist + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<img src=' + response[index].cover + ' class="imgSearch"></img>' +
                '<ul class="list-group list-group-flush">' +
                // '<li class="list-group-item">' + response[index].nameAlbum + '</li>' +
                '<li class="list-group-item">Num Songs' + response[index].nameAlbum + '</li>' +
                '<li class="list-group-item">' + response[index].releaseDate + '</li>' +
                '</ul>' +
                '<h4 class="mb-1">' + response[index].generMusic +
                '</h4>' +
                '<p> number songs ' + response[index].numSongs + '</p>' +
                '<h4 class="mb-1"> Price Album €' + response[index].priceAlbum +
                '</h4>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        }
    });


    $.each(response, function(index, element) {
        if (entity == 'musicVideo') {
            console.log(response[index])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + response[index].artistName + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<img src=' + response[index].cover + ' class="imgSearch"></img>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + response[index].nameSongs + '</li>' +
                '<li class="list-group-item">Time Songs' + response[index].songLength + '</li>' +
                '<li class="list-group-item">' + response[index].releaseDate + '</li>' +
                '</ul>' +
                '<h4 class="mb-1">' + response[index].musicGner +
                '</h4>' +
                '<a  class="badge badge-primary" href=' + response[index].linkMusiVideo + ' target=_blank>link</a>' +
                '<h4 class="mb-1"> Price Video €' + response[index].songsPrice +
                '</h4>' +
                '<div class="embed-responsive embed-responsive-1by1">' +
                '<video controls>' +
                '<source controls id=' + 'video src=' + response[index].clipVideo + ' ' + 'type="video/m4v">' +
                '<source controls id=' + 'video src=' + response[index].clipVideo + ' ' + 'type="video/webm">' +
                '</video>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'

            );
        }
    })
}