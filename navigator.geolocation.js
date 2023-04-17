navigator.geolocation.getCurrentPosition(function(position) {
    var lat1 = position.coords.latitude;
    var lon1 = position.coords.longitude;
    var lat2 = teacher_lat;
    var lon2 = teacher_lon;
    var distance = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    if (distance < 0.02) { // 20 meters
        markAttendance();
    } else {
        alert('You are not within the attendance range');
    }
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371;
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}




