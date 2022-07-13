Co-authored-by: Bryce Bresnan <bryce.bresnan@gmail.com>
Co-authored-by: Evgeny Zbirun <zbirunzbirun@gmail.com>"

Project Blueprint

//UI logic 
1. Webpage Loads
2. Display a empty tic tac toe board HTML
3. Players can enter their names? There is a field to enter names. Is sent to backend. 
4. Something indicates player 1 start

//Business Logic
---Turn 1
function turn()
  > turn counter = 1 
    > There should be an array of avaialble spaces. 
  5. Player 1 is an X (Player 1 goes first)

function TrackPosition()
  6. Player 1 will click any space. 
    > (IMPORTANT!) Each element clicked is not clickable by the other player. 
    (Evegny's function)
  7. Event Listener (on each space) to log the values of the elements that a player clicks on each click. The div id is representative of the value clicked. 
  >return coordinate (one number 1-9)

function putSpaceCoordinateInPlayerArray()
  8. The information about each clicked element would be stored in an array corresponding to elements clicked by Player 1. 
  > return player array
   

function TrackScore() 
  9. Run a scoring function that will look at the player 1's move array and check to see if the player1 has won. If not, continue.
    > Player1's Move array will be passed into the function as a parameter.
    > Variable declaring the wining combinations. (Array of arrays)
    > Loop over the array of winning combination arrays
    > For each element in the winning array, we will loop over the player1's array. (comparing player1's array to winning array)
    > if player1's array includes the first integer in the first winning combination array, then continue
    > if player1's array includes the second integer in the first winning combination array, then continue 
    > if player1's array includes the third integer in the first winning combination array, then WINNER!

> Turn counter += 1

---Turn 2
10. Player 2 goes. 
11. A function to check the array of available spaces and return an error if an illegal move is made. 
12. The information about each clicked element would be stored in an array corresponding to elements clicked by Player 2. 


>Reset Button

Stuff we might need in the future 
............................

4 Objects:

Game (Should tell if it's over or not)
|turn: number
|game: won or lost or stalemate or in progress? 
|Player1 (object)
  |name: name
  |spacesChosen: [array of spaces the player occupies]
  |score: cumulitive number of games won 
|Player2 (object)
  |
  |
  |
  |
|Board (object) 
|availableSpaces: [1,2,3,4,5,6,7,8,9]


spaces[1].value() 

1 2 3 
4 5 6  
7 8 9 


1:0
2:0
3:0

[1 2 3 4 5 6 7 8 9]

winners = [ 1,2,3 
            4,5,6
            7,8,9
            1,4,7
            2,5,6
            3,6,9
            1,5,9
            3,5,7] 

loop(win)
  loop(player)
  if player.includes(win[1])
    continue
    if player.includes(win[2])
    continue  
      if player.includes(win[3])
      return winner!

else reset auto(no one won)

Game = function (){
  this.gameBoard
  this.player1
  this.player2
  this.score
}

plyaer1 = {
  scroe: 
  name: 
  creditCardInfo:   
  spaces: [1, 5, 7, 9] 159 is a winning condition
}

function = win(array or string)
<tr>

innerText:x

HTML:
div for board
9 divs each one for a space
set background image
if player 1 is in space then set background to icon
textcontent innertext BIG OLD X or BIG OL O or big Ol " " 
ICONS look that up


List of Functions:
window.onLoad()
reset()
player1click()
player2click()
compare(); winning spots


get DOM elements >> player1click() (return player1 array)>> compare(return winner); winning spots  >> player2click(return player2 array) >> compare(return winner); winning spots

"""TEST TEMPLATE"""

function TicTacToe(){ 
  this.player1 = {}; 
  this.player2  = {}; 
}

Describe: player1cick(){


let myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

let player1 = []
let player2 = []

every pick remove element from myArray

if player1 take 1
  myArray.splice(0, 1)
  player2.push(element)



function newPlayerMaker: 
get the "name" from HTML
let player1 = new Player(alkjsdflajksd)
let player2 = new Player(asaspdflkjnasdpfkjn)

return player1, player2 