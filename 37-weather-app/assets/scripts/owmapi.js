/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

const API_KEY = "594fd1d5bb4dbd7dcce29762cd7b595b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const FAKE_DELAY = 1500;

/**
 * Get current weather for city from OpenWeatherMap API
 *
 * @param {string} city
 */
const getCurrentWeather = async (city) => {
	// Get current weather conditions in `city`
	const res = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// Fake a slow API
	if (FAKE_DELAY) {
		await new Promise(r => setTimeout(r, FAKE_DELAY));
	}

	// Check if response is ok
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);  // "404 Not Found"
	}

	// Convert response body from JSON to a JavaScript value
	const data = await res.json();

	// Return current weather condition
	return data;
}
