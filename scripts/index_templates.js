'use strict';

/*INDEX TEMPLATES */


// Menu Template
function getMenuTemplate(dish, indexMenu) {
    return `
                <div id="${dish.category.toLowerCase()}" class="category-wrapper">
                    <h3>${dish.category}</h3>
                    <img class="category-img" src="${dish.img_src}" alt="dish">
                    <div onclick="addDishToBasket(${indexMenu})" class="dishes-wrapper">     
                        <div class="container-left">
                            <div class="dish-header">
                                <span>${dish.order_number}</span>
                                <h2>${dish.name}</h2>
                            </div>
                            <img class="veggie-img" src="${dish.veggie}" alt="veggie">
                            <p><strong>$</strong> ${dish.price.toFixed(2)}</p>
                            <p>${dish.description}</p>
                        </div>
                        <div class="container-right">
                            <img class="add-btn" src="./assets/icons/plus.png" alt="plus">
                        </div>
                    </div>
                </div>   
    `;
}


// Basket Template
function getBasketTemplate(subTotal, deliveryCosts, total) {
    return `
                <div class="basket">
                    <div class="basket-headline">
                        <h3>My Cart</h3>
                    </div>
                    <div class="btn-basket-wrapper">
                        <button id="take_away_btn" onclick="toggleTakeAwayButton();" type="button" class="btn-toggle-left btn-active">
                            <img class="btn-img" src="./assets/icons/take_away.png" alt="box">
                            Take Away
                        </button>
                        <button id="delivery_btn" onclick="toggleDeliveryButton();" type="button" class="btn-toggle-right btn-inactive">
                            <img class="btn-img" src="./assets/icons/delivery.png" alt="bike">
                             Delivery
                        </button>
                    </div>
                    <div id="delivery_info" class="free-delivery-info"></div>

                    <div class="seperator-basket"></div>

                    <div id="cart_info" class="cart-info"></div>

                    <div id="ordered_dish" class="ordered-dishes-wrapper"></div>

                    <div class="seperator-basket"></div>

                    <div class="bill-wrapper">
                        <div class="bill">
                            <p>Subtotal:</p>
                            <p><strong>$</strong> ${subTotal}</p> 
                        </div>
                        <div class="bill">
                            <p>Delivery costs:</p>
                            <p id="delivery_costs"><strong>$</strong> ${deliveryCosts}</p>
                        </div>
                        <div class="bill">
                            <h2>Total:</h2>
                            <p><strong>$</strong> ${total}</p>
                        </div>
                    </div>

                    <button onclick=" emptyBasketErrorMessage()" class="order-btn">Place Order</button>  
                    <div id="error_message" class="error-message"></div>
                </div>           
    `;
}

// Added Dishes Template
function getAddDishToBasket(orderedDish, indexBasket) {
    return `
                <div class="dishes">
                    <h4>${orderedDish.name}</h4>
                    <p>+ ${orderedDish.toppings[0]}</p>
                </div>
                <div class="amount-and-sum-wrapper">
                    <img onclick="countAmountDown(${indexBasket})" class="btn-basket" src="./assets/icons/minus.png" alt="minus">
                    <p>${orderedDish.amount}</p>
                    <img onclick="countAmountUp(${indexBasket})" class="btn-basket" src="./assets/icons/plus.png" alt="plus">
                  <div class="sum">
                    <p><strong>$</strong> ${(orderedDish.price * orderedDish.amount).toFixed(2)}</p>                 
                  </div>
                </div>           
    `;
}


// Dialog Placed Order Template
function getDialogPlacedOrderTemplate() {
    return `
                <div class="overlay-placed-order-header">
                    <h2>
                        Cheers!
                        <br>
                        We recieved your order.
                    </h2>
                </div>
                <div class="overlay-placed-order-content">
                    If you have any questions or need to make changes to your order,
                    <br>
                    please don't hesitate to contact us at:
                    <a class="overlay-placed-order-contact-informations" href="#">
                        Contact Informations
                    </a>
                </div>
                <div class="overlay-placed-order-footer">
                    <h2>We look forward to serving you!</h2>
                    <br>
                    Selamat Makan,
                    <br>
                    Your Nasty Goreng Team
                    <button onclick="closeDialogPlacedOrder()" class="dialog-close-btn">Close</button>
                </div>
    `;
}


// Header Template
function getHeaderTemplate() {
    return `
        <header class="div">
            <a class="nav-links" href="#location">
                <b>Location</b>
            </a>
            <a class="nav-links" href="#opening_hours">
                <b>Opening Hours</b>
            </a>
            <a class="nav-links" href="contact.html">
                <b>Reservations</b>
            </a>
            <a class="nav-links" href="contact.html">
                <b>Contact</b>
            </a>
            <div class="header-cart-info">
              <img onclick="toggleBasketMobile()" class="shopping-cart-img" src="./assets/icons/shopping_cart.png" alt="shopping cart">
              <b id="item_counter">0</b>  
            </div>
        </header>
`;
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
                    <h/2>
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


// Topbar Template
function getTopbarTemplate() {
    return `
                 <a class="topbar-tabs" href="#starter">
                    Starters
                </a>
                <a class="topbar-tabs" href="#main dish">
                    Main dishes
                </a>
                <a class="topbar-tabs" href="#dessert">
                    Desserts
                </a>
                <a class="topbar-tabs" href="#drink">
                    Drinks
                </a>
                 <div class="header-cart-info">
              <img onclick="toggleBasketMobile()" class="shopping-cart-img" src="./assets/icons/shopping_cart.png" alt="shopping cart">
              <b id="item_counter_topbar">0</b>  
            </div>               
`;
}


// Opening Hours Template
function getOpeningHoursTemplate() {
    return `
               <div class="seperator-opening-hours"></div>
                   <h2 class="opening-hours-header">Opening Hours</h2>
                   <table class="opening-hours-table">
                       <tbody>
                           <tr class="opening-hours">
                               <td>
                                   <h2>Monday - Friday</h2>
                               </td>
                               <td>
                                   <p>10 am - 11 pm</p>
                               </td>
                               <td>
                                   <h2>Saturday - Sunday</h2>
                               </td>
                               <td>
                                   <p>11 am - 12 pm</p>
                               </td>
                           </tr>
                       </tbody>
                   </table>
                   <div class="seperator-opening-hours"></div>
    `;

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


// Footer Template
function getFooterTemplate() {
    return `
               <footer>
                  <b>Selamat makan</b>
                  <div>
                     <a href="https://facebook.com">
                        <img class="social-img" src="./assets/icons/facebook.png" alt="facebook">
                     </a>
                     <a href="https://instagram.com">
                        <img class="social-img" src="./assets/icons/instagram.png" alt="instagram">
                     </a>
                     <a href="https://x.com">
                        <img class="social-img" src="./assets/icons/x.png" alt="x">
                     </a>
                   </div>
                   <div class="data-policy-wrapper">
                      <a class="data-policy" href="impressum.html">
                      Impressum
                      </a>
                      <a class="data-policy" href="contact.html">
                      Contact 
                      </a>
                     <a class="data-policy" href="privacy.html">
                      Privacy 
                      </a>
                   </div>
               </footer>
    `;
}