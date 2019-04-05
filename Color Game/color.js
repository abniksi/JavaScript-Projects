var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numOfSquares = 6;

easyBtn.addEventListener('click', (event) =>{
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#282828";
});

hardBtn.addEventListener('click', (event) =>{
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.background = "#282828";
});

resetButton.addEventListener("click", (event)=>{
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#282828";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",
		function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#282828";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num;i++){
		arr.push(randomColor());
	}

	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};
