/*
Round 1 of 5 begins
Player inputs "Rock", "Paper" or "Scissors"
Program checks for validation of input
Stores it in variable
Program draw one of the 3 options and compare it to player choice
Using conditional statements it checks who wins this round
Round ends winner score is stored in variable
New round begins and cycle goes till the end of 5th round

1) Randomizer of strings

2) One round of game
3) Loop length of 5

 ✊✋✌
*/

const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const gameChoices = document.querySelectorAll(".choice");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const gameTextMain = document.querySelector(".text__main");
const gameTextSecondary = document.querySelector(".text__secondary");
const popupText = document.querySelector(".popup__text-main");
const popup = document.querySelector(".popup");
const btnReset = document.querySelector(".btn__reset");

let pScore = 0;
let pcScore = 0;

const clearDisplay = () => {
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  gameTextMain.textContent = "";
  gameTextSecondary.textContent = "";
};

const getComputerChoice = function () {
  const arr = ["✊", "✋", "✌"];
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  return arr[random - 1];
};

const displayChoice = (pInput, cInput) => {
  clearDisplay();
  playerChoice.textContent = pInput;
  computerChoice.textContent = cInput;
};

const playRound = function (playerSelection, computerSelection) {
  if (
    (playerSelection === "✊" && computerSelection === "✌") ||
    (playerSelection === "✋" && computerSelection === "✊") ||
    (playerSelection === "✌" && computerSelection === "✋")
  ) {
    playerScore.textContent = "";
    playerScore.textContent = ++pScore;
    gameTextMain.textContent = `You Win! 🎉`;
    gameTextSecondary.textContent = `${playerSelection} beats ${computerSelection}`;
  }
  if (
    (playerSelection === "✊" && computerSelection === "✋") ||
    (playerSelection === "✋" && computerSelection === "✌") ||
    (playerSelection === "✌" && computerSelection === "✊")
  ) {
    computerScore.textContent = "";
    computerScore.textContent = ++pcScore;
    gameTextMain.textContent = `You Lose... 😔`;
    gameTextSecondary.textContent = `${playerSelection} beats ${computerSelection}`;
  }

  if (playerSelection === computerSelection) {
    gameTextMain.textContent = `Draw! 🥱`;
    gameTextSecondary.textContent = "You thought the same..";
  }
};

const resetGame = () => {
  location.reload();
};

const finishGame = () => {
  if (pScore === 5 || pcScore === 5) {
    popup.style.opacity = "1";
    popup.style.visibility = "visible";

    pScore === 5
      ? (popupText.textContent = `Congrats, you turned out to be better than machine! 🎉`)
      : (popupText.textContent = `What can i say, you played yourself, PC won. 😂`);
  }
};

gameChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const targetClick = e.target.textContent;
    const pcChoice = getComputerChoice();

    displayChoice(targetClick, pcChoice);
    playRound(targetClick, pcChoice);
    finishGame();
  });
});

btnReset.addEventListener("click", () => resetGame());
