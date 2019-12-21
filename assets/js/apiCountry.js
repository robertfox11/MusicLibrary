function getCountry(callback) {
    $.ajax({
        url: "https://www.liferay.com/api/jsonws/country/get-countries/",
        dataType: "json",
        type: "GET",
        success: function(response) {
            const results = response;
            console.log(results)
            if (callback) callback(null, results);

        },
        error: function(err) {
            if (callback) callback(err, null);
        },
    })
}
getCountry((function(err, results) {
    if (err) {
        console.log('There was an error');
    } else {
        $.each(results, function(index) {
            console.log(results[index])
            $('#Country').append('<option value="' + results[index].a2 + '">' + results[index].a2 + ' - ' + results[index].name + '</option>');
            $('#Country').on('change', function() {
                $(this).attr('value');
            })
        })

    }
}));