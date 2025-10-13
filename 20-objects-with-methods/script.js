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
