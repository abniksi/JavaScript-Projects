let player = document.querySelector("#player");
let selection = document.querySelector("#selection");
let pic = document.querySelector("#pic");

function selectPlayer(){
  let freshman = ["Derek of Tarth","Bryce Konitzer", "Gunner","Clint Wells"];
  let sophomores = ["Jandy","Connor Patrick Peplow","Wicklund","Tank","Jake McCaw","Carp"];
   let juniors = ["JGaines", "John Rave", "Huggy", "B Toast", 
                 "Big Butters", "Joe Aeilts", 
                 "Quadz", "Sebtec", "Brady Huffman", "Matt Walker", 
                 "Brent", "CoJo", "Bronke", 
                 "Gilmore", "Jordan Libman"];
  let seniors = ["Rhett", "Mitch Vogrin","Scurvy","Hutch","Lingo","John Cena", "Derek Parola"];
  
  let random = Math.random();
  
  if(random < 0.35){
    let freshmanRandom = Math.floor(Math.random()*3);
    selection.innerHTML = freshman[freshmanRandom];
  } 
  
  if(random > 0.35 && random < 0.65){
    let sophomoreRandom = Math.floor(Math.random()*5);
    selection.innerHTML = sophomores[sophomoreRandom];
  }
  
  if(random > 0.65 && random < .85){
    let juniorRandom = Math.floor(Math.random()*14);
    selection.innerHTML = juniors[juniorRandom];
  }
  
  if(random > .85 && random < .98){
    let seniorRandom = Math.floor(Math.random()*6);
    selection.innerHTML = seniors[seniorRandom];
  }
  
  if(random > .98 && random < 1){
    selection.innerHTML = "Ross";
  }
}

player.addEventListener("click", selectPlayer);