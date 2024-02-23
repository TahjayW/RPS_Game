# RPS_Game

A JavaScript rendition of Rock Paper Scissors to be played through console commands.


General outline : 
Define win/loss/draw state.
Need exceptions for failed/empty inputs.
Get a CPU to pick one of three choices randomly. 
Compare result with player choice.
Display results with prompt.


PC:

BEGIN
    GET user input
    let text = user Input;
    let cpuChoice = CPU_CHOICE();
    if isInputValid(text)
    {
        
    }

    function isInputValid(someInput){
        if(someInput is 'string' AND someInput ISNOT empty) 
        THEN    return true;
    }
        else{
            print "Invalid entry"    
            return false;
    }

    function CPU_CHOICE(){
        let cpuChoice = random number 1-3
        return cpuChoice;
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
    function choice_Evaluation()
        let playerChoice = PLAYER_CHOICE();
        let cpuChoice = CPU_CHOICE();

        switch 
            case 1
            return 'rock'
            break;
            case 2
            break; 
            return 'paper'
            case 3
            break; 
            return 'scisscors'
            break;