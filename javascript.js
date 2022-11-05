// Computer randomly selects one of the three choices
const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  const randomChoice = gameChoices[randomIndex];
  return randomChoice;
}

// User chooses one of the three choices by clicking one or typing one
// Prompt asks user to choose rock, paper, or scissors
// If typing, throw error to user if they do not input one of the choices, not case sensitive

// const playerSelectionPrompt = prompt("Rock, paper, scissors");
// const playerSelection = playerSelectionPrompt.toLowerCase();

// const computerSelection = getComputerChoice();
// const playerSelection = prompt("Rock, paper, scissors, shoot").toLowerCase();

// If player types something else, throw an error

// Results are determined as follows:

// if player chooses rock and computer chooses rock, tie
// if player chooses rock and computer chooses paper, lose
// if player chooses rock and computer chooses scissors, win

// if player chooses paper and computer chooses paper, tie
// if player chooses paper and computer chooses scissors, lose
// if player chooses paper and computer chooses rock, win

// if player chooses scissors and computer chooses scissors, tie
// if player chooses scissors and computer chooses rock, lose
// if player chooses scissors and computer chooses paper, win
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    ++computerScore;
    console.log("You lose");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win");
    ++playerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You lose");
    ++computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win");
    ++playerScore;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose");
    ++computerScore;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win");
    ++playerScore;
  } else if (playerSelection == computerSelection) {
    console.log("It's a tie");
  } else {
    return console.log(wrongSelection());
  }
}

function wrongSelection(playerSelection) {
  if ((playerSelection != "rock", "paper", "scissors")) return "try again";
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
function game() {
  for (let i = 1; i <= Infinity; i++) {
    playerSelection = prompt("Rock, paper, scissors, shoot!").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`You choose ${playerSelection}`);
    console.log(`Computer chooses ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`The score is ${playerScore} to ${computerScore}`);
    if (playerScore == 5) {
      return console.log("you won the series");
    }
    if (computerScore == 5) {
      return console.log("you lost the series");
    }
  }
}

game();
// log the total games lost and won for the player and the computer
// If player reaches a total of five wins, print text "you won" and display a button to restart
// If computer reaches a total of five wins, print text "you lost" and display a button to restart
