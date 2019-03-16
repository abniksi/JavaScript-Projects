//Simple JavaScript simulation. Every time you click the button, there is a 68.9% chance of it being a strike and aa 31.1% chance of it being a ball. After 3 strikes, you are out. After 4 balls, you walk.
var pitch = document.getElementById("pitch");
var count = document.getElementById("count");

var ball = 0;
var strike = 0;
var outs = 0;
var inning = 0;

count.value = "Ball: 0 Strike: 0";

function changeCount(){
  //Max Scherzer strike percentage rate was 68.9% in 2018.
  //We are assuming he threw all of his pitches at a strike rate of 68.9% even though that is most likely not correct.
  var strikePercentage = Math.random();
  if (strikePercentage < 0.689){
    count.value = ("Ball: " + ball + " Strike: " + ++strike);
    if(strike === 3){
      count.value = "Strike 3! Take a seat! New batter."
      strike = 0;
      ball = 0;
      outs = outs + 1;
      if(outs === 3){
        count.value = ("That's 3 outs new inning.")
        outs = 0;
        inning = inning + 1;
        if(inning === 9){
          count.value = ("Complete game from Max Scherzer!")
        }
      }
    }
  }
    
  else{
    count.value = ("Ball: " + ++ball + " Strike: " + strike);
    if(ball === 4){
      count.value = ("Ball 4. Take your base. New batter.")
      strike = 0;
      ball = 0;
    }
  }
};