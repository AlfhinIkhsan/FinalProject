
// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Ambil elemen tombol hamburger dan menu mobile
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

// Tambahkan event listener untuk mengganti kelas 'active' saat tombol hamburger diklik
hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
