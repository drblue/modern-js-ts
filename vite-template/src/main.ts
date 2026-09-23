import "./style.css";

/**
 * Promises 🤞🏻
 */

/*
console.log("Fetching a todo with a Promise...");

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(res => {
		console.log("Got some response:", res);
		if (!res.ok) {
			throw new Error("Response was not ok 😭😭😭");
		}

		return res.json();
	})
	.then(data => {
		console.log("NOW I CAN HAZ DATA", data);
	})
	.catch(err => {
		console.error("Oh noez, broken promises 😳", err);
	});

*/

// async/await
const getTodos = async () => {
	try {
		console.log("Fetching a todo with async/await");

		const res = await fetch("https://jsonplaceholder.typicode.com/todoszzzz/1");

		if (!res.ok) {
			throw new Error("Response was not ok 😭😭😭");
		}

		const data = await res.json();
		console.log("NOW I CAN HAZ DATA", data);

	} catch (err) {
		console.error("Oh noez, error happened, but we caught it", err);
	}

}
getTodos();
console.log("Done?");
