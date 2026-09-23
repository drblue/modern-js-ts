import "./style.css";

/**
 * TypeScript = Structurally Typed Type System
 *
 * Only type-check at build, **NOT** at runtime!
 */

let myString = "Johan";

myString = "Pelle";
// myString = 42;  // nope!

let myNumber: number;
myNumber = 1337;
// myNumber = "LOLCATS!";  // also nope!


const greet = (name: string, age: number) => {
	console.log(`Hello ${name}! You are ${age.toFixed()} years old.`);
}
greet("Johan", 44);

const add = (a: number, b: number, prefix?: string): string => {
	const sum = a + b;

	if (prefix) {
		return prefix + " " + sum;
	}

	return sum.toString();

	// return prefix
	// 	? prefix + " " + sum
	// 	: sum.toString();
}
console.log(add(3, 5));
console.log(add(1332, 5, "Summa:"));
