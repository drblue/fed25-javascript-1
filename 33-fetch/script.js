/**
 * Fetch 🐶
 *
 * Get `dogs.json` and `cats.json` in parallel
 */

console.log("Starting fetch 🎾🐶...");

// Get doggos
fetch("data/dogs.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Request was not OK!");
		}

		return response.json();
	})
	.then((data) => {
		document.querySelector("#dogs").innerHTML = data
			.map(dog => `<li>${dog.name}</li>`)
			.join("");

		// Get cattos
		return fetch("data/cats.json");
	})
	.then((response) => {
		if (!response.ok) {
			throw new Error("Request was not OK!");
		}

		return response.json();
	})
	.then((data) => {
		document.querySelector("#cats").innerHTML = data
			.map(cat => `<li>${cat.name}</li>`)
			.join("");
	})
	.catch((err) => {
		console.log("🚨 Something went wrong:", err);
	});
