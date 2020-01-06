console.log('Linked')

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

  var map;
  var markers = [];
  const cheddar = {lat: 51.28, lng: -2.76};

  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: cheddar,
        });

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
      // map.addMarker(this.id.latLng);
      // Adds a marker to the map and push to the array.
        if (this.id = cheddar){
          function addMarker(location) {
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(location.lat, location.lng),
              map: map
            });
            markers.push(marker);
          }
          addMarker(cheddar);
          // Sets the map on all markers in the array.
          function setMapOnAll(map) {
            for (var i = 0; i < markers.length; i++) {
              markers[i].setMap(map);
            }
          }
        }

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
    }
    });

});
