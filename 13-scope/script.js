/**
 * Scope
 */
// "use strict";

// console.log("points before it's even created:", points);

/*
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
*/

/**
 * 🤠
 */
/*
console.log("points before it's even created:", points);

var points = 50;	// globally scoped variable
console.log("points before if-statement:", points);

if (true) {
	var points = 40;

	console.log("points inside first if-statement:", points);

	if (true) {
		var points = 1337;
		console.log("points inside second if-statement:", points);
	}

	console.log("points inside first if-statement, but after second if-statement:", points);
}

console.log("points after if-statements:", points);
*/

// KIDS, DON'T TRY THIS AT HOME (OR AT SCOOL... OR AT WORK... OR EVER)
let i = 42;
// var i = 43;

for (let i = 0; i < 5; i++) {
	console.log("lol", i);

	for (let i = 0; i < 3; i++) {
		console.log("rotflol", i);
	}
}

console.log("i should be 42:", i);
