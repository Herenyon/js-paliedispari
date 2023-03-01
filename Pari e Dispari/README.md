creo la const parDis = prompt("Scegli tra pari e dispari"); per chiedere all'utente di scegliere tra pari o dispari

creo la const mano = Number(prompt('inserisci un numero da 1 a 5')); per chiedere all'utente di scrivere un numero da 1 a 5

creo la const manoBot = Math.floor(Math.random() * (6 - 1)) + 1; per generare randomicamente un numero da 1 a 5

faccio un let sommmaMano;

stampo in console il valore di manoBot

creo una funzione somma(mano, manoBot)

dove dentro c'è sommaMano = mano + manoBot per fare la somma tra i due

poi stampo sommaMano e chiudo la funzione 

creo un'altra funzione function gioco() per fare il pari o dispari

creo un  if (sommaMano % 2 === 0) per vedere se il numero è pari

    all'interno creo un'altro  if (parDis === 'pari') che se la condizione è vera viene scritto in console che l'utente ha vinto

    e poi creo un else che in caso contrario scrive che ha vinto il bot

e nell'else creo un'altro  if (parDis === 'dispari') che se la condizione è vera viene scritto in console che l'utente ha vinto

e poi creo un else che in caso contrario scrive che ha vinto il bot

fuori dalla funzione chiamo somma(mano, manoBot) e poi gioco(somma)

