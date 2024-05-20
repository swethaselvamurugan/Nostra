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

// Product search functionality
var productContainer = document.querySelector(".product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll(".products")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count = count + 1) {

        var productName = productList[count].querySelector("h1").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }

    }
})

// Checkbox functionality
document.addEventListener("DOMContentLoaded", function() {
    var checkboxes = document.querySelectorAll('input[name="check"]');
    var productContainer = document.querySelector(".product-container");
    var productList = productContainer.querySelectorAll(".products");

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            filterProducts();
        });
    });

    function filterProducts() {
        var selectedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        productList.forEach(function(product) {
            var productCategories = product.getAttribute("data-category").split(" ");
            if (selectedCategories.length === 0 || selectedCategories.some(category => productCategories.includes(category))) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});



