/**
 * 🛠 Workshop: Password Checker
 *
 * Du ska skriva kod som kontrollerar om ett lösenord är giltigt
 * enligt något av dessa krav:
 *
 * 1️⃣ Minst 16 tecken (då är det alltid giltigt)
 * 2️⃣ Minst 12 tecken OCH innehåller minst ett bindestreck (-)
 * 3️⃣ Minst 8 tecken OCH innehåller minst ett specialtecken
 * 4️⃣ Minst 6 tecken OCH innehåller minst två specialtecken
 *
 * ✅ Specialtecken som räknas: @, $, %, *, ^, <, >, ?, !, (, ), [, ], {, }, '
 *
 * 👉 Börja med att skriva kod som kontrollerar krav 1. När det fungerar,
 * fortsätt med krav 2, och så vidare.
 *
 * 🧪 Testa din kod genom att avkommentera en rad i taget nedan och
 * se om lösenordet blir godkänt eller inte. Använd `console.log()` för att se resultatet.
 *
 * 🔍 Målet är att du tränar på att:
 * - läsa en uppgift och bryta ner problemet i mindre delar
 * - tänka logiskt och testa olika lösningar
 * - använda Googlesökningar som stöd i din problemlösning
 *
 * 💡 Du får gärna googla för att ta reda på hur man:
 * - kontrollerar längden på en sträng
 * - kollar om ett visst tecken finns i en sträng
 * - räknar hur många gånger ett visst tecken förekommer
 *
 * 🧠 Tänk efter hur du vill bygga upp din kod steg för steg.
 * Det viktiga är att du förstår vad varje del gör och testar ofta!
 *
 * Kom ihåg: Det viktigaste är **inte** att koden blir perfekt, utan att du försöker lösa varje steg själv!
 *
 */

let password;
password = "password"; // ❌ inte giltigt, 8 tecken
// password = "pa$sword"; // ✅ giltigt, 8 tecken
// password = "p@ssw%rd"; // ✅ giltigt, 8 tecken
// password = "pa$$word"; // ✅ giltigt, 8 tecken
// password = "secretpassword"; // ❌ inte giltigt, 14 tecken
// password = "secret-password"; // ✅ giltigt, 15 tecken
// password = "such-password-much-secure-very-long"; // ✅ giltigt, 35 tecken

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

console.log(`🕵🏻 Checking password '${password}'`);

// 🧩 Skriv din kod här

// Har lösenordet minst 16 tecken?
if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");
} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}
