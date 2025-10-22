/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter() <--
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

const numbers = [ 42, 5, 21, 50, 24, 18, 47 ];
console.log("Original numbers:", numbers);

/*
// Push all numbers >= 25 into a new array
const largeNumbers = [];
numbers.forEach((num) => {
	if (num >= 25) {
		largeNumbers.push(num);
	}
});
*/

/*
// Filter out all numbers >= 25 into a new array
const largeNumbers = numbers.filter((num) => {
	if (num >= 25) {
		return true;  // YES, this number should be in the new array
	} else {
		return false;  // NOPE, exclude this number from the new array
	}
});
*/

/*
// Filter out all numbers >= 25 into a new array (shorter)
const largeNumbers = numbers.filter((num) => {
	return (num >= 25)
		? true
		: false;
});
*/

/*
// Filter out all numbers >= 25 into a new array (EVEN shorter!!!)
const largeNumbers = numbers.filter((num) => {
	return num >= 25;
});
*/

// Filter out all numbers >= 25 (OMG ITS SO SHORT!!!!!!!!!!!!! 🤯🤯🤯)
const largeNumbers = numbers.filter((num) => num >= 25);

console.log("Large numbers:", largeNumbers);
