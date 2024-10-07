/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali(arr) {
    let lettere = [];
    for (let i = 0; i < arr.length; i++) {
        lettere.push(arr[i].charAt(0));
        
        
    }
    console.log(lettere);
}


const inizialiArrow = (arr) => {
    let lettere = [];
    for (let i = 0; i < arr.length; i++) {
        lettere.push(arr[i].charAt(0));
    }
    console.log(lettere);
}



// Invoca la funzione qui e stampa il risultato in console

iniziali(names);

inizialiArrow(names);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]