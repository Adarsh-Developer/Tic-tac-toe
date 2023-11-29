const playerTurn = document.querySelector(".player__turn");
const showResult = document.querySelector(".result__container");
const winnerName = document.querySelector(".winner");
const boxes = document.querySelectorAll(".box");
const boxText = document.querySelectorAll(".box__text");

let turn = "X";

// This is a function to Change the turn...
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// This is a function to display the result...
function displayResult() {
  showResult.style.display = "flex";
  clickedBox = 0;
}

// This is a function to check for win
const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxText[e[0]].innerHTML === boxText[e[1]].innerHTML &&
      boxText[e[1]].innerHTML === boxText[e[2]].innerHTML &&
      boxText[e[0]].innerHTML !== ""
    ) {
      displayResult();
      winnerName.innerHTML = boxText[e[0]].innerHTML + " Won!";
    }
  });
};

playerTurn.innerHTML = "Turn of " + turn;
let clickedBox = 0;

// Game Logic Starts From Here...
boxes.forEach((element) => {
  let boxText = element.querySelector(".box__text");
  element.addEventListener("click", () => {
    clickedBox += 1;
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      element.style.cursor = "not-allowed";
      element.style.pointerEvents = "none";
      turn = changeTurn();
      checkWin();
      playerTurn.innerHTML = "Turn of " + turn;
    }
    if (clickedBox === 9) {
      displayResult();
      winnerName.innerHTML = "Draw!";
      console.log(clickedBox);
    }
  });
});

// Adding Game Restart Code...
const restart = document.querySelector(".restart__btn");
restart.addEventListener("click", function () {
  turn = "X";
  showResult.style.display = "none";
  boxText.forEach((el) => {
    el.innerHTML = "";
  });
  playerTurn.innerHTML = "Turn of " + turn;
  boxes.forEach((el) => {
    el.style.cursor = "pointer";
    el.style.pointerEvents = "auto";
  });
});
