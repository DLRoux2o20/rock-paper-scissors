function defineA() {
    return Math.floor((Math.random() * 10) / 3);
}

let a = defineA();

function getComputerChoice() {

    if (a === 0) {
        a = 1;
        console.log("zero");
        return "Rock";
    } else if (a === 1) {
        console.log("rock");
        return "Rock";
    } else if (a === 2) {
        console.log("paper");
        return "Paper";
    } else if (a === 3) {
        console.log("scissors");
        return "Scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    let computerSelection = getComputerChoice();
    let playerText = prompt("What is your choice?");

    if (playerText) {
        console.log("entered");
        let playerSelection = playerText.toLowerCase();
        let playerSelectionCapital = (playerSelection.charAt(0)).toUpperCase() + playerSelection.substr(1, (playerSelection.length) - 1);
        alert(computerSelection + " " + playerSelectionCapital);

        if (playerSelection === "rock") {
            var b = 1;
        } else if (playerSelection === "paper") {
            var b = 2;
        } else if (playerSelection === "scissors") {
            var b = 3;
        } else {
            alert("Choice invalid");
        }

        console.log(playerSelectionCapital);

        if (a === 1 && b === 3) {
        console.log(`You lose! Rock beats Scissors`);
        } else if (a === 3 && b ===1) {
        console.log("You won! Scissors beats Rock");
        } else if (a > b) {
        console.log(`You lostdefineA! ${computerSelection} beats ${playerSelectionCapital}`);
        } else if (a < b) {
        console.log(`You won! ${playerSelectionCapital} beats ${computerSelection}`);
        } else if (a === b) {
        console.log("It was a tie");
        defineA();
        console.log("defineA");
        getComputerChoice();
        console.log("getComputerChoice");
        playRound();
        console.log("playRound");
        }

    } else {
        alert("Please enter choice");
    }  
}

playRound();