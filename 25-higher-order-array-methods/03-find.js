/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find() <--
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

const numbers = [ 21, 42, 5, 50, 24, 18, 47 ];
console.log("Original numbers:", numbers);

/*
// find the first large number - the meh way 😒
let firstLargeNumber = null;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] >= 40) {
		firstLargeNumber = numbers[i];
		break;
	}
}
console.log("First(?) large number:", firstLargeNumber);
*/

/*
// find the first large number - the still bad but slightly better way
const largeNumbers = numbers.filter((num) => {
	return num >= 40;
});
console.log("largeNumbers", largeNumbers);
const firstLargeNumber = largeNumbers[0];

console.log("First large number:", firstLargeNumber);
*/

/*
const firstLargeNumber = numbers.find((num) => {
	console.log(`Checking if ${num} >= 45`);
	return num >= 45;
});
console.log("First large number:", firstLargeNumber);

const firstVeryLargeNumber = numbers.find((num) => {
	return num >= 100;
});
console.log("First VERY large number:", firstVeryLargeNumber);
*/

const students = [
	{
		name: "Johan",
		points: -1337,
	},
	{
		name: "Pernilla",
		points: -3,
	},
	{
		name: "Alicia",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
	{
		name: "Elliot",
		points: 42,
	},
];

// Get the FIRST student which are godkänd (>= 40)
const firstPassedStudent = students.find((student) => {
	return student.points >= 40;
});
console.log("First student who passed the exam:", firstPassedStudent);
