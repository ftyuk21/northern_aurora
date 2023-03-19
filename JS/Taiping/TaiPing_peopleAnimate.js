$(document).ready(function () {
    var people = {
        container: document.getElementById('people'), // Required
        path: '/JSON/TaiPing/people_new.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "people"
    };

    var owl = {
        container: document.getElementById('owl'), // Required
        path: '/JSON/TaiPing/bird.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "owl"
    }

    var owlIntro = {
        container: document.getElementById('owlIntro'), // Required
        path: '/JSON/TaiPing/鳥介紹.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "owlIN"
    }

    var peopleAnim = lottie.loadAnimation(people);
    var owlAnim = lottie.loadAnimation(owl);
    var owlIntroAnim = lottie.loadAnimation(owlIntro);

    $('#owl').hover(function () {
        $('#owl').css('cursor','help');
        owlIntroAnim.play();
    }, function () {
        owlIntroAnim.stop()
    });
})