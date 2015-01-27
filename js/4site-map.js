$(document).ready(function() {
  // Load the map
  L.mapbox.accessToken = "pk.eyJ1IjoibWljaGFlbHciLCJhIjoiM0gxUGhBRSJ9.EHtpWMfOXusltc6GBzer6w";
  var map = L.mapbox.map('map', 'michaelw.map-12d1igm9')
      .setView([38.9311, -77.0321], 16);   
   map.whenReady(function() { map.invalidateSize(); });
  
  // Set the starting point (metro station) on the map
  var gjRoute = L.polyline([[38.9286, -77.0326710538885]]).addTo(map);

  // Prepare the office marker to display once the drawn route completes its journey to the office
  var gjOfficeMarker = L.marker(
  	[38.93266, -77.03255], {
    icon: L.mapbox.marker.icon({
  	  'marker-size': 'large',
  	  'marker-color': '#BE9A6B',
  	  'marker-symbol': 'star'
    }),
  	title: '4Site Interactive Studios',
  });
  gjOfficeMarker.bindPopup("<strong>4Site Interactive Studios</strong><br />3431 14th St, NW, Washington, DC 20010");

  // Prepare the metro marker to display immediately
  var gjMetroMarker = L.marker(
  	[38.928698, -77.032458], {
    icon: L.mapbox.marker.icon({
  	  'marker-color': '#BE9A6B',
  	  'marker-size': 'large',
  	  'marker-symbol': 'rail'
    }),
  	title: 'Columbia Heights Metro Station',   
  });
  gjMetroMarker.bindPopup("<strong>Columbia Heights Metro Station</strong>");
  gjMetroMarker.addTo(map);

  // Call invalidateSize once the map displays to force the map to display on all platforms
  $(document).on("map-displayed", mapDisplayHandler);
  function mapDisplayHandler(e) {
    map.invalidateSize();
  }
  
  // Draw the route according to how much time has passed in the video (4site-video.js triggers the map-add-point events whenever timeupdate fires)
  var last_time = 0;
  $(document).on("map-add-point", mapAddPointHandler);
  function mapAddPointHandler(e) {
    var lat = 0;
	var lng = 0;
	var prevLat = 0;
	var prevLng = 0;
    var current_time = e.message;
	if(current_time >= 10) {
	  gjOfficeMarker.addTo(map);
	}
	if(current_time >= 1 && current_time < 2) {
		var percentage = current_time - 1;
		prevLng = -77.0326710538885
		prevLat = 38.9286;
	    lng = -77.032735;
		lat = 38.929051;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 2 && current_time < 3) {
		var percentage = current_time - 2;
	    prevLng = -77.032735;
		prevLat = 38.929051;
	    lng = -77.032735;
		lat = 38.929502;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 3 && current_time < 4) {
		var percentage = current_time - 3;
	    prevLng = -77.032735;
		prevLat = 38.929502;
	    lng = -77.032735;
		lat = 38.929953;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 4 && current_time < 5) {
		var percentage = current_time - 4;
	    prevLng = -77.032735;
		prevLat = 38.929953;
	    lng = -77.032735;
		lat = 38.930404;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 5 && current_time < 6) {
		var percentage = current_time - 5;
	    prevLng = -77.032735;
		prevLat = 38.930404;
	    lng = -77.032735;
		lat = 38.930855;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 6 && current_time < 7) {
		var percentage = current_time - 6;
	    prevLng = -77.032735;
		prevLat = 38.930855;
	    lng = -77.032735;
		lat = 38.931306;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 7 && current_time < 8) {
		var percentage = current_time - 7;
	    prevLng = -77.032735;
		prevLat = 38.931306;
	    lng = -77.032735;
		lat = 38.931757;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 8 && current_time < 9) {
		var percentage = current_time - 8;
	    prevLng = -77.032735;
		prevLat = 38.931757;
        lng = -77.032735;
	    lat = 38.93266;
		moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage);
	} else if(current_time >= 9 && current_time < 10) {
		var percentage = current_time - 9;
        prevLng = -77.032735;
	    prevLat = 38.93266;
        lng = -77.03255;
	    lat = 38.93266;
	    moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage, 18);
	}
  }

  // Pan/zoom the map and append a point to the route
  // The calling function has set lat/lon points that should be rendered each second; percentage indicates
  // how much of the second has actually passed (percentage of .4301 would indicate that approx. 43% of the
  // full second has passed; therefore, it only renders 43% of the distance between the previous point and 
  // the next point of the route)
  function moveMapAndRenderRoute(lat, lng, prevLat, prevLng, percentage, zoom) {
  	zoom = zoom || 17;
	map.setView({ lat, lng }, zoom, { 
	  pan: { animate: true }, 
	  zoom: { animate: true } 
   	});

   	var intermediateLat = prevLat + (percentage * (lat - prevLat));
   	var intermediateLng = prevLng + (percentage * (lng - prevLng));

  	gjRoute.addLatLng(L.latLng(intermediateLat, intermediateLng));
	map.invalidateSize();  	  
  }
});