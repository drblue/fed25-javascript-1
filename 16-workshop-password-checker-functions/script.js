/**
 * Workshop: Password Checker with arrays and functions
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan
 * `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log'as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * 🚀 STEG 3
 * Skriv en funktion som tar emot ett lösenord, testar det och returnerar om
 * lösenordet är säkert eller ej.
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

const passwords = [
	"password",								// 🚨, index 0
	"p@*swd",								// 🔐, index 1
	"pa$sword",								// 🔐, index 2
	"p@ssw%rd",								// 🔐, index 3
	"pa$$wd",								// 🔐, index 4
	"secretpassword",						// 🚨, index 5
	"secret-password",						// 🔐, index 6
	"such-password-much-secure-very-long",	// 🔐, index 7
	"$$$",									// 🚨, index 8
]; // length = 9

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// 🤓 Skriv din kod här
for (let i = 0; i < 9; i++) {
	// get the password at index `i` from the array `passwords`
	// and save it to the local variable `password`
	const password = passwords[i];

	console.log(`🕵🏻 Checking password '${password}'`);

	// Räknare som indikerar hur många specialtecken som hittats
	let specialCharCount = 0;

	// För varje tecken i password, kolla om specialChars innehåller det tecknet
	for (let i = 0; i < password.length; i++) {
		const char = password[i];
		// console.log(`At index ${i}, is char "${char}" a special char?`, specialChars.includes(char));

		if (specialChars.includes(char)) {
			specialCharCount++;
		}

		if (specialCharCount === 2) {  // Om vi hittat två specialtecken, sluta leta
			break;  // Avbryt loopen
		}
	}
	// console.log("Loop is done, found special chars:", specialCharCount);

	// Har lösenordet minst 16 tecken?
	if (password.length >= 6 && specialCharCount >= 2) {
		console.log("- ✅ Such password, much secure, *VERY* hard to crack!");

	} else if (password.length >= 8 && specialCharCount >= 1) {
		console.log("- ✅ Such password, much secure, very hard to crack!");

	} else if (password.length >= 12 && password.includes("-")) {
		console.log("- ✅ Great! That's a pretty good password!");

	} else if (password.length >= 16) {
		console.log("- ✅ Great! That's a long password!");

	} else {
		console.log("- 🚨 Insecure password, my grandma can crack it!");

	}

}

