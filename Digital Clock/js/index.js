//A lot of updates in mind to make this better. Adding buttons to select regular time or military time. Only military time currently. Adding an AM and PM. Making it sync up to the current time in real life.

//Using DOM manipulation to select all of our HTML divs
let hour = document.querySelector('#hour');
let minuteOne = document.querySelector('#minuteOne');
let minuteTwo = document.querySelector('#minuteTwo');
let secondOne = document.querySelector('#secondOne');
let secondTwo = document.querySelector('#secondTwo');

//Function to increments the time.
function seconds(){
  secondTwo.textContent++;
  if (secondTwo.textContent === '10'){
    secondTwo.textContent = '0';
    secondOne.textContent++;
  }
  
  if(secondTwo.textContent === '0' && secondOne.textContent === '6'){
    secondTwo.textContent = '0';
    secondOne.textContent = '0';
    minuteTwo.textContent++;
    if(minuteTwo.textContent === '10'){
      minuteTwo.textContent = '0';
      minuteOne.textContent++;
    }
  }
  
  
  if(minuteTwo.textContent === '0' && minuteOne.textContent === '6'){
    minuteTwo.textContent = '0';
    minuteOne.textContent = '0';
    hour.textContent++;
  }
  
  
  if(hour.textContent === '24'){
    hour.textContent = '1';
  }
}

//setInternval runs seconds function every second.
setInterval(seconds, 1000);