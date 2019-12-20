function showResults(response, entity) {
    var results = $("#list-search");
    results.empty();
    //si es albul, si es song
    if (entity == 'song') {
        $.each(response, function(index, element) {
            // var album = new Album(element['artistId'], element['artworkUrl100'], element['collectionName'], element['artistName'], element['collectionPrice'], element['trackCount'], element['releaseDate'], element['primaryGenreNae'])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + element.artistName + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<img src=' + element.artworkUrl100 + ' class="imgSearch"></img>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + element.collectionName + '</li>' +
                '<li class="list-group-item">Num Songs' + element.trackCount + '</li>' +
                '<li class="list-group-item">' + element.releaseDate + '</li>' +
                '</ul>' +
                '<h4 class="mb-1">' + element.primaryGenreName +
                '</h4>' +
                '<p>' + element.trackId + '</p>' +
                '<h4 class="mb-1"> Price Album €' + element.collectionPrice +
                '</h4>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        });
    }
    if (entity == 'musicArtist') {
        $.each(response, function(index, element) {
            // var album = new Album(element['artistId'], element['artworkUrl100'], element['collectionName'], element['artistName'], element['collectionPrice'], element['trackCount'], element['releaseDate'], element['primaryGenreNa    e'])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + element.artistName + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<h4 class="mb-1">' + element.primaryGenreName +
                '</h4>' +
                '<a  class="badge badge-primary" data-id=' + element.artistId + ' ' + 'href=' + element.artistLinkUrl + ' target=_blank>link</a>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        });
    }
    if (entity == 'album') {
        $.each(response, function(index, element) {
            // var album = new Album(element['artistId'], element['artworkUrl100'], element['collectionName'], element['artistName'], element['collectionPrice'], element['trackCount'], element['releaseDate'], element['primaryGenreNa    e'])
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + element.artistName + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<img src=' + element.artworkUrl100 + ' class="imgSearch"></img>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + element.collectionName + '</li>' +
                '<li class="list-group-item">Num Songs' + element.numSongs + '</li>' +
                '<li class="list-group-item">' + element.releaseDate + '</li>' +
                '</ul>' +
                '<h4 class="mb-1">' + element.primaryGenreName +
                '</h4>' +
                '<p>' + element.trackCount + '</p>' +
                '<h4 class="mb-1"> Price Album €' + element.collectionPrice +
                '</h4>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        });
    }
    if (entity == 'musicVideo') {
        $.each(response, function(index, element) {
            results.append(
                '<div class="mb-4 card-desk col-md-4 text-center">' +
                '<div class="mb-1 card shadow-sm">' +
                '<div class="card-header">' +
                '<h2 class="my-0 font-weight-bold">' + element.artistName + '</h2>' +
                '</div>' +
                '<div class="card-body">' +
                '<img src=' + element.artworkUrl100 + ' class="imgSearch"></img>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + element.trackName + '</li>' +
                '<li class="list-group-item">Time Songs' + element.trackTimeMillis + '</li>' +
                '<li class="list-group-item">' + element.releaseDate + '</li>' +
                '</ul>' +
                '<h4 class="mb-1">' + element.primaryGenreName +
                '</h4>' +
                '<p>' + element.trackId + '</p>' +
                '<a  class="badge badge-primary" data-id=' + element.trackId + ' ' + 'href=' + element.trackViewUrl + ' target=_blank>link</a>' +
                '<h4 class="mb-1"> Price Video €' + element.trackPrice +
                '</h4>' +
                '<div class="embed-responsive embed-responsive-1by1">' +
                '<video controls>' +
                '<source controls id=' + 'video' + element.trackId + ' ' + 'src=' + element.previewUrl + ' ' + 'type="video/m4v">' +
                '<source controls id=' + 'video' + element.trackId + ' ' + 'src=' + element.previewUrl + ' ' + 'type="video/webm">' +
                '</video>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'

            );
        })
    }
}

function song(params) {

}