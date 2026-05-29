console.log("script caricato");
const age = prompt("quanti anni hai?", "0");
const gen = prompt("sei un uomo o una donna?");

if ((age > 66 && gen === "m") || (age > 61 && gen === "f")) {
    console.log("pui andare in pensione");
} else {
    console.log("devi ancora lavorare");

}
