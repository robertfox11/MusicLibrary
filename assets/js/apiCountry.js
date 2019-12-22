function getCountry(callback) {
    //realizamos el ajax para regor datos de paises
    $.ajax({
        url: "https://www.liferay.com/api/jsonws/country/get-countries/",
        dataType: "json",
        type: "GET",
        success: function(response) {
            const results = response;
            // console.log(results)
            if (callback) callback(null, results);

        },
        error: function(err) {
            if (callback) callback(err, null);
        },
    })
}
//recogemos la funcion para cogerlo dinamicamente con las paises que queremos
getCountry((function(err, results) {
    if (err) {
        console.log('There was an error');
    } else {
        $.each(results, function(index) {
            // console.log(results[index])
            //Creamos opciones dinamicamente por seleccionar el pais
            $('#Country').append('<option value="' + results[index].a2 + '">' + results[index].a2 + ' - ' + results[index].name + '</option>');
            $('#Country').on('change', function() {
                $(this).attr('value');
            })
        })

    }
}));