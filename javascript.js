// Computer randomly selects one of the three choices
const gameChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  const randomChoice = gameChoices[randomIndex];
  return randomChoice;
}

// User chooses one of the three choices by clicking one or typing one
// Prompt asks user to choose rock, paper, or scissors
// If typing, throw error to user if they do not input one of the choices, not case sensitive

const playerSelectionPrompt = prompt("Rock, paper, scissors");
const playerSelection = playerSelectionPrompt.toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

// If player types something else, throw an error
function wrongSelection(playerSelection) {
  if ((playerSelection != "rock", "paper", "scissors")) return "try again";
}

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win";
  } else if (playerSelection == computerSelection) {
    return "It's a tie";
  } else {
    return wrongSelection();
  }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// log result via a text prompt stating either "you win", "you lose", or "tie"

// When playRound is run
// Create a running tally of how many times play won and how many times computer won
// Give player a means to repeat playRound
// When either player or computer reaches 5 consecutive wins
// Prompt "game over. try again."

// log the total games lost and won for the player and the computer
// If player reaches a total of five wins, print text "you won" and display a button to restart
// If computer reaches a total of five wins, print text "you lost" and display a button to restart
