console.log("script caricato");
let costo = prompt("quale è il totale della spesa", "0");
let i = parseInt(costo);

if (i != 0) {
    if (i > 50) {
        console.log("la spedizione è gratuita")
    }
    else {
        i = i + 5;
        console.log("il costo della spesa più le spese di spedizone è di " + i + "€")
    }
}
if (i === 0) {

    console.log("il carrello è vuoto")

}
