/**
 * 🌧️.
 *
 */

const alertEl = document.querySelector("#alert");
const forecastEl = document.querySelector("#forecast");
const spinnerEl = document.querySelector("#spinner");

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	// Get value from input-field and trim it ✂️
	const city = document.querySelector("#query").value.trim();
	// const city = e.target.city.value;

	if (city.length < 3) {
		// TODO: Replace this with a proper Bootstrap Alert box
		alert("Too few characters in city, at least 3 is required!");
		return;
	}

	try {
		// Get weather conditions for city
		console.log(`Fetching weather conditions for city: "${city}"`);
		const currentWeather = await getCurrentWeather(city);
		console.log(`Current weather conditions in "${city}:"`, currentWeather);

	} catch (err) {
		// TODO: Replace this with a proper Bootstrap Alert box
		alert(err);
	}
});
