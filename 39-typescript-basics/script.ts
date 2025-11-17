"use strict";

/**
 * TypeScript Basics
 *
 * <https://www.typescriptlang.org/>
 */

console.log("Hello from TypeScript");
console.log("OMG COFFEEEEEEEEE!!!!!!!!!1111");

/**
 * implicit typing (infer)
 */
let username = "pelle";
let level = 42;
console.log("Your username is:", username);
console.log("Your level is:", level);
username = "kalle";
username.toUpperCase();
// level = "1337";  // nope! 'string' is not assignable to type 'number'
level = Number("1337");  // works if we convert from string to number
console.log(`Your username is ${username} and your level is ${level}!`);

// If we don't assign a initial value, we "opt out" of TypeScript
// I.e. TypeScript says this variable can contain `any` datatype
let anything;
anything = "kajsa";
anything = 13;
// something.toFixed();

/**
 * explicit typing
 */
let something: string;
something = "johan";
something = "lolcat";
// something = 1337;  // Type 'number' is not assignable to type 'string'
// something = ["lolcats", "loldawgs"];  // Type 'string[]' is not assignable to type 'string'

// Excessive typing 🫤
// TypeScript can infer that `knowsTypeScript` is of `boolean` type based on the value we assign it
let knowsTypeScript: boolean = false;
// knowsTypeScript = 42;  // Type 'number' is not assignable to type 'boolean'

/**
 * Arrays
 */
let todos = ["Learn JS", "Learn TS"]; // `todos` will be of type `string[]`
todos.push("Learn other stuff");
// todos.push(1337);  // Nope 👎🏻 - Argument of type 'number' is not assignable to parameter of type 'string'

// When creating empty arrays, we have to explicitly state the type, otherwise the array can contain any datatypes (sic!)
let names: string[] = [];
names.push("Haxx0r-Johan");  // 🍪 Accepted!
// names.push(42);  // Argument of type 'number' is not assignable to parameter of type 'string'

let points: number[] = [];
points.push(13);
points.push(37);

points = [];
points.push(42);
// points.push("yolo");  // skräddaren säger nej, det blir ett bestämt nej!

let nameOrNumber: string | number = "kids don't try this at home";
nameOrNumber = -1;
// nameOrNumber = false;

setTimeout(() => {
	console.log("🧑🏽‍💻");
}, 600000);
