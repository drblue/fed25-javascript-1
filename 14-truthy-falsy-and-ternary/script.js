/**
 * Truthy/falsy values
 *
 * falsy values in JavaScript
 * - 0
 * - -0
 * - ""
 * - null
 * - undefined
 * - NaN
 * - Infinity
 * - -Infinity
 */

let message = "abc";
if (message) {
	console.log("Message is truthy");
} else {
	console.log("Message is falsy");
}

let points = null;
if (points) {
	console.log("You've got points 🏆!");
} else {
	console.log("No points 4 u!");
}

let username = "";
if (!username) {
	username = "Anonymous haxx0r";
}

console.log(`Welcome ${username}`);
