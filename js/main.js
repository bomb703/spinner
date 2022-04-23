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

// map

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 12,
        center: { lat: 59.38041044161922, lng: 28.175735864389836 }
    };

    var myMap = new google.maps.Map(element, options);

    addMarker({ lat: 59.37983574128731, lng: 28.186255232642093 });
    addMarker({ lat: 59.38528001107806, lng: 28.192306656464986 });
    addMarker({ lat: 59.37397745900335, lng: 28.20174929310566 });
    addMarker({ lat: 59.377300010389966, lng: 28.20278615435148 });
    addMarker({ lat: 59.38458783676808, lng: 28.18491753317914 });
    addMarker({ lat: 59.37474126301563, lng: 28.170214673403088 });
    addMarker({ lat: 59.364867932199466, lng: 28.18172660308546 });
    addMarker({ lat: 59.36299813821562, lng: 28.184054760411623 });
    addMarker({ lat: 59.393558840515205, lng: 28.159595304969766 });
    addMarker({ lat: 59.380855086542404, lng: 28.18850911367739 });
    addMarker({ lat: 59.39109946941314, lng: 28.173919536073733 });
    addMarker({ lat: 59.38788540920943, lng: 28.16978004669319 });
    addMarker({ lat: 59.378912459689076, lng: 28.18497360659935 });
    addMarker({ lat: 59.380338411828916, lng: 28.16686844071822 });
    // addMarker({ lat: , lng: }); 

    function addMarker(coordinates) {
        var Mymap = new google.maps.Marker({
            position: coordinates,
            map: myMap,
        })
    }


}
// map