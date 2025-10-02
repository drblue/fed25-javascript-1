/*
let points = 100;
console.log("points:", points);
console.log("typeof points:", typeof points);

let batman = "Batman";
console.log("batman:", batman);
console.log("typeof batman:", typeof batman);

// Type Coersion
let stringPoints = "25";
let sumPoints = points + stringPoints;   // 100 + "25" -> "100" + "25"
console.log("sumPoints:", sumPoints);  // "10025"
console.log("typeof sumPoints:", typeof sumPoints);  // string
*/

/**
 * Type Conversion
 */

/*
// Convert a string to number
let stringPoints = "25";
let convertedStringPoints = Number(stringPoints);  // 25
console.log("convertedStringPoints:", convertedStringPoints);
console.log("typeof convertedStringPoints:", typeof convertedStringPoints);

let batman = "Batman";
let convertedBatman = Number(batman);
console.log("convertedBatman:", convertedBatman);

// Convert a number to a string
let points = 100;
let convertedPoints = String(points);  // "100"
console.log("convertedPoints:", convertedPoints);
console.log("typeof convertedPoints:", typeof convertedPoints);
*/

let result;

result = Boolean(100);	// true
result = Boolean(1);	// true
result = Boolean(0);	// false
result = Boolean(-1);	// true
result = Boolean(-100);	// true

result = Boolean("i am groot");		// true
result = Boolean("");				// false
result = Boolean(" ");				// ?    true

result = Boolean(undefined);	// false
result = Boolean(null);			// false

console.log("result:", result, typeof result);
