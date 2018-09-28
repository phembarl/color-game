var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();

	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");


			//if statement/ternary operator
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(i = 0; i < squares.length; i++){

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;

			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(pickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "PLAY AGAIN?"


			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}

// function changeColors(color){
// 	squares.forEach(function(square){
// 		square.style.background = color;
// 	});
// }

//or...

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";


	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

}

resetButton.addEventListener("click", function(){
	reset();
});

