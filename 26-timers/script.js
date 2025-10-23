/**
 * Timers
 *
 */

const btnScareEl = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

btnScareEl.addEventListener("click", () => {
	// hide button
	btnScareEl.classList.add("hide");

	// start timer
	console.log("Starting timer for scaring user 😈");
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

	}, 5000);

	console.log("Timer has started, prepare to be scaaaaarreeeed 🦇");
});
