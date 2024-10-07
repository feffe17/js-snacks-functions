/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(string) {
    const vocali = ["a" , "e" , "i" , "o" , "u"];
    string.split("");
    for (let i = 0; i < vocali.length; i++) {
        
        console.log( string);
        
    }
}

// Invoca la funzione qui e stampa il risultato in console

contaVocali(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)