const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");
const choiceButton = document.querySelectorAll(".choiceButton");
const playerScorePara = document.querySelector(".playerScorePara");
const computerScorePara = document.querySelector(".computerScorePara");
const gameOver = document.querySelector(".gameOver");

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
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    if (playerScore === 5) {
      gameOver.textContent = "Game over, you win!";
      resetGame();
    }
    if (computerScore === 5) {
      gameOver.textContent = "Game over, you lose!";
      resetGame();
    }
  })
);

function resetGame() {
  computerScore = 0;
  playerScore = 0;
}

let computerScore = 0;
let playerScore = 0;

const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  const randomChoice = gameChoices[randomIndex];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lose";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lose";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win";
  } else {
    return "It's a tie";
  }
}

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
