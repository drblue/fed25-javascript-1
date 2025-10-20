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

// Handle click-event on a listitem
const handleLiClick = (e) => {
	e.target.classList.toggle("completed");
}

// Listen for click-events on the "Add"-button
document.querySelector("#add").addEventListener("click", () => {
	// GET reference to ALL `li` elements and the LENGTH of that list (array)
	const liCount = document.querySelectorAll("li").length;

	// Will **REPLACE** all content in the element with a **NEW**
	// _string_ that contains both the old and the new content
	// todoListEl.innerHTML += `<li>listitem ${liCount + 1}</li>`;

	// ANOTHER way to create elements that does NOT replace the old content,
	// only appends it

	// Create a new `li` element and add some content
	const newLiEl = document.createElement("li");
	newLiEl.innerText = `listitem ${liCount + 1}`;

	// Also add a click-event handler to the new listitem
	newLiEl.addEventListener("click", handleLiClick);

	// Append the new element to the `ul` list
	todoListEl.append(newLiEl);
});

// Get all listitems
document.querySelectorAll("li").forEach( (liEl) => {
	// Add click-event handler to each listitem
	liEl.addEventListener("click", handleLiClick);
} );
