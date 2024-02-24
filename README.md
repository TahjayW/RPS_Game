# RPS_Game

A JavaScript rendition of Rock Paper Scissors to be played through console commands.


General outline : 
Define win/loss/draw state.
Need exceptions for failed/empty inputs.
Get a CPU to pick one of three choices randomly. 
Convert CPU choices to be comparable to 
playerChoices.
Compare result with player choice.
Display results with prompt.

Pseudo:

BEGIN
{


    GET user input
    let playerChoice = promptValue;
    let cpuChoice = CPU_CHOICE();
    
    if isInputValid(playerChoice)
    {
        
    }
    Check if user input is valid>
    function isInputValid(someInput){
        if(someInput is 'string' AND someInput ISNOT empty) 
        THEN    return true;
    }
        else{
            print "Invalid entry"    
            return false;
    }
    Random int return value
    function CPU_CHOICE(){
        let x = random number 1-3
        return x;
    }
    
        
    function winCondition{
        if isValid(userInput){
            if( choice_evaluation() === 'win')
            print "you win!"
        }elseif(choice_evaluation()=== 'lose'){
            print "you lost!"

        }elseif (choice_evaluation()=== 'draw'){
            print "draw!"
        }
    }

    Define wins with strings
    function choice_Evaluation(playerChoice,cpuChoice)
        
    A>B B>C C>A 

    Compare two values
    are they the same?
    YES then draw
    if not

    if playerChoice is A and cpu Choice is B
    OR 
     if playerChoice is B and CPU choice is C
    OR
    if playerChoice is C and CPU choice is A

    then player wins
    return winstate

    else
    player loses
    return loss state

}