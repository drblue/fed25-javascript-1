/**
 * Cataas 🐈🐶
 *
 * <https://cataas.com/>
 *
 * When button is clicked, make a fetch-request to
 * `https://cataas.com/cat?json=true`, convert it from JSON
 * and then set the image src to the `url` from the response.
 */

console.log("🐈");

// Get reference to image element
const catImageEl = document.querySelector("#cat-image");

// Attach click-eventlistener to the button
document.querySelector("#cat-button").addEventListener("click", () => {
	console.log("Getting kitteh...");

	// Get kitteh from `https://cataas.com/cat?json=true`
	fetch("https://cataas.com/cat?json=true")
		.then((res) => {
			if (!res.ok) {
				throw new Error("Could not find kitteh");
			}

			return res.json();
		})
		.then((cat) => {
			console.log("🐱:", cat);

			// Change image to the kitteh from the API response
			catImageEl.setAttribute("src", cat.url);
		})
		.catch((err) => {
			console.log("🚨 Failed to fetch kitteh because:", err);
		});
});
