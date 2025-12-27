menuButton = document.querySelector(".menu-button");
navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});