// Rock Paper Scisscors, started 2024-02-22
//To be tested with everything in a loop with yes or no as exit/continue conditions.
//Get Input


let timeToPlay = prompt("Would you like to play ? Yes or No", "yes");
if (timeToPlay.toLocaleLowerCase() === 'yes') {
    console.log("sick");
    startGame();

} else {
    console.log("Aight then, tootles.");
}

function startGame() {
    //Assign values for RPS
    let playerChoice = prompt("Type rock, paper or scisscors.");
    let cpuChoice = CPU_Choice();
    //convert player choice
    let convertedPlayerChoice = convert_Choice();
    //Check user input is valid
    if (isInputValid(playerChoice)) {

        compareChoice(convert_Choice(playerChoice), cpuChoice);
    } else {
        startGame();
    }


}

function convert_Choice(x) {
    let convertedChoice;
    if (x === 'rock') {
        convertedChoice = 0;
    } else if (x === 'paper') {
        convertedChoice = 1;

    } else {
        convertedChoice = 2;

    }
    return convertedChoice;
}

function CPU_Choice() {
    let x = Math.floor(Math.random() * 3);
    return x;
}


function isInputValid(someInput) {
    if (someInput === 'string' && someInput.length != 0) {
        return true;
    }
    else {
        console.log("Invalid entry, please try again.");
        return false;
    }

}

//a = player choice b = cpu choice
function compareChoice(a, b) {
    if (a === b) {
        console.log("draw!");
    } else if ((a === 1 && b === 0) || (a === 2 && b === 1) || (a === 0 && b === 2)) {
        console.log("Player wins!");
    } else {
        console.log("Player Loses!");
    }
}