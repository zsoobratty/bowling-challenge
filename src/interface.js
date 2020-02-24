$(document).ready(function() {
    var bowling = new Bowling();
  
  $('form').submit(function(event){
    event.preventDefault();
    var one = parseInt($('#one').val());
    var two = parseInt($('#two').val());
    var three = parseInt($('#three').val());
    var four = parseInt($('#four').val());
    var five = parseInt($('#five').val());
    var six = parseInt($('#six').val());
    var seven = parseInt($('#seven').val());
    var eight = parseInt($('#eight').val());
    var nine = parseInt($('#nine').val());
    var ten = parseInt($('#ten').val());
    var eleven = parseInt($('#eleven').val());
    var twelve = parseInt($('#twelve').val());
    var thirteen = parseInt($('#thirteen').val());
    var fourteen = parseInt($('#fourteen').val());
    var fifteen = parseInt($('#fifteen').val());
    var sixteen = parseInt($('#sixteen').val());
    var seventeen = parseInt($('#seventeen').val());
    var eighteen = parseInt($('#eighteen').val());
    var nineteen = parseInt($('#nineteen').val());
    var twenty = parseInt($('#twenty').val());
    bowling.bowl(one);
    bowling.bowl(two);
    bowling.bowl(three);
    bowling.bowl(four);
    bowling.bowl(five);
    bowling.bowl(six);
    bowling.bowl(seven);
    bowling.bowl(eight);
    bowling.bowl(nine);
    bowling.bowl(ten);
    bowling.bowl(eleven);
    bowling.bowl(twelve);
    bowling.bowl(thirteen);
    bowling.bowl(fourteen);
    bowling.bowl(fifteen);
    bowling.bowl(sixteen);
    bowling.bowl(seventeen);
    bowling.bowl(eighteen);
    bowling.bowl(nineteen);
    bowling.bowl(twenty);
    $('#score').text(bowling.score());
    });
  });
  