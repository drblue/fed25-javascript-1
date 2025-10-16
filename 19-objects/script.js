/**
 * Objects
 *
 */

// Arrays aren't (that) suited for grouping related data together since they
// are index-based and relies on the order of the values
/*
const fluffles = [
	"Mr. Fluffles",		// 0 = name
	3,					// 1 = age
	"Bengt",			// 2 = owner
	"Annoy people",		// 3 = hobbies
	"Cat",				// 4 = species
];

const captainCat = [
	"Captain Cat",		// 0 = name
	"Cat",				// 1 = species
	9,					// 2 = age
	"Agda",				// 3 = owner
	"HIIT",				// 4 = hobbies
];

const showPetInfo = (pet) => {
	// "NAME is a SPECIES of AGE year(s) old. His/her owner is OWNER and his/her favorite hobby is to HOBBY."
	console.log(`${pet[0]} is a ${pet[4]} of ${pet[1]} year(s) old. His/her owner is ${pet[2]} and his/her favorite hobby is to ${pet[3]}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
*/

// Objects are better suited for representing data that has an inherent
// connection and is not dependent on the order of the keys.
// Object use key/value-pairs.
/*
const fluffles = {
	name: "Mr Fluffles",
	age: 3,
	owner: "Bengt",
	hobbies: "Annoy people",
	species: "Cat",
}

const captainCat = {
	name: "Captain Cat",
	species: "Cat",
	age: 9,
	owner: "Agda",
	hobbies: "HIIT",
	owner: "Tiffanny Persson",
	"favorite-food": "Tuna",
}

console.log("fluffles:", fluffles);
console.log("captainCat:", captainCat);

// We access properties by using dot-notation
console.log("Fluffle's name:", fluffles.name);
console.log("Captain Cat's name:", captainCat.name);

// We can also use square-bracket notation
console.log("Fluffle's name using square-bracket notation:", fluffles["name"]);

console.log("Captain Cats's favorite food:", captainCat["favorite-food"]);
console.log("Fluffle's favorite food:", fluffles["favorite-food"]);

const showPetInfo = (pet) => {
	// "NAME is a SPECIES of AGE year(s) old. His/her owner is OWNER and his/her favorite hobby is to HOBBY."
	console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His/her owner is ${pet.owner} and his/her favorite hobby is to ${pet.hobbies}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
*/

// Objects can also contain complex (reference) data types
const barksby = {
	name: "Mr Barksby",
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Eating lots of treats", "Car-chasing"],
	sound: "WOOOFF!",
	owner: {
		name: "Mr Beans",
		age: 57,
	},
}

const meowJr = {
	hobbies: ["Be cute", "Sleeping"],
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meoww",
}

/*
console.log("Barksby's hobbies are:", barksby.hobbies.join(", "));
console.log("Meow Jr's hobbies are:", meowJr.hobbies.join(", "));

console.log("Barksby's owner is: " + barksby.owner); // [object Object]
console.log(`Barksby's owner is: ${barksby.owner}`); // [object Object]

console.log(`Barksby's owner's name is: ${barksby.owner.name}`);

console.log("Meow Jr's owner is: " + meowJr.owner); // undefined
console.log(`Meow Jr's owner's name is: ${meowJr.owner.name}`); // Uncaught TypeError: can't access property "name", meowJr.owner is undefined
*/

console.debug("This is a debug message");
console.log("This is a log message");
console.info("This is a informational message");
console.warn("This is a warning message");
console.error("This is a error message");

const pets = [barksby, meowJr];

// Show a nice table
console.table(pets);
