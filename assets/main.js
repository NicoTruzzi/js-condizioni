console.log("script caricato");
const ore = prompt("quante ore rimani nel parcheggio?", "0");

if (ore <= 2) {
    console.log("il costo del parcheggio è 5$");
}
if (ore > 2 && ore <= 5) {
    console.log("il prezzo del parcheggio è 10$");
}
if (ore > 5) {
    console.log("il prezzo del parcheggio è 15%");
}