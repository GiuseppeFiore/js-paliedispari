// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// SVOLGIMENTO
// Chiedere all'utente la parola pari o dispari
const pariDispari = prompt('Digitare pari o Dispari')


// Scegliere un numero da 1 a 5
const humanNumber = Number(prompt('Digitare un numero da 1 a 5'))

// Generare un numero random da 1 a 5 
const pcNumber = Math.floor (Math.random() * 5) + 1;

// Sommare i due numeri
const sum = humanNumber + pcNumber;

// Stabilire la somma è pari o dispari
// Dichiarazione vincitore
if (sum %2 === 0){ //Stiamo verificando che il numero è pari
    console.log("Il numero è pari");
    if (pariDispari == "pari"){ //verificando Scelta dell'utente 
        console.log ("hai vinto"); //L'utente ha scelto pari e il numero uscito è pari
    } else {  
        console.log ("hai perso"); //L'utente ha scelto dispari e il numero uscito è pari
    }
    
} else {  //Stiamo verificando che il numeri è dispari
    console.log("Il numero è dispari")
    if (pariDispari == "dispari") { //Verificando la scelta dell'utente
        console.log ("Hai vinto"); //l'utente ha scelto dispari ed il numero scelto è dispari
    } else {
        console.log("hai perso"); //l'utente sceglie dispari ma esce il numero pari ha perso
    } 
} 






