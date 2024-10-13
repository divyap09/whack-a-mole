const tiles = document.querySelectorAll(".tile");
const score = document.querySelector('#score');
const gamesPlayed = document.querySelector('#gamesPlayed');
const timeLeft = document.querySelector('#time-left');
const startButton = document.querySelector('#start_button');

let result=0,
  gamesPlayedCount =0,
  countDownTime = 30;
  hitPosition = null;
let countDownTimer = null;
let moleTimer = null;

function restartGame(){
  countDownTime = 30;
  result =0;
  score.textContent = result;
  gamesPlayedCount = 0;
  gamesPlayed.textContent = gamesPlayedCount;
}

function startTheGame(){
  startButton.disabled = true;
  tiles.forEach(tile => {
    tile.classList.remove('mole');
    tile.disabled = false;
  });

  let randomIndex = Math.floor(Math.random() * 9);
  tiles[randomIndex].classList.add('mole');
  hitPosition = tiles[randomIndex].id;
}

tiles.forEach(tile => {
  tile.addEventListener('mousedown', () => {
    console.log(tile.id)
    if(tile.id == hitPosition){
    hitPosition = null;
    result++;
    score.textContent = result;
    }
    gamesPlayedCount++;
    gamesPlayed.textContent = gamesPlayedCount;
  })
})        


function moveMole(){
  moleTimer = setInterval(startTheGame, 500);
}

 function startCountDown(){
  countDownTimer = setInterval(countDown, 1000);
 }

function countDown(){
  
  countDownTime--;
  timeLeft.textContent = "00:"+ countDownTime.toString().padStart(2, '0');
  console.log(countDownTime);
  if(countDownTime == 0){
    startButton.disabled= false;
    clearInterval(countDownTimer);
    clearInterval(moleTimer);
    tiles.forEach(tile => {
      tile.classList.remove('mole');
      tile.disabled = true;
    });
  }
    
  
}



