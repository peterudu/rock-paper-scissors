//  Declare constants for DOM elements and possible game choices
let playerScore;
let computerScore;
const buttons = document.querySelectorAll(".control");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const playerImage = document.querySelector("#player-image");
const computerImage = document.querySelector("#computer-image");
const messages = document.querySelector("#messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to all buttons
 */
 buttons.forEach(button => {
     button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
        console.log(typeof playerChoice)
     });
});

// for (let button of buttons) {
//     button.addEventListener("click", function () {
//     let playerChoice = this.getAttribute("data-choice");
//     console.log(playerChoice)
//     return playerChoice
//     })
//   }

// console.log(playerScore.innerHTML);
// console.log(computerScore.innerHTML);


/**
 * The main game function. Accepts one parameter, which
 * is the  data choice value of the selected button
 */
function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
  
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice, playerChoice);
  
    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];
  
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    // console.log(result);
    // messages.innerText = result;
  
    // updateScores(result);
  }


/**
 * Checks to see who the game winner is, it accepts two strings as
 * parameters
 */
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      // return "A draw";
      draw(playerChoice, computerChoice);
      messages.innerHTML = "A draw"
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        // return "Computer won";
        lost(playerChoice, computerChoice);
        messages.innerHTML = "Computer won"
      } else {
        // return "Player won";
        won(playerChoice, computerChoice);
        messages.innerHTML = "Player won"
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        // return "Computer won";
        lost(playerChoice, computerChoice);
        messages.innerHTML = "Computer won"
      } else {
        // return "Player won";
        won(playerChoice, computerChoice);
        messages.innerHTML = "Player won"
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        // return "Computer won";
        lost(playerChoice, computerChoice);
        messages.innerHTML = "Computer won"
      } else {
        // return "Player won";
        won(playerChoice, computerChoice);
        messages.innerHTML = "Player won"
      }
    }
  }


/**
 * Checks and if no winner between player and computer total scores will not increase and display a draw message
 */
function draw(playerChoice, computerChoice) {
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
  messages.innerHTML = "A draw";
}


  