/**
 * Created by SHERRI on 4/28/15.
 */
function initialize() {
    var mapOptions = {
        center: { lat: 33.3872, lng: -104.5281},
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
       mapOptions);

    //search
    var request = {
        location: map.getCenter(),
        radius: '500',
        query: 'Google UFO'
    };

    //
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
            map: map,
            place: {
                placeId: results[0].place_id,
                location: results[0].geometry.location
            }
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);