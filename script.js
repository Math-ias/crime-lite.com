var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.361145, lng: -71.057083},
          zoom: 8
        });
      }