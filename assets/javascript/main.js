//CONSEGNA:
/*
Dati tre array contenenti:
- una lista ordinata di 5 immagini,
- una lista ordinata dei relativi 5 luoghi e
- una lista di 5 news,
-creare un carosello come nella foto allegata. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi
titolo e testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
*/
//sisntassi add class--> 
//COSA FARE:
/*
 -1  è l'indice di scorrimento che deve aumentare con l'immagine selezionata! e la stessa immagine farà cambiare quella visualizzata.
 -2 stampare attraverso il ciclo for le immagini degli arrey
 */

//1
//immagini
const items = [
    ,
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
//titoli
const title = [
    ,
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
//descrizioni
const text = [
    ,
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
const immaginiSecondarie = document.getElementById(`template`)
const titolo = document.querySelector(`.title`)
const descrition = document.querySelector(`.descrition`)
console.log(titolo, descrition); //test
// immaginePrincipale.src = "img/02.jpg"

// //STAMPARE LE 5 IMMAGINI ATTRAVERSO CICLO FOR(è disattivato perchè se lo attivo lo scorrimento non funziona più)
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//     immaginiSecondarie.innerHTML += `<div class="secondary_img"><img src="${items[i]}" alt=""></div>`
// }
let immagineSelezionata = 1
immaginePrincipale.src = items[immagineSelezionata]
titolo.innerHTML = title[immagineSelezionata]
descrition.innerHTML = text[immagineSelezionata]

//FARE SCROLLARE IN AVANTI LE IMMAGINI.
avanti.addEventListener("click", function () {
    immagineSelezionata++;
    items[0] = items[immagineSelezionata]
    immaginePrincipale.src = items[immagineSelezionata];
    titolo.innerHTML = title[immagineSelezionata]
    descrition.innerHTML = text[immagineSelezionata]

    if (immagineSelezionata >= items.length - 1) {
        immagineSelezionata = 0
    }
})
indietro.addEventListener("click", function () {
    immagineSelezionata--;
    items[0] = items[immagineSelezionata]
    immaginePrincipale.src = items[immagineSelezionata];
    titolo.innerHTML = title[immagineSelezionata]
    descrition.innerHTML = text[immagineSelezionata]
    if (immagineSelezionata <= 0) {
        immagineSelezionata = 5 + 1
        console.log(items[immagineSelezionata]);
    }
})


