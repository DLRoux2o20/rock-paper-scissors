let defineA = function() {
    return Math.floor((Math.random() * 10) / 3);
};

function getComputerChoice() {
 
    if (defineA === 0) {
        defineA = 1;
        console.log("zero");
        return "Rock";
    } else if (defineA === 1) {
        console.log("rock");
        return "Rock";
    } else if (defineA === 2) {
        console.log("paper");
        return "Paper";
    } else if (defineA === 3) {
        console.log("scissors");
        return "Scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    let computerSelection = getComputerChoice();
    // let valueA = defineA;
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

        if (valueA === 1 && b === 3) {
        console.log(`You lose! Rock beats Scissors`);
        } else if (valueA === 3 && b ===1) {
        console.log("You won! Scissors beats Rock");
        } else if (valueA > b) {
        console.log(`You lost! ${computerSelection} beats ${playerSelectionCapital}`);
        } else if (valueA < b) {
        console.log(`You won! ${playerSelectionCapital} beats ${computerSelection}`);
        } else if (valueA === b) {
        console.log("It was a tie");
        getComputerChoice();
        console.log("getComputerChoice");
        playRound();
        }

    } else {
        alert("Please enter choice");
    }  
}

playRound();