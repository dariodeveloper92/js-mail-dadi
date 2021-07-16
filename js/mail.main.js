//Esercizio: Mail---------------------------------------------------------------------
//Chiedi all’utente la sua email:
var mail = prompt("Inserisci la tua email");
console.log(mail);



//controlla che sia nella lista di chi può accedere:
var listaMail = ['dario.defrancisci92@gmail.com', 'office@spotify.com'];
var notFound = [' '];
var risultato = listaMail + notFound;

if (listaMail)
{
    risultato = ' Accesso eseguito correttamente ';
}
else if (notFound)
{
    risultato = ' Accesso non eseguito '
}
//stampa un messaggio appropriato sull’esito del controllo:
document.getElementById("mail").innerHTML = ' Accesso eseguito correttamente ' ;
document.getElementById("notfound").innerHTML = ' Accesso non eseguito  ' ;
