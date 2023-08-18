/**
 * Declare constants for DOM elements
 * and possible choices
 */

const buttons = document.querySelectorAll(".control");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const playerImage = document.querySelector("#player-image");
const computerImage = document.querySelector("#computer-image");
const messages = document.querySelector("#messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Add even listener to all buttons
 */
// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         let playerChoice = this.getAttribute("data-choice");
//         console.log(playerChoice)
//     })
// }
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
});

/**
 * The main game function. Accepts one parameter, which
 * is the  data choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice, playerChoice)

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    console.log(result);
    messages.innerText = result;
    
    // updateScores(result);
}

/**
 * Checks to see who the winner is, it accepts two strings as
 * parameters
 */
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "A draw";
    }   else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer won";
        }  else {
            return "Player won";
        }
    }   else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer won";
        }  else {
            return "Player won";
        }
    }   else if (playerChoice === "scissors") {
        if  (computerChoice === "rock") {
            return "Computer won";
        }   else {
            return "Player won";
      }
    }
}

/**
 * Updates the player and computer total scores
 */
// function updateScore(messages) {
//     if (messages === "Player won") {
//         playerScore = playerScore.innerText + 1;
//     } else if (messages === "Computer won") {
//         computerScore == ++computerScore;
//     }
// }

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>
    `;
  } else if (winner === "computer") {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

  modal.style.display = "block";
}


/**
 * Resets the player and computer total scores back to zero
 */
// function resetScore() {
//     playerScore.innerText = 0;
//     computerScore.innerText = 0;
// }
