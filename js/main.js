//far apparire 5 allert
var numeriCpu = [];
for (var i = 0; i < 5; i++) {
  // impostare valore random ad ogni allert
  var numeroCpu = numeroRandom(1,10);
  console.log("numero random alert: " + numeroCpu);
  alert(numeroCpu);
  numeriCpu.push(numeroCpu);
}
console.log("Numeri cpu " + numeriCpu);
//dopo 30 secondi deve partire un prompt alla volta (5)
var secondi = 3;
var numeriUtente = [];
var contaNumero = 0;
setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    // impostare valore random ad ogni allert
    var numeroUtente = parseInt(prompt("Inserisci il numero"));
    console.log("numero utente : " + numeroUtente);
    document.writeln(numeroUtente + "<br>");
    numeriUtente.push(numeroUtente);
  }
  console.log("Numeri utente " + numeriUtente);
  for (var i = 0; i < numeriUtente.length; i++) {
    var numeroUtenteSalvato = numeriUtente[i];
    var numeroCpuSalvato = numeriCpu[i];
    /*console.log("numeri ut save : " + numeroUtenteSalvato);
    console.log("numeri cpu save : " + numeroCpuSalvato);*/
    //confrontare se i numeri dell'utente inseriti sono uguali a quelli
    //della cpu
    if(numeroUtenteSalvato == numeroCpuSalvato ){
      console.log("numeri user : " + numeroUtenteSalvato + " numero Cpu : " + numeroCpuSalvato);
      document.writeln("numeri user : " + numeroUtenteSalvato + " numero Cpu : " + numeroCpuSalvato + "<br>");
      contaNumero ++;
    }
  }
  //ritornando quanti numeri sono stati indovinati e quali
  console.log("Numero di volte che ci hai preso: " + contaNumero);
  document.writeln("Numero di volte che ci hai preso: " + contaNumero);
}, secondi * 1000)
