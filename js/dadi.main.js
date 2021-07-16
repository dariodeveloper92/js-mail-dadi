//ESERCIZIO: Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.-------------
var giocatore1 = Math.floor(Math.max(Math.random() * 6) + 1);
var giocatorepc = Math.floor(Math.max(Math.random() * 6) + 1);  
var risultato;

console.log(giocatore1)
console.log(giocatorepc)

//Stabilire il vincitore, in base a chi fa il punteggio più alto.-----------------------------

//Condizioni
if (giocatore1 > giocatorepc) {
    risultato = 'vince giocatore1';
}
else if (giocatorepc > giocatore1) {
    risultato = 'vince giocatorepc';
}
else {
    risultato = ' pareggio';
}
//Fine Condizioni

//Risultato
document.getElementById("vincitore").innerHTML = risultato;
//Fine Risultato