let billAmount = document.querySelector("#billAmount");
let tipAmount = document.querySelector("#tipAmount");
let splitAmount = document.querySelector("#splitAmount");
let calcButton = document.querySelector("#calcButton");
let total = document.querySelector("#total");

function calculateTotal(){
  var index = tipAmount.selectedIndex;
  
  if(index === 0){
    total.innerHTML = "Tip: $" + ((billAmount.value * .10)/splitAmount.value);
  }
  
  if(index === 1){
    total.innerHTML = "Tip: $" + ((billAmount.value * .15)/splitAmount.value);
  }
  
  if(index === 2){
    total.innerHTML = "Tip: $" + ((billAmount.value * .20)/splitAmount.value);
  }
  
  if(index === 3){
    total.innerHTML = "Tip: $" + ((billAmount.value * .25)/splitAmount.value);
  }
  
  if(index === 4){
    total.innerHTML = "Tip: $" + ((billAmount.value * .30)/splitAmount.value);
  }
}

calcButton.addEventListener("click", calculateTotal);