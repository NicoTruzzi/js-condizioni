console.log("script caricato");
const voto = prompt("inserisci un voto", "0");

if (voto < 6) {
    console.log("insufficente");

}
if (voto > 5 && voto < 8) {
    console.log("sufficente");
}
if (voto > 7 && voto < 10) {
    console.log("buono");
}
if (voto == 10) {
    console.log("ottimo");
}