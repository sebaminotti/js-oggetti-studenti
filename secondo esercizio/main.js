/*
secondo esrcizio , crea un array di studenti cicla al suo interno e stampa nome e cognome
*/

//creo l'array di srudenti

var studenti = [
{nome:"peter",cognome:"parcker",lavoro:"  SPIDERMAN"},
{nome:"bruce",cognome:"wayne",lavoro:"BATMAN"},
{nome:"james",cognome:"logan",lavoro:"  WOLWERINE"},
{nome:"tony",cognome:"stark",lavoro:"miliardario filantropo donnaiolo ed IRON MAN"}
];

//ora creiamo un ciclo for per guardare dento alla nostra array ed estrapoliamo tutti i dati in essa contenuti 
//per poi stamparli a video 
for(var i =0; i<studenti.length;i++){

    `
     ${document.getElementById("hero").innerHTML+= "<li>"+studenti[i].nome+" "+
     studenti[i].cognome+" "+studenti[i].lavoro+"</li>"}
    
    `
}
  console.log(studenti);
