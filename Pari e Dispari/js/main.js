'use strict'

const parDis = prompt("Scegli tra pari e dispari");
const mano = Number(prompt('inserisci un numero da 1 a 5'));
const manoBot = Math.floor(Math.random() * (6 - 1)) + 1;
let sommaMano;
console.log(manoBot);
function somma(mano, manoBot) {


    sommaMano = mano + manoBot;

    console.log(sommaMano);

}

function gioco() {

    if (sommaMano % 2 === 0) {
        if (parDis === 'pari')
            console.log("ha vinto l'utente")
        else {
            console.log("ha vinto il bot")
        }
    }

    else {
        if (parDis === 'dispari')
            console.log("ha vinto l'utente");
        else {

            console.log("ha vinto il bot")
        }
    }


}
somma(mano, manoBot);
gioco(somma);