// slider settings

$(function () {

    $('.slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        swipe: true,
        infinite: true,
        speed: 1800,
        autoplaySpeed: 4500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 10,
        waitForAnimate: true,
    })

});

// slider settings

// Якорь

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}

// Якорь

// бэргер

const BurgerMenu = document.querySelector('.menu-burger');
if (BurgerMenu) {
    const menuBody = document.querySelector('.menu-body');
    BurgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        BurgerMenu.classList.toggle('header-active')
        menuBody.classList.toggle('header-active')
    });
}

// бэргер

