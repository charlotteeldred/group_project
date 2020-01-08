console.log('Linked')

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

  var map;
  var markers = [];
  var splicelist = [];
  var order;
  const locations = [{category: "soft", name: "wigmore", lat: 51.36, lng: -0.96},
                      {category: "soft", name: "stinking_bishop", lat: 51.98, lng: -2.44},
                      {category: "soft", name: "soft_goats", lat: 45.38, lng: 4.59},
                      {category: "hard", name: "rachel_goat", lat: 51.15, lng: -2.54},
                      {category: "hard", name: "manchego", lat: 39.22, lng: -2.98},
                      {category: "hard", name: "cheddar", lat: 51.28, lng: -2.76},
                      {category: "blue", name: "blacksticks", lat: 53.86, lng: -2.68},
                      {category: "blue", name: "roquefort", lat: 43.97, lng: 2.99},
                      {category: "blue", name: "stilton", lat: 52.82, lng: -1.24},
                    ];

  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: locations[5],
        });

  // Adds a marker to the map and push to the array.
  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      title: location.name,
      // category: location.category,
      map: map
    });
    markers.push(marker);
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

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Sets the map bounds to ensure all markers in the array are visible
  function setBounds() {
      var bounds = new google.maps.LatLngBounds();
      for (var i=0; i < markers.length; i++) {
          bounds.extend(markers[i].getPosition());
      }
      map.fitBounds(bounds);
  }

  function removeSameTypeMarkers(location) {
    console.log(markers.length-1);
    for(var i = 0; i < markers.length; i++){
    var indexnew = locations.findIndex(x => x.name === markers[i].getTitle());
    console.log(indexnew,markers[i].getTitle());
      if ( locations[indexnew].category === location.category && locations[indexnew].name !== location.name) {
        markers[i].setMap(null);
        markers.splice(i, 1);
        console.log([markers.length,markers[i].getTitle(),locations[indexnew].category,location.category]);
      }
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
      addMarker(locations[index]);
      removeSameTypeMarkers(locations[index]);
      clearMarkers();
      showMarkers();
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
      addMarker(locations[index]);
      removeSameTypeMarkers(locations[index]);
      clearMarkers();
      showMarkers();
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
      addMarker(locations[index]);
      removeSameTypeMarkers(locations[index]);
      clearMarkers();
      showMarkers();
      setBounds();
    }
    });

});
