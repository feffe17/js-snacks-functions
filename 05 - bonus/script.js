/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function salutoOrario(string){
    const orario = new Date().getHours();
    console.log(orario);

    switch (true) {
        case (orario >= 5 && orario < 12):
            console.log(`Buongiorno ${string} sono le ` + Date());
            break;    
        case (orario >= 12 && orario < 18):
            console.log(`Buon pomeriggio ${string} sono le ` + Date());
            break; 
        case (orario >= 18 && orario < 22):
            console.log(`Buonasera ${string} sono le ` + Date()); 
            break; 
        default:
            console.log(`Buona notte ${string} sono le ` + Date()); 
            break; 
    }    
}

const salutoOrarioArrow = (string) => {
    const orario = new Date().getHours();
    console.log(orario);

    switch (true) {
        case (orario >= 5 && orario < 12):
            console.log(`Buongiorno ${string} sono le ` + Date());
            break;    
        case (orario >= 12 && orario < 18):
            console.log(`Buon pomeriggio ${string} sono le ` + Date());
            break; 
        case (orario >= 18 && orario < 22):
            console.log(`Buonasera ${string} sono le ` + Date()); 
            break; 
        default:
            console.log(`Buona notte ${string} sono le ` + Date()); 
            break; 
    }    
}

// Invoca la funzione qui e stampa il risultato in console

salutoOrario(name);
salutoOrarioArrow("federico");

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.