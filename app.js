console.log("Hello World");

var scores = [0,0];
var roundScore = 0;
var activePlayer = 1;

var dice = Math.floor(Math.random() * 6)  + 1;

$("#current-" + activePlayer).text(dice);

$(".dice").css("display", "none");