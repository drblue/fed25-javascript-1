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
