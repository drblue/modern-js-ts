import "./style.css";

/**
 * Destructuring
 */

// Object destructuring
const person = {
	firstName: "Alex",
	age: 30,
	city: "Malmö",
};

console.log(person.firstName);
console.log(person.age);

const { firstName: displayName, age } = person;
console.log(displayName);
console.log(age);

// Array destructuring
const numbers = [10, 20, 30];
const [num1, num2] = numbers;
console.log(num1, num2);

/**
 * Spread
 */

// const alsoNumbers = numbers;
// alsoNumbers.push(40);
// console.log("numbers", numbers);
// console.log("alsoNumbers", alsoNumbers);
// console.log("numbers === alsoNumbers?", numbers === alsoNumbers);

const alsoNumbers = [ ...numbers ];  // [ 10, 20, 30 ]
alsoNumbers.push(40);
console.log("numbers", numbers);
console.log("alsoNumbers", alsoNumbers);
console.log("numbers === alsoNumbers?", numbers === alsoNumbers);

const alexClone = { ...person };
alexClone.firstName = "Kalle";
console.log("Alex:", person);
console.log("Alex clone:", alexClone);

/**
 * Rest
 */

const createOrder = (customerName, ...args) => {
	console.log("Hi " + customerName);
	console.log("You've ordered:", args);
}
createOrder("Johan", "Coffee", "Redbull");
