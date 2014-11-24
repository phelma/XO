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

// var b0 = document.getElementById('b0'),
// 	b1 = document.getElementById('b1'),
// 	b2 = document.getElementById('b2'),
// 	b3 = document.getElementById('b3'),
// 	b4 = document.getElementById('b4'),
// 	b5 = document.getElementById('b5'),
// 	b6 = document.getElementById('b6'),
// 	b7 = document.getElementById('b7'),
// 	b8 = document.getElementById('b8');

// var boxes

for (var i = 0; i < boxes.length; i++) {
	boxes[i].onclick = function () {
		console.log('you clicked ' this.id);
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