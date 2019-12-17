$(document).ready(function() {
            //create objets with class songs
            //Recogemos las clases Creadas
            var songs = new Songs();
            var artist = new Artist();
            var album = new Album();
            var video = new Video();

            let btnSearch = $("#btn-search");
            var selectSearch = $('#inputGroupSelect01');
            selectSearch.change(function() {
                var musicSearch = $('option:selected').attr('value');
                switch (musicSearch) {
                    case '1':
                        btnSearch.on("click", function() {
                            songs.getSongNAmes();
                        });
                        console.log(musicSearch + "Estoy seleccionando Songs");
                        break;
                    case '2':
                        btnSearch.on("click", function() {
                            artist.getArtist();
                        });
                        console.log(musicSearch + "Estoy seleccionando Artis");
                        break;
                    case '3':
                        btnSearch.on("click", function() {
                            album.getAlbum();
                        });
                        console.log(musicSearch + "Estoy seleccionando album");
                        break;
                    case '4':
                        btnSearch.on("click", function() {
                            video.getvideo();
                        });
                        console.log(musicSearch + "Estoy seleccionando video");
                        break
                    default:
                        btnSearch.on("click", function() {
                            songs.getSongNAmes();
                        });

                }
            });