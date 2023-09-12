// let menuIcon = menuBth.querySelector('img');
// let menuIcon = document.querySelector('.menu-btn img');
// let navLinks = document.querySelector('.nav-links ul');
let menuOpen = false;

export default function toggleMenu() {
    console.log('clicked', menuOpen)
    let menuIcon = document.querySelector('.menu-btn img');
    let navLinks = document.querySelector('.nav-links ul');
    
    if (menuOpen) {
        menuOpen = !menuOpen;
        menuIcon.src = '/assets/icons/icon-hamburger.svg';
    } else {
        menuOpen = !menuOpen;
        menuIcon.src = '/assets/icons/icon-close.svg';
    }
    
    navLinks.classList.toggle('show-nav-links');
};