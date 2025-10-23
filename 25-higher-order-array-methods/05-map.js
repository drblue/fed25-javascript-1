/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map() <--
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
// const numbers = [ 21, 42, 5, 50, 24, 18, 47 ];
// console.log("Original numbers:", numbers);

/*
// multiply all numbers by 2 (the old way)
const doubledNumbers = [];
numbers.forEach((num) => {
	doubledNumbers.push(num * 2);
});  // doubledNumbers = [ 42, 84, 10, 100, 48, 36, 94 ]
*/

/*
// multiply all numbers by 2 (the modern way 😎)
// TRANSFORM the values in array `numbers` INTO a NEW array
const doubledNumbers = numbers.map((num) => {
	return num * 2;
});  // doubledNumbers = [ 42, 84, 10, 100, 48, 36, 94 ]
console.log("Doubled numbers:", doubledNumbers);
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

/*
// Create a new array with all the products' SKUs
const skus = [];
products.forEach((product) => {
	skus.push(product.sku);
});  // skus = [ "CORR-BWL", "CTN-SPCE", "GOOD-COOKIES", "BACK-BREAKER" ]
console.log("All products:", products);
console.log("All SKUs:", skus);
*/

/*
// Transform the `products` array into a new array that only contains the products' SKUs
const skus = products.map((product) => {
	return product.sku;
});  // skus = [ "CORR-BWL", "CTN-SPCE", "GOOD-COOKIES", "BACK-BREAKER" ]
console.log("All products:", products);
console.log("All SKUs:", skus);
*/

// Create a string-representation of each product
const output = products.map(product => {
	return `<li classname="list-group-item">
		<span>${product.name} (${product.price})</span>
		<button class="btn btn-primary">Toggle</button>
		<button class="btn btn-danger">Delete</button>
	</li>`;
});
console.log(output);
