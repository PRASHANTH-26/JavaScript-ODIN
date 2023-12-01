function getComputerChoice(){
    let rpsarr=["rock","paper","sissors"];
    let cans = rpsarr[Math.floor(Math.random() * rpsarr.length)];
    return cans;
}

function letsPlay()
{
    let abcsel =  document.querySelector('#playerformsel');
    let ppsel = abcsel.options[abcsel.selectedIndex].value;
    
    let cosel = getComputerChoice();

    //const rpsarr=["rock","paper","sissors"];
    
    //let cosel =  rpsarr.length();
    
    //let cans = rpsarr[Math.floor(Math.random() * rpsarr.length)];
    //alert(cans);
    //alert(typeof(cans));

    alert(typeof(ppsel))
    console.log(ppsel);
    alert(ppsel);

   alert(typeof(cosel))
    console.log(cosel);
    alert(cosel);

    //alert("button clicked");
    //playRound(ppsel,cosel);
}

