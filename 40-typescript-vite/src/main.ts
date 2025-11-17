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
greet("Johan", 43);
greet("Pelle", 3);
// greet(1337, "I am haxx0r, FEAR ME!!!!!111");
// greet(["lol"]);
