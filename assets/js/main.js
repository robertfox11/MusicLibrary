$(document).ready(function() {
    var _btn = $("#btn-search");
    _btn.click(function(e) {
        e.preventDefault();
        var term = $('#Search').val();
        var entity = $('#inputGroupSelect01').val();
        var country = $('#Country').val();
        var explicit = $('#Explicit').val();
        console.log(term)
        console.log(country)
        console.log(explicit)
            // console.log(term)
            // song()
        getDataItunes(term, entity, country, explicit, (function(err, results) {
            if (err) {
                console.log('There was an error');
            } else {
                // console.log(showResults(results));
                showResults(results, entity)
            }
        }))
    })
});