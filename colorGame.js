var numberOfSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons click listener
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}

	for(var i = 0; i < squares.length; i++) {
		//add click listener to the squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor == pickedColor) {
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = pickedColor;
				for(var j = 0; j < squares.length; j++)
					squares[j].style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}

	reset();
}

function reset() {
	resetButton.textContent = "New Colors"
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick the correct color
	pickedColor = pickColor();
	//change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//change h1 color to original
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
});

function pickColor() {
	var colorIndex = getRandomIntInclusive(0, colors.length-1);
	return colors[colorIndex];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateRandomColors(number) {
	var arr = [];
	//add random colors to the array
	for(var i = 0; i < number; i++) {
		var col = "rgb(" + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ", " + getRandomIntInclusive(0, 255) + ")";
		arr.push(col);
	}
	//return the array
	return arr;
}