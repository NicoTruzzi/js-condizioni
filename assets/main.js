console.log("script caricato");
let i = false;

while (i == false) {
    let user = prompt("insersci l'username");
    let pw = prompt("inserisci la password");
    if (user === "admin" && pw === "1234") {
        console.log("login effettuato")
        i = true;
    }
    else {
        console.log("credenziali errate")
    }

}
