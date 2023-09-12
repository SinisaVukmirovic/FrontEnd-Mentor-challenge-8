// let menuIcon = menuBth.querySelector('img');
// let menuIcon = document.querySelector('.menu-btn img');
// let navLinks = document.querySelector('.nav-links ul');
let menuIcon;
let navLinks;
let menuOpen = false;

export default function toggleMenu() {
    // let menuIcon = document.querySelector('.menu-btn img');
    // let navLinks = document.querySelector('.nav-links ul');
    getDomElems();
    
    if (menuOpen) {
        menuOpen = !menuOpen;
        menuIcon.src = '/assets/icons/icon-hamburger.svg';
    } else {
        menuOpen = !menuOpen;
        menuIcon.src = '/assets/icons/icon-close.svg';
    }
    
    navLinks.classList.toggle('show-nav-links');
};

function getDomElems() {
    menuIcon = document.querySelector('.menu-btn img');
    navLinks = document.querySelector('.nav-links ul');
}