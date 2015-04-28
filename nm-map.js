

function initialize() {
    var mapOptions = {
        center: { lat: 33.3872, lng: -104.5281},
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);