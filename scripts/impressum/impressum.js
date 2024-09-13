'use strict';

/* SCRIPT IMPRESSUM HTML */


function initImpressum() {
    renderHeaderImpressum();
    renderHeroImpressum();
    renderImpressum();
    renderFooterImpressum();
}


// Render Header Impressum (ONLOAD)
function renderHeaderImpressum() {
    let headerContentRefImpressum = document.getElementById('header_impressum');
    headerContentRefImpressum.innerHTML = getHeaderImpressumTemplate(); // Template erstellt HTML Kontent
}


// Render Hero (ONLOAD)
function renderHeroImpressum() {
    let heroContentRefImpressum = document.getElementById('hero_impressum'); // Variable wird ID zugewiesen 
    heroContentRefImpressum.innerHTML = getHeroImpressumTemplate(); // Template erstellt HTML Kontent
}


// Render Impressum (ONLOAD)
function renderImpressum() {
    let impressumContentRef = document.getElementById('impressum');
    impressumContentRef.innerHTML = getImpressumTemplate();
}


// Render Footer Impressum (ONLOAD)
function renderFooterImpressum() {
    let footerContentRefImpressum = document.getElementById('footer_impressum'); // Variable wird  durch ID zugewiesen
    footerContentRefImpressum.innerHTML = getFooterImpressumTemplate(); // Template erstellt HTML Kontent
}