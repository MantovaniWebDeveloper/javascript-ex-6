//far apparire 5 allert
var numeriCpu = [];
for (var i = 0; i < 5; i++) {
  // impostare valore random ad ogni allert
  var numeroCpu = numeroRandom(1,10);
  console.log("numero random alert: " + numeroCpu);
  alert(numeroCpu);
  numeriCpu.push(numeroCpu);
}
//dopo 30 secondi deve partire un prompt alla volta (5)
var secondi = 3;
var numeriUtente = [];
setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    // impostare valore random ad ogni allert
    var numeroUtente = parseInt(prompt("Inserisci il numero"));
    console.log("numero utente alert: " + numeroUtente);
    alert(numeroUtente);
    numeriUtente.push(numeroUtente);
  }
}, secondi * 1000)
//confrontare se i numeri dell'utente inseriti sono uguali a quelli
//della cpu

//ritornando quanti numeri sono stati indovinati e quali
