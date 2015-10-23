//scripts.js

var player_selection

function rock() {
	player_selection = "rock";
	$(".player .rock-pic").show();
	$(".player .paper-pic").hide();
	$(".player .scissors-pic").hide();
	console.log(player_selection);
	//computerSelect();
};

function paper() {
	player_selection = "paper";
	$(".player .rock-pic").hide();
	$(".player .paper-pic").show();
	$(".player .scissors-pic").hide();
	console.log(player_selection);
	//computerSelect();
};

function scissors() {
	player_selection = "scissors";
	$(".player .rock-pic").hide()
	$(".player .paper-pic").hide()
	$(".player .scissors-pic").show()
	console.log(player_selection);
	//computerSelect();
};

function computerSelect() {
	var number = Math.random() * 3;
	console.log(number)

};

computerSelect();