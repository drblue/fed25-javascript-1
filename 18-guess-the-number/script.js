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
