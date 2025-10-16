/**
 * Objects (with methods!)
 *
 */

// Objects can also contain complex (reference) data types
const monsieurBark = {
	name: "Mr Barksby",
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Eating lots of treats", "Car-chasing"],
	sound: "WOOOFF!",
	owner: {
		name: "Mr Beans",
		age: 57,
	},
	speak: function() {
		console.log(`Hello this is ${this.name}, I am ${this.age} year(s) old`);
	},
	info: function() {
		console.log("this:", this);  // monsieurBark-object
	},
}

const meowJr = {
	hobbies: ["Be cute", "Sleeping"],
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meoww",
	speak: function() {
		console.log(`Hello this is ${this.name}, I am ${this.age} year(s) old`);
		// console.log("this:", this);
	},
	info: () => {  // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
		console.log("this:", this);  // Window
	},
}

monsieurBark.speak();
meowJr.speak();


/**
 * Primitive vs reference data types
 */

const happyBirthday = (name, age) => {
	age++;
	console.log(`Happy Birthday ${name}, you are now ${age} years old 🥳`);
}

let birthdayBoy = "Pelle";
let pelleAge = 3;
happyBirthday(birthdayBoy, pelleAge);   // happyBirthday("Pelle", 3)

console.log("Primitive-Pelles age outside of happyBirthday-function:", pelleAge);  // pelleAge is unaffected


const bengt = {
	name: "Bengt",
	age: 42,
}

const bengtsTwin = bengt;

const happyBirthdayObj = (person) => {
	person.age++;
	console.log(`Happy Birthday ${person.name}, you are now ${person.age} years old 🥳`);
}
happyBirthdayObj(bengt);
console.log("Reference-Bengts age outside of happyBirthdayObj-function:", bengt.age);

console.log("Bengts Twins age outside of happyBirthdayObj-function:", bengtsTwin.age);

// Arrays are also copied/passed by reference
const names = ["Johan", "Pelle"];
const friends = names;

friends.push("Agda");

console.log("names:", names);
console.log("friends:", friends);
console.log("is `names` and `friends` the same object?", names === friends);  // true
