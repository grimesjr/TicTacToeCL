let player1; 
let player2;
var standard_input = process.stdin;



standard_input.setEncoding('utf-8');

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let box = function(move) {
  console.log('---------');
  console.log(`|${board[move]}|${board[move+1]}|${board[move+2]}`);
  console.log('---------');
}
let createBoard = function() {
  box(0);
  box(3);
  box(6);
}

// createBoard();
let player1Move = true;
let move;
console.log('Enter move');
createBoard();
console.log('Please enter number: ');
standard_input.on('data', function(data) {
    
    if(player1Move) {
      board[data - 1] = 'x';
    } else {
      board[data - 1] = 'o';
    }
    createBoard();
    console.log('Please enter number: ');
    player1Move = !player1Move;
})