'use strict';

/* LOCAL STORAGE */


// Save Data From Local Storage
function saveToLocalStorage() {
    localStorage.setItem('myDishes', JSON.stringify(myDishes));
    localStorage.setItem('myBasket', JSON.stringify(myBasket));
}


// Initialize From Local Storage
function getFromLocalStorage() {
    let savedDishes = JSON.parse(localStorage.getItem('myDishes'))
    let savedBasket = JSON.parse(localStorage.getItem('myBasket'))

    if (savedDishes || savedBasket) {
        myDishes = savedDishes
        myBasket = savedBasket
    }
}