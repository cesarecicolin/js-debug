/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}
console.log(checkAge());
checkAge();
// questa funzione controlla l'eta  e ti dice se sei maggiorene o minnorene  
// ma cerano due problemi  message era una cstante che pero no puo cambiare  e poi questa funzione non ritornava nulla
//  ESERCIZIO 2
 function printColorsNumber() {
     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
     
     const number = colors.length
     console.log(`Nella mia palette ci sono ${number} colori!`);
 }
 printColorsNumber();
//  questa funzione di dice quanti colori ci sono nel array 
//  il numero di colori non era stato inzializato un una variabile


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();
// questa funzione chiede un numero per poi stamparlo con un addizione di 12 
// il problema era che mancava parsint prima del prompt quindi otenevo una stringa invece di un numero


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
        
    }
console.log(grantAccess);
    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
    console.log(grantAccess);
}
checkAccess();


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























