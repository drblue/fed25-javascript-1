/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array <--
 * - Shuffle an array
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

/*
// Old-school 👴🏻🎓
const friends = [];
for (let i = 0; i < students.length; i++) {
	friends.push(students[i]);
}

// Slightly more modern way 😃
const friends = students.filter(() => {
	return true;
});
*/

// Such modern, very cool, much not retro

// Spead `...` spreads (duh) out the array (i.e. "removes" the array or the square-brackets around the array)
// const heroes = ["Superman", "Batman", "Ironman", "Johan"];
// console.log( "Superman", "Batman", "Ironman", "Johan" );

// Spread syntax
const friends = [ ...students ];

console.log("Students:", students);
console.log("Friends:", friends);

students.pop();
console.log("Popped last student in students-array");
console.log("Students after popping:", students);
console.log("Friends after popping:", friends);
