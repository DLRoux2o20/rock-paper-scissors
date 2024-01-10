function defineA() {
    return Math.floor((Math.random() * 10) / 3);
}

let a = defineA();
let computerScore = 0;
let playerScore = 0;
let choiceInvalidDetector = 0;

function getComputerChoice() {

    if (a === 0) {
        a = defineA();
        return getComputerChoice();
    } else if (a === 1) {
        return "Rock";
    } else if (a === 2) {
        return "Paper";
    } else if (a === 3) {
        return "Scissors";
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        function playRound(playerSelection, computerSelection) {
    let computerChoice = getComputerChoice();
    let playerText = prompt("What is your choice?");

    if (playerText) {
        let playerSelection = playerText.toLowerCase();
        let playerSelectionCapital = (playerSelection.charAt(0)).toUpperCase() + playerSelection.substr(1, (playerSelection.length) - 1);
        alert(computerChoice + " " + "vs" + " " + playerSelectionCapital);

        console.log("Computer Choice: " + getComputerChoice());
        console.log("Your Choice: " + playerSelectionCapital);

        if (playerSelection === "rock") {
            var b = 1;
        } else if (playerSelection === "paper") {
            var b = 2;
        } else if (playerSelection === "scissors") {
            var b = 3;
        } else {
            alert("Choice invalid");
            i--;
            choiceInvalidDetector = 1;
        }

        if (choiceInvalidDetector === 1) {
            console.log("Choice Invalid");
            console.log(" ");
            choiceInvalidDetector = 0;
        } else if (a === 1 && b === 3) {
            console.log(`You lose! Rock beats Scissors`);
            computerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
        } else if (a === 3 && b ===1) {
            console.log("You won! Rock beats Scissors");
            playerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
        } else if (a > b) {
            console.log(`You lost! ${computerChoice} beats ${playerSelectionCapital}`);
            computerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
        } else if (a < b) {
            console.log(`You won! ${playerSelectionCapital} beats ${computerChoice}`);
            playerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
        } else if (a === b) {
            console.log("It was a tie");
            a = defineA();
            getComputerChoice();
            playRound();
        }

        if (playerScore === 3) {
            console.log("You won the best of five " + playerScore + " to " + computerScore);
        } else if (computerScore === 3) {
            console.log("You lost the best of five " + playerScore + " to " + computerScore);
        }    

    } else {
        alert("Please enter choice");
    }

}
    }
}


game();