/**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet enligt nedan. Ersätt det som står med
 * stora bokstäver med rätt sak för varje `pet`.
 *
 * Koden ni skriver ska fungera *oavsett* hur många (eller få) husdjur som
 * finns i array:en `pets`! Ni kan testa detta genom att ta bort kommenteringen
 * av det sista husdjuret i array:en.
 *
 * 👶🏻 STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * 😊 STEG 2
 * NAME is a SPECIES of AGE year(s) old. His/hers favorite
 * hobbies is to HOBBIES.
 *
 * 🤓 STEG 3 (skriv endast ut owner om det finns någon)
 * NAME is a SPECIES of AGE year(s) old. His/hers owner is OWNER and his/hers favorite
 * hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	// {
	// 	hobbies: ["Also be cute"],
	// 	species: "Old kitten",
	// 	age: 9,
	// 	name: "Meow Sr",
	// 	sound: "Meooow!!!",
	// 	meowCounter: 0,
	// 	speak() { // same as writing "speak: function() {}"
	// 		this.meowCounter++;
	// 		console.log(this.sound);
	// 		console.log(`Meowed times today: ${this.meowCounter}`);
	// 	}
	// }
];

// Old-school 👴🏻
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
//
// Modern 🤩
// document.querySelector
// document.querySelectorAll

// Get a reference to the DOM-element with ID of `petslist`
const petsListEl = document.querySelector("#petslist");

// Loop over dem pets
pets.forEach( (pet) => {
	/*
	let petOwnerName;
	if (pet.owner) {
		petOwnerName = pet.owner.name;
	} else {
		petOwnerName = "missing";
	}

	const petOwnerName = pet.owner ? pet.owner.name : "missing";
	petsListEl.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His/hers owner is ${petOwnerName} and his/hers favorite hobbies are ${pet.hobbies.join(", ").toLowerCase()}.</li>`;
	*/

	if (pet.owner) {
		petsListEl.innerHTML += `
			<li>
				${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His/hers owner is ${pet.owner.name} and his/hers favorite hobbies are ${pet.hobbies.join(", ").toLowerCase()}.
			</li>`;
	} else {
		petsListEl.innerHTML += `
			<li>
				${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His/hers favorite hobbies are ${pet.hobbies.join(", ").toLowerCase()}.
			</li>`;
	}
} );
