// Rock Paper Scisscors, started 2024-02-22
//To be tested with everything in a loop with yes or no as exit/continue conditions.
//Get Input
//

//Win Conditions 
//False winState = CPU win, True winState = playerWin
let playerWins = 0;
let cpuWins = 0;
let totalRounds = 0;
let winState = new Boolean;
let drawState = new Boolean;
let cpuConvertedChoice = "";
let playerChoice ="";
let timeToPlay = prompt("Would you like to play ? Yes or No", "yes");
if (timeToPlay.toLocaleLowerCase() === 'yes') {
    console.log("sick");
    startGame();

} else {
    console.log("Aight then, tootles.");
}

function startGame() {
    //Loop function until 5rounds
    while (totalRounds < 5) {
        //Assign values for RPS
         playerChoice = prompt("Type rock, paper or scissors.");


        //Check user input is valid
        if (isInputValid(playerChoice)) {
            let convertedPlayerChoice = convert_Choice(playerChoice);
            let cpuChoice = CPU_Choice();
            compareChoice(convertedPlayerChoice, cpuChoice);
        } else {
            console.log("Invalid entry, please try again.");
            startGame();
        }
        //Increment while Loop
        if (drawState) {
            console.log("No points awarded this round!");

        }
        else if (winState) {
            comparisonResult();
            playerWins++;
        } else if (!winState) {
            comparisonResult();
            cpuWins++;
        }
        totalRounds++;
    }

    if (playerWins > cpuWins) {
        console.log("You win!");
    } else if (playerWins < cpuWins) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }

}

function convert_Choice(playerChoice) {
    let convertedChoice;
    if (playerChoice === 'rock') {
        convertedChoice = 0;
    } else if (playerChoice === 'paper') {
        convertedChoice = 1;

    } else {
        convertedChoice = 2;

    }
    return convertedChoice;
}

function CPU_Choice() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            cpuConvertedChoice = "rock";
            break;
        case 1:
            cpuConvertedChoice = "paper";
            break;
        case 2:
            cpuConvertedChoice = "scissors";
            break;
    }
    return x;
}


function isInputValid(someInput) {
    if (typeof someInput === 'string' && someInput.length != 0) {
        if (someInput.toLowerCase() === 'rock' || someInput.toLowerCase() === 'paper' || someInput.toLowerCase() === 'scissors') {
            return true;
        }

    }
    else {
        console.log("Invalid entry, please try again.");
        return false;
    }

}

//a = player choice b = cpu choice
// 0 rock 1 paper 2 scisscors
function compareChoice(a, b) {
    drawState = false;
    winState = false;

    if (a === b) {
        console.log("draw!");
        return drawState = true;
    } else if ((a === 1 && b === 0) || (a === 2 && b === 1) || (a === 0 && b === 2)) {
        console.log("Player wins!");
        winState = true;
    } else {
        console.log("Player Loses!");
        winState = false;
    }

}

function comparisonResult() {
    if (playerWins) {
        console.log(`${playerChoice} beats ${cpuConvertedChoice}! Player wins this round!`);
    }
    else (!playerWins)
    {
        console.log(`${cpuConvertedChoice} beats ${playerChoice}! CPU wins this round!`);
    }

}
