'use strict';

/* MOBILE TEMPLATES */


// Mobile Basket Template
function getMobileBasketTemplate(subTotal, deliveryCosts, total) {
    return `
            <div class="basket-mobile">
                    <div class="close-btn-mobile-wrapper">
                        <strong>Close</strong>
                        <img onclick="toggleBasketMobile()" class="close-btn-basket-mobile"
                            src="./assets/icons/close.png" alt="close">
                    </div>
                    <div class="basket-headline">
                        <h3>My Cart</h3>
                    </div>
                    <div class="btn-basket-wrapper">
                        <button id="take_away_btn_mobile" onclick="toggleTakeAwayButton();" type="button"
                            class="btn-toggle-left-mobile btn-active">
                            <img class="btn-img" src="./assets/icons/take_away.png" alt="box">
                            Take away
                        </button> 
                        <button id="delivery_btn_mobile" onclick="toggleDeliveryButton(); " type="button"
                            class="btn-toggle-right-mobile btn-inactive">
                            <img class="btn-img" src="./assets/icons/delivery.png" alt="bike">
                            Delivery
                        </button> 
                    </div>
                    <div id="delivery_info_mobile" class="free-delivery-info"></div> 

                    <div class="seperator-basket"></div>

                    <div id="cart_info_mobile" class="cart-info"></div> 

                    <div id="ordered_dish_mobile" class="ordered-dishes-wrapper"></div> 

                    <div class="seperator-basket"></div>

                    <div class="bill-wrapper"></div>
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
                </div>
                <button onclick=" emptyBasketErrorMessage()" class="order-btn">Place Order</button>
                <div id="error_message_mobile" class="error-message"></div> 
            </div>
`;
}


// Mobile Dialog Placed Order Template
function getMobileDialogPlacedOrderTemplate() {
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
                    <a class="overlay-placed-order-contact-informations" href="contact.html">
                        Contact Informations
                    </a>
                </div>
                <div class="overlay-placed-order-footer">
                    <h2>We look forward to serving you!</h2>
                    <br>
                    Selamat Makan,
                    <br>
                    Your Nasty Goreng Team</h2>
                    <button onclick="closeDialogPlacedOrder()" class="dialog-close-btn">Close</button>
                </div>
`;
}
