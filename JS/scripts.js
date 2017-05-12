/*
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.
*/

//Business Logic
var player1 = ""
var player2 = ""
var getRandomInt = Math.floor( (Math.random() * 6 ) + 1);

// Game execution
var total = 0;
var totalScore1 = [];
var totalScore2 = [];

//player1
function randomNumber1() {
	var random = document.getElementById("randomP1");
	var randomNumber = Math.floor((Math.random() * 6) + 1);
	random.innerHTML = randomNumber;
	if (randomNumber === 1) {
		document.getElementById("rollP1").disabled = true;
		document.getElementById("hold1").disabled = true;
		document.getElementById("rollP2").disabled = false;
		document.getElementById("hold2").disabled = false;
	}
}

function hold1() {
	var randomNumber = Math.floor((Math.random() * 6) + 1);
		totalScore1.push(randomNumber);
		var total1 = document.getElementById("totalP1");
		for (var num in totalScore1) {
			total += totalScore1[num];
			total1.innerHTML = total;
		}
		if (total >= 100) {
			alert("PLAYER 1 WINS!")
		}
		document.getElementById("rollP2").disabled = false;
		document.getElementById("hold2").disabled = false;
		document.getElementById("rollP1").disabled = true;
		document.getElementById("hold1").disabled = true;
	}


//player2
function randomNumber2() {
	var random = document.getElementById("randomP2");
	var randomNumber2 = Math.floor((Math.random() * 6) + 1);
	random.innerHTML = randomNumber2;
	if (randomNumber2 === 1) {
		document.getElementById("rollP2").disabled = true;
		document.getElementById("hold2").disabled = true;
		document.getElementById("rollP1").disabled = false;
		document.getElementById("hold1").disabled = false;
	}
}

function hold2() {
	var randomNumber = Math.floor((Math.random() * 6) + 1);
		totalScore2.push(randomNumber);
		var total2 = document.getElementById("totalP2");
		for (var num in totalScore1) {
			total += totalScore1[num];
			total2.innerHTML = total;
		}
		if (total >= 100) {
			alert("PLAYER 2 WINS!")
		}
		document.getElementById("rollP1").disabled = false;
		document.getElementById("hold1").disabled = false;
		document.getElementById("rollP2").disabled = true;
		document.getElementById("hold2").disabled = true;
	}
