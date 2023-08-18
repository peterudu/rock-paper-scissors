//  Declare constants for DOM elements and possible game choices
const buttons = document.querySelectorAll(".control");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
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
    });
});

console.log(playerScore.innerHTML);
console.log(computerScore.innerHTML);



function playGame(playerChoice) {

}

function checkWinner(playerChoice, computerChoice) {

}

function updateScores(result) {

}

function resetScore() {
    
}

