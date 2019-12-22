// Function ajax con los parametros correspondiente
function getDataItunes(term, entity, country, explicit, limit, callback) {
    var _url = 'https://itunes.apple.com/search?';
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: _url,
        data: {
            "term": term,
            "entity": entity,
            "country": country,
            "limit": limit,
            "explicit": explicit
        },

        success: function(response) {
            const results = response.results;
            console.log(results)
            if (callback) callback(null, results);

        },
        error: function(err) {
            if (callback) callback(err, null);
        },

    });
}