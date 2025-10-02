/*
let width = 80;
let height = 40;

console.log(width + height);

let area = width * height;
let circumference = width * 2 + height * 2;

console.log("Area of square is:", area);
console.log("Circumference of square is:", circumference);
*/

/*
let radius = 20;
// const pi = 3.14159;

let circleCircumference =  Math.PI * 2 * radius;
let circleArea = Math.PI * radius ** 2;   // radius^2
console.log("Circumference of circle is:", circleCircumference);
console.log("Area of circle is:", circleArea);

console.log("10 divided by 3 is:", 10 / 3);

console.log("Modulus of 10 divided by 3 is:", 10 % 3);
console.log("Modulus of 11 divided by 3 is:", 11 % 3);
console.log("Modulus of 12 divided by 3 is:", 12 % 3);
*/

/**
 * Shorthand Math
 */

/*
let points = 10;
// points = points + 1;    // points = 10 + 1      // points = 11
// points++;

// console.log("Points++:", points++);  // 10, because points is increased by 1 AFTER its value is read
// console.log("Points after:", points);  // hence points is 11 here

console.log("++Points:", ++points);  // 11, because points is increased by 1 BEFORE its value is read
console.log("Points after:", points);  // hence points is 11 here too
*/

// Math Operators
let score = 50;
score = score + 5;		// 50 + 5, new score is 55
score = score - 15;		// 55 - 15, new score is 40
score = score * 2;		// 40 * 2, new score is 80
score = score / 4;		// 80 / 4, new score is 20
console.log("Score:", score);

// Shorthand Math Operators
score = 50;
score += 5;				// score = score + 5
score -= 15;			// score = score - 15
score *= 2;				// score = score * 2
score /= 4;				// score = score / 4
console.log("Score after short operators:", score);

// NaN - Not a Number
console.log("10 divided by 2:", 10 / 2);
console.log(5 + " points");

console.log("Points: " + 5);
console.log("Points: " - 5);		// 😳 NaN
console.log("Points: " * 5);		// 😁 NaN
console.log("Points: " / 5);		// 😂 NaN

console.log(5 / "hello");			// NaN
console.log(2 + " likes");			// "2" + " likes"   =   "2 likes"
console.log(7 - " likes");			// NaN

// 😁
console.log( Array(16).join("wat" - 1) + " Batman!" );  // 🦇
