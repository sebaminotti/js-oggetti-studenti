/*
CHIEDIAMO AL NOSTRO RETTORE QUANTI STUDENTE AMMETTERA' AL CORSO , IN BASE ALLA RISPOSTA
USCIRANNO DEI PROMPT PER INSERIRE TUTTI GLI STUDENTI NEL REGISTRO 
*/
var listaStudenti = [];
console.log(listaStudenti)
var rettore = Number(prompt("quanti Alunni ammetteremo quest'anno ??"));
// console.log(rettore);

for (i = 0;i < rettore; i++){
var studenti = {
 nome : prompt("NOME STUDENTE "),
 cognome : prompt("COGNOME STUDENTE"),
 eta : Number(prompt( " ETA' STUDENTE")),
 sesso : prompt("SESSO D'APPARTENENZA F M X")
}
listaStudenti.push(studenti)
// console.log(listaStudenti);
}

for (var i = 0 ; i < listaStudenti.length; i++){
 console.log(listaStudenti[i]);
   

`
 ${document.getElementById("studenti").innerHTML+= "<li>"+"NOME:"+listaStudenti[i].nome+
" COGNOME: "+listaStudenti[i].cognome+" ETA' "+ listaStudenti[i].eta+" SESSO APPARTENENZA "
+listaStudenti[i].sesso  + "</li>"}

`

}

