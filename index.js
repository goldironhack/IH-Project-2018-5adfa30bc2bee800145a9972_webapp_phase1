var map;

window.onload = function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7142700, lng: -74.0059700},
        zoom: 9
    });
}