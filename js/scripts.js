/*var toLiters = function(gallons) {
  return gallons * 3.785;
}
//var gallons = parseFloat(prompt("Enter gallon amount:"));
//alert(gallons + " gallons is " + toLiters(gallons) + " liters");

var userInput = prompt("Enter a sentence: ");
var length = userInput.length;

var capitalizeFirstLast = function (sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.charAt(length-1).toUpperCase();
};
var reverse = function(sentence) {
  var firstLetter = sentence.charAt(0);
  var lastLetter = sentence.charAt(1);
  sentence = lastLetter + firstLetter;
  return sentence;
};
var call = function(sentence) {
  var result = capitalizeFirstLast(sentence);
  return userInput + reverse(result);
};
var grabIndex = function(sentence) {
  var index = length / 2;
  return sentence.charAt(index) + call(sentence);
};
var finalReverse = function(sentence) {
  var length = sentence.length;
  var new_string = sentence.charAt(length-1) + sentence.charAt(length-2) + sentence.charAt(length-3);
}
//alert(capitalizeFirstLast(userInput));
alert(grabIndex(userInput));
//capitalizeFirstLast(userInput);
//alert(userInput);
*/
$(document).ready(function() {

  $(".clickable").click(function() {
    $("#initially_showing").slideToggle();
    $("#initially_hidden").slideToggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#default").click(function() {
    $("body").removeClass();
  });
  $("button#magic").click(function() {
    $("p").addClass("magic");
  });
  $("button#magic2").click(function() {
    $("p").removeClass("magic");
  });

});
