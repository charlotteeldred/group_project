console.log('Linked')

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

  $(".option1").click(function(){
    $(this).addClass('border');
    $(".option1").not(this).removeClass('border');
    $(".selection1.text").addClass('hidden');
    $(".selection1.cheesepic").hide();
    $(".selection1.cheesepic."+this.id).show();
    });

  $(".option2").click(function(){
    $(this).addClass('border');
    $(".option2").not(this).removeClass('border');
    $(".selection2.text").addClass('hidden');
    $(".selection2.cheesepic").hide();
    $(".selection2.cheesepic."+this.id).show();
    });

  $(".option3").click(function(){
    $(this).addClass('border');
    $(".option3").not(this).removeClass('border');
    $(".selection3.text").addClass('hidden');
    $(".selection3.cheesepic").hide();
    $(".selection3.cheesepic."+this.id).show();
    });




// function allowDrop(ev) {
//   ev.preventDefault();
// }
//
// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

});
