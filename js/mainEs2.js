//chiedo al utente nome e sesso
var nomeUtente = prompt("Digita il tuo nome");
var sessoUtente = prompt("Digita il tuo sesso");
//stampo sul html il nome
document.getElementById("nomeUtenteBox").innerHTML = nomeUtente;
//modifico lo stile color del nome in base al sesso, azzurro uomo rosa
//donna
