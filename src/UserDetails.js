module.exports = {
  Steepless: {
    directionsService: new google.maps.DirectionsService(),
    directionsRenderer: new google.maps.DirectionsRenderer(),
    elevationService: new google.maps.ElevationService(),
    travelMode: google.maps.TravelMode.DRIVING,
    directionStatus: google.maps.DirectionsStatus.OK,
    longestDistance: 0,
    highestElevation: 0,
    lowestElevation: Infinity,
    chartWidth: 400,
    chartBarWidth: 2
  },
  getOrigin: function(lat, lng) {
    var origin = new google.maps.LatLng(lat, lng);
    return origin;
  },
  getDestination: function(lat, lng) {
    var destination = new google.maps.LatLng(lat, lng);
    return destination;
  }
};
