let addDiv = document.querySelector(".grid1");
let display = document.querySelector("p");
let counter = 0;
operator = [];
someStr = "";
numb = "";
numbers = [];

function clearthis() {
	console.log("click");
	counter++;
	someStr = "";
	display.textContent = "0";
	numb = "";
	operator = [];
	numbers = [];
}

function add() {
	counter++;
	numbers.push(numb);
	someStr += "+";
	display.textContent = someStr;
	operator.push("+");
	numb = "";
}
function multiply() {
	counter++;
	numbers.push(numb);
	someStr += "*";
	display.textContent = someStr;
	operator.push("*");
	numb = "";
}

function substract() {
	counter++;
	numbers.push(numb);
	someStr += "-";

	display.textContent = someStr;
	operator.push("-");
	numb = "";
}
function divide() {
	counter++;
	numbers.push(numb);
	someStr += "/";
	display.textContent = someStr;
	operator.push("/");
	numb = "";
}
function one() {
	counter++;

	someStr += "1";

	display.textContent = someStr;
	numb += "1";
}
function two() {
	counter++;

	someStr += "2";
	numb += "2";

	display.textContent = someStr;
}
function three() {
	counter++;

	someStr += "3";

	display.textContent = someStr;
	numb += "3";
}
function four() {
	counter++;

	someStr += "4";
	numb += "4";

	display.textContent = someStr;
}
function five() {
	counter++;

	someStr += "5";

	display.textContent = someStr;
	numb += "5";
}
function six() {
	counter++;

	someStr += "6";

	display.textContent = someStr;
	numb += "6";
}
function seven() {
	counter++;

	someStr += "7";

	display.textContent = someStr;
	numb += "7";
}
function eight() {
	counter++;

	someStr += "8";

	display.textContent = someStr;
	numb += "8";
	console.log(numbers);
}
function nine() {
	counter++;

	someStr += "9";

	display.textContent = someStr;
	numb += "9";
	console.log(numbers);
}
function zero() {
	counter++;

	someStr += "0";
	numb += "0";
	console.log(numbers);
}

function calc() {
	numbers.push(numb);
	console.log(operator);
	console.log(numbers);
	let sum;
	for (let i = 0; i < numbers.length; i++) {
		let number1 = sum + parseInt(numbers[i]);
		console.log("n1 " + number1);
	}
}
