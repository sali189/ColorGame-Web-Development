var numberOfSquares = 6;
var colors= generateRandomColors(numberOfSquares);
var sq = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<sq.length; i++){
		if(colors[i]){
			sq[i].style.backgroundColor = colors[i];
		}
	else{
		sq[i].style.display = "none";	}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<sq.length; i++){
		sq[i].style.backgroundColor = colors[i];
		sq[i].style.display = "block";	
	}
});	

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i = 0; i<sq.length; i++){
	//add initial colors to squares
	sq[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelBlue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
}

});
colorDisplay.textContent = pickedColor;

for(var i = 0; i<sq.length; i++){
	//add initial colors to squares
	sq[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	sq[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedCOlor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent =  "try again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i<sq.length; i++){
		sq[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	//add num random colors to arr
	for (var i =0; i< num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" +r + ", " + g+ ", " +b+ ")";
}