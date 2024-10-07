/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtro(array, lettera) {
    let iniziale;
    let nomiFiltrati = [];
    for (let i = 0; i < array.length; i++) {
        iniziale = array[i].charAt(0);
        if(lettera === iniziale){
            nomiFiltrati.push(array[i]);
        }
        
    }
    console.log(nomiFiltrati);
    
}

const filtroArrow = (array, lettera) => {
    let iniziale;
    let nomiFiltrati = [];
    for (let i = 0; i < array.length; i++) {
        iniziale = array[i].charAt(0);
        if(lettera === iniziale){
            nomiFiltrati.push(array[i]);
        }
        
    }
    console.log(nomiFiltrati);
    
}


// Invoca la funzione qui e stampa il risultato in console

filtro(names , "A");
filtroArrow(names , "L");


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]