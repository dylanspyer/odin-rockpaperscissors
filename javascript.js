// Computer randomly selects one of the three choices
const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  const randomChoice = gameChoices[randomIndex];
  return randomChoice;
}

const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");
const choiceButton = document.querySelectorAll(".choiceButton");

choiceButton.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = `Result: ${playRound(
      playerSelection,
      computerSelection
    )}`;
  })
);

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose";
    computerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win";
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose";
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win";
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose";
    computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win";
    playerScore++;
  } else {
    return "It's a tie";
  }
}

// console.log(playerSelection);
// console.log(computerSelection);

// console.log(playRound(playerSelection, computerSelection));

// log result via a text prompt stating either "you win", "you lose", or "tie"

// When playRound is run
// Create a running tally of how many times play won and how many times computer won
// Give player a means to repeat playRound
// When either player or computer reaches 5 consecutive wins
// Prompt "game over. try again."
// function game() {
//   for (let i = 1; i <= Infinity; i++) {
//     playerSelection = prompt("Rock, paper, scissors, shoot!").toLowerCase();
//     computerSelection = getComputerChoice();
//     console.log(`You choose ${playerSelection}`);
//     console.log(`Computer chooses ${computerSelection}`);
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(`The score is ${playerScore} to ${computerScore}`);
//     if (playerScore == 5) {
//       return console.log("you won the series");
//     }
//     if (computerScore == 5) {
//       return console.log("you lost the series");
//     }
//   }
// }

// game();
// log the total games lost and won for the player and the computer
// If player reaches a total of five wins, print text "you won" and display a button to restart
// If computer reaches a total of five wins, print text "you lost" and display a button to restart
