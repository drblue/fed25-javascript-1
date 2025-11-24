import { getCurrentWeather } from "./services/OWMAPI";
import type { CurrentWeather } from "./services/OWMAPI.types";
import imgDay from "./assets/images/day.svg";
import imgNight from "./assets/images/night.svg";
import "./assets/scss/app.scss";

console.log("Environment variables:", import.meta.env);
console.log("API key from env is:", import.meta.env.VITE_API_KEY);
/**
 * 🌧️.
 *
 */

const alertEl = document.querySelector<HTMLDivElement>("#alert")!;
const forecastEl = document.querySelector<HTMLDivElement>("#forecast")!;
const spinnerEl = document.querySelector<HTMLDivElement>("#spinner")!;

const hideAlert = () => {
	alertEl.innerText = "";
	alertEl.className = "hide";
}

const showErrorAlert = (msg: string) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-danger";
}

const showInfoAlert = (msg: string) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-info";
}

/**
 * Update UI with the current weather conditions
 *
 * @param data Current weather conditions
 */
const renderCurrentWeather = (data: CurrentWeather) => {
	// Transform each weather condition into a listitem
	const weatherConditions = data.weather.map((condition) => {
		return `<li><img src="https://openweathermap.org/img/wn/${condition.icon}@2x.png" alt="${condition.main}" title="${condition.description}"></li>`;
	});

	// Determine if it's daytime or nighttime when the forecast was updated
	// If it's after sunrise AND before sunset, it's daytime. Otherwise it's nighttime
	const banner = (data.dt > data.sys.sunrise && data.dt < data.sys.sunset)
		? imgDay
		: imgNight;

	/*
	let banner = "assets/images/night.svg"; // assume nighttime as default
	if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
		// whoops, it's daytime
		banner = "assets/images/day.svg";
	}
	*/

	// Get weather condition freshness
	const freshness = new Date(data.dt * 1000);

	// Output current weather to DOM
	forecastEl.innerHTML = `
		<img src="${banner}" class="card-img-top">
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

		<ul class="conditions">
			${weatherConditions.join("")}
		</ul>

		<p id="freshness" class="small">
			${freshness.toLocaleString()}
		</p>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector<HTMLFormElement>("#search-form")!.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Hide any previous current weather conditions
	forecastEl.classList.add("hide");
	hideAlert();

	// Get value from input-field and trim it ✂️
	const city = document.querySelector<HTMLInputElement>("#query")!.value.trim();
	// const city = e.target.city.value;
	// const targetEl = e.target as HTMLFormElement;
	// const city = targetEl.query.value.trim();

	if (city.length < 3) {
		showInfoAlert("Too few characters in city, at least 3 is required!");
		return;
	}

	try {
		// Show loading spinner
		spinnerEl.classList.remove("hide");

		// Get weather conditions for city
		const currentWeather = await getCurrentWeather(city);
		console.log(`Current weather conditions in "${city}":`, currentWeather);

		// Save searched city to localStorage
		localStorage.setItem("weather_city", city);

		// Render current weather conditions
		renderCurrentWeather(currentWeather);
		forecastEl.classList.remove("hide");

	} catch (err) {
		if (err instanceof Error) {
			showErrorAlert(err.message);
		} else {
			showErrorAlert("Something very unexpected happened 😳");
		}
	}

	// Hide loading spinner
	spinnerEl.classList.add("hide");
});

// Set query-input to any previously saved city in localStorage
document.querySelector<HTMLInputElement>("#query")!.value = localStorage.getItem("weather_city") ?? "";
