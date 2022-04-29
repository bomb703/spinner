// map
function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 13,
        center: { lat: 59.38041044161922, lng: 28.175735864389836 }
    }

    var myMap = new google.maps.Map(element, options);

    var markers = [
        {
            coordinates: { lat: 59.37983574128731, lng: 28.186255232642093 },
            image: 'img/gym-marker.png',
            info: '<h1 class="title-map">MyFitness</h1> <img src="img/myfitness.jpg">'
        },
        {
            coordinates: { lat: 59.385208126697144, lng: 28.190759412664068 },
            image: 'img/gym-marker.png',
            info: '<h1 class="title-map">SpordiKeskus</h1> <img src="img/spordikeskus.jpg">'
        },
        {
            coordinates: { lat: 59.374014395693486, lng: 28.20167136717099 },
            image: 'img/gym-marker.png',
            info: '<h1 class="title-map"> Narva Linna Arendus</h1> <img src="img/lipovka.jpg">'
        },
        {
            coordinates: { lat: 59.38004564910027, lng: 28.189047755624916 },
            image: 'img/gym-marker.png',
            info: '<h1 class="title-map">Narva Baza</h1> <img src="img/baza.jpg">'
        },
        {
            coordinates: { lat: 59.38013, lng: 28.1671 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex2.jpg">'
        },
        {
            coordinates: { lat: 59.38001, lng: 28.16254 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex3.jpg">'
        },
        {
            coordinates: { lat: 59.38612, lng: 28.16425 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex4.jpg">'
        },
        {
            coordinates: { lat: 59.39216, lng: 28.16608 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex5.jpg">'
        },
        {
            coordinates: { lat: 59.39376, lng: 28.1605 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex6.jpg">'
        },
        {
            coordinates: { lat: 59.39221, lng: 28.17507 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex7.jpg">'
        },
        {
            coordinates: { lat: 59.39087, lng: 28.17784 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex8.jpg">'
        },
        {
            coordinates: { lat: 59.38945, lng: 28.17111 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex9.jpg">'
        },
        {
            coordinates: { lat: 59.38764, lng: 28.16939 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex10.jpg">'
        },
        {
            coordinates: { lat: 59.37964, lng: 28.17515 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex11.jpg">'
        },
        {
            coordinates: { lat: 59.37447, lng: 28.16994 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex12.jpg">'
        },
        {
            coordinates: { lat: 59.3652, lng: 28.17905 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex13.jpg">'
        },
        {
            coordinates: { lat: 59.37387, lng: 28.19979 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex14.jpg">'
        },
        {
            coordinates: { lat: 59.37377, lng: 28.20095 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex15.jpg">'
        },
        {
            coordinates: { lat: 59.37989, lng: 28.20454 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex16.jpg">'
        },
        {
            coordinates: { lat: 59.36357, lng: 28.1845 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex17.jpg">'
        },
        {
            coordinates: { lat: 59.36601, lng: 28.19214 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex18.jpg">'
        },
        {
            coordinates: { lat: 59.38758, lng: 28.19318 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex19.jpg">'
        },
        {
            coordinates: { lat: 59.3851, lng: 28.17213 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex20.jpg">'
        },
        {
            coordinates: { lat: 59.384567004474576, lng: 28.184972182608977 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex22.jpg">'
        },
        {
            coordinates: { lat: 59.38087697189372, lng: 28.188540740699942 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex21.jpg">'
        },
        {
            coordinates: { lat: 59.38093586130014, lng: 28.186387158782445 },
            image: 'img/sport-marker.png',
            info: '<img src="img/.jpg">'
        },
        {
            coordinates: { lat: 59.37859, lng: 28.17002 },
            image: 'img/sport-marker.png',
            info: '<img src="img/ex1.jpg">'
        },
    ];

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }


    addMarker();
    addMarker();


    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap,
        });

        if (properties.image) {
            marker.setIcon(properties.image);
        }

        if (properties.info) {
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

            marker.addListener('click', function () {
                InfoWindow.open(myMap, marker);
            })
        }

    }
}
// map