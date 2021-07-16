//ESERCIZIO: Mail
//Chiedi all’utente la sua email:-------------------------------------------------
var mail = prompt("Inserisci la tua email");
console.log(mail);

//controlla che sia nella lista di chi può accedere:-------------------------------
//Variabili
var listaMail = ['dario.defrancisci92@gmail.com', 'office@spotify.com'];
var risultato;
//Fine variabili

//Array + Cicli
for (var i = 0; i < listaMail.length; i++) {
    console.log(listaMail[i]);

    if (mail == listaMail[i])  {
    risultato = ' Accesso eseguito correttamente ';
    i = listaMail.length;     
    }
    else {
    risultato = ' Accesso non eseguito ';
    }
}
//Fine Array + Cicli

//stampa un messaggio appropriato sull’esito del controllo:-------------------------
document.getElementById("mail").innerHTML = risultato;
