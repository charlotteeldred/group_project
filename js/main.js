console.log('Linked')

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

  var map;
  var markers = [];
  const locations = [{name: "wigmore", lat: 51.36, lng: -0.96},
                      {name: "stinking_bishop", lat: 51.98, lng: -2.44},
                      {name: "soft_goats", lat: 45.38, lng: 4.59},
                      {name: "rachel_goat", lat: 51.15, lng: -2.54},
                      {name: "manchego", lat: 39.22, lng: -2.98},
                      {name: "cheddar", lat: 51.28, lng: -2.76},
                      {name: "blacksticks", lat: 53.86, lng: -2.68},
                      {name: "roquefort", lat: 43.97, lng: 2.99},
                      {name: "stilton", lat: 52.82, lng: -1.24},
                    ];

  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: locations[5],
        });

  // Adds a marker to the map and push to the array.
  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      map: map
    });
    markers.push(marker);
  }

  // Attempts to add a marker to the map and push marker to the appropriate place in the array so that only one type of each cheese can be in the array
  function addMarkernew(location,indexnew) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      map: map
    });
    markers[indexnew] = (marker);
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Sets the map bounds to ensure all markers in the array are visible
  function setBounds() {
      var bounds = new google.maps.LatLngBounds();
      for (var i=0; i < markers.length; i++) {
          bounds.extend(markers[i].getPosition());
      }
      map.fitBounds(bounds);
  }

  function produceMessage(){
    var splicelist = [];
    for (var i = 0; i < markers.length; i++){
    	var indexnew = locations.findIndex(x => x.name === markers[i]);
      if (locations[indexnew].category == locations[5].category && locations[indexnew].name != locations[5].name){
      	splicelist.push(i);
      }
    }
    for (var j = 0; j < splicelist.length; j++){
    	markers.splice(j, 1);
    }
  }

  $(".option1").click(function(){
    if ( $(this).hasClass('border') ) {
      $(this).removeClass('border');
      $(".selection1.text").removeClass('hidden');
      $(".selection1.cheesepic."+this.id).hide();
    }
    else {
      $(this).addClass('border');
      $(".option1").not(this).removeClass('border');
      $(".selection1.text").addClass('hidden');
      $(".selection1.cheesepic").hide();
      $(".selection1.cheesepic."+this.id).show();
      const index = locations.findIndex(x => x.name === this.id);
      const indexnew = 0;
      // addMarker(locations[index]);
      clearMarkers();
      addMarkernew(locations[index],indexnew);
      setMapOnAll(map);
      setBounds();
    }
    });

  $(".option2").click(function(){
    if ( $(this).hasClass('border') ) {
      $(this).removeClass('border');
      $(".selection2.text").removeClass('hidden');
      $(".selection2.cheesepic."+this.id).hide();
    }
    else {
      $(this).addClass('border');
      $(".option2").not(this).removeClass('border');
      $(".selection2.text").addClass('hidden');
      $(".selection2.cheesepic").hide();
      $(".selection2.cheesepic."+this.id).show();
      const index = locations.findIndex(x => x.name === this.id);
      const indexnew = 1;
      // addMarker(locations[index]);
      clearMarkers();
      addMarkernew(locations[index],indexnew);
      setMapOnAll(map);
      setBounds();
    }
    });

  $(".option3").click(function(){
    if ( $(this).hasClass('border') ) {
      $(this).removeClass('border');
      $(".selection3.text").removeClass('hidden');
      $(".selection3.cheesepic."+this.id).hide();
    }
    else {
      $(this).addClass('border');
      $(".option3").not(this).removeClass('border');
      $(".selection3.text").addClass('hidden');
      $(".selection3.cheesepic").hide();
      $(".selection3.cheesepic."+this.id).show();
      const index = locations.findIndex(x => x.name === this.id);
      const indexnew = 2;
      // addMarker(locations[index]);
      clearMarkers();
      addMarkernew(locations[index],indexnew);
      setMapOnAll(map);
      setBounds();
    }
    });

});
