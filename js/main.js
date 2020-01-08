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
                      {name: "stilton", lat: 51.36, lng: -0.96},
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

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Sets the map bounds to ensure all markers in the array are visible
  function setBounds() {
      var bounds = new google.maps.LatLngBounds();
      for (var i=0; i < markers.length; i++) {
          bounds.extend(markers[i].getPosition());
      }
      map.fitBounds(bounds);
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
      setBounds();
    }
    });

});
