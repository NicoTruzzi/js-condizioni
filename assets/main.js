console.log("script caricato");

let gradi = prompt("quale è la temperatura?")

if (gradi < 15) {
    let temp = prompt("piove?")
    if (temp === "si") {
        console.log("metti l'impermeabile");

    } else {
        console.log("metti giacca");

    }
}

if (gradi > 14) {
    console.log("vai leggero");

}