console.log("script caricato");

let tfed = prompt("hai la tessera fedeltà", "si");
let prezzo = prompt("quale è il prezzo dell'articolo", "0");
let i = parseInt(prezzo);


if (tfed === "si") {
    i = i + ((i * 10) / 100);
}

console.log(i)