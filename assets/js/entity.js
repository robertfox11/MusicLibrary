function arrayClass(response, entity) {
    var array = [];
    switch (entity) {
        case 'song':
            $.each(response, function(index, element) {
                array.push(new Song(element.trackId, element.artworkUrl100, element.trackName, element.artistName, element.trackPrice, element.releaseDate, element.trackTimeMillis, element.primaryGenreName, element.previewUrl, element.trackViewUrl))
            });
            break;
        case 'musicArtist':
            $.each(response, function(index, element) {
                array.push(new Artist(element.artistName, element.primaryGenreName, element.artistLinkUrl))

            });
            break;
        case 'album':
            $.each(response, function(index, element) {
                var album = new Album(element.artworkUrl100, element.collectionName, element.artistName, element.collectionPrice, element.trackCount, element.releaseDate, element.primaryGenreName)
                array.push(album)
            });
            break;
        case 'musicVideo':
            $.each(response, function(index, element) {
                var video = new Video(element.trackId, element.artworkUrl100, element.trackName, element.artistName, element.trackPrice, element.releaseDate, element.trackTimeMillis, element.primaryGenreName, element.previewUrl, element.trackViewUrl)
                array.push(video)
            });
            break;
        default:
            $.each(response, function(index, element) {
                array.push(new Song(element.trackId, element.artworkUrl100, element.trackName, element.artistName, element.trackPrice, element.releaseDate, element.trackTimeMillis, element.primaryGenreName, element.previewUrl, element.trackViewUrl))
            });
            break;
    }
    return array;

}