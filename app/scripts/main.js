'use strict';

/*

 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8

*/

var lines = [
	[0,1,2],[3,4,5],[6,7,8], // -
	[0,3,6],[1,4,7],[2,5,8], // |
	[0,4,8],[2,4,6]          // \/
];

var board = new Array(9);

var turn = function (player){
	
}

var boxes = document.getElementsByClassName('box');

for (var i = 0; i < boxes.length; i++) {
	boxes[i].onclick = function () {
		console.log('you clicked ' + this.id);
		doMove('x', this.id);
		updateBoard();
	}
};

var updateBoard = function () {
	board.forEach(function(elem, i){
		boxes[i].innerHTML = elem
	})
}

var doMove = function (player, box) {
	if (board[box] === undefined){
		console.log(player + ' has gone in box ' + box);
		board[box] = player;
		updateBoard();
	} else {
		console.log('player ' + board[box] + ' has already gone there, go again');

	}
}

var pickBest = function (board) {

}



var winner = function () {}