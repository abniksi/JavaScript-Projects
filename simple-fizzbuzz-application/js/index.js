let wrapper = document.querySelector('#wrapper');

let x = 1;

setInterval(function(){  
  if(x % 3 === 0 && x % 5 === 0){
    wrapper.innerHTML = "FizzBuzz"
  }
  else if(x % 3 === 0){
    wrapper.innerHTML = "🍺";
  }
  else if(x % 5 === 0){
    wrapper.innerHTML = "🐝";
  }
  else{
    wrapper.innerHTML = x;
  }
  
  x++;
  
  if(x === 100){
    x = 1;
  }
  
}, 1000);