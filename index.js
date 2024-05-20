
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

// Scrolling functionality
var revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    var windowHeight = window.innerHeight;
    var allVisible = true;

    for (var i = 0; i < revealElements.length; i++) {
        var reveal = revealElements[i];
        var revealPosition = reveal.getBoundingClientRect().top;

        if (revealPosition < windowHeight / 2) {
            reveal.classList.add("visible");
        } else {
            allVisible = false;
        }
    }

    if (allVisible) {
        window.removeEventListener("scroll", revealOnScroll);
    }
}

window.addEventListener("scroll", revealOnScroll);


// Like functionality
var heartsContainer = document.querySelector('.most-wanted__container');

heartsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-regular')) {
        var solidHeart = event.target.nextElementSibling; 
        event.target.style.display = 'none'; 
        solidHeart.style.display = 'inline-block'; 
    } else if (event.target.classList.contains('fa-solid')) {
        var regularHeart = event.target.previousElementSibling; 
        event.target.style.display = 'none'; 
        regularHeart.style.display = 'inline-block'; 
    }
});


// Scrolling to a particular section
var scrollToSectionLink = document.getElementById("scroll-1");

scrollToSectionLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    var targetId = this.getAttribute("href").substring(1); 
    var targetSection = document.getElementById(targetId); 
    if (targetSection) {
        var sectionTop = targetSection.offsetTop; 
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
});

var scrollToSectionLink = document.getElementById("scroll-2");

scrollToSectionLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    var targetId = this.getAttribute("href").substring(1); 
    var targetSection = document.getElementById(targetId); 
    if (targetSection) {
        var sectionTop = targetSection.offsetTop; 
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
});


// Scrolling to a particular section in Side menu bar
var scrollToSectionLink = document.getElementById("scroll-3");

scrollToSectionLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    var targetId = this.getAttribute("href").substring(1); 
    var targetSection = document.getElementById(targetId); 
    if (targetSection) {
        var sectionTop = targetSection.offsetTop; 
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
});

var scrollToSectionLink = document.getElementById("scroll-4");

scrollToSectionLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    var targetId = this.getAttribute("href").substring(1); 
    var targetSection = document.getElementById(targetId); 
    if (targetSection) {
        var sectionTop = targetSection.offsetTop; 
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
});

// Slider functionality
var rightButton = document.querySelector(".slider-right");
var leftButton = document.querySelector(".slider-left");
var sliderImages = document.querySelector(".slider-container");
var slideMargin = 0;

rightButton.addEventListener("click",function(){
    slideMargin = slideMargin+196;
    if(slideMargin>392){
        slideMargin=0;
        sliderImages.style.marginLeft=0;
    }
    else{
        sliderImages.style.marginLeft="-"+slideMargin+"vw";
    }
})
leftButton.addEventListener("click",function(){
    if(slideMargin==0){
        slideMargin=392;
        sliderImages.style.marginLeft="-"+slideMargin+"vw";
    }
    else{
        slideMargin=slideMargin-196;
        sliderImages.style.marginLeft="-"+slideMargin+"vw";
    }
})