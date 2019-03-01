//Selecting and creating variables for different div elements.
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Creating setDate function.
function setDate(){
  //Creating date object to get the current time.
  const now = new Date();

  //Seconds hand.
  //now.getSeconds() method gets the current times seconds.
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //Minute hand.
  //now.getSeconds() method gets the current times seconds.
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360)  + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //Hour hand.
  //now.getHours() method gets the current times seconds.
  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

//Setting the interval length to change the hand positions.
setInterval(setDate, 1000);
