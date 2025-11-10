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
const catWrapperEl = document.querySelector("#cat-wrapper");
const loadingSpinnerEl = document.querySelector("#loading-spinner");

// 😻
const fetchCat = () => {
	console.log("Getting kitteh...");

	// Show loading spinner 🐱
	loadingSpinnerEl.classList.remove("hide");

	// Get kitteh from `https://cataas.com/cat?json=true`
	fetch("https://cataas.com/cat?json=true")
		.then((res) => {
			if (!res.ok) {
				throw new Error("Could not find kitteh");
			}

			return res.json();
		})
		.then((data) => {  // Fake a slow API by delaying proceeding to the next step for 1500 ms
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(data);
				}, 1500);
			});
		})
		.then((cat) => {
			console.log("🐱:", cat);

			// Change image to the kitteh from the API response
			catImageEl.setAttribute("src", cat.url);

			// Hide loading spinner 🙈🐈
			loadingSpinnerEl.classList.add("hide");
		})
		.catch((err) => {
			console.log("🚨 Failed to fetch kitteh because:", err);
		});
}

// Attach click-eventlistener to the button
document.querySelector("#cat-button").addEventListener("click", fetchCat);

// Get kitteh on page load
fetchCat();
