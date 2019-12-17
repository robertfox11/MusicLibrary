class Artist {
    constructor(id, nameArtis, musicGener, linkGener) {
        this.id = id;
        this.nameArtis = nameArtis;
        this.musicGener = musicGener;
        this.linkGener = linkGener;
    }
    getArtist() {
        var tags = $('#autocomplete');
        console.log(tags.val())
        let cors = 'https://cors-anywhere.herokuapp.com';
        let link = 'https://www.apple.com/itunes/link/';
        // console.log(tags.value)
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: "https://itunes.apple.com/search?term=" + tags.val() + "&entity=musicArtist",
            data: tags,
            success: function(response) {
                console.log(response)

                var listaSearch = $("#list-search");

                $.each(response.results, function(index, element) {
                    var artist = new Artist(element['artistId'], element['artistName'], element['primaryGenreName'], element['artistLinkUrl'])
                    listaSearch.append(
                        '<div class="mb-4 card-desk col-md-4 text-center">' +
                        '<div class="mb-1 card shadow-sm">' +
                        '<div class="card-header">' +
                        '<h2 class="my-0 font-weight-bold">' + artist.nameArtis + '</h2>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<h4 class="mb-1">' + artist.musicGener +
                        '</h4>' +
                        '<a  class="badge badge-primary" data-id=' + artist.id + ' ' + 'href=' + artist.linkGener + ' target=_blank>link</a>' +
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