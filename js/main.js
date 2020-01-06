console.log('Linked')

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

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
