/**
 * async/await 🐶
 *
 */

fetch("data/cats.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Request was not OK!");
		}

		return response.json();
	})
	.then((data) => {
		console.log("data:", data);
	})
	.catch((err) => {
		console.log("🚨 Something went wrong:", err);
	});
