'use strict';

/* SCRIPT CONTACT HTML */


function initContact() {
    renderHeaderContact();
    renderHeroContact();
    renderMailContent();
    renderFooterContact();
}


// Render Header Contact (ONLOAD)
function renderHeaderContact() {
    let headerContentRefContact = document.getElementById('header_contact');
    headerContentRefContact.innerHTML = getHeaderContactTemplate(); // Template erstellt HTML Kontent
}


// Render Hero (ONLOAD)
function renderHeroContact() {
    let heroContentRefContact = document.getElementById('hero_contact'); // Variable wird ID zugewiesen 
    heroContentRefContact.innerHTML = getHeroContactTemplate(); // Template erstellt HTML Kontent
}


// Render Mail Content
function renderMailContent() {
    let mailContentRef = document.getElementById('mail_contact');
    mailContentRef.innerHTML = getMailContentTemplate();
}


// Render Footer Contact (ONLOAD)
function renderFooterContact() {
    let footerContentRefContact = document.getElementById('footer_contact'); // Variable wird  durch ID zugewiesen
    footerContentRefContact.innerHTML = getFooterContactTemplate(); // Template erstellt HTML Kontent
}


// Render Dialog Contact
function renderDialogContact() {
    let dialogContactRef = document.getElementById('dialog_contact');
    dialogContactRef.innerHTML = getDialogContactTemplate();
}


// Close Dialog Contact (ONCLICk) 
function closeDialogContact() {
    document.getElementById('overlay_contact').style.display = "none"; // Element wird unsichtbar gemacht
}


function openDialogContact() {
    // Get references to the input fields
    let inputFirstName = document.getElementById('firstname').value.trim();
    let inputLastName = document.getElementById('lastname').value.trim();
    let inputEmail = document.getElementById('email').value.trim();
    let inputTextfield = document.getElementById('textfield').value.trim();

    // Check if any of the required fields are empty
    if (inputFirstName === "" || inputLastName === "" || inputEmail === "" || inputTextfield === "") {
        alert("Please fill in all the required fields before submitting.");
        return; // Prevent the dialog from opening if any field is empty
    }

    // If all fields are filled, open the dialog
    renderDialogContact();
    document.getElementById('overlay_contact').style.display = "block";

    // Clear all input fields after successful submission
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('textfield').value = "";
} 