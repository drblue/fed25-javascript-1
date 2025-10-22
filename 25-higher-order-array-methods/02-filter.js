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

const largeNumbers = [];
numbers.forEach((num) => {
	if (num >= 25) {
		largeNumbers.push(num);
	}
});

console.log("Large numbers:", largeNumbers);
