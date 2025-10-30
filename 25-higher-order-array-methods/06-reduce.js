/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
const simpleNumbers = [3, 7, 13, 19];

/*
// Old way 🤮
let totalSum = 0;
simpleNumbers.forEach((num) => {
	totalSum += num;
});
console.log("The sum of all numbers (using forEach) is:", totalSum);

// New way 😎
const totalSum = simpleNumbers.reduce((sum, num) => {
	return sum + num;
}, 0);
console.log("The sum of all numbers (using reduce) is:", totalSum);

const totalSum2 = simpleNumbers.reduce((sum, num) => sum + num, 1295);
console.log("The sum2 of all numbers (using reduce) is:", totalSum2);

const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
const numbersSum = numbers.reduce((prevValue, currValue) => {
	return prevValue + currValue;
}, 0);
console.log(`Reducer complete, numbers_sum is ${numbersSum}`);
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
console.log("Students:", students);

// Extract the points from all the student objects
const studentPoints = students.map((student) => {
	return student.points;
});
console.log("Student points:", studentPoints);

// Sum all the students points
const totalPoints = studentPoints.reduce((sum, points) => {
	return sum + points;
}, 0);
console.log("Total points for all students:", totalPoints);

// Sum all the students points directly
const totalStudentPoints = students.reduce((sum, student) => {
	return sum + student.points;
}, 0);
console.log("Total points for all students in one step:", totalPoints);

/**
 * Product Stock Value
 */
const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

// Calculate total price for one of each product
const totalPriceForOneOfEachProduct = products.reduce((sum, product) => {
	return sum + product.price;
}, 0);
console.log("Total price for one of each item is:", totalPriceForOneOfEachProduct);

// Calculate *total* stock value for ALL products
// The correct value is ($ 691.24)
const totalStockValue = products.reduce((sum, product) => {
	return sum + (product.price * product.in_stock);
}, 0);
console.log("Total stock value is:", totalStockValue);
