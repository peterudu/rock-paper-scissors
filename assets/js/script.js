/**
 * Declare constants and variables for DOM elements
 * and possible choices
 */
const buttons = document.querySelectorAll(".control");
const playerImage = document.querySelector("#player-image");
const computerImage = document.querySelector("#computer-image");
const messages = document.querySelector("#messages");
const choices = ["rock", "paper", "scissors"];
const resetBtn = document.querySelector("#reset");

let score = document.querySelector("#score");
let scoreboard = {
  player: 0,
  computer: 0,
};
let rounds =  0;
let remainingRounds = document.querySelector(".remainingRounds");
console.log(remainingRounds.innerHTML)
console.log(rounds)

// Add event listener to all buttons
for (let button of buttons) {
  button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
  });
}

// Add event listener to reset button
resetBtn.addEventListener("click", reset);

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
function checkWinner(pl, co) {
  if (pl === co) {
    messages.innerHTML = "This round is a draw";   
    return "Draw";
  }
  if (pl === "rock") {
    if (co === "paper") {
      messages.innerHTML = "Computer wins the round";
      return "Computer";
    } else {
        messages.innerHTML = "Player wins the round";
      return "Player";
    }
  }
  if (pl === "paper") {
    if (co === "scissors") {
      messages.innerHTML = "Computer wins the round";
      return "Computer";
    } else {
        messages.innerHTML = "Player wins the round";
      return "Player";
    }
  }
  if (pl === "scissors") {
    if (co === "rock") {
        messages.innerHTML = "Computer wins the round";
      return "Computer";
    } else {
        messages.innerHTML = "Player wins the round";
      return "Player";
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

