$(document).ready(function(){
  console.log("client.js is ready.");


$('#clear').on('click', clearCalculations);

$('#plus').on('click', function() {
    console.log("clicked plus");
    setCalculations ('plus'); //make setCalculations function !!!!!
  });

$('#minus').on('click', function() {
    console.log("clicked minus");
    setCalculations ('minus');
  });

$('#multiply').on('click', function() {
    console.log("clicked multiply");
    setCalculations ('multiply');
  });

$('#divide').on('click', function() {
    console.log("clicked divide");
    setCalculations ('divide');
  });


// FUNCTIONS

function clearCalculations() {
  $('#containerOne').empty();
}

function setCalculations() {
  console.log("setting calculations");
}





});//end document ready
