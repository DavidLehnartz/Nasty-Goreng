'use strict';

/* MAIN SCRIPT */


// Initializing
function init() {
    getFromLocalStorage();
    renderHeader();
    renderHero();
    renderTopbar();
    renderMenu();
    renderBasket();
    renderOpeningHours();
    renderFindUs();
    renderFooter();
}


function renderBasket() {
    renderBasketTotals();      
    renderOrderedDishes();       

    saveToLocalStorage();
    showOrHideCartInfo();
    updateButtonState();
    updateButtonStateMobile();
    countItemsInHeader();
}


function renderBasketTotals() {
    let basketContentRef = document.getElementById('basket');
    let mobilBasketContentRef = document.getElementById('basket_mobile');

    let totals = calculateTotals();

    basketContentRef.innerHTML = getBasketTemplate(totals.subTotal, totals.deliveryCosts, totals.total);
    mobilBasketContentRef.innerHTML = getMobileBasketTemplate(totals.subTotal, totals.deliveryCosts, totals.total);
}


function renderOrderedDishes() {
    let orderedDish = document.getElementById('ordered_dish');
    let mobileOrderedDish = document.getElementById('ordered_dish_mobile');

    orderedDish.innerHTML = "";
    mobileOrderedDish.innerHTML = "";

    for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
        orderedDish.innerHTML += getAddDishToBasket(myBasket[indexBasket], indexBasket);
        mobileOrderedDish.innerHTML += getAddDishToBasket(myBasket[indexBasket], indexBasket);
    }
}


// Render Menu
function renderMenu() {
    let menuContentRef = document.getElementById('menu');
    menuContentRef.innerHTML = "";

    for (let indexMenu = 0; indexMenu < myDishes.length; indexMenu++) {
        menuContentRef.innerHTML += getMenuTemplate(myDishes[indexMenu], indexMenu);
    }
}


// Render Selected Dishes To Basket (ONCLICK)
function addDishToBasket(index) {
    let selectedDish = myDishes[index];
    let dishInBasket = myBasket.find((orderedDish) => orderedDish.name === selectedDish.name)

    if (dishInBasket) {
        dishInBasket.amount++;
    } else {
        selectedDish.amount = 1;
        myBasket.push(selectedDish);
    }
    saveToLocalStorage();
    renderBasket();
    countItemsInHeader();
}


// Count Amount Of Dishes Up (ONCLICK)
function countAmountUp(indexBasket) {
    myBasket[indexBasket].amount++;
    saveToLocalStorage();
    renderBasket();
    countItemsInHeader();
}


// Count Amount Of Dishes Down (ONCLICK)
function countAmountDown(indexBasket) {
    if (myBasket[indexBasket].amount > 1) {
        myBasket[indexBasket].amount--;
    } else {
        myBasket.splice(indexBasket, 1);
    }
    saveToLocalStorage();
    renderBasket();
    countItemsInHeader();
}


// Count Items In Header Cart Info
function countItemsInHeader() {
    let cartItemCount = myBasket.reduce((total, dish) => total + dish.amount, 0);
    let itemCounter = document.getElementById('item_counter');
    let itemCounterTopBar = document.getElementById('item_counter_topbar')

    if (itemCounter) {
        itemCounter.innerText = cartItemCount;
        if (itemCounterTopBar) {
            itemCounterTopBar.innerText = cartItemCount;
        }
    }
    saveToLocalStorage();
}


//Show Or Hide Cart Info Run In (renderBasket)
function showOrHideCartInfo() {
    let cartInfoContentRef = document.getElementById('cart_info');
    let mobileCartInfoContentRef = document.getElementById('cart_info_mobile');

    cartInfoContentRef.innerHTML = "";
    mobileCartInfoContentRef.innerHTML = "";

    if (myBasket.length === 0) {
        cartInfoContentRef.innerHTML = `<h2>Your cart is empty.<br> Start adding some delicious dishes!</h2>`;
        mobileCartInfoContentRef.innerHTML = `<h2>Your cart is empty.<br> Start adding some delicious dishes!</h2>`;
    }
}


// Render Dialog Placed Order
function renderDialogPlacedOrder() {
    let dialogPlacedOrderContentRef = document.getElementById('dialog_placed_order');
    let mobileDialogPlacedOrderContentRef = document.getElementById('dialog_placed_order');

    dialogPlacedOrderContentRef.innerHTML = getDialogPlacedOrderTemplate();
    mobileDialogPlacedOrderContentRef.innerHTML = getMobileDialogPlacedOrderTemplate();
}


// Close Dialog Placed Order (ONCLICk) 
function closeDialogPlacedOrder() {
    document.getElementById('overlay_placed_order').style.display = "none";
    document.getElementById('dialog_placed_order').innerHTML = '';
}


// Open Dialog When Order Placed (ONCLICK)
function openDialogPlacedOrder() {
    renderDialogPlacedOrder();
    document.getElementById('overlay_placed_order').style.display = "block";
}


// Clear Order (ONCLICK)
function clearOrder() {
    let orderedDishesWrapper = document.getElementById('ordered_dish');
    if (orderedDishesWrapper) {
        orderedDishesWrapper.innerHTML = "";
    }
    myBasket = [];
    renderBasket();
    countItemsInHeader();
}


// Don´t forget To Add Delicious Dishes (ONCLICK)
function emptyBasketErrorMessage() {
    let errorMessageContentRef = document.getElementById('error_message');
    let mobileErrorMessageContentRef = document.getElementById('error_message_mobile');

    errorMessageContentRef.innerHTML = "";
    mobileErrorMessageContentRef.innerHTML = "";

    if (myBasket.length === 0) {
        errorMessageContentRef.innerHTML += "<strong>Don`t forget to add some dishes :)</strong>";
        mobileErrorMessageContentRef.innerHTML += "<strong>Don`t forget to add some dishes :)</strong>";
    } else {
        openDialogPlacedOrder();
        toggleBasketMobile();

        clearOrder();
    }
}


// Calculate Total -> Declared As Variable (totals) in Render Basket Fun. And Param to Template 
function calculateTotals() {
    let subTotal = 0;
    let deliveryCosts = 0;

    for (let indexBasketTotal = 0; indexBasketTotal < myBasket.length; indexBasketTotal++) {
        subTotal += myBasket[indexBasketTotal].price * myBasket[indexBasketTotal].amount;
    }

    if (isDeliverySelected) {
        if (subTotal >= 20) {
            deliveryCosts = 0;
        } else {
            deliveryCosts = 2.99;
        }
    }

    let total = subTotal + deliveryCosts;

    return {
        subTotal: subTotal.toFixed(2),
        deliveryCosts: deliveryCosts.toFixed(2),
        total: total.toFixed(2)
    };
}


// Toggle Basket Mobile
function toggleBasketMobile() {
    document.getElementById('overlay_basket_mobile').classList.toggle('basket-mobile-closed');
}


// Toogle Delivery (ONCLICK)
function toggleDeliveryButton() {
    isDeliverySelected = true;
    updateButtonState();
    updateButtonStateMobile();
    renderBasket();
}


// Toogle Take Away (ONCLICK)
function toggleTakeAwayButton() {
    isDeliverySelected = false;
    updateButtonState();
    updateButtonStateMobile();
    renderBasket();
}


// Update Switch Button Based On -> isDeliverySelected
function updateButtonState() {
    let deliveryBtn = document.getElementById('delivery_btn');
    let takeAwayBtn = document.getElementById('take_away_btn');

    if (isDeliverySelected) {
        deliveryBtn.classList.add('btn-active');
        deliveryBtn.classList.remove('btn-inactive');
        takeAwayBtn.classList.add('btn-inactive');
        takeAwayBtn.classList.remove('btn-active');
        showDeliveryInfo();
    } else {
        takeAwayBtn.classList.add('btn-active');
        takeAwayBtn.classList.remove('btn-inactive');
        deliveryBtn.classList.add('btn-inactive');
        deliveryBtn.classList.remove('btn-active');
        hideDeliveryInfo();
    }
}


// Update Mobile Switch Button Based On -> isDeliverySelected
function updateButtonStateMobile() {
    let mobileDeliveryBtn = document.getElementById('delivery_btn_mobile');
    let mobileTakeAwayBtn = document.getElementById('take_away_btn_mobile');

    if (isDeliverySelected) {
        mobileDeliveryBtn.classList.add('btn-active');
        mobileDeliveryBtn.classList.remove('btn-inactive');
        mobileTakeAwayBtn.classList.add('btn-inactive');
        mobileTakeAwayBtn.classList.remove('btn-active');
        showDeliveryInfo();
    } else {
        mobileTakeAwayBtn.classList.add('btn-active');
        mobileTakeAwayBtn.classList.remove('btn-inactive');
        mobileDeliveryBtn.classList.add('btn-inactive');
        mobileDeliveryBtn.classList.remove('btn-active');
        hideDeliveryInfo();
    }
}


// Show Delivery Info Run In -> toogleDeliveryButton
function showDeliveryInfo() {
    let deliveryInfoContentRef = document.getElementById('delivery_info');
    let mobileDeliveryInfoContentRef = document.getElementById('delivery_info_mobile');
    deliveryInfoContentRef.innerHTML = "";
    mobileDeliveryInfoContentRef.innerHTML = "";

    if (deliveryInfoContentRef) {
        deliveryInfoContentRef.innerHTML = `Enjoy free delivery on all orders of $20 or more.`;
        if (mobileDeliveryInfoContentRef) {
            mobileDeliveryInfoContentRef.innerHTML = `Enjoy free delivery on all orders of $20 or more.`;
        }
    }
}


// Hide Delivery Info Run In -> toogleTakeAwayButton 
function hideDeliveryInfo() {
    let removeDeliveryInfoContentRef = document.getElementById('delivery_info');
    let mobileRemoveDeliveryInfoContentRef = document.getElementById('delivery_info_mobile');
    removeDeliveryInfoContentRef.innerHTML = "";
    mobileRemoveDeliveryInfoContentRef.innerHTML = "";
}


// Render Header (ONLOAD)
function renderHeader() {
    let headerContentRefIndex = document.getElementById('header');
    headerContentRefIndex.innerHTML = getHeaderTemplate();
}


// Render Hero (ONLOAD)
function renderHero() {
    let heroContentRef = document.getElementById('hero');
    heroContentRef.innerHTML += getHeroTemplate();
}


// Render Topbar (ONLOAD)
function renderTopbar() {
    let topbarContentRef = document.getElementById('topbar');
    topbarContentRef.innerHTML += getTopbarTemplate();
}


// Render Opening Hours (ONLOAD)
function renderOpeningHours() {
    let openingHoursContentRef = document.getElementById('opening_hours');
    openingHoursContentRef.innerHTML += getOpeningHoursTemplate();
}


// Render Find Us / Googlemaps (ONLOAD)
function renderFindUs() {
    let findUsContentRef = document.getElementById('location');
    findUsContentRef.innerHTML += getFindUsTemplate();
}


// Render Footer (ONLOAD)
function renderFooter() {
    let footerContentRef = document.getElementById('footer');
    footerContentRef.innerHTML += getFooterTemplate();
}