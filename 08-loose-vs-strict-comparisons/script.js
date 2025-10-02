/**
 * Loose vs Strict Comparisons
 *
 * Loose comparison: different data types can still be equal
 * Strict comparison: value AND data type must be equal
 */

let myAge = 25;  // number

// Loose comparison (different data types can still be equal)
console.log('25 == 25', myAge == 25);			// true
console.log('25 == "25"', myAge == "25");		// true
console.log('25 != 25', myAge != 25);			// false
console.log('25 != "25"', myAge != "25");		// false

// Strict comparison (value AND data type must be equal)
console.log('25 === 25', myAge === 25);			// true
console.log('25 === "25"', myAge === "25");		// false
console.log('25 !== 25', myAge !== 25);			// false
console.log('25 !== "25"', myAge !== "25");		// true
