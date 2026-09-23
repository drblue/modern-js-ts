import "./style.css";

/**
 * Function Declaration vs Function Expression
 */

// Function Declaration
function add(a, b) {
	return a + b;
}
console.log("1 + 2 =", add(1, 2));

// Function Expression
const addExpression = function (a, b) {
	return a + b;
}
console.log("2 + 3 =", addExpression(2, 3));

// Arrow Function Expression ("Fat Arrow Syntax")
const addArrow = (a, b) => {
	return a + b;
}
console.log("3 + 4 =", addArrow(3, 4));

// Arrow Function Expression ("one-liner")
const addArrowOneLiner = (a, b) => a + b;
console.log("4 + 5 =", addArrowOneLiner(4, 5));


// Default values and template literals
const sayHi = (name, time = "day") => {
	return `Good ${time}, ${name}!`;
	// return "Good " + time + ", " + name + "!";
}
console.log(sayHi("YKREA26H1", "day/evening/night"));
console.log(sayHi("YKREA26H1"));
