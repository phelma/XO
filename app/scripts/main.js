'use strict';

/*

 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8

*/

var board = {
	boxes: [],
	state: function () {
		return this.boxes.map(function(el){
			return el.state;
		});
	},
	places: function(piece){
		var out = [];
		this.state().forEach(function (elem, index) {
			if (elem === piece) {out.push(index);}
		});
		return out;
	},
	lines: [
	[0,1,2],[3,4,5],[6,7,8], // ---
	[0,3,6],[1,4,7],[2,5,8], // |||
	[0,4,8],[2,4,6]          // \/
	],
	winner: function(){
		var won = {};
		players.forEach(function (player) {
			var pPlaces = this.places(player); //players places
			this.lines.forEach(function (line) {
				if (intersectionLength(line, pPlaces) === 3) {
					won = {
						player: player,
						boxes: line
					};
				}
			});
		}.bind(this));
		
	}
};
var players = ['X', 'O'];
var currentPlayer = players[0];
var showMessage = function(message){
	console.log(message);
	messages.innerHTML = message;
};
var changePlayer = function(player) {
	var player = player || currentPlayer;
	if (player === 'X') {
		player = 'O';
	} else if (player === 'O') {
		player = 'X';
	}
	else {throw player + ' is not X or O'};
	showMessage(player + 's Turn');
	currentPlayer = player;
	return player;
}

function Box(i) {
	this.i = i;
	this.id = 'b' + i;
	this.elem = document.getElementById(this.id);
	this.elem.onclick = function() {
		showMessage('you clicked ' + this.id);
		doMove(currentPlayer, i);
	};
	this.place = function(player) {
		this.elem.innerHTML = player;
		this.state = player;
	};
	this.state = undefined;
}

for (var i = 0; i < 9; i++) {
	board.boxes[i] = new Box(i);
}

var turn = function(player) {

};

var doMove = function(player, box) {
	if (board.boxes[box].state === undefined) {
		showMessage(player + ' has gone in box ' + box);
		board.boxes[box].place(player);
		var winner = board.winner();
		if (winner) {
			showMessage(winner.player + ' has won');
		}
		changePlayer();
	} else {
		showMessage('Try again, player ' + boardboxes[box].state + ' has already gone there.');
	}
};

var gameOver = function(){

}

var pickBest = function(board) {

};

var winner = function() {};

var intersectionLength = function(A, B) {
	var sum = 0;
	A.forEach(function(Aelement) {
		B.forEach(function(Belement) {
			if (Aelement == Belement) {
				sum += 1;
			}
		});
	});
	return sum;
};