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

/*
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
*/

/*
let username = prompt("Enter your name");
if (!username) {
	username = "Anonymous haxx0r";
}
console.log("Your name is:", username);
*/

/*
let username = prompt("Enter your name");
let msg;
if (username) {
	msg = `You have a name, it is ${username}, wow!`;
} else {
	msg = `Y U HAS NO NAME?!`;
}
console.log(msg);
*/

let username = prompt("Enter your name");
let msg = username
	? `You have a name, it is ${username}, wow!`
	: `Y U HAS NO NAME?!`;
console.log(msg);

/**
 * Double Negation / Double Bang 🤯
 *
 * For quick conversion to somethings boolean value
 */
console.log("the opposite of username is:", !username);
console.log("the opposite of the opposite of username is:", !!username);
