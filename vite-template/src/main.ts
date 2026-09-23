import "./style.css";

/**
 * Array methods
 */

const fruits = ["apple", "banana", "pear"];

const forEachRes = fruits.forEach((fruit) => {
	console.log(fruit.toUpperCase());
});
console.log("forEachRes:", forEachRes);  // undefined
console.log("fruits:", fruits);

const mapRes = fruits.map((fruit) => {
	return fruit.toUpperCase();
});
console.log("mapRes:", mapRes);  // [ "APPLE", "BANANA", "PEAR" ]
console.log("fruits:", fruits);  // [ "apple", "banana", "pear" ]

const fruitLengths = fruits.map((fruit) => {
	return fruit.length;
});
console.log("fruitLengths:", fruitLengths);  // [5, 6, 4]

const fruitLis = fruits.map(fruit => {
	return `<li>${fruit}</li>`;
});
console.log("fruitLis:", fruitLis);
