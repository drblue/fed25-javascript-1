/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * .every() <--
 * .some() <--
 */

const students = [
	{
		name: "Johan",
		points: 1337,
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

/**
 * Array.every()
 *
 * Check if **every** item in an array passes a condition
 */

// Are all students godkända?
const areAllStudentsGodkanda = students.every((student) => {
	return student.points >= 40;
});
console.log("Are all students godkända?", areAllStudentsGodkanda);

/**
 * Array.some()
 *
 * Check if **some** (at least 1) items in the array passes a condition
 */
const areAtLeastOneStudentGodkand = students.some((student) => {
	return student.points >= 40;
});
console.log("Are some (at least 1) student godkända?", areAtLeastOneStudentGodkand);
