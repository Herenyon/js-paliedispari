creo un const parola = promt('inserisci una parola') per chiedere all'utente l'input di una parola

creo una funzione function palindromo(parola) per contenere le operazioni per calcolare se la parola data dall'utente è un palindromo o no 

creo una const parolaRev (rev sta per reverse) con all'interno la lunghezza di parola

creo un for (let i = 0; i < parola.length / 2, i++) per andare a ciclare fino a che i non sia a metà della parola (perché poi la seconda metà dovrebbe essere uguale ma al contrario)

creo un if(parola[i] !== parola[parolaRev - 1 - i]) questo if serve per controllare se le variabili parola[i] (che parte da 0 fino a metà della parola) e se parola[parolaRev - 1 - i] (che con questa operazione parte dalla posizione finale della parola - 1 fino a metà) hanno lo stesso valore di posizione in posizione e se sono in ogni posizione uguali allora stamperà in console una frase che dica che la parola è palindroma per poi chiudere il for con return

nel momento il cui la condizione si reveli vera, quindi che nella parola c'è una lettera diversa, stamperà in console il fatto che la parola non sia un palindromo per poi chiudere il for con return

infine chiamo la funzione con all'interno le parentesi tonde la const parola 
