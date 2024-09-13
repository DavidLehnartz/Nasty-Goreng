'use strict';

/* SCRIPT PRIVACY HTML */


function initPrivacy() {
    renderHeaderPrivacy();
    renderHeroPrivacy();
    renderPrivacy();
    renderFooterPrivacy();
}


// Render Header Impressum (ONLOAD)
function renderHeaderPrivacy() {
    let headerContentRefPrivacy = document.getElementById('header_privacy');
    headerContentRefPrivacy.innerHTML = getHeaderPrivacyTemplate(); // Template erstellt HTML Kontent
}


// Render Hero (ONLOAD)
function renderHeroPrivacy() {
    let heroContentRefPrivacy = document.getElementById('hero_privacy'); // Variable wird ID zugewiesen 
    heroContentRefPrivacy.innerHTML = getHeroPrivacyTemplate(); // Template erstellt HTML Kontent
}


// Render Impressum (ONLOAD)
function renderPrivacy() {
    let privacyContentRef = document.getElementById('privacy');
    privacyContentRef.innerHTML = getPrivacyTemplate();
}


// Render Footer Impressum (ONLOAD)
function renderFooterPrivacy() {
    let footerContentRefPrivacy = document.getElementById('footer_privacy'); // Variable wird  durch ID zugewiesen
    footerContentRefPrivacy.innerHTML = getFooterPrivacyTemplate(); // Template erstellt HTML Kontent
}