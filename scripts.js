//ask for rock paper or scissors
//get text with election




//get the computer choice
function getComputerChoice(min = 1, max = 3) {
    return Math.floor(Math.random() * 3) + 1   
}



//play a single round


function singleRound(playerSelection, computerSelection, playerCount, computerCount) {
    //1==Rock, 2==Paper, 3==Scissors
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!")
        return [playerCount, computerCount];
    }
    else if (playerSelection === 1 && computerSelection === 2) {
        console.log("You Lose! Paper beats Rock")
        return [playerCount, computerCount + 1];
    }
    else if (playerSelection === 1 && computerSelection === 3){
        console.log("You Win! Rock beats Scissors")
        return [playerCount + 1, computerCount];
    }
    else if (playerSelection === 2 && computerSelection === 1) {
        console.log("You Win! Paper beats Rock")
        return [playerCount + 1, computerCount];
    }
    else if (playerSelection === 2 && computerSelection === 3) {
        console.log("You Lose! Scissors beats Paper")
        return [playerCount, computerCount + 1];
    }
    else if (playerSelection === 3 && computerSelection === 1) {
        console.log("You Lose! Rock beats Scissors")
        return [playerCount, computerCount + 1];
    }
    else if (playerSelection === 3 && computerSelection === 2) {
        console.log("You Win! Scissors beats Paper")
        return [playerCount + 1, computerCount];
    }
}

let playerCount = 0;
let computerCount = 0;

//play the entire game
for (i=0; i<5; i++) {
    let choice = prompt("Choose: Rock, Paper or Scissors?");
    let newChoice = 0;
    choice = choice.toLowerCase();

    if (choice == "rock") {
         newChoice = 1;
    }
    else if (choice == "paper") {
         newChoice = 2;
    }
    else if (choice == "scissors") {
         newChoice = 3;
    }

    let playerSelection = newChoice;
    let computerSelection = getComputerChoice();
   

    [playerCount, computerCount] = singleRound(playerSelection, computerSelection, playerCount, computerCount);
    
    

    console.log(`Player: ${playerCount} | Computer: ${computerCount}`);

}

if (playerCount > computerCount) {
    console.log("Congratulations! you Win the Game!")
}
else if (playerCount < computerCount) {
    console.log("Computer wins the game!")
}
else {
    console.log("It's a Tie! No winner!")
}

