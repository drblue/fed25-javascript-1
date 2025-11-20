# Workshop 2025-11-20 - 21

Skapa en ny vanilla-ts Vite app. Installera Bootstrap (och förslagsvis även SASS som vi gjorde på dagens lektion). Töm appen på innehåll.

Kopiera över markup från `37-weather-app` och börja flytta över kod stegvis och lägg till typer där TypeScript skriker på er.

Lägg all kommunikation med API:et i en separat modul (förslagsvis `src/services/OWMAPI.ts`). Glöm inte skapa typer för svaret vi får från API:et. Lägg dem gärna i en separat fil `src/services/OWMAPI.types.ts` och importera dem där de behövs.

Fokusera på att få grundläggande funktionalitet på plats, dvs att kunna söka och få se vädret på den sökta orten.

Därefter lägger ni till felhantering, loading, rendering av väderikoner osv osv.

## 🚀

Spara (och hämta) sökt ort i localStorage. Spara endast orten om den finns. När appen laddar in, kolla i localStorage om det finns en sparad ort och fyll i orten i input-fältet i så fall.
