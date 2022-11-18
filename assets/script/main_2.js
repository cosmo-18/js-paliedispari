
// MILESTONE 2

function pariDispari() {
  let input = parseInt(prompt("Scegli se pari o dispari. 1:DISPARI 2:PARI")); //Prendi input e convertilo in INTEGER
  let numero1 = parseInt(prompt("Inserisci un numero compreso tra 1 e 5:")); // Prendi numero scelto da utente
  let numero2 = Math.floor(Math.random() * 5) + 1; //Genera numero random tra 1 e 5
  let somma = numero1 + numero2; // Somma numero dell'utente e numero del computer
  //Stampa valori
  console.log(`Hai scelto: ${input}`);
  console.log(`Hai scelto il numero: ${numero1}`);
  console.log(`Il computer ha scelto il numero: ${numero2}`);
  console.log(`La SOMMA è: ${somma}`);
  switch (
    input //Controlla scelta utente (1:Dispari 2:Pari)
  ) {
    case 1: //Utente ha scelto dispari
      if (somma % 1 == 0) {
        //Se numero dispari
        console.log("Hai vinto!");
      } else {
        console.log("Peccato, hai perso!");
      }
      break;
    case 2: //Utente ha scelto pari
      if (somma % 2 == 0) {
        //Se numero pari
        console.log("Hai vinto!");
      } else {
        console.log("Peccato, hai perso!");
      }
      break;
    default: //Utente ha inserito una scelta diversa da 1 o 2
      console.log(`Scelta: ${input} invalida.`);
      break;
  }
}
