/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

import type { CurrentWeather } from "./OWMAPI.types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.openweathermap.org/data/2.5";
const FAKE_DELAY = Number(import.meta.env.VITE_API_FAKE_DELAY) || 1500;

/**
 * Get current weather for city from OpenWeatherMap API
 *
 * @param {string} city
 */
export const getCurrentWeather = async (city: string) => {
	if (!API_KEY) {
		throw new Error("No API_KEY defined in environment variables!");
	}

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
	const data = await res.json() as CurrentWeather;
 //     ^?

	// Return current weather condition
	return data;
}
