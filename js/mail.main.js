//Esercizio: Mail---------------------------------------------------------------------
//Chiedi all’utente la sua email:
var mail = prompt("Inserisci la tua email");
console.log(mail);



//controlla che sia nella lista di chi può accedere:
var listaMail = ['dario.defrancisci92@gmail.com', 'office@spotify.com'];

//stampa un messaggio appropriato sull’esito del controllo:
document.getElementById("mail").innerHTML = ' Accesso eseguito correttamente ' ;
