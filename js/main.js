console.log('Linked')

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

  $(".option1").click(function(){
    $(this).addClass('border');
    $(".option1").not(this).removeClass('border');
    });

  $(".option2").click(function(){
    $(this).addClass('border');
    $(".option2").not(this).removeClass('border');
    });

  $(".option3").click(function(){
    $(this).addClass('border');
    $(".option3").not(this).removeClass('border');
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
