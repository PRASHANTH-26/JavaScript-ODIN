function getComputerChoice(){
    let rpsarr=["rock","paper","sissors"];
    let cans = rpsarr[Math.floor(Math.random() * rpsarr.length)];
    return cans;
}



function playRound(playerSelection,computerSelection)
{   
    if(playerSelection == computerSelection)
    {
        alert('Its a draw! Player have selected $playerSelection, Computer have selected $computerSelection. Select Again!!');
        
    }

    else

    {

        
            if(playerSelection == "rock")
            {
                switch(computerSelection){
                    case "paper" :
                        alert("Paper beats Rock\nYou Lose,Computer Wins!");
                        break;
                    case "sissor" :
                        alert("Rock beats Sissor\n You Win,Computer Lose!");
                        break;
                }
            }
            
            else if(playerSelection == "sissor")
            {
                switch(computerSelection){
                    case "rock" :
                        alert("Rock beats sissor\nYou Lose,Computer Wins!");
                        break;
                    case "paper" :
                        alert("Sissor beats Paper\nYou Win,Computer Lose!");
                        break;
                }

            }

            else (playerSelection == "paper")
            {
                switch(computerSelection){
                    case "rock" :
                        alert("Paper beats Rock\nYou Win,Computer Lose!");
                        break;
                    case "sissor" :
                        alert("Sissor beats paper\nYou Lose,Computer Wins!");
                        break;
                }
            }
        }
    }


function letsPlay()
{
    let abcsel =  document.querySelector('#playerformsel');
    let ppsel = abcsel.options[abcsel.selectedIndex].value;
    let cosel = getComputerChoice();
    
    console.log(ppsel);
    alert(ppsel);

    console.log(cosel);
    alert(cosel);

    alert("button clicked");
    playRound(ppsel,cosel);
}
