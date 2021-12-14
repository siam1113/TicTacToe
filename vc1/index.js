/*
Variables
=========
*/
// Selecting Elements By Class Names
let blocks = document.getElementsByClassName("block");
let won = document.getElementsByClassName("won");
let lost = document.getElementsByClassName("lost");
// Selecting Elements By Id
let playerMoveOf = document.getElementById("playerMoveOf");
// Defined
let move;
let p1Won = 0;
let p2Won = 0;
let uBlock = [];
let p1W = false;
let p2W = false;
let totalMove = 0;
let countRound = 0;
let whichPlayersMoveNow = 1;
let noOfRound = Number(prompt("How Many round You want to Play : "));

/*
Functions
=========
*/
let game = () => {
  for (let k = 0; k < blocks.length; k++) {
    let block = blocks[k];
    block.addEventListener("click", (event) => {
      p1W = false;
      p2W = false;
      totalMove += 1;
      action();
      changePlayer();
      clickedBlock = event.target;
      if (clickedBlock.innerHTML == "O" || clickedBlock.innerHTML == "X") {
      confirm("Wrong Move !");
      } else {
      clickedBlock.innerHTML = move;
      clickedBlock.style.color = "white";
      }
	  // Inserting all up-to-date innerHTML of blocks to Check the Result Of the Game
      for (let i = 0; i < blocks.length; i++) {
        uBlock[i] = blocks[i].innerHTML;
      }
      gameUpdate();
      result();
    });
  }
};

let changePlayer = () => {
  if (whichPlayersMoveNow == 1) {
    playerMoveOf.innerHTML = "Player2";
    whichPlayersMoveNow = 2;
  } else if (whichPlayersMoveNow == 2) {
    playerMoveOf.innerHTML = "Player1";
    whichPlayersMoveNow = 1;
  }
};

let action = () => {
  if (whichPlayersMoveNow == 1) {
    move = "O";
  } else if (whichPlayersMoveNow == 2) {
    move = "X";
  }
};

let gameUpdate = () => {
  // Checking the Match (8 Possible Match of Success)
  // Checking for Horizontal Match
  if (uBlock[3] == uBlock[4] && uBlock[4] == uBlock[5]) {
    uBlock[4] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  } else if (uBlock[6] == uBlock[7] && uBlock[7] == uBlock[8]) {
    uBlock[7] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  } else if (uBlock[0] == uBlock[1] && uBlock[1] == uBlock[2]) {
    uBlock[1] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  }
  // Checking for Vertical Match
  else if (uBlock[0] == uBlock[3] && uBlock[3] == uBlock[6]) {
    uBlock[3] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  } else if (uBlock[1] == uBlock[4] && uBlock[4] == uBlock[7]) {
    uBlock[4] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  } else if (uBlock[2] == uBlock[5] && uBlock[5] == uBlock[8]) {
    uBlock[5] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  }
  // Checking for Cross Match
  else if (uBlock[0] == uBlock[4] && uBlock[4] == uBlock[8]) {
    uBlock[4] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  } else if (uBlock[2] == uBlock[4] && uBlock[4] == uBlock[6]) {
    uBlock[4] == "O" ? (p1W = true) : (p2W = true);
    countRound += 1;
  }
  // When No Match is Found and All Blocks are blocked
  else if (totalMove == 9) {
    let endGame = 0;
    for (let i = 0; i < 9; i++) {
      if (uBlock[i].trim() == "O" || uBlock[i].trim() == "X") {
        endGame = 1;
      } else {
        endGame = 0;
      }
    }
    if (endGame == 1) {
      console.log("Match Draw\n");
      countRound += 1;
    } else if (endGame == 0) {
      console.log("End Game , Mathc Draw\n");
      countRound += 1;
    }
  }
};

let result = () => {
  if (p1W == true) {
    console.log("Player 1 Won the Game");
    p1Won += 1;
    won[0].innerHTML = p1Won;
    lost[1].innerHTML = p1Won;
	restart();
  } else if (p2W == true) {
    console.log("Player 2 Won the Game");
    p2Won += 1;
    won[1].innerHTML = p2Won;
    lost[0].innerHTML = p2Won;
	restart();
  }
};

let restart = () => {
  if (noOfRound != countRound) {
    totalMove = 0;
    for (let i = 0; i < blocks.length; i++) {
    blocks[i].innerHTML = `${i + 1}`;
     blocks[i].style.color = "darkslategray";
    }
  } else if (noOfRound == countRound) {
    console.log("End Game ):");
	playerMoveOf.innerHTML = p1Won == p2Won ? "Seris Draw " : p1Won > p2Won ? `Plyaer 1 Won the Series By ${p1Won} - ${p2Won}` : `Plyaer 1 Won the Series By ${p1Won} - ${p2Won}`;
	confirm("Refresh the Page to Play Again");
  }
};

/*
Game Functionalitities
======================
*/
game();
