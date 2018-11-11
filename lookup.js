var marker;
var map;
var markers;
      function initMap() {
        map = new google.maps.Map(document.getElementById('maplookup'), {
          zoom: 17,
          center: {lat: 42.341876, lng: -71.091273},
          mapTypeControl : false
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('address-submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address-input').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });

            var lon = results[0].geometry.location.lng();
            var lat = results[0].geometry.location.lat();
            document.getElementById("crimetag").innerHTML = encodeGeoHash(lat, lon);
          } else {
            alert('Error: ' + status);
          }
        });
      }


      function getCellFromGeohash(gh){
        for(var geohash in cells){
          if (geohash==gh){
            return cells[geohash];
          }
        }
      }

