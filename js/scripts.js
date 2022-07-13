/* function takeElement(pick) {
  // let boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  boardArray = Board.availableSpaces;
  let newArray = [];
  //check to see if pick is in boardArray
  if (pick == 1) {
    newArray = boardArray.slice(0, 1)
  } else {
    //if pick is not in array, return some kind of error. 
  }
  return Board.availableSpaces = newArray;
} */ 

//Player Constructor Function 
function Player(name,symbol) { 
  this.name = name;  
  this.symbol = symbol; // 'X' or 'O'
  this.moves = []; //this array tracks each position the user clicks on, callback function turns is used to populate this. 
}

//Each time a game begins, a Game object would be created. 
  //Game Constructor Function 
function Game(){
  this.player = {};
  this.winner = 0;
  this.availableSpaces = [1,2,3,4,5,6,7,8,9];
}

  //Create Player function for the Game object
Game.prototype.createPlayer = function () {
  let player1 = new Player("Player 1","X");
  let player2 = new Player("Player 2", "O");
  this.player[0] = player1;
  this.player[1] = player2;
}

  //Function where the game is played. Will call all other functions as well as hold incrimenting turn counter.
Game.prototype.turn = function() {
}

