$(document).ready(function() {
    var _btn = $("#btn-search");
    for (var i = 1; i <= 200; i++) {
        $("#limit").append("<option value='" + i + "'>" + i + "</option>");
    }
    _btn.click(function(e) {
        e.preventDefault();
        var term = $('#Search').val();
        var entity = $('#inputGroupSelect01').val();
        var country = $('#Country').val();
        var explicit = $('#Explicit').val();
        var limit = $('#limit').val();
        console.log(term);
        console.log(country);
        console.log(explicit);
        // console.log(term)
        // song()
        getDataItunes(term, entity, country, explicit, limit, (function(err, results) {
            if (err) {
                console.log('There was an error');
            } else {
                const entities = arrayClass(results, entity);
                showResults(entities, entity)
            }
        }));
    });
});