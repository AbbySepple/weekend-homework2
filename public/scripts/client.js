$(document).ready(function() {
    console.log("client.js is ready.");






    // FUNCTIONS
    //added class to the divs
    function clearCalculations() {
        $('.field').val('');
    }

    function doThatThing() {
        console.log("do that thing you do");
        var valx = $('#xguess').val();
        var valy = $('#yguess').val();
        var mFunctions = $('#mathFunctions').val();

        if(isNaN(valx || isNaN(valy))){
          alert("Stop! I only understand numbers.");
        }

        var theseNumbers = {
          x: valx,
          y: valy,
          operator: mFunctions
        }


        $.ajax({
            method: POST,
            url: '/numbers',
            data: theseNumbers,
            success: function(res) {
                console.log("setting calculations");

            }
        }); //end ajax

        $('#clear').on('click', clearCalculations);

    } //end doThatThing function

}); //end document ready



function response(resNum){
  console.log("in ");
$('#theResults').text(resNum.answer);
}
