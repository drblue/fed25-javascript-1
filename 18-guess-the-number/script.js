/**
 * Guess the number
 *
 * STEG 1
 * - Sätt ett tal i en variabel.
 * - Be användaren att gissa talet med hjälp av `prompt()`. Spara svaret i en variabel.
 * - Om användarens gissning är fel, fråga efter en ny gissning.
 * - Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * - Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * - Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * - Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * - Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * 🚀 STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet.
 *
 * ☄️ STEG 5
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */

// Slumpa ett tal mellan 1 och `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

// 🔮 Skriv din kod här
let numberToGuess = getRandomNumber();
let continueGame = true;
let attempts = 0;
let highscore = null;

console.log("🐆🤫", numberToGuess);

while (continueGame) {
	// Ask for a guess
	const guess = Number(prompt("Please guess a number between 1-10. Enter 0 to quit."));

	// Increase number of attempts
	attempts++;

	if (guess === numberToGuess) {
		// We can haz highscore?
		if (highscore === null) {
			// Guess was correct 🥳
			console.log("Guess was correct! 🥳");
			alert(`Great success! You guessed the correct answer after ${attempts} attempt(s).`);
			highscore = attempts;

		} else if (attempts < highscore) {
			// YAY NEW HIGHSCORE! 🥇
			console.log("Guess was correct, new highscore! 🥳🥳🥳");
			alert(`Great success! You guessed the correct answer after ${attempts} attempt(s). Your previous highscore was ${highscore}.`);
			highscore = attempts;

		} else {
			// No new highscore for you!
			console.log("Guess was correct but no new highscore! 🥺");
			alert(`You guessed the correct answer after ${attempts} attempt(s). Sorry, no new highscore - your current highscore is ${highscore}.`);

		}

		// Get a new number to guess. Also reset number of attempts
		numberToGuess = getRandomNumber();
		attempts = 0;
		console.log("🐆🤫", numberToGuess);

	} else if (guess === 0) {
		// User rage-quit
		attempts--;
		console.log("Guess was 0, quitting game");
		alert(`Y U GIVE UP AFTER ONLY ${attempts} ATTEMPT(S)?!`);
		continueGame = false;

	} else if (guess > numberToGuess) {
		// Guess was too high
		console.log("Guess was too high 🤪");
		alert("Guess was too high 🤪");

	} else if (guess < numberToGuess) {
		// Guess was too low
		console.log("Guess was too low 😔");
		alert("Guess was too low 😔");

	} else {
		// That's not a number
		console.log("User is stupid");
		alert("I SAID A N-U-M-B-E-R!!");

	}
}

console.log("Game ended");
