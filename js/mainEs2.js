//chiedo al utente nome e sesso
var nomeUtente = prompt("Digita il tuo nome");
var sessoUtente = prompt("Digita il tuo sesso");
//stampo sul html il nome
document.getElementById("nomeUtenteBox").innerHTML += nomeUtente;

if (sessoUtente == "donna" || sessoUtente == "femmina") {
  //modifico lo stile color del nome in base al sesso, rosa
  //donna
  console.log("sono donna");
  document.getElementById("nomeUtenteBox").className = "testoDonna";
}
else if (sessoUtente == "uomo" || sessoUtente == "maschio") {
  //modifico lo stile color del nome in base al sesso, azzurro uomo
  console.log("sono uomo");
  document.getElementById("nomeUtenteBox").className = "testoUomo";
}
else {
  console.log("Hai sbagliato ad inserire il tipo di sesso");
  alert("ERRORE");
}
