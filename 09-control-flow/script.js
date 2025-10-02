/**
 * Control Flow 👮🏽🎛✋🏻
 */

const minAge = 18;
const maxAge = 65;

let myAge = 72;

/**
 * if statements
 *
 * LOGICAL OPERATOR
 *
 * && = AND (*BOTH* sides have to be true)
 * || = OR (*AT LEAST* one side has to be true)
 */

//   72   >=   18        72  <=   65
//       true                false
//       true      AND       false
//                false
if (myAge >= minAge && myAge <= maxAge) {
	console.log("Access granted! 🥳");
} else {
	// false
	console.log("✋🏻 You're either too young or too old to party!");
}

let username = "johan";
//   "johan" === "dave"     "johan" === "johan"
//          false                  true
//          false       OR         true
//                     true
if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

// More advanced if-statement
/*
if (myAge >= minAge && myAge <= maxAge) {
	console.log(`You're between ${minAge} and ${maxAge} years old, welcome!`);
} else {
	if (myAge < minAge) {
		console.log("Too young! 👶🏻");
	} else {
		console.log("Too old for this shit! 👵🏻");
	}
}
*/
if (myAge >= minAge && myAge <= maxAge) {
	console.log(`You're between ${minAge} and ${maxAge} years old, welcome!`);
} else if (myAge < minAge) {
	console.log("Too young! 👶🏻");
} else {
	console.log("Too old for this shit! 👵🏻");
}

console.log("Program ended.");
