/**
 * Functions
 *
 */

/**
 * Function Declaration
 *
 * Will be hoisted and can be invoked before being declared
 * But leads to bad code hygine
 */
/*
function sayHello() {
	alert("Hello from a function!");
	console.log("Hello from a function!");
}

sayHello();
sayHello();

function greetUser(username, time = "day") {
	console.log(`Good ${time}, ${username}`);
}
greetUser("FED25M", "coffee");
greetUser();			// username will be undefined
greetUser("FED25M");

let myName = "Johan";
let timeOfDay = "haxxing";
greetUser(myName, timeOfDay);			// greetUser("Johan", "haxxing")

greetUser(timeOfDay, myName);
greetUser(42, 1337);
*/

/**
 * Function Expression
 *
 * Won't be hoisted and have to be created before being invoked
 */

/*
console.log("I am before creating function");

const greetUser = function (username, time = "day") {
	console.log(`Good ${time}, ${username}`);
}

greetUser("Johan");
greetUser("Pelle", "night");

console.log("I am after creating function");
*/

let username = "Johan";

const sayHi = function(username) {
	username = username.toUpperCase();
	console.log(`Hi ${username}`);
}

sayHi(username);   // sayHi("Johan")

console.log("username after invoking function:", username);
