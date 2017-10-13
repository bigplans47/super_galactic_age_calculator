import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $('#ageForm').submit(function(event) {
    event.preventDefault();
    var age = $('#age').val();
    var personalCalc = new Calculator(age);
    console.log(personalCalc);
    $('#solution').append('<li>'+'Your age is '+ personalCalc.age +'</li>');


    // var output = simpleCalculator.pingPong(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>")
  });

});
