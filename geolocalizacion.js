function iniciarMap() {
    var coordenadas = { lat: -34.6059601, lng: -58.3776985 };
    var coordenadas1 = { lat: -31.4134084, lng: -64.183701 };
    var coordenadas2 = { lat: -32.9486173, lng: -60.6357514 }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: coordenadas
    });
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });
    var marker = new google.maps.Marker({
        position: coordenadas1,
        map: map
    });
    var marker = new google.maps.Marker({
        position: coordenadas2,
        map: map
    });

}
