/**
 * Math 🧮
 *
 * .round() - Round a floating number to nearest integer
 * .floor() - Round a floating number DOWN to nearest integer
 * .ceil() - Round a floating number UP to nearest integer
 *
 * .random() - Generates a number between 0 and 0.9999999999999999
 *
 */

const randomFloatBetweenZeroAndAlmostOne = Math.random();   // 0 .. 0.99999999
const randomFloatBetweenZeroAndAlmostTen = randomFloatBetweenZeroAndAlmostOne * 10;  // 0 .. 9.999999

const randomIntegerBetweenZeroAndTen = Math.round(randomFloatBetweenZeroAndAlmostTen);  // 0 .. 10

// ALWAYS round down and THEN add 1
const randomIntegerBetweenOneAndTen = Math.floor(randomFloatBetweenZeroAndAlmostTen) + 1;

// One line
const randomNumber = Math.floor( Math.random() * 10 ) + 1;

// Generate a random number between 1-10
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

let numbers = [];
for (let i = 0; i < 49; i++) {
	numbers.push( getRandomNumber() );
}
console.log("Numbers:", numbers.join(", "));
