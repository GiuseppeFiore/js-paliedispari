// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// SVOLGIMENTO ESERCIZIO
// Creo una constante che restituisce una stringa scritta grazie al prompt
// il toLowerCase serve a restutuire ogni carattere tutto in minuscolo per evitare che invertendo la lettera magliuscola crei problemi
const parola = prompt("Inserisci una parola").toLowerCase();

// Funzione per verificare se una parola è palindroma
// Creo una costante con parola inversa
// Utilizzando il .split converte la stringa in un array e successivamente divide in due o piu sottoscringhe in base a un separatore (es.virgola)
// Il separatore puo essere un singolo carattere come in questo caso, un'altra stringa o un'espressione regolare
// Utilizzando il .reverse altera l'array originale e lo restituisce convertito (al contrario)
// il .join serve a restituire la parola convertita senza virgole spazi o altro (su indicazione personale) in questo caso 
// Resta solo tra virgolette senza spazi ne altro perche deve restituirci la parola al contrario
function parolaPalindroma(word) {
    for (let )
    const parolaInversa = word.split("").reverse().join("");
    return word === parolaInversa;
}

// Con l'if controllo la condizione. se l'if restituisce true allora la parola è palindroma e la stampa
// altrimenti se restituisce false la parola non è palindroma
if (parolaPalindroma(parola)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola NON è palindroma");
}