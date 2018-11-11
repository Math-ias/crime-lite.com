     
      // This example requires the Visualization library. Include the libraries=visualization
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

      var map, heatmap;
      //import { crime } from './crimes.js'
      //crimes.js var crime;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 42.361145, lng: -71.057083},
          mapTypeId: 'satellite'
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(crimes),
          map: map
        });
      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
            ];
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

      // Heatmap data: 500 Points
      // Heatmap data: 500 Points
      var test = [37.759732, -122.406484,37.758910, -122.406228,37.758182, -122.405695,37.757676, -122.405118,37.757039, -122.404346,37.756335, -122.403719,37.755503, -122.403406,37.754665, -122.403242,37.753837, -122.403172,37.752986, -122.403112,37.751266, -122.403355];
      var newa = [];
      
      function getPoints(arrayInput) {
        for (var i = 0; i < arrayInput.length; i = i + 2) {
             var thing =  new google.maps.LatLng(arrayInput[i], arrayInput[i+1]);
             newa.push(thing);
        }
        return newa;
      }
