/**
 * 🌧️.
 *
 */

const alertEl = document.querySelector("#alert");
const forecastEl = document.querySelector("#forecast");
const spinnerEl = document.querySelector("#spinner");

/**
 * Update UI with the current weather conditions
 *
 * @param data Current weather conditions
 */
const renderCurrentWeather = (data) => {
	forecastEl.innerHTML = `
		<img src="assets/images/forecast-banner.png" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${data.name}</span>,
				<span id="country">${data.sys.country}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${data.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${data.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${data.wind.speed}</span>
				m/s
			</p>
		</div>
	`;
}

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

		// Render current weather conditions
		renderCurrentWeather(currentWeather);

	} catch (err) {
		// TODO: Replace this with a proper Bootstrap Alert box
		alert(err);
	}
});
