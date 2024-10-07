/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(string) {
    const vocali = ["a" , "e" , "i" , "o" , "u"];
    let conteggio = 0;
    string.split("");
    for (let i = 0; i < string.length; i++) {
        if (vocali.includes(string[i].toLowerCase())){
            conteggio++;
        }    
    }
    console.log(conteggio);
    return conteggio;
}

const contaVocaliArrow = (string) => {
    const vocali = ["a" , "e" , "i" , "o" , "u"];
    let conteggio = 0;
    string.split("");
    for (let i = 0; i < string.length; i++) {
        if (vocali.includes(string[i].toLowerCase())){
            conteggio++;
        }    
    }
    console.log(conteggio);
    return conteggio;
}

// Invoca la funzione qui e stampa il risultato in console

contaVocali(word);
contaVocaliArrow(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)