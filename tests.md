//Business Logic 
  //Function to create new player object 

describe: Player() 
test: Player constructor creates a new player object 
code: let player1 = new Player(); 

test: constructor should take in name, symbol ("X" or "O") in order to constuct a player object. 
expect: 

player1.name = 'Paul'; 
player1.name = 'X'; 
player1.moves = [3, 5, 6]

> PASS 


describe: Game()

Test: "It should create an object with the Game type that has a winner property, a board object proerty, a player object propert

Code:
let newGame = new Game();

Expected Output:
newGame.winner: 0
newGame.board: {}
newGame.player: {}

> PASS!


