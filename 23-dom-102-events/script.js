/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 */

// Get reference to DOM-elements
const todoListEl = document.querySelector("ul");

// Listen for click-events on the "Add"-button
document.querySelector("#add").addEventListener("click", () => {
	// GET reference to ALL `li` elements and the LENGTH of that list (array)
	const liCount = document.querySelectorAll("li").length;

	// Concatenate to the unordered list's innerHTML
	todoListEl.innerHTML += `<li>listitem ${liCount + 1}</li>`;
});

// Get all listitems
document.querySelectorAll("li").forEach( (liEl) => {
	// Add click-event handler to each listitem
	liEl.addEventListener("click", (e) => {
		console.log("'stop it, that tickles!' said:", e.target);

		// If target has class `completed`, remove it
		// If target DOES NOT have class `completed`, add it
		/*
		if (e.target.classList.contains("completed")) {
			e.target.classList.remove("completed");
		} else {
			e.target.classList.add("completed");
		}
		*/
		e.target.classList.toggle("completed");
	});
} );
