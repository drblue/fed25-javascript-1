/**
 * Timers
 *
 */

const btnScareEl = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

// Generate a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

btnScareEl.addEventListener("click", () => {
	// hide button
	btnScareEl.classList.add("hide");

	// get a random delay to wait before scaring the user
	const delay = getRandomNumber() * 1000;

	// start timer
	console.log(`Starting timer for ${delay} ms before scaring user 😈`);
	setTimeout(() => {
		// this will be executed after (approximately) 5 seconds
		console.log("Scaring user... 😱");

		// show ghost
		ghostEl.classList.remove("hide");

		// start timer for showing button
		setTimeout(() => {
			console.log("Show button again... ✅");
			ghostEl.classList.add("hide");  // hide ghost
			btnScareEl.classList.remove("hide");  // show button again
		}, 4000);

	}, delay);

	console.log("Timer has started, prepare to be scaaaaarreeeed 🦇");
});
