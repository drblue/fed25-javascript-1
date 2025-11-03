/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * .every()
 * .some()
 *
 * Shuffle array  <--
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log("Numbers before shuffling:", numbers);

/*
// Poor devloper's shuffling
numbers.sort(() => {
	// Return negative, 0 or positive number, RANDOMLY
	return Math.random() - 0.5;
});
console.log("Numbers after poor devlopers shuffling:", numbers);

// Trying to fulhacka a lösning - LETS SHUFFLE AGAIN!!!!!!!!!!!111 🤪
numbers.sort(() => {
	// Return negative, 0 or positive number, RANDOMLY
	return Math.random() - 0.5;
});
console.log("Numbers after fulhack av poor devlopers shuffling:", numbers);
*/

// Fishes-Yates algoritm for array shuffling to the rescue! 🤩
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor( Math.random() * (i + 1) );
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
// shuffleArray(numbers);
// console.log("Numbers after proper(-ish) shuffling:", numbers);

const students = [
	"Agda Apelsin", "Bert Banan", "Cecilia Citron", "David Dadel", "Emma Enbär", "Fredrik Fikon", "Greta Granatäpple", "Harald Hallon", "Isabella Ingefära", "Johan Jordgubbe", "Klara Krusbär", "Ludvig Lingon", "Mikael Melon", "Nicki Nypon", "Oskar Oliv", "Petra Päron", "Quentintin Quince", "Rosa Rabarber", "Sven Stenfrukt", "Therese Tranbär",
];

// 😪
/*
students.sort(() => {
	// return negative, 0 or positive number
	return 0.5 - Math.random();
});
console.log("Students all (poorly) confused:", students);
*/

const confusedStudents = [...students];
shuffleArray(confusedStudents);
console.log("Students in proper order:", students.join(", "));
console.log("Whoosy students:", confusedStudents.join(", "));
