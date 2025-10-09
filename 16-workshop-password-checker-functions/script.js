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
	"password",								// 🚨
	"p@*swd",								// 🔐
	"pa$sword",								// 🔐
	"p@ssw%rd",								// 🔐
	"pa$$wd",								// 🔐
	"secretpassword",						// 🚨
	"secret-password",						// 🔐
	"such-password-much-secure-very-long",	// 🔐
	"$$$",									// 🚨
];

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// 🤓 Skriv din kod här
