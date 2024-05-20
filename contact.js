// Top Closing functionality
var closeButton = document.getElementById("close");
var topElement = document.querySelector(".top");

closeButton.addEventListener("click", function () {
    topElement.classList.add("remove");
});

// Side menu bar functionality
var menuBar = document.getElementById("menu-bar");
var sideNavbar = document.querySelector(".side-navbar");
var closeNavbar = document.querySelector(".close-side-navbar");

menuBar.addEventListener("click", function () {
    sideNavbar.classList.add("show-side-navbar");
});

closeNavbar.addEventListener("click", function () {
    sideNavbar.classList.remove("show-side-navbar");
});

