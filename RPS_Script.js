// Rock Paper Scisscors, started 2024-02-22
//To be tested with everything in a loop with yes or no as exit/continue conditions.
//Get Input
//

//Revisting with UI March 30th 2024


//Creating Divs 
const body = document.querySelector("body");
const divContainer = document.createElement("div");

//Buttons
const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";

divContainer.append(btnPaper, btnRock, btnScissors);


//Score Display
const divScoreDisplay = document.createElement("div");
say(divScoreDisplay, "Display To Contain cpu/player Scores.");
const divCPUScore = document.createElement("div");
say(divCPUScore, "CPU Score Here");
const divPlayerScore = document.createElement("div");
say(divPlayerScore, "Player score here");


divScoreDisplay.append(divCPUScore, divPlayerScore);
divContainer.append(divScoreDisplay);




//Messaging
const divMessage = document.createElement("div");




//Ease of use
function say(aDiv, text) {
    aDiv.textContent = text;
}


//Events 
divContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'btnRock':
            playerChoice = 'rock';

            break;
        case 'btnScissors':
            playerChoice = 'scissors';
            break;
        case 'btnPaper':
            playerChoice = 'paper';
            break;

    }
    //Run Comparison Logic Here
    compareChoice(convert_Choice(playerChoice), CPU_Choice());

    //Update divScore values here


});

body.append(divContainer);



//Win Conditions 
//False winState = CPU win, True winState = playerWin
let playerWins = 0;
let cpuWins = 0;
let totalRounds = 0;
let winState = new Boolean;
let drawState = new Boolean;
let cpuConvertedChoice = "";
let playerChoice = "";

startGame();




function startGame() {
    //Loop function until 5rounds
    //  while (totalRounds < 5 && cpuWins < 3 && playerWins < 3) {
    //Assign values for RPS





    //Increment while Loop
    //if (drawState) {
    //   console.log("No points awarded this round!");

    //}
    //else if (winState) {
    //   comparisonResult();
    // playerWins++;
    //} else if (!winState) {
    //  comparisonResult();
    // cpuWins++;

    //}
    //totalRounds++;


    /*  if (playerWins > cpuWins) {
          console.log(`You won ${playerWins} rounds out of ${totalRounds}! Well done!`);
      } else if (playerWins < cpuWins) {
          console.log(`The cpu won ${cpuWins} rounds out of ${totalRounds}! Better luck next time!`);
      } else {
          console.log(`You won ${playerWins} times! CPU won ${cpuWins} times! Draw!`);
      }
  */
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

    return x;
}




// 0 rock 1 paper 2 scisscors
function compareChoice(playerChoice, cpuChoice) {
    drawState = false;
    winState = false;

    if (playerChoice === cpuChoice) {
        divMessage.textContent = "draw!";

        return drawState = true;
    } else if ((playerChoice === 1 && cpuChoice === 0) || (playerChoice === 2 && cpuChoice === 1) || (playerChoice === 0 && cpuChoice === 2)) {
        divMessage.textContent = "Player wins!";
        winState = true;
    } else {
        divMessage.textContent = "CPU Wins!";
        winState = false;
    }

    
    if (winState) {
        playerWins++;
        say(divPlayerScore, "Player Score is " + playerWins);
    } else {
        cpuWins++;
        say(divCPUScore, "CPU score is " + cpuWins);
        
    }

}

function comparisonResult() {
    if (playerWins) {
        //Change this to a method console.log(`${playerChoice} beats ${cpuConvertedChoice}! Player wins this round!`);

    }
    else (!playerWins)
    {
        //Change this to a method  console.log(`${cpuConvertedChoice} beats ${playerChoice}! CPU wins this round!`);

    }

}
