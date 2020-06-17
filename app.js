console.log("Hello World");

var scores = [0,0];
var roundScore = 0;
var activePlayer = 1;

$(".dice").css("display", "none");

$(".btn-roll").on("click", function () {
	console.log("clicked");
	
	// Random number from 1 to 6
	dice = Math.floor(Math.random() * 6)  + 1;

	// Display the result
	$(".dice").css("display", "block");
	$(".dice").attr("src", "img/dice-"+ dice +".png");

	// Update the round score if the number rolled isn't 1


})