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


/**
 * Add event listener to all control buttons
 */
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

  computerImage.src = `assets/images/${choices[computerChoice]}.png`;
  computerImage.alt = choices[computerChoice];

  let result = checkWinner(choices[computerChoice], choices[playerChoice]);

  showResult(result, computerChoice)
 
}

/**
 * Checks to see who the winner of the round is, it accepts two strings as parameters
 * Returns the winner of the round or a draw
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
 * Takes in the result of the winner of a round and then increments the scoreboard score for either the player or the computer
 * If the result is a draw then there is no winner and no increment to scores
 */
function showResult(result) {
  if (result === "Player") {
    scoreboard.player++;
  } else if (result === "Computer") {
    scoreboard.computer++;
  } else if (result === "Draw") {
    scoreboard.player;
    scoreboard.computer;
  }

  // Display updated player and computer score
  score.innerHTML = `
  <p>Player Score: ${scoreboard.player}</p>
  <p>Computer Score: ${scoreboard.computer}</p>
  `;
}

