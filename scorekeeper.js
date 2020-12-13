const p1Button = document.querySelector("#p1");
const p2Button = document.getElementById("#p2");
const resetButton = document.getElementById("reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const numInput = document.querySelector("input");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 3;

p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score += 1;
	if(p1Score === winningScore){
		gameOver = true;
		p1Display.classList.add("has-text-success");
		p2Display.classList.add("has-text-danger");
		p1Button.disabled = true;
		p2Button.disabled = true;
	}
	p1Display.textContent = p1Score;	
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score += 1;
	if(p2Score === winningScore){
		gameOver = true;
		p2Display.classList.add("has-text-success");
		p1Display.classList.add("has-text-danger");
		p1Button.disabled = true;
		p2Button.disabled = true;
	}
	p2Display.textContent = p2Score;
	}
});

winningScoreSelect.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
})

resetButton.addEventListener("click", reset());

function reset(){
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("has-text-success", "has-text-danger");
	p2Display.classList.remove("has-text-success", "has-text-danger");
	p1Button.disabled = false;
	p2Button.disabled = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});