const btns = document.querySelectorAll(".btn");


var currentChoice=0;
function generateComputerChoice() {
    let choice = Math.floor(Math.random() * btns.length);
    console.log(choice);
  if(currentChoice == choice){
    document.body.style.background = 'green';
    generateComputerChoice();
    console.log("choice didn't change");
  }
  else{
    console.log("choice "+ choice);
    var currButton="button"+(choice+1);
    document.getElementById(currButton).style.backgroundColor = 'red';
    document.body.style.background = 'pink';
    currentChoice = choice;
  }
   // setTimeout(generateComputerChoice, 5000);
}

btns.forEach(btn => btn.addEventListener('click', (e) => {
  generateComputerChoice();
}));

function stopPlaying(){
  console.log("Stop playing clicked");
  //document.querySelectorAll(".btn").style.backgroundColor="blue";
  document.querySelectorAll(".btn").forEach(btn => {
    btn.style.backgroundColor="#f0f0f0";
    btn.style.border="1px grey solid";
    btn.style.borderRadius="9px";
    
    
    });
  
 // clearInterval(interval);
}

function startPlaying(){
  console.log("Game has started");
  generateComputerChoice();
}


