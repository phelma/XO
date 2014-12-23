'use strict';

/*

 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8

*/

var lines = [
	[0,1,2],[3,4,5],[6,7,8], // ---
	[0,3,6],[1,4,7],[2,5,8], // |||
	[0,4,8],[2,4,6]          // \/
];

var board = [];
var currentPlayer = 'X';

function Box(i) {
	this.i = i;
	this.id = 'b' + i;
	this.elem = document.getElementById(this.id);
	this.elem.onclick = function() {
		console.log('you clicked ' + this.id);
		doMove(currentPlayer, i);
	};
	this.place = function(player) {
		this.elem.innerHTML = player;
		this.state = player;
	};
	this.state = undefined;
}

for (var i = 0; i < 9; i++) {
	board[i] = new Box(i);
}

var turn = function(player) {

};

var doMove = function(player, box) {
	if (board[box].state === undefined) {
		console.log(player + ' has gone in box ' + box);
		board[box].place(player);
	} else {
		console.log('player ' + board[box] + ' has already gone there, go again');
	}
};

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