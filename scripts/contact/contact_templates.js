'use strict';

/* CONTACT TEMPLATES */


// Header Template
function getHeaderContactTemplate() {
    return `
        <header class="div">
          <a class="nav-links" href="index.html">
                <b>Start</b>
            </a>
            <a class="nav-links" href="index.html">
                <b>Location</b>
            </a>
            <a class="nav-links" href="index.html">
                <b>Opening Hours</b>
            </a>
            <a class="nav-links" href="#mail_contact">
                <b>Reservations</b>
            </a>
            <a class="nav-links" href="#mail_contact">
                <b>Contact</b>
            </a> 
        </header>
`;
}


// Hero Template
function getHeroContactTemplate() {
    return `
            <div class="slider">
                <h1>
                    Nasty Goreng
                </h1>
                <h2>
                    <b>Spice Up Your Life</b> 
                </h2>
            </div>

            <div class="slider-icon-wrapper">
                <img class="slider-icon" src="./assets/icons/slider_icon.jpg" alt="#">
            </div>                     
`;
}


// Mail Content Template
function getMailContentTemplate() {
    return `
            <div class="headline-contact">
                <h2>We would love to hear from you!
                    <br>
                    Whether you have a question, feedback, or would like to make a
                    reservation,
                    <br>
                    please fill out the form below and our team will get back to you as soon as possible.
                </h2>
            </div>
            <form>
                <div class="name-contact-wrapper">
                    <label class="name-contact">
                        First name:
                        <input id="firstname" type="text" placeholder="First name..." required value=""> 
                    </label>
                    <label class="name-contact">
                        Last name:
                        <input id="lastname" type="text" placeholder="Last name..." required value=""> 
                    </label>
                </div>
                <div class="mail-and-message-wrapper">
                    <label class="mail-contact">
                        Email:
                        <input id="email" type="email" placeholder="Your email address..." required value=""> 
                    </label>
                    <label class="phone-contact">
                        Phone (Optional)
                        <input type="tel" placeholder="08151337420...">
                    </label>
                    <label class="contact-method">
                        Preferred Contact Method:
                        <div id="contact_method">
                            <label>
                                Email
                                <input type="radio" name="contact_method" value="email">
                            </label>
                            <label>
                                Phone
                                <input type="radio" name="contact_method" value="phone">
                            </label>
                        </div>
                    </label>
                    <label class="option-contact">
                        Option:
                        <select name="option">
                            <option value="" disabled selected>Select an option</option>
                            <option value="general_inquiry">General Inquiry</option>
                            <option value="reservation">Reservation</option>
                            <option value="feedback">Feedback</option>
                            <option value="catering_request">Catering Request</option>
                        </select>
                    </label>
                    <label class="message-contact">
                        Your message:
                        <textarea id="textfield" rows="20" placeholder="Please share the details of your request..." required value=""></textarea>  
                    </label>
                </div>
                <button onclick="openDialogContact()" class="order-btn">Submit</button>
            </form>
    `;
}


// Dialog Contact Template
function getDialogContactTemplate() {
    return `
           <div class="overlay-contact-header">
                    <h2>
                        Cheers!
                        <br>
                        Your message has been successfully submitted.
                    </h2>
                </div>
                <div class="overlay-contact-content">
                    We appreciate you reaching out to us!
                    <br>
                    Our team will review your inquiry and get back to you as soon as possible.
                    <br>
                    We strive to respond to all inquiries within 24 hours.
                    <br>
                    If your request is urgent, feel free to contact us directly at:
                    <br>
                    <a class="overlay-contact-informations" href="#">
                        0800-555-555.
                    </a>
                </div>
                <div class="overlay-contact-footer">
                    <h2>
                        We look forward to assisting you!
                    </h2>
                    <br>
                    Selamat makan,
                    <br>
                    Your Nasty Goreng Team
                    <button onclick="closeDialogContact()" class="dialog-close-btn">
                        Close
                    </button>
                </div>
            </div>
    `;
}


// Footer Template
function getFooterContactTemplate() {
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
                      <a class="data-policy" href="#mail_contact">
                      Contact 
                      </a>
                     <a class="data-policy" href="privacy.html">
                      Privacy 
                      </a>
                   </div>
               </footer>
    `;
}