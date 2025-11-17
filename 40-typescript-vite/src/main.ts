/**
 * TypeScript with Vite ✍🏻📜🏎️💨
 *
 */

const friends = ["Joey", "Chandler", "Phoebe", "Monica", "Rachel", "Ross"];
// console.log(friends);

/**
 * Explicit typing
 */

let myString: string;
myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;
// myBoolean = "false-ish";

/**
 * Implicit typing
 */

let myName = "Johan";
//     ^?

/**
 * Demo of VSCode plugin "Twoslash Query Comments"
 * <https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries>
 */
let username: string;
//    ^?

// username = -42;

/**
 * Function parameter typing
 */
const greet = (username: string, age: number) => {
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
// greet("Johan", 43);
// greet("Pelle", 3);
// greet(1337, "I am haxx0r, FEAR ME!!!!!111");
// greet(["lol"]);

// Optional parameters
const greet2 = (username: string, age?: number) => {
//                                  ^?
	if (!age) {
		console.log(`Hi, ${username}!`);
		return;
	}

	console.log(`Hi, ${username}! You are ${age + 1} years old next year.`);
 //                                       ^?
}
greet2("Alice");
greet2("Bob", 24);
// greet2("Charlie", null);  // even though parameter 2 is optional, it still has to be a number if used
// greet2("Charlie", false);  // even though parameter 2 is optional, it still has to be a number if used

// Default values
const greet3 = (username = "anonymoose", age?: number) => {
//                ^?
	if (!age) {
		console.log(`G'day, ${username}!`);
		return;
	}

	console.log(`G'day, ${username}! You are ${age + 1} years old next year.`);
 //                                       ^?
}
greet3();
greet3("Hangry");
greet3(undefined, 3);

/**
 * Function return typing (implicit)
 */
const fancyGreet = (username = "anonymoose", age?: number) => {
	if (!age) {
		return `Oh hello there good sir/ma'am, ${username}!`;
	}

	return `Oh hello there good sir/ma'am, ${username}! You look splendid for being ${age} years old.`;
}
const greeting = fancyGreet("Harold", 72);  // greeting till be inferred as a string, as fancyGreet only ever returns a string as the result
console.log("fancyGreet returned:", typeof greeting, greeting);
