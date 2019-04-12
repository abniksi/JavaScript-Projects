let pictures = document.querySelector('#chicago');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');
let incrementCounter = 1;

next.addEventListener("click", () =>{
  ++incrementCounter;
  if (incrementCounter === 4) {
    incrementCounter = 1;
  }
  pictures.src = 'images/chicago' + incrementCounter + '.jpg'
});

previous.addEventListener("click", () =>{
  --incrementCounter;
  if(incrementCounter === 0){
    incrementCounter = 3;
  }
  pictures.src = 'images/chicago' + incrementCounter + '.jpg';
});
