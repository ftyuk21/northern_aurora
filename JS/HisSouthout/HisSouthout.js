$(document).ready(function () {
    var boatAnim = {
        container: document.getElementById('boat'), // Required
        path: '/JSON/HisSouthout/第一層.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "boat"
    };

    var fishAnim = {
        container: document.getElementById('fish'), // Required
        path: '/JSON/HisSouthout/fishs.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: false, // Optional
        name: "fish"
    };

    var peopleAnim = {
        container: document.getElementById('people'), // Required
        path: '/JSON/HisSouthout/第3層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "people"
    };

    var cityAnim = {
        container: document.getElementById('city'), // Required
        path: '/JSON/HisSouthout/第4層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "city"
    };

    var boat = lottie.loadAnimation(boatAnim);
    var fish = lottie.loadAnimation(fishAnim);
    var people = lottie.loadAnimation(peopleAnim);
    var city = lottie.loadAnimation(cityAnim);

    $('#fish').hover(function () {
        fish.play();
        fish.onLoopComplete = () => {
            fish.playSegments([[60, 150]], true);
        }
    });

    $('#people').hover(function () {
        people.play();
    });
    $('#city').hover(function () {
        city.play();
    });

    var infoAnim = document.getElementsByClassName('fishInfo');
    var fishInfoArr = ["fishInfo1.json", "fishInfo2.json", "fishInfo3.json", "fishInfo4.json", "fishInfo5.json"];
    var infoContainer = [];
    for (var i = 0; i < infoAnim.length; i++) {
        var info = {
            container: infoAnim[i], // Required
            path: '/JSON/HisSouthout/' + fishInfoArr[i], // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "fishInfo"
        }
        infoContainer[i] = info;
    }
    var fish1 = lottie.loadAnimation(infoContainer[0]);
    var fish2 = lottie.loadAnimation(infoContainer[1]);
    var fish3 = lottie.loadAnimation(infoContainer[2]);
    var fish4 = lottie.loadAnimation(infoContainer[3]);
    var fish5 = lottie.loadAnimation(infoContainer[4]);



    $('.fish').hover(function () {
        switch (this.id) {
            case 'fish1':
                fish1.play();
                break;
            case 'fish1-1':
                fish1.play();
                break;
            case 'fish2':
                fish2.play();
                break;
            case 'fish3':
                fish3.play();
                break;
            case 'fish3-1':
                fish3.play();
                break;
            case 'fish4':
                fish4.play();
                break;
            case 'fish5':
                fish5.play();
                break;
            case 'fish5-1':
                fish5.play();
                break;
        }
    }, function () {
        fish1.stop();
        fish2.stop();
        fish3.stop();
        fish4.stop();
        fish5.stop();
    })


});