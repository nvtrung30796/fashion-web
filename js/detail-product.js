// Slideshow of detail-product page (Tablet viewport)
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Slideshow of detail-product page (Mobile viewport)
var slideIndex__mobile = 1;
showSlides__mobile(slideIndex__mobile);

// Next/previous controls
function plusSlides__mobile(m) {
    showSlides__mobile(slideIndex__mobile += m);
}

// Thumbnail image controls
function currentSlide__mobile(m) {
    showSlides__mobile(slideIndex__mobile = m);
}

function showSlides__mobile(m) {
    var j;
    var slidesMobile = document.getElementsByClassName("mySlides__mobile");
    var dotsMobile = document.getElementsByClassName("dot__mobile");
    //  Mobile
    if (m > slidesMobile.length) {
        slideIndex__mobile = 1
    }
    if (m < 1) {
        slideIndex__mobile = slidesMobile.length
    }
    for (j = 0; j < slidesMobile.length; j++) {
        slidesMobile[j].style.display = "none";
    }
    for (j = 0; j < dotsMobile.length; j++) {
        dotsMobile[j].className = dotsMobile[j].className.replace(" active__mobile", "");
    }
    slidesMobile[slideIndex__mobile - 1].style.display = "block";
    dotsMobile[slideIndex__mobile - 1].className += " active__mobile";
}

// Slideshow of detail-product page (Desktop viewport)
const bigImg = document.querySelector('.sub-detail-product_big img')
const smallImg = document.querySelectorAll('.sub-detail-product__small img')
smallImg.forEach(function (imgItem) {
    imgItem.addEventListener("click", function () {
        bigImg.src = imgItem.src
    })

})
// Select color - detail-product-page - mobile viewport
const navyMobile = document.querySelector('.navy-mobile')
const blackMobile = document.querySelector('.black-mobile')
const brownMobile = document.querySelector('.brown-mobile')
const whiteMobile = document.querySelector('.white-mobile')
const grayMobile = document.querySelector('.gray-mobile')
let colorMobile = document.querySelector('.hide-navy-color-mobile')
navyMobile.addEventListener("click", function () {
    colorMobile.innerHTML = "Navy";
})
blackMobile.addEventListener("click", function () {
    colorMobile.innerHTML = "Đen";
})
brownMobile.addEventListener("click", function () {
    colorMobile.innerHTML = "Bò";
})
whiteMobile.addEventListener("click", function () {
    colorMobile.innerHTML = "Trắng";
})
grayMobile.addEventListener("click", function () {
    colorMobile.innerHTML = "Xám";
})

// Select color - detail-product-page - tablet viewport
const navyTablet = document.querySelector('.navy-tablet')
const blackTablet = document.querySelector('.black-tablet')
const brownTablet = document.querySelector('.brown-tablet')
const whiteTablet = document.querySelector('.white-tablet')
const grayTablet = document.querySelector('.gray-tablet')
let colorTablet = document.querySelector('.hide-navy-color-tablet')
navyTablet.addEventListener("click", function () {
    colorTablet.innerHTML = "Navy";
})
blackTablet.addEventListener("click", function () {
    colorTablet.innerHTML = "Đen";
})
brownTablet.addEventListener("click", function () {
    colorTablet.innerHTML = "Bò";
})
whiteTablet.addEventListener("click", function () {
    colorTablet.innerHTML = "Trắng";
})
grayTablet.addEventListener("click", function () {
    colorTablet.innerHTML = "Xám";
})

// Select color - detail-product-page - desktop viewport
const navyDesktop = document.querySelector('.navy-desktop')
const blackDesktop = document.querySelector('.black-desktop')
const brownDesktop = document.querySelector('.brown-desktop')
const whiteDesktop = document.querySelector('.white-desktop')
const grayDesktop = document.querySelector('.gray-desktop')
let colorDesktop = document.querySelector('.hide-navy-color-desktop')
navyDesktop.addEventListener("click", function () {
    colorDesktop.innerHTML = "Navy";
})
blackDesktop.addEventListener("click", function () {
    colorDesktop.innerHTML = "Đen";
})
brownDesktop.addEventListener("click", function () {
    colorDesktop.innerHTML = "Bò";
})
whiteDesktop.addEventListener("click", function () {
    colorDesktop.innerHTML = "Trắng";
})
grayDesktop.addEventListener("click", function () {
    colorDesktop.innerHTML = "Xám";
})

// Increase & decrease the quantity - Mobile
const plusMobile = document.querySelector('.plus-mobile')
const minusMobile = document.querySelector('.minus-mobile')
let valueMobile = document.querySelector('.quantity-mobile')
let i = 1;

plusMobile.addEventListener("click", function () {
    i = i + 1;
    valueMobile.innerHTML = i;
})
minusMobile.addEventListener("click", function () {
    if (i <= 1) {
        i = 1
    }
    else {
        i = i - 1;
        valueMobile.innerHTML = i;
    }
})

// Increase & decrease the quantity - Tablet
const plusTablet = document.querySelector('.plus-tablet')
const minusTablet = document.querySelector('.minus-tablet')
let valueTablet = document.querySelector('.quantity-tablet')
let j = 1;

plusTablet.addEventListener("click", function () {
    j = j + 1;
    valueTablet.innerHTML = j;
})
minusTablet.addEventListener("click", function () {
    if (j <= 1) {
        j = 1
    }
    else {
        j = j - 1;
        valueTablet.innerHTML = j;
    }
})

// Increase & decrease the quantity - Desktop
const plusDesktop = document.querySelector('.plus-desktop')
const minusDesktop = document.querySelector('.minus-desktop')
let valueDesktop = document.querySelector('.quantity-desktop')
let d = 1;

plusDesktop.addEventListener("click", function () {
    d = d + 1;
    valueDesktop.innerHTML = d;
})
minusDesktop.addEventListener("click", function () {
    if (d <= 1) {
        d = 1
    }
    else {
        d = d - 1;
        valueDesktop.innerHTML = d;
    }
})