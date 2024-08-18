'use strict';

/* MAIN SCRIPT */


// Initializing
function init() {
    renderHeader();
    renderHero();
    renderTopbar();
    renderBasket();
    renderMenu();
    renderFindUs();
    renderFooter();
}


// Render Header
function renderHeader() {
    let headerContentRef = document.getElementById('header');
    headerContentRef.innerHTML += getHeaderTemplate();
}


// Header Template
function getHeaderTemplate() {
    return `
        <header class="">
            <a class="nav-links" href="#">
                <b>About Our Food</b>
            </a>
            <a class="nav-links" href="#">
                <b>Download App</b>
            </a>
            <a class="nav-links" href="#">
                <b>Location</b>
            </a>
            <a class="nav-links" href="#">
                <b>Opening Hours</b>
            </a>
            <a class="nav-links" href="#">
                <b>Reservations</b>
            </a>
        </header>
`;
}


// Render Hero
function renderHero() {
    let heroContentRef = document.getElementById('hero');
    heroContentRef.innerHTML += getHeroTemplate();
}


// Hero Template
function getHeroTemplate() {
    return `
                    <div class="slider">
                        <h1>
                            Nasty Goreng
                        </h1>
                        <h2>
                            <b>Spice Up Your Life</b>
                            <h2>
                    </div>

                    <div class="slider-icon-wrapper">
                        <img class="slider-icon" src="./assets/icons/slider_icon.jpg" alt="#">
                    </div>

                    <div class="welcome-text">
                        <h2>
                            Welcome to Nasty Goreng Your Gateway to Bold,
                            Authentic Asian Street Food!
                            <br>
                            <br>
                            At Nasty Goreng, we are all about bringing the vibrant and mouthwatering flavors of the Far
                            East
                            to your plate.
                            <br>
                            <br>
                            Our menu is a celebration of Asia’s most beloved street food,
                            crafted with passion and served with a twist. From the fiery heat of our signature
                            stir-fried
                            chicken, savory taste of our noodle dishes, every bite is an adventure.
                            <br>
                            <br>
                            Whether you're here for a quick bite or a full meal,
                            Nasty Goreng promises an unforgettable dining experience that’s as bold and unique as its
                            name.
                            <br>
                            <br>
                        </h2>
                        <div class="seperator"></div>
                    </div>    
`;
}


// Render Topbar
function renderTopbar() {
    let topbarContentRef = document.getElementById('topbar');
    topbarContentRef.innerHTML += getTopbarTemplate();
}


//Topbar Template
function getTopbarTemplate() {
    return `
                    <a class="topbar-tabs" href="#">
                        <b>Starters</b>
                    </a>
                    <a class="topbar-tabs" href="#">
                        <b>Main dishes</b>
                    </a>
                    <a class="topbar-tabs" href="#">
                        <b>Desserts</b>
                    </a>
                    <a class="topbar-tabs" href="#">
                        <b>Drinks</b>
                    </a>
`;
}


// Render Basket
function renderBasket() {
    let basketContentRef = document.getElementById('basket');
    basketContentRef.innerHTML += getBasketTemplate();

    /* for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketContentRef.innerHTML += getBasketTemplate[indexBasket];
    } */
}


// Basket Template
function getBasketTemplate() {
    return `
                <div class="basket">
                    <h3>Your Cart</h3>
                    <div class="switch-btn-wrapper">
                        <button class="switch-btn-left">
                            <img class="btn-img" src="./assets/icons/take_away.png" alt="box">
                            Take Away
                        </button>
                        <button class="switch-btn-right d_none">
                            <img class="btn-img" src="./assets/icons/delivery.png" alt="bike">
                            Delivery
                        </button>
                    </div>
                    <div class="seperator-basket"></div>
                    $
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ipsam tenetur earum veritatis similique deleniti ab sit deserunt saepe?
                    Facere sapiente incidunt maiores veritatis sit ab odio recusandae facilis illum!
                    <div class="seperator-basket"></div>
                    <h4>Subtotal:</h4>
                    <p>$</p>
                    <h4>Delivery costs</h4> <!-- Wenn auf Lieferkosten geklickt wird -->
                    <p>$</p>
                    <h4>Total:</h4>
                    <p>$</p>
                    <button class="order-btn">Order Delivery</button>
                </div>
    `;
}


// Render Footer
function renderFooter() {
    let footerContentRef = document.getElementById('footer');
    footerContentRef.innerHTML += getFooterTemplate();
}


// Footer Template
function getFooterTemplate() {
    return `
        <footer>

        </footer>
    `;
}


// Render Menu
function renderMenu() {
    let menuContentRef = document.getElementById('menu');
    menuContentRef.innerHTML = "";

    for (let indexMenu = 0; indexMenu < myDishes.length; indexMenu++) {
        menuContentRef.innerHTML += getMenuTemplate(myDishes[indexMenu], indexMenu);
    }
}


// Menu Template
function getMenuTemplate(dish) {
    return `
                    <div class="category-wrapper">
                        <h3>${dish.category}</h3>
                        <img class="category-img" src="${dish.img_src}" alt="dish">
                        <div class="dishes-wrapper">
                            <div class="container-left">
                            <div class="dish-header">
                                <span>${dish.order_number}</span>
                                 <h2>${dish.name}</h2>
                            </div>
                                <img class="veggie-img" src="${dish.veggie}" alt="veggie">
                                <p>${dish.price.toFixed(2)} $</p>
                                <p>${dish.description}</p>
                            </div>

                            <div class="container-right">
                                <img class="add-btn" src="./assets/icons/plus.png" alt="plus">
                            </div>
                        </div>
                    </div>   
`;
}


// Render Find Us / Googlemaps
function renderFindUs() {
    let findUsContentRef = document.getElementById('location');
    findUsContentRef.innerHTML += getFindUsTemplate();
}


// Find Us Template
function getFindUsTemplate() {
    return `
        <h5>FIND US AT</h5>
        <div class="find-us-adress">
            <img class="map-marker-icon" src="./assets/icons/map.png" alt="marker">
            <p>Yogyakarta, Gg. Lesmana 2</p>
        </div>
        <iframe class="googlemaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.3673115615172!2d110.36455872277597!3d-7.817889725609591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57bd37eef7a1%3A0x2988361ca3a83813!2sGg.%20Lesmana%202%2C%20Mantrijeron%2C%20Kec.%20Mantrijeron%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055143%2C%20Indonesien!5e0!3m2!1sde!2sde!4v1723971930146!5m2!1sde!2sde"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>    
`;
}