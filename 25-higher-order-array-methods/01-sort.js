/**
 * Higher Order Array Methods
 *
 * .sort() <--
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// names
const names = ["Johan", "Pernilla", "Alicia", "Maja", "Elliot"];
console.log("Names in total chaos:", names);

// Sort array alphabetically
names.sort();
console.log("Names in alphabetical (proper) order 🤩:", names);

// Reverse array
names.reverse();
console.log("Names in reverse alphabetical order 🤪:", names);
*/

// numbers
// const numbers = [ 47, 5, 21, 50, 28, 18, 47, 13, 24, 8, 18, 15, 11, 43, 7, 102, 1337, 33, 52 ];
// const numbers = [ 47, 5, 28, 1337, 50, 21 ];
// console.log("Numbers in chaos:", numbers);

// Sort numbers (won't sort numerically)
// numbers.sort();
// console.log("Numbers in proper(?) order:", numbers);

// ACTUALLY sort numbers numerically
/*
numbers.sort( (a, b) => {
	console.log(`comparing a: ${a} vs b: ${b}. a-b (${a}-${b}) =`, a - b);

	return a - b;

	// Possible, but considered BAD PRACTICE to nest ternary operators
	// return (a < b)
	// 	? -1
	// 	: ((a > b)
	// 		? 1
	// 		: 0);

	// // if `a` is less than `b` (i.e. `a` should be sorted BEFORE `b`)
	// if (a < b) {
	// 	// console.log(`${a} is less than ${b} and should be placed BEFORE`);
	// 	return -1;
	// }

	// // if `a` is greater than `b` (i.e. `a` should be sorted AFTER `b`)
	// if (a > b) {
	// 	// console.log(`${a} is greater than ${b} and should be placed AFTER`);
	// 	return 1;
	// }

	// // console.log(`${a} is equal to ${b}`);
	// return 0;
} );
*/

// A more compact, shorter version of above if-statements
/*
numbers.sort( (a, b) => {
	return a - b;
});
*/

// EVEN SHORTER NUMBER SORTING using a one-liner 🤯
// It is exactly the same as the above compact, shorter version
// but without curly brackets `{}` and the `return` statement
// numbers.sort( (a, b) => a - b );

// console.log("Numbers in proper! order:", numbers);

/**
 * Sort objects based on a property
 */
const students = [
	{
		name: "olle",
		points: 1337,
	},
	{
		name: "Örjan",
		points: -3,
	},
	{
		name: "alicia",
		points: 88,
	},
	{
		name: "Älvin",
		points: 88,
	},
	{
		name: "Åke",
		points: 35,
	},
	{
		name: "Elliot",
		points: 42,
	},
];

// Log students before sorting
console.log("Students before sort:", students);

// Sort array based on number of points (lowest first)
/*
students.sort( (a, b) => {
	console.log(a, b);

	if (a.points < b.points) {
		return -1;
	}

	if (a.points > b.points) {
		return 1;
	}

	return 0;
} );
*/

/*
// Sort array based on number of points (lowest first) - SHORT VERSION
students.sort( (a, b) => {
	return a.points - b.points;
} );
*/

/*
// Sort array based on number of points in reverse order (VERSION 1)
students.sort( (a, b) => {
	return a.points - b.points;
} );
students.reverse();
*/

/*
// Sort array based on number of points in reverse order (VERSION 2)
students.sort( (a, b) => {
	return b.points - a.points;
} );
*/

/*
// Sort students by their name (case insensitive)
students.sort((a, b) => {
	if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1;
	}

	if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1;
	}

	return 0;
});
*/

// Sort students by their name, case insensitive and locale (swedish) aware
students.sort((a, b) => {
	return a.name.localeCompare(b.name, "sv");
});

console.log("Students after sort:", students);
