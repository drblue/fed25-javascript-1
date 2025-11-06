/**
 * Fetch 🐶
 *
 */

console.log("Starting fetch 🎾🐶...");

fetch("data/snakes.json")
	.then((response) => {
		console.log("Got response:", response);

		if (!response.ok) {
			// FAIL
			throw new Error("Request was not OK!");
		}

		return response.json();
	})
	.then((data) => {
		console.log("Got data:", data);
	})
	.catch((err) => {
		console.log("🚨 Something went wrong:", err);
	});
