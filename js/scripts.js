var toLiters = function(gallons) {
  return gallons * 3.785;
}
var gallons = parseFloat(prompt("Enter gallon amount:"));
alert(gallons + " gallons is " + toLiters(gallons) + " liters");
