
//creiamo un oggetto che descriva il nostro possibile studente 
//e poi tramite un ciclo stampiamo tutto ciò che lo riguarda


var studente = {
nome:"sebastiano",
cognome:"minotti",
sesso:"maschio",
eta:"38",
colorePreferito:"blu",
squadra:"inter",
}
for(key in studente){

    console.log(key + " "+studente[key])
   
}