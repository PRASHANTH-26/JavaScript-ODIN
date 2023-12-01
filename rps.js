let Player = 0;
let Computer = 0;



function getComputerChoice(){
    let rpsarr=["rock","paper","sissor"];
    let cans = rpsarr[Math.floor(Math.random() * rpsarr.length)];
    return cans;
}



function playRound(playerSelection,computerSelection)
{   
    if(playerSelection == computerSelection)
    {
        alert('Its a draw! Player have selected $playerSelection, Computer have selected $computerSelection. Select Again!!');
        return "draw";
        
    }

    else

    {

        
            if(playerSelection == "rock")
            {
                switch(computerSelection){
                    case "paper" :
                        alert("Paper beats Rock\nYou Lose,Computer Wins!");
                        return "Computer";
                        break;
                    case "sissor" :
                        alert("Rock beats Sissor\n You Win,Computer Lose!");
                        return "Player";
                        break;
                    default :
                        break;
                }
            }
            
            else if(playerSelection == "sissor")
            {
                switch(computerSelection){
                    case "rock" :
                        alert("Rock beats sissor\nYou Lose,Computer Wins!");
                        return "Computer";
                        break;
                    case "paper" :
                        alert("Sissor beats Paper\nYou Win,Computer Lose!");
                        return "Player"
                        break;
                    default :
                        break;
                }

            }

            else if(playerSelection == "paper")
            {
                switch(computerSelection){
                    case "rock" :
                        alert("Paper beats Rock\nYou Win,Computer Lose!");
                        return "Player";
                        break;
                    case "sissor" :
                        alert("Sissor beats paper\nYou Lose,Computer Wins!");
                        return "Computer";
                        break;
                    default : 
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

   let whowon =  playRound(ppsel,cosel);
   alert(whowon);

   if(whowon == "Player")
   {
        if(Player<=4)
        {
        Player++;
        document.getElementById('playerScoreboard').innerHTML = Player;
        }
        else
        {
            alert("PLAYER WINNER <> PLAYER WINNER");
            setTimeout(function(){location.reload()},3000);
        }
        
   }
   else if(whowon=="Computer")
   {
    if(Computer<=4)
    {
        Computer++;
        document.getElementById('computerScoreboard').innerHTML = Computer;
    }
    else
    {
        alert("COMPUTER WINNER <> COMPUTER WINNER");
        setTimeout(function(){location.reload()},3000);

    }
   }


   //document.getElementById('ans').innerHTML = "Winner is "+ whowon;

   //event.preventDefault();

   //return null;
    
}


function aass()
{
    
}

//document.getElementById('submit').addEventListener("click",letsPlay());