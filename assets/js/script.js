/**
 * Declare constants for DOM elements
 * and possible choices
 */
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const buttons = document.querySelectorAll(".control");
const playerImage = document.querySelector("#player-image");
const computerImage = document.querySelector("#computer-image");
const messages = document.querySelector("#messages");
const choices = ["rock", "paper", "scissors"];


// Add even listener to all buttons
for (let button of buttons) {
  button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
  });
}


/**
 * The main game function. Accepts one parameter, which
 * is the  data choice value of the selected button
 */
function playGame(playerChoice) {
  playerImage.src = `assets/images/${choices[playerChoice]}.png`;
  playerImage.alt = choices[playerChoice];

  let computerChoice = Math.floor(Math.random() * 3);
  console.log(playerChoice, computerChoice);

  computerImage.src = `assets/images/${choices[computerChoice]}.png`;
  computerImage.alt = choices[computerChoice];

  checkWinner(choices[computerChoice], choices[playerChoice]);
 
}


/**
 * Checks to see who the winner is, it accepts two strings as
 * parameters
 */
function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    draw(playerChoice, computerChoice);
    messages.innerHTML = "A draw";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      lost(playerChoice, computerChoice);
      messages.innerHTML = "Computer won";
    } else {
      won(playerChoice, computerChoice);
      messages.innerHTML = "Player won";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      lost(playerChoice, computerChoice);
      messages.innerHTML = "Computer won";
    } else {
      won(playerChoice, computerChoice);
      messages.innerHTML = "Player won";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      lost(playerChoice, computerChoice);
      messages.innerHTML = "Computer won";
    } else {
      won(playerChoice, computerChoice);
      messages.innerHTML = "Player won";
    }
  }
}


/**
 * Assigns a draw message if no game winnner between player and computer
 */
function draw(playerChoice, computerChoice) {
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
  messages.innerHTML = "A draw";
}

/**
 * Assigns a message that player won the game and increments total player score value by 1
 */
function won(playerChoice, computerChoice) {
  playerScore++;
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
  messages.innerHTML = "Player won";
}

/**
 * Assigns a message that computer won the game and increments the total computer score value by 1
 */ 
function lost(playerChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  playerScoreSpan.innerHTML = playerScore;
  messages.innerHTML = "Computer won";
}

