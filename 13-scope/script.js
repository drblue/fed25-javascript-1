/**
 * Scope
 */
// "use strict";

// console.log("points before it's even created:", points);

let points = 50;	// globally scoped variable
console.log("points before if-statement:", points);

if (true) {
	let points = 40;  // block scoped/locally scoped variable

	console.log("points inside first if-statement:", points);

	if (true) {
		points = 1337;
		console.log("points inside second if-statement:", points);
	}

	console.log("points inside first if-statement, but after second if-statement:", points);
}

console.log("points after if-statements:", points);
