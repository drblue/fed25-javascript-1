/**
 * Clock ⌚️
 *
 */

// Get reference to element with id `clock`
const clockEl = document.querySelector("#clock");

const tick = () => {
	// get current date and time
	const now = new Date();

	// console.log("tick", now.toLocaleTimeString());

	// output current time to `#clock`-element
	clockEl.innerText = now.toLocaleTimeString();

	if (now.getDay() === 4 && now.getHours() >= 14 && now.getMinutes() >= 29) {
		clockEl.innerText += " 🥳";
	}

	if (now.getDay() === 5 && now.getHours() >= 16) {
		clockEl.innerText += " 🍻";
	}
}

// Start interval timer that updates the clock
setInterval(tick, 1000);

// Set current time when page loads
tick();
