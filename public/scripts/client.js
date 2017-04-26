$(document).ready(function(){
  console.log("client.js is ready.");


$('#clear').on('click', clearCalculations);



// FUNCTIONS

function clearCalculations() {
  $('#containerOne').empty();
}

function setCalculations() {
  console.log("setting calculations");
}





});//end document ready
