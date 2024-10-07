/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function saluto(string){
    console.log(`ciao ${string}`)
}

const salutoArrow = string => console.log(`ciao ${string}`);

// Invoca la funzione qui e stampa il risultato in console

saluto(name);
salutoArrow(name);

//Risultato atteso se si passa 'Mario': // ciao Mario