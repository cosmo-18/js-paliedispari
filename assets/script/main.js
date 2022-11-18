
// MILESTONE 1 

function acquisisciStringa() {
  //Funzione per acquisire la stringa dal prompt, restituisce la stringa e stampa
  let input = prompt("Inserisci una parola");
  console.log(`Hai inserito la parola: ${input}`);
  return input;
}

function Palindromia() {
  //Verifica la palindromia scorrendo i due indici
  let stringa = acquisisciStringa(); //acquisisci la stringa dall'output dell'altra funzione
  let palindroma = true; //se non si trovano due lettere diverse, rimane vero (vuol dire che è palindroma)
  let i = 0; //indice che parte dal primo carattere, scorre in avanti
  let j = stringa.length - 1; //indice che parte dall'ultimo carattere, scorre all'indietro
  for (i = 0; i < j; i++) {
    //Fai scorrere i in avanti fino a che non "tocca" j
    if (stringa[i] != stringa[j]) {
      //Se trovi due lettere diverse, metti il flag su falso (non è palindroma)
      palindroma = false;
    }

    j--; //fai scorrere j all'indietro
  }
  console.log(
    `La parola è palindroma: ${palindroma}`
  ); /*se non si è trovata nessuna coppia di lettere "diverse", sarà vero(stringa palindroma). 
  Falso altrimenti(non palindroma).*/
}
