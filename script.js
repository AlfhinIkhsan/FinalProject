

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});


const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');


hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
