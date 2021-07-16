//Esercizio: Gioco dei dadi-------------------------------------------------------------
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var giocatore1 = prompt('Inserisci nome giocatore')
giocatore1 = Math.floor(Math.max(Math.random() * 6) + 1);
giocatorepc = Math.floor(Math.max(Math.random() * 6) + 1);  

console.log(giocatore1)

console.log(giocatorepc)

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
giocatore1 = document.getElementById(giocatore1);
giocatore2 = document.getElementById(giocatore1);

vincitore = 'vincitore';

    
     





