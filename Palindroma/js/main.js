'use strict'


const parola = prompt('inserisci una parola');

function palindromo(parola) {

    const parolaRev = parola.length;


    for (let i = 0; i < parola.length / 2; i++) {

        if (parola[i] !== parola[parolaRev - 1 - i]) {

            console.log(parola + ' ' + 'non è un polindromo');
            return;
        }

    }
    console.log(parola + ' ' + 'è un palindromo');
    return;

}

palindromo(parola);
