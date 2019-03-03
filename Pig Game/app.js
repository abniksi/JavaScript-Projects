//Declaring variables but not setting them.
var scores, roundScore, activePlayer, gamePlaying;

//Calling newGame() function immediatley to begin new game.
newGame();

//Roll dice button.
function btn(){
  //If game playing = true then users can roll the dice
  if (gamePlaying){
    var dice = Math.floor(Math.random()*6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1){
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
}

function holdbtn(){
  if (gamePlaying){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 200){
      document.querySelector('#name-' + activePlayer).textContent = "Winner!"
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else{
      nextPlayer();
    }
  }
}

function newbtn(){
  newGame();
}

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

function newGame(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true;

  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';

  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-hold').addEventListener('click', holdbtn);
document.querySelector('.btn-new').addEventListener('click', newbtn);
