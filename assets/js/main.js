$(document).ready(function() {
    //get id btn search
    var _btn = $("#btn-search");
    for (var i = 1; i <= 200; i++) {
        //realizamos append y creamos las opciones dinamicas hasta 200
        $("#limit").append("<option value='" + i + "'>" + i + "</option>");
    }
    _btn.click(function(e) {
        e.preventDefault();
        //get all id and filters
        var term = $('#Search').val();
        var entity = $('#inputGroupSelect01').val();
        var country = $('#Country').val();
        var explicit = $('#Explicit').val();
        var limit = $('#limit').val();
        // console.log(term);
        // console.log(country);
        // console.log(explicit);
        // console.log(term)
        // song()
        //get function de ajax ya create con los parametros correspondiente 
        getDataItunes(term, entity, country, explicit, limit, (function(err, results) {
            if (err) {
                console.log('There was an error');
            } else {
                //get first el array de la class con los parametros results y entity para recoger los casos procedidos
                const entities = arrayClass(results, entity);
                //mostramos por pantalla los datos realizados show results
                showResults(entities, entity)
            }
        }));
    });
});