/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    
}
// questo codice crea una scala di numeri da 0 a 4
// ce un erore  perche era segnato maggiore  e quindi il programa non partiva mai


//   ESERCIZIO 2
 function addIfEven(num) {
     if (num % 2 === 0) {
         return num + 5;
     }
     
     return num;
     
 }
//  questa funzione dovrebe tornare un numero pari con +5 e un numero dispari senza aggiunte
// solo che ce un  simbolo sbagliato perche = significa che num % 2  diventa 0  per coreggere basta inserire ===



//  ESERCIZIO 3
 function loopToFive() {
     for (let i = 0; i < 5; i++) {
         console.log(i);
     }
 }
// questo codice crea una scala da 0 a 4 
// ce un errore perche dopo i numeri invece del ;  ce una , 

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
 function displayEvenNumbers() {
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
     let evenNumbers = [];
     for (let i = 0; i < numbers.length - 1; i++) {
         let newNumber = numbers[i]
         console.log(newNumber);
        if (newNumber % 2 === 0); {
             evenNumbers.push(newNumber);
         }
         return evenNumbers;
     }
 }
 console.log(displayEvenNumbers());
 displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]