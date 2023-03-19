$(document).ready(function () {
    var loc1 = {
        container: document.getElementById('location1'), // Required
        path: '/JSON/common/地標1.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "loc1"
    };

    var loc2 = {
        container: document.getElementById('location2'), // Required
        path: '/JSON/Southout/地標1.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "loc2"
    };

    var loc3 = {
        container: document.getElementById('location3'), // Required
        path: '/JSON/Southout/地標1.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "loc3"
    };

    var loc4 = {
        container: document.getElementById('location4'), // Required
        path: '/JSON/Southout/地標1.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "loc3"
    };

    var loc5 = {
        container: document.getElementById('location5'), // Required
        path: '/JSON/Southout/地標1.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "loc3"
    };

    var location1 = lottie.loadAnimation(loc1);
    var location2 = lottie.loadAnimation(loc2);
    var location3 = lottie.loadAnimation(loc3);
    var location4 = lottie.loadAnimation(loc4);
    var location5 = lottie.loadAnimation(loc5);

    $('.loc').hover(function () {
        switch (this.id) {
            case 'location1':
                $('#location1 > svg > g').css('transform','scale(4) translate(-35%,-30%');
                $('#txt1 ').css('display','block');
                break;
            case 'location2':
                $('#location2 > svg > g').css('transform','scale(4) translate(-35%,-30%');
                $('#txt2').css('display','block');
                break;
            case 'location3':
                $('#location3 > svg > g').css('transform','scale(4) translate(-35%,-30%');
                $('#txt3').css('display','block');
                break;
            case 'location4':
                $('#location4 > svg > g').css('transform','scale(4) translate(-35%,-30%');
                $('#txt4').css('display','block');
                break;
            case 'location5':
                $('#location5 > svg > g').css('transform','scale(4) translate(-35%,-30%');
                $('#txt5').css('display','block');
                break;
        }

    }, function () {
        switch (this.id) {
            case 'location1':
                $('#location1 > svg > g').css('transform','scale(3.5) translate(-35%,-30%)');
                $('#txt1').css('display','none');
                break;
            case 'location2':
                $('#location2 > svg > g').css('transform','scale(3.5) translate(-35%,-30%)');
                $('#txt2').css('display','none');
                break;
            case 'location3':
                $('#location3 > svg > g').css('transform','scale(3.5) translate(-35%,-30%)');
                $('#txt3').css('display','none');
                break;
            case 'location4':
                $('#location4 > svg > g').css('transform','scale(3.5) translate(-35%,-30%)');
                $('#txt4').css('display','none');
                break;
            case 'location5':
                $('#location5 > svg > g').css('transform','scale(3.5) translate(-35%,-30%)');
                $('#txt5').css('display','none');
                break;
        }
    });


});
