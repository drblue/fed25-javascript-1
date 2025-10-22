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
const numbers = [ 47, 5, 28, 1337, 50, 21 ];
console.log("Numbers in chaos:", numbers);

// Sort numbers (won't sort numerically)
// numbers.sort();
// console.log("Numbers in proper(?) order:", numbers);

// ACTUALLY sort numbers numerically
numbers.sort( (a, b) => {
	console.log(`comparing a: ${a} vs b: ${b}`);

	// if `a` is less than `b` (i.e. `a` should be sorted BEFORE `b`)
	if (a < b) {
		console.log(`${a} is less than ${b} and should be placed BEFORE`);
		return -1;
	}

	// if `a` is greater than `b` (i.e. `a` should be sorted AFTER `b`)
	if (a > b) {
		console.log(`${a} is greater than ${b} and should be placed AFTER`);
		return 1;
	}

	console.log(`${a} is equal to ${b}`);
	return 0;
} );

console.log("Numbers in proper! order:", numbers);
