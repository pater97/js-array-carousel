//CONSEGNA:
/*
Dati tre array contenenti:
- una lista ordinata di 5 immagini,
- una lista ordinata dei relativi 5 luoghi e
- una lista di 5 news,
-creare un carosello come nella foto allegata. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi
titolo e testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
*/

//COSA FARE:
/*
 -1  Crezione degli array
 */

//1
//immagini
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
//titoli
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
//descrizioni
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
//definire le variabili necessarie
const avanti = document.querySelector(`.down`)
const indietro = document.querySelector(`.up`)
const immaginePrincipale = document.querySelector(`.immagine_vetrina`)
console.log(avanti, indietro, immaginePrincipale); //test
//ciclo for 
// immaginePrincipale.src = "img/02.jpg"
let immagine = items[0]
console.log(items[0]);

avanti.addEventListener("click", function () {
    immagine[1]
})
console.log(immagine);


