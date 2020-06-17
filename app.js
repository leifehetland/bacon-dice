console.log("Hello World");

var scores;
var roundScore;;
var activePlayer;

initGame();

$(".btn-roll").on("click", function () {
	console.log("clicked");

	// Random number from 1 to 6
	dice = Math.floor(Math.random() * 6) + 1;

	// Display the result
	$(".dice").css("display", "block");
	$(".dice").attr("src", "img/dice-" + dice + ".png");

	// Update the round score if the number rolled isn't 1
	if (dice !== 1) {
		// Add score
		roundScore += dice;
		$("#current-" + activePlayer).text(roundScore);
	} else {
		// Player 2's turn
		// if active player is set to zero then activePlayer is 1 else active player is 0
		nextPlayer();
	}


})

$(".btn-hold").on("click", function () {
	// Add current score to global score
	scores[activePlayer] += roundScore;

	// Update the UI 
	$("#score-" + activePlayer).text(scores[activePlayer]);

	// Check if the current player won the game
	if (scores[activePlayer] >= 100) {
		$("#name-" + activePlayer).text("WINNER!");
		$(".dice").css("display", "none");
		$(".player-" + activePlayer + "-panel").addClass("winner").removeClass("active");
	} else {
		nextPlayer();
	}
})

$(".btn-new").on("click", initGame)

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	// Reset current active score
	$("#current-0").text("0");
	$("#current-1").text("0");

	// Toggle active class based on player
	$(".player-0-panel").toggleClass('active');
	$(".player-1-panel").toggleClass('active');

	// Hide dice for next player
	$(".dice").css("display", "none");
}

function initGame() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;

	$('#score-0').text('0');
	$('#score-1').text('0');
	$('#current-0').text('0');
	$('#current-1').text('0');
	$(".dice").css("display", "none");

	$("#name-0").text("Player 1");
	$("#name-1").text("Player 2");

	$(".player-0-panel").removeClass("winner");
	$(".player-1-panel").removeClass("winner");

	$(".player-0-panel").removeClass("active");
	$(".player-1-panel").removeClass("active");

	$(".player-0-panel").addClass("active");
}