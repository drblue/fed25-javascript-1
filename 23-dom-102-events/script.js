/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 *
 * document.createElement 	creates a new element of a specific type. does NOT add it to the DOM
 * parentEl.append(newEl) 	appends AFTER the last element INSIDE the element we select
 * parentEl.prepend(newEl) 	prepends BEFORE the first element INSIDE the element we select
 * element.remove()			removes the selected element from the DOM
 */

// Get reference to DOM-elements
const todoListEl = document.querySelector("ul");

/*
// Listen for click-events on the "Add"-button
document.querySelector("#add").addEventListener("click", () => {
	// GET reference to ALL `li` elements and the LENGTH of that list (array)
	const liCount = document.querySelectorAll("li").length;

	// Will **REPLACE** all content in the element with a **NEW**
	// _string_ that contains both the old and the new content
	todoListEl.innerHTML += `<li>listitem ${liCount + 1}</li>`;

	console.log("I am button first click handler");
});
*/

// Listen for when the form is being submitted
document.querySelector("form").addEventListener("submit", (e) => {
	// Stop form from being submitted (and causing a page reload)
	e.preventDefault();

	// Get value from input-field
	const title = document.querySelector("#title").value;

	// Add a new listitem with the title to the list
	todoListEl.innerHTML += `<li>${title}</li>`;

	// Profit 💰
});

// Listen for click-events on the list
todoListEl.addEventListener("click", (e) => {
	console.log("Hello, I am UL click handler, you clicked on:", e.target);
	console.log("The element you clicked on was a:", e.target.tagName);

	// If the clicked element is a LI-tag and it does HAS the
	// `completed` class, remove the element.
	// Otherwise, if the clicked element is a LI-tag (that does not have
	// the `completed` class), add the `completed` class.
	if (e.target.tagName === "LI" && e.target.classList.contains("completed")) {
		// It was completed, let's remove it entirely
		e.target.remove();

	} else if (e.target.tagName === "LI") {
		// Add the `completed` class on the clicked element
		e.target.classList.add("completed");
	}
});

// 🏨
document.querySelector("a").addEventListener("click", (e) => {
	// This will be executed whenever someone clicks on the link
	console.log("Such click, much link, very internetz");

	// You can check in anytime you like but you can never leave
	// Prevent user from ever leaving our site 😈 (*MOHAHAHA*)
	e.preventDefault();

	// Taunt user 😎
	alert("You can check in anytime you like but you can never leave 😈");
	// window.location.href = "https://www.bing.com";
});
