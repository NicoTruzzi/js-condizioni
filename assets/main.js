console.log("script caricato");

let saldo = prompt("quale è il saldo attuale?")
let pre = prompt("quanto vuoi prelevare?")
let saldo1 = parseInt(saldo);
let pre1 = parseInt(pre)
if (pre1 >= 0) {
    if (pre1 <= saldo1) {
        console.log("prelievo effettuato")
        saldo1 = saldo1 - pre1;
        console.log("il nuovo saldo è " + saldo1);

    } else {
        console.log("saldo insufficente");

    }

} else {
    console.log("non puoi prelevare una cifra negativa");

}
